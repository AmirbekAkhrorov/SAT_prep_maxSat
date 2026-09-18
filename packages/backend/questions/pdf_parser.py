"""
Parse SAT exam PDF files and extract questions with options.

Supports formats like:
  1. Question text...
  A. option  /  (A) option
  B. option  /  (B) option
  C. option  /  (C) option
  D. option  /  (D) option
"""

import re
import tempfile

import fitz  # PyMuPDF


def extract_text_from_pdf(file_bytes):
    """Extract all text from a PDF file given its bytes."""
    with tempfile.NamedTemporaryFile(suffix=".pdf", delete=False) as tmp:
        tmp.write(file_bytes)
        tmp_path = tmp.name

    doc = fitz.open(tmp_path)
    pages = []
    for page in doc:
        pages.append(page.get_text())
    doc.close()

    return "\n".join(pages)


def parse_questions(text):
    """
    Parse extracted PDF text into structured questions.

    Returns a list of dicts with keys:
      question_text, choice_a, choice_b, choice_c, choice_d,
      correct_answer (empty), domain (empty), difficulty (empty),
      explanation (empty), is_free_response (bool)
    """
    # Normalize whitespace but keep newlines for structure
    text = text.replace("\r\n", "\n").replace("\r", "\n")

    # Split text into question blocks by question numbers at line start
    # Pattern: a number followed by a period, possibly with a newline right after
    # We look for patterns like "1." or "1.\n" at the start of a line
    question_blocks = re.split(r"\n(?=\d{1,2}\.\s)", "\n" + text.strip())

    # Remove the empty first element from the split
    question_blocks = [b.strip() for b in question_blocks if b.strip()]

    # Filter blocks that actually start with a question number
    question_blocks = [b for b in question_blocks if re.match(r"^\d{1,2}\.\s", b)]

    questions = []
    for block in question_blocks:
        parsed = _parse_single_question(block)
        if parsed:
            questions.append(parsed)

    return questions


def _parse_single_question(block):
    """Parse a single question block into structured data."""
    # Remove the question number prefix (e.g., "1. " or "12.\n")
    block = re.sub(r"^\d{1,2}\.\s*", "", block).strip()

    # Remove trailing page numbers (standalone digits at the end)
    block = re.sub(r"\n\d{1,2}\s*$", "", block).strip()

    if not block:
        return None

    # Try to extract options in two formats:
    # Format 1: A. / B. / C. / D.  (letter dot)
    # Format 2: (A) / (B) / (C) / (D)  (letter in parens)
    choice_a, choice_b, choice_c, choice_d = "", "", "", ""
    question_text = block
    is_free_response = True

    # Try Format 1: "A. ..." at start of line
    # We need to be careful: "A." could appear mid-sentence
    # Look for the pattern where A/B/C/D options appear as a group
    fmt1_pattern = (
        r"(?:^|\n)\s*A\.\s*(.+?)"
        r"\n\s*B\.\s*(.+?)"
        r"\n\s*C\.\s*(.+?)"
        r"\n\s*D\.\s*(.+?)$"
    )
    fmt1_match = re.search(fmt1_pattern, block, re.DOTALL)

    # Try Format 2: "(A) ..." at start of line
    fmt2_pattern = (
        r"(?:^|\n)\s*\(A\)\s*(.+?)"
        r"\n\s*\(B\)\s*(.+?)"
        r"\n\s*\(C\)\s*(.+?)"
        r"\n\s*\(D\)\s*(.+?)$"
    )
    fmt2_match = re.search(fmt2_pattern, block, re.DOTALL)

    match = fmt1_match or fmt2_match
    if match:
        is_free_response = False
        choice_a = _clean_option(match.group(1))
        choice_b = _clean_option(match.group(2))
        choice_c = _clean_option(match.group(3))
        choice_d = _clean_option(match.group(4))
        # Question text is everything before the first option
        question_text = block[: match.start()].strip()
        # Clean up trailing newlines from question text
        question_text = question_text.strip()

    # Clean question text
    question_text = _clean_question_text(question_text)

    if not question_text:
        return None

    return {
        "question_text": question_text,
        "choice_a": choice_a,
        "choice_b": choice_b,
        "choice_c": choice_c,
        "choice_d": choice_d,
        "correct_answer": "",
        "domain": "",
        "difficulty": "",
        "explanation": "",
        "is_free_response": is_free_response,
    }


def _clean_option(text):
    """Clean an option text: collapse whitespace, strip."""
    text = re.sub(r"\s+", " ", text).strip()
    # Remove trailing page numbers if they snuck in
    text = re.sub(r"\s+\d{1,2}$", "", text).strip()
    return text


def _clean_question_text(text):
    """Clean question text: normalize whitespace while preserving math formatting."""
    # Collapse multiple blank lines into one
    text = re.sub(r"\n{3,}", "\n\n", text)
    # Remove isolated page numbers (a line with just 1-2 digits)
    text = re.sub(r"\n\d{1,2}\n", "\n", text)
    return text.strip()
