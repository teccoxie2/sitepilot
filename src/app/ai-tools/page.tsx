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

const evaluationCriteria = [
  ['Workflow value', 'Does it reduce real work or just create new review debt?'],
  ['Output quality', 'Useful result quality matters more than shiny prompting theatrics'],
  ['Business fit', 'Enterprise, SMB, creator, and SEO teams do not need the same stack'],
  ['Operating risk', 'Privacy, model stability, latency, and lock-in all count'],
] as const

const resourceLinks = [
  { href: '/ai-tools-cost-benefit-analysis-2026', title: 'Cost-benefit analysis', note: 'Evaluate investment and return in the same frame.' },
  { href: '/ai-tools-budget-planning-enterprise-2026', title: 'Budget planning', note: 'Build a budget with evidence instead of guesswork.' },
  { href: '/ai-tools-risk-assessment-enterprise-2026', title: 'Risk framework', note: 'Score risk before you chase hype.' },
  { href: '/ai-tools-security-compliance-checklist-2026', title: 'Security compliance', note: 'Keep security and compliance inside the buying process.' },
  { href: '/ai-tools-usage-tracking-dashboard-2026', title: 'Usage tracking', note: 'Track adoption and value after rollout.' },
] as const

export default function AiToolsHub2026() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="article"
        data={{
          headline: pageTitle,
          description: pageDescription,
          url: pageUrl,
          datePublished: '2026-04-19',
          dateModified: '2026-04-22',
        }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="relative border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 pt-22 pb-20 md:pt-28 md:pb-24">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 mb-6 shadow-sm backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-indigo-500" />
                2026 AI tools hub
              </div>

              <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.05em] leading-[0.96] mb-6 text-slate-950">
                AI tools,
                <span className="block bg-gradient-to-r from-slate-950 via-indigo-700 to-sky-600 bg-clip-text text-transparent">
                  with better operating discipline.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
                AI tools in 2026 should be compared on workflow automation depth, output quality, integration fit, privacy risk, pricing discipline, and operator control so buyers can separate durable business value from demo-stage novelty instead of mistaking entertaining product launches for real operating leverage.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <Link
                  href="/ai-tools-cost-benefit-analysis-2026"
                  className="inline-flex items-center rounded-full bg-[#635bff] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(99,91,255,0.18)] hover:bg-[#564ee8] transition-colors"
                >
                  Open cost analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/ai-tools-risk-assessment-enterprise-2026"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
                >
                  Review risk framework
                </Link>
                <Link
                  href="/ai-tools-security-compliance-checklist-2026"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
                >
                  Check compliance
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                {hubSignals.map((signal) => (
                  <div
                    key={signal}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/85 px-4 py-4 shadow-sm backdrop-blur-xl"
                  >
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0" />
                    <span className="text-sm text-slate-700">{signal}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/70 bg-white/75 p-5 backdrop-blur-2xl shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Evaluation frame</div>
                      <div className="text-xl font-semibold text-slate-950">AI selection matrix</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Cleaner authority UI
                    </div>
                  </div>

                  <div className="space-y-3">
                    {evaluationCriteria.map(([title, note]) => (
                      <div
                        key={title}
                        className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4 hover:from-indigo-50/40 hover:to-sky-50/40 transition-colors"
                      >
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

      <main className="relative max-w-7xl mx-auto px-4 py-16 md:py-20">
        <section className="grid gap-6 md:grid-cols-3 mb-16">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <Link
                key={card.title}
                href={card.link}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(15,23,42,0.08)] transition-all block"
              >
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
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-[#f7fbff] via-white to-[#f7f4ff] p-8 md:p-12 shadow-[0_24px_60px_rgba(15,23,42,0.06)]">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Positioning</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                AI pages should feel analytical.
                <span className="block bg-gradient-to-r from-slate-950 via-indigo-700 to-sky-600 bg-clip-text text-transparent">
                  Not like a vaporwave casino.
                </span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                The lighter system gives these pages more editorial credibility and aligns them with the direction already established on the website builders hub. Good. That is exactly what a unified product should do.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/website-builders"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
                >
                  See the reference style
                </Link>
                <Link
                  href="/best-ai-seo-tools-2026"
                  className="inline-flex items-center rounded-full bg-[#635bff] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(99,91,255,0.18)] hover:bg-[#564ee8] transition-colors"
                >
                  Review SEO tools
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/ai-content-generator-comparison"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
                >
                  Compare content generators
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
              <BarChart3 className="h-4 w-4 text-sky-600" />
              Related internal resources
            </div>
            <div className="mt-5 space-y-3">
              {resourceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-2xl border border-slate-200 bg-slate-50/90 p-4 transition hover:border-sky-200 hover:bg-sky-50/70"
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
  )
}
