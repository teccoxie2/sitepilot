import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Cog,
  FileCheck,
  Shield,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI Implementation Checklist for Enterprise 2026 | SitePilot'
const pageDescription =
  'Comprehensive enterprise AI implementation checklist with 90+ action items across strategy, technology, people, governance, rollout, and optimization.'
const pageUrl = 'https://sitepilot.co/ai-implementation-checklist-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI implementation checklist',
    'enterprise AI strategy',
    'AI deployment guide',
    'digital transformation checklist',
    'AI governance framework',
    'enterprise AI planning',
  ],
  authors: [{ name: 'SitePilot Team' }],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'article',
    siteName: 'SitePilot',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const quickNav = [
  { href: '#overview', title: 'Overview', note: 'What this checklist is designed to control' },
  { href: '#phases', title: 'Implementation phases', note: 'Five stages from readiness to scaling' },
  { href: '#factors', title: 'Critical factors', note: 'Where enterprise rollouts usually fail' },
  { href: '#metrics', title: 'Success metrics', note: 'Targets to use in governance reviews' },
  { href: '#first-30-days', title: 'First 30 days', note: 'What to do before the program drifts' },
] as const

const summaryCards = [
  { value: '26', label: 'Implementation weeks', note: 'Structured rollout through initial enterprise deployment.' },
  { value: '90+', label: 'Checklist items', note: 'Across strategy, technology, people, and governance.' },
  { value: '5', label: 'Phases', note: 'Readiness, planning, pilot, rollout, and optimization.' },
  { value: '87%', label: 'Success rate', note: 'For organizations that keep governance and adoption aligned.' },
] as const

const phases = [
  {
    phase: 'Pre-implementation',
    timing: 'Weeks 1-4',
    icon: FileCheck,
    accent: 'text-sky-600',
    columns: [
      {
        category: 'Strategic foundation',
        tasks: [
          'Define AI vision and business objectives',
          'Conduct AI readiness assessment',
          'Identify use cases and prioritize by ROI',
          'Perform competitive analysis of AI capabilities',
          'Set success metrics and KPIs',
          'Establish budget and resource allocation',
          'Create executive sponsorship structure',
        ],
      },
      {
        category: 'Technical assessment',
        tasks: [
          'Audit current technology infrastructure',
          'Assess data quality and accessibility',
          'Evaluate security and compliance requirements',
          'Review integration capabilities',
          'Identify skill gaps in technical teams',
          'Assess cloud readiness and capacity',
          'Document current workflow and processes',
        ],
      },
    ],
  },
  {
    phase: 'Planning and design',
    timing: 'Weeks 5-8',
    icon: Cog,
    accent: 'text-indigo-600',
    columns: [
      {
        category: 'Solution architecture',
        tasks: [
          'Design AI solution architecture',
          'Select AI tools and platforms',
          'Plan data pipeline and storage',
          'Design integration architecture',
          'Create security and privacy framework',
          'Plan scalability and performance requirements',
          'Design monitoring and alerting systems',
        ],
      },
      {
        category: 'Organizational design',
        tasks: [
          'Define roles and responsibilities',
          'Create AI governance structure',
          'Design change management plan',
          'Plan training and skill development',
          'Establish communication protocols',
          'Create risk management framework',
          'Design user feedback mechanisms',
        ],
      },
    ],
  },
  {
    phase: 'Pilot implementation',
    timing: 'Weeks 9-16',
    icon: Users,
    accent: 'text-indigo-600',
    columns: [
      {
        category: 'Technical deployment',
        tasks: [
          'Set up development and testing environments',
          'Implement data pipelines and storage',
          'Deploy AI tools and platforms',
          'Configure integrations and APIs',
          'Implement security controls',
          'Set up monitoring and logging',
          'Conduct system testing and validation',
        ],
      },
      {
        category: 'User onboarding',
        tasks: [
          'Select and train pilot users',
          'Conduct initial training sessions',
          'Provide access to AI tools',
          'Establish support channels',
          'Create user documentation',
          'Implement feedback collection',
          'Monitor user adoption and usage',
        ],
      },
    ],
  },
  {
    phase: 'Full deployment',
    timing: 'Weeks 17-26',
    icon: BarChart3,
    accent: 'text-amber-600',
    columns: [
      {
        category: 'Scale rollout',
        tasks: [
          'Execute phased rollout plan',
          'Scale infrastructure and resources',
          'Expand user training programs',
          'Implement enterprise-wide integrations',
          'Deploy advanced monitoring systems',
          'Establish support and maintenance',
          'Conduct security and compliance audits',
        ],
      },
      {
        category: 'Performance optimization',
        tasks: [
          'Monitor system performance and usage',
          'Collect and analyze user feedback',
          'Optimize AI model performance',
          'Fine-tune integrations and workflows',
          'Implement continuous improvement processes',
          'Measure and report on success metrics',
          'Plan for future enhancements',
        ],
      },
    ],
  },
  {
    phase: 'Optimization and scaling',
    timing: 'Ongoing',
    icon: Shield,
    accent: 'text-violet-600',
    columns: [
      {
        category: 'Continuous improvement',
        tasks: [
          'Run regular performance reviews and optimization cycles',
          'Continue user training and support',
          'Monitor and update AI models',
          'Expand into new use cases and departments',
          'Conduct recurring security and compliance reviews',
          'Evaluate vendors and technology stack decisions',
          'Refresh strategic planning for future AI initiatives',
        ],
      },
      {
        category: 'Advanced capabilities',
        tasks: [
          'Implement advanced analytics and reporting',
          'Develop custom AI solutions and models',
          'Integrate emerging AI technologies selectively',
          'Establish an AI center of excellence',
          'Create internal AI innovation programs',
          'Build AI partnerships and ecosystem relationships',
          'Evolve enterprise-wide AI strategy as maturity rises',
        ],
      },
    ],
  },
] as const

const criticalFactors = [
  {
    title: 'Executive sponsorship',
    description: 'Strong C-level support, clear decision ownership, and budget protection.',
    importance: 'Critical',
    tone: 'border-rose-200 bg-rose-50 text-rose-900',
  },
  {
    title: 'Data quality',
    description: 'Clean, accessible, well-governed data that teams can trust in production.',
    importance: 'Critical',
    tone: 'border-rose-200 bg-rose-50 text-rose-900',
  },
  {
    title: 'Change management',
    description: 'Training, communications, and adoption planning strong enough to survive rollout friction.',
    importance: 'High',
    tone: 'border-amber-200 bg-amber-50 text-amber-900',
  },
  {
    title: 'Security and compliance',
    description: 'Controls that scale with live deployments rather than trailing them by a quarter.',
    importance: 'High',
    tone: 'border-amber-200 bg-amber-50 text-amber-900',
  },
  {
    title: 'Performance monitoring',
    description: 'Operational telemetry, user feedback, and alerting tied to business KPIs.',
    importance: 'High',
    tone: 'border-amber-200 bg-amber-50 text-amber-900',
  },
  {
    title: 'Technical infrastructure',
    description: 'Scalable integration, storage, and workflow orchestration that can survive enterprise volume.',
    importance: 'Medium',
    tone: 'border-sky-200 bg-sky-50 text-sky-900',
  },
] as const

const successMetrics = [
  {
    metric: 'User adoption rate',
    target: '> 80% within 6 months',
    description: 'Percentage of intended users actively using AI tools in target workflows.',
  },
  {
    metric: 'Productivity improvement',
    target: '> 25% in target processes',
    description: 'Measured improvement in output speed, throughput, or process completion quality.',
  },
  {
    metric: 'ROI achievement',
    target: '> 200% within 18 months',
    description: 'Return on investment from AI implementation, not just pilot-level savings.',
  },
  {
    metric: 'User satisfaction',
    target: '> 8.0/10 rating',
    description: 'How strongly users want to keep the system in their workflow after rollout.',
  },
  {
    metric: 'Error rate',
    target: '< 5% in AI outputs',
    description: 'Quality and accuracy threshold for production-grade AI-supported work.',
  },
  {
    metric: 'Time to value',
    target: '< 90 days for pilots',
    description: 'Time from deployment to a measurable business result decision-makers can defend.',
  },
] as const

const quickStart = [
  {
    step: '1',
    title: 'Assess and plan',
    description: 'Complete a readiness review, define the business case, and choose which use case gets executive attention first.',
  },
  {
    step: '2',
    title: 'Build the foundation',
    description: 'Lock governance, data quality, security, and technical requirements before rollout pressure starts to distort decisions.',
  },
  {
    step: '3',
    title: 'Launch the pilot',
    description: 'Start with a high-impact, lower-risk workflow that can prove adoption, control, and ROI quickly.',
  },
] as const

const relatedResources = [
  {
    href: '/ai-governance-framework-enterprise-2026',
    title: 'AI Governance Framework',
    description: 'Use this to define ownership, approvals, and escalation paths behind the checklist.',
  },
  {
    href: '/ai-compliance-automation-assessment-tool',
    title: 'Compliance Assessment Tool',
    description: 'Validate privacy and regulatory exposure before the implementation expands.',
  },
  {
    href: '/ai-implementation-success-framework-2026',
    title: 'AI Implementation Success Framework',
    description: 'Translate checklist execution into a broader enterprise transformation program.',
  },
  {
    href: '/contact',
    title: 'Implementation Consultation',
    description: 'Get help sequencing governance, rollout, and measurement for enterprise teams.',
  },
] as const

export default function AIImplementationChecklistPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-16"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_54%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[34rem] h-[36rem] bg-[radial-gradient(circle_at_18%_16%,rgba(14,165,233,0.05),transparent_24%),radial-gradient(circle_at_78%_20%,rgba(99,91,255,0.05),transparent_22%),radial-gradient(circle_at_55%_84%,rgba(251,191,36,0.05),transparent_28%)]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner mx-auto max-w-7xl px-4 pb-20 pt-24 md:pb-28 md:pt-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Enterprise AI implementation checklist
              </div>

              <h1 className="page-title mb-6 text-5xl md:text-7xl">
                AI implementation fails less often
                <span className="brand-gradient-text block">when the rollout is treated like an operating system, not a demo.</span>
              </h1>

              <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                This checklist keeps enterprise AI programs grounded in sequencing: strategy first, architecture second,
                pilot discipline third, and only then scale. It preserves the original 90+ action items, but organizes them in the current shared system.
              </p>

              <div className="mb-10 flex flex-wrap gap-3">
                <a href="#phases" className="btn-brand">
                  Review the checklist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/ai-governance-framework-enterprise-2026" className="btn-secondary">
                  Governance framework
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {summaryCards.map((card) => (
                  <div key={card.label} className="page-card p-4 bg-white/90">
                    <div className="mb-1 text-2xl font-semibold tracking-[-0.04em] text-slate-950">{card.value}</div>
                    <div className="text-sm font-semibold text-slate-900">{card.label}</div>
                    <div className="mt-1 text-sm text-slate-500">{card.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6">
                <div className="page-card space-y-6 bg-white/95 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="mb-1 text-sm text-slate-500">Checklist map</div>
                      <div className="text-xl font-semibold text-slate-950">How to use this page</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      5-phase rollout
                    </div>
                  </div>

                  <div className="space-y-3">
                    {quickNav.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 transition hover:border-indigo-200 hover:bg-indigo-50/50"
                      >
                        <div>
                          <div className="font-semibold text-slate-950">{item.title}</div>
                          <div className="text-sm text-slate-500">{item.note}</div>
                        </div>
                        <ArrowRight className="mt-1 h-4 w-4 text-slate-400" />
                      </a>
                    ))}
                  </div>

                  <div className="rounded-[1.5rem] border border-indigo-200 bg-indigo-50/80 p-5">
                    <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">Checklist rule</div>
                    <p className="text-sm leading-6 text-indigo-900">
                      Do not move into scaled deployment until governance, security, training, and baseline monitoring are already operating in the pilot.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                    <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">What this page preserves</div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {['5 implementation phases', '90+ action items', 'Critical success factors', 'Success metrics and first-30-day plan'].map((item) => (
                        <div key={item} className="rounded-2xl border border-white/80 bg-white px-4 py-3 text-sm text-slate-700">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="page-section relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="page-card-soft p-8">
              <div className="page-pill mb-4">
                <Target className="h-4 w-4 text-[#635bff]" />
                Implementation posture
              </div>
              <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
                The checklist is designed to prevent enterprise AI programs from scaling faster than their controls.
              </h2>
              <p className="page-lead mb-6 text-base md:text-lg">
                Most failed rollouts do not collapse because the model is bad. They collapse because ownership, data readiness, user adoption,
                governance, and performance expectations were never sequenced into a real operating plan.
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.5rem] border border-white/80 bg-white p-5">
                  <Clock3 className="mb-3 h-6 w-6 text-indigo-600" />
                  <h3 className="mb-2 font-semibold text-slate-950">Phase discipline</h3>
                  <p className="text-sm leading-6 text-slate-600">Know what must be true before moving to the next stage.</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/80 bg-white p-5">
                  <Shield className="mb-3 h-6 w-6 text-indigo-600" />
                  <h3 className="mb-2 font-semibold text-slate-950">Control coverage</h3>
                  <p className="text-sm leading-6 text-slate-600">Keep security, compliance, and governance inside the rollout, not behind it.</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/80 bg-white p-5">
                  <Users className="mb-3 h-6 w-6 text-sky-600" />
                  <h3 className="mb-2 font-semibold text-slate-950">Adoption readiness</h3>
                  <p className="text-sm leading-6 text-slate-600">User onboarding is part of implementation, not a cleanup step after launch.</p>
                </div>
              </div>
            </div>

            <div className="page-card p-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="mb-1 text-sm text-slate-500">Program summary</div>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">What good looks like</h2>
                </div>
                <CheckCircle2 className="h-7 w-7 text-indigo-600" />
              </div>
              <div className="space-y-4">
                <div className="rounded-[1.5rem] border border-indigo-200 bg-indigo-50/80 p-4">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">Target outcome</div>
                  <p className="mt-2 text-sm leading-6 text-indigo-900">
                    A rollout where executive sponsorship, governance, technical readiness, and adoption all move in sync.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50/80 p-4">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">Common failure mode</div>
                  <p className="mt-2 text-sm leading-6 text-amber-900">
                    Teams skip readiness and pilot discipline, then discover security, data, and user-support gaps during scale-up.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Decision rule</div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    If the pilot cannot show adoption, evidence, and measurable value, do not treat it as a scale-ready template.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="phases" className="page-section relative border-t border-slate-200/70 bg-white/70">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <FileCheck className="h-4 w-4 text-[#635bff]" />
              Implementation phases
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Keep the rollout staged so strategy, architecture, pilot execution, and optimization stay connected.
            </h2>
            <p className="page-lead text-base md:text-lg">
              This preserves the original five-phase checklist, but converts it into the current SitePilot checklist layout with phase cards and category-level task blocks.
            </p>
          </div>

          <div className="space-y-6">
            {phases.map((phase) => {
              const Icon = phase.icon
              return (
                <div key={phase.phase} className="page-card p-8">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                      <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
                        <Icon className={`h-4 w-4 ${phase.accent}`} />
                        {phase.timing}
                      </div>
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{phase.phase}</h3>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {phase.columns.map((column) => (
                      <div key={column.category} className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5">
                        <h4 className="mb-4 font-semibold text-slate-950">{column.category}</h4>
                        <ul className="space-y-3">
                          {column.tasks.map((task) => (
                            <li key={task} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600" />
                              <span>{task}</span>
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
        </div>
      </section>

      <section id="factors" className="page-section relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <AlertTriangle className="h-4 w-4 text-[#635bff]" />
              Critical success factors
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Enterprise AI rollouts rarely fail for one reason. They fail because multiple weak foundations compound.
            </h2>
            <p className="page-lead text-base md:text-lg">
              These factors are preserved from the original page and reordered into a single scan view for implementation leads and steering committees.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {criticalFactors.map((factor) => (
              <div key={factor.title} className={`rounded-[1.75rem] border p-6 ${factor.tone}`}>
                <div className="mb-3 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold">{factor.title}</h3>
                  <span className="rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-semibold">
                    {factor.importance}
                  </span>
                </div>
                <p className="text-sm leading-6">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="metrics" className="page-section relative border-t border-slate-200/70 bg-white/70">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <BarChart3 className="h-4 w-4 text-[#635bff]" />
              Success metrics
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Use explicit targets so implementation reviews stay tied to outcomes, not just completion percentages.
            </h2>
            <p className="page-lead text-base md:text-lg">
              These are the original page&apos;s KPI targets, presented as a shared metric stack for rollout reviews, steering committees, and success reporting.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {successMetrics.map((metric) => (
              <div key={metric.metric} className="page-card p-6">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-slate-950">{metric.metric}</h3>
                  <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    {metric.target}
                  </span>
                </div>
                <p className="text-sm leading-6 text-slate-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="first-30-days" className="page-section relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
            <div className="page-card-soft p-8">
              <div className="page-pill mb-4">
                <Clock3 className="h-4 w-4 text-[#635bff]" />
                Quick start
              </div>
              <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
                The first 30 days should create clarity, not a backlog of unresolved assumptions.
              </h2>
              <p className="page-lead mb-6 text-base md:text-lg">
                The original page included a first-30-day starter path. It stays here as a practical sequence for teams that need to move from planning into controlled execution.
              </p>
              <div className="space-y-4">
                {quickStart.map((item) => (
                  <div key={item.step} className="rounded-[1.5rem] border border-white/80 bg-white p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
                        {item.step}
                      </div>
                      <h3 className="font-semibold text-slate-950">{item.title}</h3>
                    </div>
                    <p className="text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="page-card p-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="mb-1 text-sm text-slate-500">Related resources</div>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">Keep the implementation cluster connected</h2>
                </div>
                <ArrowRight className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="space-y-4">
                {relatedResources.map((resource) => (
                  <Link
                    key={resource.href}
                    href={resource.href}
                    className="block rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5 transition hover:border-indigo-200 hover:bg-indigo-50/50"
                  >
                    <h3 className="font-semibold text-slate-950">{resource.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{resource.description}</p>
                  </Link>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Download intent</div>
                <h3 className="mb-3 text-xl font-semibold text-slate-950">Need the checklist as an execution packet?</h3>
                <p className="mb-5 text-sm leading-6 text-slate-600">
                  The original page had a download CTA. The migration keeps that intent, but routes it into consultation and related implementation resources instead of leaving it as an isolated button.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-brand">
                    Request implementation support
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link href="/ai-implementation-success-framework-2026" className="btn-secondary">
                    See success framework
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
