import type { Metadata } from 'next'
import { normalizeMetadata } from '@/lib/seo'
import RiskManagementClient from './RiskManagementClient'

const metadataConfig: Metadata = {
  title: 'AI Risk Management Framework | SitePilot',
  description: 'Explore an illustrative AI risk assessment across operational, data, and governance categories. Review assumptions before using results for planning.',
  alternates: { canonical: 'https://sitepilot.co/tools/ai-risk-management-framework' },
  openGraph: { url: 'https://sitepilot.co/tools/ai-risk-management-framework', type: 'website' },
}
export const metadata: Metadata = normalizeMetadata(metadataConfig)

export default function Page() {
  return <RiskManagementClient />
}
