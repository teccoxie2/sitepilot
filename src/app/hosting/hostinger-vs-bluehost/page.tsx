import { Metadata } from 'next'
import Link from 'next/link'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Hostinger vs Bluehost 2026 Comparison | SitePilot'
const pageDescription = 'A head-to-head comparison between Hostinger and Bluehost for 2026. Speed, pricing, features, and support compared.'
const pageUrl = 'https://sitepilot.co/hosting/hostinger-vs-bluehost'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
}

export default function HostingerVsBluehostPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <section className="bg-slate-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Hostinger vs Bluehost 2026</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">The ultimate hosting battle. Which one is right for your project?</p>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-16 prose prose-slate">
        <SchemaMarkup type="review" title={pageTitle} description={pageDescription} url={pageUrl} reviewRating={4.7} />
        <p>Hostinger wins on price and custom interface, while Bluehost wins on WordPress integration and onboarding for complete beginners. Our recommendation depends on your technical comfort level.</p>
        <Link href="/hosting/best-web-hosting" className="text-blue-700 font-bold hover:underline">See full hosting guide →</Link>
      </main>
    </div>
  )
}
