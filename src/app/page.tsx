import Link from 'next/link';
import DemoSection from '@/components/DemoSection';

const modules = [
  {
    id: 'OpsPulse',
    icon: '⬡',
    color: '#00D4FF',
    tagline: 'Real-Time Throughput',
    description: 'Continuous throughput monitoring at the line, zone, and facility level. Live OEE calculation. Automatic alerts when performance deviates from target. No more end-of-shift surprises.',
    metrics: ['UPH live tracking', 'OEE auto-calc', 'Shift performance', 'Trend analysis'],
  },
  {
    id: 'FlowAI',
    icon: '◈',
    color: '#00FF88',
    tagline: 'Bottleneck Intelligence',
    description: 'AI-powered constraint identification. FlowAI maps your production flow, identifies where throughput is being choked, quantifies the revenue impact, and recommends corrective actions.',
    metrics: ['Constraint mapping', 'Impact quantification', 'Flow simulation', 'AI recommendations'],
  },
  {
    id: 'WasteWatch',
    icon: '◎',
    color: '#FFB800',
    tagline: 'Waste Visibility',
    description: 'Real-time scrap and waste tracking categorized by the 8 Lean wastes. See where waste is occurring, in which zone, on which shift — before it becomes an end-of-month surprise.',
    metrics: ['8 Lean waste types', 'Zone-level tracking', 'Scrap cost calc', 'Trend reporting'],
  },
  {
    id: 'ShiftAdvisor',
    icon: '◧',
    color: '#A78BFA',
    tagline: 'Headcount Optimization',
    description: 'Labor allocation intelligence. ShiftAdvisor analyzes throughput-per-person by zone and shift, identifies where headcount is over or under-deployed, and recommends real-time adjustments.',
    metrics: ['Labor cost per unit', 'Zone allocation', 'Headcount utilization', 'Shift comparison'],
  },
  {
    id: 'Ask OpsOS',
    icon: '◉',
    color: '#F472B6',
    tagline: 'AI Operations Analyst',
    description: 'Natural language interface to your operations data. Ask "Why did throughput drop on night shift Tuesday?" and get an AI-generated answer with data, root-cause analysis, and recommended actions.',
    metrics: ['Natural language queries', 'Root-cause AI', 'Daily briefings', 'Report generation'],
  },
  {
    id: 'SafetyShield',
    icon: '◬',
    color: '#FF3B3B',
    tagline: 'Safety Intelligence',
    description: 'Real-time incident tracking, near-miss logging, and TRIR calculation. Automotive OEM-ready safety reporting. Track safety observations and correlate safety events with operational conditions.',
    metrics: ['TRIR auto-calc', 'Near-miss log', 'OEM-ready reports', 'Corrective actions'],
  },
];

const metrics = [
  { label: 'Throughput Recovered', value: '7%', unit: 'avg first 90 days', color: '#00D4FF' },
  { label: 'OEE Improvement', value: '12pt', unit: 'avg improvement', color: '#00FF88' },
  { label: 'Waste Reduction', value: '23%', unit: 'typical year 1', color: '#FFB800' },
  { label: 'Setup Time', value: '2 wks', unit: 'to first dashboard', color: '#A78BFA' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is OpsOS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OpsOS is a warehouse operations intelligence platform that gives operations managers real-time visibility into throughput, waste, bottlenecks, and headcount efficiency. It is built specifically for Tier 2–3 automotive suppliers, steel distributors, metal fabricators, and distribution centers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What software tracks warehouse throughput?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OpsOS\'s OpsPulse module provides real-time warehouse throughput tracking with continuous monitoring at the line, zone, and facility level. It calculates OEE automatically, fires alerts when throughput deviates from target, and generates shift-end summaries without manual data entry.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to implement OpsOS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most operations are running their first live OpsOS dashboard within 2–3 weeks of kickoff. Implementation requires connecting to existing scan infrastructure or PLCs, configuring shift schedules, and setting throughput targets. No ERP replacement is required.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries is OpsOS built for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OpsOS is purpose-built for Tier 2–3 automotive suppliers, steel distributors and service centers, metal fabricators and stamping plants, large distribution centers, 3PLs, and grocery distribution operations. It is designed for mid-size manufacturers and distributors with 50–750 employees.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does OpsOS differ from a traditional WMS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A WMS (Warehouse Management System) manages inventory transactions — receiving, putaway, picking, shipping. OpsOS is an operations intelligence layer that monitors performance — throughput, efficiency, waste, safety. OpsOS works alongside your existing WMS or ERP, adding the visibility layer that most enterprise systems lack.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center ops-grid-bg overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-ops-black via-ops-black to-ops-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-ops-blue/3 blur-3xl pointer-events-none" />

        {/* Animated data readout in background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 opacity-10 pointer-events-none hidden lg:block">
          <div className="font-mono text-xs text-ops-blue leading-7 space-y-1">
            {['UPH: 412 → 438', 'OEE: 0.724', 'WASTE: 1.8%', 'TPLH: 5.4', 'SHIFT: A [ACTIVE]', 'ALERT: FlowAI Zone 3', 'THROUGHPUT: +6.3%', 'HEADCOUNT: 84/90', 'SCRAP: 0.9% ↓', 'SAFETY: 0 incidents'].map((line, i) => (
              <div key={i} style={{ animationDelay: `${i * 0.1}s` }}>{line}</div>
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-3xl">
            {/* Tag */}
            <div className="flex items-center gap-3 mb-8">
              <div className="ops-status-dot" />
              <span className="section-label">Warehouse Operations Intelligence</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-ops-text leading-tight mb-8">
              Your Warehouse Is Losing Money{' '}
              <span className="ops-gradient-text">You Can't See</span>
            </h1>

            <p className="text-lg md:text-xl text-ops-muted leading-relaxed mb-10 max-w-2xl">
              OpsOS gives operations managers at Tier 2–3 automotive suppliers, steel distributors, and distribution centers real-time visibility into throughput, waste, bottlenecks, and headcount — in one dashboard.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="#demo" className="btn-primary">
                Request a Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link href="/features" className="btn-secondary">
                See All Features
              </Link>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="ops-panel p-4">
                  <div className="metric-number text-2xl font-bold mb-1" style={{ color: m.color }}>{m.value}</div>
                  <div className="text-ops-muted text-xs leading-tight">{m.label}</div>
                  <div className="font-mono text-ops-subtle text-xs mt-1">{m.unit}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ops-black to-transparent" />
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="py-24 bg-ops-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ops-text mt-3">
              What Operations Managers Say Every Day
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              '"We don\'t know where we\'re losing throughput until end of shift. By then it\'s too late."',
              '"I know we\'re generating waste but I can\'t tell you where it\'s happening in real time."',
              '"Every time there\'s a bottleneck, I find out from a supervisor — not from data."',
              '"I have to pull six reports and stitch them together in Excel to understand yesterday."',
              '"Our OEE numbers are a guess. We\'re calculating them manually at end of month."',
              '"The boss wants a dashboard. I\'m building it in Google Sheets. It\'s a nightmare."',
            ].map((quote, i) => (
              <div key={i} className="ops-panel p-6 border-l-2 border-l-ops-blue/40">
                <p className="text-ops-muted text-sm italic leading-relaxed">{quote}</p>
                <p className="font-mono text-ops-subtle text-xs mt-4">— Operations Manager</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-ops-muted text-sm">OpsOS eliminates all of these. <Link href="#demo" className="text-ops-blue hover:underline">See it live →</Link></p>
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section className="py-24 ops-grid-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">Platform Modules</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ops-text mt-3">
              Six Modules. One Dashboard.
            </h2>
            <p className="text-ops-muted mt-4 max-w-2xl mx-auto">
              Every OpsOS module targets a specific operational blind spot. Deploy the ones you need. Add more as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod) => (
              <div key={mod.id} className="ops-panel p-6 hover:border-ops-border/60 transition-all group cursor-pointer relative overflow-hidden">
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `radial-gradient(circle at top left, ${mod.color}08 0%, transparent 60%)` }} />

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl" style={{ color: mod.color }}>{mod.icon}</span>
                    <span className="ops-tag" style={{ color: mod.color, borderColor: `${mod.color}33`, background: `${mod.color}10` }}>
                      {mod.tagline}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-ops-text mb-2">{mod.id}</h3>
                  <p className="text-ops-muted text-sm leading-relaxed mb-4">{mod.description}</p>

                  <div className="grid grid-cols-2 gap-2">
                    {mod.metrics.map((metric) => (
                      <div key={metric} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-ops-subtle" />
                        <span className="font-mono text-xs text-ops-muted">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/features" className="btn-secondary">
              Explore All Features
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="py-24 bg-ops-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">Built For Your Operation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ops-text mt-3">
              Why Operations Managers Choose OpsOS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Not Another ERP',
                body: 'OpsOS is not a replacement for your WMS or ERP. It\'s the visibility layer that sits on top — giving you the real-time operational intelligence your ERP was never designed to provide.',
                icon: '⬡',
              },
              {
                title: 'Built by Operators',
                body: 'OpsOS was designed by someone who has managed warehouse operations. We built the tool we wished we had — not what a software team thought warehouse managers needed.',
                icon: '◈',
              },
              {
                title: 'Up in 2 Weeks',
                body: 'No six-month implementation. No consultant army. Most operations are live with their first OpsOS dashboard within 2–3 weeks. We connect to your existing scan infrastructure.',
                icon: '◉',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-3xl text-ops-blue mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-ops-text mb-3">{item.title}</h3>
                <p className="text-ops-muted text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Industry tags */}
          <div className="text-center">
            <p className="section-label mb-6">Industries Served</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Tier 2–3 Automotive Suppliers',
                'Steel Distributors',
                'Metal Fabricators',
                'Stamping Plants',
                'Distribution Centers',
                '3PL Operators',
                'Grocery Distribution',
                'Food & Beverage Manufacturing',
              ].map((industry) => (
                <span key={industry} className="ops-tag">{industry}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 ops-grid-bg">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">FAQ</span>
            <h2 className="text-3xl font-bold text-ops-text mt-3">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'What makes OpsOS different from a traditional WMS?',
                a: 'A WMS manages inventory transactions. OpsOS is an operations intelligence layer — it monitors performance in real time. They serve different purposes. OpsOS works alongside your WMS, adding the visibility your ERP was never built to provide.',
              },
              {
                q: 'How long does implementation take?',
                a: 'Most operations are live with their first dashboard in 2–3 weeks. Implementation means connecting to your existing scan infrastructure (barcode, RFID, or PLC), configuring shift schedules, and setting your target rates.',
              },
              {
                q: 'Do we need to replace our ERP or WMS?',
                a: 'No. OpsOS integrates with your existing systems via standard APIs. It is the intelligence layer on top of your infrastructure, not a replacement for it.',
              },
              {
                q: 'What industries is OpsOS built for?',
                a: 'OpsOS was purpose-built for Tier 2–3 automotive suppliers, steel distributors, metal fabricators, stamping plants, large distribution centers, 3PLs, and grocery distribution. If you have a production floor or warehouse, OpsOS applies.',
              },
              {
                q: 'What software tracks warehouse throughput?',
                a: 'OpsOS\'s OpsPulse module provides real-time throughput monitoring with continuous data collection, automatic OEE calculation, and alerts when performance deviates from target. No more end-of-shift spreadsheets.',
              },
            ].map((faq, i) => (
              <div key={i} className="ops-panel p-6">
                <h3 className="font-semibold text-ops-text mb-3 flex items-start gap-3">
                  <span className="font-mono text-ops-blue text-sm mt-0.5">Q{i + 1}</span>
                  {faq.q}
                </h3>
                <p className="text-ops-muted text-sm leading-relaxed pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO CTA ── */}
      <DemoSection />
    </>
  );
}
