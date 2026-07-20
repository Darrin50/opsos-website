import type { Metadata } from 'next';
import { PRODUCTS } from '@/lib/products';
import CtaLink from '@/components/CtaLink';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'OpsOS platform pricing — plans start at $2,000 per month, plus implementation.',
};

type Tier = {
  name: string;
  monthly: string;
  implementation: string;
  description: string;
  featured?: boolean;
};

// Bundled OpsOS platform pricing (Darrin decision, control-plane issue #58,
// 2026-07-20) — per-platform tiers, not per-product. Do not restore the
// retired $497/mo offer or the free 30-day trial; do not invent numbers.
const TIERS: Tier[] = [
  {
    name: 'Starter',
    monthly: '$2,000',
    implementation: '$5,000',
    description: 'For a single facility getting the core loop running.',
  },
  {
    name: 'Growth',
    monthly: '$3,500',
    implementation: '$10,000–$15,000',
    description: 'For multi-facility operations scaling the full product family.',
    featured: true,
  },
  {
    name: 'Enterprise',
    monthly: 'Custom',
    implementation: 'Custom',
    description: 'For large or complex operations with custom scope and integrations.',
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-ink-border">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <span className="section-label">Pricing</span>
          <h1 className="text-4xl md:text-5xl font-bold text-ink-text mt-3 tracking-tight">
            Plans start at $2,000 per month, plus implementation
          </h1>
          <p className="text-lg text-ink-muted mt-4 max-w-2xl mx-auto leading-relaxed">
            Every plan covers the OpsOS platform. Exact product access and enterprise scope are
            confirmed during your demo.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`content-card p-8 flex flex-col ${tier.featured ? '!border-accent' : ''}`}
              >
                {tier.featured && <span className="tag mb-4 self-start">Most common</span>}
                <h2 className="text-lg font-bold text-ink-text mb-1">{tier.name}</h2>
                <p className="text-ink-muted text-sm leading-relaxed mb-6">{tier.description}</p>
                <div className="mt-auto pt-6 border-t border-ink-border">
                  <p className="text-3xl font-bold text-ink-text">
                    {tier.monthly}
                    {tier.monthly !== 'Custom' && <span className="text-sm font-normal text-ink-muted">/mo</span>}
                  </p>
                  <p className="text-ink-subtle text-xs mt-2">Implementation: {tier.implementation}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-ink-subtle text-xs text-center mt-6">
            Figures are platform-level starting prices. Your quote depends on facility count and
            shift structure — we&apos;ll confirm it during your demo.
          </p>
        </div>
      </section>

      <section className="py-20 border-t border-ink-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">What&apos;s included</span>
            <h2 className="text-3xl font-bold text-ink-text mt-3 tracking-tight">
              Five products, one platform
            </h2>
            <p className="text-ink-muted mt-4 max-w-2xl mx-auto leading-relaxed">
              Every plan gives you access to the OpsOS product family. Which products and how much
              of each is scoped to your operation during Request Demo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <div key={p.slug} className="content-card p-6 flex flex-col">
                <span className="tag mb-4 self-start">{p.time}</span>
                <h3 className="text-lg font-bold text-ink-text mb-2">{p.name}</h3>
                <p className="text-ink-muted text-sm leading-relaxed flex-1">{p.promise}</p>
              </div>
            ))}
          </div>

          <div className="content-card p-8 md:p-10 mt-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-ink-text mb-2">Piloting OpsOS for a single facility?</h2>
              <p className="text-ink-muted text-sm leading-relaxed max-w-xl">
                Pilots are sales-scoped and quoted case by case — we&apos;ll confirm fit, timing,
                and cost during your demo.
              </p>
            </div>
            <CtaLink href="/request-demo" location="pricing-header" className="btn-primary whitespace-nowrap">Ask About a Pilot</CtaLink>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-ink-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink-text tracking-tight">Get a number for your operation</h2>
          <p className="text-ink-muted mt-4 leading-relaxed">
            Pricing depends on facility count, shift structure, and which products you need. We&apos;ll
            walk through it together.
          </p>
          <CtaLink href="/request-demo" location="pricing-final-cta" className="btn-primary mt-8 inline-flex">Request a Demo</CtaLink>
        </div>
      </section>
    </>
  );
}
