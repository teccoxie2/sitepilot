import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI Digital Transformation Roadmap 2026: Enterprise Implementation Guide | SitePilot'
const pageDescription =
  'Complete 12-month AI digital transformation roadmap for enterprises in 2026, including phased implementation, budget planning, risk mitigation, and ROI benchmarks.'
const pageUrl = 'https://sitepilot.co/ai-digital-transformation-roadmap-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'ai digital transformation roadmap',
    'digital transformation roadmap 2026',
    'enterprise digital transformation',
    'ai implementation strategy',
    'enterprise modernization',
    'ai transformation roadmap',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
}

const quickNav = [
  { href: '#overview', title: 'Executive summary', note: 'Imperative, scope, and value framing' },
  { href: '#phases', title: 'Four-phase roadmap', note: 'Assessment to scale' },
  { href: '#investment', title: 'Investment and ROI', note: 'Budget timing and payback' },
  { href: '#risk', title: 'Risk management', note: 'Technical, organizational, and business controls' },
  { href: '#resources', title: 'Support resources', note: 'Tools, guides, and adjacent assets' },
]

const summaryStats = [
  { value: '12 months', label: 'Core roadmap duration' },
  { value: '$1.9M-$2.9M', label: 'Typical total investment range' },
  { value: '267%-394%', label: '18-month ROI range' },
  { value: '89%', label: 'Enterprise adoption momentum' },
]

const executiveHighlights = [
  '89% of enterprises are accelerating AI adoption as digital-first operating models become permanent.',
  'The roadmap is phased: Assessment (months 1-2), Foundation (months 3-5), Implementation (months 6-9), and Scale (months 10-12).',
  'Organizations usually need coordinated changes across infrastructure, data, governance, training, and operating metrics to realize ROI.',
  'The fastest failures come from trying to deploy AI before cleaning up process ownership, data quality, and change management.',
]

const phaseCards = [
  {
    phase: 'Phase 1',
    title: 'Digital maturity assessment',
    duration: 'Months 1-2',
    accent: 'text-blue-600',
    deliverable: 'Current-state analysis, transformation charter, and investment plan.',
    items: [
      'Infrastructure audit and capacity review',
      'Process mapping and inefficiency identification',
      'Data architecture and quality assessment',
      'Risk tolerance, compliance, and skills evaluation',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Foundation building',
    duration: 'Months 3-5',
    accent: 'text-indigo-600',
    deliverable: 'Modernized platforms, team design, and workflow foundations.',
    items: [
      'Cloud and platform modernization',
      'AI/ML platform setup and data pipeline design',
      'Digital transformation office and team structure',
      'Workflow automation and governance baselines',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'AI implementation and automation',
    duration: 'Months 6-9',
    accent: 'text-violet-600',
    deliverable: 'AI-enabled customer, operations, and decision-support systems.',
    items: [
      'Customer experience automation',
      'Operations intelligence and process automation',
      'Decision-support dashboards and risk monitoring',
      'Value tracking against the roadmap business case',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Scale and optimize',
    duration: 'Months 10-12',
    accent: 'text-amber-600',
    deliverable: 'Advanced capabilities, ecosystem integration, and operating maturity.',
    items: [
      'Predictive and autonomous capabilities',
      'Partner, vendor, and customer ecosystem integration',
      'Continuous learning and model-improvement loops',
      'Innovation lab and future-state evaluation pipeline',
    ],
  },
]

const phaseDetails = [
  {
    title: 'Phase 1 deliverables',
    tone: 'bg-blue-50 border-blue-200',
    items: [
      'Digital maturity scorecard',
      'Strategic transformation plan',
      '12-month implementation roadmap',
      'Budget and resource plan',
      'Risk assessment report',
      'Executive presentation package',
    ],
  },
  {
    title: 'Phase 2 investment breakdown',
    tone: 'bg-indigo-50 border-indigo-200',
    items: [
      'Infrastructure: $680K-$920K',
      'Platform licenses: $340K-$580K',
      'Team and training: $290K-$450K',
      'Consulting services: $180K-$280K',
    ],
  },
  {
    title: 'Phase 3 expected results',
    tone: 'bg-violet-50 border-violet-200',
    items: [
      '35-50% process automation',
      '25-40% cost reduction',
      '45-70% faster customer response',
      '15-25% revenue increase',
    ],
  },
  {
    title: 'Phase 4 target achievements',
    tone: 'bg-amber-50 border-amber-200',
    items: [
      '85-95% process automation',
      '50-70% cost optimization',
      '24/7 intelligent operations',
      'Ecosystem-level AI connectivity',
    ],
  },
]

const investmentBreakdown = [
  ['Infrastructure & cloud', '$680K-$920K'],
  ['AI/ML platforms & tools', '$340K-$580K'],
  ['Team & training', '$450K-$680K'],
  ['Consulting & services', '$280K-$420K'],
  ['Change management', '$180K-$280K'],
]

const roiTimeline = [
  {
    title: 'Months 1-6',
    subtitle: 'Foundation ROI',
    items: [
      '15-25% operational efficiency gains',
      '20-30% decision-making acceleration',
      '$180K-$340K in early savings',
    ],
  },
  {
    title: 'Months 7-12',
    subtitle: 'Implementation ROI',
    items: [
      '35-50% process automation',
      '40-60% productivity improvement',
      '$580K-$920K in additional savings',
    ],
  },
  {
    title: 'Months 13-18',
    subtitle: 'Scale ROI',
    items: [
      '60-80% automation maturity',
      '25-40% revenue growth',
      '$1.2M-$2.1M in total value creation',
    ],
  },
]

const riskGroups = [
  {
    title: 'Technical risks',
    accent: 'text-rose-600',
    items: [
      ['Integration complexity', 'Phase integration through APIs, compatibility testing, and staged releases.'],
      ['Data quality issues', 'Run audits, cleansing pipelines, and data-quality monitoring before scale.'],
    ],
  },
  {
    title: 'Organizational risks',
    accent: 'text-amber-600',
    items: [
      ['Change resistance', 'Use a structured change-management program with clear communications and training.'],
      ['Skills gap', 'Balance training, hiring, and specialist partners to reduce delivery risk.'],
    ],
  },
  {
    title: 'Business risks',
    accent: 'text-blue-600',
    items: [
      ['ROI delays', 'Sequence quick wins and KPI reviews so value is visible before full-scale rollout.'],
      ['Compliance challenges', 'Embed compliance-by-design and audit readiness from phase one.'],
    ],
  },
]

const kpiCards = [
  ['47%', 'Cost reduction'],
  ['156%', 'Productivity gain'],
  ['89%', 'Process automation'],
  ['73%', 'Error reduction'],
  ['267%', 'ROI over 18 months'],
  ['32%', 'Revenue growth'],
  ['78%', 'Customer satisfaction improvement'],
  ['12 months', 'Typical payback'],
]

const supportCards = [
  {
    title: 'Strategic consulting',
    note: 'C-level advisory services for roadmap validation, executive alignment, and industry-specific sequencing.',
  },
  {
    title: 'Technical implementation',
    note: 'Architecture design, platform integration, AI model delivery, and deployment automation support.',
  },
  {
    title: 'Change management',
    note: 'Training programs, communication plans, and organizational-adoption support for cross-functional teams.',
  },
]

const toolGroups = [
  {
    title: 'Cloud platforms',
    items: [
      'AWS, Azure, or GCP enterprise services',
      'Serverless computing frameworks',
      'Container orchestration and Kubernetes',
      'Edge computing solutions',
    ],
  },
  {
    title: 'AI/ML platforms',
    items: [
      'TensorFlow and PyTorch ecosystems',
      'AutoML and no-code AI platforms',
      'MLOps and model-management tooling',
      'Computer vision and NLP APIs',
    ],
  },
  {
    title: 'Automation tools',
    items: [
      'RPA platforms such as UiPath or Automation Anywhere',
      'Workflow orchestration tools',
      'Document processing automation',
      'Business process management layers',
    ],
  },
]

const relatedResources = [
  {
    href: '/ai-roi-calculator',
    title: 'AI ROI Calculator',
    description: 'Quantify the business case before the transformation program gets approved.',
  },
  {
    href: '/ai-governance-compliance-framework-2026',
    title: 'AI Governance & Compliance Framework',
    description: 'Tie roadmap ambition to governance, controls, and regulatory readiness.',
  },
  {
    href: '/ai-team-training-certification-2026',
    title: 'AI Team Training Program',
    description: 'Build the operating capability required to sustain transformation after launch.',
  },
  {
    href: '/enterprise-ai-implementation-best-practices-2026',
    title: 'Enterprise AI Best Practices',
    description: 'Translate the roadmap into delivery patterns that reduce rollout risk.',
  },
  {
    href: '/ai-tools-cost-benefit-analysis-2026',
    title: 'AI Tools Cost-Benefit Analysis',
    description: 'Pressure-test vendor and tooling choices against the expected payoff.',
  },
  {
    href: '/manufacturing-ai-roi-calculator-2026',
    title: 'Industry-Specific ROI Calculators',
    description: 'Use adjacent models when stakeholders want a more verticalized business case.',
  },
]

export default function AIDigitalTransformationRoadmap2026() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-06"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_54%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[34rem] h-[30rem] bg-[radial-gradient(circle_at_22%_18%,rgba(14,165,233,0.05),transparent_24%),radial-gradient(circle_at_80%_14%,rgba(99,91,255,0.05),transparent_22%),radial-gradient(circle_at_55%_82%,rgba(244,114,182,0.04),transparent_28%)]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                2026 enterprise transformation roadmap
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                AI digital transformation roadmap,
                <span className="brand-gradient-text block">for enterprises building more than a pilot.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                This guide maps a practical 12-month enterprise transformation program across assessment, foundation work,
                implementation, and scale. The goal is not to launch AI faster at any cost. It is to sequence investment,
                governance, and operating change so the business case survives contact with reality.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#phases" className="btn-brand">
                  See the roadmap
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/ai-roi-calculator" className="btn-secondary">
                  Calculate AI ROI
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {summaryStats.map((stat) => (
                  <div key={stat.label} className="page-card p-4 bg-white/90">
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6">
                <div className="page-card p-6 bg-white/95">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Guide map</div>
                      <div className="text-xl font-semibold text-slate-950">How to use this roadmap</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Board-level summary
                    </div>
                  </div>

                  <div className="space-y-3">
                    {quickNav.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4"
                      >
                        <div className="font-semibold text-slate-950 mb-1">{item.title}</div>
                        <div className="text-sm text-slate-500">{item.note}</div>
                      </a>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50/80 px-4 py-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Start with the investment and risk sections if you are pressure-testing an existing plan. Start with the phase view if the roadmap is still being designed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-14 md:py-18">
        <section id="overview" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Executive Summary</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                Transformation succeeds when the roadmap
                <span className="block brand-gradient-text">is operational, not inspirational.</span>
              </h2>
              <div className="space-y-4">
                {executiveHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="page-card-soft p-7">
              <h3 className="text-2xl font-semibold text-slate-950 mb-5">Success metrics preview</h3>
              <div className="space-y-4">
                {[
                  ['Operational cost reduction', '47%'],
                  ['Employee productivity increase', '156%'],
                  ['Customer satisfaction improvement', '89%'],
                  ['Payback timing', '12-18 months'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4">
                    <span className="text-slate-600">{label}</span>
                    <span className="font-semibold text-indigo-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="phases" className="page-card-glow p-1.5 mb-16 scroll-mt-28">
          <div className="page-card rounded-[2rem] p-8 md:p-10">
            <div className="max-w-3xl mb-8">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Roadmap Phases</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                The four phases,
                <span className="block brand-gradient-text">from assessment to scaled operations.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {phaseCards.map((phase) => (
                <div key={phase.title} className="page-card-soft p-6">
                  <div className={`text-sm font-semibold uppercase tracking-[0.2em] mb-3 ${phase.accent}`}>{phase.phase}</div>
                  <h3 className="text-2xl font-semibold text-slate-950 mb-2">{phase.title}</h3>
                  <div className="text-sm text-slate-500 mb-4">{phase.duration}</div>
                  <p className="text-sm text-slate-600 mb-5">{phase.deliverable}</p>
                  <div className="space-y-3">
                    {phase.items.map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-600">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
              {phaseDetails.map((detail) => (
                <div key={detail.title} className={`rounded-[1.75rem] border p-5 ${detail.tone}`}>
                  <h3 className="text-lg font-semibold text-slate-950 mb-4">{detail.title}</h3>
                  <div className="space-y-2 text-sm text-slate-700">
                    {detail.items.map((item) => (
                      <div key={item}>{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="investment" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Investment & ROI</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Budget discipline matters,
              <span className="block brand-gradient-text">but sequencing matters more.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="page-card-soft p-6">
              <h3 className="text-2xl font-semibold text-slate-950 mb-5">12-month investment breakdown</h3>
              <div className="space-y-4">
                {investmentBreakdown.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4">
                    <span className="text-slate-600">{label}</span>
                    <span className="font-semibold text-slate-950">{value}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-4 border-t border-slate-200 pt-4">
                  <span className="text-lg font-semibold text-slate-950">Total investment</span>
                  <span className="text-xl font-semibold text-[#635bff]">$1.9M-$2.9M</span>
                </div>
              </div>
            </div>

            <div className="page-card-soft p-6">
              <h3 className="text-2xl font-semibold text-slate-950 mb-5">ROI timeline</h3>
              <div className="space-y-4">
                {roiTimeline.map((period) => (
                  <div key={period.title} className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                    <div className="font-semibold text-slate-950 mb-1">
                      {period.title} · {period.subtitle}
                    </div>
                    <div className="space-y-2 mt-3 text-sm text-slate-600">
                      {period.items.map((item) => (
                        <div key={item}>{item}</div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="rounded-2xl border border-indigo-200 bg-indigo-50 px-4 py-4">
                  <div className="text-sm text-indigo-700 mb-1">18-month total ROI</div>
                  <div className="text-2xl font-semibold text-indigo-700">267%-394%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="risk" className="page-card-glow p-1.5 mb-16 scroll-mt-28">
          <div className="page-card rounded-[2rem] p-8 md:p-10">
            <div className="max-w-3xl mb-8">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Risk Management</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                The usual failure points,
                <span className="block brand-gradient-text">grouped by what actually breaks programs.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {riskGroups.map((group) => (
                <div key={group.title} className="page-card-soft p-6">
                  <h3 className={`text-2xl font-semibold mb-5 ${group.accent}`}>{group.title}</h3>
                  <div className="space-y-4">
                    {group.items.map(([title, note]) => (
                      <div key={title}>
                        <div className="font-semibold text-slate-950 mb-1">{title}</div>
                        <div className="text-sm text-slate-600">{note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {kpiCards.map(([value, label]) => (
                <div key={label} className="page-card px-5 py-5">
                  <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-2">{value}</div>
                  <div className="text-sm text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="resources" className="page-card p-8 md:p-10 scroll-mt-28">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Resources</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Delivery support and internal links,
              <span className="block brand-gradient-text">so the roadmap can turn into execution.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {supportCards.map((card) => (
              <div key={card.title} className="page-card-soft p-6">
                <h3 className="text-xl font-semibold text-slate-950 mb-3">{card.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{card.note}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {toolGroups.map((group) => (
              <div key={group.title} className="page-card-soft p-6">
                <h3 className="text-xl font-semibold text-slate-950 mb-4">{group.title}</h3>
                <div className="space-y-3 text-sm text-slate-600">
                  {group.items.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
            {relatedResources.map((resource) => (
              <Link key={resource.href} href={resource.href} className="page-card-soft p-6 hover:border-slate-300 transition">
                <h3 className="text-xl font-semibold text-slate-950 mb-3">{resource.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{resource.description}</p>
              </Link>
            ))}
          </div>

          <div className="page-card-glow p-1.5">
            <div className="page-card rounded-[2rem] p-8 md:p-10 text-center">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                Ready to turn the roadmap into
                <span className="block brand-gradient-text">an investment decision?</span>
              </h2>
              <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-8">
                Use the ROI calculator to model payback, then review AI tools and governance resources to pressure-test how the rollout should actually happen.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/ai-roi-calculator" className="btn-brand">
                  Start ROI analysis
                </Link>
                <Link href="/ai-tools" className="btn-secondary">
                  Explore AI tools
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
