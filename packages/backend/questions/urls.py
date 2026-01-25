from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (
    CheckAnswerView,
    QuestionAttemptViewSet,
    QuestionViewSet,
    UserNoteViewSet,
)

router = DefaultRouter()
router.register(r"questions", QuestionViewSet, basename="question")
router.register(r"attempts", QuestionAttemptViewSet, basename="attempt")
router.register(r"notes", UserNoteViewSet, basename="note")

urlpatterns = [
    path("", include(router.urls)),
    path("check-answer/", CheckAnswerView.as_view(), name="check-answer"),
]
