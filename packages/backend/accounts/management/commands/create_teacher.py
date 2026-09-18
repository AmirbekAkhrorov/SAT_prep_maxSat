from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand

User = get_user_model()


class Command(BaseCommand):
    help = "Create the fixed teacher account (teacher01 / teacher2026)"

    def handle(self, *args, **options):
        email = "teacher01@maxsat.uz"
        username = "teacher01"
        password = "teacher2026"

        user, created = User.objects.get_or_create(
            username=username,
            defaults={
                "email": email,
                "role": "teacher",
            },
        )

        if created:
            user.set_password(password)
            user.save()
            self.stdout.write(self.style.SUCCESS(f"Teacher account created: {username}"))
        else:
            # Ensure role is teacher and password is correct
            user.role = "teacher"
            user.set_password(password)
            user.save()
            self.stdout.write(self.style.WARNING(f"Teacher account already exists, updated: {username}"))
