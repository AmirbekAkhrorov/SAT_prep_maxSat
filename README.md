# SAT Prep - Monorepo

A full-stack SAT preparation application with a React frontend and Django backend.

## Project Structure

```
sat_prep/
├── packages/
│   ├── frontend/          # React + Vite + Tailwind CSS
│   │   ├── src/
│   │   ├── public/
│   │   ├── package.json
│   │   └── vite.config.js
│   └── backend/           # Django REST API
│       ├── accounts/      # User authentication
│       ├── questions/     # SAT questions
│       ├── sat_prep/      # Django project settings
│       ├── manage.py
│       └── requirements.txt
├── package.json           # Root workspace config
├── Makefile              # Development commands
└── README.md
```

## Quick Start

### Prerequisites

- Node.js >= 18
- Python >= 3.10

### Installation

```bash
# Install all dependencies
make install

# Or install separately
make install-frontend
make install-backend
```

### Development

```bash
# Run frontend (http://localhost:5173)
make dev-frontend

# Run backend (http://localhost:8000)
make dev-backend
```

### Using npm workspaces

```bash
# Install dependencies
npm install

# Run frontend
npm run dev:frontend

# Build frontend
npm run build
```

### Backend Commands

```bash
# Run migrations
make migrate

# Create new migrations
make makemigrations
```

## Tech Stack

### Frontend
- React 19
- Vite 7
- Tailwind CSS 4
- Framer Motion

### Backend
- Django 5
- Django REST Framework
- django-allauth (OAuth)
- dj-rest-auth
