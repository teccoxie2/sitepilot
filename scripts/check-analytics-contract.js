/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('node:fs')
const path = require('node:path')

const projectRoot = process.cwd()
const requiredEvents = ['tool_start', 'tool_complete', 'report_export', 'report_share', 'apply_submit', 'affiliate_click']
const coreTools = [
  ['ai_procurement_decision_matrix', 'src/app/ai-procurement-decision-matrix-tool-2026/AIProcurementDecisionMatrixClient.tsx'],
  ['ai_implementation_cost_roi', 'src/app/ai-implementation-cost-calculator-enterprise-2026/AIImplementationCostCalculatorClient.tsx'],
  ['hosting_platform_fit_scorecard', 'src/app/hosting-platform-fit-scorecard-2026/HostingPlatformFitScorecardClient.tsx'],
]

function read(relativePath) {
  const filePath = path.join(projectRoot, relativePath)
  if (!fs.existsSync(filePath)) {
    console.error(`Analytics contract failed: missing ${relativePath}`)
    process.exit(1)
  }
  return fs.readFileSync(filePath, 'utf8')
}

const analyticsSource = read('src/components/GoogleAnalytics.tsx')
for (const eventName of requiredEvents) {
  if (!analyticsSource.includes(`'${eventName}'`)) {
    console.error(`Analytics contract failed: missing event ${eventName}`)
    process.exit(1)
  }
}

for (const [toolId, relativePath] of coreTools) {
  const source = read(relativePath)
  for (const helper of ['trackToolStart', 'trackToolComplete', 'trackReportExport', 'trackReportShare']) {
    if (!source.includes(helper)) {
      console.error(`Analytics contract failed: ${relativePath} does not call ${helper}`)
      process.exit(1)
    }
  }
  if (!source.includes(`'${toolId}'`)) {
    console.error(`Analytics contract failed: ${relativePath} does not identify ${toolId}`)
    process.exit(1)
  }
}

const auditSource = read('src/app/apply-for-audit/page.tsx')
const trackedMailSource = read('src/components/TrackedMailtoLink.tsx')
if (!auditSource.includes('TrackedMailtoLink') || !trackedMailSource.includes('trackApplySubmit')) {
  console.error('Analytics contract failed: apply-for-audit does not expose the apply_submit mailto path')
  process.exit(1)
}

console.log(`Analytics contract passed: ${requiredEvents.length} events and ${coreTools.length} core tools covered`)
