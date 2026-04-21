import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Coins,
  Gauge,
  Globe,
  Headphones,
  Rocket,
  ShieldCheck,
  Sparkles,
  XCircle,
} from 'lucide-react'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Hostinger Review 2026 | SitePilot'
const pageDescription =
  'A practical 2026 Hostinger review covering LiteSpeed performance, renewal pricing, support quality, WordPress fit, and whether the budget proposition still holds up after the intro offer ends.'
const pageUrl = 'https://sitepilot.co/hosting/hostinger-review'

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
    label: 'Verdict',
    value: 'Best budget performance pick',
    note: 'Hostinger is the low-cost option that still feels like a usable hosting product instead of a trap dressed up as a deal.',
  },
  {
    label: 'Best fit',
    value: 'Smaller sites and cost-sensitive WordPress builds',
    note: 'Strong fit for brochure sites, early-stage content sites, and lean operators who still care about speed.',
  },
  {
    label: 'Main advantage',
    value: 'LiteSpeed + NVMe value',
    note: 'The stack is materially better than what many low-end hosts ship at comparable pricing.',
  },
  {
    label: 'Main caution',
    value: 'Renewals and support limits',
    note: 'The budget story gets weaker if you ignore long-term pricing and expect premium support behavior.',
  },
]

const scorecard = [
  {
    title: 'Performance',
    score: '8.9/10',
    body: 'LiteSpeed, caching support, and NVMe storage give Hostinger a better speed profile than most cheap-hosting competitors.',
    icon: Rocket,
  },
  {
    title: 'Support quality',
    score: '7.4/10',
    body: 'Support is usable, but it is not the reason to buy Hostinger. This is where premium providers still separate themselves.',
    icon: Headphones,
  },
  {
    title: 'Pricing discipline',
    score: '8.2/10',
    body: 'Entry pricing is attractive, but renewal pricing still matters. Budget buyers need to look past the first invoice.',
    icon: Coins,
  },
  {
    title: 'WordPress fit',
    score: '8.7/10',
    body: 'A strong budget WordPress path thanks to LiteSpeed, straightforward setup, and a lower-friction operating model.',
    icon: Globe,
  },
]

const strengths = [
  'LiteSpeed caching makes the performance story stronger than most budget-hosting rivals.',
  'NVMe-backed plans help the stack feel faster and less strained under normal small-site workloads.',
  'hPanel is simpler than legacy cPanel-heavy budget hosts and easier for non-technical owners to live with.',
  'Hostinger is usually the least regrettable answer when budget matters but total junk is unacceptable.',
]

const tradeoffs = [
  'Support is decent, not elite. If support quality is your top filter, SiteGround is still the safer answer.',
  'Renewal pricing reduces some of the initial “wow” once the promo period ends.',
  'The cheapest tiers can feel restrictive if the site grows into a more serious commercial property.',
  'Buying purely because the intro plan is cheap is how people end up making dumb hosting decisions.',
]

const decisionRows = [
  {
    title: 'Choose Hostinger if…',
    points: [
      'You want the strongest speed-per-dollar profile in the budget lane',
      'You need cheap hosting that still feels operationally sane',
      'You are comfortable accepting support that is good enough rather than premium',
    ],
  },
  {
    title: 'Skip Hostinger if…',
    points: [
      'You want top-tier support as the main buying criterion',
      'The site is commercially critical and downtime anxiety is expensive',
      'You already know the project will outgrow budget hosting quickly',
    ],
  },
  {
    title: 'Best comparison path',
    points: [
      'Compare against Bluehost if you care about beginner onboarding',
      'Compare against SiteGround if you care about support and operational trust',
      'Compare against budget-hosting guides if price is the main filter',
    ],
  },
]

const related = [
  {
    title: 'Hostinger vs Bluehost',
    href: '/hosting/hostinger-vs-bluehost',
    description: 'See where Hostinger wins on speed and value, and where Bluehost still has a simplicity case.',
    category: 'hosting',
  },
  {
    title: 'SiteGround Review',
    href: '/hosting/siteground-review',
    description: 'Compare the budget-performance leader against the premium support-first hosting pick.',
    category: 'hosting',
  },
  {
    title: 'Cheap Hosting Guide',
    href: '/hosting/cheap-hosting',
    description: 'Review the broader cheap-hosting shortlist before locking into one provider.',
    category: 'hosting',
  },
]

export default function HostingerReview2026() {
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
                2026 provider audit
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Hostinger review,
                <span className="block brand-gradient-text">without the affiliate hallucinations.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                Hostinger is a budget hosting provider built around LiteSpeed infrastructure, NVMe storage, and a simpler control experience. In 2026, the real buying question is whether that low-cost stack still holds up once support quality, renewals, and long-term fit enter the picture.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/hosting/hostinger-vs-bluehost" className="btn-brand">
                  Compare against Bluehost
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/hosting/cheap-hosting" className="btn-secondary">
                  See cheap-hosting shortlist
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
                      <div className="text-sm text-slate-500 mb-1">Fast verdict</div>
                      <div className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Why Hostinger still works</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Budget, not junk
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      'Hostinger wins because the performance baseline is better than most low-cost hosts.',
                      'The platform is easier to operate than older bargain stacks built around clunky control panels.',
                      'The main compromises are support depth and long-term pricing, not raw day-one usability.',
                    ].map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-4 w-4 mt-1 text-indigo-500 shrink-0" />
                          <p className="text-sm text-slate-700 leading-6">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-amber-200 bg-amber-50/70 px-4 py-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                      <p className="text-sm text-amber-900 leading-6">
                        If the site carries serious business risk, do not confuse “best budget host” with “best host, full stop.” That is how people end up being weirdly proud of avoidable pain.
                      </p>
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
            <div className="page-pill mb-4">Scorecard</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">How Hostinger holds up in the categories that matter.</h2>
            <p className="page-lead text-lg">
              This review cares about operational reality: speed, support, pricing discipline, and WordPress fit. Not homepage theatre.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {scorecard.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="page-card-soft p-6">
                  <div className="inline-flex rounded-2xl bg-indigo-50 p-3 mb-5">
                    <Icon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-2">{item.score}</div>
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
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="page-card p-7">
              <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700 mb-5">
                What Hostinger gets right
              </div>
              <div className="space-y-3">
                {strengths.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 mt-1 text-indigo-500 shrink-0" />
                      <p className="text-sm text-slate-700 leading-6">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="page-card p-7">
              <div className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-rose-700 mb-5">
                Where it still falls short
              </div>
              <div className="space-y-3">
                {tradeoffs.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <div className="flex items-start gap-3">
                      <XCircle className="h-4 w-4 mt-1 text-rose-500 shrink-0" />
                      <p className="text-sm text-slate-700 leading-6">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section border-y border-slate-200/70 surface-warm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Decision guide</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">When Hostinger is the right answer, and when it is not.</h2>
            <p className="page-lead text-lg">
              The smartest hosting decision is not “buy the cheapest.” It is “buy the cheapest option that still matches the real operating risk.”
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {decisionRows.map((item) => (
              <div key={item.title} className="page-card p-7">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-5">{item.title}</h3>
                <div className="space-y-3">
                  {item.points.map((point) => (
                    <div key={point} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                      {point}
                    </div>
                  ))}
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
