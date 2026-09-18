"""
Script to add visualizations to math questions.
Run from packages/backend directory: python add_visualizations.py
"""

import json
import re
import os

# Visualization templates
def create_quadratic_graph(a=1, b=0, c=0, vertex_x=0, vertex_y=0, show_vertex=True):
    """Create a parabola visualization"""
    elements = [
        {
            "type": "function",
            "expression": f"{a}*x^2 + {b}*x + {c}" if b != 0 or c != 0 else f"{a}*x^2",
            "color": "#4169E1",
            "label": "f(x)"
        }
    ]
    if show_vertex:
        elements.append({
            "type": "point",
            "coordinates": [vertex_x, vertex_y],
            "label": "vertex",
            "color": "#e74c3c",
            "radius": 4
        })

    # Calculate y range based on vertex and direction
    if a > 0:
        y_min = min(-2, vertex_y - 2)
        y_max = vertex_y + 10
    else:
        y_min = vertex_y - 10
        y_max = max(2, vertex_y + 2)

    return {
        "type": "graph",
        "config": {
            "width": 300,
            "height": 250,
            "xRange": [-6, 6],
            "yRange": [y_min, y_max],
            "elements": elements
        }
    }

def create_exponential_graph(base=2, coefficient=1):
    """Create an exponential function visualization"""
    return {
        "type": "graph",
        "config": {
            "width": 300,
            "height": 250,
            "xRange": [-3, 4],
            "yRange": [-1, 12],
            "elements": [
                {
                    "type": "function",
                    "expression": f"{coefficient}*{base}^x" if coefficient != 1 else f"{base}^x",
                    "color": "#9b59b6",
                    "label": f"y = {base}^x"
                }
            ]
        }
    }

def create_polynomial_graph(expression, x_range=[-4, 4], y_range=[-10, 10]):
    """Create a polynomial function visualization"""
    return {
        "type": "graph",
        "config": {
            "width": 320,
            "height": 250,
            "xRange": x_range,
            "yRange": y_range,
            "elements": [
                {
                    "type": "function",
                    "expression": expression,
                    "color": "#2ecc71",
                    "label": "f(x)"
                }
            ]
        }
    }

def create_system_graph(func1, func2, intersection=None):
    """Create a system of equations visualization"""
    elements = [
        {"type": "function", "expression": func1, "color": "#3498db", "label": "f(x)"},
        {"type": "function", "expression": func2, "color": "#e74c3c", "label": "g(x)"}
    ]
    if intersection:
        elements.append({
            "type": "point",
            "coordinates": intersection,
            "label": f"({intersection[0]}, {intersection[1]})",
            "color": "#2ecc71",
            "radius": 5
        })
    return {
        "type": "graph",
        "config": {
            "width": 300,
            "height": 250,
            "xRange": [-6, 6],
            "yRange": [-6, 12],
            "elements": elements
        }
    }

def create_linear_graph(slope, intercept, show_intercept=True):
    """Create a linear function visualization"""
    elements = [
        {"type": "line", "slope": slope, "intercept": intercept, "color": "#3498db"}
    ]
    if show_intercept:
        elements.append({
            "type": "point",
            "coordinates": [0, intercept],
            "label": f"(0, {intercept})",
            "color": "#e74c3c",
            "radius": 4
        })
    return {
        "type": "graph",
        "config": {
            "width": 280,
            "height": 250,
            "xRange": [-6, 6],
            "yRange": [-8, 8],
            "elements": elements
        }
    }

def create_number_line(markers, regions=None, range_vals=[-5, 5]):
    """Create a number line visualization for inequalities"""
    config = {
        "width": 350,
        "height": 80,
        "range": range_vals,
        "tickInterval": 1,
        "markers": markers
    }
    if regions:
        config["regions"] = regions
    return {
        "type": "numberLine",
        "config": config
    }

def create_bar_chart(title, data):
    """Create a bar chart visualization"""
    return {
        "type": "chart",
        "config": {
            "chartType": "bar",
            "width": 350,
            "height": 250,
            "title": title,
            "data": data
        }
    }

def create_line_chart(title, data):
    """Create a line chart visualization"""
    return {
        "type": "chart",
        "config": {
            "chartType": "line",
            "width": 350,
            "height": 250,
            "title": title,
            "data": data
        }
    }

def create_scatter_plot(title, data, x_label="x", y_label="y"):
    """Create a scatter plot visualization"""
    return {
        "type": "chart",
        "config": {
            "chartType": "scatter",
            "width": 320,
            "height": 280,
            "title": title,
            "xLabel": x_label,
            "yLabel": y_label,
            "data": data
        }
    }

def create_pie_chart(title, data):
    """Create a pie chart visualization"""
    return {
        "type": "chart",
        "config": {
            "chartType": "pie",
            "width": 300,
            "height": 300,
            "title": title,
            "data": data
        }
    }

def create_data_table(title, headers, rows, highlight_row=None):
    """Create a data table visualization"""
    config = {
        "title": title,
        "headers": headers,
        "rows": rows
    }
    if highlight_row is not None:
        config["highlightRow"] = highlight_row
    return {
        "type": "table",
        "config": config
    }

def create_absolute_value_graph(h=0, k=0, a=1):
    """Create absolute value function |x-h| + k"""
    return {
        "type": "graph",
        "config": {
            "width": 280,
            "height": 250,
            "xRange": [-6, 6],
            "yRange": [-2, 8],
            "elements": [
                {
                    "type": "function",
                    "expression": f"{a}*abs(x - {h}) + {k}" if h != 0 else f"{a}*abs(x) + {k}",
                    "color": "#9b59b6",
                    "label": "f(x)"
                },
                {
                    "type": "point",
                    "coordinates": [h, k],
                    "label": "vertex",
                    "color": "#e74c3c",
                    "radius": 4
                }
            ]
        }
    }

def create_trig_graph(func="sin", amplitude=1, period_factor=1):
    """Create trigonometric function visualization"""
    return {
        "type": "graph",
        "config": {
            "width": 350,
            "height": 200,
            "xRange": [-6.28, 6.28],
            "yRange": [-2, 2],
            "elements": [
                {
                    "type": "function",
                    "expression": f"{amplitude}*{func}({period_factor}*x)" if amplitude != 1 or period_factor != 1 else f"{func}(x)",
                    "color": "#3498db",
                    "label": f"y = {func}(x)"
                }
            ]
        }
    }


def should_add_visualization(question, existing_viz):
    """Determine if a question should get a visualization"""
    if existing_viz:
        return False, None

    text = question.get("question_text", "").lower()
    q_id = question.get("question_id", "")
    skill = question.get("skill_name", "").lower()

    # Skip questions that are purely computational/algebraic without graphical elements
    skip_keywords = ["simplify", "factor completely", "expand", "foil", "evaluate", "calculate"]
    if any(kw in text for kw in skip_keywords) and "graph" not in text:
        return False, None

    return True, None


def add_visualizations_to_advanced_math(questions):
    """Add visualizations to Advanced Math questions"""
    count = 0

    for q in questions:
        if q.get("visualization"):
            continue

        text = q.get("question_text", "").lower()
        q_id = q.get("question_id", "")
        skill = q.get("skill_name", "").lower()
        difficulty = q.get("difficulty", "")

        # Quadratic/parabola questions
        if any(kw in text for kw in ["parabola", "vertex", "opens upward", "opens downward", "axis of symmetry"]):
            # Extract coefficients if possible, otherwise use defaults
            if "x² + 4" in text or "x^2 + 4" in text:
                q["visualization"] = create_quadratic_graph(1, 0, 4, 0, 4, True)
            elif "x² - 4" in text or "-x² + 4" in text:
                q["visualization"] = create_quadratic_graph(-1, 0, 4, 0, 4, True)
            elif "x² - 4x + 3" in text:
                q["visualization"] = create_quadratic_graph(1, -4, 3, 2, -1, True)
            elif "2x² - 8x + 6" in text:
                q["visualization"] = create_quadratic_graph(2, -8, 6, 2, -2, True)
            else:
                q["visualization"] = create_quadratic_graph(1, 0, 0, 0, 0, True)
            count += 1
            continue

        # Maximum/minimum value questions for quadratics
        if ("maximum" in text or "minimum" in text) and ("f(x)" in text or "function" in text):
            if "-x²" in text or "-x^2" in text:
                q["visualization"] = create_quadratic_graph(-1, 0, 4, 0, 4, True)
            elif "x²" in text or "x^2" in text:
                q["visualization"] = create_quadratic_graph(1, -4, 0, 2, -4, True)
            count += 1
            continue

        # Exponential function questions
        if any(kw in text for kw in ["2^x", "3^x", "exponential growth", "exponential decay", "doubles", "triples"]):
            if "3^x" in text:
                q["visualization"] = create_exponential_graph(3)
            elif "decay" in text or "half" in text:
                q["visualization"] = create_exponential_graph(0.5)
            else:
                q["visualization"] = create_exponential_graph(2)
            count += 1
            continue

        # System of equations (quadratic and linear)
        if "y = x²" in text and ("y = " in text or "line" in text):
            if "y = 4" in text:
                q["visualization"] = create_system_graph("x^2", "4", [2, 4])
            elif "y = x" in text:
                q["visualization"] = create_system_graph("x^2", "x", [1, 1])
            elif "y = 2x" in text:
                q["visualization"] = create_system_graph("x^2", "2*x", [2, 4])
            else:
                q["visualization"] = create_system_graph("x^2", "x + 2")
            count += 1
            continue

        # Polynomial functions (cubic, etc.)
        if any(kw in text for kw in ["x³", "x^3", "cubic", "polynomial"]) and difficulty in ["medium", "hard"]:
            if "x³ - 3x" in text or "x^3 - 3x" in text:
                q["visualization"] = create_polynomial_graph("x^3 - 3*x")
            elif "x³" in text or "x^3" in text:
                q["visualization"] = create_polynomial_graph("x^3")
            count += 1
            continue

        # Zeros/roots visualization for medium/hard questions
        if ("zeros" in text or "roots" in text or "x-intercept" in text) and difficulty in ["medium", "hard"]:
            if "x² - 9" in text:
                q["visualization"] = create_quadratic_graph(1, 0, -9, 0, -9, False)
            elif "x² - 4" in text:
                q["visualization"] = create_quadratic_graph(1, 0, -4, 0, -4, False)
            count += 1
            continue

    return count


def add_visualizations_to_algebra(questions):
    """Add visualizations to Algebra questions"""
    count = 0

    for q in questions:
        if q.get("visualization"):
            continue

        text = q.get("question_text", "").lower()
        q_id = q.get("question_id", "")
        skill = q.get("skill_name", "").lower()
        difficulty = q.get("difficulty", "")

        # Linear equation/slope questions
        if any(kw in text for kw in ["slope", "y-intercept", "linear equation", "line passes through"]):
            if "slope of 2" in text or "slope is 2" in text:
                q["visualization"] = create_linear_graph(2, -1)
            elif "slope of -1" in text or "slope is -1" in text:
                q["visualization"] = create_linear_graph(-1, 3)
            elif "slope of 3" in text:
                q["visualization"] = create_linear_graph(3, -2)
            elif "y = 2x + 3" in text:
                q["visualization"] = create_linear_graph(2, 3)
            elif "y = -x + 4" in text:
                q["visualization"] = create_linear_graph(-1, 4)
            else:
                q["visualization"] = create_linear_graph(1, 2)
            count += 1
            continue

        # System of linear equations
        if "system" in text and ("linear" in skill or "equation" in text):
            if difficulty in ["medium", "hard"]:
                q["visualization"] = create_system_graph("x + 2", "-x + 4", [1, 3])
                count += 1
                continue

        # Inequality questions
        if any(kw in text for kw in ["x >", "x <", "x ≥", "x ≤", "x >=", "x <=", "inequality", "solution set"]):
            if "x > 2" in text or "x ≥ 2" in text:
                open_marker = ">" in text and "=" not in text[text.find(">"):text.find(">")+2]
                q["visualization"] = create_number_line(
                    [{"value": 2, "open": open_marker, "color": "#e74c3c"}],
                    [{"start": 2, "end": 5, "type": "ray", "direction": "right", "open": open_marker, "color": "#3498db"}]
                )
            elif "x < 3" in text or "x ≤ 3" in text:
                open_marker = "<" in text and "=" not in text[text.find("<"):text.find("<")+2]
                q["visualization"] = create_number_line(
                    [{"value": 3, "open": open_marker, "color": "#e74c3c"}],
                    [{"start": -5, "end": 3, "type": "ray", "direction": "left", "open": open_marker, "color": "#3498db"}]
                )
            elif "-3" in text and "5" in text:  # Compound inequality
                q["visualization"] = create_number_line(
                    [{"value": -3, "open": True, "color": "#e74c3c"}, {"value": 5, "open": True, "color": "#e74c3c"}],
                    [{"start": -3, "end": 5, "color": "#3498db"}]
                )
            else:
                q["visualization"] = create_number_line(
                    [{"value": 0, "open": True, "color": "#e74c3c"}],
                    [{"start": 0, "end": 5, "type": "ray", "direction": "right", "open": True, "color": "#3498db"}]
                )
            count += 1
            continue

        # Absolute value
        if "|x" in text or "absolute value" in text:
            if "|x - 2|" in text:
                q["visualization"] = create_absolute_value_graph(2, 0)
            elif "|x + 3|" in text:
                q["visualization"] = create_absolute_value_graph(-3, 0)
            else:
                q["visualization"] = create_absolute_value_graph(0, 0)
            count += 1
            continue

    return count


def add_visualizations_to_problem_solving(questions):
    """Add visualizations to Problem Solving & Data Analysis questions"""
    count = 0

    colors = ["#3498db", "#2ecc71", "#e74c3c", "#9b59b6", "#f39c12", "#1abc9c"]

    for q in questions:
        if q.get("visualization"):
            continue

        text = q.get("question_text", "").lower()
        q_id = q.get("question_id", "")
        skill = q.get("skill_name", "").lower()
        difficulty = q.get("difficulty", "")

        # Bar chart questions
        if any(kw in text for kw in ["bar chart", "bar graph", "histogram"]):
            q["visualization"] = create_bar_chart(
                "Data Distribution",
                [
                    {"label": "A", "value": 45, "color": colors[0]},
                    {"label": "B", "value": 32, "color": colors[1]},
                    {"label": "C", "value": 58, "color": colors[2]},
                    {"label": "D", "value": 41, "color": colors[3]}
                ]
            )
            count += 1
            continue

        # Scatter plot / correlation questions
        if any(kw in text for kw in ["scatter", "correlation", "line of best fit", "regression"]):
            q["visualization"] = create_scatter_plot(
                "Data Correlation",
                [
                    {"x": 1, "y": 22}, {"x": 2, "y": 28}, {"x": 3, "y": 35},
                    {"x": 4, "y": 40}, {"x": 5, "y": 48}, {"x": 6, "y": 52},
                    {"x": 7, "y": 61}, {"x": 8, "y": 65}
                ],
                "X Variable",
                "Y Variable"
            )
            count += 1
            continue

        # Pie chart / percentage questions
        if any(kw in text for kw in ["pie chart", "pie graph", "sector", "percentage of total"]):
            q["visualization"] = create_pie_chart(
                "Distribution",
                [
                    {"label": "Category A", "value": 35, "color": colors[0]},
                    {"label": "Category B", "value": 25, "color": colors[1]},
                    {"label": "Category C", "value": 20, "color": colors[2]},
                    {"label": "Category D", "value": 20, "color": colors[3]}
                ]
            )
            count += 1
            continue

        # Line graph / trend questions
        if any(kw in text for kw in ["line graph", "trend", "over time", "rate of change"]):
            q["visualization"] = create_line_chart(
                "Trend Over Time",
                [
                    {"label": "T1", "value": 20},
                    {"label": "T2", "value": 35},
                    {"label": "T3", "value": 28},
                    {"label": "T4", "value": 45},
                    {"label": "T5", "value": 52}
                ]
            )
            count += 1
            continue

        # Table-based questions
        if any(kw in text for kw in ["table shows", "table below", "according to the table", "data in the table"]):
            q["visualization"] = create_data_table(
                "Data Table",
                ["Category", "Value 1", "Value 2", "Total"],
                [
                    ["Group A", "25", "30", "55"],
                    ["Group B", "18", "42", "60"],
                    ["Group C", "32", "28", "60"]
                ]
            )
            count += 1
            continue

        # Mean/median/statistics with numbers mentioned
        if ("mean" in text or "median" in text or "average" in text) and difficulty in ["medium", "hard"]:
            # Check if there are numbers that could be visualized
            numbers = re.findall(r'\b\d+\b', text)
            if len(numbers) >= 4:
                nums = [int(n) for n in numbers[:5]]
                q["visualization"] = create_bar_chart(
                    "Data Values",
                    [{"label": f"V{i+1}", "value": n, "color": colors[i % len(colors)]} for i, n in enumerate(nums)]
                )
                count += 1
                continue

    return count


def add_visualizations_to_geometry(questions):
    """Add trigonometry visualizations to Geometry questions"""
    count = 0

    for q in questions:
        if q.get("visualization"):
            continue

        text = q.get("question_text", "").lower()
        skill = q.get("skill_name", "").lower()

        # Trigonometric function graphs
        if any(kw in text for kw in ["sin(x)", "cos(x)", "tan(x)", "sine graph", "cosine graph"]):
            if "cos" in text:
                q["visualization"] = create_trig_graph("cos")
            elif "tan" in text:
                q["visualization"] = create_trig_graph("tan")
            else:
                q["visualization"] = create_trig_graph("sin")
            count += 1
            continue

        # Period/amplitude questions
        if "period" in text or "amplitude" in text:
            if "2sin" in text:
                q["visualization"] = create_trig_graph("sin", 2, 1)
            elif "sin(2x)" in text:
                q["visualization"] = create_trig_graph("sin", 1, 2)
            count += 1
            continue

    return count


def process_file(filepath, processor_func):
    """Process a single JSON file"""
    print(f"\nProcessing: {filepath}")

    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)

    questions = data.get("questions", [])
    original_with_viz = sum(1 for q in questions if q.get("visualization"))

    added = processor_func(questions)

    final_with_viz = sum(1 for q in questions if q.get("visualization"))

    print(f"  Total questions: {len(questions)}")
    print(f"  Originally had visualizations: {original_with_viz}")
    print(f"  Added visualizations: {added}")
    print(f"  Now have visualizations: {final_with_viz}")

    # Save the updated file
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    return added


def main():
    base_path = os.path.dirname(os.path.abspath(__file__))
    data_path = os.path.join(base_path, "data", "math")

    total_added = 0

    # Process each file (skip geometry - it's already good)
    files_and_processors = [
        ("advanced_math.json", add_visualizations_to_advanced_math),
        ("algebra.json", add_visualizations_to_algebra),
        ("problem_solving.json", add_visualizations_to_problem_solving),
        # ("geometry.json", add_visualizations_to_geometry),  # Skip - already ideal
    ]

    for filename, processor in files_and_processors:
        filepath = os.path.join(data_path, filename)
        if os.path.exists(filepath):
            added = process_file(filepath, processor)
            total_added += added
        else:
            print(f"File not found: {filepath}")

    print(f"\n{'='*50}")
    print(f"Total visualizations added: {total_added}")


if __name__ == "__main__":
    main()
