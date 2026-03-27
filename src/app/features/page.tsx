import type { Metadata } from 'next';
import Link from 'next/link';
import DemoSection from '@/components/DemoSection';

export const metadata: Metadata = {
  title: 'Features — OpsOS Modules',
  description: 'OpsPulse, FlowAI, WasteWatch, ShiftAdvisor, Ask OpsOS, SafetyShield, and Lean Toolkit. Every OpsOS module explained — what it tracks, what problem it solves, what the dashboard shows.',
};

const modules = [
  {
    id: 'OpsPulse',
    icon: '⬡',
    color: '#00D4FF',
    tagline: 'Real-Time Throughput Monitor',
    problem: 'Operations managers find out throughput dropped at end of shift — 7 hours after they could have acted on it.',
    solution: 'OpsPulse monitors throughput continuously on 15-minute rolling intervals and fires alerts when performance deviates from target.',
    tracks: [
      'Units per hour (UPH) at line, zone, and facility level',
      'OEE (Overall Equipment Effectiveness) — calculated automatically',
      'Throughput rate variance vs. target',
      'First-pass yield rate',
      'Shift-over-shift trend with statistical variance',
      'Week-over-week throughput comparison',
    ],
    dashboard: [
      'Live UPH gauge with color-coded deviation (green/amber/red)',
      'OEE breakdown — Availability, Performance, Quality components',
      'Hourly throughput heatmap for the shift',
      'Alert log with timestamps and auto-resolved status',
      'Shift summary report auto-generated at end of shift',
    ],
    metric: '7% avg throughput recovery in first 90 days',
  },
  {
    id: 'FlowAI',
    icon: '◈',
    color: '#00FF88',
    tagline: 'AI-Powered Bottleneck Intelligence',
    problem: 'Bottlenecks are identified by supervisors walking the floor and telling the manager. That\'s a slow, incomplete, and inconsistent signal.',
    solution: 'FlowAI maps your production flow in real time, identifies where throughput is constrained, quantifies the revenue impact, and recommends corrective actions.',
    tracks: [
      'Cycle time at each station/zone vs. takt time',
      'Queue depth and wait time between operations',
      'Constraint propagation — upstream and downstream effects',
      'Bottleneck duration and frequency',
      'Revenue impact of identified constraints',
    ],
    dashboard: [
      'Flow map visualization with constraint highlighted in real time',
      'Impact calculator — "this bottleneck is costing $X/hour"',
      'AI recommendation panel — what to do right now',
      'Constraint history log — recurring bottlenecks identified',
      'Theory of Constraints analysis for the facility',
    ],
    metric: 'Constraint identified in <15 min vs. hours manually',
  },
  {
    id: 'WasteWatch',
    icon: '◎',
    color: '#FFB800',
    tagline: 'Real-Time Waste & Scrap Tracking',
    problem: 'Waste shows up as a cost in the P&L but nobody knows where it\'s happening, on which shift, in which zone, or from which root cause.',
    solution: 'WasteWatch tracks waste and scrap in real time, categorized by the 8 Lean wastes, with zone-level attribution and automatic cost calculation.',
    tracks: [
      'Scrap rate by zone, shift, and SKU',
      'Waste categorized by Lean waste type (DOWNTIME)',
      'Rework volume and rework cost',
      'Startup rejection rate after changeovers',
      'Waste trend — daily, weekly, monthly',
      'Cost of waste in real dollars based on material cost',
    ],
    dashboard: [
      'Waste rate gauge — live % of total output',
      'Pareto chart — top 3 waste sources this shift',
      'Zone-level waste heat map',
      'Lean waste category breakdown (pie chart)',
      'Monthly waste cost report vs. target',
    ],
    metric: '23% waste reduction typical in year 1',
  },
  {
    id: 'ShiftAdvisor',
    icon: '◧',
    color: '#A78BFA',
    tagline: 'Headcount & Shift Optimization',
    problem: 'Labor is 50–70% of warehouse cost. Managers often don\'t know which zones are over-staffed and which are causing throughput to choke due to under-staffing.',
    solution: 'ShiftAdvisor analyzes throughput-per-person by zone and shift, identifies misallocated headcount, and recommends real-time adjustments.',
    tracks: [
      'Labor cost per unit (LCPU) — the efficiency metric',
      'Throughput per person by zone and shift',
      'Headcount utilization rate — active vs. idle time',
      'Overtime hours vs. output',
      'Shift-over-shift labor efficiency comparison',
      'Absenteeism impact on throughput',
    ],
    dashboard: [
      'Headcount allocation map — who is where, what\'s the output',
      'Zone efficiency scores — green/amber/red',
      'Labor cost per unit trend with target line',
      'Shift comparison matrix — A vs. B vs. C shift efficiency',
      'Daily labor utilization report',
    ],
    metric: '10–15% headcount utilization improvement average',
  },
  {
    id: 'Ask OpsOS',
    icon: '◉',
    color: '#F472B6',
    tagline: 'AI Operations Analyst',
    problem: 'Answering "why did throughput drop Tuesday night?" requires pulling reports, cross-referencing downtime logs, and manually connecting dots — a 2-hour process.',
    solution: 'Ask OpsOS is a natural language AI that answers operations questions with data, root-cause analysis, and recommended actions in under 60 seconds.',
    tracks: [
      'All operational data across all active modules',
      'Historical patterns and anomalies',
      'Shift-specific events and their effects on performance',
      'Correlation between operational variables',
    ],
    dashboard: [
      'Chat interface — ask in plain English, get data-backed answers',
      'Auto-generated daily briefing delivered at shift start',
      'Root-cause analysis report on any deviation',
      'Week-in-review summary every Monday morning',
      'Exportable reports for leadership presentations',
    ],
    metric: 'Root-cause analysis in <60 sec vs. 2 hours manually',
  },
  {
    id: 'SafetyShield',
    icon: '◬',
    color: '#FF3B3B',
    tagline: 'Safety Incident Intelligence',
    problem: 'Safety data lives in paper logs, OSHA forms, and email chains. TRIR is calculated at year-end. Near-misses go untracked. Patterns are invisible.',
    solution: 'SafetyShield tracks incidents, near-misses, and safety observations in real time with automatic TRIR calculation and OEM-ready reporting.',
    tracks: [
      'Recordable incidents with OSHA classification',
      'Near-miss events with location and condition',
      'Safety observations submitted by floor employees',
      'TRIR — calculated automatically, updated in real time',
      'Corrective action completion rate',
      'Safety event correlation with operational conditions',
    ],
    dashboard: [
      'TRIR gauge — live, updated with every new incident',
      'Incident map — where on the floor are events happening',
      'Near-miss log with corrective action tracking',
      'OEM-ready safety report (downloadable PDF)',
      'Safety trend — 30/60/90 day rolling window',
    ],
    metric: 'TRIR tracked live vs. calculated at year-end',
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 ops-grid-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-ops-black to-ops-dark" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="section-label">Platform Features</span>
          <h1 className="text-4xl md:text-6xl font-bold text-ops-text mt-4 mb-6">
            Built for the{' '}
            <span className="ops-gradient-text">Production Floor</span>
          </h1>
          <p className="text-ops-muted text-lg max-w-2xl mx-auto mb-10">
            Six modules. Each one targeting a specific operational blind spot. All feeding into one dashboard.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {modules.map(m => (
              <a key={m.id} href={`#${m.id.toLowerCase().replace(' ', '-')}`} className="ops-tag hover:bg-ops-blue/20 transition-colors cursor-pointer">
                {m.id}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-12 bg-ops-dark">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {modules.map((mod, index) => (
            <div key={mod.id} id={mod.id.toLowerCase().replace(' ', '-')} className="scroll-mt-24">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl" style={{ color: mod.color }}>{mod.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-ops-text">{mod.id}</h2>
                      <span className="ops-tag text-xs" style={{ color: mod.color, borderColor: `${mod.color}33`, background: `${mod.color}10` }}>
                        {mod.tagline}
                      </span>
                    </div>
                  </div>

                  <div className="ops-panel p-4 border-l-2 mb-6" style={{ borderLeftColor: `${mod.color}60` }}>
                    <p className="section-label text-xs mb-2">The Problem</p>
                    <p className="text-ops-muted text-sm leading-relaxed">{mod.problem}</p>
                  </div>

                  <p className="text-ops-text mb-6 leading-relaxed">{mod.solution}</p>

                  <div className="ops-panel px-4 py-3 inline-block">
                    <span className="font-mono text-sm" style={{ color: mod.color }}>◆ {mod.metric}</span>
                  </div>
                </div>

                {/* What it tracks + dashboard */}
                <div className="space-y-4">
                  <div className="ops-panel p-6">
                    <p className="section-label text-xs mb-4">What It Tracks</p>
                    <ul className="space-y-2">
                      {mod.tracks.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: mod.color }} />
                          <span className="text-ops-muted text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="ops-panel p-6">
                    <p className="section-label text-xs mb-4">The Dashboard Shows</p>
                    <ul className="space-y-2">
                      {mod.dashboard.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="font-mono text-xs mt-0.5 flex-shrink-0" style={{ color: mod.color }}>→</span>
                          <span className="text-ops-muted text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {index < modules.length - 1 && (
                <div className="border-t border-ops-border mt-24" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Lean Toolkit callout */}
      <section className="py-16 ops-grid-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-2xl text-ops-amber">◆</span>
          <h2 className="text-2xl font-bold text-ops-text mt-3 mb-4">Lean Toolkit</h2>
          <p className="text-ops-muted mb-6">
            Included with every OpsOS subscription: a library of Lean operations tools — value stream mapping templates, 5S audit checklists, A3 problem-solving forms, Kaizen event templates, and OEE improvement worksheets. All downloadable, all formatted for manufacturing operations.
          </p>
          <span className="ops-tag text-ops-amber border-ops-amber/30 bg-ops-amber/10">Included in all plans</span>
        </div>
      </section>

      <DemoSection />
    </>
  );
}
