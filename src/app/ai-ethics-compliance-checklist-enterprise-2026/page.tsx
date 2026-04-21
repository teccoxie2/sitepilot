import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Eye,
  FileText,
  Scale,
  Shield,
  Sparkles,
  Users,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Ethics & Compliance Checklist 2026 | SitePilot'
const pageDescription =
  'Comprehensive AI ethics and compliance checklist for enterprise deployments, covering GDPR, CCPA, the EU AI Act, transparency controls, and practical governance actions.'
const pageUrl = 'https://sitepilot.co/ai-ethics-compliance-checklist-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI ethics checklist',
    'AI compliance framework',
    'GDPR AI compliance',
    'ethical AI guidelines',
    'AI governance checklist',
    'EU AI Act checklist',
    'enterprise AI compliance',
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

const complianceAreas = [
  {
    category: 'Data protection and privacy',
    regulation: 'GDPR, CCPA, EU AI Act',
    items: [
      { task: 'Data minimization principles implemented', status: 'complete', priority: 'high' },
      { task: 'User consent mechanisms for AI processing', status: 'complete', priority: 'high' },
      { task: 'Right-to-explanation procedures', status: 'in-progress', priority: 'high' },
      { task: 'Data retention policies defined', status: 'complete', priority: 'medium' },
      { task: 'Cross-border data transfer safeguards', status: 'pending', priority: 'medium' },
    ],
  },
  {
    category: 'Algorithmic transparency',
    regulation: 'EU AI Act, FTC guidance',
    items: [
      { task: 'Model interpretability documentation', status: 'complete', priority: 'high' },
      { task: 'Decision-making process transparency', status: 'in-progress', priority: 'high' },
      { task: 'Bias detection and mitigation procedures', status: 'complete', priority: 'high' },
      { task: 'Automated decision-making disclosure', status: 'complete', priority: 'medium' },
      { task: 'Algorithm audit trail maintenance', status: 'in-progress', priority: 'medium' },
    ],
  },
  {
    category: 'Fairness and non-discrimination',
    regulation: 'ECOA, Fair Housing Act',
    items: [
      { task: 'Protected-class impact assessment', status: 'complete', priority: 'high' },
      { task: 'Bias testing across demographics', status: 'in-progress', priority: 'high' },
      { task: 'Fairness metrics monitoring', status: 'complete', priority: 'high' },
      { task: 'Adverse impact analysis', status: 'pending', priority: 'medium' },
      { task: 'Remediation procedures for bias', status: 'complete', priority: 'medium' },
    ],
  },
  {
    category: 'Human oversight',
    regulation: 'EU AI Act, internal policy controls',
    items: [
      { task: 'Human-in-the-loop processes', status: 'complete', priority: 'high' },
      { task: 'Override mechanisms implemented', status: 'complete', priority: 'high' },
      { task: 'Appeal procedures established', status: 'in-progress', priority: 'medium' },
      { task: 'Staff training on AI systems', status: 'complete', priority: 'medium' },
      { task: 'Escalation pathways defined', status: 'complete', priority: 'low' },
    ],
  },
] as const

const ethicsFramework = [
  {
    principle: 'Beneficence',
    description: 'Ensure the deployment creates measurable benefit while reducing operational and social harm.',
    checks: [
      'Impact assessment completed',
      'Risk mitigation strategies in place',
      'Stakeholder benefit analysis',
      'Long-term societal impact considered',
    ],
  },
  {
    principle: 'Non-maleficence',
    description: 'Prevent misuse, harmful automation, and predictable failure modes before scale.',
    checks: [
      'Harmful use case prevention',
      'Security safeguards implemented',
      'Misuse monitoring systems',
      'Incident response procedures',
    ],
  },
  {
    principle: 'Autonomy',
    description: 'Respect human agency, informed consent, and the right to challenge decisions.',
    checks: [
      'User control mechanisms',
      'Informed consent processes',
      'Opt-out capabilities',
      'Human final decision rights',
    ],
  },
  {
    principle: 'Justice',
    description: 'Distribute AI benefits fairly and monitor for uneven outcomes across groups.',
    checks: [
      'Equitable access policies',
      'Fair resource allocation',
      'Inclusive design practices',
      'Bias prevention measures',
    ],
  },
  {
    principle: 'Explicability',
    description: 'Make decisions understandable enough for legal review, operator trust, and user recourse.',
    checks: [
      'Decision explanation systems',
      'Transparency documentation',
      'User-friendly explanations',
      'Technical documentation complete',
    ],
  },
] as const

const riskMatrix = [
  {
    category: 'Algorithmic bias',
    probability: 'Medium',
    impact: 'High',
    level: 'High',
    mitigation: 'In progress',
    note: 'Bias testing is underway, but remediation playbooks still need wider coverage.',
  },
  {
    category: 'Data privacy breach',
    probability: 'Low',
    impact: 'High',
    level: 'Medium',
    mitigation: 'Mitigated',
    note: 'Core privacy controls exist, but cross-border transfer safeguards still need review.',
  },
  {
    category: 'Regulatory non-compliance',
    probability: 'Medium',
    impact: 'Medium',
    level: 'Medium',
    mitigation: 'In progress',
    note: 'Documentation and rights-handling are in place, but evidence collection is incomplete.',
  },
  {
    category: 'Lack of transparency',
    probability: 'High',
    impact: 'Low',
    level: 'Medium',
    mitigation: 'Mitigated',
    note: 'Disclosure standards exist, though interpretation quality varies by workflow.',
  },
] as const

const roadmapPhases = [
  {
    phase: 'Phase 1',
    timing: 'Weeks 1-4',
    title: 'Baseline controls',
    items: [
      'Run a data protection audit',
      'Launch privacy impact assessment',
      'Implement baseline transparency notices',
      'Start initial bias testing',
    ],
  },
  {
    phase: 'Phase 2',
    timing: 'Weeks 5-8',
    title: 'Accountability build-out',
    items: [
      'Document model accountability roles',
      'Stand up a fairness testing framework',
      'Define human oversight procedures',
      'Set technical documentation standards',
    ],
  },
  {
    phase: 'Phase 3',
    timing: 'Weeks 9-12',
    title: 'Monitoring and response',
    items: [
      'Deploy advanced monitoring',
      'Operationalize continuous compliance checks',
      'Tie controls into the risk register',
      'Train stakeholders on escalation paths',
    ],
  },
  {
    phase: 'Phase 4',
    timing: 'Ongoing',
    title: 'Audit rhythm',
    items: [
      'Schedule recurring audits',
      'Refresh policies with regulatory change',
      'Update best practices from incidents',
      'Track new enforcement patterns',
    ],
  },
] as const

const quickNav = [
  { href: '#overview', title: 'Overview', note: 'Current posture and next actions' },
  { href: '#checklist', title: 'Checklist', note: 'Operational compliance areas' },
  { href: '#ethics', title: 'Ethics pillars', note: 'Principles teams should enforce' },
  { href: '#risk', title: 'Risk matrix', note: 'Where failures usually surface' },
  { href: '#roadmap', title: 'Roadmap', note: '12-week implementation sequence' },
] as const

const summaryCards = [
  { value: '78%', label: 'Checklist items complete' },
  { value: '15%', label: 'Controls in progress' },
  { value: '7%', label: 'Open actions pending' },
  { value: '4', label: 'Core control domains' },
] as const

const priorityActions = [
  { task: 'Complete bias testing across demographics', status: 'Due in 3 days' },
  { task: 'Establish cross-border data transfer safeguards', status: 'Overdue' },
  { task: 'Finalize right-to-explanation procedures', status: 'In review' },
] as const

const relatedResources = [
  {
    href: '/ai-governance-framework-enterprise-2026',
    title: 'AI Governance Framework',
    description: 'Define ownership, decision rights, and escalation paths behind the checklist.',
    icon: Shield,
  },
  {
    href: '/ai-governance-compliance-framework-2026',
    title: 'AI Governance & Compliance Framework',
    description: 'Translate this checklist into a broader operating model and policy structure.',
    icon: Scale,
  },
  {
    href: '/ai-data-privacy-impact-assessment-2026',
    title: 'Privacy Impact Assessment',
    description: 'Use this before deployment when privacy exposure or transfer risk is uncertain.',
    icon: Eye,
  },
  {
    href: '/ai-tools-security-compliance-checklist-2026',
    title: 'AI Tools Security Checklist',
    description: 'Connect ethics requirements to tool evaluation and day-two controls.',
    icon: FileText,
  },
] as const

function getStatusMeta(status: string) {
  if (status === 'complete') {
    return {
      icon: CheckCircle2,
      iconClass: 'text-indigo-600',
      badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      label: 'Complete',
    }
  }

  if (status === 'in-progress') {
    return {
      icon: AlertTriangle,
      iconClass: 'text-amber-600',
      badgeClass: 'bg-amber-50 text-amber-700 border-amber-200',
      label: 'In progress',
    }
  }

  return {
    icon: FileText,
    iconClass: 'text-rose-600',
    badgeClass: 'bg-rose-50 text-rose-700 border-rose-200',
    label: 'Pending',
  }
}

function getPriorityClass(priority: string) {
  if (priority === 'high') {
    return 'bg-rose-50 text-rose-700 border-rose-200'
  }

  if (priority === 'medium') {
    return 'bg-amber-50 text-amber-700 border-amber-200'
  }

  return 'bg-indigo-50 text-indigo-700 border-indigo-200'
}

function getCompletionPercent(
  area: (typeof complianceAreas)[number]
) {
  const completeCount = area.items.filter((item) => item.status === 'complete').length
  return Math.round((completeCount / area.items.length) * 100)
}

export default function AIEthicsComplianceChecklist() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-08"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_54%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[34rem] h-[32rem] bg-[radial-gradient(circle_at_18%_24%,rgba(14,165,233,0.05),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(99,91,255,0.05),transparent_22%),radial-gradient(circle_at_50%_88%,rgba(244,114,182,0.04),transparent_28%)]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner mx-auto max-w-7xl px-4 pb-20 pt-24 md:pb-28 md:pt-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Enterprise ethics and compliance
              </div>

              <h1 className="page-title mb-6 text-5xl md:text-7xl">
                Enterprise AI ethics and compliance,
                <span className="brand-gradient-text block">in a checklist teams can actually operate.</span>
              </h1>

              <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                Use this page to review privacy, transparency, fairness, and human-oversight controls before an
                enterprise AI rollout scales faster than policy, documentation, and audit evidence can keep up.
              </p>

              <div className="mb-10 flex flex-wrap gap-3">
                <a href="#checklist" className="btn-brand">
                  Review checklist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#risk" className="btn-secondary">
                  Risk matrix
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {summaryCards.map((card) => (
                  <div key={card.label} className="page-card p-4 bg-white/90">
                    <div className="mb-1 text-2xl font-semibold tracking-[-0.04em] text-slate-950">{card.value}</div>
                    <div className="text-sm text-slate-500">{card.label}</div>
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
                      <div className="text-xl font-semibold text-slate-950">What to review first</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Controls first
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

                  <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50/80 p-5">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                      <AlertTriangle className="h-4 w-4" />
                      Priority actions
                    </div>
                    <div className="space-y-3">
                      {priorityActions.map((action) => (
                        <div
                          key={action.task}
                          className="flex items-center justify-between gap-3 rounded-2xl border border-white/70 bg-white/90 px-4 py-3"
                        >
                          <span className="text-sm font-medium text-slate-700">{action.task}</span>
                          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                            {action.status}
                          </span>
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
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="page-card-soft p-8">
              <div className="page-pill mb-4">
                <Shield className="h-4 w-4 text-[#635bff]" />
                Operating posture
              </div>
              <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
                The checklist is only useful if it drives evidence, ownership, and remediation.
              </h2>
              <p className="page-lead mb-6 text-base md:text-lg">
                Most enterprise AI programs fail compliance reviews because teams can describe the principles but cannot
                show the controls, logs, and escalation paths behind them. This checklist is designed to close that gap.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                  <Scale className="mb-3 h-6 w-6 text-indigo-600" />
                  <h3 className="mb-2 font-semibold text-slate-950">Regulation-ready</h3>
                  <p className="text-sm leading-6 text-slate-600">
                    Map controls across GDPR, CCPA, EU AI Act, and adjacent policy obligations.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                  <Eye className="mb-3 h-6 w-6 text-sky-600" />
                  <h3 className="mb-2 font-semibold text-slate-950">Explainable</h3>
                  <p className="text-sm leading-6 text-slate-600">
                    Keep decision transparency and rights-handling usable for legal, ops, and frontline teams.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                  <Users className="mb-3 h-6 w-6 text-indigo-600" />
                  <h3 className="mb-2 font-semibold text-slate-950">Human-governed</h3>
                  <p className="text-sm leading-6 text-slate-600">
                    Tie model decisions to accountable owners, override paths, and response routines.
                  </p>
                </div>
              </div>
            </div>

            <div className="page-card p-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="mb-1 text-sm text-slate-500">Executive snapshot</div>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">Current readiness signals</h2>
                </div>
                <Shield className="h-7 w-7 text-indigo-600" />
              </div>
              <div className="space-y-4">
                <div className="rounded-[1.5rem] border border-indigo-200 bg-indigo-50/80 p-4">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">Strongest areas</div>
                  <p className="mt-2 text-sm leading-6 text-indigo-900">
                    Privacy baselines, core bias controls, and human-override mechanisms are largely in place.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50/80 p-4">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">Needs attention</div>
                  <p className="mt-2 text-sm leading-6 text-amber-900">
                    Cross-border safeguards, explanation procedures, and evidence trails need tighter operational follow-through.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Program rule</div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    If a control cannot be evidenced in audit, treat it as incomplete even if the team believes it exists.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="checklist" className="page-section relative border-t border-slate-200/70 bg-white/70">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <CheckCircle2 className="h-4 w-4 text-[#635bff]" />
              Detailed checklist
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
              Review each control area the way an internal audit team would.
            </h2>
            <p className="page-lead text-base md:text-lg">
              Each section below preserves the original checklist content, but reorganizes it into the shared SitePilot
              comparison and framework system for easier review on desktop and mobile.
            </p>
          </div>

          <div className="space-y-6">
            {complianceAreas.map((area) => {
              const completionPercent = getCompletionPercent(area)

              return (
                <div key={area.category} className="page-card p-6 md:p-8">
                  <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {area.regulation}
                      </div>
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{area.category}</h3>
                    </div>
                    <div className="min-w-[13rem] rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
                      <div className="mb-2 flex items-center justify-between text-sm text-slate-500">
                        <span>Completion</span>
                        <span className="font-semibold text-slate-950">{completionPercent}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-200">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-violet-500"
                          style={{ width: `${completionPercent}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {area.items.map((item) => {
                      const statusMeta = getStatusMeta(item.status)
                      const StatusIcon = statusMeta.icon

                      return (
                        <div
                          key={item.task}
                          className="flex flex-col gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50/80 px-4 py-4 md:flex-row md:items-center md:justify-between"
                        >
                          <div className="flex items-start gap-3">
                            <StatusIcon className={`mt-0.5 h-5 w-5 ${statusMeta.iconClass}`} />
                            <div>
                              <div className="font-medium text-slate-800">{item.task}</div>
                              <div className="mt-1 text-sm text-slate-500">{area.regulation}</div>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <span
                              className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${getPriorityClass(item.priority)}`}
                            >
                              {item.priority} priority
                            </span>
                            <span
                              className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${statusMeta.badgeClass}`}
                            >
                              {statusMeta.label}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="ethics" className="page-section relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <Scale className="h-4 w-4 text-[#635bff]" />
              Ethics pillars
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
              Enterprise compliance is stronger when ethical principles are operational, not abstract.
            </h2>
            <p className="page-lead text-base md:text-lg">
              These principle cards preserve the original framework and make it easier to connect legal obligations to
              product, data, and policy actions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {ethicsFramework.map((principle) => (
              <div key={principle.principle} className="page-card-soft p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-3">
                    <Scale className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{principle.principle}</h3>
                    <p className="text-sm text-slate-500">Responsible-AI control domain</p>
                  </div>
                </div>
                <p className="mb-5 text-sm leading-6 text-slate-600">{principle.description}</p>
                <div className="space-y-3">
                  {principle.checks.map((check) => (
                    <div key={check} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-600" />
                      <span className="text-sm text-slate-700">{check}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="risk" className="page-section relative border-t border-slate-200/70 bg-[linear-gradient(180deg,rgba(248,250,255,0.75),rgba(255,255,255,0.92))]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <AlertTriangle className="h-4 w-4 text-[#635bff]" />
              Risk matrix
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
              These are the failure patterns most teams need to surface before launch.
            </h2>
            <p className="page-lead text-base md:text-lg">
              The matrix below keeps the original risk categories and statuses, but presents them in the shared light
              framework used across the AI governance cluster.
            </p>
          </div>

          <div className="page-card overflow-hidden">
            <div className="hidden grid-cols-[1.2fr_repeat(4,minmax(0,0.7fr))_1.5fr] gap-4 border-b border-slate-200 bg-slate-50/80 px-6 py-4 text-sm font-semibold text-slate-600 md:grid">
              <div>Risk category</div>
              <div>Probability</div>
              <div>Impact</div>
              <div>Level</div>
              <div>Mitigation</div>
              <div>Why it matters</div>
            </div>
            <div className="divide-y divide-slate-200">
              {riskMatrix.map((risk) => (
                <div key={risk.category} className="grid gap-4 px-6 py-5 md:grid-cols-[1.2fr_repeat(4,minmax(0,0.7fr))_1.5fr] md:items-start">
                  <div>
                    <div className="text-sm text-slate-500 md:hidden">Risk category</div>
                    <div className="font-semibold text-slate-950">{risk.category}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 md:hidden">Probability</div>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700">
                      {risk.probability}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 md:hidden">Impact</div>
                    <span className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-rose-700">
                      {risk.impact}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 md:hidden">Level</div>
                    <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">
                      {risk.level}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 md:hidden">Mitigation</div>
                    <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-700">
                      {risk.mitigation}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 md:hidden">Why it matters</div>
                    <p className="text-sm leading-6 text-slate-600">{risk.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="page-section relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <FileText className="h-4 w-4 text-[#635bff]" />
              Implementation roadmap
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
              A simple sequence for turning policy intent into an auditable operating model.
            </h2>
            <p className="page-lead text-base md:text-lg">
              This roadmap preserves the original four-phase rollout and reframes it into the current editorial system.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {roadmapPhases.map((phase) => (
              <div key={phase.phase} className="page-card p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">{phase.phase}</div>
                    <div className="mt-1 text-sm text-slate-500">{phase.timing}</div>
                  </div>
                  <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    Sequence
                  </div>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-slate-950">{phase.title}</h3>
                <div className="space-y-3">
                  {phase.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-600" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section relative border-t border-slate-200/70 bg-white/80">
        <div className="mx-auto max-w-7xl px-4">
          <div className="page-card-glow p-6 md:p-8">
            <div className="mb-8 max-w-3xl">
              <div className="page-pill mb-4">
                <ArrowRight className="h-4 w-4 text-[#635bff]" />
                Related resources
              </div>
              <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
                Keep the governance and privacy paths connected.
              </h2>
              <p className="page-lead text-base md:text-lg">
                These internal links stay intact so the ethics checklist still feeds into the wider governance,
                privacy, and security cluster.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {relatedResources.map((resource) => {
                const Icon = resource.icon

                return (
                  <Link
                    key={resource.href}
                    href={resource.href}
                    className="page-card flex h-full items-start gap-4 p-5 transition hover:-translate-y-0.5 hover:border-indigo-200"
                  >
                    <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-3">
                      <Icon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold text-slate-950">{resource.title}</h3>
                      <p className="text-sm leading-6 text-slate-600">{resource.description}</p>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 text-slate-400" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section relative pt-0">
        <div className="mx-auto max-w-7xl px-4 pb-16">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#1e293b_0%,#312e81_48%,#0f172a_100%)] px-6 py-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] md:px-10">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100">
                Compliance review support
              </div>
              <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                Use the checklist before you scale, not after legal finds the gap.
              </h2>
              <p className="mb-8 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
                Teams rolling out new AI workflows can pair this checklist with governance, privacy, and security
                resources across SitePilot to tighten launch readiness and keep remediation work scoped.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/ai-governance-compliance-framework-2026" className="btn-brand">
                  Governance framework
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/ai-data-privacy-impact-assessment-2026" className="btn-secondary">
                  Privacy assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
