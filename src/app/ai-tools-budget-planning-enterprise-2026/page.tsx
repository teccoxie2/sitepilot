import { readFileSync } from 'fs'
import { join } from 'path'
import type { Metadata } from 'next'
import Link from 'next/link'
import { marked } from 'marked'
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = '企业AI工具预算规划策略指南 2026版 | SitePilot'
const pageDescription =
  '基于1000+家企业数据的AI工具预算规划 framework，帮助企业实现最大化 ROI，避免年均 $680K 预算浪费。包含不同规模企业预算分配策略、ROI 计算方法和成本控制最佳实践。'
const pageUrl = 'https://sitepilot.co/ai-tools-budget-planning-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI工具预算',
    '企业AI投资',
    'ROI计算',
    '预算规划',
    'IT预算分配',
    'AI工具成本',
    '企业数字化预算',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: '企业AI工具预算规划策略指南 2026版',
    description: '科学的 AI 工具预算规划方法，帮助企业实现投资最大化回报。',
    type: 'article',
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: '企业AI工具预算规划策略指南 2026版',
    description: '科学的 AI 工具预算规划方法，帮助企业实现投资最大化回报。',
  },
}

marked.setOptions({ breaks: true, gfm: true })

const heroStats = [
  { value: '18-25%', label: 'IT预算中的 AI 工具占比' },
  { value: '47%', label: '2026 年预算增长趋势' },
  { value: '$680K', label: '年均可避免预算浪费' },
  { value: '12-18个月', label: '典型 ROI 回收周期' },
]

const planningSignals = [
  '先做工具审计，再做新增采购，不要让重复 license 吃预算。',
  '预算必须把培训、集成、维护和治理算进去，别只看订阅价。',
  'ROI 不是幻觉数字，要连到时间节省、质量提升和收入变化。',
  '预算规划要和风险、合规、使用率追踪一起设计，否则迟早失真。',
]

const budgetBands = [
  {
    title: '初创企业',
    team: '50-100 人',
    budget: '$25K-$50K / 年',
    split: [
      '内容创作工具 40%',
      '生产力工具 30%',
      '分析工具 20%',
      '其他 / 缓冲 10%',
    ],
    roi: '18 个月内实现 200% 回报',
  },
  {
    title: '中型企业',
    team: '500-1000 人',
    budget: '$150K-$400K / 年',
    split: [
      '企业级生产力平台 35%',
      '专业内容工具 25%',
      '数据分析与洞察 25%',
      '集成与安全 15%',
    ],
    roi: '12 个月内实现 150% 回报',
  },
  {
    title: '大型企业',
    team: '5000+ 人',
    budget: '$800K-$2.5M / 年',
    split: [
      '核心 AI 平台投资 40%',
      '部门特化工具 30%',
      '安全与合规 20%',
      '培训与支持 10%',
    ],
    roi: '8-12 个月内实现 300% 回报',
  },
]

const roiCards = [
  {
    title: '制造业',
    note: '2000 人企业',
    investment: '$450,000',
    returnValue: '$1,350,000',
    outcome: '生产效率 +15%，缺陷率 -78%',
  },
  {
    title: '金融服务',
    note: '5000 人企业',
    investment: '$800,000',
    returnValue: '$2,400,000',
    outcome: '客服成本 -40%，风险损失 -60%',
  },
  {
    title: '零售电商',
    note: '1200 人企业',
    investment: '$280,000',
    returnValue: '$980,000',
    outcome: '转化率 +25%，库存成本 -30%',
  },
]

const relatedLinks = [
  {
    href: '/ai-tools-cost-benefit-analysis-2026',
    title: 'AI 工具成本效益分析',
    description: '把预算规划和收益验证放到同一张桌子上看。',
  },
  {
    href: '/ai-tools-risk-assessment-enterprise-2026',
    title: 'AI 工具风险评估框架',
    description: '预算前看风险，避免把成本省成事故。',
  },
  {
    href: '/ai-tools-security-compliance-checklist-2026',
    title: '安全与合规检查清单',
    description: '采购和治理必须一起做，别后补。',
  },
]

export default function AIToolsBudgetPlanningPage() {
  const contentPath = join(process.cwd(), 'content', 'ai-tools-budget-planning-enterprise-2026.md')
  const fileContent = readFileSync(contentPath, 'utf-8')
  const htmlContent = marked.parse(fileContent) as string

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
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Enterprise AI budget planning 2026
                </div>

                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI 工具预算规划，
                  <span className="brand-gradient-text block">先把钱花明白，再谈转型。</span>
                </h1>

                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  企业 AI 工具预算规划要同时处理投资规模、功能重叠、培训与集成隐性成本、回收周期和治理要求。这个页面保留原有预算框架、ROI 逻辑和内部资源路径，只把表达方式统一到当前浅色 Stripe-ish 系统，不再像一页发光 PPT。谢天谢地。
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                  <Link href="/ai-tools-cost-benefit-analysis-2026" className="btn-brand inline-flex items-center gap-2">
                    查看成本效益分析
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/ai-tools" className="btn-secondary inline-flex items-center gap-2">
                    返回 AI tools hub
                  </Link>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
                  {heroStats.map((item) => (
                    <div key={item.label} className="page-card bg-white/90 p-4">
                      <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">{item.value}</div>
                      <div className="text-sm text-slate-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
                <div className="relative page-card-glow p-5 md:p-6">
                  <div className="page-card p-6 bg-white/95">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-sm text-slate-500 mb-1">Planning baseline</div>
                        <div className="text-xl font-semibold text-slate-950">预算设计的四个硬指标</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        可执行，不是口号
                      </div>
                    </div>

                    <div className="space-y-3">
                      {planningSignals.map((item) => (
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

        <section className="grid gap-6 md:grid-cols-3 mb-16">
          {budgetBands.map((band) => (
            <div key={band.title} className="page-card p-8">
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 mb-5">
                <Briefcase className="h-3.5 w-3.5 mr-2" />
                {band.team}
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-2">{band.title}</h2>
              <div className="text-3xl font-semibold tracking-[-0.04em] text-[#635bff] mb-5">{band.budget}</div>
              <div className="space-y-3 mb-6">
                {band.split.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 px-4 py-3 text-sm font-medium text-indigo-700">
                {band.roi}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">ROI benchmarks</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              预算好不好，
              <span className="brand-gradient-text block">最后要看回报，不看气氛。</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              原页面里的行业案例、投资金额和回收逻辑都保留。这里只把它们整理成更干净的决策卡片，让读的人一眼看懂预算规模、收益和结果变量。
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {roiCards.map((card) => (
              <div key={card.title} className="page-card p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#635bff]" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-slate-950">{card.title}</div>
                    <div className="text-sm text-slate-500">{card.note}</div>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-500">投资</span>
                    <span className="font-semibold text-slate-950">{card.investment}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-500">年度收益</span>
                    <span className="font-semibold text-indigo-700">{card.returnValue}</span>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm text-slate-600">
                  {card.outcome}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.03fr_0.97fr] mb-16">
          <div className="page-card p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">完整预算正文</h2>
            </div>
            <div
              className="prose prose-lg max-w-none
              prose-headings:text-slate-950 prose-headings:font-semibold
              prose-h1:text-4xl prose-h1:tracking-[-0.04em]
              prose-h2:text-2xl prose-h2:tracking-[-0.03em] prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:text-slate-900 prose-h3:mt-8 prose-h3:mb-3
              prose-h4:text-base prose-h4:text-slate-900 prose-h4:mt-6 prose-h4:mb-2
              prose-p:text-slate-600 prose-p:leading-8
              prose-strong:text-slate-950
              prose-a:text-[#635bff] hover:prose-a:text-[#4f46e5]
              prose-ul:text-slate-600 prose-ol:text-slate-600
              prose-li:my-1
              prose-blockquote:border-l-[#635bff] prose-blockquote:bg-indigo-50/50 prose-blockquote:rounded-r-xl prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:text-slate-700
              prose-code:text-[#635bff] prose-code:bg-indigo-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-slate-950 prose-pre:text-slate-100 prose-pre:border prose-pre:border-slate-800 prose-pre:rounded-2xl
              prose-table:block prose-table:overflow-x-auto prose-th:bg-slate-50 prose-th:text-slate-900 prose-td:text-slate-600 prose-th:border prose-td:border prose-th:border-slate-200 prose-td:border-slate-200"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>

          <div className="space-y-6">
            <div className="page-card p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#635bff]" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">实施提醒</h2>
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">隐性成本低估是最常见翻车点：培训、迁移、集成、支持都得单独算。</div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">预算治理需要跨部门机制，否则销售、市场、运营会各买各的，重叠一地鸡毛。</div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">季度 review 不能省，预算是动态模型，不是年初拍完照就不管了。</div>
              </div>
            </div>

            <div className="page-card p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-[#635bff]" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">相关内部资源</h2>
              </div>
              <div className="space-y-3">
                {relatedLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="page-card-soft block rounded-2xl border border-slate-200 bg-slate-50/90 p-4 transition hover:border-sky-200 hover:bg-sky-50/70">
                    <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                    <div className="mt-1 text-sm text-slate-600">{item.description}</div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="page-card-glow p-8 surface-muted">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-[#635bff]" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">下一步动作</h2>
              </div>
              <p className="text-slate-600 leading-7 mb-6">
                如果你正在做 AI 工具组合规划，先把当前 license、活跃使用率、部门重叠和预期节省时间列出来。没这四样，预算模型大概率就是漂亮废话。
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/ai-tools-cost-benefit-analysis-2026" className="btn-brand inline-flex items-center gap-2">
                  去做成本效益分析
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/ai-tools-risk-assessment-enterprise-2026" className="btn-secondary">
                  继续做风险评估
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
