import type { Metadata } from 'next'

const pageTitle = 'Manufacturing AI ROI Calculator 2026 | SitePilot'
const pageDescription =
  'Estimate manufacturing AI investment returns with a practical calculator covering downtime, defects, energy, inventory, hidden costs, and risk-adjusted ROI.'
const pageUrl = 'https://sitepilot.co/manufacturing-ai-roi-calculator-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'manufacturing AI ROI calculator',
    'factory AI investment returns',
    'predictive maintenance ROI',
    'manufacturing AI financial model',
    'AI quality inspection ROI',
  ],
  authors: [{ name: 'SitePilot Team' }],
  alternates: { canonical: pageUrl },
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
