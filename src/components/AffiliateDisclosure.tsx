import Link from 'next/link'
import { hasActiveTracking, type PartnerId } from '@/data/affiliate-partners'

interface AffiliateDisclosureProps {
  partner: PartnerId
}

export default function AffiliateDisclosure({ partner }: AffiliateDisclosureProps) {
  if (!hasActiveTracking(partner)) return null

  return (
    <p className="mb-8 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50/70 px-4 py-3 text-sm leading-6 text-amber-950">
      SitePilot may earn a commission if you buy through links on this page. Commercial relationships do not determine our recommendations. See our{' '}
      <Link href="/methodology" className="font-semibold underline underline-offset-4">methodology</Link>{' '}
      for how we assess products.
    </p>
  )
}
