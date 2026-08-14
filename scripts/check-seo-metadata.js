#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs')
const path = require('path')

const appDirectory = path.join(process.cwd(), 'src/app')
const buildDirectory = path.join(process.cwd(), '.next/server/app')
const requiredNormalizer = 'normalizeMetadata(metadataConfig)'
const failures = []

function walk(directory) {
  if (!fs.existsSync(directory)) return []
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name)
    if (entry.isDirectory()) return walk(filePath)
    return /\.(ts|tsx)$/.test(entry.name) ? [filePath] : []
  })
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function getMetaContent(source, attribute, value) {
  const tag = source.match(new RegExp(`<meta[^>]+${attribute}=["']${value}["'][^>]*>`, 'i'))?.[0]
  return decodeHtml(tag?.match(/content=["']([^"']*)["']/i)?.[1] || '')
}

for (const filePath of walk(appDirectory)) {
  const source = fs.readFileSync(filePath, 'utf8')
  if (!source.includes('export const metadata: Metadata')) continue

  if (source.includes('= pageMetadata') || source.includes("export { metadata } from './metadata'")) continue

  if (!source.includes(requiredNormalizer)) {
    failures.push(`${path.relative(process.cwd(), filePath)} must export normalized metadata`)
  }
}

const imageRoute = path.join(appDirectory, 'opengraph-image.tsx')
if (!fs.existsSync(imageRoute)) failures.push('src/app/opengraph-image.tsx is missing')

const builtHtml = walk(buildDirectory).filter((filePath) => filePath.endsWith('.html'))
for (const filePath of builtHtml) {
  const source = fs.readFileSync(filePath, 'utf8')
  const title = decodeHtml(source.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '').replace(/\s+/g, ' ').trim()
  const description = getMetaContent(source, 'name', 'description')
  const ogImage = getMetaContent(source, 'property', 'og:image')
  const h1Count = (source.match(/<h1\b/gi) || []).length
  const route = path.relative(buildDirectory, filePath)
  if (title.length > 60) failures.push(`${route} title exceeds 60 characters (${title.length})`)
  if (description.length > 155) failures.push(`${route} description exceeds 155 characters (${description.length})`)
  if (!ogImage) failures.push(`${route} is missing og:image`)
  if (h1Count !== 1) failures.push(`${route} must have exactly one h1 (found ${h1Count})`)
}

if (failures.length > 0) {
  console.error('SEO metadata check failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log(`SEO metadata check passed: ${walk(appDirectory).length} app files scanned`)
