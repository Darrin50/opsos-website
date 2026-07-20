# OpsOS Website

Marketing website for OpsOS — the five-product Warehouse Operations Intelligence
platform (Shift Advisor, Labor Planner, Bridge Center, Loss Intelligence, OpsOS
Complete). Rebuilt HCO-123 (control-plane issue #58, product brief
`Darrin50/OpsOS#148`) to replace the retired 6-module positioning.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Email:** Resend (server-side, see Environment variables below)
- **Deployment:** Vercel

## Pages

- `/` — Homepage
- `/products`, `/products/[slug]` — The five-product family
- `/who-its-for` — Industry pages
- `/pricing` — Bundled platform pricing: Starter ($2,000/mo), Growth ($3,500/mo),
  Enterprise (custom) — see the page for implementation fees and exact terms
- `/request-demo` — Demo request form (`POST /api/demo`)
- `/contact` — Contact form (`POST /api/contact`)
- `/blog` — Blog index
- `/blog/[slug]` — Individual blog posts with Article + FAQ JSON-LD
- `/features` — Redirects to `/products` (legacy URL)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

The demo and contact forms send email via [Resend](https://resend.com). Without
these set, the API routes respond with a clear, retryable error and no form
ever silently fails as "sent":

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Server-side only — never exposed to the client. |
| `RESEND_FROM_EMAIL` | Verified sending address on the `opsos.pro` domain. |
| `OPSOS_LEADS_TO` | Inbox that receives demo/contact submissions. |

See `.env.example`. Local dev works without these set (forms will show the
configuration error); production requires all three in Vercel.

## Testing

```bash
npm test
```

Vitest covers `src/lib/leadSubmission.ts` (validation, honeypot, rate limiting,
Resend call) with a mocked provider response — no live email is sent in tests.

## Deploy to Vercel

1. Connect this repo to Vercel at [vercel.com/new](https://vercel.com/new)
2. Select the `opsos-website` repo
3. Framework: Next.js (auto-detected)
4. Set the three Resend environment variables above before the first
   production smoke test of the demo/contact forms
5. Deploy — Vercel handles the rest

## Brand

- Background: `#0B0C0E` (`ink-black`)
- Primary accent: `#4C7CF5`
- Body font: Inter; JetBrains Mono reserved for data readouts inside framed
  `.demo-frame` panels only
- Full token set: `tailwind.config.js`; design profile:
  `hco-product-design-director/profiles/opsos-marketing.md`

Built by [Caliber Web Studio](https://caliberwebstudio.com)
