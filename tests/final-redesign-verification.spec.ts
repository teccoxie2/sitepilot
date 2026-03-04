import { test, expect } from '@playwright/test';

test.describe('Final SitePilot Redesign Verification', () => {
  
  test('Complete Redesign Verification', async ({ page }) => {
    // 测试主页
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // 截图桌面版主页
    await page.screenshot({ 
      path: 'test-results/final-homepage-desktop.png', 
      fullPage: true 
    });
    
    // 测试移动端
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ 
      path: 'test-results/final-homepage-mobile.png', 
      fullPage: true 
    });
    
    // 测试平板端
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.screenshot({ 
      path: 'test-results/final-homepage-tablet.png', 
      fullPage: true 
    });
    
    // 回到桌面尺寸测试其他页面
    await page.setViewportSize({ width: 1200, height: 800 });
    
    // 测试Web Hosting页面
    await page.goto('/web-hosting');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ 
      path: 'test-results/final-webhosting-page.png', 
      fullPage: true 
    });
    
    console.log('✅ All redesign screenshots captured');
  });

  test('Design System Validation', async ({ page }) => {
    await page.goto('/');
    
    // 验证Inter字体
    const fontFamily = await page.evaluate(() => 
      window.getComputedStyle(document.body).fontFamily
    );
    expect(fontFamily.toLowerCase()).toContain('inter');
    
    // 验证现代化元素存在
    await expect(page.locator('.btn')).toHaveCountGreaterThanOrEqual(1);
    await expect(page.locator('.card')).toHaveCountGreaterThanOrEqual(1);
    await expect(page.locator('.bg-gradient-to-br')).toHaveCountGreaterThanOrEqual(1);
    
    console.log('✅ Design system validated');
  });

  test('Final Performance Check', async ({ page }) => {
    await page.goto('/');
    
    // 检查页面标题
    const title = await page.title();
    expect(title).toContain('SitePilot');
    
    // 检查关键元素加载
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    
    console.log('✅ Performance check completed');
  });
});