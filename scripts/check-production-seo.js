#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const baseUrl = 'https://sitepilot.co'
const sitemapUrl = `${baseUrl}/sitemap.xml`
const noindexRoutes = ['/privacy', '/terms', '/proxies/recommendation']
const retiredRoutes = ['/hosting/best-web-hosting', '/hosting/cheap-hosting']

function canonicalFrom(html) {
  return (html.match(/<link rel="canonical" href="([^"]+)"/i) || [])[1] || null
}

function hasNoindex(html) {
  return /<meta name="robots" content="noindex/i.test(html)
}

async function fetchPage(url) {
  const response = await fetch(url, { redirect: 'manual' })
  return { response, html: await response.text() }
}

async function main() {
  const sitemapResponse = await fetch(sitemapUrl, { redirect: 'manual' })
  if (sitemapResponse.status !== 200) throw new Error(`Sitemap returned ${sitemapResponse.status}`)
  const sitemap = await sitemapResponse.text()
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
  const failures = []
  const queue = [...urls]
  let checked = 0

  async function worker() {
    while (queue.length > 0) {
      const url = queue.shift()
      const { response, html } = await fetchPage(url)
      checked += 1
      if (response.status !== 200) failures.push(`${url} returned ${response.status}`)
      if (canonicalFrom(html) !== url) failures.push(`${url} does not have a self-referencing canonical`)
      if (hasNoindex(html)) failures.push(`${url} is in sitemap but returns noindex`)
    }
  }

  await Promise.all(Array.from({ length: 8 }, () => worker()))

  for (const route of noindexRoutes) {
    const url = `${baseUrl}${route}`
    if (sitemap.includes(`<loc>${url}</loc>`)) failures.push(`${route} should be absent from sitemap`)
    const { response, html } = await fetchPage(url)
    if (response.status !== 200) failures.push(`${route} should remain accessible, got ${response.status}`)
    if (!hasNoindex(html)) failures.push(`${route} should return noindex`)
  }

  for (const route of retiredRoutes) {
    const url = `${baseUrl}${route}`
    if (sitemap.includes(`<loc>${url}</loc>`)) failures.push(`${route} should be absent from sitemap`)
    const { response } = await fetchPage(url)
    if (response.status !== 404) failures.push(`${route} should be retired with 404, got ${response.status}`)
  }

  if (failures.length > 0) {
    console.error('Production SEO check failed:')
    for (const failure of failures) console.error(`- ${failure}`)
    process.exit(1)
  }

  console.log(`Production SEO check passed: ${checked} indexable URLs, ${noindexRoutes.length} noindex routes, ${retiredRoutes.length} retired routes`)
}

main().catch((error) => {
  console.error(`Production SEO check failed: ${error.message}`)
  process.exit(1)
})
