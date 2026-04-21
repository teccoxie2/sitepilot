import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Sparkles,
  ShoppingCart,
  ShieldCheck,
  CheckCircle2,
  Gauge,
  Bot,
  Palette,
  Workflow,
  PenTool,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Best Website Builders 2026 | SitePilot'
const pageDescription =
  'Compare the best website builders in 2026 across AI generation, design flexibility, ecommerce readiness, SEO control, and long-term platform fit.'
const pageUrl = 'https://sitepilot.co/website-builders'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
}

const quickPicks = [
  {
    label: 'Fastest launch path',
    value: 'Wix Studio',
    note: 'Strong for teams that want speed, polish, and less setup drag.',
  },
  {
    label: 'Best visual simplicity',
    value: 'Squarespace',
    note: 'Good for clean presentation and low-maintenance publishing.',
  },
  {
    label: 'Best for commerce',
    value: 'Shopify',
    note: 'Still the default answer when the site exists to sell.',
  },
  {
    label: 'Real answer',
    value: 'Use-case first',
    note: 'The right builder depends on what the business actually needs.',
  },
]

const builders: {
  rank: string
  name: string
  strap: string
  description: string
  bullets: string[]
  href: string
  cta: string
  accent: keyof typeof accentMap
}[] = [
  {
    rank: '01',
    name: 'Wix Studio',
    strap: 'Best for high-speed marketing sites',
    description:
      'A polished visual builder with a fast path from idea to publish. Good when the team wants strong design output without dropping into a fully custom workflow.',
    bullets: ['Strong visual control', 'Fast team handoff', 'Good fit for branded landing pages'],
    href: 'https://www.wix.com/studio',
    cta: 'Visit Wix Studio',
    accent: 'blue',
  },
  {
    rank: '02',
    name: 'Squarespace',
    strap: 'Best for presentation-first brands',
    description:
      'A simpler publishing environment for teams that care more about visual cohesion, content, and ease of maintenance than deep structural customization.',
    bullets: ['Clean templates', 'Simple editing flow', 'Good for small brand sites'],
    href: '/best-website-builders-2026',
    cta: 'Read builder guide',
    accent: 'purple',
  },
  {
    rank: '03',
    name: 'Shopify',
    strap: 'Best for revenue-first builds',
    description:
      'When the core job is selling, Shopify stays hard to beat. Strong ecosystem, strong checkout maturity, and less compromise once catalog or operations complexity grows.',
    bullets: ['Mature commerce tooling', 'Reliable scaling path', 'Best fit for product-led sites'],
    href: '/best-ecommerce-website-builders-2026',
    cta: 'Read ecommerce analysis',
    accent: 'indigo',
  },
]

const criteria = [
  {
    title: 'AI output quality',
    body: 'We care whether the builder meaningfully reduces production time, not whether it can generate generic hero copy in ten seconds.',
    icon: Bot,
  },
  {
    title: 'Design control',
    body: 'Pretty templates are cheap. Real value comes from layout control, structure, and the ability to shape a site without fighting the editor.',
    icon: Palette,
  },
  {
    title: 'Business fit',
    body: 'A content site, brochure site, and ecommerce operation do not need the same stack. Wrong fit creates more pain than wrong styling.',
    icon: Workflow,
  },
  {
    title: 'Long-term trust',
    body: 'SEO controls, content portability, ownership boundaries, and maintainability matter more than flashy demos and launch-week hype.',
    icon: ShieldCheck,
  },
]

const signals = [
  'Stripe-style light palette',
  'Cleaner editorial hierarchy',
  'Softer gradients, less noise',
  'Ready for a future Readdy.ai feature card',
]

const accentMap = {
  blue: {
    glow: 'from-[#f7fbff] via-white to-[#f4f6ff]',
    badge: 'bg-sky-50 text-sky-700 border-sky-200',
    bullet: 'text-sky-600',
    button: 'bg-[#635bff] hover:bg-[#564ee8] text-white',
  },
  purple: {
    glow: 'from-[#fcfaff] via-white to-[#f7f4ff]',
    badge: 'bg-violet-50 text-violet-700 border-violet-200',
    bullet: 'text-violet-600',
    button: 'bg-[#635bff] hover:bg-[#564ee8] text-white',
  },
  indigo: {
    glow: 'from-[#fafaff] via-white to-[#f6f7ff]',
    badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    bullet: 'text-indigo-600',
    button: 'bg-[#635bff] hover:bg-[#564ee8] text-white',
  },
} as const

export default function WebsiteBuildersHub() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-04-17"
        modifiedDate="2026-04-17"
        authorName="SitePilot Team"
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
                2026 builder comparison
              </div>

              <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.05em] leading-[0.96] mb-6 text-slate-950">
                Website builders,
                <span className="block bg-gradient-to-r from-slate-950 via-indigo-700 to-sky-600 bg-clip-text text-transparent">
                  with better taste.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
                A website builder comparison in 2026 should evaluate AI-assisted setup, design flexibility, ecommerce readiness, SEO ownership, operating overhead, and long-term customization limits. This hub connects the main SitePilot builder guides so buyers can move from broad platform selection to specific decisions about ecommerce fit, WordPress tradeoffs, and free-plan constraints.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <Link
                  href="/best-website-builders-2026"
                  className="inline-flex items-center rounded-full bg-[#635bff] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(99,91,255,0.18)] hover:bg-[#564ee8] transition-colors"
                >
                  Open full builder guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/best-ecommerce-website-builders-2026"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
                >
                  Compare ecommerce platforms
                  <ShoppingCart className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  href="/website-builder-vs-wordpress-2026"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
                >
                  Builder vs WordPress
                </Link>
                <Link
                  href="/free-website-builders-2026"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
                >
                  Free plan comparison
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                {signals.map((signal) => (
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
                      <div className="text-sm text-slate-500 mb-1">SitePilot view</div>
                      <div className="text-xl font-semibold text-slate-950">Builder selection matrix</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Stripe palette
                    </div>
                  </div>

                  <div className="space-y-3">
                    {quickPicks.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4 hover:from-indigo-50/40 hover:to-sky-50/40 transition-colors"
                      >
                        <div className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">{item.label}</div>
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <div className="font-semibold text-slate-950">{item.value}</div>
                            <div className="text-sm text-slate-500 mt-1">{item.note}</div>
                          </div>
                          <Gauge className="h-5 w-5 text-indigo-500 shrink-0" />
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

      <main className="relative max-w-7xl mx-auto px-4 py-14 md:py-18">
        <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 mb-16">
          {quickPicks.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.75rem] border border-slate-200/90 bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.035)]"
            >
              <div className="text-sm text-slate-500 mb-3">{item.label}</div>
              <div className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-2">{item.value}</div>
              <p className="text-sm leading-relaxed text-slate-600">{item.note}</p>
            </div>
          ))}
        </section>

        <section className="mb-16 relative">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Featured picks</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] mb-4 text-slate-950">
              Same layout, Stripe-style color system
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              This keeps the improved structure you liked, but swaps the mood to a cleaner Stripe-like palette: lighter surfaces, tighter contrast, softer purple-blue energy, and less sci-fi drama.
            </p>
          </div>

          <div className="space-y-6 relative">
            <div className="absolute -inset-x-6 top-10 -z-10 h-[30rem] bg-[radial-gradient(circle_at_20%_24%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_80%_38%,rgba(14,165,233,0.05),transparent_24%),radial-gradient(circle_at_52%_100%,rgba(244,114,182,0.035),transparent_28%)]" />
            {builders.map((builder) => {
              const accent = accentMap[builder.accent]

              return (
                <article
                  key={builder.name}
                  className={`group relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-br ${accent.glow} p-[1px] shadow-[0_18px_44px_rgba(15,23,42,0.05)]`}
                >
                  <div className="rounded-[calc(2rem-1px)] bg-white px-6 py-6 md:px-8 md:py-8">
                    <div className="grid gap-8 lg:grid-cols-[96px_minmax(0,1fr)_240px] lg:items-start">
                      <div className="flex lg:block items-center gap-4">
                        <div className="flex h-18 w-18 items-center justify-center rounded-[1.35rem] border border-slate-200 bg-white text-2xl font-semibold tracking-[-0.04em] text-slate-950 shadow-sm">
                          {builder.rank}
                        </div>
                        <div className="text-sm text-slate-500 lg:hidden">{builder.strap}</div>
                      </div>

                      <div>
                        <div className={`hidden lg:inline-flex rounded-full border px-3 py-1 text-sm mb-4 ${accent.badge}`}>
                          {builder.strap}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-slate-950 mb-4">{builder.name}</h3>
                        <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">{builder.description}</p>
                        <div className="grid gap-3 md:grid-cols-3">
                          {builder.bullets.map((bullet) => (
                            <div
                              key={bullet}
                              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700"
                            >
                              <div className="flex items-start gap-3">
                                <CheckCircle2 className={`h-4 w-4 mt-0.5 shrink-0 ${accent.bullet}`} />
                                <span>{bullet}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                        <div className="text-sm text-slate-500 mb-2">Next step</div>
                        <p className="text-sm leading-relaxed text-slate-600 mb-5">
                          Use the summary to orient yourself, then go deeper before you lock in the platform decision.
                        </p>
                        <Link
                          href={builder.href}
                          className={`inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${accent.button}`}
                        >
                          {builder.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] mb-16 relative">
          <div className="rounded-[2rem] border border-slate-200/90 bg-[linear-gradient(180deg,#ffffff_0%,#fcfdff_100%)] p-8 shadow-[0_14px_32px_rgba(15,23,42,0.035)]">
            <div className="max-w-2xl mb-8">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Selection model</div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] mb-4 text-slate-950">How we judge a builder</h2>
              <p className="text-slate-600 leading-relaxed">
                Good builder pages should help a buyer think clearly, not numb them with giant hero numbers and fake certainty.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {criteria.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white mb-4 shadow-sm">
                      <Icon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950 mb-2">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{item.body}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200/90 bg-[linear-gradient(180deg,#ffffff_0%,#fbfcff_100%)] p-8 shadow-[0_14px_32px_rgba(15,23,42,0.035)]">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 mb-5">
              <PenTool className="h-3.5 w-3.5" />
              Color experiment
            </div>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-4">What changed in this pass</h2>
            <ul className="space-y-4 text-sm leading-relaxed text-slate-600 list-disc pl-5">
              <li>Swapped the deep dark palette for Stripe-like off-white surfaces and crisp contrast.</li>
              <li>Moved the accent system toward indigo, sky, and subtle violet instead of heavy neon glow.</li>
              <li>Kept the stronger layout you liked, so this is a color comparison instead of a layout reset.</li>
              <li>Made cards feel more editorial and premium, less “tech demo landing page.”</li>
              <li>This should be easier to scale across the rest of SitePilot if you want a consistent redesign system.</li>
            </ul>

            <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white p-5">
              <div className="text-sm text-slate-500 mb-2">Reference mood</div>
              <div className="text-slate-950 font-medium mb-3">Stripe palette, not Stripe clone</div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Lighter page canvas, richer typography contrast, restrained gradients, and UI elements that feel more like a premium SaaS brand than a cyberpunk concept mockup.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
