#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs')
const path = require('path')

const appDirectory = path.join(process.cwd(), 'src/app')
const forbiddenClaims = [
  'real-world investment',
  'research across 500+ companies',
  '500+ companies studied',
  'fortune 500 companies studied',
  'avg. enterprise roi',
  'average roi',
  'average switching cost',
  'typical success rate',
  'successful enterprise ai implementations',
  'based on analysis of 1,000+',
  'selection success rate cited on the page',
  'tested methodology',
  'real-world performance data',
  'real-world testing',
  'testing across 78 ai tools',
  'average ai roi',
  'average first-year roi',
  'average 3-year roi',
  'average annual savings',
  'typical roi payback',
]

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name)
    if (entry.isDirectory()) return walk(filePath)
    return entry.name.endsWith('.tsx') || entry.name.endsWith('.ts') ? [filePath] : []
  })
}

const failures = []
for (const filePath of walk(appDirectory)) {
  const source = fs.readFileSync(filePath, 'utf8').toLowerCase()
  for (const forbiddenClaim of forbiddenClaims) {
    if (source.includes(forbiddenClaim)) {
      failures.push(`${path.relative(process.cwd(), filePath)} contains forbidden unsupported claim: ${forbiddenClaim}`)
    }
  }
}

if (failures.length > 0) {
  console.error('Content claim check failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log(`Content claim check passed: ${walk(appDirectory).length} app files scanned`)
