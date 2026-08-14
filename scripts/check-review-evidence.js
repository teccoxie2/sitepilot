#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('node:fs')
const path = require('node:path')
const { buildInventory } = require('./build-content-inventory')

const projectRoot = process.cwd()
const evidencePath = path.join(projectRoot, 'CONTENT_REVIEW_EVIDENCE.json')
const reviewEntries = buildInventory().filter((entry) => entry.status === 'Review')
const reviewUrls = new Set(reviewEntries.map((entry) => entry.url))
const expectedReviewCount = 41
const allowedDataStatuses = new Set(['missing', 'available', 'not_applicable'])
const allowedDecisionStatuses = new Set(['pending', 'decided'])
const allowedDecisions = new Set(['Keep', 'Merge', 'Noindex', 'Remove'])
const metricFields = {
  search_console: ['clicks', 'impressions', 'ctr', 'average_position'],
  tool_behavior: ['tool_start', 'tool_complete', 'report_export', 'report_share'],
  apply_affiliate: ['apply_submit', 'qualified_lead', 'affiliate_click', 'affiliate_conversion', 'affiliate_revenue'],
}

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

function checkDataGroup(entry, groupName, failures) {
  const group = entry[groupName]
  if (!isPlainObject(group)) {
    failures.push(`${entry.url} is missing ${groupName} object`)
    return
  }

  if (!allowedDataStatuses.has(group.status)) {
    failures.push(`${entry.url} has invalid ${groupName}.status: ${group.status}`)
    return
  }
  if (group.source !== null && typeof group.source !== 'string') failures.push(`${entry.url} has invalid ${groupName}.source`)
  if (group.period_start !== null && typeof group.period_start !== 'string') failures.push(`${entry.url} has invalid ${groupName}.period_start`)
  if (group.period_end !== null && typeof group.period_end !== 'string') failures.push(`${entry.url} has invalid ${groupName}.period_end`)

  for (const field of metricFields[groupName]) {
    if (!Object.prototype.hasOwnProperty.call(group, field)) failures.push(`${entry.url} is missing ${groupName}.${field}`)
    const value = group[field]
    if (value !== null && (typeof value !== 'number' || !Number.isFinite(value) || value < 0)) {
      failures.push(`${entry.url} has invalid ${groupName}.${field}`)
    }
  }

  if (group.status === 'missing' || group.status === 'not_applicable') {
    if (group.source !== null) failures.push(`${entry.url} ${groupName} ${group.status} data must have source: null`)
    for (const field of metricFields[groupName]) {
      if (group[field] !== null) failures.push(`${entry.url} ${groupName} ${group.status} data must keep ${field}: null`)
    }
  }

  if (group.status === 'available') {
    if (!group.source || typeof group.source !== 'string') failures.push(`${entry.url} available ${groupName} data needs a source`)
    if (!group.period_start || !group.period_end) failures.push(`${entry.url} available ${groupName} data needs period_start and period_end`)
  }
}

function verifyEvidence(evidence) {
  const failures = []
  if (reviewEntries.length !== expectedReviewCount) failures.push(`Expected ${expectedReviewCount} Review routes in the inventory, found ${reviewEntries.length}`)
  if (!isPlainObject(evidence)) return ['Review evidence must be a JSON object']
  if (evidence.schema_id !== 'sitepilot-review-evidence-v1') failures.push('Invalid review evidence schema_id')
  if (evidence.version !== 1) failures.push('Review evidence version must be 1')
  if (!Array.isArray(evidence.entries)) return ['Review evidence entries must be a JSON array']
  if (evidence.entries.length !== expectedReviewCount) failures.push(`Expected ${expectedReviewCount} Review evidence entries, found ${evidence.entries.length}`)

  const seen = new Set()
  for (const [index, entry] of evidence.entries.entries()) {
    if (!isPlainObject(entry)) {
      failures.push(`Entry ${index} must be an object`)
      continue
    }
    if (typeof entry.url !== 'string' || !reviewUrls.has(entry.url)) failures.push(`Unexpected Review evidence URL: ${entry.url}`)
    if (seen.has(entry.url)) failures.push(`Duplicate Review evidence URL: ${entry.url}`)
    seen.add(entry.url)

    for (const field of ['search_console', 'tool_behavior', 'apply_affiliate', 'decision_status', 'decision', 'decision_rationale', 'decided_at', 'missing_data_note']) {
      if (!Object.prototype.hasOwnProperty.call(entry, field)) failures.push(`${entry.url || `Entry ${index}`} is missing ${field}`)
    }

    for (const groupName of Object.keys(metricFields)) checkDataGroup(entry, groupName, failures)

    if (!allowedDecisionStatuses.has(entry.decision_status)) failures.push(`${entry.url} has invalid decision_status: ${entry.decision_status}`)
    if (entry.decision !== null && !allowedDecisions.has(entry.decision)) failures.push(`${entry.url} has invalid decision: ${entry.decision}`)
    if (entry.decision_status === 'pending') {
      if (entry.decision !== null) failures.push(`${entry.url} pending decision must be null`)
      if (entry.decided_at !== null) failures.push(`${entry.url} pending decision must have decided_at: null`)
    }
    if (entry.decision_status === 'decided') {
      if (!allowedDecisions.has(entry.decision)) failures.push(`${entry.url} decided entry needs Keep, Merge, Noindex, or Remove`)
      if (!entry.decided_at || typeof entry.decided_at !== 'string') failures.push(`${entry.url} decided entry needs decided_at`)
      if (!entry.decision_rationale || typeof entry.decision_rationale !== 'string') failures.push(`${entry.url} decided entry needs decision_rationale`)
    }

    if (typeof entry.decision_rationale !== 'string' && entry.decision_rationale !== null) failures.push(`${entry.url} has invalid decision_rationale`)
    if (typeof entry.decided_at !== 'string' && entry.decided_at !== null) failures.push(`${entry.url} has invalid decided_at`)
    if (typeof entry.missing_data_note !== 'string' || entry.missing_data_note.trim() === '') failures.push(`${entry.url} needs a non-empty missing_data_note`)

    const hasMissingGroup = Object.keys(metricFields).some((groupName) => entry[groupName]?.status === 'missing')
    if (hasMissingGroup && !/missing|pending|await|not collected|not available/i.test(entry.missing_data_note || '')) {
      failures.push(`${entry.url} missing_data_note must transparently describe pending or missing data`)
    }
  }
  for (const url of reviewUrls) if (!seen.has(url)) failures.push(`Missing Review evidence URL: ${url}`)
  return failures
}

function run() {
  if (!fs.existsSync(evidencePath)) throw new Error(`Review evidence file not found: ${evidencePath}`)
  let evidence
  try {
    evidence = JSON.parse(fs.readFileSync(evidencePath, 'utf8'))
  } catch (error) {
    throw new Error(`Review evidence JSON is invalid: ${error.message}`)
  }

  const failures = verifyEvidence(evidence)
  if (failures.length > 0) {
    console.error('Review evidence check failed:')
    for (const failure of failures) console.error(`- ${failure}`)
    process.exit(1)
  }
  console.log(`Review evidence check passed: ${evidence.entries.length} Review routes; missing data is explicitly marked`)
}

if (require.main === module) {
  try {
    run()
  } catch (error) {
    console.error(`Review evidence check failed: ${error.message}`)
    process.exit(1)
  }
}

module.exports = { verifyEvidence }
