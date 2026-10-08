# Zograha Technologies

Official repository for Zograha Technologies website and backend API service.

---

## Architecture Overview

```
zograha/
├── project/              # Official React (Vite + Tailwind CSS + TypeScript) Frontend
├── zograha-backend/      # Backend API Service (Next.js + Prisma + PostgreSQL + Zod)
├── .gitignore
└── README.md
```

### Flow
```
React / Vite Frontend (`project/`)
        ↓  REST API (CORS enabled)
Next.js API Backend (`zograha-backend/`)
        ↓  Prisma ORM
PostgreSQL Database
```

- **Production Frontend**: `https://zograha-website-phi.vercel.app`
- **Production Backend**: `https://zograha-backend.vercel.app`

---

## Local Development Setup

### Prerequisites
- Node.js 18+ (tested with Node 20 / 24)
- npm 9+
- PostgreSQL database (or connection to development instance)

---

### 1. Backend Setup (`zograha-backend/`)

1. Change directory to `zograha-backend`:
   ```bash
   cd zograha-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Copy `.env.example` to `.env` (never commit `.env`):
   ```bash
   cp .env.example .env
   ```
   Configure required credentials in `.env`:
   - `DATABASE_URL` and `DIRECT_URL` (PostgreSQL connection strings)
   - `ADMIN_API_KEY`
   - `IP_HASH_SALT`
   - `FRONTEND_ORIGINS` (e.g. `http://localhost:5173,http://localhost:3000,https://zograha-website-phi.vercel.app`)

4. Generate Prisma client:
   ```bash
   npx prisma generate
   ```

5. Start backend development server (runs on port 4000):
   ```bash
   npm run dev
   ```
   API is accessible at `http://localhost:4000/api`.

---

### 2. Frontend Setup (`project/`)

1. Change directory to `project`:
   ```bash
   cd project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Copy `.env.example` to `.env` (or `.env.local`):
   ```bash
   cp .env.example .env
   ```
   Set:
   ```env
   # Local development:
   VITE_API_URL=http://localhost:4000

   # Or connect directly to production backend for frontend testing:
   # VITE_API_URL=https://zograha-backend.vercel.app
   ```

4. Start frontend development server (runs on port 5173):
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Verification & Testing

### Frontend (`project/`)
```bash
cd project

# Type check
npm run typecheck

# Production build
npm run build

# Preview production build locally
npm run preview
```

### Backend (`zograha-backend/`)
```bash
cd zograha-backend

# Type check
npm run typecheck

# Production build
npm run build

# Database migration check (read-only)
npx prisma migrate status
```

---

## Routing & Pages

The frontend includes full SPA routing with direct navigation and deep links:
- `/` — Homepage (Figma design, dynamic backend integration)
- `/about` — About Us
- `/services` — Services listing (dynamic services from backend)
- `/services/:slug` — Dedicated service pages (Figma designs + dynamic fallback)
  - `/services/app-development`
  - `/services/web-design`
  - `/services/digital-marketing`
  - `/services/publications`
  - `/services/data-management`
  - `/services/web-development`
  - `/services/mobile-app-development`
  - `/services/ui-ux-design`
  - `/services/seo-content`
  - `/services/business-software`
- `/blog` — Blog listing
- `/blog/:slug` — Blog article details (`GET /api/blog/:slug`)
- `/careers` — Career opportunities & job application modal (`POST /api/applications` with resume upload)
- `/contact` — Contact us enquiry form (`POST /api/contact`)
- `/privacy-policy` — Privacy Policy
- `/terms-and-conditions` — Terms and Conditions
- `/projects/:slug` — Project case studies (`GET /api/projects/:slug`)
- `/404` — Custom 404 page

---

## Vercel Deployment Instructions

Deploy using the **existing Vercel frontend project** (`zograha-frontend`):

### 1. Frontend Vercel Project Settings
In the Vercel Dashboard for `zograha-frontend`:
- **Root Directory**: `project` *(previously `zograha-frontend`)*
- **Framework Preset**: `Vite` *(previously `Next.js`)*
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**:
  - `VITE_API_URL` = `https://zograha-backend.vercel.app`

### 2. Backend Vercel Project Settings
In the Vercel Dashboard for `zograha-backend`:
- **Root Directory**: `zograha-backend`
- **Framework Preset**: `Next.js`
- **Environment Variables**:
  - `DATABASE_URL`
  - `DIRECT_URL`
  - `ADMIN_API_KEY`
  - `IP_HASH_SALT`
  - `FRONTEND_ORIGINS` = `http://localhost:5173,https://zograha-website-phi.vercel.app`
  - `BLOB_READ_WRITE_TOKEN` *(for applicant resume uploads)*
  - `RESEND_API_KEY`, `NOTIFY_EMAIL`, `MAIL_FROM` *(for contact notifications)*

---

## Security Policies
- Frontend never stores secrets (`DATABASE_URL`, `ADMIN_API_KEY`, `RESEND_API_KEY`, `BLOB_READ_WRITE_TOKEN`).
- Frontend exposes only public configuration via `VITE_*` environment variables.
- All forms implement input sanitization, client-side validation, and server error handling.
