import type { Metadata } from 'next'
import { normalizeMetadata } from '@/lib/seo'
import TopicLanding from '@/components/TopicLanding'

const metadataConfig: Metadata = {
  "title": "AI Governance & Risk: Security and Assessment Guides",
  "description": "Review AI privacy, security, governance, and operating risks with assessment tools, checklists, and control-planning guides.",
  "alternates": {
    "canonical": "https://sitepilot.co/ai-tools/governance"
  },
  "openGraph": {
    "url": "https://sitepilot.co/ai-tools/governance",
    "type": "website"
  }
}

export const metadata: Metadata = normalizeMetadata(metadataConfig)

const content = {
  "title": "AI governance, security and risk",
  "intro": "Use this collection to organise questions about an AI system and assign responsibility for the answers. Assessment tools support review planning; their scores do not certify a supplier or determine legal compliance.",
  "steps": [
    {
      "title": "Identify data and workflow exposure",
      "body": "Document the information entering the system, who can access it, and where outputs are used. The relevant review depends on the actual workflow and the consequences of an incorrect result.",
      "href": "/ai-data-privacy-impact-assessment-2026",
      "label": "Start a data privacy assessment"
    },
    {
      "title": "Review evidence for controls",
      "body": "Collect supplier documentation and your own operating requirements. Check access, retention, auditability, and incident processes, and have the appropriate security or legal owner resolve unanswered questions.",
      "href": "/ai-tools-security-compliance-checklist-2026",
      "label": "Review the security checklist"
    },
    {
      "title": "Assign ongoing ownership",
      "body": "Define who maintains controls, reviews changes, and records incidents after deployment. Treat assessment results as a starting point for action rather than a permanent pass or fail.",
      "href": "/ai-governance-framework-enterprise-2026",
      "label": "Plan governance responsibilities"
    }
  ]
}

export default function Page() {
  return <TopicLanding {...content} />
}
