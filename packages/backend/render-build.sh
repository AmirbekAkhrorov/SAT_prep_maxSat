#!/usr/bin/env bash
# Render build step for the Django API. Runs from packages/backend (rootDir).
set -o errexit
set -o nounset
set -o pipefail

pip install --upgrade pip
pip install -r requirements.txt

# Admin styling comes from here; without it the admin renders unstyled.
python manage.py collectstatic --no-input

python manage.py migrate --no-input

# Rebuild the question bank from the committed JSON. Both commands are
# idempotent (they upsert), so redeploys do not duplicate rows.
# Skills must exist first — questions link to them via skill_ref.
python manage.py seed_skills
python manage.py import_math_questions --all
