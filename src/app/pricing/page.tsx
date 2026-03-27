import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing — OpsOS',
  description: 'OpsOS pricing: Free 30-day trial (1 location), Growth at $497/month (up to 3 locations), Enterprise custom. No credit card for trial. Annual discount available.',
};

const plans = [
  {
    name: 'Free Trial',
    price: '$0',
    duration: '30 days',
    tagline: 'See it on your operation before you commit',
    color: '#71717A',
    features: [
      '1 facility / location',
      'All 6 modules active',
      'Up to 5 user accounts',
      'Live throughput dashboard',
      'Full module access — no feature lockouts',
      'Onboarding call included',
      'Email support',
      'No credit card required',
    ],
    cta: 'Start Free Trial',
    ctaHref: '#demo',
    note: 'Full platform access. Not a crippled demo.',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$497',
    duration: '/month',
    tagline: 'For operations ready to run on real data',
    color: '#00D4FF',
    features: [
      'Up to 3 facilities / locations',
      'All 6 modules active',
      'Unlimited user accounts',
      'OpsPulse real-time monitoring',
      'FlowAI bottleneck detection',
      'WasteWatch with cost tracking',
      'ShiftAdvisor headcount analytics',
      'Ask OpsOS AI analyst',
      'SafetyShield + TRIR reporting',
      'Lean Toolkit library',
      'Priority email + chat support',
      'Weekly automated reports',
      'Annual: $4,473/yr (save $1,491)',
    ],
    cta: 'Request Demo',
    ctaHref: '#demo',
    note: 'Most operations recover this cost in week 1.',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    duration: '',
    tagline: 'For multi-facility operations and complex deployments',
    color: '#FFB800',
    features: [
      'Unlimited facilities',
      'Unlimited users',
      'All Growth features',
      'Custom ERP / WMS integration',
      'Dedicated implementation engineer',
      'SLA-backed uptime guarantee',
      'On-site onboarding available',
      'Custom reporting and dashboards',
      'SSO / SAML authentication',
      'Annual contract with volume pricing',
    ],
    cta: 'Contact Us',
    ctaHref: '#demo',
    note: 'Multi-facility pilots available.',
    highlight: false,
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does OpsOS cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OpsOS offers a free 30-day trial (no credit card), a Growth plan at $497/month for up to 3 facilities, and Enterprise pricing for multi-facility operations. Annual subscriptions include a significant discount.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a free trial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. OpsOS offers a 30-day free trial for one facility with full access to all 6 modules — no credit card required and no feature lockouts. You see the full platform on your actual operation before making any commitment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I cancel anytime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Monthly Growth subscriptions can be cancelled at any time with no penalty. Annual subscriptions are non-refundable after the first 30 days. Enterprise contracts include custom terms.',
      },
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="py-24 ops-grid-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-ops-black to-ops-dark" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="section-label">Pricing</span>
          <h1 className="text-4xl md:text-6xl font-bold text-ops-text mt-4 mb-6">
            Pricing That{' '}
            <span className="ops-gradient-text">Pays for Itself</span>
          </h1>
          <p className="text-ops-muted text-lg max-w-xl mx-auto">
            Most operations recover the Growth plan cost within the first week — from throughput and waste improvements alone.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-ops-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`ops-panel p-8 relative ${plan.highlight ? 'border-ops-blue ops-glow' : ''}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="ops-tag text-xs">Most Popular</span>
                  </div>
                )}

                <div className="mb-6">
                  <p className="section-label text-xs mb-2" style={{ color: plan.color }}>{plan.name}</p>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-4xl font-bold text-ops-text metric-number">{plan.price}</span>
                    {plan.duration && <span className="text-ops-muted text-sm mb-1">{plan.duration}</span>}
                  </div>
                  <p className="text-ops-muted text-sm">{plan.tagline}</p>
                </div>

                <Link href={plan.ctaHref} className={plan.highlight ? 'btn-primary w-full justify-center mb-6 block' : 'btn-secondary w-full justify-center mb-6 block text-center'}>
                  {plan.cta}
                </Link>

                <p className="font-mono text-xs text-center mb-6" style={{ color: plan.color }}>
                  {plan.note}
                </p>

                <div className="border-t border-ops-border pt-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span style={{ color: plan.color }} className="mt-0.5 flex-shrink-0 text-sm">✓</span>
                        <span className="text-ops-muted text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Annual note */}
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-3 ops-panel px-6 py-3">
              <span className="text-ops-green text-sm">◆</span>
              <span className="text-ops-muted text-sm">Annual plans save 25% — Growth at <span className="text-ops-green font-mono">$373/mo</span> when billed yearly</span>
            </div>
          </div>
        </div>
      </section>

      {/* ROI calculator callout */}
      <section className="py-20 ops-grid-bg">
        <div className="max-w-4xl mx-auto px-6">
          <div className="ops-panel p-10 text-center ops-glow">
            <span className="section-label">The Math</span>
            <h2 className="text-3xl font-bold text-ops-text mt-3 mb-6">
              What 1% Throughput Recovery Is Worth
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { scenario: '80-person operation', value: '$156K/yr', note: 'at avg $75/labor-hr + margin' },
                { scenario: '150-person operation', value: '$292K/yr', note: 'at avg $75/labor-hr + margin' },
                { scenario: '300-person operation', value: '$585K/yr', note: 'at avg $75/labor-hr + margin' },
              ].map((s) => (
                <div key={s.scenario} className="bg-ops-black rounded p-4">
                  <div className="metric-number text-2xl font-bold text-ops-blue mb-1">{s.value}</div>
                  <div className="text-ops-text text-sm font-medium">{s.scenario}</div>
                  <div className="text-ops-muted text-xs mt-1">{s.note}</div>
                </div>
              ))}
            </div>
            <p className="text-ops-muted text-sm mb-6">
              OpsOS customers average <span className="text-ops-blue">7% throughput recovery</span> in the first 90 days. At 7x the numbers above, the math gets uncomfortable to ignore.
            </p>
            <p className="font-mono text-ops-muted text-xs">
              Growth plan: <span className="text-ops-text">$497/mo</span> — recovered in hours of throughput improvement, not months.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-ops-dark">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="section-label">Pricing FAQ</span>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'What counts as a "facility" or "location"?',
                a: 'One facility = one physical production or distribution location. A company with a stamping plant and a separate assembly facility has two facilities.',
              },
              {
                q: 'Do I need to sign a contract?',
                a: 'No contract for the Growth plan — monthly billing, cancel anytime. Enterprise plans include annual contracts with volume pricing.',
              },
              {
                q: 'What\'s included in the free trial?',
                a: 'Full platform access — all 6 modules, live dashboard, AI analyst, everything. For one facility. 30 days. No credit card. No feature lockouts.',
              },
              {
                q: 'Is there an implementation cost?',
                a: 'No implementation fee on Growth. The onboarding call, integration support, and setup guidance are included. Enterprise includes a dedicated implementation engineer.',
              },
              {
                q: 'What integrations do you support?',
                a: 'OpsOS integrates with most common barcode scanners, RFID infrastructure, and PLCs via API. Custom ERP and WMS integrations are available on the Enterprise plan.',
              },
            ].map((faq, i) => (
              <div key={i} className="ops-panel p-5">
                <h3 className="font-semibold text-ops-text mb-2 flex items-start gap-3">
                  <span className="font-mono text-ops-blue text-sm mt-0.5">Q</span>
                  {faq.q}
                </h3>
                <p className="text-ops-muted text-sm leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 ops-grid-bg">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ops-text mb-4">Start with 30 Days Free</h2>
          <p className="text-ops-muted mb-8">Full platform. Your operation. No credit card.</p>
          <Link href="#demo" className="btn-primary">
            Request a Demo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
