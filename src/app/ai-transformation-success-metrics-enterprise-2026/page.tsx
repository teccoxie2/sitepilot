import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Compass,
  DollarSign,
  Gauge,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI Transformation Success Metrics & KPIs for Enterprise 2026 | SitePilot'
const pageDescription =
  'Comprehensive guide to measuring AI transformation success in enterprise environments. Essential KPIs, benchmarks, and ROI metrics for C-suite executives and transformation leaders.'
const pageUrl = 'https://sitepilot.co/ai-transformation-success-metrics-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI transformation metrics',
    'enterprise AI KPIs',
    'AI ROI measurement',
    'digital transformation benchmarks',
    'AI success indicators',
    'enterprise AI performance',
  ],
  openGraph: {
    title: 'AI Transformation Success Metrics & KPIs for Enterprise 2026',
    description:
      'Essential metrics and KPIs for measuring AI transformation success in enterprise environments. Data-driven insights for C-suite decision makers.',
    type: 'article',
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description:
      'Essential metrics and KPIs for measuring AI transformation success in enterprise environments.',
  },
  alternates: {
    canonical: pageUrl,
  },
}

const heroStats = [
  { value: '25', label: 'core KPIs across 5 categories' },
  { value: '67%', label: 'average ROI improvement with metric tracking' },
  { value: '45%', label: 'faster transformation timeline' },
  { value: '$2.3M', label: 'average annual cost optimization' },
]

const metricSignals = [
  '只报“AI 很成功”这种空话，没有任何管理价值。指标不到位，决策基本靠猜。',
  '真正有用的 success metrics，必须同时覆盖财务、运营、创新、采用率和风险。',
  '如果没有 baseline，后面所有 improvement stories 都可能只是自我感动。',
  'KPI 体系的作用不是做一张漂亮 dashboard，而是决定继续投、缩编，还是直接砍。',
]

const categoryCards = [
  {
    title: 'Financial impact',
    icon: DollarSign,
    points: [
      'TCO reduction target: 15-25% in 18 months',
      'Revenue impact target: 8-15% uplift attribution',
      'Operational savings target: $500K-$5M annually',
      'Risk-adjusted ROI and break-even timeline stay in scope',
    ],
  },
  {
    title: 'Operational excellence',
    icon: Gauge,
    points: [
      'Automation rate: 60-85%',
      'Processing time reduction: 40-70%',
      'Error rate decrease: 80-95%',
      'System uptime and data quality remain core measures',
    ],
  },
  {
    title: 'Innovation & growth',
    icon: TrendingUp,
    points: [
      'Time-to-market improvement: 50-70%',
      'Feature cycle compression: 40-60%',
      '3-5x more ideas in development pipeline',
      'Market-share and new-revenue signals still matter',
    ],
  },
  {
    title: 'People & adoption',
    icon: Users,
    points: [
      'Stakeholder satisfaction increase: 89%',
      'Training completion and capability lift must be tracked',
      'Adoption by team and workflow determines real ROI',
      'Change resistance is a metric problem, not just a comms problem',
    ],
  },
]

const phaseCards = [
  {
    phase: 'Phase 1',
    title: 'Foundation · Months 1-6',
    tone: 'border-sky-100 bg-sky-50/80',
    items: [
      'Establish baseline metrics and data infrastructure',
      'Track pilot ROI and early integration success',
      'Measure training completion and team productivity',
      'Lock reporting cadence before scale begins',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Scale · Months 7-12',
    tone: 'border-indigo-100 bg-indigo-50/80',
    items: [
      'Department-wide deployment success rates',
      'Process efficiency and cost-savings realization',
      'Customer satisfaction and retention impact',
      'Benchmark unit economics across business functions',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Optimize · Months 13-18',
    tone: 'border-violet-100 bg-violet-50/80',
    items: [
      'Enterprise-wide performance and utilization metrics',
      'Advanced capability usage and innovation output',
      'Strategic goal alignment and market impact',
      'Resource reallocation based on proven winners',
    ],
  },
]

const tools = [
  {
    title: 'Analytics platforms',
    items: ['Tableau / Power BI', 'Google Analytics', 'Salesforce Analytics', 'Azure Monitor'],
  },
  {
    title: 'AI monitoring',
    items: ['MLflow', 'Weights & Biases', 'Datadog', 'Evidently AI'],
  },
  {
    title: 'Business intelligence',
    items: ['SAP Analytics Cloud', 'IBM Cognos', 'Qlik Sense', 'Looker'],
  },
]

const benchmarkRows = [
  ['ROI achievement', '50-100%', '150-250%', '300-450%', '500%+'],
  ['Implementation speed', '24-36 months', '18-24 months', '12-18 months', '6-12 months'],
  ['Cost reduction', '5-10%', '15-25%', '30-45%', '50%+'],
  ['Productivity gains', '10-20%', '25-40%', '50-75%', '100%+'],
  ['Employee satisfaction', '0-5%', '10-15%', '20-30%', '35%+'],
]

const actionPlan = [
  {
    title: 'Days 1-30 · Foundation',
    items: [
      'Establish baseline metrics and collection infrastructure',
      'Deploy analytics and monitoring tools',
      'Train the measurement team',
      'Create executive dashboard templates',
    ],
  },
  {
    title: 'Days 31-60 · Implementation',
    items: [
      'Launch pilot tracking and measurement',
      'Begin automated reporting',
      'Run first stakeholder review',
      'Tighten definitions and eliminate noisy metrics',
    ],
  },
  {
    title: 'Days 61-90 · Optimization',
    items: [
      'Analyze trends and improvement opportunities',
      'Expand scope to additional initiatives',
      'Present a 90-day success report',
      'Plan the next measurement phase with hard targets',
    ],
  },
]

const relatedLinks = [
  {
    href: '/ai-transformation-roi-calculation-framework-2026',
    title: 'ROI Calculation Framework',
    description: 'Financial framework for AI transformation budgeting and value measurement.',
  },
  {
    href: '/ai-governance-framework-enterprise-2026',
    title: 'Governance Framework',
    description: 'Enterprise-grade AI governance, risk assessment, and accountability structure.',
  },
  {
    href: '/enterprise-ai-vendor-shortlist-scorecard-2026',
    title: 'Vendor Shortlist Scorecard',
    description: 'A practical scorecard for enterprise AI selection and transformation planning.',
  },
]

export default function AITransformationSuccessMetrics() {
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
        <div className="absolute inset-x-0 top-[34rem] h-[34rem] bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.05),transparent_24%),radial-gradient(circle_at_78%_22%,rgba(99,91,255,0.05),transparent_22%),radial-gradient(circle_at_54%_82%,rgba(251,191,36,0.05),transparent_28%)]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Enterprise AI success metrics 2026
                </div>
                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI 转型 KPI，
                  <span className="brand-gradient-text block">不是汇报装饰品，是生死线。</span>
                </h1>
                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  Comprehensive framework for measuring and optimizing AI transformation success in enterprise environments. 这页保留原来的 KPI 分类、阶段框架、行业基准、90 天行动计划和内部链接，只把视觉系统统一到当前浅色 Stripe-ish 风格。
                </p>
                <div className="mb-10 flex flex-wrap gap-3">
                  <a href="#benchmarks" className="btn-brand inline-flex items-center gap-2">
                    查看行业基准
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
                    获取咨询
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
                        <div className="mb-1 text-sm text-slate-500">Measurement discipline</div>
                        <div className="text-xl font-semibold text-slate-950">四个硬判断</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        Metrics first
                      </div>
                    </div>
                    <div className="space-y-3">
                      {metricSignals.map((item) => (
                        <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                            <p className="text-sm leading-6 text-slate-600">{item}</p>
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

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-16">
          {categoryCards.map((card) => {
            const Icon = card.icon
            return (
              <div key={card.title} className="page-card p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                  <Icon className="h-5 w-5 text-[#635bff]" />
                </div>
                <h2 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{card.title}</h2>
                <div className="space-y-3">
                  {card.points.map((point) => (
                    <div key={point} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm leading-6 text-slate-700">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Phase-based measurement</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              AI 转型分阶段评估，
              <span className="brand-gradient-text block">别拿同一把尺子量所有阶段。</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              原页面的三阶段实施逻辑保留不动，只是换成更清晰的决策卡片。不同阶段看不同指标，这不是讲究，是常识。
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {phaseCards.map((card) => (
              <div key={card.title} className={`page-card border p-8 ${card.tone}`}>
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{card.phase}</div>
                <h3 className="mb-5 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{card.title}</h3>
                <div className="space-y-3">
                  {card.items.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm leading-6 text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3 mb-16">
          {tools.map((group) => (
            <div key={group.title} className="page-card p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                  <BarChart3 className="h-5 w-5 text-[#635bff]" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">{group.title}</h2>
              </div>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="benchmarks" className="mb-16 page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Industry success benchmarks</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Benchmark 不是护身符，
              <span className="brand-gradient-text block">但能防你胡扯。</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              这里保留原页面的 benchmark 分层：laggards、average、leaders、best practice target。你至少能知道自己是在发力，还是在自欺欺人。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[920px] border-separate border-spacing-0 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
              <thead className="bg-slate-50 text-left text-sm text-slate-600">
                <tr>
                  <th className="px-5 py-4 font-semibold">Metric category</th>
                  <th className="px-5 py-4 font-semibold">Industry laggards</th>
                  <th className="px-5 py-4 font-semibold">Industry average</th>
                  <th className="px-5 py-4 font-semibold">Industry leaders</th>
                  <th className="px-5 py-4 font-semibold">Best practice target</th>
                </tr>
              </thead>
              <tbody>
                {benchmarkRows.map(([name, laggards, average, leaders, target], index) => (
                  <tr key={name} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50/45'}>
                    <td className="border-t border-slate-200 px-5 py-4 font-medium text-slate-950">{name}</td>
                    <td className="border-t border-slate-200 px-5 py-4 text-rose-700">{laggards}</td>
                    <td className="border-t border-slate-200 px-5 py-4 text-amber-700">{average}</td>
                    <td className="border-t border-slate-200 px-5 py-4 text-indigo-700">{leaders}</td>
                    <td className="border-t border-slate-200 px-5 py-4 font-semibold text-indigo-700">{target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">90-day action plan</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              先跑 90 天，
              <span className="brand-gradient-text block">别一上来就幻想永久真理。</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {actionPlan.map((block, index) => (
              <div key={block.title} className="page-card p-8">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50 text-lg font-semibold text-[#635bff]">
                    {index + 1}
                  </div>
                  {index === 0 && <Compass className="h-5 w-5 text-slate-400" />}
                  {index === 1 && <Target className="h-5 w-5 text-slate-400" />}
                  {index === 2 && <TrendingUp className="h-5 w-5 text-slate-400" />}
                </div>
                <h3 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{block.title}</h3>
                <div className="space-y-3">
                  {block.items.map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm leading-6 text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Related enterprise resources</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              继续往下做，
              <span className="brand-gradient-text block">别把这页当终点。</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedLinks.map((item) => (
              <Link key={item.href} href={item.href} className="page-card group p-8 transition-transform duration-200 hover:-translate-y-1">
                <h3 className="mb-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{item.title}</h3>
                <p className="mb-5 leading-7 text-slate-600">{item.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#635bff]">
                  Open resource
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Advisory CTA
              </div>
              <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
                Ready to measure your AI transformation success?
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                原页 CTA 的意思保留：要么建立一套真能指导投资决策的 metrics framework，要么继续被漂亮口号骗。二选一，没中间地带。
              </p>
            </div>
            <div className="space-y-4">
              <div className="page-card bg-slate-50/80 p-5">
                <div className="text-sm font-semibold text-slate-950">Metrics implementation toolkit</div>
                <div className="mt-2 text-sm text-slate-600">KPI architecture, dashboard design, baseline setup, and measurement cadence.</div>
                <div className="mt-2 text-sm text-[#635bff]">For C-suite, transformation leads, and PMO teams</div>
              </div>
              <a
                href="mailto:info@sitepilot.co?subject=AI Transformation Metrics Consultation"
                className="btn-brand inline-flex items-center gap-2"
              >
                Get free consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
