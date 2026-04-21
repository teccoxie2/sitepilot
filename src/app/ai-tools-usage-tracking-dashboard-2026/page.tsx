import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  LayoutDashboard,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI工具使用率追踪仪表板 2026 | SitePilot'
const pageDescription =
  '企业 AI 工具使用率追踪应该同时衡量采用率、成本、ROI、功能重叠和告警优先级，否则预算优化只会停在 PPT 里。这个 2026 仪表板页面保留原有案例、ROI 结果、实施方案与内部链接，只统一到当前浅色 Stripe-ish UI。'
const pageUrl = 'https://sitepilot.co/ai-tools-usage-tracking-dashboard-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    '企业AI工具追踪',
    '使用率监控',
    '成本优化仪表板',
    'AI投资ROI',
    '企业级工具管理',
    '预算优化',
    '使用率分析',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: '企业级 AI 工具使用率追踪页面，覆盖采用率、成本浪费、预警等级、案例 ROI 和实施路径。',
    type: 'article',
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: 'AI 工具使用率追踪仪表板：保留原有 ROI 与实施逻辑，只统一到当前浅色 Stripe-ish UI。',
  },
}

const heroStats = [
  { value: '87%', label: '企业无法准确衡量 AI 工具 ROI' },
  { value: '44%', label: '平均预算节省空间' },
  { value: '467%', label: '第一年平均投资回报率' },
  { value: '3.2个月', label: '平均投资回收周期' },
]

const dashboardSignals = [
  '没有使用率数据，所谓“工具组合优化”通常只是拍脑袋裁预算。',
  '功能重叠不追踪，企业会同时给三套相似工具付钱，还以为自己很数字化。',
  '追踪看板不是为了好看，是为了让取消、整合、培训和扩容有证据。',
  '如果上线后没人用，再便宜的工具也是贵的。这个道理很残酷，但也很简单。',
]

const problemCards = [
  {
    title: '37% 预算浪费',
    description: '平均使用率只有 31%，功能重叠和闲置 license 把钱吞得很安静。',
    icon: AlertTriangle,
  },
  {
    title: '缺乏数据支撑',
    description: '87% 企业无法准确量化工具的真实采用率、ROI 和跨团队使用深度。',
    icon: BarChart3,
  },
  {
    title: '隐性成本高昂',
    description: '培训、集成、维护等隐性成本平均 $2,400 / 工具 / 年，常常没人算。',
    icon: Shield,
  },
]

const trackingMatrix = [
  {
    title: '高使用率工具',
    range: '>70%',
    note: '保留并扩大范围，检查是否值得升级许可或做更深集成。',
    tone: 'border-indigo-100 bg-indigo-50/80 text-indigo-800',
  },
  {
    title: '中使用率工具',
    range: '30-70%',
    note: '先优化培训、模板和工作流，再决定砍不砍。',
    tone: 'border-amber-100 bg-amber-50/80 text-amber-800',
  },
  {
    title: '低使用率工具',
    range: '<30%',
    note: '优先评估替换、整合或取消订阅。别继续养着。',
    tone: 'border-rose-100 bg-rose-50/80 text-rose-800',
  },
]

const alertLevels = [
  {
    title: '高风险',
    note: '使用率 <20% + 高成本 → 立即行动',
    tone: 'border-rose-100 bg-rose-50/80 text-rose-800',
  },
  {
    title: '中风险',
    note: '使用率 20-50% + 中等成本 → 制定优化计划',
    tone: 'border-amber-100 bg-amber-50/80 text-amber-800',
  },
  {
    title: '低风险',
    note: '使用率 >50% + 成本合理 → 维持并持续监控',
    tone: 'border-indigo-100 bg-indigo-50/80 text-indigo-800',
  },
]

const beforeItems = [
  '23 个 AI 工具订阅，年度成本 $127,000',
  '平均使用率 31%，大量功能重叠',
  '培训成本 $18,000 / 年，员工困惑度高',
  'IT 维护工时每月 120 小时',
]

const afterItems = [
  '9 个核心工具，年度成本 $71,000（节省 44%）',
  '平均使用率 78%，功能更集中',
  '培训成本 $6,000 / 年，满意度 8.7 / 10',
  'IT 维护工时每月 45 小时',
]

const serviceCards = [
  {
    title: '30天免费试用',
    price: '$0',
    note: '限时免费',
    features: ['完整仪表板体验', '基础实施指导', '使用率分析报告', '初步优化建议'],
    cta: '开始免费试用',
    href: '/ai-roi-calculator',
    featured: false,
  },
  {
    title: '企业级完整实施',
    price: '$15,000 - $50,000',
    note: '根据企业规模定价',
    features: ['6 个月实施支持', '定制追踪指标设计', '团队培训与变革管理', '季度优化 review'],
    cta: '预约企业咨询',
    href: '/ai-roi-calculator',
    featured: true,
  },
]

export default function AIToolsUsageTrackingDashboardPage() {
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
        <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Enterprise AI usage tracking 2026
                </div>

                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI 工具使用率追踪，
                  <span className="brand-gradient-text block">别再拿感觉冒充 ROI。</span>
                </h1>

                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  企业 AI 工具使用率追踪应该同时衡量采用率、成本、ROI、功能重叠和告警优先级，否则预算优化只会停在汇报材料里。这个页面保留原有案例、ROI 结果、实施方案和内部链接逻辑，只把视觉统一到当前浅色 Stripe-ish 系统。
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                  <Link href="/ai-roi-calculator" className="btn-brand inline-flex items-center gap-2">
                    免费评估 ROI
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="#case-study" className="btn-secondary inline-flex items-center gap-2">
                    查看案例研究
                  </a>
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
                        <div className="mb-1 text-sm text-slate-500">Dashboard logic</div>
                        <div className="text-xl font-semibold text-slate-950">四个硬判断</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        数据先于感觉
                      </div>
                    </div>

                    <div className="space-y-3">
                      {dashboardSignals.map((item) => (
                        <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#635bff]" />
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

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Problem framing</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              追踪不是锦上添花，
              <span className="brand-gradient-text block">而是预算治理的起点。</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              原页面的问题陈述、研究数字和优化方向都保留。这里只把它们整理成更清楚的决策卡片，不再搞那种“企业蓝渐变万岁”的老派视觉轰炸。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {problemCards.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="page-card p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                    <Icon className="h-5 w-5 text-[#635bff]" />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{card.title}</h3>
                  <p className="leading-7 text-slate-600">{card.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2 mb-16">
          <div className="page-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                <Activity className="h-5 w-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">使用率监控矩阵</h2>
            </div>
            <div className="space-y-4">
              {trackingMatrix.map((item) => (
                <div key={item.title} className={`rounded-2xl border px-4 py-4 ${item.tone}`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="mt-1 text-sm opacity-80">{item.note}</div>
                    </div>
                    <div className="shrink-0 rounded-full border border-current/15 bg-white/60 px-3 py-1 text-xs font-semibold">
                      {item.range}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="page-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                <AlertTriangle className="h-5 w-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">智能预警系统</h2>
            </div>
            <div className="space-y-4">
              {alertLevels.map((item) => (
                <div key={item.title} className={`rounded-2xl border px-4 py-4 ${item.tone}`}>
                  <div className="font-semibold">{item.title}</div>
                  <div className="mt-1 text-sm opacity-80">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="case-study" className="mb-16 scroll-mt-28">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Case study</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              500 人公司优化案例，
              <span className="brand-gradient-text block">从 23 个工具收缩到 9 个核心工具。</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              这页最值钱的地方不是口号，是前后对比：成本、使用率、培训费用、维护工时都给了。很好，这才像能拿去做决策的页面。
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 mb-6">
            <div className="page-card rounded-[1.8rem] border border-rose-100 bg-white p-8">
              <div className="mb-6 inline-flex rounded-full border border-rose-100 bg-rose-50/80 px-3 py-1 text-xs font-semibold text-rose-700">
                实施前状况
              </div>
              <div className="space-y-3">
                {beforeItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm text-slate-700">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="page-card rounded-[1.8rem] border border-indigo-100 bg-white p-8">
              <div className="mb-6 inline-flex rounded-full border border-indigo-100 bg-indigo-50/80 px-3 py-1 text-xs font-semibold text-indigo-700">
                6 个月后结果
              </div>
              <div className="space-y-3">
                {afterItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm text-slate-700">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#635bff]" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                ['467%', '总投资回报率（第一年）'],
                ['3.2个月', '投资回收期'],
                ['$84,000', '年度净收益'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-center">
                  <div className="mb-2 text-4xl font-semibold tracking-[-0.04em] text-slate-950">{value}</div>
                  <div className="text-sm text-slate-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] mb-16">
          <div className="page-card-glow p-8 md:p-12 surface-muted">
            <div className="max-w-3xl">
              <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">ROI prompt</div>
              <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
                要评估追踪看板值不值，
                <span className="brand-gradient-text block">先把自己的工具账本摊开。</span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                原页面这里是 ROI 计算器 CTA。我保留了这条路径，因为这很合理：看完追踪逻辑之后，下一步就该量化你自己的节省空间，而不是继续开会抒情。
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                {[
                  ['10-50人', '小型企业'],
                  ['50-200人', '中型企业'],
                  ['200+人', '大型企业'],
                  ['44%', '平均节省率'],
                ].map(([value, label]) => (
                  <div key={label} className="page-card bg-white/90 p-4 text-center">
                    <div className="mb-1 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{value}</div>
                    <div className="text-sm text-slate-600">{label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/ai-roi-calculator" className="btn-brand inline-flex items-center gap-2">
                  免费计算 ROI
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/ai-tools-cost-optimization-enterprise-2026" className="btn-secondary">
                  查看成本优化指南
                </Link>
              </div>
            </div>
          </div>

          <div className="page-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                <LayoutDashboard className="h-5 w-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">相关路径</h2>
            </div>
            <div className="space-y-3">
              {[
                {
                  href: '/ai-roi-calculator',
                  title: 'AI ROI 计算器',
                  description: '把使用率、成本和回收周期放进同一套模型。',
                },
                {
                  href: '/ai-tools-cost-optimization-enterprise-2026',
                  title: 'AI 工具成本优化指南',
                  description: '追踪发现问题，优化负责把钱省下来。',
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="page-card-soft block rounded-2xl border border-slate-200 bg-slate-50/90 p-4 transition hover:border-sky-200 hover:bg-sky-50/70"
                >
                  <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{item.description}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Implementation options</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              实施路径要分层，
              <span className="brand-gradient-text block">不是所有团队都该一上来就买全套。</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              原页面给了免费试用和企业实施两档服务。这个结构保留，因为它符合实际：先验证，再扩展，别上来就把流程和预算一起炸飞。
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className={`page-card relative p-8 ${card.featured ? 'border-indigo-200 shadow-[0_24px_80px_-32px_rgba(99,91,255,0.30)]' : ''}`}
              >
                {card.featured ? (
                  <div className="absolute -top-3 left-8 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    推荐方案
                  </div>
                ) : null}
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{card.title}</h3>
                  <div className="text-lg font-semibold text-[#635bff]">{card.price}</div>
                  <div className="mt-1 text-sm text-slate-500">{card.note}</div>
                </div>
                <div className="mb-8 space-y-3">
                  {card.features.map((feature) => (
                    <div key={feature} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm text-slate-700">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#635bff]" />
                        <span>{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href={card.href}
                  className={card.featured ? 'btn-brand inline-flex items-center gap-2' : 'btn-secondary inline-flex items-center gap-2'}
                >
                  {card.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-[#635bff]" />
                Final CTA
              </div>
              <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
                别让 37% 的 AI 预算继续蒸发。
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                基于 $25,000 投资研究和 500 家企业实践验证的优化逻辑都还在。现在这页终于也长得像同一个产品家族里的成员了，不再像从 2023 年的 B2B 模板库里爬出来的。
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/ai-roi-calculator" className="btn-brand inline-flex items-center gap-2">
                免费评估 ROI
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/ai-tools-cost-optimization-enterprise-2026" className="btn-secondary">
                查看完整成本优化指南
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
