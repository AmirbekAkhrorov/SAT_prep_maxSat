"""
Management command to seed the database with official SAT Math skills.
"""

from django.core.management.base import BaseCommand

from questions.models import Skill


# Official SAT Math Skills from College Board
MATH_SKILLS = [
    # Algebra (5 skills)
    {
        "skill_id": "ALG-1",
        "domain": Skill.ALGEBRA,
        "name": "Linear equations in one variable",
        "description": "Solve, interpret, and create linear equations in one variable",
        "order": 1,
    },
    {
        "skill_id": "ALG-2",
        "domain": Skill.ALGEBRA,
        "name": "Linear functions",
        "description": "Understand function notation, slope, intercepts, and linear function behavior",
        "order": 2,
    },
    {
        "skill_id": "ALG-3",
        "domain": Skill.ALGEBRA,
        "name": "Linear equations in two variables",
        "description": "Work with Ax+By=C form, graphing, parallel and perpendicular lines",
        "order": 3,
    },
    {
        "skill_id": "ALG-4",
        "domain": Skill.ALGEBRA,
        "name": "Systems of two linear equations in two variables",
        "description": "Solve systems of linear equations, determine solution types (none, one, infinite)",
        "order": 4,
    },
    {
        "skill_id": "ALG-5",
        "domain": Skill.ALGEBRA,
        "name": "Linear inequalities in one or two variables",
        "description": "Solve and graph linear inequalities, interpret solutions",
        "order": 5,
    },
    # Advanced Math (4 skills)
    {
        "skill_id": "ADV-1",
        "domain": Skill.ADVANCED_MATH,
        "name": "Equivalent expressions",
        "description": "Factor, expand, and simplify polynomials and rational expressions",
        "order": 1,
    },
    {
        "skill_id": "ADV-2",
        "domain": Skill.ADVANCED_MATH,
        "name": "Nonlinear equations in one variable",
        "description": "Solve quadratic, absolute value, rational, and radical equations",
        "order": 2,
    },
    {
        "skill_id": "ADV-3",
        "domain": Skill.ADVANCED_MATH,
        "name": "Nonlinear functions",
        "description": "Understand quadratic, exponential, polynomial, and other nonlinear functions",
        "order": 3,
    },
    {
        "skill_id": "ADV-4",
        "domain": Skill.ADVANCED_MATH,
        "name": "Systems of equations in two variables",
        "description": "Solve systems with at least one nonlinear equation",
        "order": 4,
    },
    # Problem-Solving and Data Analysis (7 skills)
    {
        "skill_id": "PDA-1",
        "domain": Skill.PROBLEM_SOLVING,
        "name": "Ratios, rates, proportional relationships, and units",
        "description": "Set up and solve proportions, perform unit conversions",
        "order": 1,
    },
    {
        "skill_id": "PDA-2",
        "domain": Skill.PROBLEM_SOLVING,
        "name": "Percentages",
        "description": "Calculate percent change, discounts, interest, taxes, and tips",
        "order": 2,
    },
    {
        "skill_id": "PDA-3",
        "domain": Skill.PROBLEM_SOLVING,
        "name": "One-variable data: Distributions and measures of center and spread",
        "description": "Analyze mean, median, mode, range, standard deviation, and outliers",
        "order": 3,
    },
    {
        "skill_id": "PDA-4",
        "domain": Skill.PROBLEM_SOLVING,
        "name": "Two-variable data: Models and scatterplots",
        "description": "Work with line of best fit, correlation, and make predictions",
        "order": 4,
    },
    {
        "skill_id": "PDA-5",
        "domain": Skill.PROBLEM_SOLVING,
        "name": "Probability and conditional probability",
        "description": "Calculate probabilities and understand conditional events",
        "order": 5,
    },
    {
        "skill_id": "PDA-6",
        "domain": Skill.PROBLEM_SOLVING,
        "name": "Inference from sample statistics and margin of error",
        "description": "Understand confidence intervals, margin of error, and sampling",
        "order": 6,
    },
    {
        "skill_id": "PDA-7",
        "domain": Skill.PROBLEM_SOLVING,
        "name": "Evaluating statistical claims: Observational studies and experiments",
        "description": "Distinguish between observational studies and experiments, identify bias",
        "order": 7,
    },
    # Geometry and Trigonometry (4 skills)
    {
        "skill_id": "GEO-1",
        "domain": Skill.GEOMETRY,
        "name": "Area and volume",
        "description": "Calculate area, surface area, and volume of various shapes",
        "order": 1,
    },
    {
        "skill_id": "GEO-2",
        "domain": Skill.GEOMETRY,
        "name": "Lines, angles, and triangles",
        "description": "Work with angle relationships, triangle properties, similarity, and congruence",
        "order": 2,
    },
    {
        "skill_id": "GEO-3",
        "domain": Skill.GEOMETRY,
        "name": "Right triangles and trigonometry",
        "description": "Apply Pythagorean theorem, sin/cos/tan ratios, and special right triangles",
        "order": 3,
    },
    {
        "skill_id": "GEO-4",
        "domain": Skill.GEOMETRY,
        "name": "Circles",
        "description": "Work with circle equations, arc length, sector area, and inscribed angles",
        "order": 4,
    },
]


class Command(BaseCommand):
    help = "Seed the database with official SAT Math skills"

    def add_arguments(self, parser):
        parser.add_argument(
            "--clear",
            action="store_true",
            help="Clear existing skills before seeding",
        )

    def handle(self, *args, **options):
        if options["clear"]:
            deleted_count, _ = Skill.objects.all().delete()
            self.stdout.write(self.style.WARNING(f"Deleted {deleted_count} existing skills"))

        created_count = 0
        updated_count = 0

        for skill_data in MATH_SKILLS:
            skill, created = Skill.objects.update_or_create(
                skill_id=skill_data["skill_id"],
                defaults={
                    "domain": skill_data["domain"],
                    "name": skill_data["name"],
                    "description": skill_data["description"],
                    "order": skill_data["order"],
                },
            )
            if created:
                created_count += 1
            else:
                updated_count += 1

        self.stdout.write(
            self.style.SUCCESS(
                f"Successfully seeded skills: {created_count} created, {updated_count} updated"
            )
        )

        # Print summary by domain
        self.stdout.write("\nSkills by domain:")
        for domain, _ in Skill.DOMAIN_CHOICES:
            count = Skill.objects.filter(domain=domain).count()
            self.stdout.write(f"  {domain}: {count} skills")
