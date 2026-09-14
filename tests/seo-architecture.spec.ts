import { expect, test } from '@playwright/test'
import architecture from '../src/data/site-architecture.json'

test('topic directories and breadcrumbs are available without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL })
  const page = await context.newPage()
  for (const route of ['/domains', '/ai-tools', '/ai-tools/procurement', '/hosting', '/proxies']) {
    const response = await page.goto(route)
    expect(response?.status()).toBe(200)
    await expect(page.locator('h1')).toHaveCount(1)
    await expect(page.getByRole('navigation', { name: 'Breadcrumb' })).toBeVisible()
    for (const child of architecture.pages.filter((item) => item.parent === route && item.indexable)) {
      await expect(page.locator(`[data-topic-directory="${route}"] a[href="${child.path}"]`)).toBeVisible()
    }
  }
  await context.close()
})

test('dynamic IP tools deliver canonical metadata and breadcrumbs in HTTP HTML', async ({ request }) => {
  for (const route of ['/ip-leak-test', '/ip-reputation-checker']) {
    const response = await request.get(route)
    expect(response.status()).toBe(200)
    const html = await response.text()
    expect(html).toContain(`rel="canonical" href="https://sitepilot.co${route}"`)
    expect(html).toContain('aria-label="Breadcrumb"')
    expect(html).toContain('"@type":"BreadcrumbList"')
    expect(html).toContain('href="/proxies"')
    expect(html.match(/<h1\b/g)).toHaveLength(1)
    expect(html).not.toMatch(/<meta name="robots" content="noindex/)
  }
})

test('legacy hosting URLs redirect directly to their canonical replacement', async ({ request }) => {
  for (const [source, target] of [
    ['/hosting/best-web-hosting', '/best-web-hosting-2026'],
    ['/hosting/cheap-hosting', '/cheap-hosting'],
  ]) {
    const response = await request.get(source, { maxRedirects: 0 })
    expect([301, 308]).toContain(response.status())
    expect(new URL(response.headers().location, 'http://localhost:3000').pathname).toBe(target)
    expect((await request.get(target, { maxRedirects: 0 })).status()).toBe(200)
  }
})

test('shared tool scenarios retain their clean canonical URL', async ({ page }) => {
  await page.goto('/hosting-platform-fit-scorecard-2026?siteType=application&traffic=100k-500k')
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://sitepilot.co/hosting-platform-fit-scorecard-2026')
  await expect(page.getByRole('navigation', { name: 'Breadcrumb' }).getByRole('link', { name: 'Web hosting' })).toBeVisible()
  await page.getByRole('navigation', { name: 'Breadcrumb' }).getByRole('link', { name: 'Web hosting' }).click()
  await expect(page.getByRole('navigation', { name: 'Breadcrumb' }).locator('[aria-current="page"]')).toHaveText('Web hosting')
})

test('new navigation fits mobile and narrow desktop layouts', async ({ page }) => {
  for (const width of [375, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/domains')
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
    if (width === 375) {
      await page.getByRole('button', { name: 'Open navigation', exact: true }).click()
      await expect(page.locator('#mobile-navigation').getByRole('link', { name: 'Domains', exact: true })).toBeVisible()
      await page.keyboard.press('Escape')
      await expect(page.locator('#mobile-navigation')).toBeHidden()
    }
  }
})
