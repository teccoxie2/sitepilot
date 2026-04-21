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

const pageTitle = 'Enterprise AI Tools Cost Optimization Guide 2026 | SitePilot'
const pageDescription =
  'A cost optimization framework for enterprise AI tools based on testing across 78 products. Covers the path from $50,000 in annual spend to $28,000 with a full model for ROI gains of up to 550%.'
const pageUrl = 'https://sitepilot.co/ai-tools-cost-optimization-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['AI cost optimization', 'enterprise AI investment', 'ROI optimization', 'cost control', 'AI budget management', '2026 AI strategy'],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Enterprise AI Tools Cost Optimization Guide - Deliver 30-50% Savings',
    description: 'A practical path from $50,000 to $28,000 in annual spend, with a four-quadrant cost matrix, size-based optimization strategy, and quantified ROI model.',
    type: 'article',
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise AI Tools Cost Optimization Guide | SitePilot',
    description: 'A cost optimization strategy based on testing across 78 AI tools, with 30-50% savings and a framework for 550% ROI gains.',
  },
}

const heroStats = [
  { value: '78', label: 'AI tools tested in depth' },
  { value: '44%', label: 'Average cost savings' },
  { value: '550%', label: 'Best ROI achieved' },
  { value: '2.2 months', label: 'Average payback period' },
]

const optimizationSignals = [
  'High-value, high-cost tools are not the problem. The real issue is weak procurement discipline and poor usage governance.',
  'Replace low-value, high-cost tools when they show up. Do not keep funding sunk costs out of habit.',
  'Platform consolidation is usually cheaper and quieter to manage than stacking isolated point tools.',
  'Cost optimization is not blind budget cutting. It is getting steadier output with less spend.',
]

const strategyCards = [
  {
    title: 'Smaller teams',
    range: '10-50 employees · $5,000-$12,000 / year',
    note: 'Start with consolidation and eliminate overlapping functionality first.',
    outcome: 'Example savings: $8,000 to $5,500',
  },
  {
    title: 'Mid-sized teams',
    range: '50-200 employees · $15,000-$35,000 / year',
    note: 'Combine enterprise platforms with a small set of specialized tools and active usage governance.',
    outcome: 'Enterprise discounting can typically save 25-35%',
  },
  {
    title: 'Large enterprises',
    range: '200+ employees · $50,000-$150,000 / year',
    note: 'Blend internal development, strategic procurement, and deep integration to keep the budget under control.',
    outcome: 'Core platforms 60% + specialized tools 30% + innovation 10%',
  },
]

const quadrantCards = [
  {
    title: 'High value / high cost',
    note: 'Keep and optimize. Negotiate pricing, annual terms, and module mix.',
    style: 'border-indigo-100 bg-indigo-50/70 text-indigo-800',
  },
  {
    title: 'High value / low cost',
    note: 'Maximize usage. Push APIs, templates, and shared licenses to full value.',
    style: 'border-indigo-100 bg-indigo-50/70 text-indigo-800',
  },
  {
    title: 'Low value / high cost',
    note: 'Replace immediately. This is the classic budget trap.',
    style: 'border-rose-100 bg-rose-50/70 text-rose-800',
  },
  {
    title: 'Low value / low cost',
    note: 'Keep cautiously. Review it for three months, then cut it if it underperforms.',
    style: 'border-amber-100 bg-amber-50/70 text-amber-800',
  },
]

const relatedLinks = [
  {
    href: '/ai-tools-cost-benefit-analysis-2026',
    title: 'Cost-Benefit Analysis',
    description: 'Start by deciding whether the tool is worth funding at all.',
  },
  {
    href: '/ai-tools-budget-planning-enterprise-2026',
    title: 'Budget Planning Strategy',
    description: 'Cost optimization only works when it connects back to budget structure.',
  },
  {
    href: '/ai-tool-implementation-strategy-2026',
    title: 'Implementation Strategy Guide',
    description: 'Do not optimize procurement in a way that breaks rollout execution.',
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
                  AI Tools Cost Optimization
                  <span className="brand-gradient-text block">Do not turn the procurement list into a pet project.</span>
                </h1>

                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  This page keeps the original four-quadrant cost matrix, size-based strategies, ROI framework, and internal links. The visual system is the only thing that changed. The core conclusion stays intact: spending less is not the goal, spending accurately is.
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                  <Link href="/ai-tools-cost-benefit-analysis-2026" className="btn-brand inline-flex items-center gap-2">
                    Start with cost-benefit analysis
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/ai-tools" className="btn-secondary inline-flex items-center gap-2">
                    Return to the AI tools hub
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
                        <div className="text-xl font-semibold text-slate-950">Four hard calls</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        Save money without getting sloppy
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
              Put every tool in the right quadrant first
              <span className="brand-gradient-text block">Then decide whether to cut, keep, replace, or renegotiate.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              The most useful part of the original page is this four-quadrant logic, so it stays. Do not slash everything at once, and do not hoard tools just because they have AI on the label. Judge value and cost together.
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
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Full optimization article</h2>
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
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Optimization reminders</h2>
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">Over-cutting will erase efficiency. Do not save on subscriptions only to spend more on manual labor.</div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">A low short-term price does not guarantee a low long-term cost. Migration and training still count.</div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">Without standardized procurement and review cycles, duplicate spend always finds its way back.</div>
              </div>
            </div>

            <div className="page-card p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#635bff]" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Related internal resources</h2>
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
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Next step</h2>
              </div>
              <p className="text-slate-600 leading-7 mb-6">
                If you want real cost optimization, list every AI subscription you already have with the owner team, annual cost, usage rate, and replacement path. Without that table, so-called optimization is usually just talk.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/ai-roi-calculator" className="btn-brand inline-flex items-center gap-2">
                  Model ROI
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/ai-tools-cost-benefit-analysis-2026" className="btn-secondary">
                  Continue to cost-benefit analysis
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
