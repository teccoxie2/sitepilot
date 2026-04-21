import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  DollarSign,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI Transformation ROI Calculation Framework for Enterprises 2026 | SitePilot'
const pageDescription =
  'Enterprise AI transformation ROI should be measured across financial returns, operational improvements, strategic advantage, and human capital impact instead of pretending one headline savings number is enough.'
const pageUrl = 'https://sitepilot.co/ai-transformation-roi-calculation-framework-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI transformation ROI',
    'AI investment calculator',
    'enterprise AI ROI',
    'AI business value measurement',
    'AI ROI framework',
    'AI transformation metrics',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: 'Enterprise AI ROI framework covering financial, operational, strategic, and human-capital value.',
    type: 'article',
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: 'Comprehensive enterprise AI transformation ROI framework for 2026.',
  },
}

const heroStats = [
  { value: '$13.5T', label: 'Global AI economic impact by 2030' },
  { value: '156%', label: 'Average enterprise AI ROI' },
  { value: '67%', label: 'Organizations struggling with measurement' },
  { value: '24 months', label: 'Typical AI payback period' },
]

const frameworkSignals = [
  '只报一个 ROI 数字最省事，也最容易误导人。',
  'AI 投资值不值，得同时看现金回报、效率变化、战略位置和人力影响。',
  '如果 baseline 没立住，后面所有“提升”都可能只是幻觉。',
  '真正成熟的 ROI 框架，不是让汇报更好看，是让资源分配更狠更准。',
]

const pillars = [
  {
    title: 'Financial metrics',
    description: 'Direct cost savings, revenue generation, risk-adjusted returns, and cash-flow logic.',
  },
  {
    title: 'Operational value',
    description: 'Cycle time, throughput, quality, utilization, and process performance gains.',
  },
  {
    title: 'Strategic impact',
    description: 'Market position, innovation speed, differentiation, and option value creation.',
  },
  {
    title: 'Human capital',
    description: 'Productivity, retention, satisfaction, capability lift, and organizational agility.',
  },
]

const metricSections = [
  {
    title: '1. Financial ROI metrics',
    tone: 'border-indigo-100 bg-indigo-50/80',
    blocks: [
      'NPV、IRR、payback period 这些经典指标都要保留，别为了新潮把财务常识扔了。',
      'Direct savings、revenue generation、investment costs、risk adjustments 都必须进模型。',
      '时间跨度通常看 3-5 年，AI 项目如果只算第一年，判断很容易失真。',
    ],
  },
  {
    title: '2. Operational efficiency metrics',
    tone: 'border-sky-100 bg-sky-50/80',
    blocks: [
      'Cycle time、throughput、first-pass yield、defect reduction、SLA achievement 都是实打实的价值。',
      'Time savings 要乘 fully-loaded cost，不然你会把效率提升严重低估。',
      '质量提升不能只看返工成本，还得看客户影响和信誉损失。',
    ],
  },
  {
    title: '3. Strategic value metrics',
    tone: 'border-violet-100 bg-violet-50/80',
    blocks: [
      'Innovation acceleration、market expansion、competitive differentiation 这些东西虽然难算，但不是不能算。',
      'Market share impact、CLV improvement、option value、risk mitigation 都有可落地的量化路径。',
      '战略价值不进表，组织就会天然偏爱短期项目。这个偏差很常见。',
    ],
  },
  {
    title: '4. Human capital value',
    tone: 'border-amber-100 bg-amber-50/80',
    blocks: [
      '员工生产率、满意度、留存率和组织敏捷性，都是 AI 转型的关键账。',
      'Retention value 不能只看 HR 数据，要把 replacement cost 算进去。',
      'Training ROI 通常被低估得离谱，因为很多公司把能力建设当成纯成本。',
    ],
  },
]

const benchmarks = [
  ['Financial Services', '245%', '14', '380%', 'Risk assessment, fraud detection, algorithmic trading'],
  ['Manufacturing', '198%', '18', '325%', 'Predictive maintenance, quality control, supply chain optimization'],
  ['Retail & E-commerce', '167%', '16', '285%', 'Recommendation engines, inventory optimization, pricing'],
  ['Healthcare', '156%', '22', '270%', 'Diagnostic imaging, drug discovery, patient monitoring'],
  ['Telecommunications', '142%', '20', '235%', 'Network optimization, customer service, fraud detection'],
  ['Transportation & Logistics', '134%', '24', '220%', 'Route optimization, demand forecasting, autonomous systems'],
]

const roadmap = [
  {
    title: 'Baseline establishment',
    items: ['Current process mapping', 'Performance baseline metrics', 'Cost structure analysis', 'Stakeholder value definition'],
  },
  {
    title: 'ROI framework design',
    items: ['Measurement framework selection', 'KPI definition', 'Data collection strategy', 'Reporting structure design'],
  },
  {
    title: 'Measurement implementation',
    items: ['Data collection automation', 'Dashboard development', 'Tracking system deployment', 'Team training execution'],
  },
  {
    title: 'Optimization & scaling',
    items: ['Performance optimization', 'Continuous improvement', 'Scaling to new use cases', 'Strategic value realization'],
  },
]

export default function AITransformationROICalculationFramework2026Page() {
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
                  Enterprise AI ROI framework 2026
                </div>
                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI 转型 ROI 框架，
                  <span className="brand-gradient-text block">别再拿一个数字糊弄董事会。</span>
                </h1>
                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  Enterprise AI transformation ROI should be measured across financial returns, operational improvements, strategic advantage, and human capital impact instead of pretending one headline savings number is enough. 这页保留原来的框架、基准、roadmap 和 CTA，只把视觉统一到当前浅色 Stripe-ish 系统。
                </p>
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
                        <div className="mb-1 text-sm text-slate-500">Framework baseline</div>
                        <div className="text-xl font-semibold text-slate-950">四个硬判断</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        Multi-layer ROI
                      </div>
                    </div>
                    <div className="space-y-3">
                      {frameworkSignals.map((item) => (
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
          {pillars.map((pillar) => (
            <div key={pillar.title} className="page-card p-8">
              <h2 className="mb-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{pillar.title}</h2>
              <p className="leading-7 text-slate-600">{pillar.description}</p>
            </div>
          ))}
        </section>

        <section className="space-y-6 mb-16">
          {metricSections.map((section) => (
            <div key={section.title} className={`page-card border p-8 md:p-10 ${section.tone}`}>
              <h2 className="mb-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{section.title}</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {section.blocks.map((block) => (
                  <div key={block} className="rounded-2xl border border-white/70 bg-white/80 px-4 py-4 text-sm leading-7 text-slate-700">
                    {block}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-16 page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Industry benchmarks</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              行业基准不是答案，
              <span className="brand-gradient-text block">但能让你少说很多废话。</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              原页的 benchmark 表我保留了核心数字和行业说明。别把它当保证书，但它至少能给你的预期装上护栏。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] border-separate border-spacing-0 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
              <thead className="bg-slate-50 text-left text-sm text-slate-600">
                <tr>
                  <th className="px-5 py-4 font-semibold">Industry</th>
                  <th className="px-5 py-4 font-semibold">Avg. ROI</th>
                  <th className="px-5 py-4 font-semibold">Payback (Months)</th>
                  <th className="px-5 py-4 font-semibold">Top Quartile ROI</th>
                  <th className="px-5 py-4 font-semibold">Key AI Applications</th>
                </tr>
              </thead>
              <tbody>
                {benchmarks.map(([industry, roi, payback, top, use]) => (
                  <tr key={industry} className="border-t border-slate-200">
                    <td className="border-t border-slate-200 px-5 py-4 font-medium text-slate-950">{industry}</td>
                    <td className="border-t border-slate-200 px-5 py-4 text-indigo-700 font-semibold">{roi}</td>
                    <td className="border-t border-slate-200 px-5 py-4 text-slate-700">{payback}</td>
                    <td className="border-t border-slate-200 px-5 py-4 text-indigo-700 font-semibold">{top}</td>
                    <td className="border-t border-slate-200 px-5 py-4 text-sm text-slate-600">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Implementation roadmap</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              ROI 测量要落地，
              <span className="brand-gradient-text block">不是把公式贴进 PPT 就算完成。</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {roadmap.map((step, index) => (
              <div key={step.title} className="page-card p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50 text-lg font-semibold text-[#635bff]">
                  {index + 1}
                </div>
                <h3 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{step.title}</h3>
                <div className="space-y-3">
                  {step.items.map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-[#635bff]" />
                CTA
              </div>
              <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
                Maximize your AI transformation ROI
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                这页 CTA 的意思我保留了：如果你真要做 ROI 体系，最好别停在“我们感觉 AI 很有价值”。感觉不值钱，测量才值钱。
              </p>
            </div>
            <div className="space-y-4">
              <div className="page-card bg-slate-50/80 p-5">
                <div className="text-sm font-semibold text-slate-950">ROI assessment & framework</div>
                <div className="mt-2 text-sm text-slate-600">Complete ROI measurement framework design and baseline establishment</div>
                <div className="mt-2 text-sm text-[#635bff]">$35,000-75,000 • 4-week delivery</div>
              </div>
              <div className="page-card bg-slate-50/80 p-5">
                <div className="text-sm font-semibold text-slate-950">Full ROI optimization program</div>
                <div className="mt-2 text-sm text-slate-600">End-to-end ROI measurement, tracking and optimization implementation</div>
                <div className="mt-2 text-sm text-[#635bff]">$125,000-350,000 • 12-16 week program</div>
              </div>
              <Link href="/contact" className="btn-brand inline-flex items-center gap-2">
                Get your AI ROI assessment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
