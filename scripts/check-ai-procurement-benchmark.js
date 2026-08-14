/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('node:fs')
const path = require('node:path')

const benchmarkPath = path.join(process.cwd(), 'src/data/evidence/ai-procurement-benchmark-v1.json')
const registerPath = path.join(process.cwd(), 'src/data/evidence/sitepilot-evidence-v1.json')
const requiredFields = ['benchmark_id', 'control', 'buyer_question', 'minimum_evidence', 'source_evidence_ids', 'status']
const allowedStatuses = new Set(['baseline', 'buyer-validation-required'])

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'))
  } catch (error) {
    console.error(`Benchmark check failed: cannot parse ${filePath} (${error.message})`)
    process.exit(1)
  }
}

const benchmark = readJson(benchmarkPath)
const register = readJson(registerPath)
if (benchmark.benchmark_id !== 'ai-procurement-evidence-benchmark-v1' || benchmark.version !== 1) {
  console.error('Benchmark check failed: invalid benchmark id or version')
  process.exit(1)
}
if (!/^\d{4}-\d{2}-\d{2}$/.test(benchmark.checked_at) || !Array.isArray(benchmark.rows) || benchmark.rows.length < 6) {
  console.error('Benchmark check failed: checked_at or rows are invalid')
  process.exit(1)
}

const evidenceIds = new Set((register.entries ?? []).map((entry) => entry.evidence_id))
const rowIds = new Set()
for (const [index, row] of benchmark.rows.entries()) {
  for (const field of requiredFields) {
    if (!(field in row)) {
      console.error(`Benchmark check failed: row ${index + 1} is missing ${field}`)
      process.exit(1)
    }
  }
  if (rowIds.has(row.benchmark_id) || !row.benchmark_id) {
    console.error(`Benchmark check failed: duplicate or missing benchmark_id at row ${index + 1}`)
    process.exit(1)
  }
  rowIds.add(row.benchmark_id)
  if (!allowedStatuses.has(row.status) || !Array.isArray(row.source_evidence_ids) || row.source_evidence_ids.length === 0) {
    console.error(`Benchmark check failed: invalid status/source references at ${row.benchmark_id}`)
    process.exit(1)
  }
  if (row.source_evidence_ids.some((evidenceId) => !evidenceIds.has(evidenceId))) {
    console.error(`Benchmark check failed: unknown evidence reference at ${row.benchmark_id}`)
    process.exit(1)
  }
}

console.log(`AI procurement benchmark check passed: ${benchmark.rows.length} evidence controls`)
