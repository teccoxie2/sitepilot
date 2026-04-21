import type { Metadata } from 'next'

export const pageTitle = 'AI Vendor Selection: Enterprise Decision Framework 2026 | SitePilot'
export const pageDescription =
  'Use a structured enterprise AI vendor selection framework with decision criteria, scoring matrix, ROI comparison, and implementation phases for 2026 procurement.'
export const pageUrl = 'https://sitepilot.co/ai-vendor-selection-enterprise-decision-framework'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI vendor selection',
    'enterprise AI vendor evaluation',
    'AI procurement framework',
    'AI vendor comparison',
    'vendor selection matrix',
    'enterprise AI sourcing',
  ],
  alternates: {
    canonical: pageUrl,
  },
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
