export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  pillar: string;
  content: string;
  faqs: { q: string; a: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-track-warehouse-throughput-real-time',
    title: 'How to Track Warehouse Throughput in Real Time (Without Spreadsheets)',
    description: 'Real-time throughput tracking is the foundation of warehouse operations intelligence. Here\'s how leading operations managers measure it — and what most plants are getting wrong.',
    date: '2026-03-15',
    readTime: '8 min read',
    pillar: 'Throughput & Productivity',
    content: `
## Why Throughput Tracking Breaks Down at Most Plants

Walk into most warehouses and distribution centers and you'll find the same scene: a supervisor with a clipboard, a whiteboard with shift totals, and an Excel spreadsheet that someone updates at end of day. That's the throughput tracking system. It's how managers find out, at 3:30 PM, that they fell 18% short of target — 7 hours after they could have done something about it.

Real-time throughput tracking is not a luxury. It's the difference between **managing forward** (seeing what's happening now, making adjustments) and **managing backward** (reviewing what already went wrong).

## What Throughput Actually Measures

Throughput, in its simplest form, is **units output per unit of time**. But "units" can mean many things depending on your operation:

- **Orders per hour** (distribution, e-commerce fulfillment)
- **Parts per shift** (automotive stamping, fabrication)
- **Pallets moved per hour** (grocery distribution, 3PL)
- **Cases picked per person-hour** (food distribution)

The key measurement is always: *output relative to labor input and time*. This gives you throughput **efficiency**, not just throughput volume.

## The 5 Metrics That Define Throughput Performance

**1. Units Per Hour (UPH)** — Raw output rate. Baseline measurement for any operation. Track at the workstation, line, and facility level.

**2. Throughput Per Labor Hour (TPLH)** — Units produced divided by total labor hours worked. This is the efficiency metric — it normalizes for headcount fluctuations.

**3. Throughput Rate Variance** — Actual UPH vs. target UPH, by shift and by hour within a shift. Variance tells you *when* throughput dropped, not just that it dropped.

**4. First-Pass Yield** — What percentage of units make it through the process without rework? Low FPY kills throughput quietly.

**5. Shift-Over-Shift Trend** — Is throughput improving, degrading, or holding flat over time? Trend data is what converts individual shift results into operational intelligence.

## Why Spreadsheets Fail for Throughput Tracking

The spreadsheet isn't the problem. The problem is the *latency* built into manual data collection:

- Data is recorded hourly at best, end-of-shift at worst
- By the time a bottleneck shows up in the spreadsheet, the shift is over
- Cross-shift comparison requires manual reformatting
- No alerts, no thresholds, no automatic flags when throughput drops

Real-time throughput tracking requires continuous data — not periodic snapshots.

## How OpsPulse Tracks Throughput Continuously

OpsOS's OpsPulse module monitors throughput at the line, zone, and facility level on a **rolling 15-minute interval**. Operations managers see:

- Live UPH vs. target with a color-coded deviation indicator
- Automatic alerts when throughput drops more than 10% below target for two consecutive intervals
- Shift-level summaries that auto-populate at shift end — no manual entry
- Week-over-week trend graphs with statistical variance banding

The result: a plant manager knows about a throughput problem at minute 30, not hour 8.

## Implementation: What You Need to Start

Real-time throughput tracking requires three things:

1. **A defined count event** — What action triggers a "unit counted"? (Scan, press, conveyor trigger, operator input)
2. **A data capture method** — Barcode scanner, PLC signal, tablet input, RFID
3. **A visualization and alerting layer** — Where does the data go, and who sees it?

OpsOS integrates with most existing scan infrastructure and can be connected to PLCs and conveyor systems via standard API endpoints. Most operations are running real-time tracking within 2–3 weeks of implementation.

## The ROI Case for Real-Time Throughput Visibility

A Tier 2 automotive supplier running three shifts with 80 people per shift can typically recover 3–7% throughput capacity within the first 90 days of real-time monitoring — just by catching and responding to slowdowns faster.

At $150/unit and 200 units/shift capacity, a 5% throughput recovery = **10 additional units per shift × 3 shifts × 250 operating days = 7,500 additional units per year**. At $150 margin per unit, that's $1.1M in recovered capacity — from better visibility, not new equipment or headcount.

The spreadsheet never showed you that was possible.
    `,
    faqs: [
      {
        q: 'What is throughput in warehouse and manufacturing operations?',
        a: 'Throughput is the rate at which a warehouse or manufacturing facility produces output — measured in units, orders, or pallets per hour or shift. It is the core performance metric for any production or distribution operation.'
      },
      {
        q: 'How do you track warehouse throughput in real time?',
        a: 'Real-time throughput tracking requires a defined count event (barcode scan, PLC signal, or operator input), a continuous data capture method, and a visualization layer that shows current rate vs. target. Tools like OpsOS\'s OpsPulse module provide continuous monitoring with automatic alerts when throughput deviates from targets.'
      },
      {
        q: 'Why are spreadsheets ineffective for throughput tracking?',
        a: 'Spreadsheets introduce latency — data is entered periodically, not continuously. By the time a throughput problem appears in a spreadsheet, it\'s often too late to correct it in the same shift. Real-time tracking systems eliminate this latency and enable proactive management.'
      },
      {
        q: 'What is the difference between throughput and productivity?',
        a: 'Throughput measures raw output rate (units per hour). Productivity normalizes throughput by labor input — typically expressed as units per labor hour. Productivity accounts for headcount, making it a better measure of operational efficiency.'
      }
    ]
  },
  {
    slug: 'warehouse-kpis-operations-manager-must-track',
    title: 'The 8 Warehouse KPIs Every Operations Manager Must Track Weekly',
    description: 'Most operations managers track 2–3 metrics. The ones running the best warehouses track these 8 — and they review them every week without fail.',
    date: '2026-03-10',
    readTime: '10 min read',
    pillar: 'Throughput & Productivity',
    content: `
## The Problem With How Most Warehouses Measure Performance

The average warehouse manager tracks two numbers: units shipped and labor cost. That's it. Everything else is a gut feeling, a supervisor's verbal report, or a monthly number pulled from the ERP system nobody knows how to navigate.

This isn't incompetence. It's what happens when visibility is hard — people track what's easy. The problem is that the metrics that are easy to see are rarely the ones that tell you where you're losing money.

The eight KPIs below are the ones that matter. Each one reveals a different dimension of operational performance. Together, they give you a complete picture — not a partial view.

## KPI 1: Throughput Rate (Units Per Hour)

**What it measures:** Raw output — units, orders, or pallets produced per hour of operation.

**Why it matters:** Throughput rate is the heartbeat of your operation. Everything else is downstream of this number. If throughput is low, you're either moving slow, wasting time, or fighting a bottleneck.

**What good looks like:** Varies by operation type. The benchmark question is: *what is your target rate, and what percentage of time are you hitting it?* World-class operations hit target 85%+ of available time.

**How OpsOS tracks it:** OpsPulse monitors throughput continuously on 15-minute rolling intervals. Alerts fire when rate drops 10%+ below target.

## KPI 2: Labor Cost Per Unit (LCPU)

**What it measures:** Total labor cost divided by units produced. The efficiency metric for labor.

**Why it matters:** Labor is typically 50–70% of warehouse operating cost. LCPU tells you whether your labor spend is generating proportional output — or whether you're overstaffed, understaffed, or misallocated.

**What good looks like:** Trending down over time (getting more output from the same labor spend). Stable LCPU with increasing volume is a win.

**How OpsOS tracks it:** ShiftAdvisor links labor hours (from time-and-attendance or manual shift data) to throughput output, calculating LCPU per shift with historical trending.

## KPI 3: Overall Equipment Effectiveness (OEE)

**What it measures:** A composite score of Availability × Performance × Quality. Measures how well equipment is being used relative to its theoretical maximum.

**Why it matters:** World-class OEE is 85%. The average manufacturing plant runs at 60%. That 25-point gap is pure money — wasted machine time, slow cycles, and defects.

**What good looks like:** 85%+ for world-class. 75%+ for competitive. Under 65% means significant opportunity.

**How OpsOS tracks it:** OpsPulse automatically calculates OEE from shift data, downtime logs, and cycle time tracking.

## KPI 4: On-Time Shipment Rate (OTSR)

**What it measures:** Percentage of orders shipped on or before the committed date.

**Why it matters:** For automotive suppliers and distributors, on-time delivery isn't just a service metric — it's a contract compliance requirement. Missing OTSR targets can trigger chargebacks, audits, and lost contracts.

**What good looks like:** 98%+ for most automotive supplier agreements. Any miss is worth a root-cause analysis.

## KPI 5: Waste Rate (Scrap / Defects as % of Output)

**What it measures:** Units scrapped, reworked, or rejected divided by total units produced.

**Why it matters:** Waste is invisible cost. A stamping plant running 3% scrap rate on 1M annual units at $12/unit material cost is losing $360,000/year — money that never shows up as a line item because it's baked into the cost of goods.

**What good looks like:** Under 1% for mature operations. Under 0.5% for Tier 1–qualified suppliers.

**How OpsOS tracks it:** WasteWatch categorizes waste by type, zone, and time of occurrence. Patterns emerge that show *where* and *when* waste spikes — not just the aggregate number.

## KPI 6: Headcount Utilization Rate

**What it measures:** What percentage of scheduled headcount is actively producing (vs. waiting, idle, or on non-productive tasks).

**Why it matters:** 100 people on the floor ≠ 100 people producing. Typical utilization in unoptimized operations runs 70–80%. Raising it to 88–90% without adding headcount is like getting 8–10 free workers.

**How OpsOS tracks it:** ShiftAdvisor tracks task assignment versus output, flagging zones where headcount isn't generating proportional throughput.

## KPI 7: Safety Incident Rate (TRIR)

**What it measures:** Total Recordable Incident Rate — incidents per 100 full-time employees per year.

**Why it matters:** Beyond the human cost, safety incidents cost operations in OSHA compliance, workers' comp, and lost productivity. A single recordable incident can shut a line down for hours. TRIR is also a key metric for automotive OEM supplier qualification.

**What good looks like:** Under 1.0 TRIR for best-in-class. Industry average is approximately 3.0–3.5.

**How OpsOS tracks it:** SafetyShield logs incidents, near-misses, and safety observations in real time, with automatic TRIR calculation and trend reporting.

## KPI 8: Inventory Accuracy Rate

**What it measures:** Match between physical inventory and system records, expressed as a percentage.

**Why it matters:** Inventory inaccuracy is a throughput killer. Line stops, wrong picks, and production delays all trace back to the system saying you have something you don't. A 95% inventory accuracy rate sounds good — until you realize 5% error on 10,000 SKUs means 500 items are wrong.

**What good looks like:** 99%+ for high-performance operations. Cycle count programs are the tool; OpsOS is the dashboard.

## Reviewing All 8 Weekly: The Operations Cadence

These 8 KPIs should be on a single dashboard, reviewed every Monday morning by the operations team. The review should take 20 minutes, not two hours. The goal is to identify the one or two metrics that deviated most from target in the prior week and assign root-cause owners.

OpsOS's OpsPulse module generates this weekly summary automatically — emailed to your team at 6 AM Monday with prior-week data and week-over-week comparison.
    `,
    faqs: [
      {
        q: 'What KPIs should a warehouse manager track weekly?',
        a: 'The 8 core warehouse KPIs are: Throughput Rate (units per hour), Labor Cost Per Unit, OEE (Overall Equipment Effectiveness), On-Time Shipment Rate, Waste Rate, Headcount Utilization Rate, Safety Incident Rate (TRIR), and Inventory Accuracy Rate. Reviewing all 8 weekly gives operations managers a complete picture of facility performance.'
      },
      {
        q: 'What is OEE and what is a good OEE score?',
        a: 'OEE (Overall Equipment Effectiveness) is calculated as Availability × Performance × Quality. It measures how effectively equipment is being used. World-class OEE is 85%+. The average manufacturing plant runs at approximately 60%. Most operations have significant room to improve without capital investment.'
      },
      {
        q: 'How do you calculate labor cost per unit in a warehouse?',
        a: 'Labor Cost Per Unit (LCPU) is calculated by dividing total labor cost (wages, benefits, overtime) for a period by the total units produced in that period. It is the most direct measure of labor efficiency and should be tracked weekly at the shift and facility level.'
      },
      {
        q: 'What is a good on-time shipment rate for automotive suppliers?',
        a: 'Most automotive OEM supplier agreements require 98%+ on-time shipment rates. Tier 2–3 suppliers who consistently miss this threshold risk chargebacks, quality audits, and loss of contract. On-time shipment rate should be reviewed daily, not monthly.'
      }
    ]
  },
  {
    slug: 'what-is-oee-plant-manager-guide',
    title: 'What Is OEE? A Plain-English Guide for Plant Managers',
    description: 'OEE (Overall Equipment Effectiveness) is the single most important metric for manufacturing operations — and the most misunderstood. Here\'s what it actually means and how to use it.',
    date: '2026-03-05',
    readTime: '9 min read',
    pillar: 'Throughput & Productivity',
    content: `
## OEE in Plain English

OEE stands for **Overall Equipment Effectiveness**. It's a single number — expressed as a percentage — that tells you how well your production equipment is performing relative to what it's theoretically capable of.

A 75% OEE means your equipment is performing at 75% of its theoretical maximum. The other 25% is being lost somewhere — to downtime, slow cycles, or defects.

The formula is:

**OEE = Availability × Performance × Quality**

Each component answers a different question:

- **Availability:** Is the machine running when it's supposed to be? (Lost to breakdowns, changeovers, waiting)
- **Performance:** When it's running, is it running at the right speed? (Lost to slow cycles, minor stops)
- **Quality:** When it's running at speed, is it making good parts? (Lost to defects, rework)

## Breaking Down Each Component

### Availability

**Formula:** Actual Run Time ÷ Planned Production Time

If a machine is scheduled for 8 hours but spends 1.5 hours stopped due to breakdown or changeover, Availability = 6.5 ÷ 8 = **81.25%**.

Availability losses include:
- Unplanned downtime (breakdowns, jams, machine failures)
- Planned downtime that runs long (changeovers, tooling changes, cleaning)
- Material starvation (waiting for upstream process to feed parts)

### Performance

**Formula:** (Ideal Cycle Time × Total Parts Produced) ÷ Actual Run Time

If a machine has an ideal cycle time of 3 seconds per part, ran for 6.5 hours, and produced 6,200 parts:

Expected parts in 6.5 hours at ideal rate: 6.5 × 3600 ÷ 3 = 7,800 parts
Performance = 6,200 ÷ 7,800 = **79.5%**

Performance losses include:
- Minor stops (machine pauses that don't trigger a downtime event)
- Slow cycles (machine running slower than ideal rate)
- Operator pace variation

### Quality

**Formula:** Good Parts ÷ Total Parts Produced

If 6,200 parts were produced and 310 were scrapped or reworked:
Quality = 5,890 ÷ 6,200 = **95.0%**

Quality losses include:
- Scrap (parts that cannot be used or reworked)
- Rework (parts that require additional processing to meet spec)
- Startup rejects (bad parts produced during machine warm-up or after changeover)

### OEE Combined

OEE = 81.25% × 79.5% × 95.0% = **61.4%**

This machine is running at 61.4% of its theoretical capacity — below the competitive average and well below world-class.

## OEE Benchmarks: What Do the Numbers Mean?

| OEE Score | Classification | What It Means |
|-----------|----------------|---------------|
| 85%+ | World Class | Best-in-class performance. Benchmark for continuous improvement programs. |
| 75–85% | Competitive | Good performance with room to improve. Typical of well-managed mid-size operations. |
| 65–75% | Average | Moderate performance. Significant improvement opportunities, especially in Performance and Availability. |
| Below 65% | Poor | Substantial losses occurring. Common in operations without real-time monitoring. |

The average manufacturing plant runs at approximately **60% OEE**. World-class is 85%.

That 25-point gap is the entire improvement opportunity for most plants. Closing half of it — getting from 60% to 72% — typically represents millions of dollars in recovered capacity.

## The 6 Big Losses That Kill OEE

OEE was designed around what the Total Productive Maintenance (TPM) framework calls the "Six Big Losses":

1. **Breakdowns** — Unplanned equipment failures (hits Availability)
2. **Setup and Adjustments** — Time to change over to a new product or reset after a break (hits Availability)
3. **Minor Stops** — Short pauses (under 5 minutes) that don't get logged as downtime (hits Performance)
4. **Reduced Speed** — Running at less than ideal cycle time (hits Performance)
5. **Production Rejects** — Defects during steady-state production (hits Quality)
6. **Startup Rejects** — Defects during initial startup after downtime (hits Quality)

Most plants are losing significant OEE to losses they're not even tracking, primarily minor stops and reduced speed — the Performance losses that are invisible without real-time monitoring.

## 5 Steps to Improve OEE

**Step 1: Measure first.** You cannot improve OEE without accurate, continuous measurement. Manual end-of-day OEE calculations are better than nothing — but they miss minor stops and performance degradation entirely.

**Step 2: Identify your biggest loss category.** Is it Availability, Performance, or Quality? The one with the lowest score is your priority. Don't optimize Quality if your machine is stopping every 45 minutes.

**Step 3: Root-cause the top 2–3 specific losses.** Within your biggest loss category, what are the top causes? Use pareto analysis on your downtime logs, defect logs, and performance data.

**Step 4: Address one constraint at a time.** Trying to fix everything at once is how improvement programs stall. Pick the highest-impact loss, fix it, measure the result, then move to the next.

**Step 5: Set rolling targets.** OEE improvement is a continuous process, not a one-time project. Set a 90-day target, measure weekly, and communicate progress to the team.

## How OpsOS Tracks OEE Automatically

Manual OEE calculation is time-consuming and error-prone — especially for Performance, which requires capturing minor stops that rarely get logged.

OpsOS's OpsPulse module calculates OEE automatically from:
- **Availability:** Integration with machine signals or operator-logged downtime events
- **Performance:** Continuous cycle time monitoring against ideal cycle time standards
- **Quality:** Scrap/rework data from WasteWatch or operator input at the line

The result is real-time OEE — visible on the plant floor dashboard, updated every 15 minutes, with drill-down into which component is driving the loss right now.

No more calculating OEE in Excel at end of month. No more finding out you ran at 58% OEE last week when you thought it was 72%.
    `,
    faqs: [
      {
        q: 'What does OEE stand for and what does it measure?',
        a: 'OEE stands for Overall Equipment Effectiveness. It measures how effectively manufacturing equipment is being used, calculated as Availability × Performance × Quality. The result is a percentage representing how close to theoretical maximum output a machine or facility is operating.'
      },
      {
        q: 'What is a world-class OEE score?',
        a: '85% OEE is considered world-class. The average manufacturing plant runs at approximately 60% OEE. Most operations have significant improvement opportunity in the Performance component — specifically from minor stops and reduced speed cycles that go untracked without real-time monitoring.'
      },
      {
        q: 'How do you calculate OEE for a manufacturing plant?',
        a: 'OEE is calculated by multiplying three components: Availability (actual run time ÷ planned production time), Performance (ideal cycle time × total parts ÷ actual run time), and Quality (good parts ÷ total parts produced). The result is a single percentage showing how effectively equipment is being used.'
      },
      {
        q: 'What are the 6 big losses that reduce OEE?',
        a: 'The Six Big Losses are: Breakdowns and Setup/Adjustments (which reduce Availability), Minor Stops and Reduced Speed (which reduce Performance), and Production Rejects and Startup Rejects (which reduce Quality). Performance losses from minor stops and speed reduction are the most commonly missed because they require continuous monitoring to capture accurately.'
      }
    ]
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map(post => post.slug);
}
