import { normalizeMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

const metadataConfig: Metadata = {
  title: 'Mobile Proxy Software Comparison: Coronium vs LTESpace vs DIY (2026)',
  description:
    'Compare Coronium, LTESpace, and DIY mobile proxy software by rotation control, recovery speed, device visibility, and operator overhead before you scale the wrong control stack.',
  alternates: { canonical: 'https://sitepilot.co/proxies/mobile-proxy-software-comparison-2026' },
  openGraph: {
    title: 'Mobile Proxy Software Comparison: Coronium vs LTESpace vs DIY (2026)',
    description:
      'Compare Coronium, LTESpace, and DIY mobile proxy software by rotation control, recovery speed, device visibility, and operator overhead before you scale the wrong control stack.',
    url: 'https://sitepilot.co/proxies/mobile-proxy-software-comparison-2026',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Proxy Software Comparison: Coronium vs LTESpace vs DIY (2026)',
    description:
      'Compare Coronium, LTESpace, and DIY mobile proxy software by rotation control, recovery speed, device visibility, and operator overhead before you scale the wrong control stack.',
  },
};

export const metadata: Metadata = normalizeMetadata(metadataConfig);
