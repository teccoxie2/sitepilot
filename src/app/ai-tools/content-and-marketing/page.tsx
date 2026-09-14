import type { Metadata } from 'next'
import { normalizeMetadata } from '@/lib/seo'
import TopicLanding from '@/components/TopicLanding'

const metadataConfig: Metadata = {
  "title": "AI Content & Business Tools: Comparisons and Workflows",
  "description": "Compare AI writing, SEO, content, and business tools by workflow fit, review effort, integration needs, and operating cost.",
  "alternates": {
    "canonical": "https://sitepilot.co/ai-tools/content-and-marketing"
  },
  "openGraph": {
    "url": "https://sitepilot.co/ai-tools/content-and-marketing",
    "type": "website"
  }
}

export const metadata: Metadata = normalizeMetadata(metadataConfig)

const content = {
  "title": "AI content and business tools",
  "intro": "Start with the task your team needs to complete: research, drafting, editing, publishing, or reporting. Use the comparisons and workflow guides below to narrow the options before evaluating a larger purchasing or implementation decision.",
  "steps": [
    {
      "title": "Compare tools for a specific task",
      "body": "A writing assistant, SEO research tool, and publishing system solve different problems. Identify required inputs and outputs before comparing feature lists or paid plans.",
      "href": "/best-ai-seo-tools-2026",
      "label": "Compare AI SEO tools"
    },
    {
      "title": "Test the whole workflow",
      "body": "Include fact checking, editing, approvals, and handoffs in a trial. Evaluate the work needed to turn a generated output into something your team can publish or use.",
      "href": "/ai-content-workflow-automation-2026",
      "label": "Explore content workflow automation"
    },
    {
      "title": "Connect the trial to the buying decision",
      "body": "Record quality, review effort, cost, and integration gaps from a representative trial. If several teams will use the tool, bring the evidence into a shared procurement process.",
      "href": "/ai-tools/procurement",
      "label": "Continue to AI vendor selection"
    }
  ]
}

export default function Page() {
  return <TopicLanding {...content} />
}
