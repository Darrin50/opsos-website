import Link from 'next/link';
import CtaLink from '@/components/CtaLink';

const LOOP = [
  { step: 'Plan', product: 'Labor Planner', body: 'Staff the shift correctly before it starts.' },
  { step: 'Run', product: 'Shift Advisor', body: 'Get the next right move while the shift is live.' },
  { step: 'Act', product: 'Shift Advisor + Labor Planner', body: 'Recovery moves are recorded, not re-explained later.' },
  { step: 'Bridge', product: 'Bridge Center', body: 'Hand off and report upward with evidence, not guesses.' },
  { step: 'Learn', product: 'Loss Intelligence', body: 'See where time, labor, capacity, and money were actually lost.' },
];

const PRODUCTS = [
  {
    slug: 'shift-advisor',
    name: 'Shift Advisor',
    time: 'Now',
    promise: 'Tells the manager what to do inside a running shift.',
    example: 'At the current rate, you will miss by 4,800 units. Move four trained employees within 30 minutes to recover.',
  },
  {
    slug: 'labor-planner',
    name: 'Labor Planner',
    time: 'Ahead',
    promise: 'Optimizes staffing before the shift runs.',
    example: 'Tomorrow’s 2nd shift is short 3 certified packers. Pull two from receiving after 10am and approve 6 OT hours, or start 1,900 units behind.',
  },
  {
    slug: 'bridge-center',
    name: 'Bridge Center',
    time: 'Explain',
    promise: 'Explains what happened and communicates it upward, evidence-backed.',
    example: null,
  },
  {
    slug: 'loss-intelligence',
    name: 'Loss Intelligence',
    time: 'Recover',
    promise: 'Shows where time, labor, capacity, and money were lost.',
    example: null,
  },
  {
    slug: 'complete',
    name: 'OpsOS Complete',
    time: 'Suite',
    promise: 'Plan → Run → Act → Bridge → Learn, in one platform.',
    example: null,
  },
];

const PAIN_POINTS = [
  'A shift falls behind and the manager finds out from a supervisor walking the floor, not from a system.',
  'By the time a loss shows up in a report, the shift that caused it ended days ago and nobody remembers why.',
  'Staffing decisions for tomorrow’s shift are made from a gut feeling and a whiteboard, not from what actually happened last week.',
  'Explaining a bad shift upward means reconstructing it from memory, texts, and whatever spreadsheet still has the numbers.',
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO — what / who / problem / outcome / CTA in the first screen ── */}
      <section className="relative overflow-hidden border-b border-ink-border">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-canvas to-ink-black pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="section-label">Shift-Based Operations</span>
            <h1 className="text-4xl md:text-6xl font-bold text-ink-text leading-[1.1] mt-4 tracking-tight">
              Your systems show what happened.<br />
              <span className="text-accent">OpsOS tells managers what to do next.</span>
            </h1>
            <p className="text-lg md:text-xl text-ink-muted leading-relaxed mt-6 max-w-2xl">
              For operations managers running shift-based teams: OpsOS plans the shift before it starts,
              guides it while it runs, explains it afterward with evidence, and shows where time, labor,
              capacity, and money were actually lost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <CtaLink href="/request-demo" location="home-hero" className="btn-primary">
                Request a Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </CtaLink>
              <Link href="/how-it-works" className="btn-secondary">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1. PAIN AND OPERATIONAL STAKES ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="section-label">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-text mt-3 tracking-tight">
              Shifts run on instinct, not evidence
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PAIN_POINTS.map((point) => (
              <div key={point} className="content-card p-6">
                <p className="text-ink-muted leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. PRODUCT FAMILY / OPERATING LOOP ── */}
      <section className="py-24 border-t border-ink-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="section-label">One Platform, One Loop</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-text mt-3 tracking-tight">
              Plan. Run. Act. Bridge. Learn.
            </h2>
            <p className="text-ink-muted mt-4 leading-relaxed">
              Five product modes, one shared operating loop. Buy the piece you need today &mdash; upgrade
              without migration, reconnection, or retraining.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-ink-border rounded-xl overflow-hidden mb-6">
            {LOOP.map((l) => (
              <div key={l.step} className="bg-ink-surface p-6">
                <span className="section-label">{l.step}</span>
                <p className="text-ink-text font-semibold mt-2 text-sm">{l.product}</p>
                <p className="text-ink-muted text-sm mt-2 leading-relaxed">{l.body}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {PRODUCTS.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="content-card p-6 hover:border-ink-border-strong transition-colors group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="tag">{p.time}</span>
                  <svg className="w-4 h-4 text-ink-subtle group-hover:text-accent group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-ink-text mb-2">{p.name}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{p.promise}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. LIVE PRODUCT EXAMPLES — framed demonstrations only ── */}
      <section className="py-24 border-t border-ink-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="section-label">In The Shift</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-text mt-3 tracking-tight">
              A pass sentence, not a chart to interpret
            </h2>
            <p className="text-ink-muted mt-4 leading-relaxed">
              Every recommendation renders complete from the deterministic engine &mdash; AI adds narrative,
              never the number.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRODUCTS.filter((p) => p.example).map((p) => (
              <div key={p.slug} className="demo-frame p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="section-label">{p.name} &middot; Illustrative example</span>
                  <span className="tag">{p.time}</span>
                </div>
                <p className="demo-readout text-ink-text text-base leading-relaxed">{p.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW DATA ENTERS ── */}
      <section className="py-24 border-t border-ink-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label">Getting Started</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink-text mt-3 tracking-tight">
                First value before deep integration
              </h2>
              <p className="text-ink-muted mt-4 leading-relaxed prose-measure">
                Data enters through CSV import, manual entry, or a direct integration &mdash; you choose
                the path that gets you live fastest. Nothing requires an ERP replacement or a
                months-long rollout before the first shift plan is useful.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Manual entry', body: 'Start entering shift data directly — no integration required to see the loop work.' },
                { title: 'CSV import', body: 'Bring existing schedules, rates, and shift records in from spreadsheets you already have.' },
                { title: 'Direct integration', body: 'Connect existing systems once the manual workflow proves out for your operation.' },
              ].map((item) => (
                <div key={item.title} className="content-card p-5">
                  <h3 className="text-ink-text font-semibold text-sm mb-2">{item.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. TRUST, EVIDENCE, DETERMINISTIC CALCULATIONS ── */}
      <section className="py-24 border-t border-ink-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="section-label">Trust</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-text mt-3 tracking-tight">
              Deterministic engines produce the numbers. AI explains them.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Deterministic-first',
                body: 'Every decision card, projection, and loss figure renders complete from engine output alone. If the AI layer is ever unavailable, the operational numbers and actions still appear.',
              },
              {
                title: 'Evidence-backed',
                body: 'Every figure and recommendation links to the evidence behind it — measured fact, calculation, and inference are never blurred together.',
              },
              {
                title: 'One engine, one answer',
                body: 'The same input produces the same output everywhere it appears — in Shift Advisor, Labor Planner, or OpsOS Complete. No conflicting numbers between screens.',
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

      {/* ── 6. CUSTOMER FIT ── */}
      <section className="py-24 border-t border-ink-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="section-label">Who It&apos;s For</span>
          <h2 className="text-3xl md:text-4xl font-bold text-ink-text mt-3 tracking-tight max-w-2xl mx-auto">
            Built for operations that run in shifts
          </h2>
          <p className="text-ink-muted mt-4 max-w-xl mx-auto leading-relaxed">
            If your team plans staffing before a shift, makes decisions during it, and has to explain
            results after it, OpsOS fits how you already work.
          </p>
          <Link href="/who-its-for" className="btn-secondary mt-8 inline-flex">
            See who OpsOS is built for
          </Link>
        </div>
      </section>

      {/* ── 7. PILOT / DEMO CTA ── */}
      <section className="py-24 border-t border-ink-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-text tracking-tight">
            See OpsOS on your operation
          </h2>
          <p className="text-ink-muted mt-4 leading-relaxed">
            A guided walkthrough with your own shift structure &mdash; not a generic slideshow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <CtaLink href="/request-demo" location="home-final-cta" className="btn-primary">Request a Demo</CtaLink>
            <Link href="/pricing" className="btn-secondary">View Pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
