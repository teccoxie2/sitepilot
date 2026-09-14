#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('node:fs')
const path = require('node:path')
const { pages } = require('../src/data/site-architecture.json')
const base = 'https://sitepilot.co'
const failures = []
const routes = new Map(pages.map((page) => [page.path, page]))
const buildDir = path.join(process.cwd(), '.next/server/app')
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
  entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)])
const sourceRoutes = walk('src/app').filter((file) => file.endsWith('/page.tsx')).map((file) =>
  '/' + path.relative('src/app', path.dirname(file)))
const decode = (value) => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'")
// These existing request-dependent tools are verified over HTTP by the SEO browser tests.
const dynamicTools = new Set(['/ip-leak-test', '/ip-reputation-checker'])
const links = new Map()
const titles = new Map()
if (routes.size !== pages.length) failures.push('Duplicate paths in architecture registry')
for (const route of sourceRoutes) if (!routes.has(route)) failures.push(`Unclassified page: ${route}`)
for (const page of pages) {
  if (!sourceRoutes.includes(page.path)) failures.push(`Registry route has no page: ${page.path}`)
  const seen = new Set([page.path])
  let ancestor = page.parent
  while (ancestor !== null) {
    if (!routes.has(ancestor)) { failures.push(`Missing parent ${ancestor} for ${page.path}`); break }
    if (seen.has(ancestor)) { failures.push(`Parent cycle for ${page.path}`); break }
    seen.add(ancestor)
    ancestor = routes.get(ancestor).parent
  }
  const filename = path.join(buildDir, page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`)
  if (!fs.existsSync(filename)) {
    if (!dynamicTools.has(page.path)) failures.push(`Missing built HTML: ${page.path}`)
    continue
  }
  const html = fs.readFileSync(filename, 'utf8')
  const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/)?.[1]
  if (canonical !== (page.path === '/' ? base : base + page.path)) failures.push(`Incorrect canonical: ${page.path}`)
  const noindex = /<meta[^>]+name="robots"[^>]+content="[^"]*noindex/.test(html)
  if (noindex === page.indexable) failures.push(`Indexability mismatch: ${page.path}`)
  const title = html.match(/<title>(.*?)<\/title>/)?.[1]
  if (page.indexable && titles.has(title)) failures.push(`Duplicate title: ${page.path} and ${titles.get(title)}`)
  if (page.indexable) titles.set(title, page.path)
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap((match) => {
    try { return [JSON.parse(match[1])] } catch { failures.push(`Invalid JSON-LD: ${page.path}`); return [] }
  })
  const crumbs = schemas.filter((schema) => schema['@type'] === 'BreadcrumbList')
  if (page.path !== '/') {
    if (crumbs.length !== 1) failures.push(`Expected one breadcrumb schema: ${page.path}`)
    else {
      const items = crumbs[0].itemListElement
      if (items.at(-1)?.item !== base + page.path || items.at(-2)?.item !== (page.parent === '/' ? base : base + page.parent)) failures.push(`Wrong breadcrumb path: ${page.path}`)
    }
    if (!html.includes('aria-label="Breadcrumb"')) failures.push(`Breadcrumb not server rendered: ${page.path}`)
  }
  const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
  const targets = new Set()
  for (const match of markup.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const href = decode(match[1])
    if (!href.startsWith('/') && !href.startsWith(base)) continue
    const url = new URL(href, base)
    if (url.origin !== base) continue
    if (routes.has(url.pathname)) targets.add(url.pathname)
    else if (!url.pathname.startsWith('/api/') && !fs.existsSync(path.join('public', url.pathname))) failures.push(`Broken internal link: ${page.path} → ${url.pathname}`)
  }
  links.set(page.path, targets)
  for (const child of pages.filter((item) => item.parent === page.path && item.indexable)) {
    if (!targets.has(child.path)) failures.push(`Missing category link: ${page.path} → ${child.path}`)
  }
}
const depths = new Map([['/', 0]])
const queue = ['/']
while (queue.length) {
  const route = queue.shift()
  for (const target of links.get(route) || []) if (!depths.has(target)) {
    depths.set(target, depths.get(route) + 1)
    queue.push(target)
  }
}
for (const page of pages.filter((item) => item.indexable)) {
  if (!depths.has(page.path)) failures.push(`Orphan page: ${page.path}`)
  else if (depths.get(page.path) > 3) failures.push(`More than three clicks from home: ${page.path}`)
}
const sitemapFile = path.join(buildDir, 'sitemap.xml.body')
if (!fs.existsSync(sitemapFile)) failures.push('Missing built sitemap')
else {
  const sitemap = fs.readFileSync(sitemapFile, 'utf8')
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
  const expected = pages.filter((page) => page.indexable).map((page) => page.path === '/' ? base : base + page.path)
  if (urls.length !== expected.length || new Set(urls).size !== urls.length || expected.some((url) => !urls.includes(url))) failures.push('Sitemap does not match indexable canonical pages')
}
if (failures.length) {
  console.error([...new Set(failures)].join('\n'))
  process.exit(1)
}
console.log(`Architecture verified: ${pages.length} registered pages (${dynamicTools.size} dynamic tools checked in browser tests); ${pages.filter((page) => page.indexable).length} indexable; all reachable within three clicks, with valid canonicals, breadcrumbs, sitemap, and internal links.`)
