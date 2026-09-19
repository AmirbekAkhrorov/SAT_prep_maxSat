"""Create or promote the site admin from environment variables.

Runs on every deploy from render-build.sh. Render's free plan has no shell, so
this is the only way to get an admin account onto the production database.

It has to be safe to run repeatedly: `createsuperuser --noinput` fails with
"already exists" on every deploy after the first, and render-build.sh stops on
any error. It also never fails the build. A problem with the admin settings
must not stop a fix from shipping to students, so problems are reported in the
build log and the command exits normally.

Environment (set in the Render dashboard, never in code or render.yaml):
  DJANGO_SUPERUSER_EMAIL     the account to create or promote
  DJANGO_SUPERUSER_PASSWORD  applied on every deploy while it is set, so
                             changing it in Render and redeploying is also how
                             to reset a forgotten admin password
  DJANGO_SUPERUSER_USERNAME  optional; only used when creating a new account

Unlike create_teacher.py, no credential lives in the code.
"""

import os

from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.core.management.base import BaseCommand

User = get_user_model()


class Command(BaseCommand):
    help = "Create or promote the admin account from DJANGO_SUPERUSER_* environment variables (idempotent)."

    def handle(self, *args, **options):
        email = os.environ.get("DJANGO_SUPERUSER_EMAIL", "").strip()
        password = os.environ.get("DJANGO_SUPERUSER_PASSWORD", "")
        username = os.environ.get("DJANGO_SUPERUSER_USERNAME", "").strip()

        if not email:
            self.stdout.write("ensure_superuser: DJANGO_SUPERUSER_EMAIL is not set, skipping.")
            return

        try:
            self._ensure(email, password, username)
        except Exception as exc:  # noqa: BLE001 - must never fail the deploy
            self.stdout.write(self.style.ERROR(f"ensure_superuser: FAILED, admin account not changed: {exc}"))

    def _ensure(self, email, password, username):
        user = User.objects.filter(email__iexact=email).first()

        if user is None and not password:
            self.stdout.write(self.style.WARNING(
                f"ensure_superuser: no account exists for {email} and DJANGO_SUPERUSER_PASSWORD "
                "is not set, so there is nothing to create. Skipping."
            ))
            return

        if password:
            # Checked against the project's AUTH_PASSWORD_VALIDATORS. A weak
            # password on a public /admin/ is worse than having no admin at all.
            candidate = user or User(email=email, username=username or email.split("@")[0])
            try:
                validate_password(password, user=candidate)
            except ValidationError as exc:
                self.stdout.write(self.style.ERROR(
                    "ensure_superuser: DJANGO_SUPERUSER_PASSWORD was rejected: "
                    + " ".join(exc.messages) + " Admin account NOT changed."
                ))
                return

        if user is None:
            username = username or self._free_username(email.split("@")[0])
            User.objects.create_superuser(email=email, username=username, password=password, role="admin")
            self.stdout.write(self.style.SUCCESS(f"ensure_superuser: created admin {email} (username {username})."))
            return

        # Existing account, e.g. one first created through Google sign-in, which
        # has no usable password until DJANGO_SUPERUSER_PASSWORD gives it one.
        user.is_staff = True
        user.is_superuser = True
        user.role = "admin"
        if password:
            user.set_password(password)
        user.save()
        self.stdout.write(self.style.SUCCESS(
            f"ensure_superuser: {email} is an admin"
            + (", password set from DJANGO_SUPERUSER_PASSWORD." if password else ".")
        ))

    def _free_username(self, base):
        # Same scheme GoogleLogin uses for new accounts: base, base1, base2, ...
        username, n = base, 1
        while User.objects.filter(username=username).exists():
            username, n = f"{base}{n}", n + 1
        return username
