import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  DollarSign,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI Transformation ROI Calculation Framework for Enterprises 2026 | SitePilot'
const pageDescription =
  'Enterprise AI transformation ROI should be measured across financial returns, operational improvements, strategic advantage, and human capital impact instead of pretending one headline savings number is enough.'
const pageUrl = 'https://sitepilot.co/ai-transformation-roi-calculation-framework-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI transformation ROI',
    'AI investment calculator',
    'enterprise AI ROI',
    'AI business value measurement',
    'AI ROI framework',
    'AI transformation metrics',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: 'Enterprise AI ROI framework covering financial, operational, strategic, and human-capital value.',
    type: 'article',
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: 'Comprehensive enterprise AI transformation ROI framework for 2026.',
  },
}

const heroStats = [
  { value: '$13.5T', label: 'Global AI economic impact by 2030' },
  { value: '156%', label: 'Average enterprise AI ROI' },
  { value: '67%', label: 'Organizations struggling with measurement' },
  { value: '24 months', label: 'Typical AI payback period' },
]

const frameworkSignals = [
  'Reporting a single ROI number is easy, and that is exactly why it misleads people.',
  'AI investment should be judged across cash returns, efficiency change, strategic position, and human-capital impact at the same time.',
  'If the baseline is weak, every later “improvement” can turn into an illusion.',
  'A mature ROI framework is not there to make slides prettier. It is there to make resource allocation sharper.',
]

const pillars = [
  {
    title: 'Financial metrics',
    description: 'Direct cost savings, revenue generation, risk-adjusted returns, and cash-flow logic.',
  },
  {
    title: 'Operational value',
    description: 'Cycle time, throughput, quality, utilization, and process performance gains.',
  },
  {
    title: 'Strategic impact',
    description: 'Market position, innovation speed, differentiation, and option value creation.',
  },
  {
    title: 'Human capital',
    description: 'Productivity, retention, satisfaction, capability lift, and organizational agility.',
  },
]

const metricSections = [
  {
    title: '1. Financial ROI metrics',
    tone: 'border-indigo-100 bg-indigo-50/80',
    blocks: [
      'Keep the classic metrics like NPV, IRR, and payback period instead of dropping financial discipline for novelty.',
      'Direct savings, revenue generation, investment costs, and risk adjustments all belong in the model.',
      'Most ROI views need a three-to-five-year horizon. If you only measure year one, the answer gets distorted fast.',
    ],
  },
  {
    title: '2. Operational efficiency metrics',
    tone: 'border-sky-100 bg-sky-50/80',
    blocks: [
      'Cycle time, throughput, first-pass yield, defect reduction, and SLA achievement all represent real value.',
      'Time savings need to be multiplied by fully loaded cost, or you will badly understate the gain.',
      'Quality improvements are not just rework costs. Customer impact and reputation damage matter too.',
    ],
  },
  {
    title: '3. Strategic value metrics',
    tone: 'border-violet-100 bg-violet-50/80',
    blocks: [
      'Innovation acceleration, market expansion, and competitive differentiation are hard to quantify, not impossible to quantify.',
      'Market share impact, CLV improvement, option value, and risk mitigation can all be modeled in practical ways.',
      'If strategic value never makes it into the table, the organization will default toward short-term projects. That bias is common.',
    ],
  },
  {
    title: '4. Human capital value',
    tone: 'border-amber-100 bg-amber-50/80',
    blocks: [
      'Employee productivity, satisfaction, retention, and organizational agility are all core AI transformation value pools.',
      'Retention value cannot stop at HR metrics. Replacement cost needs to be included.',
      'Training ROI is usually underestimated because too many companies treat capability building as pure cost.',
    ],
  },
]

const benchmarks = [
  ['Financial Services', '245%', '14', '380%', 'Risk assessment, fraud detection, algorithmic trading'],
  ['Manufacturing', '198%', '18', '325%', 'Predictive maintenance, quality control, supply chain optimization'],
  ['Retail & E-commerce', '167%', '16', '285%', 'Recommendation engines, inventory optimization, pricing'],
  ['Healthcare', '156%', '22', '270%', 'Diagnostic imaging, drug discovery, patient monitoring'],
  ['Telecommunications', '142%', '20', '235%', 'Network optimization, customer service, fraud detection'],
  ['Transportation & Logistics', '134%', '24', '220%', 'Route optimization, demand forecasting, autonomous systems'],
]

const roadmap = [
  {
    title: 'Baseline establishment',
    items: ['Current process mapping', 'Performance baseline metrics', 'Cost structure analysis', 'Stakeholder value definition'],
  },
  {
    title: 'ROI framework design',
    items: ['Measurement framework selection', 'KPI definition', 'Data collection strategy', 'Reporting structure design'],
  },
  {
    title: 'Measurement implementation',
    items: ['Data collection automation', 'Dashboard development', 'Tracking system deployment', 'Team training execution'],
  },
  {
    title: 'Optimization & scaling',
    items: ['Performance optimization', 'Continuous improvement', 'Scaling to new use cases', 'Strategic value realization'],
  },
]

export default function AITransformationROICalculationFramework2026Page() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-11"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_56%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[34rem] h-[34rem] bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.05),transparent_24%),radial-gradient(circle_at_78%_22%,rgba(99,91,255,0.05),transparent_22%),radial-gradient(circle_at_54%_82%,rgba(251,191,36,0.05),transparent_28%)]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Enterprise AI ROI framework 2026
                </div>
                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI transformation ROI framework,
                  <span className="brand-gradient-text block">Stop trying to brief the board with one number.</span>
                </h1>
                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  Enterprise AI transformation ROI should be measured across financial returns, operational improvements, strategic advantage, and human capital impact instead of pretending one headline savings number is enough. This page keeps the original framework, benchmarks, roadmap, and CTA structure while aligning the presentation to the current light Stripe-ish system.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
                  {heroStats.map((item) => (
                    <div key={item.label} className="page-card bg-white/90 p-4">
                      <div className="mb-1 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{item.value}</div>
                      <div className="text-sm text-slate-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
                <div className="relative page-card-glow p-5 md:p-6">
                  <div className="page-card bg-white/95 p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <div className="mb-1 text-sm text-slate-500">Framework baseline</div>
                        <div className="text-xl font-semibold text-slate-950">Four hard tests</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        Multi-layer ROI
                      </div>
                    </div>
                    <div className="space-y-3">
                      {frameworkSignals.map((item) => (
                        <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                            <p className="text-sm leading-6 text-slate-600">{item}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-16">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="page-card p-8">
              <h2 className="mb-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{pillar.title}</h2>
              <p className="leading-7 text-slate-600">{pillar.description}</p>
            </div>
          ))}
        </section>

        <section className="space-y-6 mb-16">
          {metricSections.map((section) => (
            <div key={section.title} className={`page-card border p-8 md:p-10 ${section.tone}`}>
              <h2 className="mb-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{section.title}</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {section.blocks.map((block) => (
                  <div key={block} className="rounded-2xl border border-white/70 bg-white/80 px-4 py-4 text-sm leading-7 text-slate-700">
                    {block}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-16 page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Industry benchmarks</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Benchmarks are not the answer,
              <span className="brand-gradient-text block">but they cut down a lot of empty talk.</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              The original benchmark table keeps its core figures and industry notes. It is not a guarantee, but it does put guardrails around your assumptions.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] border-separate border-spacing-0 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
              <thead className="bg-slate-50 text-left text-sm text-slate-600">
                <tr>
                  <th className="px-5 py-4 font-semibold">Industry</th>
                  <th className="px-5 py-4 font-semibold">Avg. ROI</th>
                  <th className="px-5 py-4 font-semibold">Payback (Months)</th>
                  <th className="px-5 py-4 font-semibold">Top Quartile ROI</th>
                  <th className="px-5 py-4 font-semibold">Key AI Applications</th>
                </tr>
              </thead>
              <tbody>
                {benchmarks.map(([industry, roi, payback, top, use]) => (
                  <tr key={industry} className="border-t border-slate-200">
                    <td className="border-t border-slate-200 px-5 py-4 font-medium text-slate-950">{industry}</td>
                    <td className="border-t border-slate-200 px-5 py-4 text-indigo-700 font-semibold">{roi}</td>
                    <td className="border-t border-slate-200 px-5 py-4 text-slate-700">{payback}</td>
                    <td className="border-t border-slate-200 px-5 py-4 text-indigo-700 font-semibold">{top}</td>
                    <td className="border-t border-slate-200 px-5 py-4 text-sm text-slate-600">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Implementation roadmap</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              ROI measurement has to reach operations,
              <span className="brand-gradient-text block">dropping formulas into slides is not implementation.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {roadmap.map((step, index) => (
              <div key={step.title} className="page-card p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50 text-lg font-semibold text-[#635bff]">
                  {index + 1}
                </div>
                <h3 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{step.title}</h3>
                <div className="space-y-3">
                  {step.items.map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-[#635bff]" />
                CTA
              </div>
              <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
                Maximize your AI transformation ROI
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                The CTA intent stays the same: if you are serious about building an ROI system, do not stop at “we feel AI is valuable.” Feeling is cheap. Measurement is what counts.
              </p>
            </div>
            <div className="space-y-4">
              <div className="page-card bg-slate-50/80 p-5">
                <div className="text-sm font-semibold text-slate-950">ROI assessment & framework</div>
                <div className="mt-2 text-sm text-slate-600">Complete ROI measurement framework design and baseline establishment</div>
                <div className="mt-2 text-sm text-[#635bff]">$35,000-75,000 • 4-week delivery</div>
              </div>
              <div className="page-card bg-slate-50/80 p-5">
                <div className="text-sm font-semibold text-slate-950">Full ROI optimization program</div>
                <div className="mt-2 text-sm text-slate-600">End-to-end ROI measurement, tracking and optimization implementation</div>
                <div className="mt-2 text-sm text-[#635bff]">$125,000-350,000 • 12-16 week program</div>
              </div>
              <Link href="/contact" className="btn-brand inline-flex items-center gap-2">
                Get your AI ROI assessment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
