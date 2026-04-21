import Link from 'next/link'
import { ArrowRight, BarChart3, CheckCircle2, Compass, Target, TrendingUp, Zap } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import AIMarketingAttributionTool from '@/components/tools/AIMarketingAttributionTool'
import { pageDescription, pageTitle, pageUrl } from './metadata'

const heroSignals = [
  'Keeps the original multi-channel attribution, ROI tracking, and customer journey analysis.',
  'Keeps the AI attribution model, budget guidance, and advanced mode toggle.',
  'Moves the page into the current light Stripe-ish layout and card system.',
  'Retains metadata, canonical, schema, and internal links.',
]

const highlightCards = [
  { label: 'Marketing channels', value: '12+', note: 'Still built for multi-channel attribution analysis.' },
  { label: 'Efficiency gain', value: '75%+', note: 'The original performance promise stays in place.' },
  { label: 'Attribution accuracy', value: '90%+', note: 'AI-enhanced attribution remains visible in the tool.' },
  { label: 'Decision level', value: 'CMO-level', note: 'Still written for marketing leaders and operators.' },
]

const internalLinks = [
  { href: '/ai-roi-calculator', title: 'AI ROI Calculator', note: 'Connect marketing outcomes to financial return.' },
  { href: '/ai-tools', title: 'AI Tools Hub', note: 'Return to the main tool directory.' },
  { href: '/ai-content-performance-analytics-2026', title: 'Content Performance Analytics', note: 'Review how content contributes to conversion performance.' },
  { href: '/ai-content-optimization-framework-2026', title: 'Content Optimization Framework', note: 'Turn optimization actions into a repeatable system.' },
  { href: '/apply-for-audit', title: 'Talk to SitePilot', note: 'Book a consult if you need deeper advisory analysis.' },
] as const

export default function AIMarketingAttributionAnalysisPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'AI Tools', href: '/ai-tools' },
    { label: 'AI Marketing Attribution Analysis Tool 2026' },
  ]

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
          <nav className="mb-6 text-sm text-slate-600" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbItems.map((item, index) => (
                <li key={item.label} className="flex items-center gap-2">
                  {index > 0 && <span className="text-slate-300">/</span>}
                  {item.href ? (
                    <Link href={item.href} className="transition-colors hover:text-[#635bff]">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-slate-900">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <section className="page-hero relative">
            <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="max-w-3xl">
                  <div className="page-pill mb-6">
                    <BarChart3 className="h-4 w-4 text-[#635bff]" />
                    CMO-level attribution analysis
                  </div>

                  <h1 className="page-title mb-6 text-5xl md:text-7xl">
                    AI marketing attribution analysis,
                    <span className="brand-gradient-text block">separate channel credit before teams argue by instinct.</span>
                  </h1>

                  <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                    This page keeps the original multi-channel attribution, AI-enhanced model, budget optimization guidance, and advanced mode toggle. Only the visual system has been pulled into SitePilot's current light design language.
                  </p>

                  <div className="mb-10 flex flex-wrap gap-3">
                    <a href="#attribution-tool" className="btn-brand inline-flex items-center gap-2">
                      Open attribution tool
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link href="/ai-roi-calculator" className="btn-secondary inline-flex items-center gap-2">
                      Tie to ROI
                    </Link>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {heroSignals.map((item) => (
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
                    <div className="page-card space-y-5 bg-white/95 p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="mb-1 text-sm text-slate-500">What this tool keeps</div>
                          <div className="text-xl font-semibold text-slate-950">Same attribution engine, cleaner shell</div>
                        </div>
                        <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                          12+ channels
                        </div>
                      </div>

                      <div className="grid gap-3">
                        {[
                          ['Inputs', 'Impressions, clicks, conversions, cost, and revenue.'],
                          ['Outputs', 'AI-enhanced attribution, ROI, efficiency ratios, and priority guidance.'],
                          ['Modes', 'Standard and advanced mode toggles stay intact.'],
                          ['UI system', 'The shell now uses the unified light Stripe-ish layout.'],
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
                          The attribution model is unchanged. Only the shell that looked like a 2020 relic was replaced.
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
              {highlightCards.map((card) => (
                <div key={card.label} className="page-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-3xl font-semibold tracking-tight text-slate-950">{card.value}</div>
                  <div className="mt-2 text-sm font-medium text-slate-900">{card.label}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="attribution-tool" className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <Target className="h-4 w-4" />
                Attribution workspace
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                Stop blaming channels for each other and line the data up first.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                This tool still brings impressions, clicks, conversions, cost, and revenue into one attribution framework. It just now looks like it belongs to the same product family.
              </p>
            </div>

            <div className="mt-10 grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="page-card-glow p-1.5">
                <div className="page-card-soft overflow-hidden rounded-[1.75rem] bg-white p-0">
                  <AIMarketingAttributionTool />
                </div>
              </div>

              <div className="space-y-6">
                <div className="page-card-soft p-6 md:p-8">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <TrendingUp className="h-4 w-4 text-[#635bff]" />
                    Why this page matters
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      ['Budget optimization', 'Shift spend toward high-ROI channels instead of allocating by volume or politics.'],
                      ['Journey analysis', 'See what each touchpoint actually contributes across the funnel.'],
                      ['AI-enhanced attribution', 'A better fit than single last-touch models for complex B2B and multi-channel motion.'],
                      ['Executive narrative', 'Decision-makers need clear conclusions, not attribution folklore.'],
                    ].map(([title, note]) => (
                      <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                        <div className="font-semibold text-slate-950">{title}</div>
                        <div className="mt-1 text-sm text-slate-600">{note}</div>
                      </div>
                    ))}
                  </div>
                </div>

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
              </div>
            </div>
          </section>

          <section className="mt-16 text-center">
            <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="rounded-[1.5rem] bg-gradient-to-r from-[#0f172a] via-[#635bff] to-[#7c3aed] p-8 text-white">
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Ready to improve your attribution strategy?</h3>
                <p className="mx-auto mt-3 max-w-2xl text-white/85">
                  Connect marketing attribution results to ROI, budget planning, and content optimization workflows if you want real decision support.
                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/ai-tools" className="btn-brand bg-white text-slate-950 hover:bg-slate-100">
                    Explore more AI tools
                  </Link>
                  <Link href="/ai-roi-calculator" className="btn-secondary border-white/25 bg-white/10 text-white hover:bg-white/15">
                    AI ROI Calculator
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-slate-600">
              <p>(c) 2026 SitePilot AI Team. Professional AI marketing attribution analysis tool.</p>
              <p className="mt-1">Built on multi-channel attribution methods and industry best practices.</p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
