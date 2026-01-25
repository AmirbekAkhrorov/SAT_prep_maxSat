from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Question(models.Model):
    """Model representing an SAT question from the College Board question bank."""

    # Question Types
    MULTIPLE_CHOICE = "multiple_choice"
    FREE_RESPONSE = "free_response"
    QUESTION_TYPE_CHOICES = [
        (MULTIPLE_CHOICE, "Multiple Choice"),
        (FREE_RESPONSE, "Free Response"),
    ]

    # Assessment Types
    SAT = "SAT"
    PSAT = "PSAT"
    ASSESSMENT_CHOICES = [
        (SAT, "SAT"),
        (PSAT, "PSAT/NMSQT"),
    ]

    # Test Sections
    MATH = "Math"
    READING_WRITING = "Reading and Writing"
    TEST_CHOICES = [
        (MATH, "Math"),
        (READING_WRITING, "Reading and Writing"),
    ]

    # Math Domains
    ALGEBRA = "Algebra"
    ADVANCED_MATH = "Advanced Math"
    PROBLEM_SOLVING = "Problem-Solving and Data Analysis"
    GEOMETRY = "Geometry and Trigonometry"

    # Reading & Writing Domains
    INFORMATION_IDEAS = "Information and Ideas"
    CRAFT_STRUCTURE = "Craft and Structure"
    EXPRESSION_IDEAS = "Expression of Ideas"
    CONVENTIONS = "Standard English Conventions"

    DOMAIN_CHOICES = [
        (ALGEBRA, "Algebra"),
        (ADVANCED_MATH, "Advanced Math"),
        (PROBLEM_SOLVING, "Problem-Solving and Data Analysis"),
        (GEOMETRY, "Geometry and Trigonometry"),
        (INFORMATION_IDEAS, "Information and Ideas"),
        (CRAFT_STRUCTURE, "Craft and Structure"),
        (EXPRESSION_IDEAS, "Expression of Ideas"),
        (CONVENTIONS, "Standard English Conventions"),
    ]

    # Difficulty Levels
    EASY = "easy"
    MEDIUM = "medium"
    HARD = "hard"
    DIFFICULTY_CHOICES = [
        (EASY, "Easy"),
        (MEDIUM, "Medium"),
        (HARD, "Hard"),
    ]

    # Identifiers
    question_id = models.CharField(
        max_length=20, unique=True, help_text="Unique College Board question identifier (e.g., '3d1070c9')"
    )

    # Classification
    assessment = models.CharField(max_length=10, choices=ASSESSMENT_CHOICES, default=SAT)
    test = models.CharField(max_length=50, choices=TEST_CHOICES)
    domain = models.CharField(max_length=100, choices=DOMAIN_CHOICES)
    skill = models.CharField(max_length=150, help_text="Specific skill being tested (e.g., 'Linear functions')")
    difficulty = models.CharField(max_length=10, choices=DIFFICULTY_CHOICES)

    # Question content
    question_type = models.CharField(max_length=20, choices=QUESTION_TYPE_CHOICES, default=MULTIPLE_CHOICE)
    passage = models.TextField(blank=True, null=True, help_text="Optional passage or context for the question")
    question_text = models.TextField(help_text="The actual question text (may contain LaTeX math expressions)")

    # Answer choices (for multiple choice)
    choice_a = models.TextField(blank=True, null=True)
    choice_b = models.TextField(blank=True, null=True)
    choice_c = models.TextField(blank=True, null=True)
    choice_d = models.TextField(blank=True, null=True)

    # Correct answer and explanation
    correct_answer = models.CharField(
        max_length=100, help_text="Correct answer: 'A', 'B', 'C', 'D' for MC, or numeric value for free response"
    )
    explanation = models.TextField(help_text="Detailed rationale explaining the correct answer")

    # Metadata
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["domain", "skill", "difficulty"]
        indexes = [
            models.Index(fields=["test", "domain"]),
            models.Index(fields=["difficulty"]),
            models.Index(fields=["skill"]),
        ]

    def __str__(self):
        return f"{self.question_id} - {self.skill} ({self.difficulty})"

    @property
    def choices(self):
        """Return choices as a list of dicts for API serialization."""
        if self.question_type != self.MULTIPLE_CHOICE:
            return None
        choices = []
        for letter, text in [("A", self.choice_a), ("B", self.choice_b), ("C", self.choice_c), ("D", self.choice_d)]:
            if text:
                choices.append({"id": letter, "text": text})
        return choices


class QuestionAttempt(models.Model):
    """Track user's answers and progress on each question."""

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="attempts")
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name="attempts")
    answer = models.CharField(max_length=10, blank=True)  # A, B, C, D, or numeric
    is_correct = models.BooleanField(null=True, blank=True)  # null = not yet answered
    attempt_number = models.PositiveSmallIntegerField(default=1)
    time_spent_seconds = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ["user", "question", "attempt_number"]
        ordering = ["-created_at"]
        indexes = [
            models.Index(fields=["user", "created_at"]),
            models.Index(fields=["user", "question"]),
            models.Index(fields=["is_correct"]),
        ]

    def __str__(self):
        return f"{self.user.username} - {self.question.question_id} - {'✓' if self.is_correct else '✗'}"


class UserNote(models.Model):
    """Personal notes attached to questions."""

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name="notes")
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ["user", "question"]  # One note per question per user
        ordering = ["-updated_at"]
        indexes = [
            models.Index(fields=["user", "updated_at"]),
        ]

    def __str__(self):
        return f"{self.user.username}'s note on {self.question.question_id}"
