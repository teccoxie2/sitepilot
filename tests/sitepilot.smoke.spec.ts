import { expect, test } from '@playwright/test'

test.describe('SitePilot smoke tests', () => {
  test('renders the homepage landmarks and primary CTA', async ({ page }) => {
    const response = await page.goto('/')

    expect(response?.status()).toBe(200)
    await expect(page).toHaveTitle(/SitePilot/)
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()
    await expect(page.getByRole('link', { name: /start with ai procurement/i })).toBeVisible()
  })

  test('serves the core coverage hubs', async ({ page }) => {
    for (const route of ['/web-hosting', '/website-builders', '/proxies', '/ai-tools']) {
      const response = await page.goto(route)

      expect(response?.status(), `${route} should return HTTP 200`).toBe(200)
      await expect(page.locator('h1')).toBeVisible()
    }
  })

  test('runs the procurement matrix and exports a decision artifact', async ({ page }) => {
    const response = await page.goto('/ai-procurement-decision-matrix-tool-2026')

    expect(response?.status()).toBe(200)
    await page.getByLabel(/Vendor A Strategic fit score/i).fill('4')
    await page.getByLabel(/Vendor B Strategic fit score/i).fill('3')
    await page.getByRole('button', { name: /mark complete/i }).click()
    await expect(page.getByRole('status')).toContainText(/matrix marked complete/i)

    await page.getByRole('button', { name: /copy share link/i }).click()
    await expect(page).toHaveURL(/scores=/)
    await page.reload()
    await expect(page.getByLabel(/Vendor A Strategic fit score/i)).toHaveValue('4')
    await expect(page.getByLabel(/Vendor B Strategic fit score/i)).toHaveValue('3')

    const downloadPromise = page.waitForEvent('download')
    await page.getByRole('button', { name: /export csv/i }).click()
    const download = await downloadPromise
    expect(download.suggestedFilename()).toBe('sitepilot-ai-procurement-matrix.csv')
    await expect(page.getByRole('link', { name: /request a tailored audit/i })).toHaveAttribute('href', '/apply-for-audit')
  })

  test('shares and exports the AI implementation cost scenario', async ({ page }) => {
    const response = await page.goto('/ai-implementation-cost-calculator-enterprise-2026')

    expect(response?.status()).toBe(200)
    await page.getByLabel('Company size').selectOption('1000-5000')
    await page.getByLabel('Implementation scope').selectOption('pilot')
    await page.getByRole('button', { name: /copy share link/i }).click()
    await expect(page).toHaveURL(/companySize=1000-5000/)
    await page.reload()
    await expect(page.getByLabel('Company size')).toHaveValue('1000-5000')

    const downloadPromise = page.waitForEvent('download')
    await page.getByRole('button', { name: /export memo/i }).click()
    const download = await downloadPromise
    expect(download.suggestedFilename()).toBe('sitepilot-ai-implementation-cost-roi-memo.md')
    await expect(page.getByRole('link', { name: /request a tailored audit/i })).toHaveAttribute('href', '/apply-for-audit')
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
