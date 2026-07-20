export type ProductExample = {
  label: string;
  sentence: string;
};

export type Product = {
  slug: string;
  name: string;
  time: string;
  eyebrow: string;
  headline: string;
  promise: string;
  forWho: string;
  capabilities: { title: string; body: string }[];
  example: ProductExample | null;
  loopStep: string;
};

// Content grounded in docs/architecture/product-family-architecture.md (OpsOS
// repo, HCO-87/FAMILY-0, Fable-ratified 2026-07-19) — the five-product model,
// binding Amendment 1 (pass-sentence ownership), and shared-core law. No
// capability is claimed here that the architecture doc does not name.
export const PRODUCTS: Product[] = [
  {
    slug: 'shift-advisor',
    name: 'Shift Advisor',
    time: 'Now',
    eyebrow: 'Inside the running shift',
    headline: 'What to do right now, while the shift is still recoverable',
    promise: 'Shift Advisor tells the manager what to do inside a running shift — the NOW sentence, owned by no other product in the family.',
    forWho: 'Shift supervisors and operations managers who need a next move in the next 30 minutes, not a report at the end of the day.',
    capabilities: [
      { title: 'Live pass sentences', body: 'A complete recommendation — the miss, the move, and the window to make it — rendered from the deterministic engine, not a chart to interpret.' },
      { title: 'Recovery moves recorded once', body: 'Accepted mid-shift moves are written to the shared action record. Labor Planner and Bridge Center read the same record instead of re-deriving it.' },
      { title: 'Engine-first, AI-explained', body: 'If the AI layer is ever unavailable, the operational numbers and actions still render — AI adds narrative, never the number.' },
    ],
    example: {
      label: 'Illustrative example',
      sentence: 'At the current rate, you will miss by 4,800 units. Move four trained employees within 30 minutes to recover.',
    },
    loopStep: 'Run + Act',
  },
  {
    slug: 'labor-planner',
    name: 'Labor Planner',
    time: 'Ahead',
    eyebrow: 'Before the shift runs',
    headline: 'Staff the shift correctly before it starts',
    promise: 'Labor Planner optimizes staffing before the shift runs — the AHEAD sentence, built for the pre-shift and next-shift decision window.',
    forWho: 'Operations and workforce managers building tomorrow’s shift plan from certifications, availability, and what actually happened last time.',
    capabilities: [
      { title: 'Pre-shift staffing plan', body: 'A complete AHEAD recommendation for the next shift: the gap, the pull, and the overtime trade-off, before the shift starts short.' },
      { title: 'Certification-aware allocation', body: 'Skill and certification data is role-gated by default; exports redact to aggregate counts without HR-scope permission.' },
      { title: 'Feeds the shared loop', body: 'Labor Planner never re-derives Shift Advisor’s accepted mid-shift moves — it reads the same shared action record.' },
    ],
    example: {
      label: 'Illustrative example',
      sentence: 'Tomorrow’s 2nd shift is short 3 certified packers. Pull two from receiving after 10am and approve 6 OT hours, or you start the shift 1,900 units behind.',
    },
    loopStep: 'Plan',
  },
  {
    slug: 'bridge-center',
    name: 'Bridge Center',
    time: 'Explain',
    eyebrow: 'After the shift ends',
    headline: 'Explain what happened, backed by evidence',
    promise: 'Bridge Center explains what happened and communicates it upward with evidence — not a reconstruction from memory and text messages.',
    forWho: 'Managers who have to hand off a shift or explain results to the next level up, and need the explanation to hold up.',
    capabilities: [
      { title: 'Evidence-linked explanations', body: 'Every conclusion links to the evidence behind it — measured fact, calculation, and inference stay clearly separated.' },
      { title: 'Built for handoff', body: 'The next shift and the next level of management get the same evidence-backed account, not a re-told version.' },
      { title: 'Shares the same engine', body: 'Bridge Center quantifies losses from the shared core without requiring a separate Loss Intelligence subscription.' },
    ],
    example: null,
    loopStep: 'Bridge',
  },
  {
    slug: 'loss-intelligence',
    name: 'Loss Intelligence',
    time: 'Recover',
    eyebrow: 'Across shifts and weeks',
    headline: 'See where time, labor, capacity, and money were actually lost',
    promise: 'Loss Intelligence shows where time, labor, capacity, and money were lost — an investigation and countermeasure ledger, not another chart to stare at.',
    forWho: 'Operations leaders who need to find the recurring loss, not just the one bad shift, and track whether the fix actually held.',
    capabilities: [
      { title: 'Open/resolved ledger first', body: 'The loss ledger leads the experience — charts are drill-downs into it, not the starting point.' },
      { title: 'Shared loss taxonomy', body: 'Loss categories, impact math, and provenance are shared core — the same figures Bridge Center already surfaces, not a second calculation.' },
      { title: 'Countermeasure tracking', body: 'A logged countermeasure is followed through to whether the loss actually stopped recurring.' },
    ],
    example: null,
    loopStep: 'Learn',
  },
  {
    slug: 'complete',
    name: 'OpsOS Complete',
    time: 'Suite',
    eyebrow: 'The full loop',
    headline: 'Plan → Run → Act → Bridge → Learn, in one platform',
    promise: 'OpsOS Complete is the full operating loop — every standalone product’s capability, on the same data, with no duplicate setup or migration.',
    forWho: 'Operations that want the entire loop from day one: pre-shift planning, live guidance, evidence-backed handoff, and loss recovery together.',
    capabilities: [
      { title: 'One building, not five codebases', body: 'The same org, tenant, facility, and shift data powers every mode — upgrading from a standalone product never requires re-setup.' },
      { title: 'No duplicate math', body: 'Every engine output is byte-identical to what the same input produces in any standalone product.' },
      { title: 'Suite-wide evidence', body: 'Bridge Center’s explanations and Loss Intelligence’s ledger draw on the exact same shift and action data Shift Advisor and Labor Planner wrote.' },
    ],
    example: null,
    loopStep: 'Plan + Run + Act + Bridge + Learn',
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
