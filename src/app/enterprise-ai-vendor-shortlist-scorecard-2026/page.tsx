import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BarChart3, CheckCircle2, Scale, Shield, Sparkles, Target, TrendingUp } from 'lucide-react'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Vendor Shortlist Scorecard 2026 | SitePilot'
const pageDescription = 'A professional scoring framework for ranking shortlisted AI vendors across 8 strategic dimensions after RFP and due diligence review.'
const pageUrl = 'https://sitepilot.co/enterprise-ai-vendor-shortlist-scorecard-2026'

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

const dimensions = [
  { name: '1. Strategic Fit', weight: '15%', criteria: ['Alignment with business goals', 'Industry-specific expertise', 'Long-term roadmap stability'] },
  { name: '2. Technical Architecture', weight: '15%', criteria: ['Scalability & latency', 'Integration complexity', 'Model performance benchmarks'] },
  { name: '3. Data Governance', weight: '20%', criteria: ['Training data usage policies', 'Data residency & encryption', 'Redaction/masking controls'] },
  { name: '4. Security & Trust', weight: '15%', criteria: ['Identity (SSO/RBAC)', 'Audit logging & monitoring', 'Vulnerability management'] },
  { name: '5. Commercial Model', weight: '10%', criteria: ['Pricing transparency', 'Total Cost of Ownership (TCO)', 'SLA & service credits'] },
  { name: '6. Implementation Speed', weight: '10%', criteria: ['Time-to-value', 'Resource requirements', 'Training/support availability'] },
  { name: '7. Regulatory Compliance', weight: '10%', criteria: ['Privacy (GDPR/CCPA)', 'AI-specific regulation readiness', 'Auditability'] },
  { name: '8. Risk Profile', weight: '5%', criteria: ['Subprocessor transparency', 'Exit/portability terms', 'Lock-in risks'] }
]

const scoringScale = [
  {
    score: '5',
    label: 'Leading',
    note: 'Documented proof, best-in-class controls, and no unresolved blockers for production intent.',
  },
  {
    score: '3',
    label: 'Baseline',
    note: 'Meets standard requirements but still carries caveats, dependencies, or operational drag.',
  },
  {
    score: '1',
    label: 'High risk',
    note: 'Refuses evidence, fails core controls, or leaves critical ambiguity unresolved.',
  },
]

const operatingRules = [
  'Score from evidence, not vendor confidence.',
  'Separate pass/fail controls from weighted differentiators.',
  'Use the same rubric across every shortlisted vendor.',
  'Treat scores below 3.5 as unresolved, not “close enough.”',
]

export default function ShortlistScorecardPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_22%,#ffffff_50%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[24rem] bg-[radial-gradient(circle_at_22%_22%,rgba(99,91,255,0.05),transparent_24%),radial-gradient(circle_at_76%_26%,rgba(14,165,233,0.05),transparent_22%),radial-gradient(circle_at_50%_82%,rgba(244,114,182,0.04),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.06fr_0.94fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Decision framework
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Enterprise AI Vendor Shortlist Scorecard 2026,
                <span className="brand-gradient-text block">for ranking with evidence.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                An enterprise AI vendor shortlist scorecard is a weighted decision framework used to rank solution providers after the RFP and due diligence phases. SitePilot’s 2026 model evaluates final candidates across eight strategic dimensions, including strategic fit, security, and data governance, helping procurement teams prioritize documented evidence over marketing promises to ensure a high-ROI implementation.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/enterprise-ai-vendor-rfp-template-2026" className="btn-brand inline-flex items-center gap-2">
                  Open RFP template
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="btn-secondary">
                  Due diligence checklist
                </Link>
                <Link href="/ai-procurement-decision-matrix-tool-2026" className="btn-secondary">
                  Procurement matrix
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {[
                  'Weight evidence, not charisma.',
                  'Force the same scoring rubric across every finalist.',
                  'Keep hard-stop controls separate from soft differentiators.',
                  'Make the final score explainable to procurement, security, legal, and finance.',
                ].map((item) => (
                  <div key={item} className="page-card flex items-start gap-3 px-4 py-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                    <span className="text-sm leading-6 text-slate-700">{item}</span>
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
                      <div className="text-sm text-slate-500 mb-1">Scorecard logic</div>
                      <div className="text-xl font-semibold text-slate-950">Weighted shortlist model</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      8 dimensions
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['Pass/fail controls', 'Kill vendors that fail core security, privacy, or portability requirements.'],
                      ['Weighted scoring', 'Rank realistic finalists on fit, economics, and execution quality.'],
                      ['Cross-functional review', 'Keep procurement, security, legal, and business owners on the same sheet.'],
                      ['Pilot feedback', 'Use live validation to confirm or downgrade the shortlist ranking.'],
                    ].map(([title, note]) => (
                      <div key={title} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <div className="font-semibold text-slate-950">{title}</div>
                            <div className="text-sm text-slate-500 mt-1">{note}</div>
                          </div>
                          <BarChart3 className="h-5 w-5 shrink-0 text-indigo-500" />
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

      <main className="relative">
        <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <section className="page-section surface-muted">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 items-start">
              <div className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.6rem] p-7 md:p-8">
                  <div className="page-pill mb-4">How to use it</div>
                  <h2 className="page-title text-3xl md:text-5xl mb-4">The score should explain the decision, not decorate it.</h2>
                  <p className="page-lead text-lg mb-4">
                    Assign a score from 1–5 for each dimension based on vendor evidence, not promises. Apply weights to calculate the final weighted score. A result below 3.5 usually means the vendor still has unresolved issues that should block production rollout.
                  </p>
                  <p className="text-slate-600 leading-7 mb-4">
                    This scorecard works best after teams complete the{' '}
                    <Link href="/enterprise-ai-vendor-rfp-template-2026" className="text-[#635bff] hover:underline font-medium">
                      enterprise AI vendor RFP template
                    </Link>{' '}
                    and the{' '}
                    <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="text-[#635bff] hover:underline font-medium">
                      due diligence checklist
                    </Link>{' '}
                    and then document assumptions in the{' '}
                    <Link href="/ai-procurement-decision-matrix-tool-2026" className="text-[#635bff] hover:underline font-medium">
                      AI procurement decision matrix
                    </Link>{' '}
                    and{' '}
                    <Link href="/methodology" className="text-[#635bff] hover:underline font-medium">
                      methodology
                    </Link>{' '}
                    page so shortlist decisions stay evidence-led from longlist to final approval.
                  </p>
                  <p className="text-slate-600 leading-7">
                    After the scorecard narrows the field, validate the ranking through the{' '}
                    <Link href="/enterprise-ai-vendor-pilot-evaluation-checklist-2026" className="text-[#635bff] hover:underline font-medium">
                      pilot evaluation checklist
                    </Link>{' '}
                    and the{' '}
                    <Link href="/enterprise-ai-vendor-pricing-guide-2026" className="text-[#635bff] hover:underline font-medium">
                      pricing guide
                    </Link>{' '}
                    so the final call still reflects real workflow performance and real cost behavior.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="page-card p-6">
                  <div className="text-sm text-slate-500 mb-2">Score meaning</div>
                  <div className="text-xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">Below 3.5 is not “almost there.” It means unresolved risk.</div>
                  <p className="text-sm text-slate-600 leading-6">If a vendor needs excuses to look good, the scorecard should show that brutally fast.</p>
                </div>
                <div className="page-card-soft p-6">
                  <div className="text-sm text-slate-500 mb-3">Operating rules</div>
                  <ul className="space-y-3 text-sm text-slate-700 leading-6">
                    {operatingRules.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Target className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mb-10">
              <div className="page-pill mb-4">Scoring dimensions</div>
              <h2 className="page-title text-3xl md:text-5xl mb-4">Eight weighted dimensions for a serious shortlist.</h2>
              <p className="page-lead text-lg">
                The shortlist only means something if every finalist is judged against the same evidence model instead of a shifting set of excuses.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {dimensions.map((dim, index) => (
                <div key={dim.name} className="page-card-glow p-1.5">
                  <div className="page-card rounded-[1.6rem] p-7 md:p-8 h-full">
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div>
                        <div className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-2">0{index + 1}</div>
                        <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-slate-950">{dim.name}</h3>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 whitespace-nowrap">
                        Weight {dim.weight}
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {dim.criteria.map((criterion) => (
                        <li key={criterion} className="flex items-start gap-3 text-slate-600 leading-7">
                          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#635bff] flex-shrink-0" />
                          <span>{criterion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section surface-muted">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 items-start">
              <div className="page-card p-7 md:p-8">
                <div className="page-pill mb-4">Scoring key</div>
                <h2 className="page-title text-3xl md:text-5xl mb-4">A 5, 3, and 1 should mean something concrete.</h2>
                <div className="space-y-4">
                  {scoringScale.map((item) => (
                    <div key={item.score} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-5 py-5">
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <div className="text-xl font-semibold text-slate-950">{item.score} — {item.label}</div>
                        <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                          Scoring anchor
                        </div>
                      </div>
                      <p className="text-slate-600 leading-7">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="page-card-soft p-6 md:p-7">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950 mb-4">What a good scorecard prevents</h3>
                  <ul className="space-y-4 text-slate-600 leading-7">
                    <li className="flex items-start gap-3"><Shield className="mt-1 h-4 w-4 shrink-0 text-indigo-500" /><span>Marketing-driven vendor selection with no proof trail.</span></li>
                    <li className="flex items-start gap-3"><Scale className="mt-1 h-4 w-4 shrink-0 text-indigo-500" /><span>Security and legal concerns being hand-waved because the demo looked good.</span></li>
                    <li className="flex items-start gap-3"><TrendingUp className="mt-1 h-4 w-4 shrink-0 text-sky-500" /><span>Commercial models that only collapse after real usage appears.</span></li>
                  </ul>
                </div>

                <div className="page-card p-6 md:p-7">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950 mb-4">Next step after scoring</h3>
                  <p className="text-slate-600 leading-7 mb-4">
                    A shortlist score is not a contract recommendation by itself. The top-ranked vendor still needs pricing scrutiny and pilot validation before production approval.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/enterprise-ai-vendor-pricing-guide-2026" className="btn-secondary">
                      Check pricing guide
                    </Link>
                    <Link href="/enterprise-ai-vendor-pilot-evaluation-checklist-2026" className="btn-brand inline-flex items-center gap-2">
                      Open pilot checklist
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section surface-muted">
          <div className="max-w-6xl mx-auto px-4">
            <RelatedLinks links={[
              { title: 'AI Vendor Due Diligence Checklist 2026', href: '/ai-vendor-due-diligence-checklist-enterprise-2026', description: 'Comprehensive checklist for procurement and legal review.', category: 'guide' },
              { title: 'Enterprise AI Vendor RFP Template 2026', href: '/enterprise-ai-vendor-rfp-template-2026', description: 'Ready-to-use RFP questions for AI procurement.', category: 'guide' },
              { title: 'AI Procurement Decision Matrix Tool 2026', href: '/ai-procurement-decision-matrix-tool-2026', description: 'Quantify vendor trade-offs across risk, cost, and implementation fit.', category: 'tools' },
              { title: 'Enterprise AI Vendor Pricing Guide 2026', href: '/enterprise-ai-vendor-pricing-guide-2026', description: 'Benchmark pilot, platform, and overage pricing before final shortlist scoring.', category: 'guide' },
              { title: 'Enterprise AI Vendor Pilot Evaluation Checklist 2026', href: '/enterprise-ai-vendor-pilot-evaluation-checklist-2026', description: 'Convert shortlist decisions into evidence-backed pilot acceptance criteria.', category: 'tools' },
              { title: 'SitePilot Methodology', href: '/methodology', description: 'See how SitePilot evaluates tools, controls, and evidence quality.', category: 'guide' }
            ]} />
          </div>
        </section>
      </main>
    </div>
  )
}
