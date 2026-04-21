import { readFileSync } from 'fs'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { join } from 'path'
import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI内容创作自动化完全指南 (2026年) | SitePilot'
const pageDescription =
  '基于 $45,000 实测与 127 个 AI 工具测试的中文长文指南，覆盖 AI 内容创作自动化、分发、变现与 ROI 路线图。'
const pageUrl = 'https://sitepilot.co/ai-content-creation-automation-2026'
const ogImage = 'https://sitepilot.co/og-ai-content-automation.png'
const twitterImage = 'https://sitepilot.co/twitter-ai-content-automation.png'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['AI内容创作', 'AI自动化', '内容创作工具', '社交媒体自动化', 'AI写作工具', '内容变现', '粉丝增长'],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'AI内容创作自动化完全指南 (2026年)',
    description: '基于 $45,000 真实投资测试的 AI 内容创作完整方案。12 倍效率提升，平均 6 个月实现 8.7 万粉丝增长。',
    url: pageUrl,
    siteName: 'SitePilot',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'AI内容创作自动化指南',
      },
    ],
    locale: 'zh_CN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI内容创作自动化完全指南 (2026年)',
    description: '从 0 到 10 万粉丝的 AI 智能化内容创作系统，12 倍效率提升实战方案。',
    images: [twitterImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const quickNav = [
  { href: '#data-insights', title: '效率数据揭秘', note: '红利与案例' },
  { href: '#four-step-method', title: '四步自动化法', note: '策略到优化' },
  { href: '#monetization', title: '变现自动化', note: '商业化系统' },
  { href: '#tool-stack', title: '工具栈配置', note: '核心订阅组合' },
  { href: '#roadmap', title: '6 个月路线图', note: '从设置到规模化' },
  { href: '#roi-analysis', title: '投资回报分析', note: '预期收益与节奏' },
]

const summaryCards = [
  { label: '$45K 实测投入', note: '内容来自 18 个月测试、127 个 AI 工具和多种创作者场景。' },
  { label: '12 倍效率提升', note: '页面重点是规模化创作系统，而不是单一生成器清单。' },
  { label: '中文长文保留', note: '正文继续使用原始 markdown，迁移只升级信息结构与阅读体验。' },
  { label: '直接衔接 ROI', note: '保留 AI ROI 计算器、工具对比和生产力相关内链。' },
]

const quickSignals = [
  '保留原始中文 markdown 正文与既有站内链接',
  '把旧版紫色渐变外壳统一到浅色 Stripe-ish 设计系统',
  '补齐绝对 canonical / Open Graph URL，避免相对路径残留',
  '正文导航、CTA 与资源入口更适合长文阅读和后续扩展',
]

const relatedResources = [
  {
    href: '/ai-roi-calculator',
    title: 'AI ROI 计算器',
    description: '先估算你的内容自动化投入回收期，再决定需要哪一层工具栈和流程深度。',
  },
  {
    href: '/ai-content-workflow-automation-2026',
    title: '内容工作流自动化指南',
    description: '如果你已经有创作能力，下一步通常是把选题、审核、发布和复盘连接起来。',
  },
  {
    href: '/ai-content-performance-analytics-2026',
    title: '内容表现分析工具',
    description: '用分析页补上投后监控，把效率提升真正转换成转化和收入增长。',
  },
  {
    href: '/best-ai-writing-tools-2026',
    title: 'AI 写作工具对比',
    description: '需要先补齐写作引擎选择时，可以从这页继续收敛模型和工具组合。',
  },
]

const headingIds: Record<string, string> = {
  '📊 数据揭秘：AI内容创作的巨大红利': 'data-insights',
  '🎯 AI内容创作自动化四步法': 'four-step-method',
  '💰 变现自动化系统': 'monetization',
  '🛠️ 实战工具清单与配置': 'tool-stack',
  '📈 6个月实施路线图': 'roadmap',
  '💰 投资回报预期': 'roi-analysis',
}

function extractText(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node)
  }

  if (Array.isArray(node)) {
    return node.map(extractText).join('')
  }

  if (node && typeof node === 'object' && 'props' in node) {
    return extractText((node as { props?: { children?: ReactNode } }).props?.children)
  }

  return ''
}

const markdownComponents: Components = {
  h1: () => null,
  h2: ({ children }) => {
    const text = extractText(children).trim()
    const id = headingIds[text]

    return (
      <h2 id={id} className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-slate-950 mt-12 mb-5 scroll-mt-32">
        {children}
      </h2>
    )
  },
  h3: ({ children }) => (
    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mt-8 mb-4">
      {children}
    </h3>
  ),
  h4: ({ children }) => <h4 className="text-xl font-semibold text-slate-900 mt-6 mb-3">{children}</h4>,
  p: ({ children }) => <p className="text-slate-600 mb-5 leading-8">{children}</p>,
  ul: ({ children }) => <ul className="space-y-3 mb-6 text-slate-600">{children}</ul>,
  ol: ({ children }) => <ol className="space-y-3 mb-6 text-slate-600 list-decimal pl-6">{children}</ol>,
  li: ({ children }) => <li className="leading-7">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-slate-950">{children}</strong>,
  blockquote: ({ children }) => (
    <blockquote className="page-card-soft px-6 py-5 mb-8 text-slate-700 border-l-0">{children}</blockquote>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-8 page-card">
      <table className="min-w-full text-left">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-slate-50">{children}</thead>,
  tbody: ({ children }) => <tbody className="divide-y divide-slate-200">{children}</tbody>,
  tr: ({ children }) => <tr>{children}</tr>,
  th: ({ children }) => (
    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{children}</th>
  ),
  td: ({ children }) => <td className="px-5 py-4 text-sm text-slate-700 align-top">{children}</td>,
  code: ({ children, className }) => {
    const isBlock = className?.includes('language-')
    if (isBlock) {
      return (
        <pre className="page-card-soft p-5 mb-6 overflow-x-auto">
          <code className="text-sm font-mono text-slate-700">{children}</code>
        </pre>
      )
    }

    return <code className="rounded-md bg-slate-100 px-2 py-1 text-sm font-mono text-slate-800">{children}</code>
  },
  a: ({ children, href }) => {
    if (href?.startsWith('/')) {
      return (
        <Link href={href} className="link-brand underline underline-offset-4">
          {children}
        </Link>
      )
    }

    return (
      <a href={href} className="link-brand underline underline-offset-4" target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  },
}

export default function AIContentCreationAutomationPage() {
  const contentPath = join(process.cwd(), 'content', 'ai-content-creation-automation-2026.md')
  const content = readFileSync(contentPath, 'utf8')

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        imageUrl={ogImage}
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
                AI 内容自动化增长框架
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                AI 内容创作自动化，
                <span className="brand-gradient-text block">从产能提升到规模化变现。</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                这是一页保留完整中文正文的实战指南，聚焦创作者如何用 AI 建立内容策略、批量生产、
                多平台分发和数据驱动优化系统，而不是停留在“试几个写作工具”的层面。
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#data-insights" className="btn-brand">
                  进入正文导航
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/ai-roi-calculator" className="btn-secondary">
                  打开 ROI 计算器
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                {summaryCards.map((item) => (
                  <div key={item.label} className="page-card p-4 bg-white/90">
                    <div className="text-sm font-semibold text-slate-950 mb-2">{item.label}</div>
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
                      <div className="text-sm text-slate-500 mb-1">迁移说明</div>
                      <div className="text-xl font-semibold text-slate-950">这页现在怎么读最快</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      中文长文
                    </div>
                  </div>

                  <div className="space-y-3">
                    {quickSignals.map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                          <div className="text-sm text-slate-600">{item}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50/70 px-4 py-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600/80 mb-2">入口建议</div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      如果你是第一次搭建内容自动化体系，先读四步法和路线图；如果你已经在产出内容，优先跳到 ROI
                      与工具栈部分收敛预算。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-14 md:py-18">
        <section className="page-card p-7 md:p-10 mb-16">
          <div className="max-w-4xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">正文导航</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              保留原始中文指南，
              <span className="block brand-gradient-text">只重做页面骨架与阅读体验。</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              下方正文仍然来自原始 markdown 文件，因此案例、工具价格、路线图和行动计划内容都保持不变。
              当前迁移只统一视觉系统、目录锚点、CTA 结构和元数据规范。
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
            {quickNav.map((item) => (
              <a key={item.href} href={item.href} className="page-card-soft p-5 hover:-translate-y-0.5 transition-transform">
                <div className="text-lg font-semibold text-slate-950 mb-2">{item.title}</div>
                <div className="text-sm text-slate-600">{item.note}</div>
              </a>
            ))}
          </div>

          <article className="max-w-none">
            <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
          </article>
        </section>

        <section className="page-card-glow p-8 md:p-12 surface-muted mb-16">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">下一步</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              先把内容自动化
              <span className="block brand-gradient-text">接到预算、工作流和复盘上。</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              这类页面最容易的问题不是“没工具”，而是买了太多工具却没有 ROI 视角。先估算收益，再串联工作流和分析页，
              比直接扩张订阅更稳。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/ai-roi-calculator" className="btn-brand">
                免费 ROI 计算器
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/ai-content-workflow-automation-2026" className="btn-secondary">
                查看工作流自动化
              </Link>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          {relatedResources.map((resource) => (
            <Link key={resource.href} href={resource.href} className="page-card p-8 hover:-translate-y-0.5 transition-transform">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{resource.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{resource.description}</p>
              <div className="inline-flex items-center text-[#635bff] font-semibold">
                打开资源
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  )
}
