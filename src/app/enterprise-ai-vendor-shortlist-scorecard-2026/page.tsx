import { Metadata } from 'next'
import Link from 'next/link'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Vendor Shortlist Scorecard 2026 | SitePilot'
const pageDescription = 'A professional scoring framework for ranking shortlisted AI vendors across 8 strategic dimensions after RFP and due diligence review.'
const pageUrl = 'https://sitepilot.co/enterprise-ai-vendor-shortlist-scorecard-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
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

export default function ShortlistScorecardPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <section className="bg-gradient-to-br from-indigo-900 to-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium mb-6 border border-white/20">
            Decision Framework
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise AI Vendor Shortlist Scorecard 2026</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Move beyond demo-day excitement. Use this weighted scoring sheet to rank your final candidates 
            based on evidence, security, and business ROI.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-10">
        <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">How to use this scorecard</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Assign a score from 1-5 for each dimension based on vendor evidence (not promises). 
                Apply weights to calculate the final weighted score. A score below 3.5 usually 
                indicates significant remediation is required before a production rollout.
              </p>
              
              <div className="space-y-8">
                {dimensions.map(dim => (
                  <div key={dim.name} className="border-t border-slate-100 pt-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-slate-900">{dim.name}</h3>
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-mono">Weight: {dim.weight}</span>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {dim.criteria.map(c => (
                        <li key={c} className="flex items-center gap-3 text-slate-600 text-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6">
              <h3 className="font-bold text-indigo-900 mb-3 text-lg">Scoring Key</h3>
              <ul className="space-y-4 text-sm text-indigo-800">
                <li><strong>5 - Leading:</strong> Documented proof, best-in-class controls.</li>
                <li><strong>3 - Baseline:</strong> Meets standard requirements with minor gaps.</li>
                <li><strong>1 - High Risk:</strong> Refuses evidence or fails core criteria.</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">Related Tools</h3>
              <div className="space-y-4">
                <Link href="/enterprise-ai-vendor-rfp-template-2026" className="block text-blue-700 hover:underline">RFP Template →</Link>
                <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="block text-blue-700 hover:underline">Due Diligence Checklist →</Link>
              </div>
            </div>
          </aside>
        </div>

        <RelatedLinks links={[
          { title: 'AI Vendor Due Diligence Checklist 2026', href: '/ai-vendor-due-diligence-checklist-enterprise-2026', description: 'Comprehensive checklist for procurement and legal review.', category: 'guide' },
          { title: 'Enterprise AI Vendor RFP Template 2026', href: '/enterprise-ai-vendor-rfp-template-2026', description: 'Ready-to-use RFP questions for AI procurement.', category: 'guide' }
        ]} />
      </main>
    </div>
  )
}
