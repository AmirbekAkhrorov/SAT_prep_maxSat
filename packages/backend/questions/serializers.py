from rest_framework import serializers

from .models import Question, QuestionAttempt, Skill, TestSession, TestSessionQuestion, UserNote, UserStats


class SkillSerializer(serializers.ModelSerializer):
    """Serializer for Math skills."""

    class Meta:
        model = Skill
        fields = ["id", "skill_id", "domain", "name", "description", "order"]


class QuestionListSerializer(serializers.ModelSerializer):
    """Serializer for listing questions (without correct answer for quiz mode)."""

    options = serializers.SerializerMethodField()
    type = serializers.CharField(source="test")
    skill = serializers.CharField(source="skill_name")

    class Meta:
        model = Question
        fields = [
            "id",
            "question_id",
            "type",
            "domain",
            "skill",
            "difficulty",
            "question_type",
            "passage",
            "question_text",
            "options",
        ]

    def get_options(self, obj):
        """Format choices for frontend compatibility."""
        return obj.choices


class QuestionDetailSerializer(serializers.ModelSerializer):
    """Serializer with full details including correct answer and explanation."""

    options = serializers.SerializerMethodField()
    type = serializers.CharField(source="test")
    skill = serializers.CharField(source="skill_name")

    class Meta:
        model = Question
        fields = [
            "id",
            "question_id",
            "assessment",
            "type",
            "domain",
            "skill",
            "difficulty",
            "question_type",
            "passage",
            "question_text",
            "options",
            "correct_answer",
            "explanation",
        ]

    def get_options(self, obj):
        """Format choices for frontend compatibility."""
        return obj.choices


class QuestionCreateSerializer(serializers.ModelSerializer):
    """Serializer for creating/updating questions."""

    class Meta:
        model = Question
        fields = "__all__"


class QuestionAttemptSerializer(serializers.ModelSerializer):
    """Serializer for question attempts."""

    class Meta:
        model = QuestionAttempt
        fields = [
            "id",
            "question",
            "answer",
            "is_correct",
            "attempt_number",
            "time_spent_seconds",
            "created_at",
        ]
        read_only_fields = ["id", "created_at", "is_correct"]


class UserNoteSerializer(serializers.ModelSerializer):
    """Serializer for user notes."""

    class Meta:
        model = UserNote
        fields = ["id", "question", "content", "created_at", "updated_at"]
        read_only_fields = ["id", "created_at", "updated_at"]


class TestSessionQuestionSerializer(serializers.ModelSerializer):
    """Serializer for test session questions (without correct answers during test)."""

    question_id = serializers.CharField(source="question.question_id")
    question_text = serializers.CharField(source="question.question_text")
    passage = serializers.CharField(source="question.passage", allow_null=True)
    options = serializers.SerializerMethodField()
    domain = serializers.CharField(source="question.domain")
    skill = serializers.CharField(source="question.skill_name")
    difficulty = serializers.CharField(source="question.difficulty")

    class Meta:
        model = TestSessionQuestion
        fields = [
            "id",
            "order",
            "question_id",
            "question_text",
            "passage",
            "options",
            "domain",
            "skill",
            "difficulty",
            "user_answer",
            "is_flagged",
        ]

    def get_options(self, obj):
        return obj.question.choices


class TestSessionQuestionReviewSerializer(serializers.ModelSerializer):
    """Serializer for reviewing test questions (with correct answers and explanations)."""

    question_id = serializers.CharField(source="question.question_id")
    question_text = serializers.CharField(source="question.question_text")
    passage = serializers.CharField(source="question.passage", allow_null=True)
    options = serializers.SerializerMethodField()
    domain = serializers.CharField(source="question.domain")
    skill = serializers.CharField(source="question.skill_name")
    difficulty = serializers.CharField(source="question.difficulty")
    correct_answer = serializers.CharField(source="question.correct_answer")
    explanation = serializers.CharField(source="question.explanation")

    class Meta:
        model = TestSessionQuestion
        fields = [
            "id",
            "order",
            "question_id",
            "question_text",
            "passage",
            "options",
            "domain",
            "skill",
            "difficulty",
            "user_answer",
            "is_correct",
            "is_flagged",
            "correct_answer",
            "explanation",
        ]

    def get_options(self, obj):
        return obj.question.choices


class TestSessionSerializer(serializers.ModelSerializer):
    """Serializer for test sessions (during test)."""

    questions = TestSessionQuestionSerializer(source="session_questions", many=True, read_only=True)
    time_remaining_seconds = serializers.IntegerField(read_only=True)

    class Meta:
        model = TestSession
        fields = [
            "id",
            "test_type",
            "status",
            "time_limit_seconds",
            "started_at",
            "total_questions",
            "time_remaining_seconds",
            "questions",
        ]


class TestSessionResultSerializer(serializers.ModelSerializer):
    """Serializer for test session results (after completion)."""

    questions = TestSessionQuestionReviewSerializer(source="session_questions", many=True, read_only=True)

    class Meta:
        model = TestSession
        fields = [
            "id",
            "test_type",
            "status",
            "time_limit_seconds",
            "started_at",
            "completed_at",
            "total_questions",
            "correct_count",
            "score_percentage",
            "points_earned",
            "questions",
        ]


class TestSessionListSerializer(serializers.ModelSerializer):
    """Serializer for listing test sessions (history)."""

    class Meta:
        model = TestSession
        fields = [
            "id",
            "test_type",
            "status",
            "time_limit_seconds",
            "started_at",
            "completed_at",
            "total_questions",
            "correct_count",
            "score_percentage",
            "points_earned",
        ]


class UserStatsSerializer(serializers.ModelSerializer):
    """Serializer for user statistics."""

    username = serializers.CharField(source="user.username", read_only=True)
    rank = serializers.CharField(read_only=True)
    accuracy = serializers.FloatField(read_only=True)
    points_to_next_rank = serializers.IntegerField(read_only=True)
    next_rank = serializers.CharField(read_only=True)

    class Meta:
        model = UserStats
        fields = [
            "username",
            "total_points",
            "weekly_points",
            "monthly_points",
            "tests_completed",
            "questions_answered",
            "correct_answers",
            "accuracy",
            "current_streak",
            "best_streak",
            "rank",
            "points_to_next_rank",
            "next_rank",
        ]


class LeaderboardEntrySerializer(serializers.ModelSerializer):
    """Serializer for leaderboard entries."""

    username = serializers.CharField(source="user.username", read_only=True)
    rank = serializers.CharField(read_only=True)
    position = serializers.SerializerMethodField()

    class Meta:
        model = UserStats
        fields = [
            "username",
            "total_points",
            "weekly_points",
            "monthly_points",
            "tests_completed",
            "accuracy",
            "rank",
            "position",
        ]

    def get_position(self, obj):
        """Get the user's position in the leaderboard."""
        # This is set by the view when creating the serializer context
        return self.context.get("positions", {}).get(obj.user_id, 0)
