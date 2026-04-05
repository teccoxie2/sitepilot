import { Metadata } from 'next'
import Link from 'next/link'

const pageTitle = 'Contact Us | SitePilot'
const pageDescription = 'Get in touch with the SitePilot team for enterprise AI consulting, partnership inquiries, or feedback.'
const pageUrl = 'https://sitepilot.co/contact'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <section className="bg-indigo-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed">
            Have a question about enterprise AI implementation or a partnership proposal? We'd love to hear from you.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 -mt-10">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Reach out directly</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            The fastest way to get in touch with our leadership and technical teams is via email. 
            We typically respond to business inquiries within 24-48 hours.
          </p>
          <a 
            href="mailto:contact@sitepilot.co" 
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 text-white px-8 py-4 text-lg font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
          >
            contact@sitepilot.co
          </a>
          
          <div className="mt-12 pt-12 border-t border-slate-100 grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Partnerships</h3>
              <p className="text-sm text-slate-500">Interested in being featured in our guides or exploring a strategic alliance?</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">AI Consulting</h3>
              <p className="text-sm text-slate-500">Need hands-on help with your AI procurement or governance framework?</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
