import type { Metadata } from 'next'
import { normalizeMetadata } from '@/lib/seo'
import TopicLanding from '@/components/TopicLanding'

const metadataConfig: Metadata = {
  "title": "AI Costs & ROI: Budget Guides and Calculators",
  "description": "Plan AI implementation budgets, total ownership cost, payback, and return on investment with scenario calculators and financial guides.",
  "alternates": {
    "canonical": "https://sitepilot.co/ai-tools/costs-and-roi"
  },
  "openGraph": {
    "url": "https://sitepilot.co/ai-tools/costs-and-roi",
    "type": "website"
  }
}

export const metadata: Metadata = normalizeMetadata(metadataConfig)

const content = {
  "title": "AI costs, budgets and return on investment",
  "intro": "Use these guides to make an AI business case explicit. Separate supplier charges from implementation and operating costs, then compare the expected benefit with a baseline your team can measure.",
  "steps": [
    {
      "title": "Establish the cost baseline",
      "body": "Include integration work, data preparation, training, support, and ongoing review alongside subscription or usage charges. Replace example calculator inputs with current quotes and internal rates.",
      "href": "/ai-total-cost-ownership-calculator-enterprise-2026",
      "label": "Model total cost of ownership"
    },
    {
      "title": "Compare scenarios",
      "body": "Use a conservative case as well as the expected case. Adoption, review time, and implementation delays can change the result; keep those assumptions visible in the budget discussion.",
      "href": "/ai-implementation-cost-calculator-enterprise-2026",
      "label": "Explore implementation cost scenarios"
    },
    {
      "title": "Check realised value",
      "body": "Choose a measurement period and define the baseline before rollout. Distinguish time saved from money recovered, and revisit the business case when actual usage or delivery costs change.",
      "href": "/ai-automation-roi-measurement-2026",
      "label": "Plan ROI measurement"
    }
  ]
}

export default function Page() {
  return <TopicLanding {...content} />
}
