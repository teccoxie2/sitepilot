import type { Metadata } from 'next'
import Link from 'next/link'
import { readFileSync } from 'fs'
import { join } from 'path'
import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = '25 AI自动化工作流程模板 - 立即可用的业务优化方案 | SitePilot 2026'
const pageDescription =
  '基于$12K AI工具测试的25个经过验证的自动化工作流程模板，覆盖客户服务、销售、内容营销、财务管理等场景，并附带成本分析、实施时间和预期ROI。'
const pageUrl = 'https://sitepilot.co/ai-automation-workflow-templates-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords:
    'AI自动化, 工作流程模板, 业务流程优化, ChatGPT自动化, Zapier工作流, AI客服, 销售自动化, 内容营销自动化, ROI分析, 小企业AI解决方案',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: '25 AI自动化工作流程模板 - 经过验证的业务优化方案',
    description: '基于$12K真实测试的AI自动化模板，平均ROI 320%+。包含实施指南、成本分析和真实案例。',
    type: 'article',
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: '25 AI自动化工作流程模板 - 经过验证的业务优化方案',
    description: '基于$12K真实测试的AI自动化模板，平均ROI 320%+。包含实施指南、成本分析和真实案例。',
  },
}

const summaryCards = [
  {
    label: '25 个模板',
    note: '覆盖客户服务、销售自动化、内容营销、财务管理、项目管理与招聘场景。',
  },
  {
    label: '平均 ROI 320%+',
    note: '模板基于真实测试与实施案例整理，不只是理论流程图。',
  },
  {
    label: '$12K 测试投入',
    note: '页面聚焦成本、实施时间与预期回报，适合业务负责人快速筛选。',
  },
  {
    label: '可直接落地',
    note: '每个模板都围绕工具组合、使用场景、执行步骤与预算假设展开。',
  },
]

const quickSignals = [
  '保留全文 markdown 内容与既有中文定位',
  '统一为 SitePilot 浅色 Stripe-ish AI 内容系统',
  '继续指向 ROI 计算器、案例研究和工具对比页',
  '更适合长文阅读、表格浏览和后续内链扩展',
]

const relatedResources = [
  {
    href: '/ai-roi-calculator',
    title: 'AI ROI 计算器',
    description: '基于业务规模和目标流程，快速估算自动化工具的投资回收周期。',
  },
  {
    href: '/enterprise-ai-implementation-best-practices-2026',
    title: 'AI 实施案例研究',
    description: '查看真实企业落地 AI 的做法、风险点和执行经验。',
  },
  {
    href: '/best-ai-tools-small-business-2026',
    title: '小企业 AI 工具指南',
    description: '如果预算更敏感，可以先从小团队可承受的工具组合开始。',
  },
  {
    href: '/ai-tools-cost-benefit-analysis-2026',
    title: 'AI 工具对比分析',
    description: '从成本效益角度继续细化工具选择，而不是直接堆订阅。',
  },
]

const markdownComponents: Components = {
  h1: () => null,
  h2: ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-slate-950 mt-12 mb-5">{children}</h2>
  ),
  h3: ({ children }) => <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mt-8 mb-4">{children}</h3>,
  h4: ({ children }) => <h4 className="text-xl font-semibold text-slate-900 mt-6 mb-3">{children}</h4>,
  p: ({ children }) => <p className="text-slate-600 mb-5 leading-8">{children}</p>,
  ul: ({ children }) => <ul className="space-y-3 mb-6 text-slate-600">{children}</ul>,
  ol: ({ children }) => <ol className="space-y-3 mb-6 text-slate-600 list-decimal pl-6">{children}</ol>,
  li: ({ children }) => (
    <li className="leading-7">
      <span>{children}</span>
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="page-card-soft px-6 py-5 mb-8 text-slate-700 border-l-0">{children}</blockquote>
  ),
  strong: ({ children }) => <strong className="font-semibold text-slate-950">{children}</strong>,
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

export default function AIWorkflowTemplatesPage() {
  const contentPath = join(process.cwd(), 'content', 'ai-automation-workflow-templates-2026.md')
  const content = readFileSync(contentPath, 'utf8')

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-04-19"
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
                已验证的 AI 自动化模板库
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                AI 自动化工作流程模板，
                <span className="brand-gradient-text block">从测试到落地。</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                这份模板库基于 $12K AI 工具测试与 25+ 真实企业实施案例，整理出可直接复用的业务自动化方案。
                页面重点不是“灵感清单”，而是帮助团队快速判断哪类流程值得自动化、要花多少钱、多久能回本。
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/ai-roi-calculator" className="btn-brand">
                  打开 ROI 计算器
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/ai-tools" className="btn-secondary">
                  浏览 AI 工具对比
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
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">模板信号</div>
                      <div className="text-xl font-semibold text-slate-950">为什么这页适合先读</div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-14 md:py-18">
        <section className="page-card p-7 md:p-10 mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">正文内容</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              保留原始模板内容，
              <span className="block brand-gradient-text">只升级阅读和导航体验。</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              下方正文仍然来自原始 markdown 文件，因此分类表、模板说明、ROI 示例和实施步骤都保持不变。
              当前迁移只处理页面壳层、目录感、表格可读性和站内链接体验。
            </p>
          </div>

          <article className="max-w-none">
            <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
          </article>
        </section>

        <section className="page-card-glow p-8 md:p-12 surface-muted mb-16">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">下一步</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              准备把模板
              <span className="block brand-gradient-text">变成实际预算与执行计划？</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              先用 ROI 计算器估算自动化收益，再回到工具对比与案例研究页收敛方案。这样比先买一堆订阅再找用法更稳。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/ai-roi-calculator" className="btn-brand">
                免费 ROI 计算器
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/ai-tools" className="btn-secondary">
                浏览 AI 工具对比
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
