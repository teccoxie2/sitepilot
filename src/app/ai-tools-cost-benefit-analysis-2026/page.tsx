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

const pageTitle = 'AI Tools Cost-Benefit Analysis: Smart Investment Guide for SMBs 2026 | SitePilot'
const pageDescription =
  'A deep cost-benefit analysis of AI tools grounded in a $25,000 real-world investment. Built for SMBs that need a practical investment strategy, ROI model, and risk framework backed by research across 500+ companies and testing on 78 tools.'
const pageUrl = 'https://sitepilot.co/ai-tools-cost-benefit-analysis-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI tool investment',
    'cost-benefit analysis',
    'ROI modeling',
    'SMB AI',
    'productivity tools',
    'artificial intelligence budget',
    'AI tool selection',
    'return on investment',
    'digital transformation',
    'AI tool evaluation',
  ],
  openGraph: {
    title: 'AI Tools Cost-Benefit Analysis: Smart Investment Guide for SMBs 2026',
    description: 'Results from a $25,000 real-world AI tools investment across 78 products, with research from 500+ companies and a 245% average ROI uplift.',
    type: 'article',
    url: pageUrl,
    images: [
      {
        url: '/images/ai-cost-benefit-analysis-2026-og.png',
        width: 1200,
        height: 630,
        alt: 'AI tools cost-benefit analysis 2026 - SitePilot guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools Cost-Benefit Analysis: Smart Investment Guide for SMBs 2026',
    description: 'Results from a $25,000 real-world test of 78 AI tools with a 245% average ROI uplift.',
    images: ['/images/ai-cost-benefit-analysis-2026-twitter.png'],
    creator: '@sitepilot',
  },
  alternates: {
    canonical: pageUrl,
  },
}

const heroStats = [
  { value: '78', label: 'Tools deeply tested' },
  { value: '500+', label: 'Companies in the research sample' },
  { value: '245%', label: 'Average ROI uplift' },
  { value: '18 months', label: 'Investment payback tracking window' },
]

const evaluationSignals = [
  'Do not stop at monthly fees. TCO also includes training, integration, maintenance, and opportunity cost.',
  'ROI has to connect to time saved, revenue gained, and cost removed instead of vague intuition.',
  'Prioritize high-value, low-cost tools and cut high-cost, low-value tools without sentimentality.',
  'AI investment is portfolio management, not impulse buying every time a new tool appears.',
]

const investmentBands = [
  {
    title: 'Micro businesses',
    range: '1-5 employees · $100-$300 / month',
    note: 'Start with a low-cost, high-certainty core stack that lifts team efficiency quickly.',
    roi: 'Expected ROI 312%',
  },
  {
    title: 'Small businesses',
    range: '6-25 employees · $500-$1,500 / month',
    note: 'Focus on workflow integration, team collaboration, and depth of cross-functional usage.',
    roi: 'Expected ROI 425%',
  },
  {
    title: 'Mid-sized businesses',
    range: '26-100 employees · $2,000-$8,000 / month',
    note: 'Platform capabilities, analytics, and cross-team collaboration begin to drive total return.',
    roi: 'Expected ROI 380%',
  },
]

const frameworkCards = [
  {
    title: 'High value / low cost',
    tone: 'indigo',
    note: 'Prioritize these investments, deploy quickly, and scale fast.',
  },
  {
    title: 'High value / high cost',
    tone: 'indigo',
    note: 'Treat these as strategic bets, roll them out in phases, and do not shortchange training.',
  },
  {
    title: 'Low value / low cost',
    tone: 'amber',
    note: 'These can be piloted at a small scale, but they are not the engine of the stack.',
  },
  {
    title: 'Low value / high cost',
    tone: 'rose',
    note: 'Skip these whenever possible. They are classic budget sinkholes.',
  },
]

const relatedLinks = [
  {
    href: '/ai-roi-calculator',
    title: 'ROI Calculator',
    description: 'Turn the logic on this page into a quantified model.',
  },
  {
    href: '/best-ai-tools-small-business-2026',
    title: 'Best AI Tools for Small Business',
    description: 'See which tools belong on the shortlist.',
  },
  {
    href: '/ai-tools-budget-planning-enterprise-2026',
    title: 'Budget Planning Framework',
    description: 'Set the budget structure before you finalize the stack.',
  },
  {
    href: '/ai-tools-risk-assessment-enterprise-2026',
    title: 'Risk Assessment Framework',
    description: 'Returns only matter when you evaluate them alongside risk.',
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
                  AI Tools Cost-Benefit Analysis
                  <span className="brand-gradient-text block">Do not burn budget on polished demos.</span>
                </h1>

                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  This page keeps the original testing across 78 tools, research from 500+ companies, the ROI logic, and the internal links. The interface is the only thing that changed. The core message stays the same: the worst AI purchase is not the expensive one, but the expensive one that produces nothing.
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                  <Link href="/ai-roi-calculator" className="btn-brand inline-flex items-center gap-2">
                    Open the ROI calculator
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/ai-tools-budget-planning-enterprise-2026" className="btn-secondary inline-flex items-center gap-2">
                    Review budget planning
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
                        <div className="text-xl font-semibold text-slate-950">Four decision moves</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        Model first, choose second
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
              Cost-benefit decisions start with the right quadrant
              <span className="brand-gradient-text block">Place every tool where it actually belongs.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              The original four-quadrant model stays because it works. High-value, low-cost tools go first. High-value, high-cost tools roll out in phases. High-cost, low-value tools should rarely survive the review.
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
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Full analysis article</h2>
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
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Quick checks</h2>
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">If the subscription is cheap but nobody uses it, it is still waste.</div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">If a tool is expensive but eliminates large blocks of repetitive work, it may be the most valuable item in the stack.</div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">Do not treat AI as a bonus point. It only matters when it changes revenue, speed, or accuracy.</div>
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
                  <TrendingUp className="w-5 h-5 text-[#635bff]" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Next step</h2>
              </div>
              <p className="text-slate-600 leading-7 mb-6">
                After this page, the right move is not to bookmark it and keep browsing. List the AI tools you are already paying for, then calculate TCO, usage, and output. Without that step, even a strong analysis is just decorative theory.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/ai-roi-calculator" className="btn-brand inline-flex items-center gap-2">
                  Model ROI
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact the advisory team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
