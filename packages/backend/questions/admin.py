from django.contrib import admin

from .models import Question, Skill, TestSession, TestSessionQuestion, UserStats


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ["skill_id", "domain", "name", "order"]
    list_filter = ["domain"]
    search_fields = ["skill_id", "name"]
    ordering = ["domain", "order"]


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ["question_id", "test", "domain", "skill_name", "difficulty", "question_type", "source"]
    list_filter = ["test", "domain", "difficulty", "skill_name", "source"]
    search_fields = ["question_id", "question_text", "skill_name"]
    readonly_fields = ["created_at", "updated_at"]

    fieldsets = (
        ("Identification", {"fields": ("question_id", "assessment", "source")}),
        ("Classification", {"fields": ("test", "domain", "skill_name", "skill_ref", "difficulty")}),
        ("Question Content", {"fields": ("question_type", "passage", "question_text")}),
        ("Answer Choices", {"fields": ("choice_a", "choice_b", "choice_c", "choice_d"), "classes": ("collapse",)}),
        ("Correct Answer", {"fields": ("correct_answer", "explanation")}),
        ("Metadata", {"fields": ("created_at", "updated_at"), "classes": ("collapse",)}),
    )


class TestSessionQuestionInline(admin.TabularInline):
    model = TestSessionQuestion
    extra = 0
    readonly_fields = ["order", "question", "user_answer", "is_correct", "is_flagged"]
    can_delete = False


@admin.register(TestSession)
class TestSessionAdmin(admin.ModelAdmin):
    list_display = ["id", "user", "test_type", "status", "total_questions", "correct_count", "score_percentage", "points_earned", "started_at"]
    list_filter = ["test_type", "status", "started_at"]
    search_fields = ["user__username", "user__email"]
    readonly_fields = ["started_at", "completed_at", "correct_count", "score_percentage", "points_earned"]
    inlines = [TestSessionQuestionInline]


@admin.register(UserStats)
class UserStatsAdmin(admin.ModelAdmin):
    list_display = ["user", "total_points", "rank", "tests_completed", "accuracy", "current_streak", "best_streak"]
    list_filter = ["current_streak"]
    search_fields = ["user__username", "user__email"]
    readonly_fields = ["rank", "accuracy", "points_to_next_rank", "next_rank", "created_at", "updated_at"]
    ordering = ["-total_points"]

    def rank(self, obj):
        return obj.rank

    def accuracy(self, obj):
        return f"{obj.accuracy}%"
