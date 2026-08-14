#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('node:fs')
const path = require('node:path')

const projectRoot = process.cwd()
const ledgerPath = path.join(projectRoot, 'CONTENT_CLAIM_LEDGER.md')
const ledgerJsonPath = path.join(projectRoot, 'src', 'data', 'evidence', 'sitepilot-claim-ledger-v1.json')
const appDirectory = path.join(projectRoot, 'src', 'app')
const allowedStatuses = new Set(['verified', 'estimate', 'example', 'remove', 'review'])
const qualifierPattern = /(illustrative|scenario|assumption|estimate|example|planning)/i

if (!fs.existsSync(ledgerPath)) throw new Error('CONTENT_CLAIM_LEDGER.md is missing')

const rows = fs.readFileSync(ledgerPath, 'utf8')
  .split('\n')
  .filter((line) => /^\|\s*CL-\d+\s*\|/.test(line))

const failures = []
const claimIds = new Set()
for (const row of rows) {
  const columns = row.split('|').slice(1, -1).map((column) => column.trim())
  const [claimId, route, , statusColumn] = columns
  if (!claimId || claimIds.has(claimId)) failures.push(`Missing or duplicate claim id: ${claimId || '(empty)'}`)
  claimIds.add(claimId)

  const statusMatch = statusColumn?.match(/`(verified|estimate|example|remove|review)`/i)
  const status = statusMatch?.[1]?.toLowerCase()
  if (!allowedStatuses.has(status)) failures.push(`${claimId} has no allowed status in ledger`) 

  if (route?.startsWith('`/') && !route.includes('*')) {
    const routePath = route.replaceAll('`', '')
    const sourcePath = path.join(appDirectory, routePath.slice(1), 'page.tsx')
    if (!fs.existsSync(sourcePath)) {
      failures.push(`${claimId} points to a missing route: ${routePath}`)
    } else if (['estimate', 'example', 'review'].includes(status)) {
      const source = fs.readFileSync(sourcePath, 'utf8')
      if (!qualifierPattern.test(source)) failures.push(`${claimId} status ${status} lacks an explicit assumption/scenario qualifier: ${routePath}`)
    }
  }
}

if (rows.length < 10) failures.push(`Expected at least 10 ledger entries, found ${rows.length}`)

if (!fs.existsSync(ledgerJsonPath)) {
  failures.push('Versioned JSON claim ledger is missing')
} else {
  const ledger = JSON.parse(fs.readFileSync(ledgerJsonPath, 'utf8'))
  if (ledger.ledger_id !== 'sitepilot-content-claims-v1' || ledger.version !== 1) failures.push('Versioned JSON claim ledger has an invalid id or version')
  if (!Array.isArray(ledger.entries) || ledger.entries.length !== rows.length) failures.push('Markdown and JSON claim ledger entry counts differ')
  const jsonIds = new Set()
  for (const entry of ledger.entries || []) {
    for (const field of ['claim_id', 'claim', 'claim_type', 'source_location', 'conditions', 'owner', 'review_date', 'status']) {
      if (!entry[field]) failures.push(`${entry.claim_id || '(unknown)'} is missing ${field}`)
    }
    if (jsonIds.has(entry.claim_id)) failures.push(`Duplicate JSON claim id: ${entry.claim_id}`)
    jsonIds.add(entry.claim_id)
    if (!allowedStatuses.has(entry.status)) failures.push(`${entry.claim_id} has invalid JSON status: ${entry.status}`)
    if (entry.status === 'verified' && (!entry.source_url || !entry.sample_definition || !entry.collected_at || !entry.formula)) {
      failures.push(`${entry.claim_id} cannot be verified without source, sample, date, and formula`)
    }
  }
  for (const claimId of claimIds) if (!jsonIds.has(claimId)) failures.push(`${claimId} is missing from JSON claim ledger`)
}

if (failures.length > 0) {
  console.error('Claim ledger check failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log(`Claim ledger check passed: ${rows.length} Markdown entries and versioned JSON records with page qualifiers`)
