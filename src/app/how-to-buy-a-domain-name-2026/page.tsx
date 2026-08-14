import { normalizeMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import RelatedLinks from '@/components/RelatedLinks'

const pageTitle = 'How to Buy a Domain Name 2026 | SitePilot'
const pageDescription = 'A practical 2026 guide to buying a domain name, from name selection and registrar choice to privacy, DNS, and launch-day setup.'
const pageUrl = 'https://sitepilot.co/how-to-buy-a-domain-name-2026'

const metadataConfig: Metadata = {
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
};

export const metadata: Metadata = normalizeMetadata(metadataConfig);
const quickTake = [
  { label: 'Step 1', value: 'Choose the actual name', note: 'Short, clear, pronounceable, and not legally stupid beats clever every time.' },
  { label: 'Step 2', value: 'Check trademark risk', note: 'Do this before payment, not after printing business cards.' },
  { label: 'Step 3', value: 'Pick the registrar', note: 'Choose for renewals, privacy, and transfer sanity, not homepage coupons.' },
  { label: 'Step 4', value: 'Set DNS on purpose', note: 'Point the domain to the website, email, and verification records you actually need.' }
]

const sections = [
  { title: 'The clean buying sequence', points: ['Start by deciding whether the name is brand-first, keyword-first, or location-first. Most real businesses should lean brand-first with readable words.', 'Check whether the exact .com is available, then compare alternatives only if the core brand name is strong enough to survive a different extension.', 'Run a trademark sanity check before purchase. A domain being available does not mean it is safe to use commercially.', 'Buy the domain from a registrar, not from your hosting company by default. Bundling can be fine, but do not confuse convenience with control.'] },
  { title: 'What to configure right after purchase', points: ['Enable WHOIS privacy if it is available and useful for the jurisdiction and extension.', 'Turn on account security: strong password, MFA, and clear ownership records inside the business.', 'Add the DNS records required for the website, email, and verification tools. This is usually A, CNAME, MX, TXT, and sometimes redirect rules.', 'Write down where the domain is registered, when it renews, and who controls the account. Teams lose domains through admin chaos more often than they admit.'] },
  { title: 'The common mistakes', points: ['Buying a domain without checking brand conflict first.', 'Choosing a registrar on first-year coupon price alone.', 'Letting one employee own the domain personally instead of the business controlling it.', 'Confusing “I bought the domain” with “the website is live.” Those are different steps.'] }
]

const relatedArticles = [
  { href: '/best-domain-registrars-2026', title: 'Best Domain Registrars', description: 'Use this to choose where to register the name.', category: 'guide' as const },
  { href: '/trademark-check-before-buying-a-domain-2026', title: 'Trademark Check Before Buying a Domain', description: 'Do this before you commit to branding.', category: 'guide' as const },
  { href: '/domain-vs-hosting-2026', title: 'Domain vs Hosting', description: 'Useful if the purchase sequence still feels blurry.', category: 'guide' as const },
  { href: '/website-builders', title: 'Website Builders', description: 'Next step if you need an easier site creation path after securing the domain.', category: 'guide' as const }
]

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-05-18T00:00:00Z"
        modifiedDate="2026-05-18T00:00:00Z"
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
                2026 domain buying guide
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                How to buy a domain name in 2026,
                <span className="block brand-gradient-text">without paying the idiot tax.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                Buying a domain name is simple only if you know the order: choose the name, check trademark risk, pick a registrar that will not punish you later, enable privacy, and point DNS correctly. This guide walks through the clean path so you do not confuse domain purchase with hosting, website builders, or email setup.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/best-domain-registrars-2026" className="btn-brand">
                  Compare domain options
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/web-hosting" className="btn-secondary">
                  See hosting next
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {quickTake.map((item) => (
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
                <div className="page-card p-6 bg-white/95">
                  <div className="text-sm text-slate-500 mb-2">Short answer</div>
                  <div className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-4">Buy the boring answer that stays sane later.</div>
                  <div className="space-y-3">
                    {[
                      'Price for the second year, not just the first checkout page.',
                      'Protect the brand before you protect the coupon.',
                      'Keep ownership, DNS, and account security under business control.',
                      'Treat domain choice as the front of the website buying funnel, not a random admin task.',
                    ].map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4 flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                        <p className="text-sm leading-6 text-slate-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-4 py-14 md:py-18">
        <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] mb-12">
          {sections.map((section) => (
            <div key={section.title} className="page-card p-7 md:p-8">
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 mb-4">{section.title}</h2>
              <div className="space-y-4">
                {section.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                    <p className="text-slate-600 leading-7">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="page-card-glow p-8 md:p-10 surface-muted mb-12">
          <div className="max-w-4xl">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">What to do next</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">Secure the domain first, then connect the rest of the stack.</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">For most buyers, the sequence is simple: choose the name, validate the risk, buy it through a registrar you can tolerate for years, then connect hosting, builders, email, and analytics after the ownership layer is locked down.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/how-to-buy-a-domain-name-2026" className="btn-brand">
                Follow the buying sequence
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/best-web-hosting-2026" className="btn-secondary">Choose hosting next</Link>
              <Link href="/website-builders" className="btn-secondary">Or use a website builder</Link>
            </div>
          </div>
        </section>

        <RelatedLinks title="Keep going" links={relatedArticles} />
      </section>
    </div>
  )
}
