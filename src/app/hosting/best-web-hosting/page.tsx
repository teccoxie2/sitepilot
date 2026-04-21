import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Coins, Gauge, Headphones, ShieldCheck, Sparkles, XCircle } from 'lucide-react'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Best Web Hosting 2026 | SitePilot'
const pageDescription =
  'Detailed reviews of the best web hosting providers for 2026, comparing speed, uptime, pricing, and support for business and personal sites.'
const pageUrl = 'https://sitepilot.co/hosting/best-web-hosting'

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
}

const quickPicks = [
  {
    label: 'Best overall',
    value: 'SiteGround',
    note: 'Best balance of uptime discipline, support quality, and low operational nonsense.',
  },
  {
    label: 'Best for value',
    value: 'Hostinger',
    note: 'A strong low-cost route for smaller sites that still want a usable hosting experience.',
  },
  {
    label: 'Best for WordPress bias',
    value: 'Bluehost',
    note: 'Still relevant when the main goal is straightforward WordPress onboarding and familiarity.',
  },
  {
    label: 'Main thing to watch',
    value: 'Renewal pricing',
    note: 'Good promo pricing means very little if the long-term economics get ugly.',
  },
]

const criteria = [
  {
    title: 'Support quality',
    body: 'The question is not whether support exists. The question is whether they actually solve problems without draining your will to live.',
    icon: Headphones,
  },
  {
    title: 'Uptime discipline',
    body: 'A hosting provider should be boring in the best way. Reliability matters more than launch-day marketing glitter.',
    icon: ShieldCheck,
  },
  {
    title: 'Speed with context',
    body: 'Speed matters, but not as a screenshot competition. We care about realistic site experience and operational consistency.',
    icon: Gauge,
  },
  {
    title: 'Commercial fit',
    body: 'Pricing, renewals, plan limitations, and upsell traps matter more than a cheap first invoice.',
    icon: Coins,
  },
]

const providers = [
  {
    rank: '01',
    name: 'SiteGround',
    badge: 'Best overall support + speed balance',
    description:
      'SiteGround is the cleanest all-round answer here. It gives teams better support quality, strong uptime performance, and a hosting experience that feels less like a discount bin.',
    pros: ['Strong support quality', 'Good operational consistency', 'Solid WordPress handling'],
    cons: ['Renewals are not gentle', 'Entry pricing is not the lowest'],
    href: '/hosting/siteground-review',
    cta: 'Read full SiteGround review',
  },
  {
    rank: '02',
    name: 'Hostinger',
    badge: 'Best value for smaller sites',
    description:
      'Hostinger earns its place by being cheap without immediately feeling broken. It is not premium, but it is often the least regrettable budget answer.',
    pros: ['Low entry price', 'Good beginner usability', 'Strong value-to-feature ratio'],
    cons: ['Support is weaker than SiteGround', 'Renewals still climb'],
    href: '/hosting/hostinger-review',
    cta: 'Read full Hostinger review',
  },
  {
    rank: '03',
    name: 'Bluehost',
    badge: 'Best for straightforward WordPress onboarding',
    description:
      'Bluehost stays relevant because it remains easy for beginners and WordPress-first users to adopt. It is not the strongest technical option, but simplicity still has a market.',
    pros: ['Beginner-friendly setup', 'Clear WordPress alignment', 'Mainstream familiarity'],
    cons: ['Not the fastest option', 'Value proposition is weaker for advanced users'],
    href: '/hosting/hostinger-vs-bluehost',
    cta: 'See Hostinger vs Bluehost',
  },
]

const related = [
  {
    title: 'WordPress Hosting',
    href: '/hosting/wordpress-hosting',
    description: 'Best hosting for WordPress sites.',
    category: 'hosting',
  },
  {
    title: 'Cheap Hosting',
    href: '/hosting/cheap-hosting',
    description: 'Budget-friendly hosting options.',
    category: 'hosting',
  },
]

const decisionSignals = [
  {
    title: 'Best default for most sites',
    body: 'SiteGround stays the cleanest all-round choice when support quality and operational trust matter more than chasing the lowest intro number.',
  },
  {
    title: 'Best budget lane',
    body: 'Hostinger is the budget answer that still feels usable once the landing page confetti disappears.',
  },
  {
    title: 'Best specialist lane',
    body: 'Bluehost only makes sense when easy WordPress onboarding matters more than raw performance or premium support.',
  },
]

export default function BestWebHostingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-04-18"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-22 pb-18 md:pt-28 md:pb-24">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-indigo-500" />
                2026 hosting shortlist
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Best web hosting,
                <span className="block brand-gradient-text">without pretending every host is equal.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                This page is the cleaner shortlist version: the hosts most worth paying attention to, based on real support quality, uptime behavior, speed, and long-term economics rather than promo banner noise.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/best-web-hosting-2026" className="btn-brand">
                  Open full hosting ranking
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/hosting" className="btn-secondary">
                  Back to hosting hub
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {quickPicks.map((item) => (
                  <div key={item.label} className="page-card px-4 py-4">
                    <div className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-2">{item.label}</div>
                    <div className="font-semibold text-slate-950 mb-1">{item.value}</div>
                    <div className="text-sm text-slate-600 leading-6">{item.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6">
                <div className="page-card p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Selection lens</div>
                      <div className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">What separates the top three</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Utility over hype
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      'SiteGround wins on support and operational trust.',
                      'Hostinger wins on low-cost practicality.',
                      'Bluehost stays relevant because easy WordPress onboarding still matters.',
                    ].map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-4 w-4 mt-1 text-indigo-500 shrink-0" />
                          <p className="text-sm text-slate-700 leading-6">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <div className="text-sm text-slate-500 mb-3">Key buying filters</div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-700">Support quality</div>
                      <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-700">Uptime discipline</div>
                      <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-700">Pricing honesty</div>
                      <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-700">WordPress fit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section surface-muted relative">
        <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Selection criteria</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">How we choose the shortlist.</h2>
            <p className="page-lead text-lg">
              The point of a shortlist is not to be exhaustive. The point is to reduce noise and highlight the few providers most likely to make sense for real-world use.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-6">
            {decisionSignals.map((item) => (
              <div key={item.title} className="page-card p-6">
                <div className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-2">Decision signal</div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {criteria.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="page-card-soft p-6">
                  <div className="inline-flex rounded-2xl bg-indigo-50 p-3 mb-5">
                    <Icon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{item.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{item.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Top 3 providers</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">The hosting providers worth keeping in the conversation.</h2>
            <p className="page-lead text-lg">
              Different buyers need different things, but these three cover the most defensible lanes in the current market.
            </p>
          </div>

          <div className="space-y-6">
            {providers.map((provider) => (
              <div key={provider.rank} className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.6rem] p-7 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                    <div className="max-w-3xl">
                      <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-700 mb-4">
                        #{provider.rank} · {provider.badge}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">{provider.name}</h3>
                      <p className="text-base md:text-lg leading-8 text-slate-600 mb-6">{provider.description}</p>

                      <div className="grid md:grid-cols-2 gap-5 mb-6">
                        <div className="rounded-2xl border border-indigo-200 bg-indigo-50/70 px-5 py-5">
                          <div className="text-sm font-semibold uppercase tracking-[0.14em] text-indigo-800 mb-3">Pros</div>
                          <div className="space-y-3">
                            {provider.pros.map((pro) => (
                              <div key={pro} className="flex items-start gap-3 text-sm text-indigo-950">
                                <CheckCircle2 className="h-4 w-4 mt-0.5 text-indigo-600 shrink-0" />
                                <span>{pro}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-2xl border border-rose-200 bg-rose-50/70 px-5 py-5">
                          <div className="text-sm font-semibold uppercase tracking-[0.14em] text-rose-800 mb-3">Cons</div>
                          <div className="space-y-3">
                            {provider.cons.map((con) => (
                              <div key={con} className="flex items-start gap-3 text-sm text-rose-950">
                                <XCircle className="h-4 w-4 mt-0.5 text-rose-600 shrink-0" />
                                <span>{con}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-56 shrink-0">
                      <div className="page-card-soft p-5 h-full flex flex-col justify-between">
                        <div>
                          <div className="text-sm text-slate-500 mb-2">Best fit</div>
                          <div className="text-lg font-semibold tracking-[-0.03em] text-slate-950 mb-4">
                            Operators who want clearer trade-offs instead of another bloated top-10 list pretending all picks are amazing.
                          </div>
                        </div>
                        <Link href={provider.href} className="btn-brand w-full mt-6">
                          {provider.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="max-w-6xl mx-auto px-4">
          <RelatedLinks links={related} />
        </div>
      </section>
    </div>
  )
}
