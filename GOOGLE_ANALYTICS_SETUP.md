# Google Analytics 4 设置指南

## ✅ 当前状态
- 🟢 **GA4 代码已集成** - GoogleAnalytics 组件已配置
- 🟢 **事件追踪已设置** - 联盟链接点击自动追踪
- 🟡 **需要配置** - GA Measurement ID

## 🚀 设置步骤

### 1. 创建 Google Analytics 账户
1. 访问 https://analytics.google.com/
2. 点击 "开始使用" 或登录现有 Google 账户
3. 创建新的 Analytics 账户

### 2. 设置 GA4 属性
1. **账户名称**: SitePilot
2. **属性名称**: sitepilot.co
3. **时区**: Pacific/Auckland (GMT+13)
4. **货币**: NZD (新西兰元)
5. **行业类别**: Technology
6. **企业规模**: Small business

### 3. 获取 Measurement ID
1. 在 GA4 中，点击 "数据流" → "添加流" → "网站"
2. **网站 URL**: https://sitepilot.co
3. **流名称**: SitePilot Main Site
4. 复制 **Measurement ID** (格式: G-XXXXXXXXXX)

### 4. 配置项目
```bash
# 编辑 .env.local 文件
cd sitepilot
nano .env.local

# 替换这一行:
NEXT_PUBLIC_GA_MEASUREMENT_ID=你的_MEASUREMENT_ID
```

### 5. 重启开发服务器
```bash
npm run dev
```

## 📊 追踪的事件

### 自动追踪
- ✅ **页面浏览量** - 所有页面访问
- ✅ **联盟链接点击** - 使用 AffiliateLink 组件
- ✅ **用户会话** - 访问时长、跳出率

### 自定义事件
```jsx
import { trackEvent } from '@/components/GoogleAnalytics'

// 追踪自定义事件
trackEvent('newsletter_signup', 'engagement', 'homepage')
trackEvent('download', 'content', 'hosting_guide')
```

## 💰 联盟收入追踪

### 使用 AffiliateLink 组件
```jsx
import AffiliateLink from '@/components/AffiliateLink'

<AffiliateLink 
  href="https://affiliate-link.com"
  provider="hostinger" 
  plan="premium"
  source="comparison_table"
  className="btn-primary"
>
  选择 Hostinger Premium
</AffiliateLink>
```

### 收入计算
1. **GA4 Conversions** → 设置目标转换
2. **Enhanced Ecommerce** → 追踪联盟收入
3. **Attribution Models** → 了解转换路径

## 📈 关键指标监控

### 每日检查
- 📊 **Pageviews** (页面浏览量)
- 👥 **Users** (独立访客)
- ⏱️ **Session Duration** (会话时长)
- 📱 **Device Type** (设备分布)

### 每周分析
- 🔍 **Traffic Sources** (流量来源)
- 🎯 **Top Pages** (热门页面)
- 💰 **Affiliate Clicks** (联盟点击)
- 🔄 **User Flow** (用户路径)

### 每月报告
- 📈 **Growth Trends** (增长趋势)
- 💵 **Revenue Attribution** (收入归因)
- 🎯 **Goal Conversions** (目标转换)
- 📊 **Content Performance** (内容效果)

## 🎯 设置转换目标

### 1. 联盟链接点击
- **目标类型**: Event
- **事件名称**: affiliate_click
- **价值**: 根据平均佣金设置

### 2. Newsletter 注册
- **目标类型**: Event  
- **事件名称**: newsletter_signup
- **价值**: $5 (预估生命周期价值)

### 3. 页面深度
- **目标类型**: Event
- **条件**: 页面浏览 > 3 页
- **价值**: $2 (高参与度用户)

## 🚨 验证设置

### 实时测试
1. 打开网站: https://sitepilot.co
2. 在 GA4 中查看 "实时" 报告
3. 确认页面浏览正在记录
4. 点击联盟链接测试事件追踪

### Debug 模式
```bash
# 开发环境会在控制台显示追踪信息
npm run dev
```

## 📞 需要帮助？
如果设置过程中遇到问题，我可以帮你：
- ✅ 验证 GA 配置
- ✅ 设置自定义事件
- ✅ 创建转换目标  
- ✅ 分析流量数据

---

**预期设置时间**: 15-20 分钟  
**生效时间**: 24-48 小时开始显示完整数据