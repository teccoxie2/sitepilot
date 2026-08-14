import { normalizeMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const pageTitle = 'AI Training ROI Calculator 2026 | SitePilot'
export const pageDescription =
  'Estimate AI workforce training ROI, implementation cost, annual savings, payback period, completion-rate lift, and productivity impact with a model-based calculator.'
export const pageUrl = 'https://sitepilot.co/ai-training-roi-calculator-2026'

const metadataConfig: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
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
};

export const metadata: Metadata = normalizeMetadata(metadataConfig);
