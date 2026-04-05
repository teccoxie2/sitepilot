import { Metadata } from 'next'
import Link from 'next/link'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Best Web Hosting 2026 | SitePilot'
const pageDescription = 'Detailed reviews of the best web hosting providers for 2026, comparing speed, uptime, pricing, and support for enterprise and personal sites.'
const pageUrl = 'https://sitepilot.co/hosting/best-web-hosting'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
}

export default function BestWebHostingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Best Web Hosting 2026</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            We've tested over 30 hosting providers to help you find the perfect balance of performance, security, and cost.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 prose prose-slate max-w-none">
            <h2>The Top 3 Hosting Providers for 2026</h2>
            <p>Choosing the right host is the single most important technical decision you'll make for your website. Here are our top-rated options for this year:</p>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">1. SiteGround - Best for Overall Support & Speed</h3>
              <p>SiteGround continues to lead the pack with their custom caching (SuperCacher), 24/7 expert support, and ultra-reliable uptime. Ideal for small businesses and developers.</p>
              <Link href="/hosting/siteground-review" className="text-blue-700 font-bold hover:underline">Read full SiteGround review →</Link>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">2. Hostinger - Best for Value & Beginners</h3>
              <p>With an incredible hPanel and extremely aggressive pricing, Hostinger provides amazing value without sacrificing the essential performance most sites need.</p>
              <Link href="/hosting/hostinger-review" className="text-blue-700 font-bold hover:underline">Read full Hostinger review →</Link>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">3. Bluehost - Best for WordPress Integration</h3>
              <p>As one of the oldest recommended hosts by WordPress.org, Bluehost offers a seamless setup and powerful features for blogs and small business sites.</p>
              <Link href="/hosting/hostinger-vs-bluehost" className="text-blue-700 font-bold hover:underline">See Hostinger vs Bluehost comparison →</Link>
            </div>
          </div>

          <aside>
            <div className="bg-blue-900 rounded-2xl text-white p-6 sticky top-8">
              <h3 className="text-xl font-bold mb-4">Buying Guide</h3>
              <ul className="space-y-4 text-sm text-blue-100">
                <li><strong>Speed:</strong> Look for TTFB under 200ms.</li>
                <li><strong>Uptime:</strong> Minimum 99.9% guarantee.</li>
                <li><strong>SLA:</strong> 24/7 live chat is mandatory.</li>
                <li><strong>Pricing:</strong> Watch for renewal spikes.</li>
              </ul>
            </div>
          </aside>
        </div>

        <RelatedLinks links={[
          { title: 'WordPress Hosting', href: '/hosting/wordpress-hosting', description: 'Best hosting for WP sites.', category: 'hosting' },
          { title: 'Cheap Hosting', href: '/hosting/cheap-hosting', description: 'Budget friendly options.', category: 'hosting' }
        ]} />
      </main>
    </div>
  )
}
