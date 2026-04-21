import Link from 'next/link'
import { ArrowRight, BarChart3, Bot, BrainCircuit, CheckCircle2, PenTool, Search, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

export { metadata } from './metadata'

const pageTitle = 'Best AI Tools 2026 | SitePilot'
const pageDescription =
  'AI tools in 2026 should be compared on workflow automation depth, output quality, integration fit, privacy risk, pricing discipline, and operator control so buyers can separate durable business value from demo-stage novelty.'
const pageUrl = 'https://sitepilot.co/ai-tools'

const cards = [
  {
    title: 'AI writing & SEO',
    desc: 'Content and SEO tooling evaluated on output quality, workflow value, and whether the result actually helps the business.',
    link: '/best-ai-writing-tools-2026',
    tag: 'Content systems',
    icon: PenTool,
  },
  {
    title: 'AI for small business',
    desc: 'Tools that automate useful work instead of generating one more glossy dashboard nobody needed.',
    link: '/best-ai-tools-small-business-2026',
    tag: 'Practical ROI',
    icon: Bot,
  },
  {
    title: 'AI SEO tools',
    desc: 'Search-oriented tooling compared on execution quality, workflow fit, and long-term usefulness beyond demo-day hype.',
    link: '/best-ai-seo-tools-2026',
    tag: 'Growth systems',
    icon: Search,
  },
]

const hubSignals = [
  'Judge tools by workflow improvement, not launch-day demos',
  'Care about privacy, latency, controllability, and fit',
  'Prefer durable systems over novelty spikes',
  'Keep the UI calm so the analysis feels credible',
]

const resourceLinks = [
  { href: '/ai-tools-cost-benefit-analysis-2026', title: 'Cost-benefit analysis', note: 'Evaluate investment and return in the same frame.' },
  { href: '/ai-tools-budget-planning-enterprise-2026', title: 'Budget planning', note: 'Build a budget with evidence instead of guesswork.' },
  { href: '/ai-tools-risk-assessment-enterprise-2026', title: 'Risk framework', note: 'Score risk before you chase hype.' },
  { href: '/ai-tools-security-compliance-checklist-2026', title: 'Security compliance', note: 'Keep security and compliance inside the buying process.' },
  { href: '/ai-tools-usage-tracking-dashboard-2026', title: 'Usage tracking', note: 'Track adoption and value after rollout.' },
] as const

export default function AiToolsHub2026() {
  return (
    <>
      <SchemaMarkup
        type="article"
        data={{
          headline: pageTitle,
          description: pageDescription,
          url: pageUrl,
          datePublished: '2026-04-19',
          dateModified: '2026-04-19',
        }}
      />

      <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
          <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
          <div className="absolute inset-x-0 top-[42rem] h-[24rem] bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
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
                    2026 AI tools hub
                  </div>

                  <h1 className="page-title mb-6 text-5xl md:text-7xl">
                    AI tools hub,
                    <span className="brand-gradient-text block">Bring budgeting, evaluation, and implementation into one operating system.</span>
                  </h1>

                  <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                    AI tools in 2026 should be compared on workflow automation depth, output quality, integration fit, privacy risk, pricing discipline, and operator control so buyers can separate durable business value from demo-stage novelty instead of mistaking entertaining product launches for real operating leverage.
                  </p>

                  <div className="mb-10 flex flex-wrap gap-3">
                    <Link href="/ai-tools-cost-benefit-analysis-2026" className="btn-brand inline-flex items-center gap-2">
                      Open cost analysis
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link href="/ai-tools-risk-assessment-enterprise-2026" className="btn-secondary inline-flex items-center gap-2">
                      Review risk framework
                    </Link>
                    <Link href="/ai-tools-security-compliance-checklist-2026" className="btn-secondary inline-flex items-center gap-2">
                      Check compliance
                    </Link>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
                    {hubSignals.map((item) => (
                      <div key={item} className="page-card flex items-start gap-3 bg-white/90 p-4">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                        <span className="text-sm leading-6 text-slate-700">{item}</span>
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
                          <div className="text-xl font-semibold text-slate-950">AI selection matrix</div>
                        </div>
                        <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                          Cleaner authority UI
                        </div>
                      </div>

                      <div className="space-y-3">
                        {[
                          ['Workflow value', 'Does it reduce real work or just create new review debt?'],
                          ['Output quality', 'Useful result quality matters more than shiny prompting theatrics'],
                          ['Business fit', 'Enterprise, SMB, creator, and SEO teams do not need the same stack'],
                          ['Operating risk', 'Privacy, model stability, latency, and lock-in all count'],
                        ].map(([title, note]) => (
                          <div key={title} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                            <div className="flex items-center justify-between gap-4">
                              <div>
                                <div className="font-semibold text-slate-950">{title}</div>
                                <div className="text-sm text-slate-500 mt-1">{note}</div>
                              </div>
                              <BrainCircuit className="h-5 w-5 text-indigo-500 shrink-0" />
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
            {cards.map((card) => {
              const Icon = card.icon
              return (
                <Link key={card.title} href={card.link} className="page-card p-8 hover:-translate-y-0.5 transition-transform block">
                  <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 mb-5">
                    {card.tag}
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#635bff]" />
                  </div>
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{card.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{card.desc}</p>
                  <div className="inline-flex items-center text-[#635bff] font-semibold">
                    Open audit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              )
            })}
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="page-card-glow p-8 md:p-12 surface-muted">
              <div className="max-w-3xl">
                <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Positioning</div>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                  AI pages should feel analytical.
                  <span className="block brand-gradient-text">Not like a vaporwave casino.</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  The lighter system gives these pages more editorial credibility and aligns them with the direction already established on the website builders hub. Good. That is exactly what a unified product should do.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/website-builders" className="btn-secondary">See the reference style</Link>
                  <Link href="/best-ai-seo-tools-2026" className="btn-brand inline-flex items-center gap-2">
                    Review SEO tools
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/ai-content-generator-comparison" className="btn-secondary">Compare content generators</Link>
                </div>
              </div>
            </div>

            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                <BarChart3 className="h-4 w-4 text-sky-600" />
                Related internal resources
              </div>
              <div className="mt-5 space-y-3">
                {resourceLinks.map((item) => (
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
          </section>
        </main>
      </div>
    </>
  )
}
