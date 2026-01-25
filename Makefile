.PHONY: install install-frontend install-backend dev dev-frontend dev-backend build lint clean

# Install all dependencies
install: install-frontend install-backend

install-frontend:
	cd packages/frontend && npm install

install-backend:
	cd packages/backend && python3 -m venv venv && . venv/bin/activate && pip install -r requirements.txt

# Development servers
dev-frontend:
	cd packages/frontend && npm run dev

dev-backend:
	cd packages/backend && . venv/bin/activate && python manage.py runserver

# Build
build:
	cd packages/frontend && npm run build

# Lint
lint:
	cd packages/frontend && npm run lint

# Database migrations (backend)
migrate:
	cd packages/backend && . venv/bin/activate && python manage.py migrate

makemigrations:
	cd packages/backend && . venv/bin/activate && python manage.py makemigrations

# Clean
clean:
	rm -rf packages/frontend/node_modules
	rm -rf packages/frontend/dist
	rm -rf packages/backend/venv
	rm -rf packages/backend/__pycache__
