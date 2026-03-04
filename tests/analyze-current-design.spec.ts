import { test, expect } from '@playwright/test';
import { promises as fs } from 'fs';
import path from 'path';

test.describe('SitePilot Current Design Analysis', () => {
  
  test('Analyze Homepage Design', async ({ page }) => {
    await page.goto('/');
    
    // 获取页面标题和描述
    const title = await page.title();
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    
    // 截图保存当前设计
    const screenshotPath = 'test-results/homepage-current.png';
    await page.screenshot({ 
      path: screenshotPath, 
      fullPage: true 
    });
    
    // 分析页面结构
    const headerExists = await page.locator('header').count() > 0;
    const footerExists = await page.locator('footer').count() > 0;
    const heroSection = await page.locator('section').first().isVisible();
    
    // 检查响应式设计
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone size
    const mobileScreenshot = 'test-results/homepage-mobile-current.png';
    await page.screenshot({ 
      path: mobileScreenshot, 
      fullPage: true 
    });
    
    // 检查关键元素
    const ctaButtons = await page.locator('a').filter({ hasText: /Web Hosting Reviews|AI SEO Tools/ }).count();
    const navigationLinks = await page.locator('nav a').count();
    
    // 记录分析结果
    const analysis = {
      timestamp: new Date().toISOString(),
      page: 'Homepage',
      title,
      description,
      structure: {
        hasHeader: headerExists,
        hasFooter: footerExists,
        hasHeroSection: heroSection,
        ctaButtonsCount: ctaButtons,
        navigationLinksCount: navigationLinks
      }
    };
    
    // 保存分析结果到文件
    await fs.writeFile(
      'test-results/homepage-analysis.json', 
      JSON.stringify(analysis, null, 2)
    );
    
    console.log('Homepage Analysis:', analysis);
  });

  test('Analyze Web Hosting Page', async ({ page }) => {
    await page.goto('/web-hosting');
    
    const title = await page.title();
    
    // 截图
    await page.screenshot({ 
      path: 'test-results/web-hosting-current.png', 
      fullPage: true 
    });
    
    // 移动端截图
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ 
      path: 'test-results/web-hosting-mobile-current.png', 
      fullPage: true 
    });
    
    // 检查联盟链接
    const affiliateLinks = await page.locator('a[href*="sitepilot.co/go"]').count();
    const contentLength = await page.locator('body').textContent();
    
    const analysis = {
      timestamp: new Date().toISOString(),
      page: 'Web Hosting',
      title,
      affiliateLinksCount: affiliateLinks,
      contentLength: contentLength?.length || 0
    };
    
    await fs.writeFile(
      'test-results/web-hosting-analysis.json', 
      JSON.stringify(analysis, null, 2)
    );
    
    console.log('Web Hosting Page Analysis:', analysis);
  });

  test('Analyze AI Tools Page', async ({ page }) => {
    await page.goto('/best-ai-seo-tools-2026');
    
    const title = await page.title();
    
    // 截图
    await page.screenshot({ 
      path: 'test-results/ai-tools-current.png', 
      fullPage: true 
    });
    
    // 移动端截图
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ 
      path: 'test-results/ai-tools-mobile-current.png', 
      fullPage: true 
    });
    
    const analysis = {
      timestamp: new Date().toISOString(),
      page: 'AI SEO Tools',
      title
    };
    
    await fs.writeFile(
      'test-results/ai-tools-analysis.json', 
      JSON.stringify(analysis, null, 2)
    );
    
    console.log('AI Tools Page Analysis:', analysis);
  });

  test('Overall Design Assessment', async ({ page }) => {
    await page.goto('/');
    
    // 检查设计问题
    const issues = [];
    
    // 检查字体一致性
    const bodyFont = await page.evaluate(() => 
      window.getComputedStyle(document.body).fontFamily
    );
    
    // 检查颜色对比度（简化版）
    const backgroundColor = await page.evaluate(() => 
      window.getComputedStyle(document.body).backgroundColor
    );
    
    // 检查按钮样式一致性
    const buttonStyles = await page.locator('a[class*="bg-"]').count();
    
    // 检查间距问题
    const sectionsWithPadding = await page.locator('section[class*="py-"]').count();
    
    if (bodyFont.includes('Arial')) {
      issues.push('Using basic Arial font instead of modern font family');
    }
    
    if (buttonStyles < 2) {
      issues.push('Insufficient styled buttons for CTAs');
    }
    
    const assessment = {
      timestamp: new Date().toISOString(),
      overallRating: 'NEEDS_IMPROVEMENT',
      issues,
      recommendations: [
        'Upgrade to modern font stack (Inter/System fonts)',
        'Improve visual hierarchy with better typography scale',
        'Add more visual breathing space between sections',
        'Enhance CTA button prominence and styling',
        'Add subtle animations and micro-interactions',
        'Improve mobile experience with better touch targets',
        'Add more visual elements (icons, illustrations, better color scheme)',
        'Enhance loading states and page transitions'
      ]
    };
    
    await fs.writeFile(
      'test-results/design-assessment.json', 
      JSON.stringify(assessment, null, 2)
    );
    
    console.log('Overall Design Assessment:', assessment);
  });
});