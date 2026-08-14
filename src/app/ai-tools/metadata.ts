import { normalizeMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const pageTitle = 'AI Tools & Procurement Evaluation 2026 | SitePilot'
export const pageDescription =
  'Evaluate AI tools for business, SEO, and content workflows using output quality, workflow fit, privacy risk, pricing discipline, and operator control before procurement.'
export const pageUrl = 'https://sitepilot.co/ai-tools'

const metadataConfig: Metadata = {
  title: pageTitle,
  description: pageDescription,
  authors: [{ name: 'SitePilot Team' }],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
};

export const metadata: Metadata = normalizeMetadata(metadataConfig);
