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
  return (
    <a
      href={href}
      className={className}
      onClick={() => trackApplySubmit(formName, { channel: 'mailto' })}
    >
      {children}
    </a>
  )
}
