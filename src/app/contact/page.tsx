import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Contact Us | SitePilot'
const pageDescription = 'Get in touch with the SitePilot team for enterprise AI consulting, partnership inquiries, or feedback.'
const pageUrl = 'https://sitepilot.co/contact'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-6xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-10 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Contact SitePilot
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Contact us,
                <span className="brand-gradient-text block">for consulting, partnerships, and direct questions.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                Have a question about enterprise AI implementation, a partnership proposal, or feedback on the site? The fastest path is still direct email.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="mailto:contact@sitepilot.co" className="btn-brand">
                  contact@sitepilot.co
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/" className="btn-secondary">
                  Back to homepage
                </Link>
              </div>
            </div>

            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-8 md:p-10">
                <div className="text-sm text-slate-500 mb-2">Response expectations</div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">Reach out directly.</h2>
                <p className="text-slate-600 leading-8 mb-8">
                  We typically respond to business inquiries within 24-48 hours. If the topic is strategic, technical, or partnership-related, include enough context that the first reply can move the discussion forward.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
                    <div className="text-sm uppercase tracking-[0.14em] text-slate-500 mb-2">Partnerships</div>
                    <p className="text-slate-700 leading-7">
                      Interested in being featured in our guides or exploring a strategic alliance?
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
                    <div className="text-sm uppercase tracking-[0.14em] text-slate-500 mb-2">AI consulting</div>
                    <p className="text-slate-700 leading-7">
                      Need hands-on help with AI procurement, governance, or implementation strategy?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
