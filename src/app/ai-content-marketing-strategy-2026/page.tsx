import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  LineChart,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI Content Marketing Strategy 2026 | Enterprise Content Automation & Growth'
const pageDescription =
  'Advanced AI content marketing strategies for enterprises. Automate content creation, optimize performance, and scale content operations with AI-powered marketing frameworks for 2026.'
const pageUrl = 'https://sitepilot.co/ai-content-marketing-strategy-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords:
    'AI content marketing, content automation, AI marketing strategy, enterprise content creation, marketing AI tools 2026',
  alternates: {
    canonical: pageUrl,
  },
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

const summaryCards = [
  { label: '267%', note: 'Typical production increase once AI-assisted creation and review loops are standardized.' },
  { label: '84%', note: 'Cycle-time reduction for briefing, drafting, and multi-format adaptation.' },
  { label: '156%', note: 'Engagement lift when optimization and personalization are part of the workflow.' },
  { label: '$2.4M', note: 'Illustrative annual savings for enterprise teams replacing fragmented manual processes.' },
]

const quickNav = [
  { href: '#framework', title: 'Framework', note: 'Planning to scale loop' },
  { href: '#workflow', title: 'Workflow', note: 'Research to optimization' },
  { href: '#roi', title: 'ROI metrics', note: 'Efficiency and savings' },
  { href: '#roadmap', title: 'Roadmap', note: '24-week rollout' },
]

const frameworkCards = [
  {
    icon: Target,
    title: 'Strategy & planning',
    accent: 'text-blue-600',
    items: ['AI-powered audience analysis', 'Content opportunity mapping', 'Performance prediction', 'Resource optimization'],
  },
  {
    icon: Zap,
    title: 'Content creation',
    accent: 'text-indigo-600',
    items: ['Automated content generation', 'Multi-format adaptation', 'Brand voice consistency', 'Quality assurance'],
  },
  {
    icon: Compass,
    title: 'Distribution & optimization',
    accent: 'text-violet-600',
    items: ['Channel optimization', 'Timing automation', 'Personalization', 'A/B testing'],
  },
  {
    icon: LineChart,
    title: 'Analytics & scaling',
    accent: 'text-amber-600',
    items: ['Performance tracking', 'ROI measurement', 'Predictive analytics', 'Strategy refinement'],
  },
]

const workflowStages = [
  {
    step: '1',
    title: 'Research & ideation',
    note: 'Use AI to compress discovery time and turn audience signals into repeatable planning inputs.',
    leftTitle: 'AI research tools',
    leftItems: [
      ['Trend analysis', 'AI identifies emerging topics and keywords before the editorial calendar locks.'],
      ['Competitor intelligence', 'Automated gap analysis highlights where your point of view can win.'],
      ['Audience insights', 'Behavioral patterns guide subject, format, and tone choices.'],
    ],
    rightTitle: 'Content planning',
    rightItems: [
      ['Editorial calendar', 'AI-optimized publishing schedules keep output consistent without overloading the team.'],
      ['Content mix optimization', 'Balance blog, email, social, and interactive assets by expected value.'],
      ['Resource allocation', 'Assign work automatically based on workflow stage and specialist capacity.'],
    ],
  },
  {
    step: '2',
    title: 'Content production',
    note: 'Production systems should generate variants fast, but keep brand consistency and human review where it matters.',
    columns: [
      {
        title: 'Text content',
        accent: 'text-indigo-700',
        bg: 'bg-indigo-50',
        items: ['Blog posts and articles', 'Social media captions', 'Email newsletters', 'Product descriptions', 'Press releases'],
      },
      {
        title: 'Visual content',
        accent: 'text-blue-700',
        bg: 'bg-blue-50',
        items: ['AI-generated imagery', 'Infographic creation', 'Video thumbnails', 'Social graphics', 'Brand-consistent visuals'],
      },
      {
        title: 'Interactive content',
        accent: 'text-violet-700',
        bg: 'bg-violet-50',
        items: ['Dynamic presentations', 'Personalized experiences', 'Interactive calculators', 'Automated surveys', 'Chatbot conversations'],
      },
    ],
  },
  {
    step: '3',
    title: 'Distribution & optimization',
    note: 'Multi-channel delivery becomes more valuable when AI chooses timing, adapts format, and closes the loop with analytics.',
    leftTitle: 'Multi-channel distribution',
    leftItems: [
      ['Social media', 'Platform-optimized posting sequences for channel-native performance.'],
      ['Email marketing', 'Personalized campaign delivery aligned with lifecycle stage.'],
      ['Website & blog', 'SEO-aware publishing for long-tail and authority growth.'],
    ],
    rightTitle: 'Performance optimization',
    rightItems: [
      ['Real-time analytics', 'Monitor performance continuously instead of waiting for monthly reviews.'],
      ['Dynamic adjustment', 'Let AI recommend changes to copy, timing, and distribution.'],
      ['A/B testing', 'Automate variation testing so optimization becomes routine, not occasional.'],
      ['Personalization', 'Adapt content sequences by audience segment and intent.'],
    ],
  },
]

const roiCards = [
  { value: '267%', label: 'Content production increase', note: 'Output growth when repeatable AI-assisted workflows replace manual bottlenecks.' },
  { value: '84%', label: 'Time reduction', note: 'Average drop in content cycle time across briefing, drafting, and adaptation.' },
  { value: '156%', label: 'Engagement improvement', note: 'Observed lift once optimization and personalization loops are active.' },
  { value: '$2.4M', label: 'Annual cost savings', note: 'Illustrative enterprise value from operational efficiency gains.' },
]

const roadmap = [
  {
    phase: 'Phase 1',
    title: 'Foundation (Weeks 1-4)',
    accent: 'border-blue-500 text-blue-600',
    note: 'Establish AI content infrastructure and team capabilities.',
    activities: ['AI tool evaluation and selection', 'Team training and onboarding', 'Content audit and baseline', 'Workflow design and testing'],
    metrics: ['Tool integration completed', 'Team certification achieved', 'Baseline metrics established', 'Pilot content produced'],
  },
  {
    phase: 'Phase 2',
    title: 'Automation (Weeks 5-12)',
    accent: 'border-indigo-500 text-indigo-600',
    note: 'Scale content production with AI automation systems.',
    activities: ['Automated workflow deployment', 'Content calendar optimization', 'Quality assurance systems', 'Performance monitoring setup'],
    metrics: ['200% production increase', 'Quality scores maintained', 'Efficiency gains measured', 'Team adaptation complete'],
  },
  {
    phase: 'Phase 3',
    title: 'Optimization (Weeks 13-24)',
    accent: 'border-violet-500 text-violet-600',
    note: 'Advanced optimization and performance enhancement.',
    activities: ['Advanced AI features deployment', 'Personalization implementation', 'Cross-channel optimization', 'ROI maximization strategies'],
    metrics: ['150% engagement improvement', '75% cost reduction achieved', 'ROI targets exceeded', 'Scaling capacity established'],
  },
]

const bestPractices = [
  {
    title: 'Quality control',
    accent: 'text-indigo-600',
    items: ['Maintain human oversight', 'Brand voice consistency', 'Fact-checking protocols', 'Quality scoring systems'],
  },
  {
    title: 'Performance tracking',
    accent: 'text-blue-600',
    items: ['Real-time analytics monitoring', 'Multi-channel attribution', 'ROI measurement frameworks', 'Continuous optimization cycles'],
  },
  {
    title: 'Scaling strategy',
    accent: 'text-violet-600',
    items: ['Modular system architecture', 'Team capacity planning', 'Technology stack evolution', 'Process standardization'],
  },
]

const relatedResources = [
  {
    href: '/ai-content-creation-automation-2026',
    title: 'Content Creation Automation',
    description: 'Automated content generation workflows for teams moving from experimentation to repeatable production.',
  },
  {
    href: '/ai-content-optimization-framework-2026',
    title: 'Content Optimization',
    description: 'AI-powered content performance enhancement and post-publication improvement loops.',
  },
  {
    href: '/ai-marketing-attribution-analysis-tool-2026',
    title: 'Marketing Attribution',
    description: 'Attribution analysis and optimization to connect content efforts to pipeline and revenue.',
  },
]

export default function AIContentMarketingStrategy() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-06"
        modifiedDate="2026-04-19"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_54%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Enterprise content marketing system
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                AI content marketing strategy,
                <span className="brand-gradient-text block">designed for scale, not experiments.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                This page turns the original enterprise framework into a clearer operating view: how to plan, create, distribute,
                measure, and scale AI-assisted content systems without losing control of quality or ROI.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#framework" className="btn-brand">
                  Explore the framework
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/ai-content-creation-automation-2026" className="btn-secondary">
                  Creation workflows
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {summaryCards.map((item) => (
                  <div key={item.label} className="page-card p-4 bg-white/90">
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">{item.label}</div>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6">
                <div className="page-card p-6 bg-white/95">
                  <div className="flex items-center justify-between mb-6 gap-4">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Quick navigation</div>
                      <div className="text-xl font-semibold text-slate-950">How to use this page</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Strategy first
                    </div>
                  </div>

                  <div className="space-y-3">
                    {quickNav.map((item) => (
                      <a key={item.href} href={item.href} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4 block">
                        <div className="font-semibold text-slate-950 mb-1">{item.title}</div>
                        <div className="text-sm text-slate-500">{item.note}</div>
                      </a>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50/70 px-4 py-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Use this page to sequence the program correctly: framework first, rollout second, attribution and optimization last.
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
        <section id="framework" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Framework</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              A complete AI content marketing loop,
              <span className="block brand-gradient-text">from planning to scale.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              The original page already covered the right phases. This migration keeps that logic but presents it as a single operating system
              for enterprise teams choosing where to automate, where to keep human review, and how to measure actual value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {frameworkCards.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="page-card-soft p-6">
                  <Icon className={`h-6 w-6 mb-4 ${card.accent}`} />
                  <h3 className="text-xl font-semibold text-slate-950 mb-4">{card.title}</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        <section id="workflow" className="page-card-glow p-1.5 mb-16 scroll-mt-28">
          <div className="page-card rounded-[2rem] p-8 md:p-10">
            <div className="max-w-3xl mb-8">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Workflow</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                AI-powered content operations,
                <span className="block brand-gradient-text">staged by execution reality.</span>
              </h2>
            </div>

            <div className="space-y-6">
              {workflowStages.map((stage) => (
                <div key={stage.step} className="page-card-soft p-6 md:p-7">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#635bff] text-sm font-semibold text-white">
                      {stage.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-950">{stage.title}</h3>
                      <p className="text-slate-600 mt-1">{stage.note}</p>
                    </div>
                  </div>

                  {stage.columns ? (
                    <div className="grid md:grid-cols-3 gap-4">
                      {stage.columns.map((column) => (
                        <div key={column.title} className={`${column.bg} rounded-3xl p-5`}>
                          <h4 className={`text-lg font-semibold mb-3 ${column.accent}`}>{column.title}</h4>
                          <ul className="space-y-2 text-sm text-slate-700">
                            {column.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-950 mb-4">{stage.leftTitle}</h4>
                        <div className="space-y-3">
                          {stage.leftItems.map(([title, note]) => (
                            <div key={title} className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                              <div className="font-semibold text-slate-950 mb-1">{title}</div>
                              <div className="text-sm text-slate-600">{note}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-slate-950 mb-4">{stage.rightTitle}</h4>
                        <div className="space-y-3">
                          {stage.rightItems.map(([title, note]) => (
                            <div key={title} className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                              <div className="font-semibold text-slate-950 mb-1">{title}</div>
                              <div className="text-sm text-slate-600">{note}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="roi" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
          <div className="flex items-start justify-between gap-6 flex-wrap mb-8">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">ROI Metrics</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">What the economics should look like.</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                These metrics are directional signals for executive planning. The value is not just higher output, but faster cycles, better engagement,
                and lower operating friction across channels.
              </p>
            </div>
            <Link href="/ai-roi-calculator" className="btn-secondary">
              Model ROI
            </Link>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {roiCards.map((card) => (
              <div key={card.label} className="page-card-soft p-6">
                <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-2">{card.value}</div>
                <div className="font-semibold text-slate-900 mb-2">{card.label}</div>
                <p className="text-sm text-slate-600 leading-relaxed">{card.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="roadmap" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Implementation Roadmap</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              A 24-week rollout,
              <span className="block brand-gradient-text">sequenced for operational adoption.</span>
            </h2>
          </div>

          <div className="space-y-5">
            {roadmap.map((phase) => (
              <div key={phase.phase} className={`border-l-4 ${phase.accent.split(' ')[0]} page-card-soft px-6 py-6`}>
                <div className={`text-sm uppercase tracking-[0.18em] mb-2 ${phase.accent.split(' ')[1]}`}>{phase.phase}</div>
                <h3 className="text-2xl font-semibold text-slate-950 mb-2">{phase.title}</h3>
                <p className="text-slate-600 mb-5">{phase.note}</p>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <div className="font-semibold text-slate-950 mb-3">Key activities</div>
                    <ul className="space-y-2 text-slate-600">
                      {phase.activities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-950 mb-3">Success metrics</div>
                    <ul className="space-y-2 text-slate-600">
                      {phase.metrics.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-16">
          {bestPractices.map((practice) => (
            <div key={practice.title} className="page-card p-7">
              <h3 className={`text-2xl font-semibold mb-4 ${practice.accent}`}>{practice.title}</h3>
              <ul className="space-y-2 text-slate-600">
                {practice.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="page-card-glow p-8 md:p-12 surface-muted mb-16">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Related planning</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Strategy is only useful
              <span className="block brand-gradient-text">if it connects to execution and attribution.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              The next pages deepen the creation layer, optimization layer, and revenue attribution layer so this strategy page becomes operational rather than aspirational.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          {relatedResources.map((resource) => (
            <Link key={resource.href} href={resource.href} className="page-card p-8 hover:-translate-y-0.5 transition-transform">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{resource.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{resource.description}</p>
              <div className="inline-flex items-center text-[#635bff] font-semibold">
                Open resource
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  )
}
