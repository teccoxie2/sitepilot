import { Metadata } from 'next'
import Link from 'next/link'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Cheap Web Hosting 2026 | SitePilot'
const pageDescription = 'Affordable hosting providers for 2026 that offer great performance without breaking the bank.'
const pageUrl = 'https://sitepilot.co/hosting/cheap-hosting'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
}

export default function CheapHostingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Cheap Web Hosting 2026</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">Quality hosting on a budget. Yes, it's possible.</p>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-16 prose prose-slate">
        <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />
        <p>For most personal projects and small sites, you don't need to spend $30/month. We recommend Hostinger and Bluehost for the best balance of price and reliability.</p>
        <Link href="/hosting/hostinger-review" className="text-blue-700 font-bold hover:underline">Hostinger Review →</Link>
      </main>
    </div>
  )
}
