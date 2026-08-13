import { expect, test } from '@playwright/test'

test.describe('SitePilot smoke tests', () => {
  test('renders the homepage landmarks and primary CTA', async ({ page }) => {
    const response = await page.goto('/')

    expect(response?.status()).toBe(200)
    await expect(page).toHaveTitle(/SitePilot/)
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()
    await expect(page.getByRole('link', { name: /start with live audits/i })).toBeVisible()
  })

  test('serves the core coverage hubs', async ({ page }) => {
    for (const route of ['/web-hosting', '/website-builders', '/proxies', '/ai-tools']) {
      const response = await page.goto(route)

      expect(response?.status(), `${route} should return HTTP 200`).toBe(200)
      await expect(page.locator('h1')).toBeVisible()
    }
  })

  test('opens the mobile navigation', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const mobileMenuButton = page.locator('header button').last()
    await expect(mobileMenuButton).toBeVisible()
    await mobileMenuButton.click()

    await expect(page.locator('header').getByRole('link', { name: 'GET STARTED' }).last()).toBeVisible()
  })
})
