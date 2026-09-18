"""Add visualization JSONField to Question model."""

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("questions", "0006_add_monthly_points"),
    ]

    operations = [
        migrations.AddField(
            model_name="question",
            name="visualization",
            field=models.JSONField(
                blank=True,
                help_text="JSON config for visual elements (geometry, graphs, charts, tables)",
                null=True,
            ),
        ),
    ]
