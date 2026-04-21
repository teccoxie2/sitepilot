import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Shield,
  Sparkles,
  Star,
  Target,
  Users,
  Zap,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Vendor Comparison 2026 | SitePilot'
const pageDescription =
  'Compare top enterprise AI vendors including OpenAI, Anthropic, Google, Microsoft, and AWS. Comprehensive feature analysis, pricing, and security comparison.'
const pageUrl = 'https://sitepilot.co/ai-vendor-comparison-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI vendor comparison',
    'enterprise AI providers',
    'OpenAI vs Anthropic',
    'AI platform comparison',
    'enterprise AI selection',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description:
      'Compare top enterprise AI vendors including OpenAI, Anthropic, Google, Microsoft, and AWS.',
    type: 'article',
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: 'Enterprise AI vendor comparison covering pricing, security, compliance, and best-fit use cases.',
  },
}

const vendors = [
  {
    name: 'OpenAI',
    tier: 'Premium',
    pricing: '$20-60/user/month',
    strengths: ['GPT-4 excellence', 'API ecosystem', 'Developer tools'],
    weaknesses: ['Higher costs', 'Rate limits'],
    security: 'SOC 2 Type II',
    compliance: 'GDPR, CCPA',
    score: 92,
    bestFor: 'Content generation, developer velocity',
  },
  {
    name: 'Anthropic',
    tier: 'Enterprise',
    pricing: '$25-75/user/month',
    strengths: ['Constitutional AI', 'Safety focus', 'Long context'],
    weaknesses: ['Newer platform', 'Limited integrations'],
    security: 'SOC 2 Type II',
    compliance: 'GDPR, HIPAA Ready',
    score: 89,
    bestFor: 'High-trust enterprise deployments',
  },
  {
    name: 'Google Cloud AI',
    tier: 'Enterprise',
    pricing: '$15-50/user/month',
    strengths: ['GCP integration', 'Vertex AI', 'Multi-modal'],
    weaknesses: ['Complex setup', 'Learning curve'],
    security: 'ISO 27001',
    compliance: 'GDPR, HIPAA, SOX',
    score: 87,
    bestFor: 'Data-heavy AI and analytics workflows',
  },
  {
    name: 'Microsoft Azure AI',
    tier: 'Enterprise',
    pricing: '$18-55/user/month',
    strengths: ['Office 365 integration', 'Copilot', 'Enterprise grade'],
    weaknesses: ['Vendor lock-in', 'Complex pricing'],
    security: 'ISO 27001',
    compliance: 'GDPR, HIPAA, FedRAMP',
    score: 85,
    bestFor: 'Microsoft-centric enterprise environments',
  },
  {
    name: 'AWS Bedrock',
    tier: 'Enterprise',
    pricing: '$12-45/user/month',
    strengths: ['Multi-model access', 'AWS integration', 'Scalability'],
    weaknesses: ['Model latency', 'Complex management'],
    security: 'SOC 1,2,3',
    compliance: 'GDPR, HIPAA, PCI DSS',
    score: 83,
    bestFor: 'Cost-aware teams already deep in AWS',
  },
]

const framingSignals = [
  'The biggest vendor-selection failure is not choosing wrong. It is using vague criteria to rationalize the wrong choice.',
  'Capability, pricing, security, compliance, integration, and lock-in risk all belong in the decision. Skip one and the picture is incomplete.',
  'A high score does not automatically mean a fit. The right vendor depends on your stack, governance needs, and operating maturity.',
  'If procurement only reacts to demos and sales language, you usually pay for it later at a much higher cost.',
]

const decisionCards = [
  {
    title: 'Technical fit',
    icon: Zap,
    points: ['Performance & latency', 'Integration quality', 'Model capabilities', 'Scalability requirements'],
  },
  {
    title: 'Security & compliance',
    icon: Shield,
    points: ['Security certifications', 'Data-handling model', 'Regional compliance', 'Enterprise control surface'],
  },
  {
    title: 'Business reality',
    icon: Target,
    points: ['TCO and pricing model', 'Vendor stability', 'Roadmap confidence', 'Support and enablement'],
  },
]

const useCases = [
  {
    title: 'Content generation',
    best: 'OpenAI GPT-4',
    alt: 'Anthropic Claude',
    note: 'Superior creative writing and content quality.',
    tone: 'border-sky-100 bg-sky-50/80 text-sky-800',
  },
  {
    title: 'Data analysis',
    best: 'Google Cloud AI',
    alt: 'AWS Bedrock',
    note: 'Strong analytics and visualization capabilities.',
    tone: 'border-indigo-100 bg-indigo-50/80 text-indigo-800',
  },
  {
    title: 'Enterprise integration',
    best: 'Microsoft Azure',
    alt: 'Google Cloud',
    note: 'Seamless Office 365 and enterprise workflow alignment.',
    tone: 'border-violet-100 bg-violet-50/80 text-violet-800',
  },
  {
    title: 'High security',
    best: 'Anthropic Claude',
    alt: 'AWS Bedrock',
    note: 'Constitutional AI and strong safety positioning.',
    tone: 'border-amber-100 bg-amber-50/80 text-amber-800',
  },
  {
    title: 'Cost optimization',
    best: 'AWS Bedrock',
    alt: 'Google Cloud',
    note: 'Competitive consumption pricing with flexible scaling.',
    tone: 'border-rose-100 bg-rose-50/80 text-rose-800',
  },
  {
    title: 'Developer experience',
    best: 'OpenAI',
    alt: 'Anthropic',
    note: 'Excellent APIs, docs, and ecosystem momentum.',
    tone: 'border-indigo-100 bg-indigo-50/80 text-indigo-800',
  },
]

export default function AIVendorComparison() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-11"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_56%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[34rem] h-[34rem] bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.05),transparent_24%),radial-gradient(circle_at_78%_22%,rgba(99,91,255,0.05),transparent_22%),radial-gradient(circle_at_54%_82%,rgba(251,191,36,0.05),transparent_28%)]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Enterprise AI vendor selection 2026
                </div>
                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  Enterprise AI vendor comparison,
                  <span className="brand-gradient-text block">Do not let the demo fool you.</span>
                </h1>
                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  Compare top enterprise AI vendors including OpenAI, Anthropic, Google, Microsoft, and AWS. This page keeps the original vendor comparison, scoring, pricing, security and compliance framing, use-case guidance, and internal links while aligning the presentation to the current light Stripe-ish UI.
                </p>
                <div className="mb-10 flex flex-wrap gap-3">
                  <a href="#comparison" className="btn-brand inline-flex items-center gap-2">
                    View vendor comparison
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link href="/ai-implementation-checklist-enterprise-2026" className="btn-secondary inline-flex items-center gap-2">
                    View implementation checklist
                  </Link>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
                  {vendors.slice(0, 4).map((vendor) => (
                    <div key={vendor.name} className="page-card bg-white/90 p-4">
                      <div className="mb-1 flex items-center gap-2 text-lg font-semibold text-slate-950">
                        {vendor.name}
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-600">
                          {vendor.score}/100
                        </span>
                      </div>
                      <div className="text-sm text-slate-600">{vendor.bestFor}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
                <div className="relative page-card-glow p-5 md:p-6">
                  <div className="page-card bg-white/95 p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <div className="mb-1 text-sm text-slate-500">Selection logic</div>
                        <div className="text-xl font-semibold text-slate-950">Four hard tests</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        No fluff
                      </div>
                    </div>
                    <div className="space-y-3">
                      {framingSignals.map((item) => (
                        <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                            <p className="text-sm leading-6 text-slate-600">{item}</p>
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

        <section className="grid gap-6 md:grid-cols-3 mb-16">
          {decisionCards.map((card) => {
            const Icon = card.icon
            return (
              <div key={card.title} className="page-card p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                  <Icon className="h-5 w-5 text-[#635bff]" />
                </div>
                <h2 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{card.title}</h2>
                <div className="space-y-3">
                  {card.points.map((point) => (
                    <div key={point} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-700">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </section>

        <section id="comparison" className="mb-16 page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Quick vendor comparison</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Start with the full market view,
              <span className="brand-gradient-text block">then decide who deserves a shortlist.</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              The original comparison table keeps its core fields: vendor, score, pricing, best fit, and security. It is enough to create separation, not enough to justify a careless final decision.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] border-separate border-spacing-0 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
              <thead className="bg-slate-50 text-left text-sm text-slate-600">
                <tr>
                  <th className="px-5 py-4 font-semibold">Vendor</th>
                  <th className="px-5 py-4 font-semibold">Score</th>
                  <th className="px-5 py-4 font-semibold">Pricing</th>
                  <th className="px-5 py-4 font-semibold">Best for</th>
                  <th className="px-5 py-4 font-semibold">Security</th>
                </tr>
              </thead>
              <tbody>
                {vendors.map((vendor, index) => (
                  <tr key={vendor.name} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50/45'}>
                    <td className="border-t border-slate-200 px-5 py-4">
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-slate-950">{vendor.name}</span>
                        <span className={`rounded-full px-2 py-1 text-xs font-semibold ${vendor.tier === 'Premium' ? 'bg-violet-100 text-violet-700' : 'bg-sky-100 text-sky-700'}`}>
                          {vendor.tier}
                        </span>
                      </div>
                    </td>
                    <td className="border-t border-slate-200 px-5 py-4">
                      <div className="flex items-center gap-2 font-semibold text-slate-950">
                        <Star className="h-4 w-4 text-amber-400" />
                        {vendor.score}/100
                      </div>
                    </td>
                    <td className="border-t border-slate-200 px-5 py-4 text-slate-700">{vendor.pricing}</td>
                    <td className="border-t border-slate-200 px-5 py-4 text-sm text-slate-600">{vendor.bestFor}</td>
                    <td className="border-t border-slate-200 px-5 py-4 text-sm text-indigo-700">{vendor.security}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-6 mb-16">
          {vendors.map((vendor) => (
            <div key={vendor.name} className="page-card p-8 md:p-10">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">{vendor.name}</h2>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${vendor.tier === 'Premium' ? 'bg-violet-100 text-violet-700' : 'bg-sky-100 text-sky-700'}`}>
                      {vendor.tier}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                    <span className="inline-flex items-center gap-2 font-semibold text-slate-950">
                      <Star className="h-4 w-4 text-amber-400" />
                      {vendor.score}/100
                    </span>
                    <span>{vendor.pricing}</span>
                    <span>{vendor.compliance}</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  Best fit: {vendor.bestFor}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-[1.5rem] border border-indigo-100 bg-indigo-50/80 p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-indigo-800">
                    <CheckCircle2 className="h-5 w-5" />
                    Strengths
                  </h3>
                  <div className="space-y-3">
                    {vendor.strengths.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/80 bg-white/80 px-4 py-3 text-sm text-indigo-900">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-amber-100 bg-amber-50/80 p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-amber-800">
                    <AlertTriangle className="h-5 w-5" />
                    Considerations
                  </h3>
                  <div className="space-y-3">
                    {vendor.weaknesses.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/80 bg-white/80 px-4 py-3 text-sm text-amber-900">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-sky-100 bg-sky-50/80 p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-sky-800">
                    <Shield className="h-5 w-5" />
                    Security & compliance
                  </h3>
                  <div className="space-y-3">
                    <div className="rounded-2xl border border-white/80 bg-white/80 px-4 py-3 text-sm text-sky-900">
                      <span className="font-semibold">Security:</span> {vendor.security}
                    </div>
                    <div className="rounded-2xl border border-white/80 bg-white/80 px-4 py-3 text-sm text-sky-900">
                      <span className="font-semibold">Compliance:</span> {vendor.compliance}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Recommendations by use case</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Different use cases,
              <span className="brand-gradient-text block">should produce different winners.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {useCases.map((item) => (
              <div key={item.title} className={`page-card border p-8 ${item.tone}`}>
                <h3 className="mb-4 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                <div className="space-y-3 text-sm">
                  <div className="rounded-2xl border border-white/80 bg-white/80 px-4 py-3">
                    <span className="font-semibold">Best:</span> {item.best}
                  </div>
                  <div className="rounded-2xl border border-white/80 bg-white/80 px-4 py-3">
                    <span className="font-semibold">Alt:</span> {item.alt}
                  </div>
                  <p className="leading-6 opacity-90">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Related AI selection tools</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Once you finish the comparison,
              <span className="brand-gradient-text block">go back to the decision tools.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Link href="/ai-implementation-checklist-enterprise-2026" className="page-card group p-8 transition-transform duration-200 hover:-translate-y-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                <CheckCircle2 className="h-5 w-5 text-[#635bff]" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Implementation Checklist</h3>
              <p className="mb-5 leading-7 text-slate-600">Step-by-step AI deployment guide for turning a shortlist into an executable program.</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#635bff]">
                Open checklist
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>

            <Link href="/ai-total-cost-ownership-calculator-enterprise-2026" className="page-card group p-8 transition-transform duration-200 hover:-translate-y-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                <Users className="h-5 w-5 text-[#635bff]" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">TCO Calculator</h3>
              <p className="mb-5 leading-7 text-slate-600">Calculate the real cost of AI ownership before the procurement deck starts lying to you.</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#635bff]">
                Open calculator
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </section>

        <section className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Advisory CTA
              </div>
              <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
                Need personalized vendor analysis?
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                The CTA intent stays the same: if your constraints are unusual, do not expect a public ranking to make the final call for you. Decision criteria need to fit the business or the selection will fail under pressure.
              </p>
            </div>
            <div className="space-y-4">
              <div className="page-card bg-slate-50/80 p-5">
                <div className="text-sm font-semibold text-slate-950">Custom vendor analysis</div>
                <div className="mt-2 text-sm text-slate-600">Security, compliance, integration fit, TCO, and use-case weighting aligned to your enterprise context.</div>
              </div>
              <Link href="/contact" className="btn-brand inline-flex items-center gap-2">
                Get custom analysis
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
