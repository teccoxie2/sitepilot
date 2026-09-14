import { expect, test } from '@playwright/test'
import { affiliatePartners, resolvePartnerLink, type PartnerId } from '../src/data/affiliate-partners'

const partnerRoutes = [
  {
    route: '/proxies/marsproxies-review',
    partner: 'marsproxies' as PartnerId,
    officialUrl: 'https://marsproxies.com/',
    trackingUrl: affiliatePartners.marsproxies.trackingUrl as string,
    title: /MarsProxies Review/,
  },
  {
    route: '/zerobounce-review',
    partner: 'zerobounce' as PartnerId,
    officialUrl: 'https://www.zerobounce.net/',
    trackingUrl: affiliatePartners.zerobounce.trackingUrl as string,
    title: /ZeroBounce Review/,
  },
]

test.describe('Impact partner integration', () => {
  test('resolves a verified active fixture to a tracking URL and rejects placeholders', () => {
    const active = resolvePartnerLink({
      id: 'marsproxies',
      name: 'MarsProxies',
      officialUrl: 'https://marsproxies.com/',
      partnershipStatus: 'active',
      trackingUrl: 'https://app.impact.com/campaign-promo?ref=sitepilot',
    })
    expect(active).toEqual({ href: 'https://app.impact.com/campaign-promo?ref=sitepilot', isAffiliate: true })

    const placeholder = resolvePartnerLink({
      id: 'marsproxies',
      name: 'MarsProxies',
      officialUrl: 'https://marsproxies.com/',
      partnershipStatus: 'active',
      trackingUrl: 'https://example.com/your-tracking-url',
    })
    expect(placeholder).toEqual({ href: 'https://marsproxies.com/', isAffiliate: false })

    const pending = resolvePartnerLink({
      id: 'marsproxies',
      name: 'MarsProxies',
      officialUrl: 'https://marsproxies.com/',
      partnershipStatus: 'pending',
      trackingUrl: 'https://impact.example/should-not-track',
    })
    expect(pending).toEqual({ href: 'https://marsproxies.com/', isAffiliate: false })

    const paused = resolvePartnerLink({
      id: 'marsproxies',
      name: 'MarsProxies',
      officialUrl: 'https://marsproxies.com/',
      partnershipStatus: 'paused',
      trackingUrl: 'https://impact.example/paused',
    })
    expect(paused).toEqual({ href: 'https://marsproxies.com/', isAffiliate: false })
  })

  test('both first-phase partners have valid active Impact links', () => {
    for (const partner of Object.values(affiliatePartners)) {
      expect(partner.partnershipStatus).toBe('active')
      expect(resolvePartnerLink(partner)).toEqual({
        href: partner.trackingUrl,
        isAffiliate: true,
      })
    }
  })

  for (const item of partnerRoutes) {
    test(`${item.partner} renders its configured affiliate link`, async ({ page, request }) => {
      const response = await request.get(item.route)
      expect(response.status()).toBe(200)
      const html = await response.text()
      expect(html).toContain('application/ld+json')
      expect(html).toContain('"@type":"Article"')
      expect(html).not.toContain('#affiliate-')

      await page.goto(item.route)
      await expect(page).toHaveTitle(item.title)
      const partnerLinks = page.locator(`a[href="${item.trackingUrl}"]`)
      await expect(partnerLinks.first()).toHaveAttribute('rel', /sponsored/)
      await expect(partnerLinks.first()).toHaveAttribute('rel', /nofollow/)
      await expect(page.locator(`[data-partner-id="${item.partner}"]`)).toHaveCount(0)
    })
  }

  test('comparison and email pages expose the new internal paths without placeholders', async ({ request }) => {
    const pages = [
      ['/proxies/best-residential-proxies-2026', '/proxies/marsproxies-review'],
      ['/best-email-marketing-tools-2026', '/zerobounce-review'],
    ] as const

    for (const [route, internalPath] of pages) {
      const html = await (await request.get(route)).text()
      expect(html).toContain(`href="${internalPath}"`)
      expect(html).not.toContain('#affiliate-')
    }
  })
})
