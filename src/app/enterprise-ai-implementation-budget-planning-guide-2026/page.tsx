import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Coins,
  Compass,
  FileSearch,
  Layers,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Implementation Budget Planning Guide 2026 | SitePilot'
const pageDescription =
  'Complete financial framework for AI project budgeting: from $50K pilots to $5M+ transformations. Based on 247 enterprise AI implementations across Fortune 500 companies.'
const pageUrl = 'https://sitepilot.co/enterprise-ai-implementation-budget-planning-guide-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'enterprise AI budget planning',
    'AI implementation budget',
    'AI project financial model',
    'enterprise AI ROI',
    'AI transformation budgeting',
    'AI budget framework',
  ],
  alternates: { canonical: pageUrl },
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
}

const heroStats = [
  { value: '$127K', label: 'median AI project budget' },
  { value: '3.2x', label: 'average budget overrun' },
  { value: '18mo', label: 'ROI breakeven point' },
  { value: '247', label: 'enterprise implementations analyzed' },
]

const budgetLayers = [
  {
    title: 'Infrastructure & platform costs',
    icon: Target,
    tone: 'border-sky-100 bg-sky-50/80',
    pct: '25-35%',
    groups: [
      {
        title: 'Cloud computing resources',
        bullets: ['GPU compute: $8,000-45,000/month', 'Training infrastructure: $15,000-120,000', 'Storage & data pipeline: $2,000-12,000/month', 'API costs: $500-8,000/month'],
      },
      {
        title: 'Platform & tools',
        bullets: ['MLOps platform: $10,000-50,000/year', 'Model management: $5,000-25,000/year', 'Security tools: $8,000-35,000/year', 'Monitoring & observability: $6,000-20,000/year'],
      },
    ],
  },
  {
    title: 'Human capital & expertise',
    icon: Users,
    tone: 'border-indigo-100 bg-indigo-50/80',
    pct: '40-50%',
    groups: [
      {
        title: 'Internal team costs',
        bullets: ['AI/ML engineers: $180K-320K/year each', 'Data scientists: $160K-280K/year each', 'DevOps engineers: $140K-240K/year each', 'Project managers: $120K-200K/year each'],
      },
      {
        title: 'External consulting',
        bullets: ['Strategy consulting: $250-500/hour', 'Implementation services: $180-350/hour', 'Training programs: $50,000-200,000 total', 'Change management: $75,000-300,000'],
      },
    ],
  },
  {
    title: 'Data & integration',
    icon: Layers,
    tone: 'border-violet-100 bg-violet-50/80',
    pct: '15-25%',
    groups: [
      {
        title: 'Data preparation',
        bullets: ['Data cleaning: $25,000-150,000', 'Annotation services: $15,000-80,000', 'Data lake setup: $30,000-200,000', 'ETL development: $40,000-180,000'],
      },
      {
        title: 'System integration',
        bullets: ['API development: $35,000-120,000', 'Legacy system updates: $50,000-250,000', 'Middleware solutions: $20,000-100,000', 'Testing & validation: $15,000-75,000'],
      },
    ],
  },
  {
    title: 'Compliance & security',
    icon: Shield,
    tone: 'border-amber-100 bg-amber-50/80',
    pct: '8-15%',
    groups: [
      {
        title: 'Regulatory compliance',
        bullets: ['Legal review: $15,000-60,000', 'Compliance audits: $25,000-100,000', 'Documentation: $10,000-40,000', 'Certification: $8,000-35,000'],
      },
      {
        title: 'Security implementation',
        bullets: ['Security assessment: $20,000-80,000', 'Encryption solutions: $15,000-50,000', 'Access controls: $12,000-45,000', 'Penetration testing: $18,000-65,000'],
      },
    ],
  },
  {
    title: 'Risk & contingency',
    icon: BarChart3,
    tone: 'border-rose-100 bg-rose-50/80',
    pct: '15-20%',
    groups: [
      {
        title: 'Project risk buffer',
        bullets: ['Technical complexity: 10-15% buffer', 'Timeline extensions: 5-10% buffer', 'Scope creep: 8-12% buffer', 'Market changes: 5-8% buffer'],
      },
      {
        title: 'Business continuity',
        bullets: ['Backup solutions: $10,000-50,000', 'Disaster recovery: $15,000-75,000', 'Insurance coverage: $5,000-25,000/year', 'Legal protection: $8,000-40,000'],
      },
    ],
  },
]

const projectTemplates = [
  {
    title: 'AI pilot project',
    range: '$50K - $200K',
    duration: '3-6 months',
    tone: 'border-sky-100 bg-sky-50/80',
    rows: [
      ['Infrastructure', '$15K-60K'],
      ['Team (2-3 people)', '$25K-90K'],
      ['Data & integration', '$5K-25K'],
      ['Compliance', '$3K-15K'],
      ['Contingency (20%)', '$2K-10K'],
    ],
  },
  {
    title: 'Department solution',
    range: '$200K - $800K',
    duration: '6-12 months',
    tone: 'border-indigo-100 bg-indigo-50/80',
    rows: [
      ['Infrastructure', '$60K-240K'],
      ['Team (4-6 people)', '$90K-320K'],
      ['Data & integration', '$30K-120K'],
      ['Compliance', '$15K-45K'],
      ['Contingency (18%)', '$5K-75K'],
    ],
  },
  {
    title: 'Enterprise transformation',
    range: '$1M - $5M+',
    duration: '12-24 months',
    tone: 'border-violet-100 bg-violet-50/80',
    rows: [
      ['Infrastructure', '$250K-1.2M'],
      ['Team (8-15 people)', '$400K-1.8M'],
      ['Data & integration', '$120K-800K'],
      ['Compliance', '$80K-250K'],
      ['Contingency (15%)', '$150K-900K'],
    ],
  },
]

const planningTips = [
  'Start with business outcomes, not tools.',
  'Budget for change management or pay for it later in adoption failure.',
  'Treat security and compliance as first-class line items.',
  'Use contingency to absorb reality, not to hide sloppy planning.',
  'Review quarterly; budgets drift faster than decks admit.',
]

const relatedLinks = [
  { href: '/enterprise-ai-budget-optimization-calculator', title: 'Enterprise AI Budget Optimization Calculator', note: 'Model planning and optimization in the same flow.' },
  { href: '/enterprise-ai-roi-calculation-model-2026', title: 'Enterprise AI ROI Calculation Model', note: 'Connect spend to return with the same model.' },
  { href: '/enterprise-ai-implementation-best-practices-2026', title: 'Enterprise AI Implementation Best Practices', note: 'Pair the implementation framework with the budget framework.' },
  { href: '/ai-tools-cost-benefit-analysis-2026', title: 'AI Tools Cost-Benefit Analysis', note: 'Use this for more tool-level financial analysis.' },
  { href: '/ai-tools-integration-roadmap-2026', title: 'AI Tools Integration Roadmap', note: 'See how to sequence the integration work.' },
  { href: '/ai-transformation-roi-calculation-framework-2026', title: 'AI Transformation ROI Calculation Framework', note: 'Review the broader transformation-level ROI model.' },
]

export default function EnterpriseAIImplementationBudgetPlanningGuidePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-18"
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
                <div className="page-pill mb-6 inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Budget planning guide 2026
                </div>
                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  Enterprise AI budget planning，
                  <span className="brand-gradient-text block">Model the money before you sell the vision.</span>
                </h1>
                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  Complete financial framework for AI project budgeting: from $50K pilots to $5M+ transformations. This page keeps the original budget layers, project templates, execution advice, and internal links while aligning the layout to the current light Stripe-ish UI.
                </p>
                <div className="mb-10 flex flex-wrap gap-3">
                  <a href="#framework" className="btn-brand inline-flex items-center gap-2">
                    Review the budget framework
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#templates" className="btn-secondary inline-flex items-center gap-2">
                    Review the templates
                  </a>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="page-card bg-white/90 p-4">
                      <div className="text-2xl font-semibold text-slate-950 md:text-3xl">{stat.value}</div>
                      <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
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
                        <div className="mb-1 text-sm text-slate-500">Budget rules</div>
                        <div className="text-xl font-semibold text-slate-950">Five things to fund</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        CFO-friendly
                      </div>
                    </div>
                    <div className="space-y-3">
                      {planningTips.map((tip) => (
                        <div key={tip} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                            <p className="text-sm leading-6 text-slate-600">{tip}</p>
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

        <section className="mb-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Planning discipline', 'The model forces budget ownership instead of vague enthusiasm.'],
            ['ROI realism', 'Numbers should be tethered to operating costs, not fantasy.'],
            ['Allocation clarity', 'Every dollar needs a visible lane and a visible owner.'],
            ['Executive reporting', 'Use the model to explain decisions, not just decorate slides.'],
          ].map(([title, body]) => (
            <div key={title} className="page-card p-5">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Coins className="h-4 w-4 text-indigo-500" />
                {title}
              </div>
              <p className="text-sm leading-6 text-slate-600">{body}</p>
            </div>
          ))}
        </section>

        <section id="framework" className="mb-16">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <Compass className="h-4 w-4 text-[#635bff]" />
              Budget framework
            </div>
            <h2 className="page-title text-3xl md:text-4xl">5-layer enterprise AI budget framework</h2>
            <p className="page-lead mt-3 text-lg">
              A practical split of real costs: infrastructure, people, integration, compliance, and contingency.
            </p>
          </div>

          <div className="space-y-5">
            {budgetLayers.map((layer) => {
              const Icon = layer.icon
              return (
                <div key={layer.title} className={`page-card p-6 md:p-8 ${layer.tone}`}>
                  <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-white/80 p-3 shadow-sm ring-1 ring-white/80">
                        <Icon className="h-5 w-5 text-slate-800" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-950">{layer.title}</h3>
                        <p className="text-sm text-slate-500">Budget share: {layer.pct}</p>
                      </div>
                    </div>
                    <div className="rounded-full border border-current/15 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">
                      Layered budget control
                    </div>
                  </div>
                  <div className="grid gap-5 lg:grid-cols-2">
                    {layer.groups.map((group) => (
                      <div key={group.title} className="rounded-3xl border border-white/70 bg-white/70 p-5">
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{group.title}</h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                          {group.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section id="templates" className="mb-16">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-[#635bff]" />
              Project templates
            </div>
            <h2 className="page-title text-3xl md:text-4xl">Budget templates by project scale</h2>
            <p className="page-lead mt-3 text-lg">
              Pilot, department, and enterprise plans should not be priced like the same thing. Shocking, I know.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projectTemplates.map((project) => (
              <div key={project.title} className={`page-card p-6 ${project.tone}`}>
                <h3 className="text-xl font-semibold text-slate-950">{project.title}</h3>
                <div className="mt-3 text-2xl font-semibold text-slate-950">{project.range}</div>
                <div className="text-sm text-slate-500">{project.duration}</div>
                <div className="mt-5 space-y-3 text-sm text-slate-700">
                  {project.rows.map(([label, amount]) => (
                    <div key={label} className="flex items-center justify-between gap-4 border-b border-white/70 pb-2 last:border-0 last:pb-0">
                      <span>{label}</span>
                      <span className="font-semibold text-slate-950">{amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="page-card-glow rounded-[2rem] p-5 md:p-6">
            <div className="page-card flex flex-col gap-6 p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="page-pill mb-3 inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  CTA
                </div>
                <h2 className="page-title text-3xl md:text-4xl">Ready to plan the budget without lying to yourself?</h2>
                <p className="page-lead mt-3 text-lg">
                  Use the calculator, implementation guide, and ROI framework together before anyone signs a check.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/enterprise-ai-budget-optimization-calculator" className="btn-brand inline-flex items-center gap-2">
                  Open calculator
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/enterprise-ai-roi-calculation-model-2026" className="btn-secondary inline-flex items-center gap-2">
                  View ROI model
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <Layers className="h-4 w-4 text-[#635bff]" />
              Related resources
            </div>
            <h2 className="page-title text-3xl md:text-4xl">Internal links kept intact</h2>
            <p className="page-lead mt-3 text-lg">
              Same cluster, same intent, cleaner UI.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="page-card group p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
                <div className="mb-3 text-lg font-semibold text-slate-950 group-hover:text-[#635bff]">{link.title}</div>
                <p className="text-sm leading-6 text-slate-600">{link.note}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#635bff]">
                  Open resource
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
