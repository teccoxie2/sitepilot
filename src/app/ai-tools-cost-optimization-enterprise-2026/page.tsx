import fs from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Coins,
  Layers3,
  Shield,
  Sparkles,
  TrendingDown,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = '企业AI工具成本优化权威指南 - 2026年版 | SitePilot'
const pageDescription =
  '基于 78 个 AI 工具测试的企业成本优化策略。从年支出 $50,000 优化到 $28,000 的实战经验，ROI 提升 550% 的完整框架。'
const pageUrl = 'https://sitepilot.co/ai-tools-cost-optimization-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['AI工具成本优化', '企业AI投资', 'ROI优化', '成本控制', 'AI预算管理', '2026年AI策略'],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: '企业AI工具成本优化权威指南 - 实现30-50%成本节省',
    description: '从 $50,000 到 $28,000 的优化实战。四象限成本分析矩阵，分规模优化策略，ROI 量化框架。',
    type: 'article',
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: '企业AI工具成本优化权威指南 | SitePilot',
    description: '基于 78 个 AI 工具测试的成本优化策略。30-50% 成本节省，ROI 提升 550% 的完整框架。',
  },
}

const heroStats = [
  { value: '78', label: 'AI 工具深度测试' },
  { value: '44%', label: '平均成本节省' },
  { value: '550%', label: '最高 ROI 实现' },
  { value: '2.2个月', label: '平均回收期' },
]

const optimizationSignals = [
  '高价值高成本工具不是原罪，问题是你有没有把采购和使用率做扎实。',
  '低价值高成本工具该换就换，别因为已经买了就继续沉没。',
  '平台整合通常比继续堆单点工具更省钱，也更少管理噪音。',
  '成本优化不是盲砍预算，是用更少的钱换更稳定的产出。',
]

const strategyCards = [
  {
    title: '小型企业',
    range: '10-50 人 · $5,000-$12,000 / 年',
    note: '工具整合优先，先消灭功能重叠。',
    outcome: '示例节省：$8,000 → $5,500',
  },
  {
    title: '中型企业',
    range: '50-200 人 · $15,000-$35,000 / 年',
    note: '企业级平台 + 精选专业工具，配合使用率治理。',
    outcome: '企业折扣平均可省 25-35%',
  },
  {
    title: '大型企业',
    range: '200+ 人 · $50,000-$150,000 / 年',
    note: '自研、战略采购和深度集成一起做，预算才不失控。',
    outcome: '核心平台 60% + 专业工具 30% + 创新 10%',
  },
]

const quadrantCards = [
  {
    title: '高价值 / 高成本',
    note: '保留并优化。去谈折扣、年付和模块选择。',
    style: 'border-indigo-100 bg-indigo-50/70 text-indigo-800',
  },
  {
    title: '高价值 / 低成本',
    note: '最大化利用。把 API、模板和共享许可吃满。',
    style: 'border-indigo-100 bg-indigo-50/70 text-indigo-800',
  },
  {
    title: '低价值 / 高成本',
    note: '立即替换。典型预算陷阱。',
    style: 'border-rose-100 bg-rose-50/70 text-rose-800',
  },
  {
    title: '低价值 / 低成本',
    note: '谨慎保留。3 个月评估，不行就撤。',
    style: 'border-amber-100 bg-amber-50/70 text-amber-800',
  },
]

const relatedLinks = [
  {
    href: '/ai-tools-cost-benefit-analysis-2026',
    title: '成本效益分析',
    description: '先看值不值，再看怎么省。',
  },
  {
    href: '/ai-tools-budget-planning-enterprise-2026',
    title: '预算规划策略',
    description: '成本优化要回到预算结构里看。',
  },
  {
    href: '/ai-tool-implementation-strategy-2026',
    title: '实施策略指南',
    description: '别把采购优化成落地灾难。',
  },
]

export default function AIToolsCostOptimizationPage() {
  const contentPath = path.join(process.cwd(), 'content', 'ai-tools-cost-optimization-enterprise-2026.md')
  const content = fs.readFileSync(contentPath, 'utf8')

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
            <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Enterprise AI cost optimization 2026
                </div>

                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI 工具成本优化，
                  <span className="brand-gradient-text block">别把采购清单养成宠物。</span>
                </h1>

                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  这页保留原有的四象限成本矩阵、分规模策略、ROI 量化框架和内部链接，只把视觉统一到当前浅色 Stripe-ish 系统。核心结论没变：花得少不是本事，花得准才是。
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                  <Link href="/ai-tools-cost-benefit-analysis-2026" className="btn-brand inline-flex items-center gap-2">
                    先看成本效益
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
                        <div className="text-sm text-slate-500 mb-1">Optimization logic</div>
                        <div className="text-xl font-semibold text-slate-950">四个硬判断</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        省钱但别省傻
                      </div>
                    </div>

                    <div className="space-y-3">
                      {optimizationSignals.map((item) => (
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

        <section className="mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Optimization matrix</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              先放进象限，
              <span className="brand-gradient-text block">再决定砍、留、换、谈。</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              原文最有用的部分就是这套四象限逻辑。别一股脑全削，也别看见 AI 就想囤。按价值和成本一起判，脑子会清醒很多。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {quadrantCards.map((card) => (
              <div key={card.title} className="page-card p-6">
                <div className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold mb-4 ${card.style}`}>
                  {card.title}
                </div>
                <p className="text-sm leading-7 text-slate-600">{card.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3 mb-16">
          {strategyCards.map((card) => (
            <div key={card.title} className="page-card p-8">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-5">
                <Layers3 className="w-5 h-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-2">{card.title}</h2>
              <div className="text-sm font-medium text-slate-500 mb-4">{card.range}</div>
              <p className="text-slate-600 leading-7 mb-5">{card.note}</p>
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 px-4 py-3 text-sm font-medium text-indigo-700">
                {card.outcome}
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.03fr_0.97fr] mb-16">
          <div className="page-card p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">完整优化正文</h2>
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
              prose-pre:bg-slate-950 prose-pre:text-slate-100 prose-pre:border prose-pre:border-slate-800 prose-pre:rounded-2xl"
            >
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </div>

          <div className="space-y-6">
            <div className="page-card p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-[#635bff]" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">优化提醒</h2>
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">过度削减会直接把效率砍掉，别为了省订阅费多花人工费。</div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">短期低价不等于长期低成本，迁移和培训一样要算。</div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">没有标准采购和 review 机制，重复投资一定卷土重来。</div>
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
                  <Coins className="w-5 h-5 text-[#635bff]" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">下一步动作</h2>
              </div>
              <p className="text-slate-600 leading-7 mb-6">
                真要优化成本，就把现有 AI 订阅列成表：名称、部门、年费、使用率、替代方案。没有这张表，所谓“成本优化”多半只是嘴上健身。
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/ai-roi-calculator" className="btn-brand inline-flex items-center gap-2">
                  去算 ROI
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/ai-tools-cost-benefit-analysis-2026" className="btn-secondary">
                  继续看成本效益
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
