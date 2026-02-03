# SAT Math Question Dataset Plan

## Overview

Build a comprehensive SAT Math question database sourced from the official [College Board SAT Suite Question Bank](https://satsuiteeducatorquestionbank.collegeboard.org/digital/results).

---

## Phase 1: Data Structure & Model Updates

### 1.1 Official SAT Math Domains & Skills

Based on official College Board documentation:

#### Domain 1: Algebra (5 skills)
| Skill ID | Skill Name | Description |
|----------|------------|-------------|
| ALG-1 | Linear equations in one variable | Solve, interpret, and create linear equations |
| ALG-2 | Linear functions | Understand function notation, slope, intercepts |
| ALG-3 | Linear equations in two variables | Work with Ax+By=C form, graphing, parallel/perpendicular |
| ALG-4 | Systems of two linear equations | Solve systems, determine solution types |
| ALG-5 | Linear inequalities in one or two variables | Solve and graph inequalities |

#### Domain 2: Advanced Math (4 skills)
| Skill ID | Skill Name | Description |
|----------|------------|-------------|
| ADV-1 | Equivalent expressions | Factor, expand, simplify polynomials and rational expressions |
| ADV-2 | Nonlinear equations in one variable | Solve quadratic, absolute value, rational, radical equations |
| ADV-3 | Nonlinear functions | Understand quadratic, exponential, polynomial functions |
| ADV-4 | Systems of equations in two variables | Solve systems with at least one nonlinear equation |

#### Domain 3: Problem-Solving and Data Analysis (7 skills)
| Skill ID | Skill Name | Description |
|----------|------------|-------------|
| PDA-1 | Ratios, rates, proportional relationships, and units | Set up and solve proportions, unit conversions |
| PDA-2 | Percentages | Calculate percent change, discounts, interest, taxes |
| PDA-3 | One-variable data: Distributions and measures | Mean, median, mode, range, standard deviation, outliers |
| PDA-4 | Two-variable data: Models and scatterplots | Line of best fit, correlation, predictions |
| PDA-5 | Probability and conditional probability | Calculate probabilities, understand conditional events |
| PDA-6 | Inference from sample statistics | Margin of error, confidence intervals, sampling |
| PDA-7 | Evaluating statistical claims | Observational studies vs experiments, bias |

#### Domain 4: Geometry and Trigonometry (4 skills)
| Skill ID | Skill Name | Description |
|----------|------------|-------------|
| GEO-1 | Area and volume | Calculate area, surface area, volume of shapes |
| GEO-2 | Lines, angles, and triangles | Angle relationships, triangle properties, similarity |
| GEO-3 | Right triangles and trigonometry | Pythagorean theorem, sin/cos/tan, special triangles |
| GEO-4 | Circles | Circle equations, arc length, sector area, inscribed angles |

**Total: 4 domains, 20 skills**

### 1.2 Difficulty Levels

College Board uses a 1-7 difficulty scale internally, but publicly shows 3 levels:
- **Easy** (1-2): Foundational concepts, straightforward application
- **Medium** (3-5): Multi-step problems, concept integration
- **Hard** (6-7): Complex reasoning, multiple concepts combined

### 1.3 Target Question Count

| Difficulty | Questions per Skill | Total (20 skills) |
|------------|--------------------:|------------------:|
| Easy       | 15                  | 300               |
| Medium     | 20                  | 400               |
| Hard       | 15                  | 300               |
| **Total**  |                     | **1,000**         |

Minimum viable: 10 per skill per difficulty = 600 questions

---

## Phase 2: Database Model Updates

### 2.1 Create Skill Model

```python
class Skill(models.Model):
    """Individual skills within a domain."""
    skill_id = models.CharField(max_length=10, unique=True)  # e.g., "ALG-1"
    domain = models.CharField(max_length=100, choices=DOMAIN_CHOICES)
    name = models.CharField(max_length=150)
    description = models.TextField()
    order = models.PositiveSmallIntegerField(default=0)

    class Meta:
        ordering = ['domain', 'order']
```

### 2.2 Update Question Model

Add/modify fields:
- `skill` -> ForeignKey to Skill model (instead of CharField)
- `source` -> Track where question came from ("college_board", "custom")
- `external_id` -> College Board's question ID if available
- `has_image` -> Boolean for questions with figures/graphs
- `image_url` -> URL or path to image if needed
- `latex_content` -> Boolean to flag math expressions

### 2.3 Create QuestionTag Model (Optional)

For additional categorization:
```python
class QuestionTag(models.Model):
    name = models.CharField(max_length=50)  # e.g., "word-problem", "calculator-helpful"
    questions = models.ManyToManyField(Question, related_name='tags')
```

---

## Phase 3: Data Collection Strategy

### 3.1 Manual Entry Process (from College Board Question Bank)

1. **Access the Question Bank**
   - URL: https://satsuiteeducatorquestionbank.collegeboard.org/digital/results
   - Filter by: Test=Math, then by Domain, then by Skill, then by Difficulty

2. **For Each Question, Capture:**
   ```json
   {
     "external_id": "CB-XXXX",
     "domain": "Algebra",
     "skill_id": "ALG-1",
     "difficulty": "medium",
     "question_type": "multiple_choice",
     "passage": null,
     "question_text": "If 3x + 7 = 22, what is the value of x?",
     "choice_a": "3",
     "choice_b": "5",
     "choice_c": "7",
     "choice_d": "15",
     "correct_answer": "B",
     "explanation": "Subtract 7 from both sides: 3x = 15. Divide by 3: x = 5.",
     "has_image": false
   }
   ```

3. **Priority Order for Collection:**
   - Start with HIGH-YIELD skills (most common on actual SAT):
     1. Linear equations (ALG-1, ALG-2, ALG-3)
     2. Quadratics (ADV-2, ADV-3)
     3. Percentages and ratios (PDA-1, PDA-2)
     4. Right triangles (GEO-3)
   - Then fill in remaining skills

### 3.2 Data Entry Format (JSON)

Create bulk import files organized by domain:

```
/data/
  /math/
    algebra_questions.json
    advanced_math_questions.json
    problem_solving_questions.json
    geometry_questions.json
```

Each file structure:
```json
{
  "domain": "Algebra",
  "questions": [
    { /* question object */ },
    { /* question object */ }
  ]
}
```

---

## Phase 4: Import System

### 4.1 Management Command

Create `import_math_questions` Django management command:

```bash
python manage.py import_math_questions --file=data/math/algebra_questions.json
python manage.py import_math_questions --all  # Import all files
```

Features:
- Validates JSON structure
- Checks for duplicate external_ids
- Reports import statistics
- Supports dry-run mode

### 4.2 Validation Rules

- Question text required
- All 4 choices required for multiple_choice
- Correct answer must be A, B, C, or D
- Explanation required
- Valid skill_id (matches Skill table)
- Valid difficulty (easy/medium/hard)

---

## Phase 5: API Endpoints

### 5.1 Practice Mode Endpoints

```
GET /api/questions/practice/
    ?domain=Algebra
    ?skill=ALG-1
    ?difficulty=medium
    ?limit=10
    ?exclude_attempted=true

GET /api/questions/{id}/

POST /api/questions/{id}/attempt/
    { "answer": "B", "time_spent": 45 }

GET /api/skills/
    Returns all skills grouped by domain

GET /api/user/progress/
    Returns user's progress by domain/skill
```

### 5.2 Test Mode Endpoints (Future)

```
POST /api/tests/generate/
    { "type": "full", "difficulty": "adaptive" }

GET /api/tests/{id}/
POST /api/tests/{id}/submit/
```

---

## Phase 6: Admin Interface (Future)

### 6.1 Features Needed

1. **Question List View**
   - Filter by domain, skill, difficulty
   - Search by question text
   - Bulk actions (delete, change difficulty)

2. **Question Add/Edit Form**
   - Rich text editor for question/explanation
   - LaTeX preview for math expressions
   - Image upload capability
   - Skill dropdown (filtered by domain)

3. **Import Interface**
   - Upload JSON file
   - Preview before import
   - Validation error display

4. **Statistics Dashboard**
   - Questions per domain/skill/difficulty
   - Coverage gaps visualization

---

## Phase 7: Implementation Order

### Sprint 1: Foundation (Current)
- [ ] Update Django models (Skill, Question updates)
- [ ] Create and run migrations
- [ ] Seed Skill table with 20 official skills
- [ ] Create JSON schema for questions

### Sprint 2: Data Collection
- [ ] Create import management command
- [ ] Manually collect 50 questions per domain (200 total) as MVP
- [ ] Test import process
- [ ] Validate data integrity

### Sprint 3: API & Frontend
- [ ] Build practice mode API endpoints
- [ ] Update frontend Practice page to use real data
- [ ] Add domain/skill filters to UI
- [ ] Implement progress tracking

### Sprint 4: Scale Up
- [ ] Continue data collection (target: 600 questions)
- [ ] Add more questions progressively
- [ ] Build admin interface for easier data entry

---

## Appendix A: Sample Questions JSON

```json
{
  "domain": "Algebra",
  "questions": [
    {
      "external_id": "ALG-E-001",
      "skill_id": "ALG-1",
      "difficulty": "easy",
      "question_type": "multiple_choice",
      "question_text": "If 2x + 8 = 20, what is the value of x?",
      "choice_a": "4",
      "choice_b": "6",
      "choice_c": "8",
      "choice_d": "14",
      "correct_answer": "B",
      "explanation": "Subtract 8 from both sides: 2x = 12. Divide by 2: x = 6.",
      "has_image": false
    },
    {
      "external_id": "ALG-M-001",
      "skill_id": "ALG-4",
      "difficulty": "medium",
      "question_text": "The system of equations below has how many solutions?\n\n2x + 3y = 12\n4x + 6y = 24",
      "choice_a": "Zero",
      "choice_b": "Exactly one",
      "choice_c": "Exactly two",
      "choice_d": "Infinitely many",
      "correct_answer": "D",
      "explanation": "The second equation is exactly 2 times the first (4x+6y=24 = 2(2x+3y)=2(12)). These are the same line, so infinitely many solutions.",
      "has_image": false
    }
  ]
}
```

---

## Appendix B: LaTeX Support

Questions with math expressions should use LaTeX notation:

```json
{
  "question_text": "What is the value of $\\frac{x^2 - 4}{x - 2}$ when $x = 5$?",
  "choice_a": "$3$",
  "choice_b": "$7$",
  "choice_c": "$\\frac{21}{3}$",
  "choice_d": "$9$"
}
```

Frontend will render using KaTeX or MathJax.

---

## Sources

- [College Board Content Domains](https://satsuite.collegeboard.org/practice/content-domains)
- [SAT Suite Question Bank](https://satsuiteeducatorquestionbank.collegeboard.org/)
- [Digital SAT Structure](https://satsuite.collegeboard.org/sat/whats-on-the-test/structure)
