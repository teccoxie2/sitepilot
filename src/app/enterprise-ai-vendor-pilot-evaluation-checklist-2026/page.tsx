import { Metadata } from 'next'
import Link from 'next/link'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Vendor Pilot Evaluation Checklist 2026 | SitePilot'
const pageDescription = 'A structured evaluation checklist to validate enterprise AI vendors during the pilot phase using measurable acceptance criteria.'
const pageUrl = 'https://sitepilot.co/enterprise-ai-vendor-pilot-evaluation-checklist-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
}

export default function PilotEvaluationChecklistPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <section className="bg-gradient-to-br from-indigo-900 to-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium mb-6 border border-white/20">
            Pilot Validation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise AI Vendor Pilot Evaluation Checklist 2026</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            An enterprise AI vendor pilot evaluation checklist defines acceptance criteria, rollback conditions, and evidence requirements before a shortlisted tool receives production approval. This 2026 model helps buying teams test model quality, security controls, integration performance, and adoption metrics against live workflows instead of vendor demos.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-10">
        <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How to use this checklist</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Use this page after the{' '}
            <Link href="/enterprise-ai-vendor-rfp-template-2026" className="text-blue-700 font-medium hover:underline">
              RFP template
            </Link>{' '}
            and{' '}
            <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="text-blue-700 font-medium hover:underline">
              due diligence checklist
            </Link>{' '}
            narrow the field to vendors worth testing. Every unresolved claim should become a measurable pilot test, not a verbal promise.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Final pilot outputs should feed back into the{' '}
            <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="text-blue-700 font-medium hover:underline">
              shortlist scorecard
            </Link>{' '}
            and the{' '}
            <Link href="/enterprise-ai-vendor-pricing-guide-2026" className="text-blue-700 font-medium hover:underline">
              pricing guide
            </Link>{' '}
            so production approval reflects real evidence, actual cost behavior, and verified operational fit.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            Use the{' '}
            <Link href="/methodology" className="text-blue-700 font-medium hover:underline">
              SitePilot methodology
            </Link>{' '}
            to separate pass/fail controls from weighted differentiators before a pilot result is treated as procurement evidence.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Pilot Acceptance Criteria</h2>
          <ul className="space-y-4 text-slate-700">
            <li><strong>Accuracy & Grounding:</strong> Output must meet predefined thresholds for factual accuracy without relying on synthetic demo data.</li>
            <li><strong>Latency & SLA:</strong> API response times under load must meet business SLAs.</li>
            <li><strong>Security Guardrails:</strong> RBAC, data masking, and prompt injection defenses must successfully block test violations.</li>
            <li><strong>User Adoption:</strong> Clear metrics on active usage and workflow completion by the test group.</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Rollback & Exit Requirements</h2>
          <ul className="space-y-4 text-slate-700">
            <li><strong>Data Deletion:</strong> Vendor must prove all pilot data can be securely wiped.</li>
            <li><strong>No Lock-in:</strong> Workflows must be portable without extensive rebuilding if the pilot is rejected.</li>
          </ul>
        </div>

        <RelatedLinks links={[
          { title: 'Enterprise AI Vendor RFP Template 2026', href: '/enterprise-ai-vendor-rfp-template-2026', description: 'Turn unresolved RFP answers into explicit pilot test cases.', category: 'guide' },
          { title: 'AI Vendor Due Diligence Checklist 2026', href: '/ai-vendor-due-diligence-checklist-enterprise-2026', description: 'Address underlying security risks before running the pilot.', category: 'guide' },
          { title: 'Enterprise AI Vendor Shortlist Scorecard 2026', href: '/enterprise-ai-vendor-shortlist-scorecard-2026', description: 'Score the final pilot results against your initial expectations.', category: 'tools' },
          { title: 'Enterprise AI Vendor Pricing Guide 2026', href: '/enterprise-ai-vendor-pricing-guide-2026', description: 'Check whether pilot usage patterns change the commercial picture.', category: 'guide' },
          { title: 'AI Procurement Decision Matrix Tool 2026', href: '/ai-procurement-decision-matrix-tool-2026', description: 'Quantify pilot outcomes across cost, risk, and implementation fit.', category: 'tools' }
        ]} />
      </main>
    </div>
  )
}
