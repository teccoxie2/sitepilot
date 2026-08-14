import { normalizeMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const pageTitle = 'IP Reputation Checker | Live Network Intelligence | SitePilot'
export const pageDescription =
  'Check IP reputation, proxy, VPN, TOR, hosting, ASN, network, and geolocation signals before using an IP for sensitive workflows.'
export const pageUrl = 'https://sitepilot.co/ip-reputation-checker'

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
