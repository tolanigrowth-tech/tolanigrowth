# TolaniGrowth

One-page marketing site for TolaniGrowth — websites for local businesses across metro Atlanta.

Stack: Next.js 15 (App Router) · TypeScript · Tailwind CSS · Lucide React.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Then promote to production:

```bash
vercel --prod
```

Or push to GitHub and import the repo at https://vercel.com/new — Vercel auto-detects Next.js.

## Connect your custom domain (Tolanigrowth.com)

1. In Vercel: open the project → **Settings → Domains** → add `tolanigrowth.com` and `www.tolanigrowth.com`.
2. Vercel will show DNS records. At your domain registrar (Namecheap / GoDaddy / etc.):
   - Point the apex `@` record (A record) to `76.76.21.21`.
   - Point `www` (CNAME) to `cname.vercel-dns.com`.
3. Wait for DNS to propagate (usually a few minutes). Vercel issues SSL automatically.

## Add email (Resend) later

The contact form posts to `/api/contact`, which currently `console.log`s the submission.

To send real email:

1. Sign up at https://resend.com and verify the `tolanigrowth.com` domain.
2. Install: `npm install resend`
3. Add `RESEND_API_KEY` to Vercel env vars (Settings → Environment Variables).
4. In `app/api/contact/route.ts`, uncomment the Resend block and remove the `console.log`.

## Project structure

```
app/
  api/contact/route.ts   # form endpoint
  globals.css
  layout.tsx
  page.tsx               # the entire one-page site
components/
  Button.tsx
  Card.tsx
  ContactForm.tsx
```
