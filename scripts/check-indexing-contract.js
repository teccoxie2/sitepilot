#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('node:fs')
const path = require('node:path')

const projectRoot = process.cwd()
const appDirectory = path.join(projectRoot, 'src', 'app')
const inventoryPath = path.join(projectRoot, 'CONTENT_PORTFOLIO_INVENTORY.json')
const noindexFiles = [
  'src/app/privacy/page.tsx',
  'src/app/terms/page.tsx',
  'src/app/proxies/recommendation/metadata.ts',
]
const noindexRoutes = ['/privacy', '/terms', '/proxies/recommendation']
const retiredRoutes = ['/hosting/best-web-hosting', '/hosting/cheap-hosting']

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name)
    if (entry.isDirectory()) return walk(filePath)
    return entry.name.endsWith('.tsx') || entry.name.endsWith('.ts') ? [filePath] : []
  })
}

const failures = []

for (const relativeFile of noindexFiles) {
  const filePath = path.join(projectRoot, relativeFile)
  if (!fs.existsSync(filePath)) {
    failures.push(`Missing noindex metadata file: ${relativeFile}`)
    continue
  }
  const source = fs.readFileSync(filePath, 'utf8')
  if (!/robots:\s*\{\s*index:\s*false,\s*follow:\s*true\s*\}/m.test(source)) {
    failures.push(`${relativeFile} must declare robots index=false, follow=true`)
  }
}

const sitemapSource = fs.readFileSync(path.join(appDirectory, 'sitemap.xml', 'route.ts'), 'utf8')
for (const route of noindexRoutes) {
  if (!sitemapSource.includes(`'${route}'`)) failures.push(`Sitemap exclusion missing for ${route}`)
}

for (const route of retiredRoutes) {
  const routePath = path.join(appDirectory, route.slice(1), 'page.tsx')
  if (fs.existsSync(routePath)) failures.push(`Retired route still exists: ${route}`)
}

for (const filePath of walk(appDirectory)) {
  const source = fs.readFileSync(filePath, 'utf8')
  for (const route of retiredRoutes) {
    if (source.includes(route)) failures.push(`Stale internal route reference ${route} in ${path.relative(projectRoot, filePath)}`)
  }
}

const inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'))
const noindexCount = inventory.filter((entry) => entry.status === 'Noindex').length
const mergeCount = inventory.filter((entry) => entry.status === 'Merge').length
if (noindexCount !== noindexRoutes.length) failures.push(`Expected ${noindexRoutes.length} Noindex inventory entries, found ${noindexCount}`)
if (mergeCount !== retiredRoutes.length) failures.push(`Expected ${retiredRoutes.length} Merge inventory entries, found ${mergeCount}`)

if (failures.length > 0) {
  console.error('Indexing contract failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log(`Indexing contract passed: ${noindexCount} noindex routes, ${mergeCount} retired merge routes, no stale links`)
