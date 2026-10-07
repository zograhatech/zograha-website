# Zograha Technologies Frontend

Next.js App Router frontend for the Zograha Technologies website. The site consumes the existing API in `zograha-backend`; it does not access PostgreSQL or server credentials directly.
## Local development

1. Install dependencies with `npm ci` in `zograha-frontend`.
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_API_URL` to the backend origin (local default: `http://localhost:4000`).
3. Start the backend, then run `npm run dev` in this directory.
4. Open `http://localhost:3000`.

`NEXT_PUBLIC_SITE_URL` controls canonical, sitemap, and robots URLs. Use the local origin for local checks and the confirmed public site origin for production. Only these `NEXT_PUBLIC_*` values belong in the frontend environment.

## Validation

```powershell
npm test
npx tsc --noEmit
npm run lint
npm run build
```

The smoke tests require the backend and database to be running. They perform read-only collection/detail checks and invalid-form validation requests; they do not create contact or career records.

## Vercel deployment

Deploy this directory as a separate Vercel project with its Root Directory set to `zograha-frontend`. Use the standard Next.js install/build settings. Configure:

```text
NEXT_PUBLIC_API_URL=https://<backend-domain>
NEXT_PUBLIC_SITE_URL=https://<frontend-domain>
```

The backend must allow the deployed frontend origin in `FRONTEND_ORIGINS`. Configure domains and DNS in Vercel only after the company confirms domain ownership and the production API URL. Do not add backend secrets to this project.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
