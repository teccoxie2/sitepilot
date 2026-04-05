import { Metadata } from 'next'
import Link from 'next/link'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Best WordPress Hosting 2026 | SitePilot'
const pageDescription = 'The top-rated WordPress hosting providers for 2026, optimized for speed, security, and ease of use.'
const pageUrl = 'https://sitepilot.co/hosting/wordpress-hosting'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
}

export default function WordPressHostingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Best WordPress Hosting 2026</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Running WordPress shouldn't be hard. We've found the hosts that make it fast and secure.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-16 prose prose-slate">
        <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />
        
        <h2>Why You Need Managed WordPress Hosting</h2>
        <p>Managed hosting takes care of updates, security, and performance optimization so you can focus on your content. Our 2026 favorites include SiteGround, Hostinger, and WP Engine.</p>
        
        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/hosting/best-web-hosting" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700">Best Web Hosting Guide</Link>
          <Link href="/hosting/cheap-hosting" className="border border-slate-300 px-6 py-3 rounded-lg font-bold hover:bg-slate-50">Cheap Hosting Guide</Link>
        </div>
      </main>
    </div>
  )
}
