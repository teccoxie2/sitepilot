import type { Metadata } from 'next'
import Link from 'next/link'
import { readFileSync } from 'fs'
import { join } from 'path'
import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = '25 AI Automation Workflow Templates - Ready-to-Use Business Optimization Plays | SitePilot 2026'
const pageDescription =
  '25 validated AI automation workflow templates backed by $12K in tool testing, covering customer service, sales, content marketing, finance, and more with cost analysis, implementation time, and expected ROI.'
const pageUrl = 'https://sitepilot.co/ai-automation-workflow-templates-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords:
    'AI automation, workflow templates, business process optimization, ChatGPT automation, Zapier workflows, AI customer service, sales automation, content marketing automation, ROI analysis, small business AI solutions',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: '25 AI Automation Workflow Templates - Proven Business Optimization Plays',
    description: 'AI automation templates backed by $12K in real testing with 320%+ average ROI, implementation guidance, cost analysis, and real-world examples.',
    type: 'article',
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: '25 AI Automation Workflow Templates - Proven Business Optimization Plays',
    description: 'AI automation templates backed by $12K in real testing with 320%+ average ROI, implementation guidance, cost analysis, and real-world examples.',
  },
}

const summaryCards = [
  {
    label: '25 templates',
    note: 'Covering customer service, sales automation, content marketing, finance, project management, and hiring.',
  },
  {
    label: '320%+ average ROI',
    note: 'Built from real testing and implementation cases, not theoretical flowcharts.',
  },
  {
    label: '$12K in testing',
    note: 'Focused on cost, implementation time, and expected return so operators can filter quickly.',
  },
  {
    label: 'Ready to implement',
    note: 'Each template maps the tool stack, use case, execution steps, and budget assumptions.',
  },
]

const quickSignals = [
  'Keeps the full markdown content and the original long-form structure.',
  'Updated to the SitePilot light Stripe-ish AI content system.',
  'Still routes readers to the ROI calculator, case studies, and tool comparison pages.',
  'Better for long-form reading, tables, and future internal-link expansion.',
]

const relatedResources = [
  {
    href: '/ai-roi-calculator',
    title: 'AI ROI Calculator',
    description: 'Estimate payback periods for automation tooling based on company size and target workflows.',
  },
  {
    href: '/enterprise-ai-implementation-best-practices-2026',
    title: 'AI Implementation Case Studies',
    description: 'Review how real companies deployed AI, where the risks appeared, and what execution patterns held up.',
  },
  {
    href: '/best-ai-tools-small-business-2026',
    title: 'Small Business AI Tools Guide',
    description: 'If budget sensitivity matters more, start with tool combinations that smaller teams can actually sustain.',
  },
  {
    href: '/ai-tools-cost-benefit-analysis-2026',
    title: 'AI Tool Cost-Benefit Analysis',
    description: 'Refine tool selection through cost-benefit tradeoffs instead of stacking subscriptions blindly.',
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
                Validated AI automation template library
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                AI automation workflow templates,
                <span className="brand-gradient-text block">from testing to execution.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                This library draws on $12K in AI tool testing and more than 25 real implementation cases to package reusable business automation plays.
                The goal is not an inspiration list. It is to help teams judge which workflows are worth automating, what they cost, and how quickly they can pay back.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/ai-roi-calculator" className="btn-brand">
                  Open the ROI calculator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/ai-tools" className="btn-secondary">
                  Browse AI tool comparisons
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
                      <div className="text-sm text-slate-500 mb-1">Template signals</div>
                      <div className="text-xl font-semibold text-slate-950">Why this page is worth reading first</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Long-form guide
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
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Main content</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Keep the original template content,
              <span className="block brand-gradient-text">upgrade only the reading and navigation experience.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              The body below still comes from the original markdown file, so the category tables, template notes, ROI examples, and implementation steps remain intact.
              This migration only updates the page shell, information scent, table readability, and internal-link experience.
            </p>
          </div>

          <article className="max-w-none">
            <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
          </article>
        </section>

        <section className="page-card-glow p-8 md:p-12 surface-muted mb-16">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Next step</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Ready to turn templates
              <span className="block brand-gradient-text">into budgets and execution plans?</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Start with the ROI calculator to size the upside, then return to the comparison and case-study pages to narrow the plan. That is a safer sequence than buying subscriptions first and inventing the use case later.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/ai-roi-calculator" className="btn-brand">
                Free ROI calculator
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/ai-tools" className="btn-secondary">
                Browse AI tool comparisons
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
                Open resource
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  )
}
