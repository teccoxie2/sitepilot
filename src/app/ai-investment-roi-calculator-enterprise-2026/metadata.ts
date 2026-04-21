import type { Metadata } from 'next'

const pageTitle = 'Enterprise AI Investment ROI Calculator 2026 | SitePilot'
const pageDescription =
  'An enterprise AI ROI calculator built on real-world data from 179 Fortune 500 companies. Evaluates financial return, risk factors, and investment recommendations with CFO-level modeling.'
const pageUrl = 'https://sitepilot.co/ai-investment-roi-calculator-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI ROI calculator',
    'AI investment return',
    'enterprise AI ROI',
    'AI project valuation',
    'AI cost benefit analysis',
    'AI financial analysis',
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
