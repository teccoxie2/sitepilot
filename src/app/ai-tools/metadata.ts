import { normalizeMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const pageTitle = 'Best AI Tools 2026 | Compare AI Software for Business, SEO & Content'
export const pageDescription =
  'Compare the best AI tools in 2026 for business, SEO, and content workflows using output quality, workflow fit, privacy risk, pricing discipline, and operator control before you shortlist software.'
export const pageUrl = 'https://sitepilot.co/ai-tools'

const metadataConfig: Metadata = {
  title: pageTitle,
  description: pageDescription,
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
