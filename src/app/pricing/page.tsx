import type { Metadata } from 'next';
import Link from 'next/link';
import { PRODUCTS } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'OpsOS pricing and pilot programs — talk to us about the right fit for your operation.',
};

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-ink-border">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <span className="section-label">Pricing</span>
          <h1 className="text-4xl md:text-5xl font-bold text-ink-text mt-3 tracking-tight">
            Priced around what you need, not a generic tier
          </h1>
          <p className="text-lg text-ink-muted mt-4 max-w-2xl mx-auto leading-relaxed">
            Start with the product that matches your most urgent problem, and add the rest of the loop
            when you&apos;re ready. Every conversation starts with a walkthrough of your own operation.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <div key={p.slug} className="content-card p-6 flex flex-col">
                <span className="tag mb-4 self-start">{p.time}</span>
                <h2 className="text-lg font-bold text-ink-text mb-2">{p.name}</h2>
                <p className="text-ink-muted text-sm leading-relaxed flex-1">{p.promise}</p>
                <div className="mt-6 pt-6 border-t border-ink-border">
                  <p className="text-ink-text font-semibold text-sm">Talk to us for pricing</p>
                  <p className="text-ink-subtle text-xs mt-1">Scoped to your facility count and shift structure</p>
                </div>
              </div>
            ))}
          </div>

          <div className="content-card p-8 md:p-10 mt-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-ink-text mb-2">Piloting OpsOS for a single facility?</h2>
              <p className="text-ink-muted text-sm leading-relaxed max-w-xl">
                A focused paid pilot is available for qualified operations. We&apos;ll confirm fit and scope
                during your demo.
              </p>
            </div>
            <Link href="/request-demo" className="btn-primary whitespace-nowrap">Ask About a Pilot</Link>
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
          <Link href="/request-demo" className="btn-primary mt-8 inline-flex">Request a Demo</Link>
        </div>
      </section>
    </>
  );
}
