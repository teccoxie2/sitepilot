import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Radar,
  Shield,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Tools Risk Assessment Framework 2026 | SitePilot'
const pageDescription =
  'An enterprise AI tools risk assessment framework covering data security, vendor dependence, technical compatibility, compliance, and adoption risk so teams can control exposure before rollout.'
const pageUrl = 'https://sitepilot.co/ai-tools-risk-assessment-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI tool risk assessment',
    'enterprise risk management',
    'AI implementation risk',
    'data security risk',
    'compliance risk',
    'vendor risk',
    'risk mitigation strategy',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Enterprise AI Tools Risk Assessment Framework - Protect Your AI Investment',
    description: 'An enterprise AI risk framework for CFOs, CTOs, and risk teams covering live scoring, mitigation paths, and ROI impact.',
    type: 'article',
    url: pageUrl,
    images: [
      {
        url: '/images/ai-risk-assessment-dashboard.jpg',
        width: 1200,
        height: 630,
        alt: 'AI tools risk assessment dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise AI Tools Risk Assessment Framework | Protect AI Investment',
    description: 'Live risk scoring, practical mitigation strategy, and CFO-friendly ROI analysis.',
    images: ['/images/ai-risk-assessment-dashboard.jpg'],
  },
}

const heroStats = [
  { value: '87%', label: 'Enterprises without a formal AI risk assessment process' },
  { value: '$2.5M', label: 'Annual AI investment often left exposed to avoidable risk' },
  { value: '43%', label: 'AI projects that fail because risk was handled poorly' },
  { value: '$680K', label: 'Average loss from choosing the wrong tools' },
]

const riskPrinciples = [
  'Risk assessment has to happen before procurement, not after an incident when someone is writing the retrospective.',
  'Vendor lock-in, data movement, compliance obligations, and employee adoption need to be reviewed together.',
  'Any high-ROI story that ignores mitigation cost is usually optimism disguised as a finance model.',
  'A roadmap matters because it constrains losses early, not because it makes the risk labels look cleaner.',
]

const riskMatrix = [
  {
    category: 'Data security risk',
    impact: 'High',
    probability: '30%',
    score: 'High',
    mitigationCost: '$150K',
  },
  {
    category: 'Vendor dependence risk',
    impact: 'Medium',
    probability: '60%',
    score: 'High',
    mitigationCost: '$80K',
  },
  {
    category: 'Technical compatibility risk',
    impact: 'Medium',
    probability: '40%',
    score: 'Medium',
    mitigationCost: '$45K',
  },
  {
    category: 'Compliance requirement risk',
    impact: 'High',
    probability: '25%',
    score: 'High',
    mitigationCost: '$200K',
  },
  {
    category: 'Employee adoption risk',
    impact: 'Low',
    probability: '70%',
    score: 'Medium',
    mitigationCost: '$30K',
  },
] as const

const riskBands = [
  {
    range: '0-30',
    label: 'Low risk',
    note: 'Green light - fast approval path',
    tone: 'border-indigo-200 bg-indigo-50 text-indigo-700',
  },
  {
    range: '31-60',
    label: 'Moderate risk',
    note: 'Yellow light - enhanced diligence and controls',
    tone: 'border-amber-200 bg-amber-50 text-amber-700',
  },
  {
    range: '61-85',
    label: 'High risk',
    note: 'Red light - board-level approval required',
    tone: 'border-rose-200 bg-rose-50 text-rose-700',
  },
  {
    range: '86-100',
    label: 'Critical risk',
    note: 'Do not proceed - find an alternative',
    tone: 'border-violet-200 bg-violet-50 text-violet-700',
  },
]

const roiCards = [
  { value: '$3.2M', label: 'Initial risk exposure' },
  { value: '$450K', label: 'Mitigation investment' },
  { value: '433%', label: 'Risk mitigation ROI' },
]

const roadmapPhases = [
  {
    phase: 'Phase 1',
    timeline: 'Months 1-2',
    title: 'Establish the risk baseline',
    items: ['AI tool inventory', 'Industry benchmark comparison', 'KRI definition', 'Initial risk scoring'],
  },
  {
    phase: 'Phase 2',
    timeline: 'Months 3-4',
    title: 'Implement mitigation actions',
    items: ['Treat high-risk items', 'Renegotiate vendor contracts', 'Train employees', 'Upgrade technical security'],
  },
  {
    phase: 'Phase 3',
    timeline: 'Months 5-6',
    title: 'Stand up the monitoring system',
    items: ['Risk monitoring dashboard', 'Automated alerting', 'Monthly review process', 'Continuous improvement loop'],
  },
  {
    phase: 'Phase 4',
    timeline: 'Ongoing',
    title: 'Optimize and scale',
    items: ['Refine the risk model', 'Standardize assessment criteria', 'Build risk culture', 'Share best practices'],
  },
]

const relatedLinks = [
  {
    href: '/ai-tools-usage-tracking-dashboard-2026',
    title: 'AI Tools Usage Tracking Dashboard',
    description: 'Connect adoption, waste, and actual ROI in one operating view.',
  },
  {
    href: '/ai-tools-cost-optimization-enterprise-2026',
    title: 'AI Cost Optimization Framework',
    description: 'Mitigation planning only works when it stays tied to budget structure.',
  },
  {
    href: '/enterprise-ai-roi-optimization-framework-2026',
    title: 'AI ROI Implementation Guide',
    description: 'Put risk, return, and payback into the same decision model.',
  },
]

function pillTone(value: string) {
  if (value === 'High') return 'border-rose-200 bg-rose-50 text-rose-700'
  if (value === 'Medium') return 'border-amber-200 bg-amber-50 text-amber-700'
  return 'border-indigo-200 bg-indigo-50 text-indigo-700'
}

export default function AIRiskAssessmentPage() {
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

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[44rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_30%),radial-gradient(circle_at_top_right,rgba(239,68,68,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_26%,#ffffff_58%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[34rem] h-[34rem] bg-[radial-gradient(circle_at_16%_20%,rgba(251,146,60,0.05),transparent_24%),radial-gradient(circle_at_78%_22%,rgba(99,91,255,0.05),transparent_22%),radial-gradient(circle_at_50%_78%,rgba(14,165,233,0.05),transparent_28%)]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Enterprise AI risk assessment 2026
                </div>

                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  Enterprise AI Tools Risk Assessment
                  <span className="brand-gradient-text block">Close the gaps before you talk about returns.</span>
                </h1>

                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  Enterprise AI risk assessment has to evaluate data security, vendor dependence, technical compatibility, compliance obligations, and adoption friction together. This page keeps the original risk matrix, scoring logic, ROI examples, roadmap, and internal links while moving the visual language into the current light Stripe-ish system.
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                  <Link href="/ai-tools-usage-tracking-dashboard-2026" className="btn-brand inline-flex items-center gap-2">
                    Review usage tracking
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/ai-tools" className="btn-secondary inline-flex items-center gap-2">
                    Return to the AI tools hub
                  </Link>
                </div>

                <div className="grid max-w-2xl gap-4 sm:grid-cols-2">
                  {heroStats.map((item) => (
                    <div key={item.label} className="page-card bg-white/90 p-4">
                      <div className="mb-1 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{item.value}</div>
                      <div className="text-sm text-slate-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-rose-100/40 via-indigo-50/35 to-white blur-2xl" />
                <div className="relative page-card-glow p-5 md:p-6">
                  <div className="page-card bg-white/95 p-6">
                    <div className="mb-6 flex items-center justify-between gap-3">
                      <div>
                        <div className="mb-1 text-sm text-slate-500">Risk posture baseline</div>
                        <div className="text-xl font-semibold text-slate-950">Four practical assessment rules</div>
                      </div>
                      <div className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
                        Board-level useful
                      </div>
                    </div>

                    <div className="space-y-3">
                      {riskPrinciples.map((item) => (
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

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">risk matrix</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Risk is not a feeling
              <span className="brand-gradient-text block">Break it into category, probability, impact, and cost.</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              The five risk categories and mitigation costs from the original page remain intact. They are simply laid out as a clearer table so the most expensive, frequent, and urgent issues stand out immediately.
            </p>
          </div>

          <div className="page-card overflow-hidden p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Risk category</th>
                    <th className="px-6 py-4 text-center font-semibold">Impact level</th>
                    <th className="px-6 py-4 text-center font-semibold">Likelihood</th>
                    <th className="px-6 py-4 text-center font-semibold">Risk score</th>
                    <th className="px-6 py-4 text-center font-semibold">Mitigation cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {riskMatrix.map((row) => (
                    <tr key={row.category} className="hover:bg-slate-50/80">
                      <td className="px-6 py-4 font-medium text-slate-900">{row.category}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${pillTone(row.impact)}`}>
                          {row.impact}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-slate-600">{row.probability}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${pillTone(row.score)}`}>
                          {row.score}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center font-semibold text-slate-950">{row.mitigationCost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-16 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="page-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                <Radar className="h-5 w-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Live risk scoring system</h2>
            </div>
            <div className="space-y-4">
              {riskBands.map((band) => (
                <div key={band.range} className={`rounded-2xl border px-4 py-4 ${band.tone}`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-base font-semibold">{band.label} ({band.range} points)</div>
                      <div className="mt-1 text-sm opacity-90">{band.note}</div>
                    </div>
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="page-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                <BarChart3 className="h-5 w-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Risk scoring formula</h2>
            </div>
            <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950 p-6 font-mono text-sm text-indigo-300 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.7)]">
              <div className="mb-4 text-slate-100">Total risk score = sum of (risk probability x impact severity x industry weight)</div>
              <div className="space-y-2 text-slate-300">
                <div>Data security: 30% x 9 x 0.8 = 2.16</div>
                <div>Vendor risk: 60% x 7 x 0.6 = 2.52</div>
                <div>Compliance risk: 25% x 9 x 0.9 = 2.03</div>
                <div>...</div>
                <div className="pt-2 font-bold text-indigo-300">Total score: 67 (high risk)</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">cfo view</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Risk spend still has to prove itself financially
              <span className="brand-gradient-text block">The balance sheet gets the final vote.</span>
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {roiCards.map((card) => (
              <div key={card.label} className="page-card p-7 text-center">
                <div className="mb-3 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                    <TrendingUp className="h-5 w-5 text-[#635bff]" />
                  </div>
                </div>
                <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">{card.value}</div>
                <div className="mt-2 text-sm text-slate-600">{card.label}</div>
              </div>
            ))}
          </div>

          <div className="page-card mt-6 p-8 md:p-10">
            <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950 p-6 font-mono text-sm text-indigo-300">
              <div>Annual AI tool benefit: $2.8M</div>
              <div>Risk mitigation cost: $450K</div>
              <div>Potential risk loss: $3.2M (unmitigated)</div>
              <div>Actual risk loss: $800K (mitigated)</div>
              <div className="mt-2 font-bold text-indigo-300">Net benefit improvement: $1.95M</div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">implementation roadmap</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Risk governance cannot stay theoretical
              <span className="brand-gradient-text block">It only matters when it ships in phases.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {roadmapPhases.map((phase) => (
              <div key={phase.phase} className="page-card p-7">
                <div className="mb-3 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                  {phase.phase} · {phase.timeline}
                </div>
                <h3 className="mb-4 text-xl font-semibold text-slate-950">{phase.title}</h3>
                <div className="space-y-3 text-sm text-slate-600">
                  {phase.items.map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="page-card p-8 md:p-10">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                <Shield className="h-5 w-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Related enterprise AI resources</h2>
            </div>
            <div className="space-y-3">
              {relatedLinks.map((item) => (
                <Link key={item.href} href={item.href} className="page-card-soft block rounded-2xl border border-slate-200 bg-slate-50/90 p-4 transition hover:border-sky-200 hover:bg-sky-50/70">
                  <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{item.description}</div>
                </Link>
              ))}
            </div>
          </div>

          <div className="page-card-glow surface-muted p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white">
                <ArrowRight className="h-5 w-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Next step</h2>
            </div>
            <p className="mb-6 leading-7 text-slate-600">
              If you are evaluating an AI tool portfolio, put the current tool list, data flows, compliance constraints, vendor lock-in points, and adoption rates on the table together. Miss one of those dimensions and the conclusion gets unreliable fast.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/ai-tools-usage-tracking-dashboard-2026" className="btn-brand inline-flex items-center gap-2">
                Review usage tracking
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/enterprise-ai-roi-optimization-framework-2026" className="btn-secondary inline-flex items-center gap-2">
                Continue to the ROI framework
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
