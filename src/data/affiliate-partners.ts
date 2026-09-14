export type PartnerId = 'marsproxies' | 'zerobounce'
export type PartnershipStatus = 'pending' | 'active' | 'paused'

export interface PartnerConfig {
  id: PartnerId
  name: string
  officialUrl: string
  partnershipStatus: PartnershipStatus
  trackingUrl: string | null
}

// Keep partnership configuration deliberately small and public-safe. Tracking
// URLs are added only after they have been copied from the Impact link builder
// and checked by a human; secrets and private contract terms never belong here.
export const affiliatePartners: Record<PartnerId, PartnerConfig> = {
  marsproxies: {
    id: 'marsproxies',
    name: 'MarsProxies',
    officialUrl: 'https://marsproxies.com/',
    partnershipStatus: 'active',
    trackingUrl: 'https://marsproxies.sjv.io/c/7172006/3775278/48103',
  },
  zerobounce: {
    id: 'zerobounce',
    name: 'ZeroBounce',
    officialUrl: 'https://www.zerobounce.net/',
    partnershipStatus: 'active',
    trackingUrl: 'https://aff.zerobounce.net/c/7172006/3776877/31392',
  },
}

export function isValidPartnerUrl(value: string | null): value is string {
  if (!value) return false

  try {
    const url = new URL(value)
    return url.protocol === 'https:' &&
      !url.username &&
      !url.password &&
      !value.includes('#affiliate-') &&
      !/(example\.com|placeholder|your[-_ ]?tracking|todo)/i.test(value)
  } catch {
    return false
  }
}

export function getPartner(id: PartnerId) {
  return affiliatePartners[id]
}

export function hasActiveTracking(id: PartnerId) {
  return resolvePartnerLink(getPartner(id)).isAffiliate
}

export function resolvePartnerLink(partner: PartnerConfig) {
  const isAffiliate = partner.partnershipStatus === 'active' && isValidPartnerUrl(partner.trackingUrl)
  return {
    href: isAffiliate ? partner.trackingUrl as string : partner.officialUrl,
    isAffiliate,
  }
}
