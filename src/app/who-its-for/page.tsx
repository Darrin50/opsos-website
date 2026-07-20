import type { Metadata } from 'next';
import Link from 'next/link';
import CtaLink from '@/components/CtaLink';

export const metadata: Metadata = {
  title: "Who It's For",
  description: 'OpsOS is built for operations that run in shifts — planned before, guided during, and explained after.',
};

const FIT_SIGNALS = [
  {
    title: 'You staff shifts, not just schedules',
    body: 'Someone decides headcount, certifications, and coverage before a shift starts — and adjusts it when the day doesn’t go to plan.',
  },
  {
    title: 'A bad shift is expensive to not understand',
    body: 'When a shift underperforms, you need to know why in hours, not weeks — and be able to show your evidence, not just your explanation.',
  },
  {
    title: 'Losses repeat if nobody tracks them past the shift',
    body: 'The same gap keeps costing you because no one owns it after the shift ends — it never becomes a tracked, resolved item.',
  },
  {
    title: 'You report upward on operational performance',
    body: 'Whether that’s a plant manager, an ops director, or an owner — someone above you expects an evidence-backed account, not a summary from memory.',
  },
];

const ROLES = [
  { title: 'Shift supervisors', body: 'Need the next right move while a shift is still recoverable — not a report after it’s over.' },
  { title: 'Operations managers', body: 'Own staffing decisions before the shift and the explanation after it.' },
  { title: 'Plant / ops directors', body: 'Need the loss ledger and evidence trail across shifts and weeks, not a single shift’s story.' },
];

export default function WhoItsForPage() {
  return (
    <>
      <section className="border-b border-ink-border">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <span className="section-label">Who It&apos;s For</span>
          <h1 className="text-4xl md:text-5xl font-bold text-ink-text mt-3 tracking-tight max-w-2xl">
            Built for operations that run in shifts
          </h1>
          <p className="text-lg text-ink-muted mt-4 max-w-2xl leading-relaxed">
            If staffing gets decided before a shift, performance gets managed during it, and results get
            explained upward afterward, OpsOS fits how your operation already works.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="section-label">You&apos;re a fit if&hellip;</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {FIT_SIGNALS.map((f) => (
              <div key={f.title} className="content-card p-6">
                <h2 className="text-ink-text font-semibold mb-2">{f.title}</h2>
                <p className="text-ink-muted text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-ink-border">
        <div className="max-w-7xl mx-auto px-6">
          <span className="section-label">Who Uses It</span>
          <h2 className="text-3xl font-bold text-ink-text mt-3 tracking-tight mb-10">One loop, three roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROLES.map((r) => (
              <div key={r.title}>
                <h3 className="text-ink-text font-semibold mb-3">{r.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-ink-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink-text tracking-tight">Not sure OpsOS fits your operation?</h2>
          <p className="text-ink-muted mt-4 leading-relaxed">Walk through it on your own shift structure.</p>
          <CtaLink href="/request-demo" location="who-its-for-final-cta" className="btn-primary mt-8 inline-flex">Request a Demo</CtaLink>
        </div>
      </section>
    </>
  );
}
