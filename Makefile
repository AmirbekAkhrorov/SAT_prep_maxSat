.PHONY: install install-frontend install-backend bootstrap-pip dev dev-frontend dev-backend build lint clean migrate makemigrations

# Python virtualenv. Kept outside the repo on purpose: packages/backend/venv is a
# Windows venv (Scripts/ layout, unusable from WSL), and Python imports off /mnt/c
# are slow. Override with: make dev-backend VENV=/path/to/venv
VENV ?= $(HOME)/.venvs/sat_prep
PY   := $(VENV)/bin/python

# Install all dependencies
install: install-frontend install-backend

install-frontend:
	cd packages/frontend && npm install

install-backend:
	python3 -m venv $(VENV) 2>/dev/null || python3 -m venv --without-pip $(VENV)
	$(PY) -m pip --version >/dev/null 2>&1 || $(MAKE) bootstrap-pip
	$(PY) -m pip install -r packages/backend/requirements.txt

# Debian/Ubuntu split ensurepip into the python3-venv package; when it is absent
# `python3 -m venv` cannot create pip, so fetch pip directly (needs no sudo).
bootstrap-pip:
	curl -sSL https://bootstrap.pypa.io/get-pip.py -o /tmp/get-pip.py
	$(PY) /tmp/get-pip.py
	rm -f /tmp/get-pip.py

# Development servers
dev-frontend:
	cd packages/frontend && npm run dev

dev-backend:
	cd packages/backend && $(PY) manage.py runserver

# Build
build:
	cd packages/frontend && npm run build

# Lint
lint:
	cd packages/frontend && npm run lint

# Database migrations (backend)
migrate:
	cd packages/backend && $(PY) manage.py migrate

makemigrations:
	cd packages/backend && $(PY) manage.py makemigrations

# Clean
clean:
	rm -rf packages/frontend/node_modules
	rm -rf packages/frontend/dist
	rm -rf packages/backend/venv
	rm -rf packages/backend/__pycache__
