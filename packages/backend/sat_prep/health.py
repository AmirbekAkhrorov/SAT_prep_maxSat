"""Liveness endpoint for the platform health checker.

Deliberately a plain Django view rather than a DRF one: DRF applies
DEFAULT_THROTTLE_CLASSES on every APIView, and the host polls this path
continuously. Under AnonRateThrottle the probe would exhaust the anon
bucket, start collecting 429s, and the host would cycle the service
about an hour after an otherwise healthy deploy.

It is also exempt from SECURE_SSL_REDIRECT (see SECURE_REDIRECT_EXEMPT):
the internal probe arrives over plain HTTP without X-Forwarded-Proto, so
otherwise Django answers 301 and the host never sees a 2xx.
"""

import os

from django.db import connection
from django.http import JsonResponse
from django.views.decorators.cache import never_cache


@never_cache
def healthz(request):
    # A cheap DB round-trip, so a bad DATABASE_URL fails the deploy loudly
    # instead of going live and erroring on the first real request.
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1")
            cursor.fetchone()
    except Exception as exc:  # pragma: no cover - only on a broken database
        return JsonResponse(
            {"status": "error", "database": str(exc)[:200]}, status=503
        )

    # RENDER_GIT_COMMIT is set by Render on every deploy; it lets anyone confirm
    # from outside which commit is actually live. Empty when run locally.
    return JsonResponse({
        "status": "ok",
        "database": "ok",
        "commit": os.environ.get("RENDER_GIT_COMMIT", "")[:7],
    })
