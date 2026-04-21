import type { Metadata } from 'next'
import EnterpriseAIROICalculationModelClient from './ROIClient'

const pageTitle = 'Enterprise AI ROI Calculation Model 2026 | SitePilot'
const pageDescription =
  'Comprehensive ROI calculation model based on analysis of 1,000+ enterprise AI implementations. Achieve accurate financial projections with industry-specific benchmarks and risk factors.'
const pageUrl = 'https://sitepilot.co/enterprise-ai-roi-calculation-model-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['enterprise AI ROI model', 'AI ROI calculator', 'AI financial impact', 'enterprise AI payback', 'AI investment returns'],
  alternates: { canonical: pageUrl },
  openGraph: { title: pageTitle, description: pageDescription, type: 'article', url: pageUrl },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
}

export default function EnterpriseAIROICalculationModel2026Page() {
  return <EnterpriseAIROICalculationModelClient />
}
