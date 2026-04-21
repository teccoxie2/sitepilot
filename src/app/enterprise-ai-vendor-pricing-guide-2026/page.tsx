import { Metadata } from 'next'
import Link from 'next/link'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Vendor Pricing Guide 2026 | SitePilot'
const pageDescription = 'A comprehensive guide to understanding enterprise AI vendor pricing models, hidden costs, and contract traps before moving to pilot or production.'
const pageUrl = 'https://sitepilot.co/enterprise-ai-vendor-pricing-guide-2026'

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

const pricingModels = [
  {
    title: 'Consumption-based pricing',
    text: 'Charges based on input/output tokens. Great for variable workloads, dangerous for uncapped user-facing applications.',
  },
  {
    title: 'Seat-based licensing',
    text: 'Per-user monthly fee. Predictable on paper, expensive if utilization stays low or adoption is uneven.',
  },
  {
    title: 'Platform + compute',
    text: 'Base platform fee plus dedicated instance costs for latency, privacy, and predictable deployment behavior.',
  },
]

const hiddenTraps = [
  {
    title: 'Overage penalties',
    text: 'What happens when token limits are exceeded during a surge?',
  },
  {
    title: 'Data retention costs',
    text: 'Extra fees for extended audit logging and telemetry storage.',
  },
  {
    title: 'Support minimums',
    text: 'Premium enterprise support often requires a baseline spend commitment.',
  },
]

const pricingHighlights = [
  {
    title: 'Why pricing is usually misread',
    text: 'Sales teams quote the shiny number. Procurement has to price the ugly one that appears after usage, support, and exit terms pile on.',
  },
  {
    title: 'What to benchmark',
    text: 'Compare the commercial model against security, deployment, and data-governance requirements before anyone gets attached to a vendor.',
  },
  {
    title: 'What good looks like',
    text: 'The pricing model should survive shortlist scoring and pilot testing without mysterious add-ons showing up later.',
  },
]

export default function PricingGuidePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_22%,#ffffff_50%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[24rem] bg-[radial-gradient(circle_at_18%_20%,rgba(99,91,255,0.05),transparent_24%),radial-gradient(circle_at_78%_24%,rgba(14,165,233,0.05),transparent_22%),radial-gradient(circle_at_50%_80%,rgba(244,114,182,0.04),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.06fr_0.94fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">Commercial review</div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Enterprise AI vendor pricing guide 2026,
                <span className="brand-gradient-text block">for the price after the price.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                Enterprise AI pricing is never just a sticker price. This guide breaks down consumption models, seat licenses, platform fees, and contract traps so procurement can compare the real total cost before pilot approval turns into expensive regret.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/enterprise-ai-vendor-rfp-template-2026" className="btn-brand">
                  RFP template
                </Link>
                <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="btn-secondary">
                  Shortlist scorecard
                </Link>
                <Link href="/enterprise-ai-vendor-pilot-evaluation-checklist-2026" className="btn-secondary">
                  Pilot checklist
                </Link>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 max-w-4xl">
                {pricingHighlights.map((item) => (
                  <div key={item.title} className="page-card px-4 py-4">
                    <div className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-2">{item.title}</div>
                    <div className="text-sm text-slate-600 leading-6">{item.text}</div>
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
                      <div className="text-xl font-semibold text-slate-950">Where pricing gets ugly</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      BOFU by default
                    </div>
                  </div>

                  <div className="space-y-3">
                    {pricingModels.map((row) => (
                      <div key={row.title} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                        <div className="font-semibold text-slate-950 mb-1">{row.title}</div>
                        <div className="text-sm text-slate-500">{row.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="relative">
        <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <section className="page-section surface-muted">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
              <div className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.6rem] p-7 md:p-8">
                  <div className="page-pill mb-4">How to use it</div>
                  <h2 className="page-title text-3xl md:text-5xl mb-4">Price the vendor like procurement, not like a sales deck.</h2>
                  <p className="page-lead text-lg mb-4">
                    Review pricing alongside the{' '}
                    <Link href="/enterprise-ai-vendor-rfp-template-2026" className="text-[#635bff] hover:underline font-medium">
                      enterprise AI vendor RFP template
                    </Link>{' '}
                    and the{' '}
                    <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="text-[#635bff] hover:underline font-medium">
                      due diligence checklist
                    </Link>{' '}
                    so commercial assumptions are tied to evidence, not slogans.
                  </p>
                  <p className="text-slate-600 leading-7 mb-4">
                    Before final approval, map cost assumptions into the{' '}
                    <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="text-[#635bff] hover:underline font-medium">
                      shortlist scorecard
                    </Link>{' '}
                    and validate them during the{' '}
                    <Link href="/enterprise-ai-vendor-pilot-evaluation-checklist-2026" className="text-[#635bff] hover:underline font-medium">
                      pilot evaluation checklist
                    </Link>{' '}
                    so overages and lock-in risks get tested before production access.
                  </p>
                  <p className="text-slate-600 leading-7">
                    If stakeholders disagree on what to compare, use the{' '}
                    <Link href="/methodology" className="text-[#635bff] hover:underline font-medium">
                      SitePilot methodology
                    </Link>{' '}
                    to keep the review tied to evidence, weighted trade-offs, and documented approval criteria.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="page-card p-6">
                  <div className="text-sm text-slate-500 mb-2">Commercial rule</div>
                  <div className="text-xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">The cheap-looking option is usually the expensive one.</div>
                  <p className="text-sm text-slate-600 leading-6">Hidden fees, minimums, and exit friction are where the budget gets mugged.</p>
                </div>
                <div className="page-card-soft p-6">
                  <div className="text-sm text-slate-500 mb-3">What to benchmark</div>
                  <ul className="space-y-3 text-sm text-slate-700 leading-6">
                    <li><strong>Pricing model:</strong> Token, seat, or platform-plus-compute.</li>
                    <li><strong>Contract traps:</strong> Overage exposure, retention fees, and support minimums.</li>
                    <li><strong>Decision fit:</strong> Whether the commercial model survives shortlist scoring and pilot testing.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-2xl mb-10">
              <div className="page-pill mb-4">Core pricing models</div>
              <h2 className="page-title text-3xl md:text-5xl mb-4">The three ways vendors charge you.</h2>
              <p className="page-lead text-lg">
                The point is not which line item looks prettiest. It is which model makes your budget, risk, and usage curve behave like adults in the same room.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {pricingModels.map((item) => (
                <div key={item.title} className="page-card-glow p-1.5">
                  <div className="page-card rounded-[1.6rem] p-7 md:p-8 h-full">
                    <div className="page-pill mb-4">Model</div>
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-slate-950 mb-4">{item.title}</h3>
                    <p className="text-slate-600 leading-7">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section surface-muted">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
              <div className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.6rem] p-7 md:p-8 h-full">
                  <div className="page-pill mb-4">Hidden contract traps</div>
                  <h2 className="page-title text-3xl md:text-5xl mb-4">The stuff that detonates after signature.</h2>
                  <p className="text-slate-600 leading-7 mb-6">
                    Pricing pages rarely mention the real pain. Contracts are where the vendor quietly moves the goalposts.
                  </p>
                  <div className="space-y-4">
                    {hiddenTraps.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                        <div className="font-semibold text-slate-950 mb-1">{item.title}</div>
                        <div className="text-sm text-slate-500 leading-6">{item.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="page-card p-7 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-4">How to think about this page</h3>
                <ul className="space-y-4 text-slate-600 leading-7">
                  <li><strong className="text-slate-900">Token pricing:</strong> fine for variable workloads, dangerous for uncapped user-facing apps.</li>
                  <li><strong className="text-slate-900">Seat licensing:</strong> predictable, but wasteful when adoption is spotty.</li>
                  <li><strong className="text-slate-900">Platform + compute:</strong> useful when latency and privacy need their own budget line.</li>
                  <li><strong className="text-slate-900">The real question:</strong> what happens when actual usage shows up and the spreadsheet stops being polite?</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="max-w-6xl mx-auto px-4">
            <div className="page-card-glow p-8 md:p-12 surface-muted">
              <div className="max-w-3xl">
                <div className="page-pill mb-4">Bottom line</div>
                <h2 className="page-title text-3xl md:text-5xl mb-4">If the vendor cannot explain the bill, the bill will explain itself later.</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Good pricing review does not chase the lowest number. It checks whether the vendor’s commercial model survives deployment, adoption, support, and exit without turning into a budget hostage situation.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/enterprise-ai-vendor-rfp-template-2026" className="btn-secondary">
                    RFP template
                  </Link>
                  <Link href="/enterprise-ai-vendor-pilot-evaluation-checklist-2026" className="btn-secondary">
                    Pilot checklist
                  </Link>
                  <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="btn-brand">
                    Shortlist scorecard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section surface-muted">
          <div className="max-w-6xl mx-auto px-4">
            <RelatedLinks
              links={[
                { title: 'Enterprise AI Vendor RFP Template 2026', href: '/enterprise-ai-vendor-rfp-template-2026', description: 'Request clear pricing evidence in your RFP.', category: 'guide' },
                { title: 'AI Vendor Due Diligence Checklist 2026', href: '/ai-vendor-due-diligence-checklist-enterprise-2026', description: 'Check residency, retention, and training clauses behind the quoted price.', category: 'guide' },
                { title: 'Enterprise AI Vendor Shortlist Scorecard 2026', href: '/enterprise-ai-vendor-shortlist-scorecard-2026', description: 'Score vendors based on TCO and commercial models.', category: 'tools' },
                { title: 'Enterprise AI Vendor Pilot Evaluation Checklist 2026', href: '/enterprise-ai-vendor-pilot-evaluation-checklist-2026', description: 'Validate commercial assumptions with real pilot data before production.', category: 'tools' },
                { title: 'AI Procurement Decision Matrix Tool 2026', href: '/ai-procurement-decision-matrix-tool-2026', description: 'Quantify trade-offs across price, risk, and implementation fit.', category: 'tools' },
              ]}
            />
          </div>
        </section>
      </main>
    </div>
  )
}
