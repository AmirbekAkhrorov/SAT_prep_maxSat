from django.db.models import Count
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Question, QuestionAttempt, UserNote
from .serializers import (
    QuestionAttemptSerializer,
    QuestionCreateSerializer,
    QuestionDetailSerializer,
    QuestionListSerializer,
    UserNoteSerializer,
)


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
        """Allow public read access, require auth for modifications."""
        if self.action in ["list", "retrieve", "random", "stats", "sample"]:
            return [AllowAny()]
        return [IsAuthenticated()]

    def get_serializer_class(self):
        if self.action in ["list", "random", "sample"]:
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
            queryset = queryset.filter(skill__icontains=skill)

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
            "skills": list(queryset.values_list("skill", flat=True).distinct()),
        }

        return Response(stats)

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
