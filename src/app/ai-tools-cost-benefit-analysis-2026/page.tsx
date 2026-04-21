import fs from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import {
  ArrowRight,
  BarChart3,
  Calculator,
  CheckCircle2,
  Coins,
  Gauge,
  Shield,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI工具成本效益分析：中小企业智能投资指南2026年 - SitePilot'
const pageDescription =
  '基于 $25,000 真实投资的 AI 工具成本效益深度分析。为中小企业提供科学的 AI 工具投资策略、ROI 计算方法、风险评估框架。500+ 企业调研数据，78 个工具测试结果，助您避坑并实现 245% 平均 ROI 提升。'
const pageUrl = 'https://sitepilot.co/ai-tools-cost-benefit-analysis-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI工具投资',
    '成本效益分析',
    'ROI计算',
    '中小企业AI',
    '生产力工具',
    '人工智能预算',
    'AI工具选择',
    '投资回报率',
    '企业数字化转型',
    'AI工具评估',
  ],
  openGraph: {
    title: 'AI工具成本效益分析：中小企业智能投资指南2026',
    description: '$25,000真实投资测试78个AI工具，为中小企业提供科学投资策略。500+企业调研，平均ROI提升245%。',
    type: 'article',
    url: pageUrl,
    images: [
      {
        url: '/images/ai-cost-benefit-analysis-2026-og.png',
        width: 1200,
        height: 630,
        alt: 'AI工具成本效益分析2026 - SitePilot专业指南',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI工具成本效益分析：中小企业智能投资指南2026',
    description: '$25,000真实投资测试结果：78个AI工具深度分析，平均ROI提升245%',
    images: ['/images/ai-cost-benefit-analysis-2026-twitter.png'],
    creator: '@sitepilot',
  },
  alternates: {
    canonical: pageUrl,
  },
}

const heroStats = [
  { value: '78', label: '工具深度测试' },
  { value: '500+', label: '企业调研样本' },
  { value: '245%', label: '平均 ROI 提升' },
  { value: '18个月', label: '投资回报跟踪' },
]

const evaluationSignals = [
  '别只看月费，TCO 还包括培训、集成、维护和机会成本。',
  'ROI 要连到时间节省、收入提升和成本压缩，不要拿感觉充数。',
  '高价值低成本工具优先，低价值高成本工具该砍就砍。',
  'AI 投资是组合管理，不是看到新工具就手痒下单。',
]

const investmentBands = [
  {
    title: '微型企业',
    range: '1-5 人 · $100-$300 / 月',
    note: '先用低成本、高确定性的核心组合把效率抬起来。',
    roi: '预期 ROI 312%',
  },
  {
    title: '小型企业',
    range: '6-25 人 · $500-$1500 / 月',
    note: '重点放在工作流整合、团队协同和跨部门使用深度。',
    roi: '预期 ROI 425%',
  },
  {
    title: '中型企业',
    range: '26-100 人 · $2000-$8000 / 月',
    note: '平台级能力、数据分析和部门协作会开始主导总回报。',
    roi: '预期 ROI 380%',
  },
]

const frameworkCards = [
  {
    title: '高价值 / 低成本',
    tone: 'indigo',
    note: '优先投资，马上部署，快速扩大。',
  },
  {
    title: '高价值 / 高成本',
    tone: 'indigo',
    note: '战略投资，分阶段推进，培训别省。',
  },
  {
    title: '低价值 / 低成本',
    tone: 'amber',
    note: '可小规模试点，但别误会它是核心引擎。',
  },
  {
    title: '低价值 / 高成本',
    tone: 'rose',
    note: '能不买就别买，典型预算黑洞。',
  },
]

const relatedLinks = [
  {
    href: '/ai-roi-calculator',
    title: 'ROI 计算器',
    description: '把这页的判断逻辑变成可量化输入。',
  },
  {
    href: '/best-ai-tools-small-business-2026',
    title: '中小企业 AI 工具推荐',
    description: '看哪些工具值得进 shortlist。',
  },
  {
    href: '/ai-tools-budget-planning-enterprise-2026',
    title: '预算规划框架',
    description: '先排钱，再决定工具栈。',
  },
  {
    href: '/ai-tools-risk-assessment-enterprise-2026',
    title: '风险评估框架',
    description: '收益要和风险一起看，不然容易自嗨。',
  },
]

function toneClass(tone: string) {
  switch (tone) {
    case 'indigo':
      return 'border-indigo-100 bg-indigo-50/70 text-indigo-800'
    case 'amber':
      return 'border-amber-100 bg-amber-50/70 text-amber-800'
    default:
      return 'border-rose-100 bg-rose-50/70 text-rose-800'
  }
}

export default function AICostBenefitAnalysisPage() {
  const filePath = path.join(process.cwd(), 'content', 'ai-tools-cost-benefit-analysis-2026.md')
  const fileContent = fs.readFileSync(filePath, 'utf8')

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
        <div className="absolute inset-x-0 top-[34rem] h-[34rem] bg-[radial-gradient(circle_at_18%_18%,rgba(99,91,255,0.05),transparent_24%),radial-gradient(circle_at_78%_22%,rgba(14,165,233,0.05),transparent_22%),radial-gradient(circle_at_54%_82%,rgba(244,114,182,0.04),transparent_28%)]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  AI investment analysis 2026
                </div>

                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI 工具成本效益分析，
                  <span className="brand-gradient-text block">别把预算烧成演示效果。</span>
                </h1>

                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  这页保留原来的 78 个工具测试、500+ 企业调研、ROI 逻辑和内部链接，只把界面统一到当前浅色 Stripe-ish 系统。核心意思没变：AI 工具采购最怕的不是贵，而是贵得没产出。
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                  <Link href="/ai-roi-calculator" className="btn-brand inline-flex items-center gap-2">
                    打开 ROI 计算器
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/ai-tools-budget-planning-enterprise-2026" className="btn-secondary inline-flex items-center gap-2">
                    查看预算规划
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
                        <div className="text-sm text-slate-500 mb-1">Evaluation frame</div>
                        <div className="text-xl font-semibold text-slate-950">四个判断动作</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        先算账，再选型
                      </div>
                    </div>

                    <div className="space-y-3">
                      {evaluationSignals.map((item) => (
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
          {investmentBands.map((band) => (
            <div key={band.title} className="page-card p-8">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-5">
                <Coins className="w-5 h-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-2">{band.title}</h2>
              <div className="text-sm font-medium text-slate-500 mb-4">{band.range}</div>
              <p className="text-slate-600 leading-7 mb-5">{band.note}</p>
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 px-4 py-3 text-sm font-medium text-indigo-700">
                {band.roi}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Investment framework</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              成本效益判断，
              <span className="brand-gradient-text block">先把工具丢进正确象限。</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              原文的四象限模型很有用，这里直接保留。高价值低成本先上，高价值高成本分阶段上，低价值高成本就别硬上。就这么简单。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {frameworkCards.map((card) => (
              <div key={card.title} className="page-card p-6">
                <div className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold mb-4 ${toneClass(card.tone)}`}>
                  {card.title}
                </div>
                <p className="text-sm leading-7 text-slate-600">{card.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.03fr_0.97fr] mb-16">
          <div className="page-card p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">完整分析正文</h2>
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
            >
              <ReactMarkdown>{fileContent}</ReactMarkdown>
            </div>
          </div>

          <div className="space-y-6">
            <div className="page-card p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                  <Gauge className="w-5 h-5 text-[#635bff]" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">快速判断</h2>
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">如果订阅费很低，但团队根本不用，它依然是浪费。</div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">如果工具很贵，但真能吃掉大量重复劳动，它可能反而最值钱。</div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">别把“AI”当 bonus point。能落到收入、速度、准确率才算数。</div>
              </div>
            </div>

            <div className="page-card p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#635bff]" />
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
                  <TrendingUp className="w-5 h-5 text-[#635bff]" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">下一步</h2>
              </div>
              <p className="text-slate-600 leading-7 mb-6">
                看完这页，最合理的动作不是继续收藏页面，而是立刻把你现在在付费的 AI 工具列出来，算 TCO、算使用率、算产出。不然分析再漂亮也只是电子鸡汤。
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/ai-roi-calculator" className="btn-brand inline-flex items-center gap-2">
                  去算 ROI
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  联系顾问团队
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
