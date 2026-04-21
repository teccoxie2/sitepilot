import { readFileSync } from 'fs'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { join } from 'path'
import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Complete Guide to AI Content Creation Automation (2026) | SitePilot'
const pageDescription =
  'A long-form guide backed by $45,000 in live testing and 127 AI tools, covering AI content creation automation, distribution, monetization, and the ROI roadmap.'
const pageUrl = 'https://sitepilot.co/ai-content-creation-automation-2026'
const ogImage = 'https://sitepilot.co/og-ai-content-automation.png'
const twitterImage = 'https://sitepilot.co/twitter-ai-content-automation.png'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['AI content creation', 'AI automation', 'content creation tools', 'social media automation', 'AI writing tools', 'content monetization', 'audience growth'],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Complete Guide to AI Content Creation Automation (2026)',
    description: 'A complete AI content creation system backed by $45,000 in testing, 12x efficiency gains, and an average audience increase of 87,000 followers in six months.',
    url: pageUrl,
    siteName: 'SitePilot',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'AI content creation automation guide',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Guide to AI Content Creation Automation (2026)',
    description: 'A practical AI content system for scaling from zero to 100,000 followers with 12x efficiency gains.',
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
  { href: '#data-insights', title: 'Efficiency data insights', note: 'Upside and case signals' },
  { href: '#four-step-method', title: 'Four-step automation method', note: 'Strategy through optimization' },
  { href: '#monetization', title: 'Monetization automation', note: 'Commercial system design' },
  { href: '#tool-stack', title: 'Tool stack setup', note: 'Core subscription mix' },
  { href: '#roadmap', title: 'Six-month roadmap', note: 'From setup to scale' },
  { href: '#roi-analysis', title: 'ROI analysis', note: 'Expected return and pacing' },
]

const summaryCards = [
  { label: '$45K in live testing', note: 'Built from 18 months of testing, 127 AI tools, and multiple creator scenarios.' },
  { label: '12x efficiency gain', note: 'The focus is a scalable content system, not a list of one-off generators.' },
  { label: 'Chinese long-form preserved', note: 'The body still uses the original markdown; the migration upgrades structure and reading experience only.' },
  { label: 'Directly linked to ROI', note: 'Keeps the AI ROI calculator, tool comparisons, and productivity-related internal links.' },
]

const quickSignals = [
  'Keeps the original Chinese markdown body and the existing internal links.',
  'Moves the old purple-gradient shell into the light Stripe-ish design system.',
  'Uses absolute canonical and Open Graph URLs to avoid relative-path leftovers.',
  'Improves navigation, CTA structure, and resource entry points for long-form reading.',
]

const relatedResources = [
  {
    href: '/ai-roi-calculator',
    title: 'AI ROI Calculator',
    description: 'Estimate the payback period for content automation before deciding how deep the tool stack and workflow should go.',
  },
  {
    href: '/ai-content-workflow-automation-2026',
    title: 'Content Workflow Automation Guide',
    description: 'If the creative capability already exists, the next step is usually to connect ideation, review, publishing, and postmortems.',
  },
  {
    href: '/ai-content-performance-analytics-2026',
    title: 'Content Performance Analytics Tool',
    description: 'Use the analytics page to add post-launch monitoring and convert efficiency gains into conversion and revenue growth.',
  },
  {
    href: '/best-ai-writing-tools-2026',
    title: 'AI Writing Tools Comparison',
    description: 'If the writing engine choice still needs work, use this page to narrow the model and tool combination.',
  },
]

const orderedHeadingIds = ['data-insights', 'four-step-method', 'monetization', 'tool-stack', 'roadmap', 'roi-analysis']

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

function createMarkdownComponents(): Components {
  let headingIndex = 0

  return {
    h1: () => null,
    h2: ({ children }) => {
      extractText(children)
      const id = orderedHeadingIds[headingIndex]
      headingIndex += 1

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
}

export default function AIContentCreationAutomationPage() {
  const contentPath = join(process.cwd(), 'content', 'ai-content-creation-automation-2026.md')
  const content = readFileSync(contentPath, 'utf8')
  const markdownComponents = createMarkdownComponents()

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
                AI content automation growth framework
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                AI content creation automation,
                <span className="brand-gradient-text block">from output gains to scalable monetization.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                This page preserves the full original Chinese body as a practical guide for creators building AI-enabled content strategy, batch production, multi-platform distribution, and data-driven optimization systems.
                The point is not to sample a few writing tools. It is to build a repeatable operating model.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#data-insights" className="btn-brand">
                  Enter content navigation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/ai-roi-calculator" className="btn-secondary">
                  Open ROI calculator
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
                      <div className="text-sm text-slate-500 mb-1">Migration note</div>
                      <div className="text-xl font-semibold text-slate-950">How to read this page fastest</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Chinese long-form
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
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600/80 mb-2">Entry advice</div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      If you are building a content automation system for the first time, start with the four-step method and roadmap. If you already publish consistently, jump to the ROI and tool-stack sections to narrow the budget.
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
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Content navigation</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Keep the original Chinese guide,
              <span className="block brand-gradient-text">rebuild only the shell and reading experience.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              The body below still comes from the original markdown file, so the case studies, tool pricing, roadmap, and action-plan content remain unchanged.
              This migration only standardizes the visual system, anchor navigation, CTA structure, and metadata conventions.
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
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Next step</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Connect content automation first
              <span className="block brand-gradient-text">to budget, workflow, and post-launch review.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              The common failure mode on pages like this is not a lack of tools. It is buying too many tools without an ROI view. Estimate the upside first, then connect workflow and analytics pages. That is safer than expanding subscriptions blindly.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/ai-roi-calculator" className="btn-brand">
                Free ROI calculator
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/ai-content-workflow-automation-2026" className="btn-secondary">
                View workflow automation
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
