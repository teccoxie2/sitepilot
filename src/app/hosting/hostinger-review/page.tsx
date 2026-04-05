import { Metadata } from 'next'
import Link from 'next/link'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Hostinger Review 2026 | SitePilot'
const pageDescription = 'In-depth 2026 review of Hostinger: the best budget hosting provider with premium features.'
const pageUrl = 'https://sitepilot.co/hosting/hostinger-review'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
}

export default function HostingerReviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hostinger Review 2026</h1>
        <div className="flex items-center gap-2 text-amber-400">
          {[...Array(5)].map((_, i) => <span key={i} className="text-2xl">★</span>)}
          <span className="text-white ml-2">4.8/5 - Best Value</span>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">
        <SchemaMarkup type="review" title={pageTitle} description={pageDescription} url={pageUrl} reviewRating={4.8} reviewCount={240} />
        <p>Hostinger offers the best value in the hosting market today. Their hPanel is intuitive, and their performance-to-price ratio is outstanding for small to mid-sized websites.</p>
        <h3>Key Verdict: Best Value Choice</h3>
      </main>
    </div>
  )
}
