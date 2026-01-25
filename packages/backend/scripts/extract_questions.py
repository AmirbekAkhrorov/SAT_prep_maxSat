#!/usr/bin/env python3
"""
Extract SAT questions from College Board PDF files.
Optimized parsing for the College Board "Results" PDF format.
Usage: python extract_questions.py
"""

import json
import re
import subprocess
from pathlib import Path


def extract_text_from_pdf(pdf_path):
    """Extract text from PDF using pdftotext."""
    result = subprocess.run(["pdftotext", str(pdf_path), "-"], capture_output=True, text=True)
    # Clean up form feed characters
    return result.stdout.replace("\x0c", "")


def parse_all_questions(text):
    """Parse all questions from the PDF text."""
    questions = []

    # Split by Question ID blocks
    pattern = re.compile(r"Question ID\s+([a-f0-9]+)", re.IGNORECASE)

    matches = list(pattern.finditer(text))

    for i, id_match in enumerate(matches):
        question_id = id_match.group(1)
        start = id_match.start()

        # Find end of this question (next Question ID or end of text)
        if i + 1 < len(matches):
            end = matches[i + 1].start()
        else:
            end = len(text)

        block = text[start:end]

        try:
            q = parse_single_question(question_id, block)
            if q:
                questions.append(q)
        except Exception as e:
            print(f"  Error parsing question {question_id}: {e}")

    return questions


def parse_single_question(question_id, block):
    """Parse a single question from its block."""
    # --- Extract Domain ---
    domain = "Algebra"  # Default
    if "Advanced Math" in block:
        domain = "Advanced Math"
    elif "Problem-Solving" in block:
        domain = "Problem-Solving and Data Analysis"
    elif "Geometry" in block:
        domain = "Geometry and Trigonometry"
    elif "Information and Ideas" in block:
        domain = "Information and Ideas"
    elif "Craft and Structure" in block:
        domain = "Craft and Structure"
    elif "Expression of Ideas" in block:
        domain = "Expression of Ideas"
    elif "Conventions" in block:
        domain = "Standard English Conventions"

    # --- Extract Skill ---
    # Look for skill between "Skill" header and "Difficulty" header
    skill_match = re.search(r"Skill\s*\n\s*([^\n]+)", block, re.IGNORECASE)
    if skill_match:
        skill = skill_match.group(1).strip()
        skill = re.sub(r"\s+", " ", skill)
    else:
        skill = "Unknown"

    # --- Extract Difficulty ---
    diff_match = re.search(r"Question Difficulty:\s*(\w+)", block, re.IGNORECASE)
    difficulty = diff_match.group(1).lower() if diff_match else "medium"

    # --- Extract Correct Answer ---
    answer_match = re.search(r"Correct Answer:\s*([A-D]|\d+(?:\.\d+)?)", block, re.IGNORECASE)
    correct_answer = answer_match.group(1) if answer_match else ""

    # --- Extract Question Text ---
    # The question text is between "ID: <id>" and "Choice A is correct" or the choice section
    # Find where question ends (before "Choice [A-Z] is correct")
    rationale_start_match = re.search(r"Choice [A-Z] is correct\.?\s*", block, re.IGNORECASE)

    # Also look for "ID: <id> Answer" marker
    answer_header_match = re.search(r"ID:\s*" + re.escape(question_id) + r"\s*Answer", block, re.IGNORECASE)

    if answer_header_match:
        # Question text is from "ID: <id>" to before answer section
        q_text_match = re.search(
            r"ID:\s*" + re.escape(question_id) + r"\s*\n*(.+?)(?=ID:\s*" + re.escape(question_id) + r"\s*Answer)",
            block,
            re.IGNORECASE | re.DOTALL,
        )
        if q_text_match:
            q_text = q_text_match.group(1).strip()
            # Remove any explanations trailing choice
            q_text = re.sub(r"Choice [A-Z] is incorrect.*", "", q_text, flags=re.DOTALL)
            q_text = re.sub(r"\s+", " ", q_text).strip()
        else:
            q_text = block[:200]
            q_text = re.sub(r"\s+", " ", q_text).strip()
    else:
        # Fallback: take first part of block
        q_text = block[:300]
        q_text = re.sub(r"\s+", " ", q_text).strip()

    # Clean up question text
    q_text = re.sub(r"^ID:\s*" + question_id + r"\s*", "", q_text, flags=re.IGNORECASE)
    q_text = re.sub(r"\s*[-−]\s*$", "", q_text)  # Remove trailing dash

    # --- Extract Choices ---
    choices = {"A": "", "B": "", "C": "", "D": ""}

    # Try to find choices using a more robust pattern
    # Look for "A." followed by substantial text, then "B." etc.
    choice_patterns = [
        (r"A\.\s*(.+?)(?=B\.|\n[A-Z]\.|$)", "A"),
        (r"B\.\s*(.+?)(?=C\.|\n[A-Z]\.|$)", "B"),
        (r"C\.\s*(.+?)(?=D\.|\n[A-Z]\.|$)", "C"),
        (r"D\.\s*(.+?)(?=ID:|\n[A-Z]\.|$)", "D"),
    ]

    for pattern, letter in choice_patterns:
        match = re.search(pattern, block, re.IGNORECASE | re.DOTALL)
        if match:
            choice_text = match.group(1).strip()
            # Clean up: remove newlines, multiple spaces, trailing dashes
            choice_text = re.sub(r"\s+", " ", choice_text)
            choice_text = re.sub(r"\s*[-−]\s*$", "", choice_text)
            # Also remove "Choice X is incorrect" if present
            choice_text = re.sub(r"Choice [A-Z] is incorrect.*", "", choice_text, flags=re.DOTALL)
            choices[letter] = choice_text

    # If all choices are empty or single char, the parsing failed
    all_choices = [choices[l] for l in ["A", "B", "C", "D"]]
    has_real_choices = any(len(c) > 10 for c in all_choices if c)

    # --- Extract Rationale/Explanation ---
    rationale_match = re.search(r"Rationale\s*(.+?)(?=Question Difficulty:|$)", block, re.IGNORECASE | re.DOTALL)
    if rationale_match:
        rationale = rationale_match.group(1).strip()
        # Clean up rationale
        rationale = re.sub(r"^Choice [A-Z] is correct\.?\s*", "", rationale)
        rationale = re.sub(r"^,\s*", "", rationale)
        rationale = re.sub(r"Choice [A-Z] is incorrect.*", "", rationale, flags=re.DOTALL)
        rationale = re.sub(r"\s+", " ", rationale).strip()
    else:
        rationale = ""

    return {
        "question_id": question_id,
        "assessment": "SAT",
        "test": "Math",
        "domain": domain,
        "skill": skill,
        "difficulty": difficulty,
        "question_text": q_text,
        "choice_a": choices.get("A", ""),
        "choice_b": choices.get("B", ""),
        "choice_c": choices.get("C", ""),
        "choice_d": choices.get("D", ""),
        "correct_answer": correct_answer,
        "explanation": rationale,
        "question_type": "multiple_choice",
    }


def main():
    """Main function to extract questions from all PDFs."""
    base_dir = Path(__file__).parent.parent.parent.parent
    problems_dir = base_dir / "problems"
    output_dir = base_dir / "output"

    output_dir.mkdir(exist_ok=True)

    pdf_files = [
        ("SAT Suite Question Bank 20-easy - Results.pdf", "easy"),
        ("SAT Suite Question Bank medium - 20 - Results.pdf", "medium"),
        ("SAT Suite Question Bank hard -20  - Results.pdf", "hard"),
    ]

    all_questions = []

    for pdf_name, expected_difficulty in pdf_files:
        pdf_path = problems_dir / pdf_name
        print(f"Processing: {pdf_name}")

        if not pdf_path.exists():
            print(f"  ERROR: File not found: {pdf_path}")
            continue

        text = extract_text_from_pdf(pdf_path)
        print(f"  Extracted {len(text)} characters")

        questions = parse_all_questions(text)
        print(f"  Parsed {len(questions)} questions")

        # Update difficulty
        for q in questions:
            q["difficulty"] = expected_difficulty

        all_questions.extend(questions)

    # Save to JSON
    output_file = output_dir / "extracted_questions.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(all_questions, f, indent=2, ensure_ascii=False)

    print(f"\nTotal questions extracted: {len(all_questions)}")
    print(f"Output saved to: {output_file}")

    # Summary
    by_difficulty = {}
    for q in all_questions:
        d = q["difficulty"]
        by_difficulty[d] = by_difficulty.get(d, 0) + 1

    print("\nQuestions by difficulty:")
    for d, count in sorted(by_difficulty.items()):
        print(f"  {d}: {count}")

    # Show sample with good extraction
    if all_questions:
        print("\nSample question:")
        q = all_questions[0]
        print(f"  ID: {q['question_id']}")
        print(f"  Domain: {q['domain']}")
        print(f"  Skill: {q['skill']}")
        print(f"  Q: {q['question_text'][:60]}...")
        print(f"  A: {q['choice_a'][:40]}..." if q["choice_a"] else "  A: (empty)")
        print(f"  B: {q['choice_b'][:40]}..." if q["choice_b"] else "  B: (empty)")
        print(f"  Answer: {q['correct_answer']}")
        has_explanation = bool(q["explanation"])
        print(f"  Has explanation: {has_explanation}")


if __name__ == "__main__":
    main()
