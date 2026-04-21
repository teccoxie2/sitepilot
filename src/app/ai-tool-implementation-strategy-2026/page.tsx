import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import type { Metadata } from 'next'
import { ArrowRight, Calendar, CheckCircle2, Compass, Shield, Sparkles, Target, TrendingUp } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = '2026年AI工具实施终极策略指南 | SitePilot'
const pageDescription =
  '基于$25,000真实投资和500+企业调研的AI工具成功实施策略。分阶段部署、ROI驱动选择、风险缓解的完整框架。'
const pageUrl = 'https://sitepilot.co/ai-tool-implementation-strategy-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI工具实施',
    'AI实施策略',
    '企业AI转型',
    'AI工具部署',
    '2026 AI trends',
    '人工智能实施',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
    siteName: 'SitePilot',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const heroSignals = [
  '保留原始文章、章节和内部锚点',
  '保留 ROI、风险和实施框架叙事',
  '统一到当前浅色 Stripe-ish UI',
  '保留 /ai-roi-calculator 等内部链接路径',
]

const statCards = [
  { label: 'Tools tested', value: '78', note: '原文里的测试结论保留。' },
  { label: 'ROI uplift', value: '245%', note: '结果叙事继续可见。' },
  { label: 'Deployment style', value: 'Phased', note: '分阶段，不一口吞。' },
  { label: 'Decision layer', value: 'Executive', note: '给负责人看的。' },
]

const internalLinks = [
  { href: '/ai-roi-calculator', title: 'AI ROI Calculator', note: '把策略直接接到 ROI 计算。' },
  { href: '/ai-tools', title: 'AI Tools Hub', note: '回到工具总目录。' },
  { href: '/ai-tool-implementation-strategy-2026', title: 'Implementation Strategy', note: '当前页面正文保持完整。' },
  { href: '/enterprise-ai-implementation-best-practices-2026', title: 'Enterprise Best Practices', note: '看企业级执行方法。' },
  { href: '/apply-for-audit', title: 'Talk to SitePilot', note: '要顾问式评估就直接约。' },
] as const

export default function AIToolImplementationStrategyPage() {
  const contentPath = path.join(process.cwd(), 'content', 'ai-tool-implementation-strategy-2026.md')
  const content = fs.readFileSync(contentPath, 'utf8')

  return (
    <>
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-04-20"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
          <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
          <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
          <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
          <section className="page-hero relative">
            <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="max-w-3xl">
                  <div className="page-pill mb-6">
                    <Sparkles className="h-4 w-4 text-[#635bff]" />
                    AI implementation strategy
                  </div>

                  <h1 className="page-title mb-6 text-5xl md:text-7xl">
                    2026年AI工具实施终极策略指南,
                    <span className="brand-gradient-text block">把“买工具”变成“真的落地”。</span>
                  </h1>

                  <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                    这页保留原始文章内容、章节锚点和内链，只把界面收进当前统一的浅色 Stripe-ish 系统。
                  </p>

                  <div className="mb-10 flex flex-wrap gap-3">
                    <a href="#core-insights" className="btn-brand inline-flex items-center gap-2">
                      Read strategy
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link href="/ai-roi-calculator" className="btn-secondary inline-flex items-center gap-2">
                      Calculate ROI
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
                          <div className="mb-1 text-sm text-slate-500">What this guide keeps</div>
                          <div className="text-xl font-semibold text-slate-950">Same article, cleaner shell</div>
                        </div>
                        <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                          live ops
                        </div>
                      </div>

                      <div className="grid gap-3">
                        {[
                          ['Sections', '核心洞察、原则、矩阵、规模实施、风险、KPI 和行动计划。'],
                          ['CTA', '继续导向 ROI 计算和工具总目录。'],
                          ['Content', 'Markdown 正文原样渲染。'],
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
                          策略不是“多买几个工具”——是把部署、采用和回报串成一条线。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {statCards.map((card) => (
                <div key={card.label} className="page-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-3xl font-semibold tracking-tight text-slate-950">{card.value}</div>
                  <div className="mt-2 text-sm font-medium text-slate-900">{card.label}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="core-insights" className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <Target className="h-4 w-4" />
                Core strategy guide
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                原文正文保留，页面只是换了更像产品的壳。
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                你依旧能通过锚点导航浏览内容，也能继续把读者带到 ROI 计算和工具目录。
              </p>
            </div>

            <div className="mt-10 grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
              <aside className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-6">
                <h3 className="text-lg font-semibold text-slate-950">Navigation</h3>
                <nav className="mt-4 space-y-2 text-sm">
                  {[
                    ['#core-insights', '核心洞察'],
                    ['#implementation-principles', '实施策略原则'],
                    ['#tool-selection-matrix', '工具选择矩阵'],
                    ['#enterprise-scale', '按规模实施'],
                    ['#risk-assessment', '风险评估缓解'],
                    ['#success-metrics', '成功指标KPI'],
                    ['#2026-trends', '2026趋势预测'],
                    ['#best-practices', '最佳实践'],
                    ['#action-plan', '行动计划模板'],
                  ].map(([href, label]) => (
                    <a key={href} href={href} className="block text-sky-700 transition hover:text-sky-900">
                      {label}
                    </a>
                  ))}
                </nav>

                <div className="mt-8 rounded-[1.25rem] bg-gradient-to-r from-[#0f172a] via-[#635bff] to-[#7c3aed] p-5 text-white">
                  <h4 className="text-lg font-semibold">获取个性化建议</h4>
                  <p className="mt-2 text-sm text-white/80">使用 AI ROI 计算器获取定制实施策略。</p>
                  <Link href="/ai-roi-calculator" className="mt-4 inline-flex items-center justify-center rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950">
                    计算 ROI
                  </Link>
                </div>
              </aside>

              <div className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-p:text-slate-700 prose-p:leading-relaxed prose-strong:text-slate-900 prose-strong:font-semibold prose-ul:space-y-1 prose-li:text-slate-700 prose-a:text-sky-700 prose-a:no-underline hover:prose-a:text-sky-900">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-2">
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

            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                <Shield className="h-4 w-4 text-indigo-600" />
                Strategy checkpoints
              </div>
              <div className="mt-5 grid gap-3">
                {[
                  ['Implementation principles', '先定边界，再定工具。'],
                  ['Risk assessment', '不只看功能，也看采用风险。'],
                  ['Success metrics', 'KPI 先行，不要只看上线。'],
                  ['Action plan', '每一步都要能执行。'],
                ].map(([title, note]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                    <div className="font-semibold text-slate-950">{title}</div>
                    <div className="mt-1 text-sm text-slate-600">{note}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-16 text-center">
            <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="rounded-[1.5rem] bg-gradient-to-r from-[#0f172a] via-[#635bff] to-[#7c3aed] p-8 text-white">
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">准备开始 AI 工具实施？</h3>
                <p className="mx-auto mt-3 max-w-2xl text-white/85">
                  先把策略看完，再去算 ROI；别倒过来。
                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/ai-roi-calculator" className="btn-brand bg-white text-slate-950 hover:bg-slate-100">
                    计算 ROI 预期
                  </Link>
                  <Link href="/ai-tools" className="btn-secondary border-white/25 bg-white/10 text-white hover:bg-white/15">
                    浏览工具推荐
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
