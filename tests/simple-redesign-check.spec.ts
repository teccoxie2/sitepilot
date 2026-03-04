import { test, expect } from '@playwright/test';

test('Simple Redesign Validation', async ({ page }) => {
  await page.goto('/');
  
  // 等待页面加载
  await page.waitForLoadState('networkidle');
  
  // 截图新设计
  await page.screenshot({ 
    path: 'test-results/homepage-new-design.png', 
    fullPage: true 
  });
  
  // 移动端截图
  await page.setViewportSize({ width: 375, height: 667 });
  await page.screenshot({ 
    path: 'test-results/homepage-mobile-new-design.png', 
    fullPage: true 
  });
  
  console.log('✅ Screenshots captured');
});