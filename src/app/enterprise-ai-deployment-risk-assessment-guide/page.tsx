import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Deployment Risk Assessment Guide 2026 | SitePilot'
const pageDescription =
  'A practical enterprise AI deployment risk assessment framework for identifying, evaluating, and mitigating implementation risks.'
const pageUrl = 'https://sitepilot.co/enterprise-ai-deployment-risk-assessment-guide'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'enterprise AI deployment',
    'AI risk assessment',
    'AI implementation risks',
    'enterprise AI security',
    'AI governance framework',
    'AI risk management',
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
  alternates: { canonical: pageUrl },
}

const overviewStats = [
  ['Risk factors covered', '12'],
  ['Assessment phases', '3'],
  ['Mitigation success target', '94%'],
  ['Implementation timeline', '8 weeks'],
]

const riskGroups = [
  {
    title: 'Technical risks',
    tone: 'from-rose-50 via-white to-orange-50',
    items: [
      ['Data quality & integrity', ['Incomplete or biased training data', 'Data drift and distribution shifts', 'Missing validation pipelines']],
      ['Model performance & reliability', ['Inconsistent accuracy in production', 'Edge case failures', 'Model degradation over time']],
      ['Infrastructure & scalability', ['Insufficient compute resources', 'Latency and throughput limits', 'Integration complexity']],
    ],
  },
  {
    title: 'Operational risks',
    tone: 'from-amber-50 via-white to-yellow-50',
    items: [
      ['Change management', ['Employee resistance', 'Inadequate training', 'Workflow disruption']],
      ['Skills & talent gap', ['Shortage of AI expertise', 'Knowledge transfer issues', 'External dependency']],
      ['Monitoring & maintenance', ['Weak alerting', 'No continuous monitoring', 'Rollback challenges']],
    ],
  },
  {
    title: 'Business risks',
    tone: 'from-sky-50 via-white to-indigo-50',
    items: [
      ['ROI & budget overruns', ['Unrealistic expectations', 'Hidden costs', 'Timeline creep']],
      ['Strategic alignment', ['Misaligned initiatives', 'Weak sponsorship', 'Competing priorities']],
      ['Vendor & lock-in', ['Single-provider dependency', 'Proprietary limitations', 'Migration friction']],
    ],
  },
  {
    title: 'Compliance & security',
    tone: 'from-violet-50 via-white to-fuchsia-50',
    items: [
      ['Regulatory compliance', ['AI law obligations', 'Data privacy requirements', 'Industry mandates']],
      ['Security vulnerabilities', ['Adversarial inputs', 'Data poisoning', 'Privacy leaks']],
      ['Ethical & bias risks', ['Algorithmic bias', 'Low transparency', 'Governance gaps']],
    ],
  },
]

const methodology = [
  {
    title: 'Phase 1: Risk identification',
    icon: ClipboardCheck,
    items: ['Risk inventory', 'Stakeholder workshops', 'Architecture review', 'Business impact analysis', 'Regulatory review'],
  },
  {
    title: 'Phase 2: Risk quantification',
    icon: BarChart3,
    items: ['Probability-impact scoring', 'Financial impact modeling', 'Risk heat maps', 'Scenario planning'],
  },
  {
    title: 'Phase 3: Risk mitigation',
    icon: ShieldCheck,
    items: ['Mitigation strategy design', 'Control implementation', 'Contingency planning', 'Continuous review'],
  },
]

const mitigation = [
  {
    title: 'Technical mitigation',
    color: 'border-sky-200 bg-sky-50/70',
    items: ['Data validation pipeline', 'Model A/B testing', 'Infrastructure redundancy'],
  },
  {
    title: 'Organizational mitigation',
    color: 'border-indigo-200 bg-indigo-50/70',
    items: ['Change management program', 'AI governance framework', 'Continuous monitoring'],
  },
]

const successMetrics = [
  ['Project failure rate', '<5%'],
  ['System uptime', '98.5%'],
  ['Faster ROI achievement', '73%'],
  ['Stakeholder satisfaction', '89%'],
]

const timeline = [
  ['Week 1-2', 'Risk discovery and stakeholder alignment'],
  ['Week 3-4', 'Technical and business risk analysis'],
  ['Week 5-6', 'Risk quantification and prioritization'],
  ['Week 7-8', 'Mitigation planning and implementation'],
]

export default function EnterpriseAIDeploymentRiskAssessmentGuidePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-02-16T00:00:00.000Z"
        modifiedDate="2026-04-18T00:00:00.000Z"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_22%,#ffffff_50%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[30rem] h-[24rem] bg-[radial-gradient(circle_at_22%_22%,rgba(99,91,255,0.05),transparent_24%),radial-gradient(circle_at_76%_26%,rgba(14,165,233,0.05),transparent_22%),radial-gradient(circle_at_50%_82%,rgba(244,114,182,0.04),transparent_28%)]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6 lg:px-8">
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-16 pt-10 md:pb-24 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6 inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-indigo-500" />
                  2026 risk framework
                </div>

                <h1 className="page-title mb-6 text-5xl font-semibold tracking-[-0.05em] text-slate-950 md:text-7xl">
                  Enterprise AI deployment risk
                  <span className="block bg-gradient-to-r from-slate-950 via-indigo-700 to-sky-600 bg-clip-text text-transparent">
                    assessment guide.
                  </span>
                </h1>

                <p className="page-lead mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                  If the deployment is serious, the risk plan has to be serious too. This guide maps the main failure modes,
                  the assessment process, and the mitigations that actually keep an AI rollout from face-planting.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a href="#framework" className="btn-brand inline-flex items-center gap-2">
                    View risk framework
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#methodology" className="btn-secondary inline-flex items-center gap-2">
                    See methodology
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/enterprise-ai-budget-optimization-calculator" className="btn-secondary inline-flex items-center gap-2">
                    Budget calculator
                  </Link>
                  <Link href="/ai-risk-management-dashboard-enterprise-2026" className="btn-secondary inline-flex items-center gap-2">
                    Risk dashboard
                  </Link>
                  <Link href="/enterprise-ai-transformation-roadmap-2026" className="btn-secondary inline-flex items-center gap-2">
                    Transformation roadmap
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="page-card-glow absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
                <div className="relative page-card space-y-5 rounded-[2rem] p-5 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-500">Executive summary</div>
                      <div className="text-xl font-semibold text-slate-950">What this framework covers</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Risk first
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {overviewStats.map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                        <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</div>
                        <div className="mt-1 text-xl font-semibold text-slate-950">{value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-amber-200 bg-amber-50/70 px-4 py-4 text-sm leading-6 text-amber-900">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                      <p>
                        The goal is not to eliminate every risk. The goal is to know which risks are real, which ones are manageable,
                        and which ones are a bad idea disguised as optimism.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="framework" className="mb-16">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <ShieldAlert className="h-4 w-4 text-indigo-500" />
              Risk framework
            </div>
            <h2 className="page-title text-3xl md:text-4xl">12-factor enterprise AI risk assessment framework</h2>
            <p className="page-lead mt-3 text-lg">
              Four risk groups. Twelve factors. Enough structure to stop people from waving their hands and calling it governance.
            </p>
          </div>

          <div className="space-y-6">
            {riskGroups.map((group) => (
              <div key={group.title} className="page-card overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <div className={`bg-gradient-to-r ${group.tone} p-6 md:p-8`}>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">{group.title}</h3>
                </div>
                <div className="grid gap-6 p-6 md:grid-cols-3 md:p-8">
                  {group.items.map(([title, bullets]) => {
                    const bulletList = Array.isArray(bullets) ? bullets : [bullets]
                    return (
                      <div key={String(title)} className="page-card-soft p-5">
                        <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{String(title)}</div>
                        <ul className="space-y-2 text-sm leading-6 text-slate-600">
                          {bulletList.map((bullet) => (
                            <li key={bullet} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="methodology" className="mb-16">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <ClipboardCheck className="h-4 w-4 text-indigo-500" />
              Methodology
            </div>
            <h2 className="page-title text-3xl md:text-4xl">Enterprise risk assessment methodology</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {methodology.map((phase) => {
              const Icon = phase.icon
              return (
                <div key={phase.title} className="page-card p-6 md:p-7">
                  <div className="mb-4 inline-flex rounded-2xl bg-indigo-50 p-3">
                    <Icon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-slate-950">{phase.title}</h3>
                  <ul className="space-y-3 text-sm leading-6 text-slate-600">
                    {phase.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <Target className="h-4 w-4 text-indigo-500" />
              Mitigation strategy
            </div>
            <h2 className="page-title text-3xl md:text-4xl">Proven mitigation strategies</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {mitigation.map((item) => (
              <div key={item.title} className={`page-card p-6 md:p-7 ${item.color}`}>
                <h3 className="mb-4 text-xl font-semibold text-slate-950">{item.title}</h3>
                <div className="space-y-3">
                  {item.items.map((point) => (
                    <div key={point} className="rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-indigo-500" />
              Success metrics
            </div>
            <h2 className="page-title text-3xl md:text-4xl">Risk management success metrics</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {successMetrics.map(([label, value]) => (
              <div key={label} className="page-card p-5">
                <div className="text-3xl font-semibold text-slate-950">{value}</div>
                <div className="mt-2 text-sm font-medium text-slate-900">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-indigo-500" />
              Timeline
            </div>
            <h2 className="page-title text-3xl md:text-4xl">Risk assessment implementation timeline</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {timeline.map(([range, title]) => (
              <div key={range} className="page-card p-6 md:p-7">
                <div className="mb-3 inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">
                  {range}
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="page-card-glow rounded-[2rem] p-1.5">
            <div className="page-card-soft rounded-[1.6rem] p-6 md:p-8">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="page-card p-6">
                  <h3 className="mb-4 text-xl font-semibold text-slate-950">Immediate actions</h3>
                  <ul className="space-y-3 text-sm leading-6 text-slate-600">
                    {['Download the risk assessment checklist', 'Schedule stakeholder alignment', 'Inventory current AI risks', 'Establish the risk team'].map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="page-card p-6">
                  <h3 className="mb-4 text-xl font-semibold text-slate-950">Next 30 days</h3>
                  <ul className="space-y-3 text-sm leading-6 text-slate-600">
                    {['Complete risk identification', 'Quantify top 10 risks', 'Develop mitigation strategies', 'Implement monitoring'].map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <RelatedLinks
          title="Related enterprise AI tools"
          links={[
            {
              href: '/enterprise-ai-budget-optimization-calculator',
              title: 'Enterprise AI Budget Optimization Calculator',
              description: 'Plan spending alongside the risk framework.',
            },
            {
              href: '/ai-risk-management-dashboard-enterprise-2026',
              title: 'AI Risk Management Dashboard',
              description: 'Track and monitor AI risks after deployment.',
            },
            {
              href: '/enterprise-ai-transformation-roadmap-2026',
              title: 'Enterprise AI Transformation Roadmap',
              description: 'Strategic rollout planning across the organization.',
            },
          ]}
        />

        <section className="page-section pt-0">
          <div className="max-w-5xl mx-auto">
            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-8 md:p-10 text-center">
                <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 mb-5">
                  Final answer
                </div>
                <h2 className="page-title text-3xl md:text-5xl mb-5">Risk management is part of deployment, not a side quest.</h2>
                <p className="page-lead text-lg max-w-3xl mx-auto mb-8">
                  The teams that win are the ones that identify the ugly stuff early, quantify it honestly, and build the controls before the rollout goes live.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link href="/enterprise-ai-budget-optimization-calculator" className="btn-brand inline-flex items-center gap-2">
                    Check budget model
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/enterprise-ai-transformation-roadmap-2026" className="btn-secondary inline-flex items-center gap-2">
                    See roadmap
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
