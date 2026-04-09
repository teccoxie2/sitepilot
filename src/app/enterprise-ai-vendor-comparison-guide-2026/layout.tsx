import type { Metadata } from 'next'

const pageTitle = 'Enterprise AI Vendor Comparison Guide 2026 | SitePilot'
const pageDescription = 'Structured enterprise AI vendor comparison framework covering platform fit, security, pricing, deployment, and shortlist decisions before RFP or pilot approval.'
const pageUrl = 'https://sitepilot.co/enterprise-ai-vendor-comparison-guide-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
}

export default function EnterpriseAIVendorComparisonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
