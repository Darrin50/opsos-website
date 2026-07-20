import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://opsos.pro'),
  title: {
    default: 'OpsOS — Your systems show what happened. OpsOS tells managers what to do next.',
    template: '%s | OpsOS',
  },
  description: 'OpsOS is the operating loop for shift-based operations: Shift Advisor tells managers what to do right now, Labor Planner staffs the shift before it runs, Bridge Center explains what happened with evidence, and Loss Intelligence shows where time, labor, capacity, and money were lost.',
  keywords: ['shift management software', 'labor planning software', 'operations intelligence platform', 'staffing optimization', 'shift handoff software', 'operational loss tracking'],
  authors: [{ name: 'OpsOS' }],
  creator: 'OpsOS',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://opsos.pro',
    siteName: 'OpsOS',
    title: 'OpsOS — Your systems show what happened. OpsOS tells managers what to do next.',
    description: 'The operating loop for shift-based operations: plan the shift, run it, act on it, explain it, and learn from it — one platform, five front doors.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpsOS — Your systems show what happened. OpsOS tells managers what to do next.',
    description: 'The operating loop for shift-based operations: Plan → Run → Act → Bridge → Learn.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// Pricing is a confirmed-truth gate (OpsOS#148 §money/pricing) — no Offer/price
// values are declared here until current pricing is confirmed. Adding invented
// numbers to this schema would misrepresent the product the same way the prior
// hardcoded $497/mo figure did.
const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'OpsOS',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'OpsOS is one platform, five product modes: Shift Advisor (now), Labor Planner (ahead), Bridge Center (explain), Loss Intelligence (recover), and OpsOS Complete (the full Plan-Run-Act-Bridge-Learn loop).',
  url: 'https://opsos.pro',
  featureList: ['Live shift guidance', 'Pre-shift labor planning', 'Evidence-backed shift bridging', 'Loss ledger and countermeasures', 'Deterministic engine calculations', 'AI-explained recommendations'],
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OpsOS',
  url: 'https://opsos.pro',
  logo: 'https://opsos.pro/logo.png',
  description: 'OpsOS is the operating loop for shift-based operations — plan, run, act, bridge, and learn.',
  sameAs: [],
  foundingLocation: { '@type': 'Place', name: 'Detroit, MI' },
  areaServed: 'US',
  knowsAbout: ['Shift management', 'Labor planning', 'Operations intelligence', 'Staffing optimization'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Nav />
        <main id="main-content" className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
