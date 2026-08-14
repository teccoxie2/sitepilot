#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('node:fs')
const path = require('node:path')

const projectRoot = process.cwd()
const appDirectory = path.join(projectRoot, 'src', 'app')
const outputPath = path.join(projectRoot, 'CONTENT_PORTFOLIO_INVENTORY.json')
const baseUrl = 'https://sitepilot.co'
const expectedRouteCount = 142
const owner = 'SitePilot editorial'
const reviewDate = '2026-09-14'
const requiredFields = ['url', 'category', 'status', 'target', 'reason', 'evidence_source', 'owner', 'review_date']
const allowedStatuses = new Set(['Keep', 'Merge', 'Noindex', 'Remove', 'Review'])

const mergeTargets = new Map([
  ['/hosting/best-web-hosting', '/best-web-hosting-2026'],
  ['/hosting/cheap-hosting', '/cheap-hosting'],
])

const noindexReasons = new Map([
  ['/privacy', 'Thin legal page retained for users but not intended as a search landing page.'],
  ['/terms', 'Thin legal page retained for users but not intended as a search landing page.'],
  ['/proxies/recommendation', 'Interactive recommendation utility should remain accessible from the proxy hub without competing as a standalone search page.'],
])

const keepExact = new Set([
  '/',
  '/ai-tools',
  '/tools/evaluation-tools-2026',
  '/methodology',
  '/apply-for-audit',
  '/contact',
  '/hosting',
  '/web-hosting',
  '/website-builders',
  '/proxies',
  '/ip-leak-test',
  '/ip-reputation-checker',
  '/hosting-platform-fit-scorecard-2026',
  '/website-builder-vs-wordpress-2026',
  '/ai-roi-calculator',
  '/ai-procurement-decision-matrix-tool-2026',
  '/ai-vendor-comparison-enterprise-2026',
  '/ai-investment-roi-calculator-enterprise-2026',
  '/ai-total-cost-ownership-calculator-enterprise-2026',
  '/ai-training-roi-calculator-2026',
])

const keepPrefixes = [
  '/ai-tools',
  '/ai-vendor-',
  '/ai-procurement-',
  '/ai-implementation-',
  '/ai-investment-',
  '/ai-total-cost-',
  '/ai-training-',
  '/ai-talent-',
  '/ai-project-risk-',
  '/ai-budget-',
  '/ai-automation-',
  '/ai-workflow-',
  '/enterprise-ai-',
  '/best-ai-',
  '/hosting',
  '/web-hosting',
  '/website-builders',
  '/website-builder-',
  '/best-web-hosting-',
  '/best-ecommerce-',
  '/best-wordpress-',
  '/cheap-hosting',
  '/free-website-builders',
  '/cloud-hosting-',
  '/domain-',
  '/best-domain-',
  '/how-to-buy-',
  '/namecheap-',
  '/trademark-',
  '/proxies/',
  '/readdy-ai-review',
]

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name)
    if (entry.isDirectory()) return walk(filePath)
    return entry.name === 'page.tsx' ? [filePath] : []
  })
}

function routeFromPageFile(filePath) {
  const relativeDirectory = path.relative(appDirectory, path.dirname(filePath))
  const segments = relativeDirectory === ''
    ? []
    : relativeDirectory.split(path.sep).filter((segment) => !segment.startsWith('(') && !segment.startsWith('_'))

  if (segments.some((segment) => segment.includes('[') || segment.includes(']'))) {
    throw new Error(`Dynamic route segments are not supported by the deterministic inventory: ${filePath}`)
  }

  return segments.length === 0 ? '/' : `/${segments.join('/')}`
}

function categoryFor(pathname) {
  if (pathname === '/' || ['/contact', '/methodology', '/apply-for-audit', '/privacy', '/terms'].includes(pathname)) return 'site-trust'
  if (pathname.startsWith('/proxies')) return 'proxy-infrastructure'
  if (pathname.startsWith('/ai-') || pathname.startsWith('/enterprise-ai-') || pathname.startsWith('/tools/')) return 'ai-procurement'
  if (
    pathname.startsWith('/hosting') ||
    pathname.startsWith('/web-hosting') ||
    pathname.startsWith('/website-builder') ||
    pathname.startsWith('/best-website-builders') ||
    pathname.startsWith('/best-ecommerce-website-builders') ||
    pathname.startsWith('/best-wordpress-themes') ||
    pathname.startsWith('/best-web-hosting') ||
    pathname.startsWith('/cheap-hosting') ||
    pathname.startsWith('/free-website-builders') ||
    pathname.startsWith('/cloud-hosting') ||
    pathname.startsWith('/domain') ||
    pathname.startsWith('/best-domain') ||
    pathname.startsWith('/how-to-buy') ||
    pathname.startsWith('/namecheap') ||
    pathname.startsWith('/trademark') ||
    pathname === '/readdy-ai-review'
  ) return 'web-infrastructure'
  if (pathname.startsWith('/best-ai-')) return 'ai-procurement'
  return 'review'
}

function classify(pathname) {
  if (mergeTargets.has(pathname)) {
    const target = mergeTargets.get(pathname)
    return {
      status: 'Merge',
      target: `${baseUrl}${target}`,
      reason: `Likely duplicate legacy path; consolidate into ${target} after content and link review.`,
      rule: 'merge-known-legacy-hosting-path',
    }
  }

  if (noindexReasons.has(pathname)) {
    return {
      status: 'Noindex',
      target: null,
      reason: noindexReasons.get(pathname),
      rule: 'noindex-low-search-utility',
    }
  }

  if (keepExact.has(pathname) || keepPrefixes.some((prefix) => pathname.startsWith(prefix))) {
    return {
      status: 'Keep',
      target: `${baseUrl}${pathname}`,
      reason: 'Core hub, evidence page, or operational tool in an active SitePilot decision path.',
      rule: 'keep-core-decision-path',
    }
  }

  return {
    status: 'Review',
    target: `${baseUrl}${pathname}`,
    reason: 'Provisional classification pending evidence, search-intent, and decision-path review.',
    rule: 'review-provisional-unclassified',
  }
}

function buildInventory() {
  const routes = walk(appDirectory)
    .map((filePath) => ({ filePath, pathname: routeFromPageFile(filePath) }))
    .sort((a, b) => (a.pathname === '/' ? -1 : b.pathname === '/' ? 1 : a.pathname.localeCompare(b.pathname)))

  const seen = new Set()
  return routes.map(({ filePath, pathname }) => {
    if (seen.has(pathname)) throw new Error(`Duplicate route generated for inventory: ${pathname}`)
    seen.add(pathname)

    const classification = classify(pathname)
    return {
      url: `${baseUrl}${pathname}`,
      category: categoryFor(pathname),
      status: classification.status,
      target: classification.target,
      reason: classification.reason,
      evidence_source: `${path.relative(projectRoot, filePath)} :: ${classification.rule}`,
      owner,
      review_date: reviewDate,
    }
  })
}

function verifyInventory(inventory, expectedRoutes = buildInventory()) {
  const failures = []
  if (!Array.isArray(inventory)) failures.push('Inventory must be a JSON array')
  if (!Array.isArray(inventory)) return failures
  if (inventory.length !== expectedRouteCount) failures.push(`Expected ${expectedRouteCount} routes, found ${inventory.length}`)

  const expectedByUrl = new Map(expectedRoutes.map((entry) => [entry.url, entry]))
  const seen = new Set()
  for (const [index, entry] of inventory.entries()) {
    for (const field of requiredFields) {
      if (!Object.prototype.hasOwnProperty.call(entry, field)) failures.push(`Entry ${index} is missing ${field}`)
    }
    if (typeof entry.url !== 'string' || !entry.url.startsWith(`${baseUrl}/`) && entry.url !== baseUrl) failures.push(`Entry ${index} has invalid absolute URL`)
    if (seen.has(entry.url)) failures.push(`Duplicate inventory URL: ${entry.url}`)
    seen.add(entry.url)
    if (!allowedStatuses.has(entry.status)) failures.push(`Entry ${index} has invalid status: ${entry.status}`)
    if (entry.status === 'Review' && !/^provisional\b/i.test(String(entry.reason || '').trim())) failures.push(`Review entry ${entry.url} must be explicitly provisional`)
    if ((entry.status === 'Keep' || entry.status === 'Review') && entry.target !== entry.url) failures.push(`${entry.status} entry ${entry.url} must target itself`)
    if ((entry.status === 'Noindex' || entry.status === 'Remove') && entry.target !== null) failures.push(`${entry.status} entry ${entry.url} must have a null target`)
    if (entry.status === 'Merge' && (!entry.target || entry.target === entry.url)) failures.push(`Merge entry ${entry.url} must target a different URL`)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.review_date || '')) failures.push(`Entry ${entry.url} has invalid review_date`)
    if (!expectedByUrl.has(entry.url)) failures.push(`Unexpected inventory URL: ${entry.url}`)
  }
  for (const expectedUrl of expectedByUrl.keys()) if (!seen.has(expectedUrl)) failures.push(`Missing inventory URL: ${expectedUrl}`)
  return failures
}

function failIfInvalid(inventory, expectedRoutes = buildInventory()) {
  const failures = verifyInventory(inventory, expectedRoutes)
  if (failures.length > 0) {
    console.error('Content portfolio inventory verification failed:')
    for (const failure of failures) console.error(`- ${failure}`)
    process.exit(1)
  }
}

function run() {
  const expectedRoutes = buildInventory()
  if (process.argv.includes('--verify')) {
    if (!fs.existsSync(outputPath)) throw new Error(`Inventory file not found: ${outputPath}`)
    const existing = JSON.parse(fs.readFileSync(outputPath, 'utf8'))
    failIfInvalid(existing, expectedRoutes)
    if (JSON.stringify(existing) !== JSON.stringify(expectedRoutes)) throw new Error('Inventory file is valid but stale or not generated by the current deterministic rules')
    console.log(`Content portfolio inventory verified: ${existing.length} routes`)
    return
  }

  failIfInvalid(expectedRoutes, expectedRoutes)
  fs.writeFileSync(outputPath, `${JSON.stringify(expectedRoutes, null, 2)}\n`)
  console.log(`Content portfolio inventory generated: ${expectedRoutes.length} routes → ${path.relative(projectRoot, outputPath)}`)
}

if (require.main === module) {
  try {
    run()
  } catch (error) {
    console.error(`Content portfolio inventory failed: ${error.message}`)
    process.exit(1)
  }
}

module.exports = { buildInventory, verifyInventory, routeFromPageFile }
