import type { Metadata } from 'next'
import { normalizeMetadata } from '@/lib/seo'
import TopicLanding from '@/components/TopicLanding'

const metadataConfig: Metadata = {
  "title": "AI Implementation: Rollout, Training & Measurement",
  "description": "Plan AI pilots, integrations, rollout stages, team training, and adoption measurement using implementation guides and practical tools.",
  "alternates": {
    "canonical": "https://sitepilot.co/ai-tools/implementation"
  },
  "openGraph": {
    "url": "https://sitepilot.co/ai-tools/implementation",
    "type": "website"
  }
}

export const metadata: Metadata = normalizeMetadata(metadataConfig)

const content = {
  "title": "AI implementation and adoption",
  "intro": "Once a use case and supplier are selected, the next decision is how to deliver the change. This collection covers the work between a pilot and a maintained business workflow, including people, integrations, and measurement.",
  "steps": [
    {
      "title": "Scope a controlled pilot",
      "body": "Choose a specific workflow, representative inputs, success criteria, and an accountable owner. Identify the integrations and data access needed before estimating the timeline.",
      "href": "/ai-implementation-checklist-enterprise-2026",
      "label": "Use the implementation checklist"
    },
    {
      "title": "Plan handoffs and training",
      "body": "Map the people who will configure, review, approve, and support the workflow. Make room for training and changes to existing processes instead of treating installation as the end of the project.",
      "href": "/ai-change-management-framework-enterprise-2026",
      "label": "Plan change management"
    },
    {
      "title": "Measure and maintain the rollout",
      "body": "Track adoption and workflow outcomes alongside operating effort. Define how the team will respond when quality falls or a dependency changes, and review the pilot evidence before increasing scope.",
      "href": "/ai-tools-usage-tracking-dashboard-2026",
      "label": "Explore usage tracking"
    }
  ]
}

export default function Page() {
  return <TopicLanding {...content} />
}
