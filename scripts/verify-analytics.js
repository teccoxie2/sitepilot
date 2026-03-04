/**
 * Google Analytics Setup Verification Script
 * Run this to check if GA is properly configured
 */

const fs = require('fs');
const path = require('path');

function checkEnvironmentFile() {
  const envPath = path.join(process.cwd(), '.env.local');
  
  if (!fs.existsSync(envPath)) {
    console.log('❌ .env.local file not found');
    return false;
  }
  
  const envContent = fs.readFileSync(envPath, 'utf8');
  
  if (!envContent.includes('NEXT_PUBLIC_GA_MEASUREMENT_ID')) {
    console.log('❌ GA Measurement ID not found in .env.local');
    return false;
  }
  
  if (envContent.includes('GA_MEASUREMENT_ID_PLACEHOLDER')) {
    console.log('⚠️  GA Measurement ID is still placeholder - needs real ID');
    return false;
  }
  
  console.log('✅ Environment variables configured');
  return true;
}

function checkGoogleAnalyticsComponent() {
  const gaPath = path.join(process.cwd(), 'src/components/GoogleAnalytics.tsx');
  
  if (!fs.existsSync(gaPath)) {
    console.log('❌ GoogleAnalytics component not found');
    return false;
  }
  
  const gaContent = fs.readFileSync(gaPath, 'utf8');
  
  if (!gaContent.includes('gtag')) {
    console.log('❌ gtag not configured in GoogleAnalytics component');
    return false;
  }
  
  console.log('✅ GoogleAnalytics component exists and configured');
  return true;
}

function checkLayoutIntegration() {
  const layoutPath = path.join(process.cwd(), 'src/app/layout.tsx');
  
  if (!fs.existsSync(layoutPath)) {
    console.log('❌ Layout file not found');
    return false;
  }
  
  const layoutContent = fs.readFileSync(layoutPath, 'utf8');
  
  if (!layoutContent.includes('GoogleAnalytics')) {
    console.log('❌ GoogleAnalytics not imported in layout');
    return false;
  }
  
  console.log('✅ GoogleAnalytics integrated in layout');
  return true;
}

function checkAffiliateLinkComponent() {
  const affiliatePath = path.join(process.cwd(), 'src/components/AffiliateLink.tsx');
  
  if (!fs.existsSync(affiliatePath)) {
    console.log('⚠️  AffiliateLink component not found (optional)');
    return true; // Non-critical
  }
  
  console.log('✅ AffiliateLink component exists');
  return true;
}

function runVerification() {
  console.log('🔍 Verifying Google Analytics Setup...\n');
  
  const checks = [
    checkEnvironmentFile(),
    checkGoogleAnalyticsComponent(),
    checkLayoutIntegration(),
    checkAffiliateLinkComponent()
  ];
  
  const passed = checks.filter(Boolean).length;
  const total = checks.length;
  
  console.log(`\n📊 Results: ${passed}/${total} checks passed`);
  
  if (passed === total) {
    console.log('\n🎉 Google Analytics is properly configured!');
    console.log('Next steps:');
    console.log('1. Get your GA4 Measurement ID from https://analytics.google.com/');
    console.log('2. Replace GA_MEASUREMENT_ID_PLACEHOLDER in .env.local');
    console.log('3. Restart your dev server: npm run dev');
    console.log('4. Test tracking in GA4 Real-time reports');
  } else {
    console.log('\n⚠️  Some issues found. Please fix them before proceeding.');
  }
}

// Run verification
runVerification();