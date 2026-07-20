import type { Metadata } from 'next';
import Link from 'next/link';
import CtaLink from '@/components/CtaLink';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'How OpsOS moves a shift through the loop: data enters, Labor Planner stages it, Shift Advisor guides it live, Bridge Center explains it, Loss Intelligence tracks the fix.',
};

const LOOP_STEPS = [
  {
    step: '01',
    label: 'Plan',
    product: 'Labor Planner',
    time: 'Before the shift',
    headline: 'Staff the shift correctly before it starts',
    body: 'Labor Planner reads certifications, availability, and what actually happened last time, then produces a complete pre-shift recommendation — the gap, the pull, and the overtime trade-off — before the shift starts short.',
    example: 'Tomorrow’s 2nd shift is short 3 certified packers. Pull two from receiving after 10am and approve 6 OT hours, or you start the shift 1,900 units behind.',
  },
  {
    step: '02',
    label: 'Run',
    product: 'Shift Advisor',
    time: 'Inside the live shift',
    headline: 'Get the next right move while the shift is still recoverable',
    body: 'Once the shift is running, Shift Advisor watches the same live data a supervisor would have to piece together by hand and renders a complete pass sentence — the miss, the move, and the window to make it — straight from the deterministic engine.',
    example: 'At the current rate, you will miss by 4,800 units. Move four trained employees within 30 minutes to recover.',
  },
  {
    step: '03',
    label: 'Act',
    product: 'Shift Advisor + Labor Planner',
    time: 'The moment a move is accepted',
    headline: 'Recovery moves are recorded once, not re-explained later',
    body: 'When a manager accepts a mid-shift recommendation, it is written to a shared action record. Labor Planner and Bridge Center read that same record instead of re-deriving or re-asking what happened.',
    example: null,
  },
  {
    step: '04',
    label: 'Bridge',
    product: 'Bridge Center',
    time: 'After the shift ends',
    headline: 'Explain what happened, backed by evidence',
    body: 'Bridge Center turns the shift’s action record and engine output into an evidence-linked account for handoff — the next shift and the next level of management get the same account, not a reconstruction from memory and text messages.',
    example: null,
  },
  {
    step: '05',
    label: 'Learn',
    product: 'Loss Intelligence',
    time: 'Across shifts and weeks',
    headline: 'Find the recurring loss, not just the one bad shift',
    body: 'Loss Intelligence keeps an open/resolved ledger of where time, labor, capacity, and money were actually lost, using the same shared loss taxonomy Bridge Center already surfaces — then tracks whether a logged countermeasure actually stopped the loss from recurring.',
    example: null,
  },
];

const DATA_PATHS = [
  {
    title: 'Manual entry',
    body: 'Start entering shift data directly in the app. No integration required to see the loop work end to end.',
  },
  {
    title: 'CSV import',
    body: 'Bring existing schedules, rates, and shift records in from spreadsheets you already keep today.',
  },
  {
    title: 'Direct integration',
    body: 'Connect existing systems once the manual workflow has proven out for your operation — never a prerequisite to start.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="border-b border-ink-border">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <span className="section-label">How It Works</span>
          <h1 className="text-4xl md:text-5xl font-bold text-ink-text mt-3 tracking-tight max-w-2xl">
            One shift, one loop, five products
          </h1>
          <p className="text-lg text-ink-muted mt-4 max-w-2xl leading-relaxed">
            Every shift moves through the same five steps. Each product owns one step and reads the
            same underlying data as the rest &mdash; nothing is re-entered or re-derived as the shift
            hands off from planning to live guidance to evidence to loss recovery.
          </p>
        </div>
      </section>

      {/* ── THE LOOP, STEP BY STEP ── */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-6">
            {LOOP_STEPS.map((s) => (
              <div key={s.step} className="content-card p-8 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-ink-subtle font-mono text-sm">{s.step}</span>
                      <span className="tag">{s.time}</span>
                    </div>
                    <span className="section-label">{s.label} &middot; {s.product}</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-ink-text mt-3 tracking-tight">
                      {s.headline}
                    </h2>
                  </div>
                  <div>
                    <p className="text-ink-muted leading-relaxed prose-measure">{s.body}</p>
                    {s.example && (
                      <div className="demo-frame p-6 mt-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="section-label">{s.product} &middot; Illustrative example</span>
                        </div>
                        <p className="demo-readout text-ink-text text-base leading-relaxed">{s.example}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW DATA ENTERS ── */}
      <section className="py-20 md:py-24 border-t border-ink-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label">Getting Started</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink-text mt-3 tracking-tight">
                First value before deep integration
              </h2>
              <p className="text-ink-muted mt-4 leading-relaxed prose-measure">
                The loop above starts working the moment data enters &mdash; you choose the path that
                gets you live fastest. Nothing requires an ERP replacement or a months-long rollout
                before the first shift plan is useful.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {DATA_PATHS.map((item) => (
                <div key={item.title} className="content-card p-5">
                  <h3 className="text-ink-text font-semibold text-sm mb-2">{item.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DETERMINISTIC ENGINES, AI EXPLAINS ── */}
      <section className="py-20 md:py-24 border-t border-ink-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="section-label">Under The Hood</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-text mt-3 tracking-tight">
              Deterministic engines produce the numbers. AI explains them.
            </h2>
            <p className="text-ink-muted mt-4 leading-relaxed">
              Every step in the loop above renders from the same calculation layer, whether or not the
              AI layer is reachable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Deterministic-first',
                body: 'Every decision card, projection, and loss figure renders complete from engine output alone. If the AI layer is ever unavailable, the operational numbers and actions still appear.',
              },
              {
                title: 'AI narrates, never calculates',
                body: 'AI adds explanation and prioritization on top of a number the engine already produced &mdash; it never generates the number itself.',
              },
              {
                title: 'One engine, one answer',
                body: 'The same input produces the same output everywhere it appears &mdash; in Shift Advisor, Labor Planner, or OpsOS Complete. No conflicting numbers between screens.',
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-ink-text font-semibold mb-3">{item.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-24 border-t border-ink-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-text tracking-tight">
            See the loop run on your operation
          </h2>
          <p className="text-ink-muted mt-4 leading-relaxed">
            A guided walkthrough with your own shift structure &mdash; not a generic slideshow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <CtaLink href="/request-demo" location="how-it-works-final-cta" className="btn-primary">Request a Demo</CtaLink>
            <Link href="/products" className="btn-secondary">See All Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}
