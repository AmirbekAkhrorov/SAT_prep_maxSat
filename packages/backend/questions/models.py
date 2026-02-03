from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Skill(models.Model):
    """Official SAT Math skills within each domain."""

    # Math Domains (matching Question.DOMAIN_CHOICES for Math)
    ALGEBRA = "Algebra"
    ADVANCED_MATH = "Advanced Math"
    PROBLEM_SOLVING = "Problem-Solving and Data Analysis"
    GEOMETRY = "Geometry and Trigonometry"

    DOMAIN_CHOICES = [
        (ALGEBRA, "Algebra"),
        (ADVANCED_MATH, "Advanced Math"),
        (PROBLEM_SOLVING, "Problem-Solving and Data Analysis"),
        (GEOMETRY, "Geometry and Trigonometry"),
    ]

    skill_id = models.CharField(
        max_length=10, unique=True, help_text="Skill identifier (e.g., 'ALG-1')"
    )
    domain = models.CharField(max_length=100, choices=DOMAIN_CHOICES)
    name = models.CharField(max_length=150)
    description = models.TextField(blank=True)
    order = models.PositiveSmallIntegerField(default=0, help_text="Display order within domain")

    class Meta:
        ordering = ["domain", "order"]
        verbose_name = "Math Skill"
        verbose_name_plural = "Math Skills"

    def __str__(self):
        return f"{self.skill_id}: {self.name}"


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

    # Source Types
    SOURCE_COLLEGE_BOARD = "college_board"
    SOURCE_CUSTOM = "custom"
    SOURCE_CHOICES = [
        (SOURCE_COLLEGE_BOARD, "College Board"),
        (SOURCE_CUSTOM, "Custom"),
    ]

    # Identifiers
    question_id = models.CharField(
        max_length=20, unique=True, help_text="Unique question identifier (e.g., 'ALG-E-001')"
    )

    # Classification
    assessment = models.CharField(max_length=10, choices=ASSESSMENT_CHOICES, default=SAT)
    test = models.CharField(max_length=50, choices=TEST_CHOICES)
    domain = models.CharField(max_length=100, choices=DOMAIN_CHOICES)
    skill_name = models.CharField(
        max_length=150, help_text="Specific skill being tested (e.g., 'Linear functions')"
    )
    skill_ref = models.ForeignKey(
        Skill,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="questions",
        help_text="Reference to the official skill"
    )
    difficulty = models.CharField(max_length=10, choices=DIFFICULTY_CHOICES)
    source = models.CharField(
        max_length=20, choices=SOURCE_CHOICES, default=SOURCE_COLLEGE_BOARD
    )

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
        ordering = ["domain", "skill_name", "difficulty"]
        indexes = [
            models.Index(fields=["test", "domain"]),
            models.Index(fields=["difficulty"]),
            models.Index(fields=["skill_name"]),
            models.Index(fields=["source"]),
        ]

    def __str__(self):
        return f"{self.question_id} - {self.skill_name} ({self.difficulty})"

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


class TestSession(models.Model):
    """Model representing a timed test session."""

    TEST_TYPES = [
        ("mini", "Mini Test"),
        ("section", "Section Test"),
        ("full", "Full Practice"),
    ]

    STATUS_CHOICES = [
        ("in_progress", "In Progress"),
        ("completed", "Completed"),
        ("timed_out", "Timed Out"),
        ("abandoned", "Abandoned"),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="test_sessions")
    test_type = models.CharField(max_length=20, choices=TEST_TYPES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="in_progress")
    time_limit_seconds = models.PositiveIntegerField()
    started_at = models.DateTimeField(auto_now_add=True)
    completed_at = models.DateTimeField(null=True, blank=True)
    total_questions = models.PositiveSmallIntegerField()
    correct_count = models.PositiveSmallIntegerField(null=True, blank=True)
    score_percentage = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    points_earned = models.PositiveIntegerField(default=0, help_text="Points earned from this test")

    class Meta:
        ordering = ["-started_at"]
        indexes = [
            models.Index(fields=["user", "status"]),
            models.Index(fields=["user", "started_at"]),
        ]

    def __str__(self):
        return f"{self.user.username}'s {self.get_test_type_display()} - {self.get_status_display()}"

    @property
    def time_remaining_seconds(self):
        """Calculate remaining time based on when test started."""
        from django.utils import timezone

        if self.status != "in_progress":
            return 0
        elapsed = (timezone.now() - self.started_at).total_seconds()
        remaining = self.time_limit_seconds - elapsed
        return max(0, int(remaining))


class TestSessionQuestion(models.Model):
    """Model representing a question within a test session."""

    session = models.ForeignKey(TestSession, on_delete=models.CASCADE, related_name="session_questions")
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    order = models.PositiveSmallIntegerField()
    user_answer = models.CharField(max_length=100, null=True, blank=True)
    is_correct = models.BooleanField(null=True, blank=True)
    is_flagged = models.BooleanField(default=False)

    class Meta:
        ordering = ["order"]
        unique_together = ["session", "order"]
        indexes = [
            models.Index(fields=["session", "order"]),
        ]

    def __str__(self):
        return f"Q{self.order} in {self.session}"


class UserStats(models.Model):
    """Track user statistics for leaderboard and gamification."""

    # Rank thresholds
    RANK_THRESHOLDS = [
        (0, "Bronze"),
        (500, "Silver"),
        (1500, "Gold"),
        (3500, "Platinum"),
        (7000, "Diamond"),
        (15000, "Master"),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="stats")
    total_points = models.PositiveIntegerField(default=0)
    tests_completed = models.PositiveIntegerField(default=0)
    questions_answered = models.PositiveIntegerField(default=0)
    correct_answers = models.PositiveIntegerField(default=0)
    current_streak = models.PositiveIntegerField(default=0, help_text="Consecutive days practiced")
    best_streak = models.PositiveIntegerField(default=0)
    last_activity_date = models.DateField(null=True, blank=True)
    weekly_points = models.PositiveIntegerField(default=0, help_text="Points earned this week")
    week_start = models.DateField(null=True, blank=True, help_text="Start of current tracking week")
    monthly_points = models.PositiveIntegerField(default=0, help_text="Points earned this month")
    month_start = models.DateField(null=True, blank=True, help_text="Start of current tracking month")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "User Stats"
        verbose_name_plural = "User Stats"
        ordering = ["-total_points"]
        indexes = [
            models.Index(fields=["-total_points"]),
            models.Index(fields=["-weekly_points"]),
        ]

    def __str__(self):
        return f"{self.user.username}'s Stats - {self.total_points} pts ({self.rank})"

    @property
    def rank(self):
        """Calculate user's rank based on total points."""
        rank_name = "Bronze"
        for threshold, name in self.RANK_THRESHOLDS:
            if self.total_points >= threshold:
                rank_name = name
        return rank_name

    @property
    def accuracy(self):
        """Calculate accuracy percentage."""
        if self.questions_answered == 0:
            return 0
        return round((self.correct_answers / self.questions_answered) * 100, 1)

    @property
    def points_to_next_rank(self):
        """Calculate points needed for next rank."""
        for threshold, name in self.RANK_THRESHOLDS:
            if self.total_points < threshold:
                return threshold - self.total_points
        return 0  # Already at max rank

    @property
    def next_rank(self):
        """Get the name of the next rank."""
        for threshold, name in self.RANK_THRESHOLDS:
            if self.total_points < threshold:
                return name
        return None  # Already at max rank

    def update_streak(self):
        """Update streak based on activity."""
        from datetime import date, timedelta

        today = date.today()

        if self.last_activity_date is None:
            self.current_streak = 1
        elif self.last_activity_date == today:
            pass  # Already active today
        elif self.last_activity_date == today - timedelta(days=1):
            self.current_streak += 1
        else:
            self.current_streak = 1  # Streak broken

        if self.current_streak > self.best_streak:
            self.best_streak = self.current_streak

        self.last_activity_date = today

    def reset_weekly_if_needed(self):
        """Reset weekly points if a new week has started."""
        from datetime import date, timedelta

        today = date.today()
        # Week starts on Monday
        week_start = today - timedelta(days=today.weekday())

        if self.week_start is None or self.week_start < week_start:
            self.weekly_points = 0
            self.week_start = week_start

    def reset_monthly_if_needed(self):
        """Reset monthly points if a new month has started."""
        from datetime import date

        today = date.today()
        # Month starts on the 1st
        month_start = today.replace(day=1)

        if self.month_start is None or self.month_start < month_start:
            self.monthly_points = 0
            self.month_start = month_start

    def add_points(self, points):
        """Add points to total, weekly, and monthly."""
        self.reset_weekly_if_needed()
        self.reset_monthly_if_needed()
        self.total_points += points
        self.weekly_points += points
        self.monthly_points += points
        self.update_streak()

    @classmethod
    def get_or_create_for_user(cls, user):
        """Get or create stats for a user."""
        stats, created = cls.objects.get_or_create(user=user)
        return stats
