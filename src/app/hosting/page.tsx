import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Rocket,
  Server,
  Shield,
  Sparkles,
} from 'lucide-react'
import RelatedLinks, { hostingRelatedLinks } from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Web Hosting Reviews & Comparisons 2026 | SitePilot',
  description:
    'In-depth web hosting reviews based on real testing. Compare performance, pricing, support quality, and use-case fit across top providers.',
  alternates: {
    canonical: 'https://sitepilot.co/hosting',
  },
  openGraph: {
    title: 'Web Hosting Reviews & Comparisons 2026 | SitePilot',
    description:
      'In-depth web hosting reviews based on real testing. Compare performance, pricing, support quality, and use-case fit across top providers.',
    url: 'https://sitepilot.co/hosting',
    type: 'website',
  },
}

const cards = [
  {
    title: 'Premium hosting',
    desc: 'High-trust infrastructure for production sites where support quality, uptime discipline, and operational confidence matter.',
    link: '/hosting/siteground-review',
    tag: 'Business fit',
    icon: Shield,
  },
  {
    title: 'Budget performance',
    desc: 'Providers that keep cost low without turning the stack into a long-term maintenance penalty.',
    link: '/hosting/hostinger-review',
    tag: 'Value fit',
    icon: Rocket,
  },
  {
    title: 'WordPress hosting',
    desc: 'Managed and semi-managed paths for teams that care about publishing velocity without babysitting the server.',
    link: '/hosting/wordpress-hosting',
    tag: 'CMS fit',
    icon: Cpu,
  },
]

const featuredLinks = [
  {
    href: '/hosting/best-web-hosting',
    label: 'Featured guide',
    title: 'The best web hosting services for 2026',
    description:
      'A practical ranking of the strongest hosting options after real-world testing, uptime review, and support evaluation.',
  },
  {
    href: '/hosting/hostinger-review',
    label: 'Review',
    title: 'Hostinger review: affordable, but is it good enough?',
    description:
      'A closer look at whether Hostinger’s low price still delivers acceptable speed, support, and day-to-day usability.',
  },
  {
    href: '/hosting/hostinger-vs-bluehost',
    label: 'Comparison',
    title: 'Hostinger vs Bluehost: which budget host wins?',
    description:
      'A direct comparison of two popular budget hosts on performance, support, and real operational value.',
  },
  {
    href: '/hosting/cheap-hosting',
    label: 'Guide',
    title: 'Best cheap web hosting under $5/month',
    description:
      'A filtered list of budget options that do not collapse into obvious regret later.',
  },
  {
    href: '/hosting/wordpress-hosting',
    label: 'Guide',
    title: 'Best WordPress hosting 2026',
    description:
      'The hosting routes that make the most sense for WordPress-heavy workflows and performance needs.',
  },
  {
    href: '/hosting/siteground-review',
    label: 'Review',
    title: 'SiteGround review: premium features at mid-range prices',
    description:
      'A practical audit of SiteGround’s support quality, infrastructure stability, and pricing trade-offs.',
  },
]

const decisionSignals = [
  {
    title: 'What matters most',
    body: 'Uptime discipline, support quality, renewal pricing, and operational fit beat promo-code theatrics every time.',
  },
  {
    title: 'What usually gets hidden',
    body: 'Renewal jumps, support downgrades, migration pain, and weak caching defaults are where cheap hosting starts getting expensive.',
  },
  {
    title: 'How to use this hub',
    body: 'Start broad here, then move into the specific provider reviews and comparison pages that match your stack and budget.',
  },
]

export default function HostingPage() {
  return (
    <div className="min-h-screen text-slate-900 overflow-x-hidden bg-white">
      <SchemaMarkup
        type="article"
        title="Web Hosting Reviews & Comparisons 2026 | SitePilot"
        description="In-depth web hosting reviews based on real testing. Compare performance, pricing, support quality, and use-case fit across top providers."
        url="https://sitepilot.co/hosting"
        publishedDate="2026-04-18"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.06fr_0.94fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                2026 hosting audits
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Hosting reviews,
                <span className="brand-gradient-text block">without the affiliate sludge.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                We test hosting providers through uptime discipline, support quality, performance reality, and pricing traps. If a provider looks good only because the landing page screams “80% off,” that does not count.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/hosting/siteground-review" className="btn-brand">
                  Start with a real audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/cloud-hosting-vs-traditional-hosting-2026" className="btn-secondary">
                  Compare hosting models
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                {[
                  'Focus on uptime, support quality, and actual operator fit',
                  'Audit pricing beyond the fake intro offer',
                  'Treat speed as one factor, not the entire story',
                  'Prefer sustainable infrastructure over hype cycles',
                ].map((item) => (
                  <div key={item} className="page-card p-4 flex items-center gap-3 bg-white/90">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0" />
                    <span className="text-sm text-slate-700">{item}</span>
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
                      <div className="text-sm text-slate-500 mb-1">Decision model</div>
                      <div className="text-xl font-semibold text-slate-950">Hosting selection matrix</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Stripe palette
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['Reliability', 'Uptime discipline, support quality, operational trust'],
                      ['Performance', 'Latency, caching stack, and realistic site speed impact'],
                      ['Commercial fit', 'Renewal pricing, lock-in risk, and scaling economics'],
                      ['Use-case fit', 'Brochure site, WordPress, app stack, or traffic-heavy property'],
                    ].map(([title, note]) => (
                      <div key={title} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <div className="font-semibold text-slate-950">{title}</div>
                            <div className="text-sm text-slate-500 mt-1">{note}</div>
                          </div>
                          <Server className="h-5 w-5 text-indigo-500 shrink-0" />
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
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          {decisionSignals.map((item) => (
            <div key={item.title} className="page-card p-6">
              <div className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-2">Decision signal</div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{item.title}</h2>
              <p className="text-slate-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <Link key={card.title} href={card.link} className="page-card p-8 hover:-translate-y-0.5 transition-transform">
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

        <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {featuredLinks.map((item) => (
            <Link key={item.href} href={item.href} className="page-card-soft p-7 hover:-translate-y-0.5 transition-transform">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600/80 mb-3">{item.label}</div>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </Link>
          ))}
        </section>

        <section className="page-card-glow p-8 md:p-12 surface-muted">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Selection logic</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Hosting is not a vibes purchase.
              <span className="block brand-gradient-text">It is an operations decision.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              That is why this section now uses the calmer, lighter visual system. It reads more like a trusted infrastructure guide and less like a gaming headset ad pretending to be technical authority.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/website-builders" className="btn-secondary">
                See the reference style
              </Link>
              <Link href="/hosting/hostinger-review" className="btn-brand">
                Review a provider
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <section className="bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <RelatedLinks title="More hosting resources & tools" links={hostingRelatedLinks} />
        </div>
      </section>
    </div>
  )
}
