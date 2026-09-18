"""
Management command to import SAT Math questions from JSON files.
"""

import json
from pathlib import Path

from django.core.management.base import BaseCommand, CommandError

from questions.models import Question, Skill


class Command(BaseCommand):
    help = "Import SAT Math questions from JSON files"

    def add_arguments(self, parser):
        parser.add_argument(
            "--file",
            type=str,
            help="Path to a specific JSON file to import",
        )
        parser.add_argument(
            "--all",
            action="store_true",
            help="Import all JSON files from the data/math directory",
        )
        parser.add_argument(
            "--dry-run",
            action="store_true",
            help="Validate JSON without importing",
        )
        parser.add_argument(
            "--clear",
            action="store_true",
            help="Clear existing questions before importing",
        )

    def handle(self, *args, **options):
        if options["clear"] and not options["dry_run"]:
            deleted_count, _ = Question.objects.filter(test=Question.MATH).delete()
            self.stdout.write(self.style.WARNING(f"Deleted {deleted_count} existing math questions"))

        if options["file"]:
            self.import_file(options["file"], options["dry_run"])
        elif options["all"]:
            self.import_all(options["dry_run"])
        else:
            raise CommandError("Please specify --file or --all")

    def import_all(self, dry_run=False):
        """Import all JSON files from data/math directory."""
        data_dir = Path(__file__).resolve().parent.parent.parent.parent / "data" / "math"

        if not data_dir.exists():
            raise CommandError(f"Data directory not found: {data_dir}")

        json_files = list(data_dir.glob("*.json"))
        if not json_files:
            raise CommandError(f"No JSON files found in {data_dir}")

        self.stdout.write(f"Found {len(json_files)} JSON files")

        total_created = 0
        total_updated = 0
        total_errors = 0

        for json_file in json_files:
            created, updated, errors = self.import_file(str(json_file), dry_run)
            total_created += created
            total_updated += updated
            total_errors += errors

        self.stdout.write(
            self.style.SUCCESS(
                f"\nTotal: {total_created} created, {total_updated} updated, {total_errors} errors"
            )
        )

    def import_file(self, file_path, dry_run=False):
        """Import questions from a single JSON file."""
        path = Path(file_path)

        if not path.exists():
            raise CommandError(f"File not found: {file_path}")

        self.stdout.write(f"\nProcessing: {path.name}")

        try:
            with open(path, "r", encoding="utf-8") as f:
                data = json.load(f)
        except json.JSONDecodeError as e:
            raise CommandError(f"Invalid JSON in {file_path}: {e}")

        # Validate structure
        if "questions" not in data:
            raise CommandError(f"Missing 'questions' key in {file_path}")

        domain = data.get("domain")
        questions = data["questions"]

        self.stdout.write(f"  Domain: {domain}")
        self.stdout.write(f"  Questions: {len(questions)}")

        created_count = 0
        updated_count = 0
        error_count = 0

        for i, q in enumerate(questions):
            try:
                self.validate_question(q, i)

                if dry_run:
                    self.stdout.write(f"    [DRY RUN] Valid: {q['question_id']}")
                    continue

                # Get skill reference if skill_id provided
                skill_ref = None
                if "skill_id" in q:
                    try:
                        skill_ref = Skill.objects.get(skill_id=q["skill_id"])
                    except Skill.DoesNotExist:
                        self.stdout.write(
                            self.style.WARNING(f"    Skill not found: {q['skill_id']}")
                        )

                # Create or update question
                question, created = Question.objects.update_or_create(
                    question_id=q["question_id"],
                    defaults={
                        "assessment": q.get("assessment", Question.SAT),
                        "test": Question.MATH,
                        "domain": q.get("domain", domain),
                        "skill_name": q["skill_name"],
                        "skill_ref": skill_ref,
                        "difficulty": q["difficulty"],
                        "question_type": q.get("question_type", Question.MULTIPLE_CHOICE),
                        "passage": q.get("passage"),
                        "question_text": q["question_text"],
                        "choice_a": q.get("choice_a"),
                        "choice_b": q.get("choice_b"),
                        "choice_c": q.get("choice_c"),
                        "choice_d": q.get("choice_d"),
                        "correct_answer": q["correct_answer"],
                        "explanation": q["explanation"],
                        "source": q.get("source", Question.SOURCE_COLLEGE_BOARD),
                        "visualization": q.get("visualization"),
                    },
                )

                if created:
                    created_count += 1
                else:
                    updated_count += 1

            except Exception as e:
                error_count += 1
                self.stdout.write(
                    self.style.ERROR(f"    Error in question {i + 1}: {e}")
                )

        if not dry_run:
            self.stdout.write(
                self.style.SUCCESS(
                    f"  Imported: {created_count} created, {updated_count} updated, {error_count} errors"
                )
            )

        return created_count, updated_count, error_count

    def validate_question(self, q, index):
        """Validate a question object."""
        required_fields = [
            "question_id",
            "skill_name",
            "difficulty",
            "question_text",
            "correct_answer",
            "explanation",
        ]

        for field in required_fields:
            if field not in q or not q[field]:
                raise ValueError(f"Missing required field: {field}")

        # Validate difficulty
        valid_difficulties = ["easy", "medium", "hard"]
        if q["difficulty"] not in valid_difficulties:
            raise ValueError(f"Invalid difficulty: {q['difficulty']}")

        # Validate correct answer for multiple choice
        if q.get("question_type", "multiple_choice") == "multiple_choice":
            valid_answers = ["A", "B", "C", "D"]
            if q["correct_answer"].upper() not in valid_answers:
                raise ValueError(f"Invalid correct_answer: {q['correct_answer']}")

            # Check that all choices exist
            for choice in ["choice_a", "choice_b", "choice_c", "choice_d"]:
                if choice not in q or not q[choice]:
                    raise ValueError(f"Missing {choice}")
