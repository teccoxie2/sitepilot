import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Digital Transformation Roadmap Guide 2026 | SitePilot'
const pageDescription =
  'An 18-month enterprise AI digital transformation roadmap based on Fortune 500 execution patterns, covering phased rollout, budget planning, risk controls, and success metrics.'
const pageUrl = 'https://sitepilot.co/ai-digital-transformation-roadmap-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'enterprise AI transformation',
    'digital transformation roadmap',
    'AI implementation strategy',
    'enterprise AI adoption',
    'enterprise transformation roadmap',
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
  { href: '#overview', title: 'Executive summary', note: 'Transformation outcomes, investment, and overall judgment' },
  { href: '#framework', title: 'Three-phase framework', note: 'Foundation, scaled deployment, and intelligent innovation' },
  { href: '#phase-one', title: 'Phase 1 detail', note: 'Strategy assessment and capability-building actions' },
  { href: '#phase-two', title: 'Phase 2 priorities', note: 'Business AI priorities across core functions' },
  { href: '#risk', title: 'Risk and metrics', note: 'Mitigation strategy and milestone system' },
]

const summaryStats = [
  { value: '18 months', label: 'Full transformation timeline' },
  { value: '236', label: 'Execution steps' },
  { value: '$2.4M-$4.8M', label: 'Total investment for a mid-market enterprise' },
  { value: '242%-425%', label: 'Net ROI range' },
]

const executiveHighlights = [
  'Average operating efficiency improves by 47%, while critical decision time drops by 62% in this class of Fortune 500 transformation program.',
  'The 18-month roadmap runs in three phases: foundation building, scaled deployment, and intelligent innovation, each with a different organizational and investment focus.',
  'Transformation success is rarely about the model alone. It depends on whether data governance, cross-functional alignment, skill development, and change management keep up.',
  'The most dangerous mistake is not moving slowly. It is trying to scale high-complexity AI programs before the core operating foundation is stable.',
]

const phaseCards = [
  {
    phase: 'Phase 1',
    title: 'Foundation build',
    duration: 'Months 1-6 | 35% of investment',
    accent: 'text-blue-600',
    outcome: 'Key outcome: AI-ready organization',
    items: [
      'AI strategy definition and org redesign',
      'Infrastructure assessment and upgrades',
      'Data architecture modernization',
      'Hiring and training systems',
      'Governance framework setup',
      'Pilot launch',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Scaled deployment',
    duration: 'Months 7-12 | 45% of investment',
    accent: 'text-indigo-600',
    outcome: 'Key outcome: AI-powered operations',
    items: [
      'AI-enabled core business workflows',
      'Intelligent customer experience upgrades',
      'AI-optimized supply chain planning',
      'AI-driven financial analysis systems',
      'AI tools for HR operations',
      'AI-assisted risk management systems',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Intelligent innovation',
    duration: 'Months 13-18 | 20% of investment',
    accent: 'text-violet-600',
    outcome: 'Key outcome: AI-first enterprise',
    items: [
      'AI-driven product innovation',
      'Exploration of intelligent business models',
      'Ecosystem-wide AI integration',
      'Predictive business strategy',
      'Autonomous decision systems',
      'Evolution into an AI-centered organization',
    ],
  },
]

const phaseOneTracks = [
  {
    title: 'Months 1-2: Strategy planning and assessment',
    sections: [
      {
        heading: 'Week 1-2 - AI Vision & Strategy',
        items: [
          'Establish an AI transformation committee (CEO / CTO / CDO / CHRO)',
          'Define a five-year AI vision statement',
          'Set the AI investment allocation strategy',
          'Identify 12 priority business use cases',
          'Define AI ethics and governance principles',
          'Stand up an AI center of excellence (CoE)',
        ],
      },
      {
        heading: 'Week 3-4 - Current State Assessment',
        items: [
          'Assess AI readiness of the IT infrastructure',
          'Audit data quality and availability',
          'Analyze employee AI skill gaps',
          'Identify workflow automation opportunities',
          'Benchmark competitor AI adoption',
          'Assess compliance and security requirements',
        ],
      },
    ],
  },
  {
    title: 'Months 3-6: Infrastructure and capability build',
    sections: [
      {
        heading: 'Technical infrastructure',
        items: [
          'Integrate cloud AI services',
          'Modernize the data lake and warehouse stack',
          'Deploy an MLOps platform',
          'Upgrade API management',
          'Strengthen cybersecurity controls',
          'Implement monitoring and logging systems',
        ],
      },
      {
        heading: 'Organizational capability build',
        items: [
          'Launch the AI hiring plan',
          'Deliver AI literacy training',
          'Design change management workflows',
          'Adjust KPIs and incentives',
          'Build cross-functional collaboration mechanisms',
          'Select external partners',
        ],
      },
      {
        heading: 'Governance and compliance',
        items: [
          'Define AI governance policies',
          'Implement a data privacy compliance framework',
          'Create model approval workflows',
          'Set risk management mechanisms',
          'Establish an ethics committee',
          'Build regulatory reporting processes',
        ],
      },
    ],
  },
]

const businessPriorityRows = [
  ['Customer service', 'Conversational AI + sentiment analysis', '425%', 'Medium', 'High'],
  ['Sales forecasting', 'Predictive analytics + recommendation engine', '380%', 'Low', 'High'],
  ['Supply chain optimization', 'Demand forecasting + inventory optimization', '315%', 'High', 'Medium'],
  ['Financial analysis', 'Intelligent reporting + anomaly detection', '290%', 'Medium', 'Medium'],
  ['Human resources', 'Recruiting triage + employee development', '235%', 'Low', 'Medium'],
  ['Product development', 'AI-assisted design + test automation', '185%', 'High', 'Low'],
]

const innovationTracks = [
  {
    title: 'AI-driven innovation strategy',
    items: [
      'Develop AI-native product lines',
      'Build customizable intelligent service platforms',
      'Launch predictive maintenance services',
      'Use AI to optimize customer experience',
      'Create an AI-as-a-Service (AIaaS) platform',
      'Define data monetization strategies',
      'Expand the ecosystem partner network',
      'Ship subscription-based intelligent services',
    ],
  },
  {
    title: 'Maturity assessment framework',
    items: [
      'AI strategy maturity: Level 5',
      'Technical implementation capability: Level 4',
      'Change management maturity: Level 4',
      'Data governance capability: Level 3',
      'Overall judgment: AI-first enterprise ready',
    ],
  },
]

const riskGroups = [
  {
    title: 'Critical risk identification',
    accent: 'text-rose-600',
    items: [
      'Technical risk: model performance misses targets, data quality problems emerge, integration gets complex, or cybersecurity gaps open.',
      'Organizational risk: employees resist the change, key talent leaves, cross-functional coordination breaks down, or leadership support fades.',
      'Commercial risk: payback takes longer, competitors move first, customer adoption stays weak, or compliance requirements shift.',
    ],
  },
  {
    title: 'Risk mitigation measures',
    accent: 'text-indigo-600',
    items: [
      'Technical mitigation: MVP validation, data quality standards, phased integration, and zero-trust security architecture.',
      'Organizational mitigation: company-wide AI training, talent retention programs, a cross-functional steering group, and C-suite KPI alignment.',
      'Commercial mitigation: phased ROI checkpoints, rapid prototyping, customer co-creation, and continuous compliance monitoring.',
    ],
  },
]

const kpiCards = [
  ['47%', 'Operating efficiency gain'],
  ['62%', 'Faster decision velocity'],
  ['35%', 'Cost reduction over 18 months'],
  ['425%', 'Target total ROI'],
  ['Milestone 1', 'AI strategy completed'],
  ['Milestone 2', 'Infrastructure ready'],
  ['Milestone 3', 'Core workflows AI-enabled'],
  ['Milestone 4', 'AI-first culture established'],
]

const relatedResources = [
  {
    href: '/ai-roi-calculator',
    title: 'AI ROI Calculator',
    description: 'Turn the 18-month roadmap into a financial model before the budget discussion drifts.',
  },
  {
    href: '/enterprise-ai-implementation-best-practices-2026',
    title: 'Enterprise AI Best Practices',
    description: 'Translate the roadmap into an executable delivery model instead of leaving it at strategy slogans.',
  },
  {
    href: '/ai-governance-compliance-framework-2026',
    title: 'AI Governance & Compliance',
    description: 'Move governance and compliance up front instead of retrofitting controls after scale.',
  },
  {
    href: '/ai-team-training-certification-2026',
    title: 'AI Team Training Program',
    description: 'Address the most common skill and adoption gaps in enterprise change programs.',
  },
  {
    href: '/ai-tools-budget-planning-enterprise-2026',
    title: 'AI Budget Planning',
    description: 'Align transformation phases, tooling costs, and annual budget pacing.',
  },
  {
    href: '/enterprise-ai-vendor-comparison-guide-2026',
    title: 'Enterprise AI Vendor Comparison',
    description: 'Make platform and service-provider selection more disciplined during the scale phase.',
  },
]

export default function AIDigitalTransformationRoadmapPage() {
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
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                2026 enterprise AI transformation guide
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Enterprise AI transformation roadmap,
                <span className="brand-gradient-text block">from pilot motion to an AI-first operating model.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                This 18-month roadmap is built for CEOs, CTOs, CDOs, and transformation-office leaders. The goal is not more vision statements. It is to break foundation work, scaled deployment, and intelligent innovation into executable timing, budget, and control actions.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#framework" className="btn-brand">
                  View the three-phase framework
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/ai-roi-calculator" className="btn-secondary">
                  Model ROI first
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
                      18-month view
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="relative max-w-7xl mx-auto px-4 py-14 md:py-18">
        <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <section id="overview" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Executive summary</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                A roadmap only becomes useful
                <span className="block brand-gradient-text">when the organization model and investment cadence are explicit.</span>
              </h2>
              <div className="space-y-4">
                {executiveHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="page-card-soft p-7">
              <h3 className="text-2xl font-semibold text-slate-950 mb-5">ROI preview</h3>
              <div className="space-y-4">
                {[
                  ['18-month investment', '$2.4M-$4.8M'],
                  ['Annualized benefit', '$8.2M-$15.6M'],
                  ['Net ROI', '242%-425%'],
                  ['Payback period', '8-14 months'],
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

        <section id="framework" className="page-card-glow p-1.5 mb-16 scroll-mt-28">
          <div className="page-card rounded-[2rem] p-8 md:p-10">
            <div className="max-w-3xl mb-8">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Three-phase framework</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                The 18-month roadmap
                <span className="block brand-gradient-text">builds the base, scales the value, then turns it into an advantage.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {phaseCards.map((phase) => (
                <div key={phase.title} className="page-card-soft p-6">
                  <div className={`text-sm font-semibold uppercase tracking-[0.2em] mb-3 ${phase.accent}`}>{phase.phase}</div>
                  <h3 className="text-2xl font-semibold text-slate-950 mb-2">{phase.title}</h3>
                  <div className="text-sm text-slate-500 mb-4">{phase.duration}</div>
                  <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-950 mb-5">
                    {phase.outcome}
                  </div>
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
          </div>
        </section>

        <section id="phase-one" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Phase 1 detail</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Foundation building
              <span className="block brand-gradient-text">means moving organization, infrastructure, and governance together.</span>
            </h2>
          </div>

          <div className="space-y-6">
            {phaseOneTracks.map((track) => (
              <div key={track.title} className="page-card-soft p-6">
                <h3 className="text-2xl font-semibold text-slate-950 mb-5">{track.title}</h3>
                <div className={`grid gap-6 ${track.sections.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
                  {track.sections.map((section) => (
                    <div key={section.heading} className="rounded-2xl border border-slate-200 bg-white px-5 py-5">
                      <div className="font-semibold text-slate-950 mb-4">{section.heading}</div>
                      <div className="space-y-2 text-sm text-slate-600">
                        {section.items.map((item) => (
                          <div key={item}>{item}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="phase-two" className="page-card-glow p-1.5 mb-16 scroll-mt-28">
          <div className="page-card rounded-[2rem] p-8 md:p-10">
            <div className="max-w-3xl mb-8">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Phase 2 & 3</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                Scale and intelligent innovation
                <span className="block brand-gradient-text">decide whether you are catching up or building a lead.</span>
              </h2>
            </div>

            <div className="page-card-soft p-6 mb-8">
              <h3 className="text-2xl font-semibold text-slate-950 mb-5">Core workflow AI priorities</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500">
                      <th className="px-3 py-3 text-left font-semibold">Business function</th>
                      <th className="px-3 py-3 text-left font-semibold">AI use case</th>
                      <th className="px-3 py-3 text-left font-semibold">Expected ROI</th>
                      <th className="px-3 py-3 text-left font-semibold">Implementation complexity</th>
                      <th className="px-3 py-3 text-left font-semibold">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {businessPriorityRows.map(([domain, useCase, roi, complexity, priority]) => (
                      <tr key={domain} className="border-b border-slate-100 last:border-none">
                        <td className="px-3 py-4 text-slate-950 font-medium">{domain}</td>
                        <td className="px-3 py-4 text-slate-600">{useCase}</td>
                        <td className="px-3 py-4 text-indigo-600 font-semibold">{roi}</td>
                        <td className="px-3 py-4 text-slate-600">{complexity}</td>
                        <td className="px-3 py-4 text-slate-600">{priority}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {innovationTracks.map((track) => (
                <div key={track.title} className="page-card-soft p-6">
                  <h3 className="text-2xl font-semibold text-slate-950 mb-5">{track.title}</h3>
                  <div className="space-y-3">
                    {track.items.map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-600">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="risk" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Risk and metrics</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Risk mitigation and milestone discipline
              <span className="block brand-gradient-text">are the guardrails that keep the roadmap executable.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {riskGroups.map((group) => (
              <div key={group.title} className="page-card-soft p-6">
                <h3 className={`text-2xl font-semibold mb-5 ${group.accent}`}>{group.title}</h3>
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-600">
                      {item}
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
        </section>

        <section className="page-card-glow p-1.5">
          <div className="page-card rounded-[2rem] p-8 md:p-10">
            <div className="max-w-3xl mb-8">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Related resources</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                Keep moving beyond the roadmap,
                <span className="block brand-gradient-text">and connect ROI, governance, team readiness, and vendor choices.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
              {relatedResources.map((resource) => (
                <Link key={resource.href} href={resource.href} className="page-card-soft p-6 hover:border-slate-300 transition">
                  <h3 className="text-xl font-semibold text-slate-950 mb-3">{resource.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{resource.description}</p>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-8">
                Once the draft roadmap exists, the next step is usually not more documentation. It is turning budget, vendors, governance, and team training into executable workstreams.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/ai-roi-calculator" className="btn-brand">
                  Start ROI modeling
                </Link>
                <Link href="/ai-tools" className="btn-secondary">
                  Browse AI tools and resources
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
