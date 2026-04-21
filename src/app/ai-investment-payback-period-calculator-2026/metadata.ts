import type { Metadata } from 'next'

const pageTitle = 'AI Investment Payback Period Calculator 2026 | SitePilot'
const pageDescription =
  'Calculate AI investment payback period, monthly net savings, and 3-year ROI with a practical enterprise planning model.'
const pageUrl = 'https://sitepilot.co/ai-investment-payback-period-calculator-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI investment payback period calculator',
    'AI ROI calculator',
    'enterprise AI payback',
    'AI investment planning',
    'AI cost savings model',
    'business case calculator',
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
