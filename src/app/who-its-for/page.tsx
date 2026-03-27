import type { Metadata } from 'next';
import Link from 'next/link';
import DemoSection from '@/components/DemoSection';

export const metadata: Metadata = {
  title: 'Who It\'s For — OpsOS',
  description: 'OpsOS is built for Tier 2–3 automotive suppliers, steel distributors, metal fabricators, and distribution centers. See which operation types OpsOS is purpose-built for.',
};

const industries = [
  {
    id: 'automotive',
    icon: '◈',
    color: '#00D4FF',
    title: 'Tier 2–3 Automotive Suppliers',
    subtitle: 'Parts, assemblies, and materials for Tier 1s and OEMs',
    description: 'You supply to Magna, BorgWarner, Aptiv, or directly to Ford, GM, or Stellantis. Your customers audit your quality. They demand on-time delivery. They squeeze your margins every contract cycle. And you\'re tracking all of this in spreadsheets.',
    painPoints: [
      'OEM and Tier 1 customers requiring documented throughput and quality data',
      'Supplier audits that expose gaps between what you report and what you actually track',
      'Thin margins that make every percentage point of throughput loss visible in the P&L',
      'Multi-shift operations with inconsistent performance between A, B, and C shift',
      'Scrap rates eating into margins on parts you\'re already selling at cost',
      'No real-time visibility into line performance — supervisors manage by walking around',
    ],
    modules: ['OpsPulse', 'WasteWatch', 'SafetyShield', 'FlowAI'],
    stat: 'The Detroit metro alone has 3,000+ Tier 2–3 automotive suppliers — all fighting for margin with inadequate visibility tools.',
    cta: 'OpsOS was built in Detroit, by someone who has managed these operations.',
  },
  {
    id: 'steel',
    icon: '⬡',
    color: '#FFB800',
    title: 'Steel Distributors & Service Centers',
    subtitle: 'Receiving, processing, cutting, and distributing steel',
    description: 'You receive coil and sheet, process it to spec, and ship on tight tolerances and tighter timelines. Scrap steel is expensive. Downtime on your slitter or press brake is money walking out the door. And your throughput data lives in a supervisor\'s notebook.',
    painPoints: [
      'Scrap steel costing real dollars — every percent of scrap hits margin hard',
      'Machine downtime with no real-time alert system — operators notify the supervisor manually',
      'Order-to-ship cycles tracked on whiteboards that get erased at shift change',
      'Labor allocation across cutting, processing, and shipping operations with no efficiency data',
      'Safety in an environment with real physical hazards — incidents tracked in paper logs',
      'No visibility into where throughput is being lost across the processing flow',
    ],
    modules: ['WasteWatch', 'OpsPulse', 'ShiftAdvisor', 'SafetyShield'],
    stat: 'Steel service centers average 3–5% scrap rates. OpsOS customers typically see 20–30% scrap reduction in year 1.',
    cta: 'Real money in a low-margin business.',
  },
  {
    id: 'fabricators',
    icon: '◎',
    color: '#00FF88',
    title: 'Metal Fabricators & Stamping Plants',
    subtitle: 'Job shops and dedicated facilities in stamping, forming, and fabrication',
    description: 'You run presses, welding cells, and assembly lines for multiple customers with different specs and changeover requirements. OEE is critical. Die changeovers eat production time. And your throughput reporting is whatever the line supervisor writes in the logbook.',
    painPoints: [
      'OEE unknown or calculated manually at end of month — no intra-shift visibility',
      'Die changeover times tracked inconsistently or not at all',
      'Minor stops and micro-stoppages not captured — Performance losses are invisible',
      'Multiple customer jobs running simultaneously with no unified throughput dashboard',
      'Quality rejects tracked on paper, analyzed at month-end when it\'s too late to prevent',
      'Setup waste (time between job completion and first good piece of next job) not measured',
    ],
    modules: ['OpsPulse', 'FlowAI', 'WasteWatch', 'Ask OpsOS'],
    stat: 'The average stamping plant runs at 62% OEE. OpsOS customers average 74% within 6 months.',
    cta: 'That 12-point OEE improvement is recovered capacity — without new equipment.',
  },
  {
    id: 'distribution',
    icon: '◧',
    color: '#A78BFA',
    title: 'Distribution Centers & 3PLs',
    subtitle: 'High-throughput order fulfillment, pick/pack/ship operations',
    description: 'You run hundreds of people per shift across receiving, storage, pick, pack, and shipping. Labor is your biggest cost. Throughput variance between shifts can be 20–30%. And your only real-time data is what your WMS tracks — which isn\'t throughput or labor efficiency.',
    painPoints: [
      'Labor cost is 60–70% of operating cost with no real-time efficiency tracking',
      'Pick rate variance between shifts — A shift outperforms C shift by 25% with no documented reason',
      'Bottlenecks in pick-to-pack flow creating queues that cascade downstream',
      'Headcount allocation by zone based on gut feel, not throughput data',
      'WMS tells you what shipped — not whether the operation was efficient',
      'Customer SLA compliance tracked at end of day, not in real time',
    ],
    modules: ['ShiftAdvisor', 'FlowAI', 'OpsPulse', 'Ask OpsOS'],
    stat: 'Distribution operations running OpsOS see 8–12% labor efficiency improvement on average in the first quarter.',
    cta: 'On 200 employees at $18/hr, that\'s $700K+ in annual recovered labor value.',
  },
  {
    id: 'grocery',
    icon: '◉',
    color: '#F472B6',
    title: 'Grocery Distribution',
    subtitle: 'Meijer, Gordon Food Service, SpartanNash — regional grocery distribution operations',
    description: 'You run massive distribution operations with hundreds of workers per shift across temperature-controlled environments. Your throughput tracking is basic. Your shift performance data is manual. Your labor efficiency is managed by supervisors with clipboards — not dashboards.',
    painPoints: [
      'Throughput tracked at end of shift or by week — no intra-shift visibility',
      'Temperature zone compliance managed manually without automated monitoring',
      'Labor efficiency varies widely by shift with no data to understand why',
      'High employee turnover creates constant training overhead that hits throughput',
      'Seasonal volume spikes managed reactively — no predictive staffing data',
      'Safety incidents in fast-paced environments tracked in paper logs',
    ],
    modules: ['OpsPulse', 'ShiftAdvisor', 'SafetyShield', 'FlowAI'],
    stat: 'Grocery distribution operations average $420K in annual efficiency recovery from throughput and labor optimization.',
    cta: 'That number comes from real-time data — not guessing.',
  },
];

const buyerProfiles = [
  {
    title: 'Operations Manager',
    description: 'You own the daily metrics. Throughput, output per shift, waste rates, headcount utilization. You feel the pain of not having real-time visibility more than anyone. OpsOS is the tool you\'ve been asking for.',
    authority: 'Budget authority up to $5K/mo at most mid-size operations. No C-suite needed.',
  },
  {
    title: 'Plant Manager',
    description: 'You\'re accountable for facility-level KPIs — OEE, throughput per labor hour, scrap rates, safety incidents. Your ownership wants a dashboard. OpsOS gives you one that\'s credible.',
    authority: 'Full budget authority. Decision-maker.',
  },
  {
    title: 'Warehouse Manager',
    description: 'You control receiving, storage, pick/pack/ship. You\'re drowning in spreadsheets. OpsOS replaces five manual tracking systems with one real-time dashboard.',
    authority: 'Typically needs Ops Director approval. We have a one-page ROI brief for that conversation.',
  },
];

export default function WhoItsForPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 ops-grid-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-ops-black to-ops-dark" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="section-label">Who It's For</span>
          <h1 className="text-4xl md:text-6xl font-bold text-ops-text mt-4 mb-6">
            Built for Mid-Size{' '}
            <span className="ops-gradient-text">Manufacturers</span>
          </h1>
          <p className="text-ops-muted text-lg max-w-2xl mx-auto">
            OpsOS fills the gap between spreadsheets and enterprise ERP. If you run a production floor or warehouse with 50–750 employees, this is built for you.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 bg-ops-dark">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {industries.map((ind, i) => (
            <div key={ind.id} id={ind.id} className="scroll-mt-24">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl" style={{ color: ind.color }}>{ind.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-ops-text">{ind.title}</h2>
                      <p className="text-ops-muted text-sm">{ind.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-ops-muted leading-relaxed mb-6">{ind.description}</p>

                  <div className="ops-panel p-4 mb-6">
                    <p className="font-mono text-sm" style={{ color: ind.color }}>◆ {ind.stat}</p>
                    <p className="text-ops-muted text-xs mt-1">{ind.cta}</p>
                  </div>

                  <div>
                    <p className="section-label text-xs mb-3">Best-Fit Modules</p>
                    <div className="flex flex-wrap gap-2">
                      {ind.modules.map(mod => (
                        <Link key={mod} href="/features" className="ops-tag hover:bg-ops-blue/20 transition-colors" style={{ color: ind.color, borderColor: `${ind.color}33`, background: `${ind.color}08` }}>
                          {mod}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="ops-panel p-6">
                    <p className="section-label text-xs mb-4">Pain Points We Hear From This Industry</p>
                    <ul className="space-y-3">
                      {ind.painPoints.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: ind.color }} />
                          <span className="text-ops-muted text-sm leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {i < industries.length - 1 && <div className="border-t border-ops-border mt-20" />}
            </div>
          ))}
        </div>
      </section>

      {/* Buyer profiles */}
      <section className="py-24 ops-grid-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">Who Buys OpsOS</span>
            <h2 className="text-3xl font-bold text-ops-text mt-3">The People OpsOS Is Built For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {buyerProfiles.map((buyer) => (
              <div key={buyer.title} className="ops-panel p-6">
                <h3 className="font-bold text-ops-text mb-3">{buyer.title}</h3>
                <p className="text-ops-muted text-sm leading-relaxed mb-4">{buyer.description}</p>
                <div className="border-t border-ops-border pt-4">
                  <p className="font-mono text-ops-blue text-xs">{buyer.authority}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not for */}
      <section className="py-16 bg-ops-dark">
        <div className="max-w-4xl mx-auto px-6">
          <div className="ops-panel p-8 border-ops-subtle">
            <h3 className="font-bold text-ops-text mb-4">Who OpsOS Is NOT For</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Companies under $10M revenue with no dedicated ops staff',
                'Service-only businesses with no physical operations',
                'Companies with recent full SAP or Oracle implementations',
                'Consumer-facing businesses with no production or distribution operations',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-ops-red mt-0.5 flex-shrink-0">✕</span>
                  <span className="text-ops-muted text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-ops-muted text-sm mt-6">
              If that's you, OpsOS isn't the right fit. We'd rather tell you that upfront than waste your time.
            </p>
          </div>
        </div>
      </section>

      <DemoSection />
    </>
  );
}
