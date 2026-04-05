import { Metadata } from 'next'
import Link from 'next/link'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Our Methodology | SitePilot'
const pageDescription = 'How we test, review, and evaluate enterprise AI vendors and hosting services. Transparent, evidence-first research for buying teams.'
const pageUrl = 'https://sitepilot.co/methodology'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
}

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <section className="bg-slate-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Our Methodology</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            SitePilot exists to solve a single problem: the death of honest enterprise research in the AI and hosting era.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-16 prose prose-slate lg:prose-lg">
        <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />
        
        <h2 className="text-3xl font-bold">1. Evidence-First Approach</h2>
        <p>We do not rely on vendor slide decks. Our research is based on direct interaction, customer evidence, technical documentation, and real-world deployment performance.</p>
        
        <h2 className="text-3xl font-bold">2. Weighted Decision Frameworks</h2>
        <p>AI buying is complex. We use multi-dimensional scoring models (Security, Data Governance, Architecture, ROI) to rank solutions, ensuring procurement teams have a balanced view beyond just features.</p>
        
        <h2 className="text-3xl font-bold">3. No Pay-for-Play Reviews</h2>
        <p>While we may earn affiliate commissions on some products, our editorial and ranking criteria are independent. A high commission never overrides a security or architecture red flag.</p>
        
        <h2 className="text-3xl font-bold">4. Regular Audits</h2>
        <p>The AI market moves fast. We review and update our 2026 enterprise guides on a rolling basis to reflect new model releases and regulatory changes.</p>
      </main>
    </div>
  )
}
