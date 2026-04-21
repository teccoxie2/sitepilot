import type { Metadata } from 'next'

const pageTitle = 'AI Talent Optimization Calculator 2026 | Enterprise HR ROI Tool | SitePilot'
const pageDescription =
  'Estimate the ROI, payback period, and operational impact of AI-powered HR optimization with a practical enterprise planning calculator.'
const pageUrl = 'https://sitepilot.co/ai-talent-optimization-calculator-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI talent optimization',
    'HR ROI calculator',
    'enterprise HR analytics',
    'AI recruitment optimization',
    'workforce productivity calculator',
    'talent strategy planning',
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
