import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  DollarSign,
  FileText,
  HelpCircle,
  Shield,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Governance Framework 2026 | Complete Implementation Guide | SitePilot'
const pageDescription =
  'An enterprise AI governance framework based on Fortune 500 practices, covering policy templates, compliance checklists, risk controls, and a 12-month rollout plan for responsible AI deployment.'
const pageUrl = 'https://sitepilot.co/ai-governance-framework-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI governance framework',
    'enterprise AI policy',
    'AI compliance',
    'AI ethics',
    'AI risk management',
    'enterprise AI governance',
    'AI regulatory framework',
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
  { href: '#overview', title: 'Overview', note: 'Why enterprises need AI governance now' },
  { href: '#framework', title: 'Framework modules', note: 'Policy, risk, compliance, and operating model' },
  { href: '#roadmap', title: '12-month roadmap', note: 'From discovery to scaled governance' },
  { href: '#practices', title: 'Best practices', note: 'Organization, technology, and culture' },
  { href: '#faq', title: 'FAQ', note: 'Committees, cost, timelines, and KPIs' },
] as const

const summaryCards = [
  { value: '15+', label: 'Deployable policy templates' },
  { value: '12', label: 'Month rollout plan' },
  { value: '95%', label: 'Target compliance success rate' },
  { value: '$2.5M', label: 'Average annual risk mitigation value' },
] as const

const coreGoals = [
  {
    title: 'Fairness & bias reduction',
    description: 'Use testing, reviews, and escalation paths to reduce bias and inconsistent decisions.',
    icon: Target,
    accent: 'text-indigo-600',
  },
  {
    title: 'Privacy & data protection',
    description: 'Bring data minimization, usage boundaries, retention rules, and access controls into everyday operations.',
    icon: Shield,
    accent: 'text-sky-600',
  },
  {
    title: 'Transparency & explainability',
    description: 'Give operations, legal, auditors, and end users enough context to understand AI decisions.',
    icon: FileText,
    accent: 'text-indigo-600',
  },
  {
    title: 'Risk & reputation control',
    description: 'Avoid regulatory penalties, trust failures, and runaway exposure in high-value AI programs.',
    icon: AlertTriangle,
    accent: 'text-amber-600',
  },
] as const

const riskDrivers = [
  {
    title: 'Legal risk',
    tone: 'border-rose-200 bg-rose-50 text-rose-900',
    note: 'The EU AI Act, U.S. state-level regulation, and sector rules are all raising the cost of enterprise AI mistakes.',
  },
  {
    title: 'Reputational risk',
    tone: 'border-amber-200 bg-amber-50 text-amber-900',
    note: 'Bias, bad automation, and opaque decisions directly erode customer trust and brand value.',
  },
  {
    title: 'Operational risk',
    tone: 'border-sky-200 bg-sky-50 text-sky-900',
    note: 'Ungoverned AI projects fail faster, drift harder, and create more rework and maintenance cost.',
  },
  {
    title: 'Business upside',
    tone: 'border-indigo-200 bg-indigo-50 text-indigo-900',
    note: 'Teams with mature governance usually clear approvals faster, deliver more reliably, and explain ROI more clearly.',
  },
] as const

const frameworkComponents = [
  {
    title: 'AI ethics & principles',
    description: 'Translate company values into AI usage principles, escalation rules, and review standards.',
    icon: Shield,
    columns: [
      {
        heading: 'Ethics guide',
        items: [
          'Fairness and bias prevention protocol',
          'Transparency and explainability requirements',
          'Privacy safeguards and data minimization',
          'Human oversight and intervention rules',
        ],
      },
      {
        heading: 'Policy templates',
        items: [
          'AI ethics charter template',
          'Algorithm accountability policy',
          'AI decision-making guidelines',
          'Bias detection and mitigation workflow',
        ],
      },
    ],
  },
  {
    title: 'Risk management framework',
    description: 'Embed identification, monitoring, response, and rollback into the AI lifecycle for high-risk use cases.',
    icon: AlertTriangle,
    columns: [
      {
        heading: 'Risk assessment',
        items: [
          'High / medium / low risk scoring method',
          'Impact assessment and business tolerance',
          'Continuous monitoring and anomaly alerts',
          'AI incident response plan',
        ],
      },
      {
        heading: 'Mitigation strategy',
        items: [
          'Technical safeguards and validation controls',
          'Human review and approval thresholds',
          'Testing, release, and rollback gates',
          'Vendor and third-party accountability controls',
        ],
      },
    ],
  },
  {
    title: 'Compliance & legal controls',
    description: 'Build evidence trails, documentation standards, and audit readiness across jurisdictions.',
    icon: FileText,
    columns: [
      {
        heading: 'Regulatory alignment',
        items: [
          'EU AI Act compliance checklist',
          'AI-specific GDPR requirements',
          'Alignment to U.S. AI policy and executive orders',
          'Industry mapping for finance, healthcare, and other regulated sectors',
        ],
      },
      {
        heading: 'Documentation requirements',
        items: [
          'AI system description template',
          'Data lineage and source traceability',
          'Audit trail retention workflow',
          'Compliance reporting and exception templates',
        ],
      },
    ],
  },
] as const

const operatingModel = [
  {
    title: 'Policy foundation',
    detail: 'A policy base centered on ethics, data use, accountability, and risk tolerance.',
    icon: FileText,
  },
  {
    title: 'Compliance tools',
    detail: 'Checklists, audit templates, monitoring rules, and cross-jurisdiction control mapping.',
    icon: Shield,
  },
  {
    title: 'Implementation guide',
    detail: 'Quarterly milestones, accountable owners, training actions, and KPIs.',
    icon: Clock,
  },
] as const

const governancePractices = [
  {
    title: 'Organizational best practices',
    items: [
      'Appoint an AI ethics officer or equivalent accountable lead',
      'Stand up a cross-functional AI governance committee with a fixed meeting cadence',
      'Assign AI governance liaisons in major business units',
      'Define a clear authority matrix and escalation workflow',
      'Create three-layer review across technical, business, and ethics stakeholders',
    ],
  },
  {
    title: 'Technical implementation best practices',
    items: [
      'Deploy automated bias detection and fairness monitoring',
      'Build dashboards for model performance and ethical indicators',
      'Operationalize explainable AI techniques and recordkeeping',
      'Standardize version control, change approvals, and rollback procedures',
      'Set up real-time alerts and exception handling',
    ],
  },
  {
    title: 'Culture-building best practices',
    items: [
      'Train all employees on AI ethics and acceptable use',
      'Create reporting and feedback channels for governance concerns',
      'Include AI governance metrics in performance reviews',
      'Review incidents regularly and document lessons learned',
      'Keep sharing both governance wins and governance failures',
    ],
  },
] as const

const trendGroups = [
  {
    title: 'Regulation intensifies',
    items: [
      'The EU AI Act is moving into stronger enforcement, with clearer requirements for high-risk systems',
      'U.S. federal and state AI rules continue to get more specific',
      'China’s AI algorithm filing and content-governance requirements keep evolving',
      'Sector-specific standards in finance, healthcare, education, and other fields continue to expand',
    ],
  },
  {
    title: 'Technology shifts',
    items: [
      'Explainable AI is moving from a nice-to-have into baseline infrastructure',
      'Federated learning and privacy-enhancing technologies are spreading faster',
      'Automated compliance monitoring is becoming easier to operationalize',
      'Integrated AI governance platforms are starting to replace scattered scripts and manual checks',
    ],
  },
] as const

const roadmapPhases = [
  {
    phase: 'Q1',
    timing: 'Months 1-3',
    title: 'Foundation and discovery',
    items: [
      'Stand up the AI governance committee',
      'Map current AI assets and risk exposure',
      'Complete key stakeholder interviews and training',
      'Adapt the base framework into company-specific draft policies',
    ],
  },
  {
    phase: 'Q2',
    timing: 'Months 4-6',
    title: 'Policy launch and monitoring kickoff',
    items: [
      'Publish the ethics charter and accountability policy',
      'Launch risk-management and approval workflows',
      'Deploy foundational monitoring and compliance checks',
      'Start the employee training and certification program',
    ],
  },
  {
    phase: 'Q3',
    timing: 'Months 7-9',
    title: 'System integration and process hardening',
    items: [
      'Embed governance requirements into development and procurement workflows',
      'Launch automated monitoring and exception alerts',
      'Refresh vendor management and third-party control clauses',
      'Establish KPI reporting for operating leadership',
    ],
  },
  {
    phase: 'Q4',
    timing: 'Months 10-12',
    title: 'Optimization, review, and scale',
    items: [
      'Complete the governance maturity audit and gap analysis',
      'Optimize workflows and shorten review cycles',
      'Publish the annual outcomes report',
      'Establish continuous-improvement and review loops',
    ],
  },
] as const

const impactGroups = [
  {
    title: 'Risk mitigation value',
    icon: Shield,
    accent: 'text-indigo-600',
    rows: [
      ['Regulatory compliance cost', '-60%'],
      ['AI-related incidents', '-85%'],
      ['Audit preparation time', '-70%'],
      ['Legal exposure', '-90%'],
    ],
  },
  {
    title: 'Operational efficiency gains',
    icon: BarChart3,
    accent: 'text-indigo-600',
    rows: [
      ['AI project approval speed', '+40%'],
      ['Stakeholder confidence', '+65%'],
      ['Deployment success rate', '+50%'],
      ['AI investment ROI', '+35%'],
    ],
  },
] as const

const economicImpact = [
  { value: '$2.5M', label: 'Average risk mitigation value' },
  { value: '$1.8M', label: 'Annual efficiency gains' },
  { value: '320%', label: 'Average 3-year ROI' },
] as const

const faqs = [
  {
    question: 'What core elements should an enterprise AI governance framework include?',
    answer:
      'A complete framework usually includes the governance operating model, ethics principles, risk-management workflows, technical standards, data governance policy, compliance oversight, and a continuous-improvement loop. The point is not to produce a giant document; it is to tie every element to accountable owners, evidence, and decision paths.',
  },
  {
    question: 'Who should sit on an AI governance committee?',
    answer:
      'Typical members include executive sponsors, business leaders, heads of AI engineering and data science, legal and compliance, risk management, human resources, and external advisers when needed. Most teams keep it to roughly seven to nine people so the committee covers key functions without killing decision speed.',
  },
  {
    question: 'How should teams evaluate ethical risk in AI systems?',
    answer:
      'A practical method is to score fairness, transparency, privacy, human oversight, and social impact, then combine that with business impact and affected populations to decide whether the system needs a higher level of review. Low-scoring areas should always map to corrective actions instead of a one-time assessment.',
  },
  {
    question: 'How long does an AI governance framework usually take to implement?',
    answer:
      'Most enterprises need three to six months for the foundation, six to twelve months to embed governance into major programs, and twelve to twenty-four months to reach a mature operating state. Large organizations usually move slower because cross-functional coordination and vendor governance become the main bottlenecks.',
  },
  {
    question: 'How much budget does AI governance usually require?',
    answer:
      'Costs usually come from staffing, monitoring tools, consulting and audit support, and day-to-day operations. Mid-market enterprises often spend about $500,000 to $1.5 million per year, while large enterprises may reach $2 million to $5 million. In practice, the losses avoided and the gains in delivery success often outweigh the spend.',
  },
  {
    question: 'How do you measure whether AI governance is working?',
    answer:
      'Track AI incident volume, compliance breaches, approval cycle time, deployment success rate, training coverage, customer trust, and governance-related ROI. The most important test is whether the team can quickly produce evidence for critical controls during an audit.',
  },
] as const

const relatedResources = [
  {
    href: '/ai-ethics-compliance-checklist-enterprise-2026',
    title: 'AI Ethics & Compliance Checklist',
    description: 'Turn governance principles into step-by-step checks and priorities.',
    icon: CheckCircle2,
  },
  {
    href: '/ai-governance-compliance-framework-2026',
    title: 'AI Governance & Compliance Framework',
    description: 'Review the English-language governance and regulatory framework for cross-regional alignment.',
    icon: Shield,
  },
  {
    href: '/ai-security-framework-enterprise-2026',
    title: 'Enterprise AI Security Framework',
    description: 'Extend governance requirements into security controls, detection, and response.',
    icon: AlertTriangle,
  },
  {
    href: '/ai-data-privacy-impact-assessment-2026',
    title: 'AI Data Privacy Impact Assessment',
    description: 'Run a privacy assessment before sensitive, cross-border, or high-risk use cases go live.',
    icon: FileText,
  },
] as const

export default function AIGovernanceFrameworkPage() {
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
                Enterprise AI governance framework 2026
              </div>

              <h1 className="page-title mb-6 text-5xl md:text-7xl">
                Enterprise AI governance is not about writing policy,
                <span className="brand-gradient-text block">it is about making accountability, evidence, and escalation actually work.</span>
              </h1>

              <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                This framework is based on Fortune 500 operating practice and covers ethics principles, risk management, compliance controls, and a 12-month rollout
                roadmap. The goal is to make sure AI systems have clear rules, review mechanisms, and accountability before deployment expands.
              </p>

              <div className="mb-10 flex flex-wrap gap-3">
                <a href="#framework" className="btn-brand">
                  View framework modules
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/ai-ethics-compliance-checklist-enterprise-2026" className="btn-secondary">
                  Supporting compliance checklist
                </Link>
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
                      <div className="mb-1 text-sm text-slate-500">Governance navigation</div>
                      <div className="text-xl font-semibold text-slate-950">Which modules to review first</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Framework map
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
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
                      <CheckCircle2 className="h-4 w-4" />
                      Framework deliverables
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/70 bg-white/90 px-4 py-3 text-sm text-slate-700">
                        15+ policy templates
                      </div>
                      <div className="rounded-2xl border border-white/70 bg-white/90 px-4 py-3 text-sm text-slate-700">
                        Compliance checklist
                      </div>
                      <div className="rounded-2xl border border-white/70 bg-white/90 px-4 py-3 text-sm text-slate-700">
                        Risk assessment methodology
                      </div>
                      <div className="rounded-2xl border border-white/70 bg-white/90 px-4 py-3 text-sm text-slate-700">
                        12-month rollout plan
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                    <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Execution principle</div>
                    <p className="text-sm leading-6 text-slate-700">
                      Governance documents only count when approval, audit, training, and incident-response teams can actually use them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="page-section relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="page-card-soft p-8">
              <div className="page-pill mb-4">
                <Shield className="h-4 w-4 text-[#635bff]" />
                What enterprise AI governance means
              </div>
              <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
                AI governance is a system of policies, workflows, and controls for managing AI development, deployment, and operations.
              </h2>
              <p className="page-lead mb-6 text-base md:text-lg">
                Its goal is not to slow innovation. It is to make AI use consistent with legal requirements, ethical standards, and business goals while improving
                explainability, lowering the cost of mistakes, and helping high-value programs clear internal and external review more reliably.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {coreGoals.map((goal) => {
                  const Icon = goal.icon
                  return (
                    <div key={goal.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                      <Icon className={`mb-3 h-6 w-6 ${goal.accent}`} />
                      <h3 className="mb-2 font-semibold text-slate-950">{goal.title}</h3>
                      <p className="text-sm leading-6 text-slate-600">{goal.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="page-card p-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="mb-1 text-sm text-slate-500">Why now</div>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">Governance drivers</h2>
                </div>
                <AlertTriangle className="h-7 w-7 text-amber-600" />
              </div>

              <div className="space-y-4">
                {riskDrivers.map((risk) => (
                  <div key={risk.title} className={`rounded-[1.5rem] border p-4 ${risk.tone}`}>
                    <div className="text-sm font-semibold uppercase tracking-[0.18em]">{risk.title}</div>
                    <p className="mt-2 text-sm leading-6">{risk.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="framework" className="page-section relative border-t border-slate-200/70 bg-white/80">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <Target className="h-4 w-4 text-[#635bff]" />
              Core framework
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Use three core modules to connect policy, risk, compliance, and execution into one operating system.
            </h2>
            <p className="page-lead text-base md:text-lg">
              This section preserves the core substance of the original page, but restructures it into the current governance-framework layout so leadership, legal,
              and AI delivery teams can use the same page.
            </p>
          </div>

          <div className="space-y-6">
            {frameworkComponents.map((component) => {
              const Icon = component.icon
              return (
                <div key={component.title} className="page-card p-8">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
                        <Icon className="h-4 w-4" />
                        Framework module
                      </div>
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{component.title}</h3>
                      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{component.description}</p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {component.columns.map((column) => (
                      <div key={column.heading} className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5">
                        <h4 className="mb-4 font-semibold text-slate-950">{column.heading}</h4>
                        <ul className="space-y-3">
                          {column.items.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600" />
                              <span>{item}</span>
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

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="page-card-soft p-8">
              <div className="page-pill mb-4">
                <Users className="h-4 w-4 text-[#635bff]" />
                Framework overview
              </div>
              <h3 className="mb-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                Enterprise governance cannot stop at principles; it needs work packages teams can actually deliver.
              </h3>
              <p className="mb-6 text-sm leading-6 text-slate-600">
                The original framework summary is preserved as three execution tracks: policy foundation, compliance tools, and implementation guide. That maps better to
                what teams actually ship in a quarter.
              </p>
              <div className="space-y-4">
                {operatingModel.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="rounded-[1.5rem] border border-white/80 bg-white p-5">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-2">
                          <Icon className="h-5 w-5 text-indigo-600" />
                        </div>
                        <h4 className="font-semibold text-slate-950">{item.title}</h4>
                      </div>
                      <p className="text-sm leading-6 text-slate-600">{item.detail}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="page-card p-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="mb-1 text-sm text-slate-500">Executive summary</div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">Governance execution checkpoints</h3>
                </div>
                <BarChart3 className="h-7 w-7 text-indigo-600" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Organization</div>
                  <p className="text-sm leading-6 text-slate-700">Have you assigned AI decision rights, exception approvals, and incident escalation owners?</p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Documentation</div>
                  <p className="text-sm leading-6 text-slate-700">Can you produce model documentation, risk logs, and data-source evidence quickly during an audit?</p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Monitoring</div>
                  <p className="text-sm leading-6 text-slate-700">Do you have continuous monitoring, alerts, and rollback paths instead of a one-time launch review?</p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Training</div>
                  <p className="text-sm leading-6 text-slate-700">Are business, legal, and technical teams using the same governance language and escalation rules?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="page-section relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <Clock className="h-4 w-4 text-[#635bff]" />
              12-month rollout roadmap
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Build governance across four quarters, from discovery to scalable optimization.
            </h2>
            <p className="page-lead text-base md:text-lg">
              The original Q1-Q4 roadmap stays intact, but it is now packaged as milestone cards that map more cleanly to portfolio management and quarterly OKRs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {roadmapPhases.map((phase) => (
              <div key={phase.phase} className="page-card p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
                    {phase.phase}
                  </div>
                  <div className="text-sm text-slate-500">{phase.timing}</div>
                </div>
                <h3 className="mb-3 text-xl font-semibold tracking-[-0.04em] text-slate-950">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="practices" className="page-section relative border-t border-slate-200/70 bg-white/80">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <Sparkles className="h-4 w-4 text-[#635bff]" />
              Best practices and trends
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Governance only sticks when organization, technology, and culture are built together.
            </h2>
            <p className="page-lead text-base md:text-lg">
              This section keeps the original best-practice guidance and 2026 trend view, but aligns it to the current content system and information hierarchy.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {governancePractices.map((group) => (
              <div key={group.title} className="page-card-soft p-8">
                <h3 className="mb-5 text-xl font-semibold tracking-[-0.04em] text-slate-950">{group.title}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 page-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <div className="text-sm text-slate-500">Key 2026 changes</div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">Governance expectations are rising, and automation is finally maturing.</h3>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {trendGroups.map((group) => (
                <div key={group.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h4 className="mb-4 font-semibold text-slate-950">{group.title}</h4>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="page-section relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <HelpCircle className="h-4 w-4 text-[#635bff]" />
              Frequently asked questions
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              The questions leaders keep asking about committees, timelines, budget, and KPIs.
            </h2>
            <p className="page-lead text-base md:text-lg">
              The original FAQ themes remain intact, but the section now uses the current knowledge-page structure so teams can reuse it in internal communication.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="page-card p-6">
                <div className="mb-4 flex items-start gap-3">
                  <HelpCircle className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">{faq.question}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section relative border-t border-slate-200/70 bg-white/80">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <DollarSign className="h-4 w-4 text-[#635bff]" />
              Business impact and related resources
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Governance maturity has to show up in lower risk, faster delivery, and stronger internal confidence.
            </h2>
            <p className="page-lead text-base md:text-lg">
              In addition to the original business-impact metrics, this section keeps the related internal links so the governance cluster remains tightly connected.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {impactGroups.map((group) => {
                  const Icon = group.icon
                  return (
                    <div key={group.title} className="page-card p-6">
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <div>
                          <div className="mb-1 text-sm text-slate-500">Impact block</div>
                          <h3 className="text-xl font-semibold tracking-[-0.04em] text-slate-950">{group.title}</h3>
                        </div>
                        <Icon className={`h-6 w-6 ${group.accent}`} />
                      </div>
                      <div className="space-y-4">
                        {group.rows.map(([label, value]) => (
                          <div key={label} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                            <span className="text-sm text-slate-600">{label}</span>
                            <span className="font-semibold text-slate-950">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="page-card-glow p-1">
                <div className="page-card bg-slate-950 p-8 text-white">
                  <div className="mb-6">
                    <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Total economic impact</div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em]">Once the governance framework matures, value comes from both risk avoidance and execution speed.</h3>
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    {economicImpact.map((item) => (
                      <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                        <div className="mb-2 text-3xl font-semibold tracking-[-0.04em] text-white">{item.value}</div>
                        <div className="text-sm text-slate-300">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="page-card p-8">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <div className="mb-1 text-sm text-slate-500">Related resources</div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">Keep the governance cluster moving</h3>
                  </div>
                  <ArrowRight className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="space-y-4">
                  {relatedResources.map((resource) => {
                    const Icon = resource.icon
                    return (
                      <Link
                        key={resource.href}
                        href={resource.href}
                        className="block rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5 transition hover:border-indigo-200 hover:bg-indigo-50/50"
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <div className="rounded-2xl border border-white/80 bg-white p-2">
                            <Icon className="h-5 w-5 text-indigo-600" />
                          </div>
                          <h4 className="font-semibold text-slate-950">{resource.title}</h4>
                        </div>
                        <p className="text-sm leading-6 text-slate-600">{resource.description}</p>
                      </Link>
                    )
                  })}
                </div>
              </div>

              <div className="page-card-soft p-8">
              <div className="page-pill mb-4">
                <Users className="h-4 w-4 text-[#635bff]" />
                Next step
              </div>
              <h3 className="mb-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                If you already have AI projects in flight, the next move is not another principles memo but a governance inventory and accountability map.
              </h3>
              <p className="mb-6 text-sm leading-6 text-slate-600">
                Start by identifying high-risk programs, critical data flows, approval bottlenecks, and evidence gaps. Then decide which policy, monitoring, and
                training actions need to land first.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-brand">
                  Book governance consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/ai-governance-compliance-framework-2026" className="btn-secondary">
                  View companion framework
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
