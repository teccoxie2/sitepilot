/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('node:fs')
const path = require('node:path')

const registerPath = path.join(process.cwd(), 'src/data/evidence/sitepilot-evidence-v1.json')
const requiredFields = [
  'evidence_id',
  'topic',
  'claim',
  'source_url',
  'source_date',
  'check_date',
  'claim_type',
  'conditions',
  'owner',
  'review_date',
  'status',
]
const validStatuses = new Set(['verified', 'unverified', 'needs_review'])
const isoDate = /^\d{4}-\d{2}-\d{2}$/

function fail(message) {
  console.error(`Evidence register check failed: ${message}`)
  process.exitCode = 1
}

if (!fs.existsSync(registerPath)) {
  fail(`missing ${registerPath}`)
  process.exit()
}

let register
try {
  register = JSON.parse(fs.readFileSync(registerPath, 'utf8'))
} catch (error) {
  fail(`invalid JSON (${error.message})`)
  process.exit()
}

if (register.register_id !== 'sitepilot-evidence-v1' || register.version !== 1) {
  fail('register_id/version must be sitepilot-evidence-v1 / 1')
}
if (!isoDate.test(register.checked_at)) fail('checked_at must be YYYY-MM-DD')
if (!Array.isArray(register.entries) || register.entries.length === 0) fail('entries must be a non-empty array')

const ids = new Set()
const tools = new Set()
for (const [index, entry] of (register.entries ?? []).entries()) {
  for (const field of requiredFields) {
    if (!(field in entry)) fail(`entry ${index + 1} is missing ${field}`)
  }
  if (!entry.evidence_id || ids.has(entry.evidence_id)) fail(`entry ${index + 1} has a missing or duplicate evidence_id`)
  ids.add(entry.evidence_id)
  if (entry.tool) tools.add(entry.tool)
  if (!validStatuses.has(entry.status)) fail(`${entry.evidence_id} has invalid status ${entry.status}`)
  for (const dateField of ['source_date', 'check_date', 'review_date']) {
    if (entry[dateField] !== null && !isoDate.test(entry[dateField])) {
      fail(`${entry.evidence_id}.${dateField} must be YYYY-MM-DD or null`)
    }
  }
  if (!Array.isArray(entry.conditions) || entry.conditions.length === 0) fail(`${entry.evidence_id}.conditions must be a non-empty array`)
  if (entry.status === 'verified' && (!entry.source_url || !/^https?:\/\//.test(entry.source_url))) {
    fail(`${entry.evidence_id} is verified but has no public source_url`)
  }
  if (entry.status === 'unverified' && entry.source_url !== null) {
    fail(`${entry.evidence_id} is unverified but source_url is not null`)
  }
}

for (const requiredTool of ['ai_procurement_decision_matrix', 'ai_implementation_cost_calculator', 'hosting_platform_fit_scorecard']) {
  if (!tools.has(requiredTool)) fail(`missing coverage for ${requiredTool}`)
}

if (process.exitCode) process.exit()
console.log(`Evidence register check passed: ${register.entries.length} entries across ${tools.size} tools`)
