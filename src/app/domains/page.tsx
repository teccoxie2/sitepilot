import type { Metadata } from 'next'
import { normalizeMetadata } from '@/lib/seo'
import TopicLanding from '@/components/TopicLanding'

const metadataConfig: Metadata = {
  "title": "Domain Buying Guides: Registrars, Privacy & Setup",
  "description": "Choose a registrar, compare domain extensions, protect ownership, and connect your domain to the right hosting or website platform.",
  "alternates": {
    "canonical": "https://sitepilot.co/domains"
  },
  "openGraph": {
    "url": "https://sitepilot.co/domains",
    "type": "website"
  }
}

export const metadata: Metadata = normalizeMetadata(metadataConfig)

const content = {
  "title": "Domain buying and ownership",
  "intro": "A domain decision starts with ownership and renewal terms. Use these guides to separate the name you register from the platform that publishes your website, then check the practical steps before paying.",
  "steps": [
    {
      "title": "Choose where to register",
      "body": "Compare the first-year and renewal price, account security, transfer process, and support. A low introductory price is only one part of the ownership cost.",
      "href": "/best-domain-registrars-2026",
      "label": "Compare domain registrars"
    },
    {
      "title": "Check the name and ownership",
      "body": "Review extension choices and potential name conflicts before checkout. Keep the registrant account under your control and understand what privacy protection does and does not hide.",
      "href": "/how-to-buy-a-domain-name-2026",
      "label": "Follow the domain buying guide"
    },
    {
      "title": "Plan the website connection",
      "body": "Domain registration and web hosting are separate decisions. Confirm DNS access, email records, and the publishing platform before changing nameservers or moving an existing site.",
      "href": "/domain-vs-hosting-2026",
      "label": "Understand domains and hosting"
    }
  ]
}

export default function Page() {
  return <TopicLanding {...content} />
}
