import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileText,
  Scale,
  Shield,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI Governance and Compliance Framework for Enterprises 2026 | SitePilot'
const pageDescription =
  'Complete enterprise AI governance framework covering EU AI Act, NIST AI RMF, global standards, operating models, risk controls, and responsible AI implementation.'
const pageUrl = 'https://sitepilot.co/ai-governance-compliance-framework-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI governance framework',
    'AI compliance',
    'EU AI Act compliance',
    'NIST AI RMF',
    'AI ethics framework',
    'enterprise AI governance',
    'AI regulatory compliance',
    'responsible AI framework',
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
  { href: '#landscape', title: 'Regulatory landscape', note: 'EU AI Act, NIST, and standards' },
  { href: '#framework', title: 'Framework pillars', note: 'Governance, compliance, risk, ethics' },
  { href: '#roadmap', title: '12-week roadmap', note: 'Foundation through optimization' },
  { href: '#resources', title: 'Operational assets', note: 'Templates, policies, monitoring' },
  { href: '#value', title: 'Business value', note: 'Cost avoidance and ROI framing' },
] as const

const summaryCards = [
  { value: '4', label: 'Core governance pillars' },
  { value: '12', label: 'Weeks to first operating model' },
  { value: '€35M', label: 'Maximum EU AI Act fine cited on the page' },
  { value: '$5M-$50M+', label: 'Typical annual governance value range' },
] as const

const regulations = [
  {
    title: 'EU AI Act',
    accent: 'text-blue-600',
    metric: '€35M',
    note: 'Maximum penalty or 7% of global revenue for the most serious non-compliance scenarios.',
    items: [
      'High-risk AI system requirements',
      'Prohibited AI practices',
      'Foundation model obligations',
      'CE marking and conformity expectations',
    ],
  },
  {
    title: 'NIST AI RMF',
    accent: 'text-indigo-600',
    metric: '4 functions',
    note: 'Govern, Map, Measure, and Manage create the operating rhythm for AI risk management.',
    items: [
      'Risk-based governance model',
      'Continuous monitoring expectations',
      'Stakeholder engagement',
      'Impact assessment discipline',
    ],
  },
  {
    title: 'Global standards',
    accent: 'text-violet-600',
    metric: '15+',
    note: 'National and cross-border AI rules continue to expand across sectors and regions.',
    items: [
      'ISO/IEC 23053:2022',
      'UK AI policy guidance',
      'Singapore model governance references',
      'Additional national AI laws in motion',
    ],
  },
] as const

const frameworkPillars = [
  {
    title: 'Governance',
    description: 'Leadership, ownership, decision rights, and escalation structure.',
    points: ['AI charter and strategy', 'Steering committee model', 'Decision authority matrix'],
    icon: Shield,
  },
  {
    title: 'Compliance',
    description: 'Regulatory interpretation, evidence collection, and audit readiness.',
    points: ['Control mapping', 'Documentation standards', 'Multi-jurisdiction alignment'],
    icon: FileText,
  },
  {
    title: 'Risk management',
    description: 'Continuous identification, scoring, and mitigation of AI-specific failure modes.',
    points: ['Technical risk tracking', 'Operational response', 'Business risk tolerance'],
    icon: AlertTriangle,
  },
  {
    title: 'Ethics',
    description: 'Responsible AI principles translated into reviews, training, and incident handling.',
    points: ['Human oversight', 'Fairness controls', 'Transparency expectations'],
    icon: Scale,
  },
] as const

const governanceBlocks = [
  {
    title: 'Executive leadership',
    items: [
      'Chief AI Officer for strategic oversight',
      'AI steering committee for cross-functional governance',
      'AI ethics board for responsible-AI decisions',
      'Data protection officer for privacy alignment',
    ],
  },
  {
    title: 'Operational teams',
    items: [
      'AI risk management team for daily oversight',
      'Model validation team for testing and assurance',
      'AI compliance team for regulatory monitoring',
      'AI operations team for deployment and monitoring',
    ],
  },
  {
    title: 'Governance artifacts',
    items: [
      'AI charter and strategy',
      'AI risk appetite statement',
      'AI governance policy',
      'Decision authority matrix',
    ],
  },
] as const

const complianceBlocks = [
  {
    title: 'EU AI Act implementation',
    items: [
      'Risk classification from unacceptable to minimal risk',
      'Risk management system for high-risk use cases',
      'Data governance measures and record keeping',
      'Transparency, human oversight, robustness, and cybersecurity controls',
    ],
  },
  {
    title: 'NIST AI RMF implementation',
    items: [
      'Govern: strategy, roles, and risk appetite',
      'Map: context, impacts, and stakeholder analysis',
      'Measure: performance, risk, and effectiveness assessment',
      'Manage: response planning, incidents, and continuous improvement',
    ],
  },
  {
    title: 'Additional standards',
    items: [
      'ISO/IEC 23053 use-case guidance',
      'ISO/IEC 23094 risk management references',
      'ISO/IEC 25059 quality expectations',
      'ISO/IEC 27001 security control alignment',
    ],
  },
] as const

const riskCategories = [
  {
    title: 'Technical risks',
    items: ['Model bias and fairness', 'Performance degradation', 'Adversarial attacks', 'Data quality issues', 'Explainability gaps'],
  },
  {
    title: 'Operational risks',
    items: [
      'Availability and reliability failures',
      'Integration breakdowns',
      'Scalability limitations',
      'Maintenance and update drift',
      'Human-AI interaction errors',
    ],
  },
  {
    title: 'Business risks',
    items: [
      'ROI and value-realization failure',
      'Strategic misalignment',
      'Competitive disadvantage',
      'Customer trust erosion',
      'Brand reputation damage',
    ],
  },
] as const

const riskMatrix = [
  ['High', 'Medium', 'High', 'Critical'],
  ['Medium', 'Low', 'Medium', 'High'],
  ['Low', 'Low', 'Low', 'Medium'],
] as const

const responseStrategies = [
  { title: 'Accept', note: 'Low-impact risks within stated tolerance.', className: 'border-indigo-200 bg-indigo-50 text-indigo-800' },
  { title: 'Mitigate', note: 'Add controls to reduce likelihood or impact.', className: 'border-amber-200 bg-amber-50 text-amber-800' },
  { title: 'Transfer', note: 'Use contracts, insurance, or third-party coverage.', className: 'border-orange-200 bg-orange-50 text-orange-800' },
  { title: 'Avoid', note: 'Redesign or stop activities that stay intolerable.', className: 'border-rose-200 bg-rose-50 text-rose-800' },
] as const

const ethicsBlocks = [
  {
    title: 'Human-centric AI',
    items: ['Human agency and oversight', 'Meaningful human control', 'Human-in-the-loop design', 'User empowerment and choice'],
  },
  {
    title: 'Fairness and non-discrimination',
    items: ['Algorithmic bias prevention', 'Inclusive design practices', 'Equal treatment assurance', 'Diverse representation in data'],
  },
  {
    title: 'Transparency and explainability',
    items: ['Clear decision explanations', 'Model interpretability', 'Open communication about AI use', 'Accessible documentation'],
  },
  {
    title: 'Privacy and data protection',
    items: ['Data minimization', 'Consent management', 'Privacy by design', 'Secure data processing'],
  },
] as const

const ethicsImplementation = [
  {
    title: 'Ethics impact assessment',
    items: ['Stakeholder impact analysis', 'Ethical risk identification', 'Mitigation strategy design', 'Ongoing monitoring plan'],
  },
  {
    title: 'Review process',
    items: [
      'Initial ethics screening',
      'Detailed impact assessment',
      'Ethics board review',
      'Stakeholder consultation',
      'Mitigation implementation',
      'Approval and documentation',
      'Ongoing monitoring',
    ],
  },
  {
    title: 'Training and awareness',
    items: ['AI ethics training program', 'Role-specific guidance', 'Regular awareness sessions', 'Decision-support tools'],
  },
  {
    title: 'Incident response',
    items: ['Ethics violation reporting', 'Investigation procedures', 'Remediation actions', 'Lessons learned integration'],
  },
] as const

const roadmapPhases = [
  {
    title: 'Weeks 1-3: Foundation',
    items: [
      'Establish the AI governance team',
      'Define AI strategy and charter',
      'Conduct regulatory assessment',
      'Develop governance policies',
      'Create the decision authority matrix',
    ],
  },
  {
    title: 'Weeks 4-6: Assessment',
    items: [
      'Inventory and map AI systems',
      'Execute risk assessments',
      'Run compliance gap analysis',
      'Complete ethics impact assessments',
      'Engage key stakeholders',
    ],
  },
  {
    title: 'Weeks 7-9: Implementation',
    items: [
      'Deploy priority risk controls',
      'Implement monitoring systems',
      'Establish compliance processes',
      'Launch the ethics review board',
      'Begin training programs',
    ],
  },
  {
    title: 'Weeks 10-12: Optimization',
    items: [
      'Test incident response procedures',
      'Validate compliance readiness',
      'Optimize governance workflows',
      'Prepare for audit review',
      'Set continuous-improvement cadence',
    ],
  },
] as const

const resources = [
  {
    title: 'Assessment templates',
    items: [
      'AI risk assessment questionnaire',
      'EU AI Act compliance checklist',
      'Ethics impact assessment template',
      'NIST AI RMF implementation guide',
      'Data governance assessment matrix',
    ],
  },
  {
    title: 'Policy documents',
    items: [
      'AI governance policy template',
      'AI ethics code of conduct',
      'AI risk management procedures',
      'AI incident response plan',
      'Training and awareness program',
    ],
  },
  {
    title: 'Monitoring tools',
    items: [
      'AI model performance dashboard',
      'Bias detection and monitoring',
      'Compliance status tracker',
      'Risk heat-map visualization',
      'Ethics review workflow system',
    ],
  },
] as const

const valueCards = [
  {
    title: 'Regulatory fines avoided',
    value: 'Up to €35M',
    note: 'Potential EU AI Act exposure for severe non-compliance.',
  },
  {
    title: 'Reputation risk mitigation',
    value: '$2M-$10M',
    note: 'Typical brand-damage range cited for major AI incidents.',
  },
  {
    title: 'Failed AI project costs',
    value: '$500K-$5M',
    note: 'Governance gaps often push projects into expensive rework or shutdown.',
  },
  {
    title: 'Faster deployment',
    value: '30-50%',
    note: 'Clear governance often reduces time-to-launch by standardizing approvals.',
  },
  {
    title: 'Improved AI ROI',
    value: '25-40%',
    note: 'Better alignment and risk control typically improve realized value.',
  },
  {
    title: 'Annual business value',
    value: '$5M-$50M+',
    note: 'Typical total value range for mature enterprise governance programs.',
  },
] as const

const relatedResources = [
  {
    href: '/ai-ethics-compliance-checklist-enterprise-2026',
    title: 'AI Ethics & Compliance Checklist',
    description: 'Use a control-by-control checklist after the governance model is defined.',
  },
  {
    href: '/ai-governance-framework-enterprise-2026',
    title: 'Enterprise AI Governance Framework',
    description: 'Go deeper on policy structure, templates, and Chinese-language implementation guidance.',
  },
  {
    href: '/ai-governance-monitoring-dashboard-2026',
    title: 'AI Governance Monitoring Dashboard',
    description: 'Operationalize the framework with reporting and monitoring workflows.',
  },
  {
    href: '/ai-compliance-readiness-assessment-2026',
    title: 'AI Compliance Readiness Assessment',
    description: 'Assess how close the current program is to audit and regulatory readiness.',
  },
] as const

export default function AIGovernanceComplianceFramework2026Page() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-10"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner mx-auto max-w-7xl px-4 pb-20 pt-24 md:pb-28 md:pt-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Enterprise AI governance
              </div>

              <h1 className="page-title mb-6 text-5xl md:text-7xl">
                AI governance and compliance,
                <span className="brand-gradient-text block">for enterprises that need a real operating model.</span>
              </h1>

              <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                This framework translates regulatory pressure, ethical expectations, and risk-management work into a
                structure teams can run across leadership, policy, monitoring, and incident response.
              </p>

              <div className="mb-10 flex flex-wrap gap-3">
                <a href="#framework" className="btn-brand">
                  View framework
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#roadmap" className="btn-secondary">
                  12-week roadmap
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
                      <div className="mb-1 text-sm text-slate-500">Framework map</div>
                      <div className="text-xl font-semibold text-slate-950">Where to start</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Board to ops
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
                      Regulatory reality
                    </div>
                    <p className="text-sm leading-6 text-amber-900">
                      The page keeps the original framing that non-compliance can be material to both revenue and
                      program credibility, especially once governance work lags behind deployment scale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="landscape" className="page-section relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <Shield className="h-4 w-4 text-[#635bff]" />
              Regulatory landscape
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
              The framework starts with the regulatory systems most enterprise teams are already mapping.
            </h2>
            <p className="page-lead text-base md:text-lg">
              This section preserves the original regulatory overview while aligning it to the shared comparison-card
              system used across the migrated SitePilot AI cluster.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {regulations.map((regulation) => (
              <div key={regulation.title} className="page-card-soft p-6">
                <div className={`mb-2 text-sm font-semibold uppercase tracking-[0.18em] ${regulation.accent}`}>
                  {regulation.title}
                </div>
                <div className="mb-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{regulation.metric}</div>
                <p className="mb-5 text-sm leading-6 text-slate-600">{regulation.note}</p>
                <div className="space-y-3">
                  {regulation.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
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

      <section id="framework" className="page-section relative border-t border-slate-200/70 bg-white/85">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <Scale className="h-4 w-4 text-[#635bff]" />
              Framework pillars
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
              Four pillars organize the model: governance, compliance, risk, and ethics.
            </h2>
            <p className="page-lead text-base md:text-lg">
              These cards preserve the original framework overview but bring it into the same light editorial system as
              the other completed enterprise AI pages.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {frameworkPillars.map((pillar) => {
              const Icon = pillar.icon

              return (
                <div key={pillar.title} className="page-card p-6">
                  <div className="mb-4 rounded-2xl border border-indigo-200 bg-indigo-50 p-3 w-fit">
                    <Icon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-950">{pillar.title}</h3>
                  <p className="mb-5 text-sm leading-6 text-slate-600">{pillar.description}</p>
                  <div className="space-y-3">
                    {pillar.points.map((point) => (
                      <div key={point} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-700">
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="page-card-soft p-8">
              <div className="mb-5 flex items-center gap-3">
                <Users className="h-6 w-6 text-indigo-600" />
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">Governance structure and compliance model</h3>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {governanceBlocks.map((block) => (
                  <div key={block.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                    <h4 className="mb-4 font-semibold text-slate-950">{block.title}</h4>
                    <div className="space-y-3">
                      {block.items.map((item) => (
                        <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-600" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="page-card p-8">
              <div className="mb-5 flex items-center gap-3">
                <FileText className="h-6 w-6 text-indigo-600" />
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">Multi-jurisdiction implementation</h3>
              </div>
              <div className="space-y-4">
                {complianceBlocks.map((block) => (
                  <div key={block.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5">
                    <h4 className="mb-3 font-semibold text-slate-950">{block.title}</h4>
                    <div className="space-y-3">
                      {block.items.map((item) => (
                        <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-600" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="page-card p-8">
              <div className="mb-5 flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-indigo-600" />
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">Comprehensive AI risk management</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {riskCategories.map((category) => (
                  <div key={category.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5">
                    <h3 className="mb-4 font-semibold text-slate-950">{category.title}</h3>
                    <div className="space-y-3">
                      {category.items.map((item) => (
                        <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-600" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="page-card-soft p-8">
              <div className="mb-5 flex items-center gap-3">
                <BarChart3 className="h-6 w-6 text-indigo-600" />
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">Risk matrix and responses</h2>
              </div>
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
                <div className="grid grid-cols-4 border-b border-slate-200 bg-slate-50/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  <div>Likelihood</div>
                  <div className="text-center">Low impact</div>
                  <div className="text-center">Medium impact</div>
                  <div className="text-center">High impact</div>
                </div>
                {riskMatrix.map((row, index) => (
                  <div key={row[0]} className="grid grid-cols-4 border-b border-slate-200 last:border-b-0 px-4 py-4 text-sm text-slate-700">
                    <div className="font-semibold text-slate-950">{row[0]}</div>
                    {row.slice(1).map((cell) => (
                      <div key={`${row[0]}-${cell}-${index}`} className="text-center">
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700">
                          {cell}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {responseStrategies.map((strategy) => (
                  <div key={strategy.title} className={`rounded-[1.5rem] border p-4 ${strategy.className}`}>
                    <div className="mb-1 font-semibold">{strategy.title}</div>
                    <div className="text-sm leading-6">{strategy.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section relative border-t border-slate-200/70 bg-[linear-gradient(180deg,rgba(248,250,255,0.75),rgba(255,255,255,0.92))]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <Scale className="h-4 w-4 text-[#635bff]" />
              Responsible AI layer
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
              Ethics still needs formal implementation, not just principles on a slide.
            </h2>
            <p className="page-lead text-base md:text-lg">
              The page continues to cover the original ethics framework and turns it into the same card-and-checklist
              system used across the rest of the migrated governance cluster.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
            <div className="grid gap-4 md:grid-cols-2">
              {ethicsBlocks.map((block) => (
                <div key={block.title} className="page-card p-6">
                  <h3 className="mb-4 text-xl font-semibold text-slate-950">{block.title}</h3>
                  <div className="space-y-3">
                    {block.items.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-violet-600" />
                        <span className="text-sm text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="page-card-soft p-8">
              <h3 className="mb-5 text-2xl font-semibold tracking-[-0.04em] text-slate-950">Implementation framework</h3>
              <div className="space-y-4">
                {ethicsImplementation.map((block) => (
                  <div key={block.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                    <h4 className="mb-4 font-semibold text-slate-950">{block.title}</h4>
                    <div className="space-y-3">
                      {block.items.map((item) => (
                        <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-600" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="page-section relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <Target className="h-4 w-4 text-[#635bff]" />
              12-week roadmap
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
              The first operating version of governance can be built in four phases.
            </h2>
            <p className="page-lead text-base md:text-lg">
              This preserves the original 12-week sequence and adapts it to the shared roadmap card format.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {roadmapPhases.map((phase) => (
              <div key={phase.title} className="page-card p-6">
                <div className="mb-4 inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-700">
                  Roadmap
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

      <section id="resources" className="page-section relative border-t border-slate-200/70 bg-white/85">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <FileText className="h-4 w-4 text-[#635bff]" />
              Tools and resources
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
              Governance work only sticks when teams have templates, policies, and monitoring assets.
            </h2>
            <p className="page-lead text-base md:text-lg">
              The original resource lists remain intact here, organized into the current SitePilot resource-card system.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <div key={resource.title} className="page-card-soft p-6">
                <h3 className="mb-4 text-xl font-semibold text-slate-950">{resource.title}</h3>
                <div className="space-y-3">
                  {resource.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
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

      <section id="value" className="page-section relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <BarChart3 className="h-4 w-4 text-[#635bff]" />
              ROI and business value
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
              Governance should be justified as both risk reduction and value creation.
            </h2>
            <p className="page-lead text-base md:text-lg">
              These figures preserve the original cost-avoidance and value-creation framing in a cleaner comparison layout.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {valueCards.map((card) => (
              <div key={card.title} className="page-card p-6">
                <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{card.title}</div>
                <div className="mb-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{card.value}</div>
                <p className="text-sm leading-6 text-slate-600">{card.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section relative border-t border-slate-200/70 bg-white/85">
        <div className="mx-auto max-w-7xl px-4">
          <div className="page-card-glow p-6 md:p-8">
            <div className="mb-8 max-w-3xl">
              <div className="page-pill mb-4">
                <ArrowRight className="h-4 w-4 text-[#635bff]" />
                Related resources
              </div>
              <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
                Keep the governance cluster connected.
              </h2>
              <p className="page-lead text-base md:text-lg">
                Internal navigation stays intact so this page still routes readers into adjacent governance,
                compliance, and monitoring resources.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {relatedResources.map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="page-card flex h-full items-start gap-4 p-5 transition hover:-translate-y-0.5 hover:border-indigo-200"
                >
                  <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-3">
                    <Shield className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold text-slate-950">{resource.title}</h3>
                    <p className="text-sm leading-6 text-slate-600">{resource.description}</p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 text-slate-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section relative pt-0">
        <div className="mx-auto max-w-7xl px-4 pb-16">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#1e293b_0%,#312e81_48%,#0f172a_100%)] px-6 py-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] md:px-10">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100">
                Advisory support
              </div>
              <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                Governance is easier to scale when approvals, evidence, and risk decisions are designed together.
              </h2>
              <p className="mb-8 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
                Teams can use this framework alongside SitePilot governance and assessment pages to scope maturity work,
                close policy gaps, and prepare for enterprise rollout or audit review.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-brand">
                  Schedule governance consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/ai-compliance-readiness-assessment-2026" className="btn-secondary">
                  Check readiness
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
