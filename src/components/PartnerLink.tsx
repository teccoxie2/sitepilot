import AffiliateLink from '@/components/AffiliateLink'
import { getPartner, hasActiveTracking, type PartnerId } from '@/data/affiliate-partners'

interface PartnerLinkProps {
  partner: PartnerId
  children: React.ReactNode
  plan?: string
  source: string
  className?: string
}

/**
 * Render a normal official link until a verified Impact tracking URL is
 * configured. This keeps pending partnerships useful without claiming or
 * tracking a commissionable click.
 */
export default function PartnerLink({ partner: partnerId, children, plan = 'unknown', source, className }: PartnerLinkProps) {
  const partner = getPartner(partnerId)

  if (hasActiveTracking(partnerId)) {
    return (
      <AffiliateLink
        href={partner.trackingUrl as string}
        provider={partner.id}
        plan={plan}
        source={source}
        className={className}
      >
        {children}
      </AffiliateLink>
    )
  }

  return (
    <a
      href={partner.officialUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className || 'btn btn-primary inline-flex items-center gap-2'}
      data-partner-id={partner.id}
      data-partnership-status={partner.partnershipStatus}
    >
      {children}
    </a>
  )
}
