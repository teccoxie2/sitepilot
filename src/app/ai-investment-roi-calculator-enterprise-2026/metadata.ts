import { normalizeMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

const pageTitle = 'Enterprise AI Investment ROI Calculator 2026 | SitePilot'
const pageDescription =
  'An enterprise AI ROI calculator for testing financial return, risk factors, and investment recommendations with CFO-level modeling. Replace the illustrative defaults with verified internal data before making a funding decision.'
const pageUrl = 'https://sitepilot.co/ai-investment-roi-calculator-enterprise-2026'

const metadataConfig: Metadata = {
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
};

export const metadata: Metadata = normalizeMetadata(metadataConfig);
export { pageTitle, pageDescription, pageUrl }
