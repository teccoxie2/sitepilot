import { Metadata } from 'next'
import Link from 'next/link'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'SiteGround Review 2026 | SitePilot'
const pageDescription = 'Our in-depth 2026 review of SiteGround hosting: performance, support, features, and pricing.'
const pageUrl = 'https://sitepilot.co/hosting/siteground-review'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
}

export default function SiteGroundReviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">SiteGround Review 2026</h1>
        <div className="flex items-center gap-2 text-amber-400">
          {[...Array(5)].map((_, i) => <span key={i} className="text-2xl">★</span>)}
          <span className="text-white ml-2">4.9/5 - Top Rated</span>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">
        <SchemaMarkup type="review" title={pageTitle} description={pageDescription} url={pageUrl} reviewRating={4.9} reviewCount={120} />
        <p>SiteGround is our top recommendation for businesses that value speed and support above all else. Their custom infrastructure and expert team provide an unmatched hosting experience.</p>
        <h3>Key Verdict: Highly Recommended</h3>
      </main>
    </div>
  )
}
