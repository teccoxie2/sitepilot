import { normalizeMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import RelatedLinks from '@/components/RelatedLinks'

const pageTitle = 'Domain Privacy Protection 2026 | Do You Need It? | SitePilot'
const pageDescription = 'Domain privacy protection in 2026 should be judged by what data is exposed, when privacy is included, and when a business should still use it.'
const pageUrl = 'https://sitepilot.co/domain-privacy-protection-2026'

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
  { label: 'Usually worth it', value: 'Yes', note: 'For most retail domain buyers, privacy is cheap protection against unnecessary exposure and junk contact abuse.' },
  { label: 'Best case', value: 'Included free', note: 'A registrar that bakes privacy in is less annoying and usually more trustworthy.' },
  { label: 'Not magic', value: 'Legal ownership still exists', note: 'Privacy changes public exposure, not your actual legal responsibility or registrant record behind the scenes.' },
  { label: 'Main benefit', value: 'Less noise and less exposure', note: 'Spam, scraping, and random outreach are the practical problems it helps reduce.' }
]

const sections = [
  { title: 'What privacy protection does', points: ['It reduces how much of your personal or business contact detail is exposed in public lookup systems where the extension and registry rules still show registrant data.', 'It can cut down spam, scam attempts, and nuisance sales outreach after registration.', 'It helps separate public brand presence from personal identity where that separation is appropriate.'] },
  { title: 'When it matters most', points: ['Solo founders using personal contact details.', 'Small businesses without a separate admin operations layer.', 'Anyone registering domains in bulk who does not want their contact footprint sprayed everywhere.', 'Teams that value clean account hygiene and minimal exposure by default.'] },
  { title: 'When not to over-romanticize it', points: ['Privacy protection does not replace good account security.', 'It does not make trademark issues disappear.', 'It does not fix a bad registrar or a badly governed domain portfolio.', 'Some TLDs and jurisdictions already limit public personal data differently, so the visible effect is not identical everywhere.'] }
]

const relatedArticles = [
  { href: '/best-domain-registrars-2026', title: 'Best Domain Registrars', description: 'Choose a registrar that includes privacy cleanly.', category: 'guide' as const },
  { href: '/how-to-buy-a-domain-name-2026', title: 'How to Buy a Domain Name', description: 'See the full purchase sequence around privacy and DNS setup.', category: 'guide' as const },
  { href: '/namecheap-vs-godaddy-2026', title: 'Namecheap vs GoDaddy', description: 'Direct comparison where privacy handling is one of the decision points.', category: 'guide' as const },
  { href: '/trademark-check-before-buying-a-domain-2026', title: 'Trademark Check Before Buying a Domain', description: 'Privacy is not a substitute for legal sanity checks.', category: 'guide' as const }
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
                Domain privacy protection 2026,
                <span className="block brand-gradient-text">do you actually need it?</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                Domain privacy protection hides or limits the public exposure of registrant details in WHOIS or registration records, depending on the extension and registry rules. In practice, it is usually worth enabling when available, especially for small businesses, solo operators, and anyone who does not want spam and cold outreach hitting personal contact details.
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
