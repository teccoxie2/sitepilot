import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Coins,
  Globe,
  LayoutTemplate,
  Search,
  Shield,
  Sparkles,
  XCircle,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import RelatedLinks, { websiteBuilderRelatedLinks } from '@/components/RelatedLinks'

const pageTitle = 'Free Website Builders 2026: What You Actually Get for Free | SitePilot'
const pageDescription =
  'A practical 2026 guide to free website builders. Compare Wix, Framer, and Weebly on branding limits, domains, SEO control, and when free plans stop making sense.'
const pageUrl = 'https://sitepilot.co/free-website-builders-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
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

const quickFacts = [
  'Free plans are fine for prototypes, student work, and internal mockups.',
  'The real cost usually shows up as forced branding, weak domains, and limited SEO control.',
  'If the site needs to rank, sell, or look serious, free usually stops being free pretty fast.',
  'The best free option depends on whether you care more about design, simplicity, or experimentation.',
]

const matrix = [
  {
    builder: 'Wix Free',
    storage: '500MB',
    branding: 'High',
    verdict: 'Best all-round feature access',
  },
  {
    builder: 'Framer Free',
    storage: 'Limited',
    branding: 'Moderate',
    verdict: 'Best visual polish for experiments',
  },
  {
    builder: 'Weebly Free',
    storage: '500MB',
    branding: 'High',
    verdict: 'Usable, but aging',
  },
]

const decisionSignals = [
  {
    title: 'Use free when',
    body: 'You are testing an idea, sketching a portfolio, or mocking up an internal page before a real rollout.',
  },
  {
    title: 'Upgrade when',
    body: 'You need a proper domain, cleaner trust signals, better analytics, or basic SEO ownership.',
  },
  {
    title: 'Skip free entirely when',
    body: 'The site must rank, convert, or represent a real business that cannot afford to look provisional.',
  },
]

const recommendations = [
  {
    title: 'Wix Free',
    badge: 'Best overall free feature set',
    score: '8.8/10',
    description:
      'Still the broadest free builder for non-technical users. You get real editing flexibility, templates, apps, and a smoother first-site experience than most free plans.',
    pros: ['Strong editor', 'Easy launch path', 'Most balanced free entry point'],
    caveat: 'You still live on a Wix subdomain with visible platform branding.',
    href: 'https://www.wix.com/',
    cta: 'Visit Wix',
  },
  {
    title: 'Framer Free',
    badge: 'Best for modern visual drafts',
    score: '9.1/10',
    description:
      'If your priority is visual quality and fast mockups, Framer feels cleaner and more current than legacy builders. Good for landing page prototypes and portfolio experiments.',
    pros: ['Modern aesthetics', 'Good for design-first work', 'Feels less dated'],
    caveat: 'The free plan is not a serious long-term answer for a business site.',
    href: '/website-builders',
    cta: 'See builder hub',
  },
  {
    title: 'Weebly Free',
    badge: 'Simple but legacy-leaning',
    score: '6.7/10',
    description:
      'Weebly still works for very basic projects, but it feels more like a holdover than a forward-looking choice. Fine for a quick internal page. Not exciting.',
    pros: ['Low friction', 'Easy for beginners', 'Enough for tiny brochure pages'],
    caveat: 'The product feels older, and the ceiling arrives early.',
    href: '/best-website-builders-2026',
    cta: 'Compare all builders',
  },
]

const limits = [
  {
    title: 'Branding tax',
    body: 'Free builders usually want their logo, banner, or badge on your site. That is the actual business model, not generosity.',
    icon: Sparkles,
  },
  {
    title: 'Weak domain trust',
    body: 'A subdomain is fine for testing. It is not what you want when a customer, recruiter, or buyer is deciding whether you look legit.',
    icon: Globe,
  },
  {
    title: 'SEO ceiling',
    body: 'Even when the editor offers basic SEO fields, free plans rarely give you the ownership, domain quality, or control needed for serious search work.',
    icon: Search,
  },
  {
    title: 'Upgrade gravity',
    body: 'The moment you want a custom domain, better analytics, or cleaner branding, the “free” plan starts nudging you toward paid tiers.',
    icon: Coins,
  },
]

const useCases = [
  {
    title: 'Good use of free',
    points: ['Personal test site', 'Student portfolio draft', 'Internal concept demo', 'Landing page prototype before paid rollout'],
    tone: 'good',
  },
  {
    title: 'Bad use of free',
    points: ['Serious business homepage', 'SEO-first content site', 'Trust-critical services site', 'Revenue-focused brand launch'],
    tone: 'bad',
  },
]

export default function FreeWebsiteBuilders2026() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-04"
        modifiedDate="2026-04-17"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-x-0 top-[42rem] h-[24rem] bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-22 pb-18 md:pt-28 md:pb-24">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-10 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-indigo-500" />
                2026 free builder review
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Free website builders,
                <span className="block brand-gradient-text">without the fairy tale.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                A free website builder in 2026 usually trades platform branding, weaker domains, limited SEO control, and upgrade pressure for low upfront cost. This comparison reviews Wix, Framer, and Weebly so teams can judge when a free plan is fine for testing and when it becomes a credibility tax.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/best-website-builders-2026" className="btn-brand">
                  Compare paid and free options
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/website-builders" className="btn-secondary">
                  Open builder hub
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {quickFacts.map((fact) => (
                  <div key={fact} className="page-card px-4 py-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 mt-1 text-indigo-500 shrink-0" />
                      <p className="text-sm text-slate-700 leading-6">{fact}</p>
                    </div>
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
                      <div className="text-sm text-slate-500 mb-1">SitePilot quick take</div>
                      <div className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                        Free plan reality check
                      </div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Practical, not dreamy
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {matrix.map((row) => (
                      <div key={row.builder} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="font-semibold text-slate-950">{row.builder}</div>
                            <div className="text-sm text-slate-500 mt-1">{row.verdict}</div>
                          </div>
                          <div className="text-right text-sm">
                            <div className="text-slate-500">Storage</div>
                            <div className="font-semibold text-slate-900">{row.storage}</div>
                          </div>
                        </div>
                        <div className="mt-3 inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                          Branding pressure: {row.branding}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-amber-200 bg-amber-50/70 px-4 py-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                      <p className="text-sm text-amber-900 leading-6">
                        If the site needs a custom domain, cleaner trust signals, or basic commercial credibility, you are already near the edge of what free plans should be used for.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section surface-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">What free actually includes</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">The trade-offs, without cosplay.</h2>
            <p className="page-lead text-lg">
              Most free builders are decent onboarding tools. They are not generous long-term website strategies. Here is where the constraints actually show up.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-6">
            {decisionSignals.map((item) => (
              <div key={item.title} className="page-card p-6">
                <div className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-2">Decision signal</div>
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {limits.map((item) => {
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
            <div className="page-pill mb-4">Top recommendations</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">Three free options worth mentioning.</h2>
            <p className="page-lead text-lg">
              None of these are magic. They are simply the least silly answers depending on what you need to test.
            </p>
          </div>

          <div className="space-y-6">
            {recommendations.map((item) => (
              <div key={item.title} className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.6rem] p-7 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                    <div className="max-w-3xl">
                      <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-700 mb-4">
                        {item.badge}
                      </div>
                      <div className="flex items-end gap-4 flex-wrap mb-4">
                        <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-slate-950">{item.title}</h3>
                        <span className="text-sm font-semibold text-slate-500">{item.score}</span>
                      </div>
                      <p className="text-base md:text-lg leading-8 text-slate-600 mb-6">{item.description}</p>

                      <div className="grid sm:grid-cols-3 gap-3 mb-6">
                        {item.pros.map((pro) => (
                          <div key={pro} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                            {pro}
                          </div>
                        ))}
                      </div>

                      <div className="rounded-2xl border border-amber-200 bg-amber-50/70 px-4 py-4 text-sm leading-6 text-amber-900">
                        <span className="font-semibold">Watch-out:</span> {item.caveat}
                      </div>
                    </div>

                    <div className="lg:w-56 shrink-0">
                      <div className="page-card-soft p-5 h-full flex flex-col justify-between">
                        <div>
                          <div className="text-sm text-slate-500 mb-2">Best use</div>
                          <div className="text-lg font-semibold tracking-[-0.03em] text-slate-950 mb-4">
                            Early-stage testing, not final trust-building.
                          </div>
                        </div>
                        <Link href={item.href} className="btn-brand w-full mt-6">
                          {item.cta}
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

      <section className="page-section surface-warm border-y border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 items-start">
            {useCases.map((block) => (
              <div key={block.title} className="page-card p-7 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`inline-flex rounded-2xl p-3 ${
                      block.tone === 'good' ? 'bg-indigo-50' : 'bg-rose-50'
                    }`}
                  >
                    {block.tone === 'good' ? (
                      <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-rose-600" />
                    )}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-slate-950">{block.title}</h2>
                </div>
                <div className="space-y-3">
                  {block.points.map((point) => (
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

      <section className="page-section">
        <div className="max-w-5xl mx-auto px-4">
          <div className="page-card-glow p-1.5">
            <div className="page-card rounded-[1.8rem] p-8 md:p-10 text-center">
              <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 mb-5">
                Bottom line
              </div>
              <h2 className="page-title text-3xl md:text-5xl mb-5">Free is for learning. Paid is for being taken seriously.</h2>
              <p className="page-lead text-lg max-w-3xl mx-auto mb-8">
                If you are validating an idea, free plans are useful. If you are launching a real business presence, trying to save a few dollars here is usually fake thrift. The credibility hit costs more.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/best-website-builders-2026" className="btn-brand">
                  See better long-term options
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/website-builder-vs-wordpress-2026" className="btn-secondary">
                  Read builder vs WordPress
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="max-w-6xl mx-auto px-4">
          <RelatedLinks
            title="More website builder guides"
            links={websiteBuilderRelatedLinks.filter((link) => link.href !== '/free-website-builders-2026')}
          />
        </div>
      </section>
    </div>
  )
}
