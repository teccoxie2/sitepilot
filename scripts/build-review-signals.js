#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('node:fs')
const path = require('node:path')
const { buildInventory } = require('./build-content-inventory')

const projectRoot = process.cwd()
const appDirectory = path.join(projectRoot, 'src', 'app')
const outputPath = path.join(projectRoot, 'CONTENT_REVIEW_SIGNALS.json')
const baseUrl = 'https://sitepilot.co'
const reviewEntries = buildInventory().filter((entry) => entry.status === 'Review')
const allowedSignals = new Set(['tool', 'decision_path', 'evidence', 'content_only'])

// These links are the local destinations that make a review page part of the
// site's intended discovery → evaluation → audit path. They are signals only;
// they do not prove that a page deserves to remain indexed.
const decisionPathRoutes = new Set([
  '/ai-tools',
  '/tools/evaluation-tools-2026',
  '/methodology',
  '/apply-for-audit',
  '/ai-procurement-decision-matrix-tool-2026',
  '/ai-implementation-cost-calculator-enterprise-2026',
  '/hosting-platform-fit-scorecard-2026',
  '/best-web-hosting-2026',
  '/best-website-builders-2026',
  '/web-hosting',
  '/website-builders',
  '/proxies',
])

const evidenceMarkerPattern = /\b(?:source|sources|methodology|assumptions?|evidence|references?|last (?:updated|revision)|review date|checked on)\b/i
const officialSourcePattern = /https?:\/\/(?:www\.)?(?:nist\.gov|eur-lex\.europa\.eu|developers\.google\.com|w3\.org|owasp\.org|wordpress\.org)(?:[^\s"'`)<]*)?/gi
const externalUrlPattern = /https?:\/\/[^\s"'`)<]+/gi
const internalLinkPattern = /(?:href|url)\s*[:=]\s*["'`]([^"'`]+)["'`]/gi
const interactiveControlPattern = /<(?:input|select|textarea|button)\b/gi
const stateHookPattern = /\buse(?:State|Reducer|Memo)\s*\(/g
const eventHandlerPattern = /\bon(?:Change|Click|Submit)\s*=/g
const clientBoundaryPattern = /['"]use client['"]/g
const clientImportPattern = /(?:from|import)\s*["'`]([^"'`]+(?:Client|Tool|Calculator|Dashboard|Assessment|Scorecard)[^"'`]*)["'`]/g

function routeDirectory(pathname) {
  const segments = pathname.replace(/^\//, '').split('/').filter(Boolean)
  return path.join(appDirectory, ...segments)
}

function sourceFilesFor(pathname) {
  const directory = routeDirectory(pathname)
  if (!fs.existsSync(directory)) throw new Error(`Route directory not found: ${directory}`)

  const files = []
  function walk(current) {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const filePath = path.join(current, entry.name)
      if (entry.isDirectory()) walk(filePath)
      else if (/\.(?:tsx?|md)$/.test(entry.name)) files.push(filePath)
    }
  }

  walk(directory)
  return files.sort()
}

function unique(values) {
  return [...new Set(values)]
}

function scanEntry(entry) {
  const pathname = entry.url.replace(baseUrl, '') || '/'
  const files = sourceFilesFor(pathname)
  const source = files.map((filePath) => fs.readFileSync(filePath, 'utf8')).join('\n')
  const relativeFiles = files.map((filePath) => path.relative(projectRoot, filePath))

  const internalLinks = unique([...source.matchAll(internalLinkPattern)].map((match) => match[1]).filter((href) => href.startsWith('/'))).sort()
  const decisionLinks = internalLinks.filter((href) => decisionPathRoutes.has(href)).sort()
  const sourceLinks = unique([...source.matchAll(externalUrlPattern)].map((match) => match[0].replace(/[),.;]+$/, '')).filter((url) => !url.startsWith(baseUrl))).sort()
  const officialSourceLinks = unique([...source.matchAll(officialSourcePattern)].map((match) => match[0].replace(/[),.;]+$/, ''))).sort()
  const controls = (source.match(interactiveControlPattern) || []).length
  const stateHooks = (source.match(stateHookPattern) || []).length
  const eventHandlers = (source.match(eventHandlerPattern) || []).length
  const clientBoundaries = (source.match(clientBoundaryPattern) || []).length
  const clientImports = unique([...source.matchAll(clientImportPattern)].map((match) => match[1])).sort()
  const interactive = clientBoundaries > 0 && (controls > 0 || stateHooks > 0 || eventHandlers > 0)
  const evidenceMarkers = source.match(evidenceMarkerPattern) !== null

  let localSignal = 'content_only'
  if (interactive) localSignal = 'tool'
  else if (decisionLinks.length > 0) localSignal = 'decision_path'
  else if (officialSourceLinks.length > 0 || sourceLinks.length > 0 || evidenceMarkers) localSignal = 'evidence'

  let reviewAction = 'No local decision or evidence signal is proven; inspect for consolidation or noindex after production data is available.'
  if (localSignal === 'tool') reviewAction = 'Instrument tool_start, tool_complete, report_export, and report_share before deciding portfolio status.'
  else if (localSignal === 'decision_path') reviewAction = 'Validate search, click-through, completion, and lead behavior; local links show a decision path but do not prove demand.'
  else if (localSignal === 'evidence') reviewAction = 'Attach explicit source records to the evidence register; local source text or links alone do not prove claim quality.'

  return {
    url: entry.url,
    local_signal: localSignal,
    interactive,
    decision_path: decisionLinks.length > 0,
    evidence_markers: evidenceMarkers,
    source_files: relativeFiles,
    internal_links: internalLinks,
    decision_path_links: decisionLinks,
    source_links: sourceLinks,
    official_source_links: officialSourceLinks,
    interactive_counts: {
      controls,
      state_hooks: stateHooks,
      event_handlers: eventHandlers,
      client_boundaries: clientBoundaries,
      client_imports: clientImports.length,
    },
    review_action: reviewAction,
  }
}

function buildSignals() {
  return reviewEntries.map(scanEntry).sort((a, b) => a.url.localeCompare(b.url))
}

function verifySignals(existing, expected = buildSignals()) {
  const failures = []
  if (!Array.isArray(existing)) return ['Review signals must be a JSON array']
  if (existing.length !== reviewEntries.length) failures.push(`Expected ${reviewEntries.length} Review signals, found ${existing.length}`)

  const expectedByUrl = new Map(expected.map((entry) => [entry.url, entry]))
  const seen = new Set()
  for (const [index, entry] of existing.entries()) {
    if (!entry || typeof entry !== 'object') {
      failures.push(`Entry ${index} must be an object`)
      continue
    }
    if (typeof entry.url !== 'string' || !expectedByUrl.has(entry.url)) failures.push(`Unexpected Review signal URL: ${entry.url}`)
    if (seen.has(entry.url)) failures.push(`Duplicate Review signal URL: ${entry.url}`)
    seen.add(entry.url)
    if (!allowedSignals.has(entry.local_signal)) failures.push(`Invalid local_signal for ${entry.url}: ${entry.local_signal}`)
    for (const field of ['interactive', 'decision_path', 'evidence_markers', 'review_action']) {
      if (typeof entry[field] !== 'boolean' && field !== 'review_action') failures.push(`${entry.url} has invalid ${field}`)
      if (field === 'review_action' && typeof entry[field] !== 'string') failures.push(`${entry.url} has invalid review_action`)
    }
    if (!Array.isArray(entry.source_files) || entry.source_files.length === 0) failures.push(`${entry.url} has no source_files`)
    for (const sourceFile of entry.source_files || []) {
      if (!fs.existsSync(path.join(projectRoot, sourceFile))) failures.push(`${entry.url} references missing source file: ${sourceFile}`)
    }
    if (entry.local_signal === 'tool' && !entry.interactive) failures.push(`${entry.url} tool signal must be interactive`)
    if (entry.local_signal === 'decision_path' && !entry.decision_path) failures.push(`${entry.url} decision_path signal must have a decision link`)
    if (entry.local_signal === 'content_only' && (entry.interactive || entry.decision_path || entry.evidence_markers)) failures.push(`${entry.url} content_only signal has local markers`)
    if (!expectedByUrl.has(entry.url)) continue
    if (JSON.stringify(entry) !== JSON.stringify(expectedByUrl.get(entry.url))) failures.push(`${entry.url} signal is stale or not generated by current rules`)
  }
  for (const url of expectedByUrl.keys()) if (!seen.has(url)) failures.push(`Missing Review signal URL: ${url}`)
  return failures
}

function run() {
  const expected = buildSignals()
  if (process.argv.includes('--verify')) {
    if (!fs.existsSync(outputPath)) throw new Error(`Review signals file not found: ${outputPath}`)
    const existing = JSON.parse(fs.readFileSync(outputPath, 'utf8'))
    const failures = verifySignals(existing, expected)
    if (failures.length > 0) {
      console.error('Review signal verification failed:')
      for (const failure of failures) console.error(`- ${failure}`)
      process.exit(1)
    }
    console.log(`Review signals verified: ${existing.length} Review routes`)
    return
  }

  const failures = verifySignals(expected, expected)
  if (failures.length > 0) throw new Error(failures.join('; '))
  fs.writeFileSync(outputPath, `${JSON.stringify(expected, null, 2)}\n`)
  console.log(`Review signals generated: ${expected.length} Review routes → ${path.relative(projectRoot, outputPath)}`)
}

if (require.main === module) {
  try {
    run()
  } catch (error) {
    console.error(`Review signals failed: ${error.message}`)
    process.exit(1)
  }
}

module.exports = { buildSignals, verifySignals }
