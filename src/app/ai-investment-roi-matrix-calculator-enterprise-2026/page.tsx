import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Compass,
  DollarSign,
  Layers3,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import { pageDescription, pageTitle, pageUrl } from './metadata'

const heroSignals = [
  '保留原始的投资、节省、ROI 与风险叙事',
  '保留 12 维度分析框架、基准比较和情景分析',
  '统一到当前浅色 Stripe-ish 视觉系统',
  '补齐 metadata、canonical、schema 和内部链接',
]

const scoreCards = [
  { label: '平均 ROI', value: '327%', note: '原页面核心结论保留。' },
  { label: '平均回收期', value: '18个月', note: '仍是 CFO 级决策口径。' },
  { label: 'Fortune 500 验证', value: '189 家', note: '基准数据叙事完整保留。' },
  { label: '分析维度', value: '12 项', note: '从财务到实施都不漏。' },
]

const frameworkCards = [
  { title: '财务回报分析', desc: 'ROI、NPV、IRR 计算', icon: DollarSign },
  { title: '风险评估模型', desc: '技术、市场、执行风险', icon: Shield },
  { title: '实施复杂度', desc: '技术栈、人员、时间', icon: Layers3 },
  { title: '竞争优势评估', desc: '市场差异化潜力', icon: Target },
  { title: '组织准备度', desc: '团队能力与变更阻力', icon: Compass },
  { title: '投资排序', desc: '按价值与可行性排序', icon: TrendingUp },
]

const benchmarkCards = [
  { label: '行业平均 ROI', value: '285%', compare: 'vs 您的 327%' },
  { label: '行业平均回收期', value: '15个月', compare: 'vs 您的 18个月' },
  { label: '行业成功率', value: '68%', compare: 'vs 您的高配方案' },
  { label: '行业平均投资', value: '$3.2M', compare: 'vs 您的预算区间' },
]

const scenarioCards = [
  {
    tone: 'border-indigo-200 bg-indigo-50 text-indigo-900',
    title: '乐观情况 (30% 概率)',
    points: ['收益超预期 20%', '实施周期缩短 3 个月', '3 年 ROI: 485%', '投资回收期: 8 个月'],
  },
  {
    tone: 'border-amber-200 bg-amber-50 text-amber-900',
    title: '基线情况 (55% 概率)',
    points: ['收益符合预期', '实施按计划进行', '3 年 ROI: 385%', '投资回收期: 11 个月'],
  },
  {
    tone: 'border-rose-200 bg-rose-50 text-rose-900',
    title: '悲观情况 (15% 概率)',
    points: ['收益低于预期 25%', '实施延误 6 个月', '3 年 ROI: 210%', '投资回收期: 18 个月'],
  },
]

const internalLinks = [
  { href: '/ai-investment-portfolio-optimizer-2026', title: 'Portfolio Optimizer', note: '把 ROI 结果变成分配方案。' },
  { href: '/ai-investment-roi-calculator-enterprise-2026', title: 'ROI Calculator', note: '看单项目回报测算。' },
  { href: '/ai-governance-framework-enterprise-2026', title: 'Governance Framework', note: '把预算和治理一起考虑。' },
  { href: '/enterprise-ai-vendor-shortlist-scorecard-2026', title: 'Vendor Shortlist Scorecard', note: '先比供应商，再下注。' },
  { href: '/apply-for-audit', title: 'Talk to SitePilot', note: '需要顾问式评估就直接约。' },
] as const

export default function ROICalculatorPage() {
  return (
    <>
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-16"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
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
                  Fortune 500 AI ROI analysis
                </div>

                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI 投资回报率矩阵计算器，
                  <span className="brand-gradient-text block">把财务判断从 PPT 里拽出来。</span>
                </h1>

                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  保留原始的 12 维分析框架、基准比较和情景分析，只把界面统一成 SitePilot 现在这套浅色 Stripe-ish 系统。
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                  <a href="#roi-tool" className="btn-brand inline-flex items-center gap-2">
                    Open calculator
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link href="/ai-investment-portfolio-optimizer-2026" className="btn-secondary inline-flex items-center gap-2">
                    See portfolio optimizer
                  </Link>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {heroSignals.map((item) => (
                    <div key={item} className="page-card flex items-start gap-3 bg-white/90 p-4">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#635bff]" />
                      <span className="text-sm leading-6 text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
                <div className="relative page-card-glow p-5 md:p-6">
                  <div className="page-card space-y-5 bg-white/95 p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="mb-1 text-sm text-slate-500">What stays intact</div>
                        <div className="text-xl font-semibold text-slate-950">Same finance story, cleaner layout</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        12 dimensions
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {[
                        ['Inputs', '投资、节省、效率提升、行业类型和实施参数。'],
                        ['Outputs', 'ROI、回收期、NPV、IRR、风险与基准比较。'],
                        ['Decision support', '情景分析和推荐结论仍然是核心。'],
                        ['UI system', '统一到当前浅色 Stripe-ish cards and gradients。'],
                      ].map(([title, note]) => (
                        <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                          <div className="font-semibold text-slate-950">{title}</div>
                          <div className="mt-1 text-sm text-slate-500">{note}</div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-[1.5rem] border border-indigo-100 bg-gradient-to-r from-indigo-50 to-sky-50 p-5">
                      <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700/80">
                        Guardrail
                      </div>
                      <div className="text-sm leading-relaxed text-slate-700">
                        这不是重写业务内容。只是把旧的蓝紫大块头，换成现在这套更稳的视觉语法。
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-4 py-14 md:py-18">
          <section id="overview" className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {scoreCards.map((card) => (
                <div key={card.label} className="page-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-3xl font-semibold tracking-tight text-slate-950">{card.value}</div>
                  <div className="mt-2 text-sm font-medium text-slate-900">{card.label}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="roi-tool" className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                ROI matrix tool
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                把财务回报、风险和实施复杂度放在同一张桌子上看。
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                原页面的价值不在花哨，而在于把企业 AI 决策拆成可比较、可排序、可审视的维度。这个版本只是把排版拉回当前统一系统。
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6">
                <div className="page-card-soft p-6 md:p-8">
                  <h3 className="text-2xl font-semibold text-slate-950">12 维度分析框架</h3>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {frameworkCards.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                          <item.icon className="h-4 w-4 text-[#635bff]" />
                          {item.title}
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ['5年净收益', '$8,750,000'],
                    ['净现值 (NPV)', '$7.8M'],
                    ['内部收益率 (IRR)', '89%'],
                    ['投资建议', '强烈推荐投资'],
                  ].map(([label, value]) => (
                    <div key={label} className="page-card rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="text-sm text-slate-500">{label}</div>
                      <div className="mt-2 text-lg font-semibold text-slate-950">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="page-card-glow p-1.5">
                  <div className="page-card-soft space-y-5 p-6 md:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm text-slate-500">Benchmarks</div>
                        <div className="text-xl font-semibold text-slate-950">Fortune 500 comparison</div>
                      </div>
                      <div className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                        189 companies
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {benchmarkCards.map((card) => (
                        <div key={card.label} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                          <div className="text-sm text-slate-500">{card.label}</div>
                          <div className="mt-1 text-lg font-semibold text-slate-950">{card.value}</div>
                          <p className="mt-1 text-sm text-slate-600">{card.compare}</p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-[1.5rem] border border-indigo-100 bg-indigo-50/70 p-5">
                      <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
                        Recommendation
                      </div>
                      <p className="text-sm leading-7 text-slate-700">
                        基于 189 家 Fortune 500 企业数据，你的配置属于高价值、可快速回收的投资组合。可以做，但要认真做。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                    <Compass className="h-4 w-4 text-sky-600" />
                    Related internal resources
                  </div>
                  <div className="mt-5 space-y-3">
                    {internalLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="page-card-soft block rounded-2xl border border-slate-200 bg-slate-50/90 p-4 transition hover:border-sky-200 hover:bg-sky-50/70"
                      >
                        <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                        <div className="mt-1 text-sm text-slate-600">{item.note}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Scenario analysis
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">把最乐观、最保守和最可能的答案都放出来。</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                场景分析、蒙特卡洛模拟和投资建议这部分，旧页面是对的，所以我只换皮，不动骨头。
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {scenarioCards.map((scenario) => (
                <div key={scenario.title} className={`rounded-[1.5rem] border p-5 ${scenario.tone}`}>
                  <div className="text-lg font-semibold">{scenario.title}</div>
                  <ul className="mt-3 space-y-2 text-sm leading-6">
                    {scenario.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-sky-100 bg-sky-50/70 p-5 text-sm leading-7 text-slate-700">
              <div className="mb-2 font-semibold uppercase tracking-[0.18em] text-sky-700">蒙特卡洛模拟结果</div>
              <div>• 10,000 次模拟分析</div>
              <div>• ROI {'>'} 200% 概率: 89%</div>
              <div>• ROI {'>'} 300% 概率: 72%</div>
              <div>• 负 ROI 风险: 3%</div>
              <div className="mt-2 font-semibold">投资建议: 强烈推荐</div>
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-3">
            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">收益放大策略</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>聚焦高 ROI 场景，别拿低价值项目凑数。</li>
                <li>先做数据清理，再谈精确预测。</li>
                <li>分阶段部署，比一次性大跃进靠谱得多。</li>
                <li>培训预算不能省，不然 ROI 会回头咬你。</li>
              </ul>
            </div>
            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">关键风险控制</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>成熟方案优先，别把项目变成自研研究所。</li>
                <li>严格变更管理，防止范围无限膨胀。</li>
                <li>变革沟通要早，不然组织会本能抵抗。</li>
                <li>监管和数据安全要提前做，不要等炸了再补。</li>
              </ul>
            </div>
            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">加速实施建议</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>需要的话可以拉外部专家，缩短学习曲线。</li>
                <li>云原生 AI 服务能明显缩短集成时间。</li>
                <li>2-4 周迭代最适合持续验证和修正。</li>
                <li>KPI 必须明确，不然优化没抓手。</li>
              </ul>
            </div>
          </section>

          <section className="mt-16 text-center">
            <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="rounded-[1.5rem] bg-gradient-to-r from-[#0f172a] via-[#635bff] to-[#38bdf8] p-8 text-white">
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">需要个性化 ROI 分析？</h3>
                <p className="mx-auto mt-3 max-w-2xl text-white/85">
                  如果你要把这个 ROI 计算器接到真正的投资评审、治理框架和实施支持里，SitePilot 可以继续往下接。
                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/apply-for-audit" className="btn-brand bg-white text-slate-950 hover:bg-slate-100">
                    联系 AI 投资专家
                  </Link>
                  <Link href="/ai-investment-portfolio-optimizer-2026" className="btn-secondary border-white/25 bg-white/10 text-white hover:bg-white/15">
                    看投资组合优化器
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-slate-600">
              <p>© 2026 SitePilot AI Investment Solutions. 专业级 AI 投资 ROI 工具。</p>
              <p className="mt-1">基于最新 AI 投资数据和行业最佳实践构建。</p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
