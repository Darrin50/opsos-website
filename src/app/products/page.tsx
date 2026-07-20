import type { Metadata } from 'next';
import Link from 'next/link';
import { PRODUCTS } from '@/lib/products';
import CtaLink from '@/components/CtaLink';

export const metadata: Metadata = {
  title: 'Products',
  description: 'One platform, five product modes: Shift Advisor, Labor Planner, Bridge Center, Loss Intelligence, and OpsOS Complete.',
};

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-ink-border">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <span className="section-label">Products</span>
          <h1 className="text-4xl md:text-5xl font-bold text-ink-text mt-3 tracking-tight max-w-2xl">
            One platform. Five front doors.
          </h1>
          <p className="text-lg text-ink-muted mt-4 max-w-2xl leading-relaxed">
            Each product owns one part of the operating loop. Buy the piece you need today; upgrade to
            the full suite without migration, reconnection, or retraining the AI.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRODUCTS.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="content-card p-8 hover:border-ink-border-strong transition-colors group flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="tag">{p.time}</span>
                  <svg className="w-5 h-5 text-ink-subtle group-hover:text-accent group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-ink-text mb-3">{p.name}</h2>
                <p className="text-ink-muted leading-relaxed flex-1">{p.promise}</p>
                <span className="text-accent text-sm font-semibold mt-6 inline-flex items-center gap-1.5">
                  Learn more
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-ink-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink-text tracking-tight">Not sure which fits your operation?</h2>
          <p className="text-ink-muted mt-4 leading-relaxed">A guided walkthrough is the fastest way to find out.</p>
          <CtaLink href="/request-demo" location="products-overview-final-cta" className="btn-primary mt-8 inline-flex">Request a Demo</CtaLink>
        </div>
      </section>
    </>
  );
}
