## Local setup
```bash
npm install
cp .env.example .env        # fill DATABASE_URL, DIRECT_URL, ADMIN_API_KEY
npm run db:migrate -- --name init   # creates prisma/migrations (commit this folder!)
npm run db:seed             # placeholder content
npm run dev                 # http://localhost:4000
```

Free PostgreSQL: [Neon](https://neon.tech) or [Supabase](https://supabase.com) (use the pooled URL for `DATABASE_URL`, direct URL for `DIRECT_URL`).
# Zograha Technologies — Backend API

Next.js (App Router, API-only) + PostgreSQL (Prisma) backend for the Zograha website.
It serves everything dynamic on the site and is designed so any React frontend can plug in later.

| Website need | Endpoint(s) |
|---|---|
| Services + Service details | `GET /api/services`, `GET /api/services/:slug` |
| Industries / Businesses we serve | `GET /api/industries` |
| Portfolio / Projects | `GET /api/projects?featured=true&category=…`, `GET /api/projects/:slug` |
| Testimonials | `GET /api/testimonials` |
| Blog + Blog details (+related) | `GET /api/blog?page&limit&category&tag&q`, `GET /api/blog/:slug` |
| Careers: openings | `GET /api/jobs`, `GET /api/jobs/:slug` |
| Career application form | `POST /api/applications` (JSON or multipart with `resume`) |
| Contact form | `POST /api/contact` |
| Click-to-call / email / WhatsApp / Maps / socials | `GET /api/settings` |
| Sitemap data (for sitemap.xml) | `GET /api/sitemap` |
| Health check | `GET /api/health` |

SEO fields (`seoTitle`, `seoDescription`, `ogImage`) are returned on services, blog and projects so the frontend can fill meta/Open Graph tags.
Static pages (About, Privacy, Terms, 404) need no API. `robots.txt`, favicon and the final `sitemap.xml` belong to the frontend (use `/api/sitemap` to generate it).

## Response format
```json
{ "success": true, "data": …, "meta": { "page": 1, "limit": 12, "total": 30, "totalPages": 3 } }
{ "success": false, "error": { "message": "Validation failed", "details": { "email": ["Enter a valid email"] } } }
```
Status codes: `201` created, `401` unauthorized, `404` not found, `409` duplicate, `422` validation (field errors in `details`), `429` rate limited, `500` server error.

## Admin (content management)
Send header `x-admin-key: <ADMIN_API_KEY>` (or `Authorization: Bearer …`).

- Create: `POST /api/{services|blog|projects|testimonials|industries|jobs}`
- Update: `PATCH /api/{resource}/:slug` (testimonials use `:id`)
- Delete: `DELETE /api/{resource}/:slug`
- List drafts too: `GET /api/{resource}?all=true`
- Inbox: `GET /api/admin/contact`, `GET /api/admin/applications` (`?status=NEW&page=1`), `PATCH /api/admin/{contact|applications}/:id` with `{ "status": "READ" }`, `DELETE` same path.

Example:
```bash
curl -X POST http://localhost:4000/api/blog -H "x-admin-key: $KEY" -H "Content-Type: application/json" \
  -d '{"title":"Hello World","excerpt":"First post","content":"## Hi","published":true}'
```
Slug is auto-generated from the title when omitted. Blog `publishedAt` and `readingTime` are set automatically.

## Local setup
```bash
npm install
cp .env.example .env        # fill DATABASE_URL, DIRECT_URL, ADMIN_API_KEY
npm run db:migrate -- --name init   # creates prisma/migrations (commit this folder!)
npm run db:seed             # placeholder content
npm run dev                 # http://localhost:4000
```
Free PostgreSQL: [Neon](https://neon.tech) or [Supabase](https://supabase.com) (use the pooled URL for `DATABASE_URL`, direct URL for `DIRECT_URL`).

## Deploy on Vercel
1. Push to GitHub with `prisma/migrations` committed.
2. Create a separate Vercel project for this directory and set its Root Directory to `zograha-backend`.
3. Configure `DATABASE_URL`, `DIRECT_URL`, `ADMIN_API_KEY`, `IP_HASH_SALT`, and `FRONTEND_ORIGINS` in Vercel. Never place these in frontend variables.
4. Use the project `vercel-build` command (`prisma generate && prisma migrate deploy && next build`) so only committed migrations are deployed. Do not run `prisma db push` or reset the production database.
5. Configure `BLOB_READ_WRITE_TOKEN` for resume uploads and `RESEND_API_KEY`, `NOTIFY_EMAIL`, and a verified `MAIL_FROM` for notifications when those services are approved.
6. After the backend domain is configured, set the frontend's `NEXT_PUBLIC_API_URL` and add the exact frontend origin to `FRONTEND_ORIGINS`; then verify `/api/health` and CORS.

Do not run the placeholder seed against an existing production database. Seed only a new, confirmed empty database after reviewing the seed content.

## Connecting the frontend
The frontend in the sibling `zograha-frontend` directory already has the API client. Set `NEXT_PUBLIC_API_URL` there and add its origin to `FRONTEND_ORIGINS`.

```ts
const { items } = await api.blog.list({ page: 1, limit: 6 });
try { await api.sendContact(form); } catch (e) { if (e instanceof ApiRequestError) show(e.fieldErrors ?? e.message); }
const fd = new FormData(formEl); await api.apply(fd);   // fields: name,email,phone,jobId,experience,coverLetter,resume(file)
```
Forms include a hidden honeypot input named `website` (must stay empty) and are rate-limited per IP.

## Notes
- Resume files on Vercel Blob are stored with an unguessable URL (public access). Treat links as sensitive.
- Contact/career data contains personal information — add a privacy policy page and a retention policy.
