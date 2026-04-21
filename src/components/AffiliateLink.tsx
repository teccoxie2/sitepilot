'use client'

import { trackAffiliateClick } from '@/components/GoogleAnalytics'

interface AffiliateLinkProps {
  href: string
  children: React.ReactNode
  provider: string
  plan?: string
  source?: string
  className?: string
  target?: string
  rel?: string
}

export default function AffiliateLink({ 
  href, 
  children, 
  provider, 
  plan = 'unknown',
  source = 'content',
  className = '',
  target = '_blank',
  rel = 'noopener noreferrer nofollow'
}: AffiliateLinkProps) {
  
  const handleClick = () => {
    // Track affiliate click in Google Analytics
    trackAffiliateClick(provider, plan, source)
    
    // Optional: Also log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Affiliate click tracked: ${provider} - ${plan} - ${source}`)
    }
  }

  // If no custom style is provided, fall back to the default button style.
  const defaultClassName = className || 'btn btn-primary inline-flex items-center gap-2';
  
  return (
    <a
      href={href}
      className={defaultClassName}
      target={target}
      rel={rel}
      onClick={handleClick}
    >
      {children}
      {!className && (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      )}
    </a>
  )
}
