# SitePilot SEO设置指南

## ✅ 已完成的SEO基础设施

1. **robots.txt** - 已创建，允许搜索引擎爬取
2. **sitemap.xml** - 已生成，包含所有核心页面
3. **Meta标签优化** - 已在layout.tsx中配置完整的metadata
4. **Google Analytics组件** - 代码已就绪，等待配置

## 🚀 需要手动完成的设置

### 1. Google Analytics 4 设置

**创建GA4账户:**
1. 访问 https://analytics.google.com
2. 创建新账户 -> "SitePilot"
3. 选择"网站"属性
4. 设置网站URL: `https://sitepilot.co`
5. 复制 Measurement ID (格式: G-XXXXXXXXXX)

**配置环境变量:**
```bash
# 创建 .env.local 文件
echo "NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX" > .env.local
```

### 2. Google Search Console 验证

**添加网站:**
1. 访问 https://search.google.com/search-console
2. 添加资产 -> "网址前缀" -> `https://sitepilot.co`
3. 选择验证方法: "HTML标记"
4. 复制验证代码
5. 更新 `src/app/layout.tsx` 中的 google verification code

**提交sitemap:**
```
在Search Console左侧菜单 -> 站点地图
添加新的站点地图: https://sitepilot.co/sitemap.xml
```

### 3. 性能监控设置

**Core Web Vitals检查:**
```bash
# 使用Lighthouse检查性能
npx lighthouse https://sitepilot.co --only-categories=performance,seo,best-practices,accessibility
```

**建议安装Chrome扩展:**
- Web Vitals
- Lighthouse
- SEO META in 1 CLICK

## 📊 监控指标设置

### 关键SEO指标
- **有机搜索流量** (目标: 100+/月 by 4月)
- **关键词排名** (目标: 10个词进前3页 by 4月)
- **页面加载速度** (目标: <3秒)
- **移动适配性** (目标: 100%兼容)

### 转换追踪
```javascript
// 在联盟链接点击时触发
import { trackAffiliateClick } from '@/components/GoogleAnalytics'

// 示例使用
trackAffiliateClick('Bluehost', 'Basic', 'hosting-page')
```

## 🎯 下一步行动计划

### 本周任务
- [x] SEO技术基础 (robots.txt, sitemap) ✅
- [ ] GA4 + GSC 配置
- [ ] 首次性能审计
- [ ] 移动端优化检查

### 下周任务  
- [ ] 关键词研究和排名追踪设置
- [ ] 内部链接优化
- [ ] 社交分享优化
- [ ] Newsletter集成 (ConvertKit)

## 🔍 SEO技术债务

### 已解决 
- ✅ Sitemap生成
- ✅ Robots.txt配置
- ✅ Meta标签完整性
- ✅ 404页面创建 (专业not-found.tsx)
- ✅ 内部链接系统优化 (RelatedLinks组件)
- ✅ 16页面稳定构建系统

### 待处理
- [ ] Schema markup添加 (产品评价结构化数据)
- [ ] Open Graph图片生成
- [ ] XML站点地图自动更新机制 (目前手动维护)

---

**最后更新:** 2026-03-02 22:30  
**下次检查:** 2026-03-03 09:00  
**执行状态:** 🟢 SEO基础设施完成，等待外部服务配置