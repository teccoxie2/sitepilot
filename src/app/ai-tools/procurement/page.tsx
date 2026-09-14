import type { Metadata } from 'next'
import { normalizeMetadata } from '@/lib/seo'
import TopicLanding from '@/components/TopicLanding'

const metadataConfig: Metadata = {
  "title": "AI Vendor Selection: RFPs, Due Diligence & Scorecards",
  "description": "Evaluate AI vendors with comparison guides, RFP templates, due diligence checklists, pilot criteria, and a weighted decision matrix.",
  "alternates": {
    "canonical": "https://sitepilot.co/ai-tools/procurement"
  },
  "openGraph": {
    "url": "https://sitepilot.co/ai-tools/procurement",
    "type": "website"
  }
}

export const metadata: Metadata = normalizeMetadata(metadataConfig)

const content = {
  "title": "AI vendor selection and procurement",
  "intro": "Use this collection when your team has a business problem to solve and needs to choose an AI supplier. Work from requirements to comparable evidence, then test the finalists before making a commitment.",
  "steps": [
    {
      "title": "Define a comparable shortlist",
      "body": "Describe the workflow, required integrations, data boundaries, and decision owners before comparing demos. Keep vendor claims separate from capabilities your team has confirmed.",
      "href": "/enterprise-ai-vendor-comparison-guide-2026",
      "label": "Build an AI vendor shortlist"
    },
    {
      "title": "Collect evidence and contract answers",
      "body": "Ask each finalist the same questions about data use, security, pricing, support, and exit terms. Record unresolved questions with an owner so an attractive demo does not conceal a buying blocker.",
      "href": "/enterprise-ai-vendor-rfp-template-2026",
      "label": "Use the AI vendor RFP template"
    },
    {
      "title": "Score and validate finalists",
      "body": "Apply weights that match your priorities and document the evidence for each score. Validate the leading option in a pilot; a scoring model is a planning aid, not proof of production readiness.",
      "href": "/ai-procurement-decision-matrix-tool-2026",
      "label": "Run the procurement decision matrix"
    }
  ]
}

export default function Page() {
  return <TopicLanding {...content} />
}
