#!/usr/bin/env python3
"""
Import extracted questions into Django database.
Usage: python scripts/import_questions.py
"""

import json
import os
import sys
from pathlib import Path

# Set up Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sat_prep.settings")
sys.path.insert(0, str(Path(__file__).parent.parent))

import django

django.setup()

from questions.models import Question


def import_questions(json_file):
    """Import questions from JSON file to database."""
    with open(json_file, "r", encoding="utf-8") as f:
        questions = json.load(f)

    created = 0
    skipped = 0
    errors = []

    for q in questions:
        try:
            # Skip questions with empty question text or choices
            if not q.get("question_text") or len(q.get("question_text", "")) < 10:
                print(f"  Skipping (no text): {q.get('question_id', 'unknown')}")
                continue

            if not q.get("choice_a") or not q.get("choice_b"):
                print(f"  Skipping (no choices): {q.get('question_id', 'unknown')}")
                continue

            # Check if question already exists
            if Question.objects.filter(question_id=q["question_id"]).exists():
                skipped += 1
                print(f"  Skipping (exists): {q['question_id']}")
                continue

            # Create new question
            question = Question.objects.create(
                question_id=q["question_id"],
                assessment=q.get("assessment", "SAT"),
                test=q.get("test", "Math"),
                domain=q.get("domain", "Algebra"),
                skill=q.get("skill", "Unknown"),
                difficulty=q.get("difficulty", "medium"),
                question_type=q.get("question_type", "multiple_choice"),
                passage=q.get("passage", ""),
                question_text=q["question_text"],
                choice_a=q.get("choice_a", ""),
                choice_b=q.get("choice_b", ""),
                choice_c=q.get("choice_c", ""),
                choice_d=q.get("choice_d", ""),
                correct_answer=q["correct_answer"],
                explanation=q.get("explanation", ""),
            )
            created += 1
            print(f"  Created: {q['question_id']} - {q['skill'][:30]}...")

        except Exception as e:
            errors.append((q.get("question_id", "unknown"), str(e)))
            print(f"  ERROR ({q.get('question_id', 'unknown')}): {e}")

    return created, skipped, errors


def main():
    """Main function."""
    base_dir = Path(__file__).parent.parent.parent.parent
    json_file = base_dir / "output" / "extracted_questions.json"

    if not json_file.exists():
        print(f"ERROR: JSON file not found: {json_file}")
        print("Please run extract_questions.py first.")
        return

    print(f"Importing questions from: {json_file}")
    print(f"Current questions in DB: {Question.objects.count()}")
    print()

    created, skipped, errors = import_questions(json_file)

    print()
    print("=" * 50)
    print("Import Summary:")
    print(f"  Created: {created}")
    print(f"  Skipped: {skipped}")
    print(f"  Errors: {len(errors)}")
    print(f"  Total in DB now: {Question.objects.count()}")
    print("=" * 50)

    if errors:
        print("\nErrors:")
        for qid, error in errors[:10]:
            print(f"  - {qid}: {error}")


if __name__ == "__main__":
    main()
