from rest_framework import serializers

from .models import Question, QuestionAttempt, UserNote


class QuestionListSerializer(serializers.ModelSerializer):
    """Serializer for listing questions (without correct answer for quiz mode)."""

    options = serializers.SerializerMethodField()
    type = serializers.CharField(source="test")

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
