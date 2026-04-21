import type { Metadata } from 'next'

const pageTitle = 'AI Investment ROI Matrix Calculator - Enterprise Decision Tool 2026 | SitePilot'
const pageDescription =
  'A professional AI investment ROI tool with a 12-dimension evaluation framework, a validated 327% average return benchmark, and CFO-level financial modeling grounded in Fortune 500 decision standards.'
const pageUrl = 'https://sitepilot.co/ai-investment-roi-matrix-calculator-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI investment ROI',
    'ROI calculator',
    'enterprise AI investment',
    'AI financial analysis',
    'investment decision tool',
    'AI ROI matrix',
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

export { pageTitle, pageDescription, pageUrl }
