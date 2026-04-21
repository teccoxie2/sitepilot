import type { Metadata } from 'next'
import SchemaMarkup from '@/components/SchemaMarkup'
import AIImplementationCostCalculatorClient from './AIImplementationCostCalculatorClient'

const pageTitle = 'Enterprise AI Implementation Cost Calculator 2026 | ROI Planning Tool | SitePilot'
const pageDescription =
  'Calculate enterprise AI implementation cost, annual operating expense, risk-adjusted ROI, and break-even timing with a practical 3-year planning model.'
const pageUrl = 'https://sitepilot.co/ai-implementation-cost-calculator-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI implementation cost',
    'enterprise AI budget',
    'AI ROI calculator',
    'AI project costs',
    'AI investment planning',
    'enterprise AI cost analysis',
  ],
  authors: [{ name: 'SitePilot Team' }],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'article',
    siteName: 'SitePilot',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AIImplementationCostCalculatorPage() {
  return (
    <>
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-16"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />
      <AIImplementationCostCalculatorClient />
    </>
  )
}
