import { normalizeMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const pageTitle = 'IP Leak Test | WebRTC Leak Check | SitePilot'
export const pageDescription =
  'Check whether your browser exposes local network candidates, public reflexive candidates, and reverse DNS context before you trust an IP route.'
export const pageUrl = 'https://sitepilot.co/ip-leak-test'

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
