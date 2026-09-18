from django.db import transaction
from django.db.models import Count
from django.utils import timezone
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Question, QuestionAttempt, Skill, TestSession, TestSessionQuestion, UserNote, UserStats
from .serializers import (
    LeaderboardEntrySerializer,
    QuestionAttemptSerializer,
    QuestionCreateSerializer,
    QuestionDetailSerializer,
    QuestionListSerializer,
    SkillSerializer,
    TestSessionListSerializer,
    TestSessionResultSerializer,
    TestSessionSerializer,
    UserNoteSerializer,
    UserStatsSerializer,
)


class SkillViewSet(viewsets.ReadOnlyModelViewSet):
    """
    ViewSet for SAT Math skills.

    Provides endpoints for:
    - GET /api/skills/ - List all skills
    - GET /api/skills/{id}/ - Get skill detail
    - GET /api/skills/by_domain/ - Get skills grouped by domain
    """

    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        queryset = Skill.objects.all()
        domain = self.request.query_params.get("domain")
        if domain:
            queryset = queryset.filter(domain=domain)
        return queryset

    @action(detail=False, methods=["get"])
    def by_domain(self, request):
        """Get skills grouped by domain."""
        skills = Skill.objects.all()
        grouped = {}
        for skill in skills:
            if skill.domain not in grouped:
                grouped[skill.domain] = []
            grouped[skill.domain].append(SkillSerializer(skill).data)
        return Response(grouped)


class QuestionViewSet(viewsets.ModelViewSet):
    """
    ViewSet for SAT questions.

    Provides endpoints for:
    - GET /api/questions/ - List all questions
    - GET /api/questions/{id}/ - Get question detail
    - GET /api/questions/random/ - Get random questions for quiz
    - GET /api/questions/stats/ - Get question statistics
    """

    queryset = Question.objects.all()

    def get_permissions(self):
        """Allow public read access, require auth for modifications.

        `retrieve` is deliberately NOT public: it serves QuestionDetailSerializer,
        which carries correct_answer/explanation, so anonymous access would let
        anyone walk the ids and scrape the entire answer key.
        """
        if self.action in ["list", "random", "stats", "sample"]:
            return [AllowAny()]
        return [IsAuthenticated()]

    def get_serializer_class(self):
        if self.action in ["list", "random"]:
            return QuestionListSerializer
        # `sample` feeds the public landing-page demo, so it must not ship the
        # answer key with the questions; the demo grades via /api/check-answer/.
        if self.action == "sample":
            return QuestionListSerializer
        if self.action == "retrieve":
            return QuestionDetailSerializer
        return QuestionCreateSerializer

    def get_queryset(self):
        """Filter questions based on query parameters."""
        queryset = Question.objects.all()

        # Filter by test type (Math, Reading and Writing)
        test = self.request.query_params.get("test")
        if test:
            queryset = queryset.filter(test=test)

        # Filter by domain
        domain = self.request.query_params.get("domain")
        if domain:
            queryset = queryset.filter(domain=domain)

        # Filter by skill
        skill = self.request.query_params.get("skill")
        if skill:
            queryset = queryset.filter(skill_name__icontains=skill)

        # Filter by difficulty
        difficulty = self.request.query_params.get("difficulty")
        if difficulty:
            queryset = queryset.filter(difficulty=difficulty)

        return queryset

    @action(detail=False, methods=["get"])
    def random(self, request):
        """Get random questions for a quiz."""
        count = int(request.query_params.get("count", 5))
        count = min(count, 50)  # Limit to 50 questions max

        queryset = self.get_queryset().order_by("?")[:count]
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=["get"])
    def sample(self, request):
        """Get sample questions for the landing page demo."""
        count = int(request.query_params.get("count", 4))
        count = min(count, 10)

        # Try to get a mix of different skills/domains
        queryset = self.get_queryset().order_by("?")[:count]
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=["get"])
    def stats(self, request):
        """Get statistics about available questions."""
        queryset = Question.objects.all()

        stats = {
            "total": queryset.count(),
            "by_test": dict(queryset.values_list("test").annotate(count=Count("id"))),
            "by_domain": dict(queryset.values_list("domain").annotate(count=Count("id"))),
            "by_difficulty": dict(queryset.values_list("difficulty").annotate(count=Count("id"))),
            "skills": list(queryset.values_list("skill_name", flat=True).distinct()),
        }

        return Response(stats)

    @action(detail=False, methods=["post"])
    def upload(self, request):
        """Upload a batch of questions (teacher only)."""
        if getattr(request.user, "role", None) != "teacher":
            return Response(
                {"error": "Only teachers can upload questions"},
                status=status.HTTP_403_FORBIDDEN,
            )

        questions_data = request.data.get("questions", [])
        if not questions_data:
            return Response(
                {"error": "No questions provided"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Domain prefix map
        DOMAIN_PREFIX = {
            "Algebra": "ALG",
            "Advanced Math": "ADV",
            "Geometry and Trigonometry": "GEO",
            "Problem-Solving and Data Analysis": "PDA",
        }

        # Difficulty code map
        DIFF_CODE = {"easy": "E", "medium": "M", "hard": "H"}

        created_questions = []
        errors = []

        with transaction.atomic():
            # Clear is_new from all previous questions
            Question.objects.filter(is_new=True).update(is_new=False)

            for idx, q in enumerate(questions_data):
                domain = q.get("domain", "")
                difficulty = q.get("difficulty", "")
                prefix = DOMAIN_PREFIX.get(domain)
                diff_code = DIFF_CODE.get(difficulty)

                if not prefix or not diff_code:
                    errors.append({"index": idx, "error": f"Invalid domain or difficulty"})
                    continue

                # Find next available ID for this domain-difficulty combo
                id_prefix = f"{prefix}-{diff_code}-"
                last_q = (
                    Question.objects.filter(question_id__startswith=id_prefix)
                    .order_by("-question_id")
                    .first()
                )

                if last_q:
                    last_num = int(last_q.question_id.split("-")[-1])
                    next_num = last_num + 1
                else:
                    next_num = 1

                question_id = f"{id_prefix}{next_num:03d}"

                try:
                    question = Question.objects.create(
                        question_id=question_id,
                        assessment="SAT",
                        test="Math",
                        domain=domain,
                        skill_name=q.get("skill_name", domain),
                        difficulty=difficulty,
                        question_type="multiple_choice",
                        question_text=q.get("question_text", ""),
                        choice_a=q.get("choice_a", ""),
                        choice_b=q.get("choice_b", ""),
                        choice_c=q.get("choice_c", ""),
                        choice_d=q.get("choice_d", ""),
                        correct_answer=q.get("correct_answer", ""),
                        explanation=q.get("explanation", ""),
                        source="custom",
                        is_new=True,
                    )
                    created_questions.append(question_id)
                except Exception as e:
                    errors.append({"index": idx, "error": str(e)})

        return Response(
            {
                "created": len(created_questions),
                "question_ids": created_questions,
                "errors": errors,
            },
            status=status.HTTP_201_CREATED if created_questions else status.HTTP_400_BAD_REQUEST,
        )

    @action(detail=False, methods=["post"], url_path="upload-pdf")
    def upload_pdf(self, request):
        """Upload a PDF file for question extraction (teacher only).

        Accepts the PDF, validates it, extracts questions using PyMuPDF,
        and returns them for the teacher to review before submitting.
        """
        if getattr(request.user, "role", None) != "teacher":
            return Response(
                {"error": "Only teachers can upload questions"},
                status=status.HTTP_403_FORBIDDEN,
            )

        pdf_file = request.FILES.get("file")
        if not pdf_file:
            return Response(
                {"error": "No file provided"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if not pdf_file.name.lower().endswith(".pdf"):
            return Response(
                {"error": "Only PDF files are accepted"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            from .pdf_parser import extract_text_from_pdf, parse_questions

            pdf_bytes = pdf_file.read()
            text = extract_text_from_pdf(pdf_bytes)
            questions = parse_questions(text)

            if not questions:
                return Response(
                    {"error": "No questions could be extracted from this PDF. Please check the format."},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            # Separate multiple-choice from free-response
            mc_questions = []
            fr_count = 0
            for q in questions:
                is_fr = q.pop("is_free_response", True)
                if is_fr:
                    fr_count += 1
                else:
                    mc_questions.append(q)

            return Response(
                {
                    "questions": mc_questions,
                    "free_response_count": fr_count,
                    "total_extracted": len(mc_questions) + fr_count,
                }
            )
        except Exception as e:
            return Response(
                {"error": f"Failed to parse PDF: {str(e)}"},
                status=status.HTTP_400_BAD_REQUEST,
            )

    @action(detail=True, methods=["post"])
    def check_answer(self, request, pk=None):
        """Check if the submitted answer is correct."""
        question = self.get_object()
        submitted_answer = request.data.get("answer")

        is_correct = submitted_answer == question.correct_answer

        return Response(
            {
                "correct": is_correct,
                "correct_answer": question.correct_answer,
                "explanation": question.explanation,
            }
        )


class QuestionAttemptViewSet(viewsets.ModelViewSet):
    """ViewSet for tracking user's question attempts."""

    serializer_class = QuestionAttemptSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return QuestionAttempt.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=False, methods=["get"])
    def by_question(self, request):
        """Get user's attempts for a specific question."""
        question_id = request.query_params.get("question_id")
        if not question_id:
            return Response({"error": "question_id required"}, status=status.HTTP_400_BAD_REQUEST)

        attempts = self.get_queryset().filter(question_id=question_id)
        serializer = self.get_serializer(attempts, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=["get"])
    def progress(self, request):
        """Get user's progress across all questions."""
        user = request.user
        attempts = QuestionAttempt.objects.filter(user=user)

        total_attempts = attempts.count()
        correct_attempts = attempts.filter(is_correct=True).count()
        unique_questions = attempts.values("question").distinct().count()
        mastered_questions = attempts.filter(is_correct=True).values("question").distinct().count()

        # Count by difficulty
        by_difficulty = {}
        for difficulty in ["easy", "medium", "hard"]:
            q_ids = Question.objects.filter(difficulty=difficulty).values_list("id", flat=True)
            attempted = attempts.filter(question_id__in=q_ids).values("question").distinct().count()
            mastered = attempts.filter(is_correct=True, question_id__in=q_ids).values("question").distinct().count()
            by_difficulty[difficulty] = {"attempted": attempted, "mastered": mastered}

        return Response(
            {
                "total_attempts": total_attempts,
                "correct_attempts": correct_attempts,
                "accuracy": round(correct_attempts / total_attempts * 100, 1) if total_attempts else 0,
                "unique_questions_attempted": unique_questions,
                "mastered_questions": mastered_questions,
                "by_difficulty": by_difficulty,
            }
        )


class UserNoteViewSet(viewsets.ModelViewSet):
    """ViewSet for user's notes on questions."""

    serializer_class = UserNoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return UserNote.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.content = request.data.get("content", instance.content)
        instance.save()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    @action(detail=False, methods=["get"])
    def by_question(self, request):
        """Get user's note for a specific question."""
        question_id = request.query_params.get("question_id")
        if not question_id:
            return Response({"error": "question_id required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            note = UserNote.objects.get(user=request.user, question_id=question_id)
            serializer = self.get_serializer(note)
            return Response(serializer.data)
        except UserNote.DoesNotExist:
            return Response({"note": None})


class CheckAnswerView(APIView):
    """Submit an answer and get instant feedback with explanation."""

    permission_classes = [AllowAny]  # Allow practice without login
    # Public and it returns the correct answer, so it is the remaining scraping
    # vector for the question bank. Rate limited via DEFAULT_THROTTLE_RATES.
    throttle_scope = "check_answer"

    def post(self, request):
        question_id = request.data.get("question_id")
        answer = request.data.get("answer")
        time_spent = request.data.get("time_spent", 0)

        if not question_id or not answer:
            return Response({"error": "question_id and answer required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            question = Question.objects.get(question_id=question_id)
        except Question.DoesNotExist:
            return Response({"error": "Question not found"}, status=status.HTTP_404_NOT_FOUND)

        # Compare answers - handle both letter choices (A/B/C/D) and grid-in numbers
        user_answer = str(answer).strip()
        correct_answer = str(question.correct_answer).strip()

        # For letter choices, do case-insensitive comparison
        # For grid-in (numeric), do exact comparison
        if correct_answer.upper() in ["A", "B", "C", "D"]:
            is_correct = user_answer.upper() == correct_answer.upper()
        else:
            # Grid-in: compare as numbers (e.g., "17" == 17)
            try:
                is_correct = float(user_answer) == float(correct_answer)
            except ValueError:
                is_correct = user_answer == correct_answer

        # Only save attempt if user is authenticated
        if request.user.is_authenticated:
            # Get next attempt number
            last_attempt = (
                QuestionAttempt.objects.filter(user=request.user, question=question).order_by("-attempt_number").first()
            )
            attempt_number = (last_attempt.attempt_number + 1) if last_attempt else 1

            # Create attempt
            QuestionAttempt.objects.create(
                user=request.user,
                question=question,
                answer=user_answer,
                is_correct=is_correct,
                attempt_number=attempt_number,
                time_spent_seconds=time_spent,
            )

        return Response(
            {
                "is_correct": is_correct,
                "correct_answer": question.correct_answer,
                "explanation": question.explanation,
            }
        )


class TestSessionViewSet(viewsets.ModelViewSet):
    """
    ViewSet for timed test sessions.

    Endpoints:
    - POST /api/tests/start/ - Start a new test session
    - GET /api/tests/{id}/ - Get session details (for resume)
    - GET /api/tests/current/ - Check for in-progress session
    - POST /api/tests/{id}/answer/ - Save an answer
    - POST /api/tests/{id}/flag/ - Toggle flag on a question
    - POST /api/tests/{id}/submit/ - Submit test and get results
    - GET /api/tests/history/ - List past test sessions
    """

    permission_classes = [IsAuthenticated]

    # Test type configurations
    TEST_CONFIGS = {
        "mini": {"questions": 5, "time_seconds": 10 * 60},  # 10 minutes
        "section": {"questions": 20, "time_seconds": 35 * 60},  # 35 minutes
        "full": {"questions": 55, "time_seconds": 120 * 60},  # 120 minutes
    }

    def get_queryset(self):
        return TestSession.objects.filter(user=self.request.user)

    def get_serializer_class(self):
        if self.action == "history":
            return TestSessionListSerializer
        if self.action == "submit" or (self.action == "retrieve" and self.get_object().status != "in_progress"):
            return TestSessionResultSerializer
        return TestSessionSerializer

    def retrieve(self, request, *args, **kwargs):
        """Get session details - includes questions for resume capability."""
        session = self.get_object()
        if session.status == "in_progress":
            serializer = TestSessionSerializer(session)
        else:
            serializer = TestSessionResultSerializer(session)
        return Response(serializer.data)

    @action(detail=False, methods=["post"])
    def start(self, request):
        """Start a new test session."""
        test_type = request.data.get("test_type", "mini")

        if test_type not in self.TEST_CONFIGS:
            return Response(
                {"error": f"Invalid test_type. Must be one of: {', '.join(self.TEST_CONFIGS.keys())}"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Check if user has an in-progress session
        existing_session = TestSession.objects.filter(user=request.user, status="in_progress").first()
        if existing_session:
            # Check if time has expired
            if existing_session.time_remaining_seconds <= 0:
                existing_session.status = "timed_out"
                existing_session.completed_at = timezone.now()
                existing_session.save()
            else:
                serializer = TestSessionSerializer(existing_session)
                return Response(serializer.data, status=status.HTTP_200_OK)

        config = self.TEST_CONFIGS[test_type]

        # Balance new and existing questions
        total_needed = config["questions"]
        new_quota = {"mini": 2, "section": 5, "full": 10}.get(test_type, 2)

        new_questions = list(
            Question.objects.filter(is_new=True).order_by("?")[:new_quota]
        )
        remaining = total_needed - len(new_questions)
        new_ids = [q.id for q in new_questions]

        existing_questions = list(
            Question.objects.exclude(id__in=new_ids).order_by("?")[:remaining]
        )

        import random
        questions = new_questions + existing_questions
        random.shuffle(questions)

        if len(questions) < config["questions"]:
            return Response(
                {"error": f"Not enough questions available. Need {config['questions']}, found {len(questions)}"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Create test session
        session = TestSession.objects.create(
            user=request.user,
            test_type=test_type,
            time_limit_seconds=config["time_seconds"],
            total_questions=config["questions"],
        )

        # Create session questions
        for order, question in enumerate(questions, start=1):
            TestSessionQuestion.objects.create(session=session, question=question, order=order)

        serializer = TestSessionSerializer(session)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=["get"])
    def current(self, request):
        """Check for an in-progress session."""
        session = TestSession.objects.filter(user=request.user, status="in_progress").first()

        if not session:
            return Response({"has_session": False})

        # Check if time has expired
        if session.time_remaining_seconds <= 0:
            session.status = "timed_out"
            session.completed_at = timezone.now()
            session.save()
            return Response({"has_session": False})

        serializer = TestSessionSerializer(session)
        return Response({"has_session": True, "session": serializer.data})

    @action(detail=True, methods=["post"])
    def answer(self, request, pk=None):
        """Save an answer for a question."""
        session = self.get_object()

        if session.status != "in_progress":
            return Response({"error": "Cannot modify a completed test"}, status=status.HTTP_400_BAD_REQUEST)

        # Check if time has expired
        if session.time_remaining_seconds <= 0:
            session.status = "timed_out"
            session.completed_at = timezone.now()
            session.save()
            return Response({"error": "Test time has expired"}, status=status.HTTP_400_BAD_REQUEST)

        question_order = request.data.get("question_order")
        answer = request.data.get("answer")

        if question_order is None:
            return Response({"error": "question_order is required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            session_question = session.session_questions.get(order=question_order)
        except TestSessionQuestion.DoesNotExist:
            return Response({"error": "Question not found in this session"}, status=status.HTTP_404_NOT_FOUND)

        session_question.user_answer = answer
        session_question.save()

        return Response({"success": True, "question_order": question_order, "answer": answer})

    @action(detail=True, methods=["post"])
    def flag(self, request, pk=None):
        """Toggle flag on a question."""
        session = self.get_object()

        if session.status != "in_progress":
            return Response({"error": "Cannot modify a completed test"}, status=status.HTTP_400_BAD_REQUEST)

        question_order = request.data.get("question_order")

        if question_order is None:
            return Response({"error": "question_order is required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            session_question = session.session_questions.get(order=question_order)
        except TestSessionQuestion.DoesNotExist:
            return Response({"error": "Question not found in this session"}, status=status.HTTP_404_NOT_FOUND)

        session_question.is_flagged = not session_question.is_flagged
        session_question.save()

        return Response({"success": True, "question_order": question_order, "is_flagged": session_question.is_flagged})

    @action(detail=True, methods=["post"])
    def submit(self, request, pk=None):
        """Submit the test and calculate score."""
        session = self.get_object()

        if session.status != "in_progress":
            return Response({"error": "Test has already been submitted"}, status=status.HTTP_400_BAD_REQUEST)

        # Process all answers from request (in case of final submission with pending answers)
        answers = request.data.get("answers", {})
        for order_str, answer in answers.items():
            try:
                session_question = session.session_questions.get(order=int(order_str))
                session_question.user_answer = answer
                session_question.save()
            except (TestSessionQuestion.DoesNotExist, ValueError):
                pass

        # Calculate score and points
        correct_count = 0
        total_points = 0

        # Points per difficulty
        DIFFICULTY_POINTS = {"easy": 10, "medium": 20, "hard": 30}

        for sq in session.session_questions.all():
            if sq.user_answer:
                correct_answer = sq.question.correct_answer.strip().upper()
                user_answer = sq.user_answer.strip().upper()

                if correct_answer in ["A", "B", "C", "D"]:
                    sq.is_correct = user_answer == correct_answer
                else:
                    try:
                        sq.is_correct = float(sq.user_answer) == float(correct_answer)
                    except ValueError:
                        sq.is_correct = sq.user_answer == sq.question.correct_answer
                sq.save()

                if sq.is_correct:
                    correct_count += 1
                    # Add points based on difficulty
                    total_points += DIFFICULTY_POINTS.get(sq.question.difficulty, 10)
            else:
                sq.is_correct = False
                sq.save()

        # Calculate bonuses
        score_percentage = round((correct_count / session.total_questions) * 100, 2) if session.total_questions > 0 else 0

        # Completion bonus
        completion_bonus = 50

        # Accuracy bonus
        accuracy_bonus = 0
        if score_percentage == 100:
            accuracy_bonus = 50
        elif score_percentage >= 90:
            accuracy_bonus = 30
        elif score_percentage >= 80:
            accuracy_bonus = 15

        # Speed bonus (up to 20% extra for finishing with time remaining)
        speed_bonus = 0
        time_used = (timezone.now() - session.started_at).total_seconds()
        time_remaining_ratio = max(0, (session.time_limit_seconds - time_used) / session.time_limit_seconds)
        if time_remaining_ratio > 0:
            speed_bonus = int(total_points * 0.2 * time_remaining_ratio)

        # Total points for this test
        total_points += completion_bonus + accuracy_bonus + speed_bonus

        # Update session
        session.status = "completed"
        session.completed_at = timezone.now()
        session.correct_count = correct_count
        session.score_percentage = score_percentage
        session.points_earned = total_points
        session.save()

        # Update user stats
        user_stats = UserStats.get_or_create_for_user(request.user)
        user_stats.add_points(total_points)
        user_stats.tests_completed += 1
        user_stats.questions_answered += session.total_questions
        user_stats.correct_answers += correct_count
        user_stats.save()

        serializer = TestSessionResultSerializer(session)
        return Response(serializer.data)

    @action(detail=False, methods=["get"])
    def history(self, request):
        """Get user's test history."""
        sessions = self.get_queryset().exclude(status="in_progress").order_by("-started_at")
        serializer = TestSessionListSerializer(sessions, many=True)
        return Response(serializer.data)


class LeaderboardViewSet(viewsets.ViewSet):
    """
    ViewSet for leaderboard and user stats.

    Endpoints:
    - GET /api/leaderboard/ - Get global leaderboard (all-time)
    - GET /api/leaderboard/weekly/ - Get weekly leaderboard
    - GET /api/leaderboard/me/ - Get current user's stats
    """

    permission_classes = [IsAuthenticated]

    def list(self, request):
        """Get global leaderboard (top 50 by total points)."""
        # Get top users
        top_users = UserStats.objects.select_related("user").order_by("-total_points")[:50]

        # Build positions dict
        positions = {stats.user_id: idx + 1 for idx, stats in enumerate(top_users)}

        # Get current user's stats and position
        user_stats = UserStats.get_or_create_for_user(request.user)
        user_position = UserStats.objects.filter(total_points__gt=user_stats.total_points).count() + 1

        serializer = LeaderboardEntrySerializer(top_users, many=True, context={"positions": positions})

        return Response({
            "leaderboard": serializer.data,
            "user_position": user_position,
            "user_stats": UserStatsSerializer(user_stats).data,
            "total_users": UserStats.objects.count(),
        })

    @action(detail=False, methods=["get"])
    def weekly(self, request):
        """Get weekly leaderboard (top 50 by weekly points)."""
        from datetime import date, timedelta

        # Calculate current week start (Monday)
        today = date.today()
        week_start = today - timedelta(days=today.weekday())

        # Get top users this week
        top_users = (
            UserStats.objects.select_related("user")
            .filter(week_start=week_start, weekly_points__gt=0)
            .order_by("-weekly_points")[:50]
        )

        # Build positions dict
        positions = {stats.user_id: idx + 1 for idx, stats in enumerate(top_users)}

        # Get current user's stats
        user_stats = UserStats.get_or_create_for_user(request.user)
        user_stats.reset_weekly_if_needed()
        user_stats.save()

        # User's weekly position
        user_weekly_position = (
            UserStats.objects.filter(week_start=week_start, weekly_points__gt=user_stats.weekly_points).count() + 1
        )

        serializer = LeaderboardEntrySerializer(top_users, many=True, context={"positions": positions})

        return Response({
            "leaderboard": serializer.data,
            "user_position": user_weekly_position,
            "user_stats": UserStatsSerializer(user_stats).data,
            "week_start": week_start.isoformat(),
        })

    @action(detail=False, methods=["get"])
    def monthly(self, request):
        """Get monthly leaderboard (top 50 by monthly points)."""
        from datetime import date

        # Calculate current month start
        today = date.today()
        month_start = today.replace(day=1)

        # Get top users this month
        top_users = (
            UserStats.objects.select_related("user")
            .filter(month_start=month_start, monthly_points__gt=0)
            .order_by("-monthly_points")[:50]
        )

        # Build positions dict
        positions = {stats.user_id: idx + 1 for idx, stats in enumerate(top_users)}

        # Get current user's stats
        user_stats = UserStats.get_or_create_for_user(request.user)
        user_stats.reset_monthly_if_needed()
        user_stats.save()

        # User's monthly position
        user_monthly_position = (
            UserStats.objects.filter(month_start=month_start, monthly_points__gt=user_stats.monthly_points).count() + 1
        )

        serializer = LeaderboardEntrySerializer(top_users, many=True, context={"positions": positions})

        return Response({
            "leaderboard": serializer.data,
            "user_position": user_monthly_position,
            "user_stats": UserStatsSerializer(user_stats).data,
            "month_start": month_start.isoformat(),
        })

    @action(detail=False, methods=["get"])
    def me(self, request):
        """Get current user's stats."""
        user_stats = UserStats.get_or_create_for_user(request.user)
        user_stats.reset_weekly_if_needed()
        user_stats.reset_monthly_if_needed()
        user_stats.save()

        # Calculate user's global position
        global_position = UserStats.objects.filter(total_points__gt=user_stats.total_points).count() + 1

        # Calculate user's weekly position
        from datetime import date, timedelta
        today = date.today()
        week_start = today - timedelta(days=today.weekday())
        weekly_position = (
            UserStats.objects.filter(week_start=week_start, weekly_points__gt=user_stats.weekly_points).count() + 1
        )

        # Calculate user's monthly position
        month_start = today.replace(day=1)
        monthly_position = (
            UserStats.objects.filter(month_start=month_start, monthly_points__gt=user_stats.monthly_points).count() + 1
        )

        serializer = UserStatsSerializer(user_stats)
        return Response({
            "stats": serializer.data,
            "global_position": global_position,
            "weekly_position": weekly_position,
            "monthly_position": monthly_position,
            "total_users": UserStats.objects.count(),
        })
