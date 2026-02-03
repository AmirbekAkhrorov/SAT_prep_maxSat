from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (
    CheckAnswerView,
    LeaderboardViewSet,
    QuestionAttemptViewSet,
    QuestionViewSet,
    SkillViewSet,
    TestSessionViewSet,
    UserNoteViewSet,
)

router = DefaultRouter()
router.register(r"questions", QuestionViewSet, basename="question")
router.register(r"skills", SkillViewSet, basename="skill")
router.register(r"attempts", QuestionAttemptViewSet, basename="attempt")
router.register(r"notes", UserNoteViewSet, basename="note")
router.register(r"tests", TestSessionViewSet, basename="test")
router.register(r"leaderboard", LeaderboardViewSet, basename="leaderboard")

urlpatterns = [
    path("", include(router.urls)),
    path("check-answer/", CheckAnswerView.as_view(), name="check-answer"),
]
