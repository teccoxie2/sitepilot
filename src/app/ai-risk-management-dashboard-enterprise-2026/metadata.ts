import type { Metadata } from 'next'

const pageTitle = 'AI Risk Management Dashboard Enterprise 2026 | SitePilot'
const pageDescription =
  'Comprehensive enterprise AI risk management dashboard for monitoring security, compliance, model health, and operational risk in real time.'
const pageUrl = 'https://sitepilot.co/ai-risk-management-dashboard-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI risk management dashboard',
    'enterprise AI security',
    'AI compliance monitoring',
    'risk dashboard',
    'AI threat monitoring',
    'enterprise risk management',
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
    locale: 'zh_CN',
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
