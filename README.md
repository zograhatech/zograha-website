# Zograha Technologies Website

This repository contains two independent Next.js applications:

- `zograha-frontend`: public website on port 3000
- `zograha-backend`: API and Prisma/PostgreSQL service on port 4000

## Local setup

1. Install dependencies with `npm ci` in both application directories.
2. Configure the backend from `zograha-backend/.env.example` into an ignored `zograha-backend/.env`. Set PostgreSQL `DATABASE_URL`, `DIRECT_URL`, `ADMIN_API_KEY`, `IP_HASH_SALT`, and `FRONTEND_ORIGINS`. Optional services/company links are also listed there.
3. Start the backend with `npm run dev` in `zograha-backend`.
4. Copy `zograha-frontend/.env.example` to ignored `zograha-frontend/.env.local`; configure `NEXT_PUBLIC_API_URL=http://localhost:4000` and `NEXT_PUBLIC_SITE_URL=http://localhost:3000`.
5. Start the frontend with `npm run dev` in `zograha-frontend`.

Never put backend credentials in frontend variables. Both env examples contain names and safe local defaults/placeholders only.

## Checks

Frontend, while the backend/database are running:

```powershell
cd zograha-frontend
npm test
npx tsc --noEmit
npm run lint
npm run build
```

Backend:

```powershell
cd zograha-backend
npm run typecheck
npm run build
npx prisma migrate status
```

The backend package currently has no ESLint script. The migration status command is read-only; never reset the database or seed an existing production database.

## Vercel deployment

Create two Vercel projects from this repository:

1. Frontend Root Directory: `zograha-frontend`. Configure `NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_SITE_URL` with the company-approved public origins.
2. Backend Root Directory: `zograha-backend`. Configure `DATABASE_URL`, `DIRECT_URL`, `ADMIN_API_KEY`, `IP_HASH_SALT`, `FRONTEND_ORIGINS`, and the approved company settings. For email notifications configure `RESEND_API_KEY`, `NOTIFY_EMAIL`, and verified `MAIL_FROM`; for resumes configure `BLOB_READ_WRITE_TOKEN`.

The backend's `vercel-build` runs Prisma generation and `prisma migrate deploy`. Confirm migration status/schema alignment before the first deployment. Add the exact frontend origin to backend `FRONTEND_ORIGINS`. Configure domain/DNS in Vercel only after the company confirms domain ownership; do not invent production URLs or credentials.

Social profile variables are optional in the backend env example. Configure genuine company URLs before those links appear. The privacy and terms pages require company/legal review before publication.
