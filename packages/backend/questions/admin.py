from django.contrib import admin

from .models import Question


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ["question_id", "test", "domain", "skill", "difficulty", "question_type"]
    list_filter = ["test", "domain", "difficulty", "skill"]
    search_fields = ["question_id", "question_text", "skill"]
    readonly_fields = ["created_at", "updated_at"]

    fieldsets = (
        ("Identification", {"fields": ("question_id", "assessment")}),
        ("Classification", {"fields": ("test", "domain", "skill", "difficulty")}),
        ("Question Content", {"fields": ("question_type", "passage", "question_text")}),
        ("Answer Choices", {"fields": ("choice_a", "choice_b", "choice_c", "choice_d"), "classes": ("collapse",)}),
        ("Correct Answer", {"fields": ("correct_answer", "explanation")}),
        ("Metadata", {"fields": ("created_at", "updated_at"), "classes": ("collapse",)}),
    )
