import type { Metadata } from 'next'

export const pageTitle = 'Enterprise AI Vendor Risk Evaluation Tool 2026 | SitePilot'
export const pageDescription =
  'Evaluate enterprise AI vendors with an 8-dimension risk model covering security, compliance, architecture, finance, operations, governance, and partnership readiness.'
export const pageUrl = 'https://sitepilot.co/ai-vendor-risk-evaluation-tool-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI vendor risk assessment',
    'enterprise AI vendor evaluation',
    'AI procurement risk tool',
    'AI compliance assessment',
    'vendor governance',
    'enterprise AI security review',
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
