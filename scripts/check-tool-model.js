#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('node:fs')
const path = require('node:path')

const projectRoot = process.cwd()
const modelPath = path.join(projectRoot, 'src', 'data', 'evidence', 'sitepilot-tool-model-v1.json')
const evidencePath = path.join(projectRoot, 'src', 'data', 'evidence', 'sitepilot-evidence-v1.json')
const requiredTools = {
  ai_procurement_decision_matrix: {
    route: '/ai-procurement-decision-matrix-tool-2026',
    source: 'src/app/ai-procurement-decision-matrix-tool-2026/AIProcurementDecisionMatrixClient.tsx',
  },
  ai_implementation_cost_roi: {
    route: '/ai-implementation-cost-calculator-enterprise-2026',
    source: 'src/app/ai-implementation-cost-calculator-enterprise-2026/AIImplementationCostCalculatorClient.tsx',
  },
  hosting_platform_fit_scorecard: {
    route: '/hosting-platform-fit-scorecard-2026',
    source: 'src/app/hosting-platform-fit-scorecard-2026/HostingPlatformFitScorecardClient.tsx',
  },
}
const isoDate = /^\d{4}-\d{2}-\d{2}$/
const failures = []

function fail(message) {
  failures.push(message)
}

function readJson(filePath, label) {
  if (!fs.existsSync(filePath)) {
    fail(`missing ${label}`)
    return null
  }
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'))
  } catch (error) {
    fail(`${label} is invalid JSON (${error.message})`)
    return null
  }
}

function assertObject(value, label) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) fail(`${label} must be an object`)
}

function assertNumber(value, label) {
  if (typeof value !== 'number' || !Number.isFinite(value)) fail(`${label} must be a finite number`)
}

function assertDate(value, label) {
  if (typeof value !== 'string' || !isoDate.test(value)) fail(`${label} must be YYYY-MM-DD`)
}

function sumWeights(dimensions, label) {
  if (!Array.isArray(dimensions) || dimensions.length === 0) {
    fail(`${label}.dimensions must be a non-empty array`)
    return
  }
  const ids = new Set()
  let total = 0
  for (const [index, dimension] of dimensions.entries()) {
    assertObject(dimension, `${label}.dimensions[${index}]`)
    if (!dimension.id || ids.has(dimension.id)) fail(`${label}.dimensions has a missing or duplicate id`)
    ids.add(dimension.id)
    if (!dimension.label) fail(`${label}.dimensions[${index}].label is required`)
    assertNumber(dimension.weight, `${label}.dimensions[${index}].weight`)
    total += dimension.weight
  }
  if (total !== 100) fail(`${label}.dimensions weights must sum to 100 (found ${total})`)
}

function checkEvidenceRefs(tool, evidenceIds, label) {
  if (!Array.isArray(evidenceIds) || evidenceIds.length === 0) {
    fail(`${label}.evidence_ids must be a non-empty array`)
    return
  }
  for (const evidenceId of evidenceIds) {
    if (!evidenceIdsSet.has(evidenceId)) fail(`${label} references unknown evidence id ${evidenceId}`)
  }
}

const model = readJson(modelPath, 'tool model')
const evidence = readJson(evidencePath, 'evidence register')
const evidenceIdsSet = new Set((evidence?.entries ?? []).map((entry) => entry.evidence_id))

if (model) {
  if (model.model_id !== 'sitepilot-tool-model-v1' || model.version !== 1) fail('tool model must be sitepilot-tool-model-v1 version 1')
  assertDate(model.checked_at, 'tool model.checked_at')
  assertDate(model.review_date, 'tool model.review_date')
  if (!model.owner) fail('tool model.owner is required')
  assertObject(model.tools, 'tool model.tools')

  for (const [toolId, requirement] of Object.entries(requiredTools)) {
    const tool = model.tools?.[toolId]
    if (!tool) {
      fail(`tool model is missing ${toolId}`)
      continue
    }
    const label = `tool model.tools.${toolId}`
    if (tool.route !== requirement.route) fail(`${label}.route must be ${requirement.route}`)
    checkEvidenceRefs(tool, tool.evidence_ids, label)
    const sourcePath = path.join(projectRoot, requirement.source)
    if (!fs.existsSync(sourcePath)) fail(`missing component source ${requirement.source}`)
    else if (!fs.readFileSync(sourcePath, 'utf8').includes('sitepilot-tool-model-v1.json')) fail(`${requirement.source} must import the versioned tool model`)
  }

  const procurement = model.tools.ai_procurement_decision_matrix
  if (procurement) sumWeights(procurement.dimensions, 'ai_procurement_decision_matrix')

  const implementation = model.tools.ai_implementation_cost_roi
  if (implementation) {
    for (const field of ['base_implementation_cost_usd', 'operating_cost_factor', 'annual_cost_savings_factor', 'annual_revenue_lift_factor', 'break_even_minimum_months']) {
      assertNumber(implementation[field], `ai_implementation_cost_roi.${field}`)
    }
    assertObject(implementation.cost_allocations, 'ai_implementation_cost_roi.cost_allocations')
    const allocationTotal = Object.values(implementation.cost_allocations ?? {}).reduce((sum, value) => sum + (typeof value === 'number' ? value : 0), 0)
    if (allocationTotal !== 1.15) fail(`ai_implementation_cost_roi.cost_allocations must sum to 1.15 including contingency (found ${allocationTotal})`)
    for (const factorGroup of ['size_factors', 'industry_factors', 'scope_factors', 'timeline_factors', 'use_case_weights']) {
      assertObject(implementation[factorGroup], `ai_implementation_cost_roi.${factorGroup}`)
      for (const [key, value] of Object.entries(implementation[factorGroup] ?? {})) assertNumber(value, `ai_implementation_cost_roi.${factorGroup}.${key}`)
    }
    assertObject(implementation.risk_adjustment, 'ai_implementation_cost_roi.risk_adjustment')
    assertNumber(implementation.risk_adjustment.base, 'ai_implementation_cost_roi.risk_adjustment.base')
    assertNumber(implementation.risk_adjustment.minimum, 'ai_implementation_cost_roi.risk_adjustment.minimum')
    if (!Array.isArray(implementation.risk_factors) || implementation.risk_factors.length !== 4) fail('ai_implementation_cost_roi.risk_factors must contain four entries')
  }

  const hosting = model.tools.hosting_platform_fit_scorecard
  if (hosting) {
    sumWeights(hosting.dimensions, 'hosting_platform_fit_scorecard')
    assertObject(hosting.platform_defaults, 'hosting_platform_fit_scorecard.platform_defaults')
    for (const platform of ['managed-wordpress', 'shared', 'cloud']) {
      const scores = hosting.platform_defaults?.[platform]
      assertObject(scores, `hosting_platform_fit_scorecard.platform_defaults.${platform}`)
      for (const dimension of hosting.dimensions ?? []) assertNumber(scores?.[dimension.id], `hosting_platform_fit_scorecard.platform_defaults.${platform}.${dimension.id}`)
    }
    assertObject(hosting.adjustments, 'hosting_platform_fit_scorecard.adjustments')
  }
}

if (failures.length > 0) {
  console.error('Tool model check failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log('Tool model check passed: version 1 covers three core tools and registered evidence')
