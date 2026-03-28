import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'OpsOS — Warehouse Operations Intelligence',
    template: '%s | OpsOS',
  },
  description: 'OpsOS gives operations managers real-time visibility into throughput, waste, bottlenecks, and headcount efficiency. Built for Tier 2–3 automotive suppliers, steel distributors, and distribution centers.',
  keywords: ['warehouse operations software', 'throughput tracking', 'OEE tracking', 'warehouse KPI dashboard', 'manufacturing operations intelligence', 'bottleneck analysis software'],
  authors: [{ name: 'OpsOS' }],
  creator: 'OpsOS',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://opsos.pro',
    siteName: 'OpsOS',
    title: 'OpsOS — Warehouse Operations Intelligence',
    description: 'Real-time visibility into throughput, waste, bottlenecks, and headcount. Built for manufacturers and distributors.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpsOS — Warehouse Operations Intelligence',
    description: 'Real-time visibility into throughput, waste, bottlenecks, and headcount.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'OpsOS',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Warehouse operations intelligence platform for automotive suppliers and distributors',
  url: 'https://opsos.pro',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: '0',
    highPrice: '497',
    offerCount: '3',
    offers: [
      { '@type': 'Offer', name: 'Free Trial', price: '0', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Growth', price: '497', priceCurrency: 'USD', billingIncrement: 'Monthly' },
      { '@type': 'Offer', name: 'Enterprise', price: 'Custom', priceCurrency: 'USD' },
    ],
  },
  featureList: ['Real-time throughput tracking', 'OEE monitoring', 'Bottleneck identification', 'Waste tracking', 'Shift management', 'Safety incident tracking', 'AI-powered recommendations', 'Lean toolkit'],
  screenshot: 'https://opsos.pro/screenshot.png',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OpsOS',
  url: 'https://opsos.pro',
  logo: 'https://opsos.pro/logo.png',
  description: 'Warehouse operations intelligence platform for mid-size manufacturers and distributors.',
  sameAs: [],
  foundingLocation: { '@type': 'Place', name: 'Detroit, MI' },
  areaServed: 'US',
  knowsAbout: ['Warehouse operations', 'Manufacturing efficiency', 'OEE tracking', 'Lean manufacturing', 'Throughput optimization'],
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
        <Nav />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
