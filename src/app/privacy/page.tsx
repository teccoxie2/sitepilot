import { Metadata } from 'next'
import Link from 'next/link'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Privacy Policy | SitePilot'
const pageDescription = 'Our commitment to protecting your data and transparency in how we handle information across our enterprise AI and hosting guides.'
const pageUrl = 'https://sitepilot.co/privacy'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold">Privacy Policy</h1>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">
        <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />
        
        <h2>1. Data Collection</h2>
        <p>SitePilot is primarily an informational platform. We do not require account creation for most services. We collect minimal telemetry and analytical data to improve our enterprise AI and hosting guides.</p>
        
        <h2>2. Use of Information</h2>
        <p>Any information provided via email or contact forms is used solely to respond to your inquiries. We do not sell, rent, or trade your personal data with third-party marketers.</p>
        
        <h2>3. Third-Party Links</h2>
        <p>Our guides contain links to third-party services (e.g., hosting providers, AI vendors). We are not responsible for the privacy practices of these external sites. We recommend reviewing their policies before providing any personal data.</p>
        
        <h2>4. Updates</h2>
        <p>This policy was last updated on April 6, 2026. Any material changes will be reflected on this page.</p>
      </main>
    </div>
  )
}
