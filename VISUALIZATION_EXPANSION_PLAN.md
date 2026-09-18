# Visualization Expansion Plan

## Current State

| Domain | Total Questions | With Visualizations | Coverage |
|--------|----------------|--------------------|---------|
| Geometry & Trigonometry | 180 | ~90 | 50% |
| Algebra | 180 | 2 | 1.1% |
| Problem-Solving & Data Analysis | 180 | 3 | 1.7% |
| Advanced Math | 180 | 0 | 0% |

## Goal
Add meaningful visualizations to questions that would benefit from visual representation across all domains.

---

## Phase 1: Advanced Math (Priority: High)

### 1.1 Quadratic Functions (15-20 questions)
**Visualization Type:** `graph`

Questions about parabolas, vertex form, roots, axis of symmetry.

```json
{
  "type": "graph",
  "config": {
    "width": 300,
    "height": 250,
    "xRange": [-5, 5],
    "yRange": [-2, 10],
    "elements": [
      { "type": "function", "expression": "x^2 - 4x + 3", "color": "#4169E1", "label": "f(x)" },
      { "type": "point", "coordinates": [2, -1], "label": "vertex", "color": "#e74c3c" }
    ]
  }
}
```

**Target questions:**
- "Find the vertex of y = x² - 4x + 3"
- "What are the roots of the quadratic equation..."
- "The parabola opens upward/downward..."

### 1.2 Exponential & Logarithmic Functions (10-15 questions)
**Visualization Type:** `graph`

```json
{
  "type": "graph",
  "config": {
    "width": 300,
    "height": 250,
    "xRange": [-3, 4],
    "yRange": [-1, 10],
    "elements": [
      { "type": "function", "expression": "2^x", "color": "#9b59b6", "label": "y = 2^x" }
    ]
  }
}
```

**Target questions:**
- Exponential growth/decay problems
- "Which graph represents y = 2^x?"
- Logarithmic function properties

### 1.3 Polynomial Functions (10-15 questions)
**Visualization Type:** `graph`

Show polynomial curves with zeros, end behavior.

```json
{
  "type": "graph",
  "config": {
    "width": 320,
    "height": 250,
    "xRange": [-4, 4],
    "yRange": [-10, 10],
    "elements": [
      { "type": "function", "expression": "x^3 - 3x", "color": "#2ecc71" },
      { "type": "point", "coordinates": [-1.73, 0], "label": "", "color": "#e74c3c" },
      { "type": "point", "coordinates": [0, 0], "label": "", "color": "#e74c3c" },
      { "type": "point", "coordinates": [1.73, 0], "label": "", "color": "#e74c3c" }
    ]
  }
}
```

### 1.4 Systems of Equations (8-10 questions)
**Visualization Type:** `graph`

Show intersections of two functions.

```json
{
  "type": "graph",
  "config": {
    "width": 300,
    "height": 250,
    "xRange": [-5, 5],
    "yRange": [-5, 10],
    "elements": [
      { "type": "function", "expression": "x^2", "color": "#3498db", "label": "y = x²" },
      { "type": "function", "expression": "2*x + 3", "color": "#e74c3c", "label": "y = 2x + 3" },
      { "type": "point", "coordinates": [3, 9], "label": "intersection", "color": "#2ecc71" }
    ]
  }
}
```

### 1.5 Rational Functions (5-8 questions)
**Visualization Type:** `graph`

Show asymptotes, holes, behavior.

---

## Phase 2: Algebra (Priority: High)

### 2.1 Linear Functions & Slopes (15-20 questions)
**Visualization Type:** `graph`

```json
{
  "type": "graph",
  "config": {
    "width": 280,
    "height": 250,
    "xRange": [-5, 5],
    "yRange": [-5, 5],
    "elements": [
      { "type": "line", "slope": 2, "intercept": -1, "color": "#3498db", "label": "y = 2x - 1" },
      { "type": "point", "coordinates": [0, -1], "label": "y-int", "color": "#e74c3c" }
    ]
  }
}
```

**Target questions:**
- "Find the slope of the line..."
- "What is the y-intercept..."
- "Write the equation of the line passing through..."

### 2.2 Systems of Linear Equations (10-15 questions)
**Visualization Type:** `graph`

Show two lines intersecting, parallel, or coincident.

```json
{
  "type": "graph",
  "config": {
    "width": 280,
    "height": 250,
    "xRange": [-5, 5],
    "yRange": [-5, 5],
    "elements": [
      { "type": "line", "slope": 1, "intercept": 2, "color": "#3498db", "label": "y = x + 2" },
      { "type": "line", "slope": -1, "intercept": 4, "color": "#e74c3c", "label": "y = -x + 4" },
      { "type": "point", "coordinates": [1, 3], "label": "(1, 3)", "color": "#2ecc71" }
    ]
  }
}
```

### 2.3 Inequalities (10-15 questions)
**Visualization Type:** `numberLine`

```json
{
  "type": "numberLine",
  "config": {
    "width": 350,
    "height": 80,
    "range": [-5, 5],
    "tickInterval": 1,
    "markers": [
      { "value": 2, "open": true, "color": "#e74c3c" }
    ],
    "regions": [
      { "start": 2, "end": 5, "type": "ray", "direction": "right", "open": true, "color": "#3498db" }
    ]
  }
}
```

**Target questions:**
- "Solve x > 2"
- "Graph the solution set of -3 ≤ x < 5"
- Compound inequalities

### 2.4 Absolute Value (5-8 questions)
**Visualization Type:** `graph`

```json
{
  "type": "graph",
  "config": {
    "width": 280,
    "height": 250,
    "xRange": [-5, 5],
    "yRange": [-1, 6],
    "elements": [
      { "type": "function", "expression": "abs(x - 2)", "color": "#9b59b6", "label": "y = |x - 2|" },
      { "type": "point", "coordinates": [2, 0], "label": "vertex", "color": "#e74c3c" }
    ]
  }
}
```

---

## Phase 3: Problem-Solving & Data Analysis (Priority: Medium)

### 3.1 Bar Charts (15-20 questions)
**Visualization Type:** `chart` (bar)

```json
{
  "type": "chart",
  "config": {
    "chartType": "bar",
    "width": 350,
    "height": 250,
    "title": "Monthly Sales",
    "data": [
      { "label": "Jan", "value": 45, "color": "#3498db" },
      { "label": "Feb", "value": 52, "color": "#3498db" },
      { "label": "Mar", "value": 38, "color": "#3498db" },
      { "label": "Apr", "value": 65, "color": "#3498db" }
    ]
  }
}
```

**Target questions:**
- "Based on the bar chart, which month had the highest sales?"
- "What is the difference between..."
- Mean, median, mode from bar charts

### 3.2 Line Charts (10-15 questions)
**Visualization Type:** `chart` (line)

```json
{
  "type": "chart",
  "config": {
    "chartType": "line",
    "width": 350,
    "height": 250,
    "title": "Temperature Over Time",
    "data": [
      { "label": "6am", "value": 55 },
      { "label": "9am", "value": 62 },
      { "label": "12pm", "value": 78 },
      { "label": "3pm", "value": 82 },
      { "label": "6pm", "value": 71 }
    ]
  }
}
```

**Target questions:**
- Rate of change problems
- Trend analysis
- Predictions/interpolation

### 3.3 Scatter Plots (10-15 questions)
**Visualization Type:** `chart` (scatter)

```json
{
  "type": "chart",
  "config": {
    "chartType": "scatter",
    "width": 320,
    "height": 280,
    "title": "Study Hours vs Test Score",
    "xLabel": "Hours Studied",
    "yLabel": "Score",
    "data": [
      { "x": 1, "y": 65 },
      { "x": 2, "y": 70 },
      { "x": 3, "y": 75 },
      { "x": 4, "y": 82 },
      { "x": 5, "y": 88 }
    ]
  }
}
```

**Target questions:**
- Correlation (positive, negative, none)
- Line of best fit
- Predictions

### 3.4 Pie Charts (5-10 questions)
**Visualization Type:** `chart` (pie)

```json
{
  "type": "chart",
  "config": {
    "chartType": "pie",
    "width": 300,
    "height": 300,
    "title": "Budget Distribution",
    "data": [
      { "label": "Rent", "value": 35, "color": "#3498db" },
      { "label": "Food", "value": 25, "color": "#2ecc71" },
      { "label": "Transport", "value": 15, "color": "#e74c3c" },
      { "label": "Savings", "value": 25, "color": "#9b59b6" }
    ]
  }
}
```

### 3.5 Data Tables (10-15 questions)
**Visualization Type:** `table`

```json
{
  "type": "table",
  "config": {
    "title": "Student Test Scores",
    "headers": ["Student", "Test 1", "Test 2", "Test 3", "Average"],
    "rows": [
      ["Alice", "85", "90", "88", "87.7"],
      ["Bob", "78", "82", "80", "80.0"],
      ["Carol", "92", "88", "95", "91.7"]
    ],
    "highlightRow": 2
  }
}
```

---

## Phase 4: Geometry & Trigonometry Additions (Priority: Low)

### 4.1 Trigonometry Graphs (10-15 questions)
**Visualization Type:** `graph`

```json
{
  "type": "graph",
  "config": {
    "width": 350,
    "height": 200,
    "xRange": [-6.28, 6.28],
    "yRange": [-2, 2],
    "elements": [
      { "type": "function", "expression": "sin(x)", "color": "#3498db", "label": "y = sin(x)" }
    ]
  }
}
```

### 4.2 Unit Circle (5-8 questions)
**Visualization Type:** `geometry`

Show unit circle with angle, coordinates on the circle.

---

## Implementation Approach

### Option A: Manual Script (Recommended)
Create a Python script that:
1. Reads each JSON file
2. Identifies questions by keywords/patterns
3. Generates appropriate visualization configs
4. Updates the JSON files

### Option B: Django Management Command
Create a command that:
1. Queries questions without visualizations
2. Uses pattern matching to determine visualization type
3. Adds visualization field to database

---

## File Changes Summary

| File | Estimated Visualizations to Add |
|------|--------------------------------|
| `advanced_math.json` | 40-50 |
| `algebra.json` | 35-45 |
| `problem_solving.json` | 45-55 |
| `geometry.json` | 10-15 (trig graphs) |

**Total: ~130-165 new visualizations**

---

## Verification Checklist

- [ ] All visualization configs are valid JSON
- [ ] Graph ranges are appropriate for the functions
- [ ] Chart data matches question context
- [ ] Number line markers correctly show open/closed intervals
- [ ] Colors are consistent and accessible
- [ ] Labels are clear and positioned correctly
- [ ] Visualizations render correctly in QuestionCard
- [ ] Mobile responsiveness maintained

---

## Timeline Estimate

- Phase 1 (Advanced Math): 40-50 visualizations
- Phase 2 (Algebra): 35-45 visualizations
- Phase 3 (Problem-Solving): 45-55 visualizations
- Phase 4 (Geometry additions): 10-15 visualizations

**Implementation order:** Advanced Math → Algebra → Problem-Solving → Geometry
