import { expect, test } from '@playwright/test'
import { resolvePartnerLink } from '../src/data/affiliate-partners'

const partnerRoutes = [
  {
    route: '/proxies/marsproxies-review',
    partner: 'marsproxies',
    officialUrl: 'https://marsproxies.com/',
    title: /MarsProxies Review/,
  },
  {
    route: '/zerobounce-review',
    partner: 'zerobounce',
    officialUrl: 'https://www.zerobounce.net/',
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
  })

  for (const item of partnerRoutes) {
    test(`${item.partner} remains a normal official link while pending`, async ({ page, request }) => {
      const response = await request.get(item.route)
      expect(response.status()).toBe(200)
      const html = await response.text()
      expect(html).toContain('application/ld+json')
      expect(html).toContain('"@type":"Article"')
      expect(html).not.toContain('#affiliate-')

      await page.goto(item.route)
      await expect(page).toHaveTitle(item.title)
      const partnerLinks = page.locator(`[data-partner-id="${item.partner}"]`)
      await expect(partnerLinks.first()).toHaveAttribute('href', item.officialUrl)
      await expect(partnerLinks.first()).toHaveAttribute('data-partnership-status', 'pending')
      await expect(partnerLinks.first()).not.toHaveAttribute('rel', /sponsored/)
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
