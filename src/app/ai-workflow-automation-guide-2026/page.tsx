import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Compass,
  FileSearch,
  Layers,
  Shield,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import { pageDescription, pageTitle, pageUrl } from './metadata'

const heroStats = [
  { value: '60-80%', label: 'manual processing time reduction' },
  { value: '$50K-$500K', label: 'annual savings per automated workflow' },
  { value: '95%+', label: 'accuracy in automated tasks' },
  { value: '10x', label: 'volume handling potential without proportional staff growth' },
]

const phaseCards = [
  {
    title: 'Phase 1: Strategic assessment & planning',
    icon: FileSearch,
    note: 'Confirm the workflow is worth automating before debating tools.',
  },
  {
    title: 'Phase 2: Tool selection & architecture design',
    icon: Compass,
    note: 'Define platform choice, integration boundaries, security, and fallback together.',
  },
  {
    title: 'Phase 3: Implementation strategy',
    icon: Layers,
    note: 'Start with a pilot instead of rolling it out to the whole company at once.',
  },
  {
    title: 'Phase 4: ROI measurement & optimization',
    icon: BarChart3,
    note: 'Without metrics, there is no optimization, only self-congratulation.',
  },
]

const auditSteps = [
  'Current state analysis: document workflows, bottlenecks, and baseline metrics.',
  'Automation opportunity scoring: rank by complexity, volume, and ROI potential.',
  'Technology requirements: integration needs, data sources, and dependencies.',
  'Change management planning: team readiness and training requirements.',
  'Success metrics definition: KPIs for measuring impact after launch.',
]

const readinessRows = [
  ['Process Volume', '1000+ transactions/month', '100-999 transactions/month', '<100 transactions/month'],
  ['Manual Effort', '>20 hours/week', '5-20 hours/week', '<5 hours/week'],
  ['Error Rate', '>5% error rate', '1-5% error rate', '<1% error rate'],
  ['Business Impact', 'Revenue/compliance critical', 'Operational efficiency', 'Nice to have'],
]

const platformCards = [
  {
    title: 'Enterprise platforms',
    tone: 'border-sky-100 bg-sky-50/80',
    items: [
      {
        name: 'Microsoft Power Platform',
        price: '$20-40/user/month',
        bullets: ['Native Office 365 integration', 'AI Builder for custom models', 'Enterprise security & compliance'],
      },
      {
        name: 'UiPath',
        price: '$420-780/bot/month',
        bullets: ['Market-leading RPA platform', 'Advanced computer vision AI', 'Enterprise orchestration'],
      },
      {
        name: 'Automation Anywhere',
        price: '$360-750/bot/month',
        bullets: ['Cloud-native architecture', 'IQ Bot for document processing', 'Analytics & insights'],
      },
    ],
  },
  {
    title: 'Modern AI-first solutions',
    tone: 'border-indigo-100 bg-indigo-50/80',
    items: [
      {
        name: 'Zapier',
        price: '$19.99-599/month',
        bullets: ['6000+ app integrations', 'No-code automation builder', 'AI-powered workflow suggestions'],
      },
      {
        name: 'Make (formerly Integromat)',
        price: '$9-299/month',
        bullets: ['Visual workflow designer', 'Advanced data transformation', 'Real-time processing'],
      },
      {
        name: 'n8n',
        price: 'Free - $50/month',
        bullets: ['Self-hosted option', 'Custom node development', 'Open source flexibility'],
      },
    ],
  },
]

const designPrinciples = [
  'Scalability: design for 10x growth from day one.',
  'Security: end-to-end encryption, audit trails, access controls.',
  'Integration: API-first approach for maximum flexibility.',
  'Monitoring: real-time visibility into automation performance.',
  'Fallback: human oversight triggers and manual intervention paths.',
  'Data governance: clear lineage and compliance frameworks.',
]

const pilotWeeks = [
  {
    title: 'Weeks 1-2: Foundation setup',
    bullets: ['Platform deployment and configuration', 'Security and access management setup', 'Development environment preparation', 'Team training and onboarding'],
  },
  {
    title: 'Weeks 3-4: First automation build',
    bullets: ['Simple, high-impact workflow selection', 'Automation development and testing', 'User acceptance testing', 'Performance baseline establishment'],
  },
  {
    title: 'Weeks 5-6: Deployment & monitoring',
    bullets: ['Production deployment with limited scope', 'Real-time monitoring implementation', 'User feedback collection', 'Performance optimization'],
  },
  {
    title: 'Weeks 7-8: Evaluation & scaling plan',
    bullets: ['ROI measurement and analysis', 'Lessons learned documentation', 'Scaling strategy development', 'Next phase planning'],
  },
]

const implementationPatterns = [
  {
    title: 'Document processing automation',
    note: 'Ideal for invoice processing, contract review, compliance documentation.',
    bullets: ['OCR + NLP for data extraction', 'Business rule validation', 'Exception handling workflows', 'Approval routing automation'],
  },
  {
    title: 'Customer service automation',
    note: 'Transform support operations with intelligent routing and response.',
    bullets: ['Ticket classification and routing', 'Knowledge base integration', 'Automated response generation', 'Escalation trigger management'],
  },
  {
    title: 'Sales & marketing automation',
    note: 'Accelerate pipeline management and lead nurturing.',
    bullets: ['Lead scoring and qualification', 'Personalized email sequences', 'CRM data synchronization', 'Performance analytics automation'],
  },
  {
    title: 'Financial process automation',
    note: 'Streamline accounting, reporting, and compliance workflows.',
    bullets: ['Automated reconciliation', 'Expense processing and approval', 'Regulatory reporting generation', 'Fraud detection algorithms'],
  },
]

const kpiRows = [
  ['Efficiency', 'Processing time per task, throughput volume, manual intervention rate', '60-80% time reduction, 200-500% volume increase, <5% manual intervention', 'Platform analytics, time tracking tools, exception monitoring'],
  ['Quality', 'Error rate, rework percentage, customer satisfaction', '<1% error rate, 90% reduction in rework, 15%+ CSAT improvement', 'Quality audits, exception tracking, survey feedback'],
  ['Financial', 'Cost per transaction, labor cost savings, revenue per employee', '50-70% cost reduction, $50K-500K annual savings, 20-40% productivity gain', 'Cost accounting, time-based costing, performance ratios'],
  ['Strategic', 'Time to market, compliance score, innovation capacity', '30-50% faster delivery, 95%+ compliance rate, 2x innovation projects', 'Project tracking, audit results, portfolio analysis'],
]

const roiFormula = [
  'Labor cost savings (hours saved x hourly rate)',
  'Error reduction value (error cost x volume x improvement %)',
  'Capacity increase value (additional throughput x unit value)',
  'Compliance risk mitigation (potential fine x risk reduction %)',
  'Minus platform, implementation, maintenance, support, and adoption costs',
]

const sophisticationLevels = [
  ['Level 1: Rule-based automation', 'Basic if-then logic, fixed decision trees, manual rule maintenance.'],
  ['Level 2: Pattern recognition', 'ML models for classification, anomaly detection, predictive triggers.'],
  ['Level 3: Adaptive learning', 'Continuous model improvement, dynamic rule adjustment, feedback loops.'],
  ['Level 4: Autonomous optimization', 'Self-optimizing workflows, autonomous decision making, predictive automation.'],
]

const scalingColumns = [
  {
    title: 'Horizontal scaling',
    bullets: [
      'Replicate successful patterns across departments',
      'Standardize automation components for reuse',
      'Create automation templates and libraries',
      'Establish center of excellence governance',
      'Build internal automation community',
    ],
  },
  {
    title: 'Vertical integration',
    bullets: [
      'Connect workflows across business functions',
      'Implement end-to-end process automation',
      'Create intelligent orchestration layers',
      'Build enterprise data mesh architecture',
      'Enable cross-platform AI model sharing',
    ],
  },
]

const riskColumns = [
  {
    title: 'Data security & privacy',
    bullets: ['Implement end-to-end encryption', 'Establish data retention policies', 'Run security audits and penetration testing', 'Apply GDPR/CCPA compliance frameworks'],
  },
  {
    title: 'Operational continuity',
    bullets: ['Fallback procedures for automation failures', 'Business continuity and disaster recovery', 'Service level agreement management', 'Change management protocols'],
  },
  {
    title: 'Regulatory compliance',
    bullets: ['Industry-specific regulation adherence', 'Audit trail and documentation requirements', 'Automated compliance monitoring', 'Regular regulatory impact assessments'],
  },
]

const checklistColumns = [
  {
    title: 'Strategic planning',
    bullets: ['Executive sponsorship secured', 'Business case and ROI approved', 'Success metrics defined', 'Budget and resources allocated', 'Timeline and milestones established'],
  },
  {
    title: 'Technical preparation',
    bullets: ['Platform selection completed', 'Infrastructure requirements assessed', 'Security and compliance reviewed', 'Integration architecture designed', 'Development environment ready'],
  },
  {
    title: 'Organizational readiness',
    bullets: ['Team skills assessment completed', 'Training programs scheduled', 'Change management plan active', 'Communication strategy deployed', 'Support processes established'],
  },
  {
    title: 'Process documentation',
    bullets: ['Current workflows mapped', 'Automation opportunities identified', 'Business rules documented', 'Exception scenarios defined', 'Testing criteria established'],
  },
]

const serviceStats = [
  { value: '90%', label: 'implementation success rate' },
  { value: '6-12mo', label: 'average ROI realization' },
  { value: '300%', label: 'average first-year ROI' },
]

const serviceBullets = [
  'Strategic assessment: automation readiness and opportunity analysis.',
  'Platform selection: technology evaluation and vendor negotiation support.',
  'Implementation management: end-to-end project delivery and QA.',
  'Training & adoption: change management and skill development.',
  'Ongoing optimization: performance monitoring and continuous improvement.',
]

const relatedLinks = [
  {
    href: '/ai-tool-implementation-strategy-2026',
    title: 'AI Tool Implementation Strategy 2026',
    note: 'Connect tooling decisions with the rollout strategy.',
  },
  {
    href: '/ai-implementation-success-framework-2026',
    title: 'AI Implementation Success Framework 2026',
    note: 'Go deeper on the factors that decide implementation success.',
  },
  {
    href: '/ai-automation-workflow-templates-2026',
    title: 'AI Automation Workflow Templates 2026',
    note: 'Start here if you want to begin from reusable templates.',
  },
  {
    href: '/ai-roi-calculator',
    title: 'AI ROI Calculator',
    note: 'Model the economics of automation before you scale it.',
  },
]

export default function AIWorkflowAutomationGuide() {
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
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <div className="absolute inset-x-0 top-[44rem] h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Enterprise workflow automation 2026
                </div>
                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI workflow automation,
                  <span className="brand-gradient-text block">do not buy tools before you design the process.</span>
                </h1>
                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  This implementation guide keeps the original strategic assessment, tool comparison, pilot plan, ROI formula, scaling strategy, risk control, and checklist. The page now matches the light Stripe-ish UI, but the core message is unchanged: automation programs fail less from moving slowly than from moving chaotically.
                </p>
                <div className="mb-10 flex flex-wrap gap-3">
                  <a href="#guide" className="btn-brand inline-flex items-center gap-2">
                    Open the implementation guide
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link href="/ai-roi-calculator" className="btn-secondary inline-flex items-center gap-2">
                    Calculate ROI first
                  </Link>
                </div>
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
                        <div className="mb-1 text-sm text-slate-500">Guide structure</div>
                        <div className="text-xl font-semibold text-slate-950">Four phases, no fluff</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        Step-by-step
                      </div>
                    </div>
                    <div className="space-y-3">
                      {phaseCards.map((card) => {
                        const Icon = card.icon
                        return (
                          <div key={card.title} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                            <div className="flex items-start gap-3">
                              <div className="rounded-xl border border-slate-200 bg-white p-2">
                                <Icon className="h-4 w-4 text-[#635bff]" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-slate-950">{card.title}</div>
                                <p className="mt-1 text-sm leading-6 text-slate-600">{card.note}</p>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="guide" className="mb-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="page-card p-8 md:p-10">
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">Executive summary</h2>
            <div className="space-y-4 text-lg leading-8 text-slate-600">
              <p>
                AI workflow automation is not just "doing the same thing faster." It changes how teams design work, hand off decisions, measure quality, and scale operations.
              </p>
              <p>
                The original page's promise stays intact: strategic assessment, tool selection, implementation, and ROI optimization. It now reads like a credible enterprise guide instead of a generic blog template.
              </p>
            </div>
          </div>

          <div className="page-card border border-sky-100 bg-sky-50/80 p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-100 bg-white/80">
              <Zap className="h-5 w-5 text-[#635bff]" />
            </div>
            <h2 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Implementation benefits</h2>
            <div className="space-y-3 text-sm leading-6 text-slate-700">
              <div className="rounded-2xl border border-white/80 bg-white/80 px-4 py-4">Efficiency gains: 60-80% reduction in manual processing time</div>
              <div className="rounded-2xl border border-white/80 bg-white/80 px-4 py-4">Cost savings: $50,000-$500,000 annually per automated workflow</div>
              <div className="rounded-2xl border border-white/80 bg-white/80 px-4 py-4">Quality improvement: 95%+ accuracy in automated tasks</div>
              <div className="rounded-2xl border border-white/80 bg-white/80 px-4 py-4">Employee satisfaction: 40% improvement when repetitive work drops</div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Phase 1</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Strategic assessment first,
              <span className="brand-gradient-text block">because bad processes do not become smart by magic.</span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="page-card p-8">
              <h3 className="mb-4 text-2xl font-semibold text-slate-950">Workflow audit methodology</h3>
              <div className="space-y-3">
                {auditSteps.map((step, index) => (
                  <div key={step} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">{index + 1}</div>
                    <p className="text-sm leading-6 text-slate-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="page-card p-8">
              <h3 className="mb-4 text-2xl font-semibold text-slate-950">Automation readiness assessment</h3>
              <div className="overflow-x-auto rounded-[1.5rem] border border-slate-200 bg-white">
                <table className="min-w-full text-sm">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Criteria</th>
                      <th className="px-4 py-3 text-left font-semibold">High priority</th>
                      <th className="px-4 py-3 text-left font-semibold">Medium priority</th>
                      <th className="px-4 py-3 text-left font-semibold">Low priority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {readinessRows.map((row) => (
                      <tr key={row[0]} className="hover:bg-slate-50">
                        {row.map((cell, index) => (
                          <td key={cell} className={`px-4 py-4 ${index === 0 ? 'font-semibold text-slate-900' : 'text-slate-600'}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Phase 2</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Tool selection matters,
              <span className="brand-gradient-text block">but architecture discipline matters more.</span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {platformCards.map((card) => (
              <div key={card.title} className={`page-card border p-8 ${card.tone}`}>
                <h3 className="mb-5 text-2xl font-semibold text-slate-950">{card.title}</h3>
                <div className="space-y-4">
                  {card.items.map((item) => (
                    <div key={item.name} className="rounded-3xl border border-white/80 bg-white/85 p-5">
                      <div className="mb-2 flex items-start justify-between gap-3">
                        <h4 className="text-lg font-semibold text-slate-950">{item.name}</h4>
                        <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">{item.price}</div>
                      </div>
                      <ul className="space-y-2 text-sm leading-6 text-slate-700">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 page-card border border-amber-100 bg-amber-50/80 p-8">
            <h3 className="mb-4 text-2xl font-semibold text-slate-950">Architecture design principles</h3>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {designPrinciples.map((item) => (
                <div key={item} className="rounded-2xl border border-white/80 bg-white/85 px-4 py-4 text-sm leading-6 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Phase 3</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Pilot before scale,
              <span className="brand-gradient-text block">unless you enjoy expensive chaos.</span>
            </h2>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="page-card p-8">
              <h3 className="mb-5 text-2xl font-semibold text-slate-950">8-week pilot implementation</h3>
              <div className="space-y-4">
                {pilotWeeks.map((week) => (
                  <div key={week.title} className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
                    <h4 className="mb-3 text-lg font-semibold text-slate-950">{week.title}</h4>
                    <ul className="space-y-2 text-sm leading-6 text-slate-700">
                      {week.bullets.map((bullet) => (
                        <li key={bullet}>- {bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {implementationPatterns.map((pattern) => (
                <div key={pattern.title} className="page-card p-8">
                  <h3 className="mb-3 text-2xl font-semibold text-slate-950">{pattern.title}</h3>
                  <p className="mb-4 text-sm leading-6 text-slate-600">{pattern.note}</p>
                  <ul className="space-y-2 text-sm leading-6 text-slate-700">
                    {pattern.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16 page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Phase 4</div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
                Measure ROI properly,
                <span className="brand-gradient-text block">or do not claim victory yet.</span>
              </h2>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm leading-6 text-slate-600">
              Original KPI categories and ROI formula preserved.
            </div>
          </div>

          <div className="overflow-x-auto rounded-[1.5rem] border border-slate-200 bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="px-5 py-4 text-left font-semibold">Metric category</th>
                  <th className="px-5 py-4 text-left font-semibold">Key metrics</th>
                  <th className="px-5 py-4 text-left font-semibold">Target improvement</th>
                  <th className="px-5 py-4 text-left font-semibold">Measurement method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {kpiRows.map((row) => (
                  <tr key={row[0]} className="align-top hover:bg-slate-50">
                    {row.map((cell, index) => (
                      <td key={cell} className={`px-5 py-4 ${index === 0 ? 'font-semibold text-slate-900' : 'text-slate-600'}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="page-card border border-indigo-100 bg-indigo-50/80 p-8">
              <h3 className="mb-4 text-2xl font-semibold text-slate-950">ROI calculation framework</h3>
              <div className="rounded-3xl border border-white/80 bg-white/90 p-5">
                <div className="space-y-3 text-sm leading-6 text-slate-700">
                  {roiFormula.map((item) => (
                    <div key={item}>- {item}</div>
                  ))}
                  <div className="border-t border-slate-200 pt-3 font-semibold text-slate-950">
                    ROI = (Total Benefits - Total Costs) / Total Costs x 100%
                  </div>
                </div>
              </div>
            </div>

            <div className="page-card p-8">
              <h3 className="mb-4 text-2xl font-semibold text-slate-950">Progressive AI sophistication</h3>
              <div className="space-y-3">
                {sophisticationLevels.map(([title, note]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">
                    <div className="font-semibold text-slate-950">{title}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">{note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 grid gap-6 lg:grid-cols-2">
          {scalingColumns.map((column) => (
            <div key={column.title} className="page-card p-8">
              <h2 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{column.title}</h2>
              <ul className="space-y-3 text-sm leading-6 text-slate-700">
                {column.bullets.map((bullet) => (
                  <li key={bullet} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-16 page-card border border-rose-100 bg-rose-50/80 p-8 md:p-10">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-rose-600/80">Risk management & compliance</div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              If you do not design the controls,
              <span className="brand-gradient-text block">the risks will design the outcome for you.</span>
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {riskColumns.map((column) => (
              <div key={column.title} className="rounded-3xl border border-white/80 bg-white/90 p-6">
                <h3 className="mb-4 text-xl font-semibold text-slate-950">{column.title}</h3>
                <ul className="space-y-2 text-sm leading-6 text-slate-700">
                  {column.bullets.map((bullet) => (
                    <li key={bullet}>- {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="page-card p-8 md:p-10">
            <h2 className="mb-6 text-3xl font-semibold tracking-[-0.04em] text-slate-950">Pre-implementation checklist</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {checklistColumns.map((column) => (
                <div key={column.title} className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-slate-950">{column.title} - Ready</h3>
                  <ul className="space-y-2 text-sm leading-6 text-slate-700">
                    {column.bullets.map((bullet) => (
                      <li key={bullet}>[ ] {bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="page-card border border-sky-100 bg-sky-50/80 p-8">
              <h2 className="mb-5 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Expert consulting & support</h2>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {serviceStats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/80 bg-white/90 px-4 py-4 text-center">
                    <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">{item.value}</div>
                    <div className="mt-1 text-sm text-slate-600">{item.label}</div>
                  </div>
                ))}
              </div>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-700">
                {serviceBullets.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>

            <div className="page-card p-8">
              <h2 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Related internal resources</h2>
              <div className="space-y-3">
                {relatedLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="block rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 transition hover:border-indigo-200 hover:bg-indigo-50/60">
                    <div className="font-semibold text-slate-950">{item.title}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">{item.note}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 text-center">
          <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="rounded-[1.5rem] bg-gradient-to-r from-[#0f172a] via-[#635bff] to-[#7c3aed] p-8 text-white">
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Automation works when process, platform, and governance move together.</h3>
              <p className="mx-auto mt-3 max-w-2xl text-white/85">
                If all you want is to turn manual chaos into automated chaos, this guide will not save you. Do it properly by starting with audit, pilot, ROI, and risk control together.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/ai-tool-implementation-strategy-2026" className="btn-brand bg-white text-slate-950 hover:bg-slate-100">
                  Implementation strategy
                </Link>
                <Link href="/ai-automation-workflow-templates-2026" className="btn-secondary border-white/25 bg-white/10 text-white hover:bg-white/15">
                  Workflow templates
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
