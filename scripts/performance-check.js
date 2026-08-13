#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

/**
 * Simple response-time smoke check for SitePilot.co.
 * This measures HTML request time only; it is not a Core Web Vitals check.
 */

const https = require('https');
const { performance } = require('perf_hooks');

const pages = [
  'https://sitepilot.co',
  'https://sitepilot.co/web-hosting',
  'https://sitepilot.co/ai-tools',
  'https://sitepilot.co/website-builders'
];

async function checkPagePerformance(url) {
  return new Promise((resolve, reject) => {
    const startTime = performance.now();
    
    const req = https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const endTime = performance.now();
        const loadTime = Math.round(endTime - startTime);
        
        resolve({
          url,
          statusCode: res.statusCode,
          loadTime: `${loadTime}ms`,
          contentLength: data.length,
          timestamp: new Date().toISOString()
        });
      });
    });
    
    req.on('error', (err) => {
      reject({ url, error: err.message });
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      reject({ url, error: 'Timeout after 10 seconds' });
    });
  });
}

async function runPerformanceCheck() {
  console.log('🚀 SitePilot Performance Check');
  console.log('================================');
  console.log(`Time: ${new Date().toISOString()}\n`);
  
  const results = [];
  
  for (const page of pages) {
    try {
      console.log(`⏱️  Checking: ${page}`);
      const result = await checkPagePerformance(page);
      results.push(result);
      
      const status = result.statusCode === 200 ? '✅' : '❌';
      console.log(`${status} ${result.loadTime} (${result.statusCode}) - ${(result.contentLength / 1024).toFixed(1)}KB\n`);
      
    } catch (error) {
      console.log(`❌ Error: ${error.error || error.message}\n`);
      results.push(error);
    }
  }
  
  // Summary
  const successfulChecks = results.filter(r => r.statusCode === 200);
  const averageLoadTime = successfulChecks.reduce((sum, r) => sum + parseInt(r.loadTime), 0) / successfulChecks.length;
  
  console.log('📊 Summary:');
  console.log(`- Pages checked: ${pages.length}`);
  console.log(`- Successful: ${successfulChecks.length}`);
  console.log(`- Average load time: ${Math.round(averageLoadTime)}ms`);
  console.log(`- Status: ${successfulChecks.length === pages.length ? '🟢 All Good' : '🟡 Some Issues'}`);
  
  return results;
}

if (require.main === module) {
  runPerformanceCheck().catch(console.error);
}

module.exports = { checkPagePerformance, runPerformanceCheck };
