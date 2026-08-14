'use client'

import { trackApplySubmit } from '@/components/GoogleAnalytics'

interface TrackedMailtoLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  formName?: string
}

export default function TrackedMailtoLink({
  href,
  children,
  className = '',
  formName = 'technical_audit_request',
}: TrackedMailtoLinkProps) {
  function handleClick() {
    const params = new URLSearchParams(window.location.search)
    const source = params.get('source')
    let sourcePage: string | undefined
    if (document.referrer) {
      try {
        sourcePage = new URL(document.referrer).pathname
      } catch {
        sourcePage = undefined
      }
    }
    trackApplySubmit(formName, {
      channel: 'mailto',
      source: source ?? undefined,
      source_page: sourcePage,
    })
  }

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
