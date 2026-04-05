import { Metadata } from 'next'
import Link from 'next/link'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Terms of Service | SitePilot'
const pageDescription = 'Terms and conditions for using the SitePilot platform, guides, and enterprise AI procurement tools.'
const pageUrl = 'https://sitepilot.co/terms'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold">Terms of Service</h1>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">
        <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />
        
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing SitePilot.co, you agree to comply with these terms of service and all applicable laws. If you do not agree, please discontinue use of the platform.</p>
        
        <h2>2. Professional Advice</h2>
        <p>The content on SitePilot, including enterprise AI guides and procurement templates, is for informational purposes only. It does not constitute professional legal, security, or financial advice. Always perform your own due diligence before making vendor decisions.</p>
        
        <h2>3. Intellectual Property</h2>
        <p>All original content, templates, and frameworks on this site are the property of SitePilot. You may use them for internal business purposes but may not redistribute them commercially without prior written consent.</p>
        
        <h2>4. Limitation of Liability</h2>
        <p>SitePilot is not liable for any losses or damages arising from your use of the information or tools provided on this platform.</p>
      </main>
    </div>
  )
}
