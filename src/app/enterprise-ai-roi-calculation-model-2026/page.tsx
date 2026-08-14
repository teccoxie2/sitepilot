import { normalizeMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
import EnterpriseAIROICalculationModelClient from './ROIClient'

const pageTitle = 'Enterprise AI ROI Calculation Model 2026 | SitePilot'
const pageDescription =
  'Comprehensive ROI calculation model for testing enterprise AI investment assumptions, payback timing, value drivers, and risk factors. Use the outputs as planning scenarios and replace defaults with verified internal data.'
const pageUrl = 'https://sitepilot.co/enterprise-ai-roi-calculation-model-2026'

const metadataConfig: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['enterprise AI ROI model', 'AI ROI calculator', 'AI financial impact', 'enterprise AI payback', 'AI investment returns'],
  alternates: { canonical: pageUrl },
  openGraph: { title: pageTitle, description: pageDescription, type: 'article', url: pageUrl },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
};

export const metadata: Metadata = normalizeMetadata(metadataConfig);
export default function EnterpriseAIROICalculationModel2026Page() {
  return <EnterpriseAIROICalculationModelClient />
}
