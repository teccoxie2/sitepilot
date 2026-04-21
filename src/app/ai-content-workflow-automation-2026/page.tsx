import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Complete AI Content Workflow Automation Guide 2026 | SitePilot'
const pageDescription =
  'Master AI-powered content workflow automation with our comprehensive guide. From content creation to distribution, optimize your entire content pipeline with proven automation strategies and tools.'
const pageUrl = 'https://sitepilot.co/ai-content-workflow-automation-2026'
const pageImage = 'https://sitepilot.co/images/ai-content-workflow-automation-og.webp'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords:
    'ai content workflow automation, content automation tools 2026, content pipeline optimization, ai content marketing automation, content creation workflow, automated content distribution, content marketing automation strategy',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: 'Transform your content operations with AI workflow automation. Comprehensive strategies, tools, and implementation frameworks for content teams.',
    type: 'article',
    url: pageUrl,
    images: [
      {
        url: pageImage,
        width: 1200,
        height: 630,
        alt: 'AI Content Workflow Automation Guide 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete AI Content Workflow Automation Guide 2026',
    description: 'Master AI-powered content workflow automation with proven strategies and tools',
    images: [pageImage],
  },
}

const quickNav = [
  { href: '#overview', title: 'Workflow overview', note: 'Why automate and where value appears' },
  { href: '#creation', title: 'Content creation', note: 'Research, writing, and visual tools' },
  { href: '#planning', title: 'Planning & scheduling', note: 'Calendar and integration layer' },
  { href: '#distribution', title: 'Distribution & analytics', note: 'Publishing and optimization stack' },
  { href: '#implementation', title: 'Implementation', note: '12-week rollout' },
  { href: '#stacks', title: 'Tool stacks', note: 'Starter to enterprise' },
]

const summaryCards = [
  { label: '75%', note: 'Time savings on repetitive content operations when the workflow is designed correctly.' },
  { label: '3x faster', note: 'Typical production cycle acceleration across briefing, drafting, review, and distribution.' },
  { label: '90%', note: 'Reduction in manual workflow errors once approvals and handoffs are automated.' },
  { label: '150-400%', note: 'Traffic growth range cited for mature automation programs with measurement in place.' },
]

const stageCards = [
  {
    title: 'Content creation stage',
    items: ['AI-powered ideation and research', 'Automated writing and editing', 'Visual content generation', 'SEO optimization'],
  },
  {
    title: 'Content management stage',
    items: ['Automated content calendar', 'Workflow approvals', 'Asset organization', 'Version control'],
  },
  {
    title: 'Content distribution stage',
    items: ['Multi-platform publishing', 'Social media automation', 'Email marketing integration', 'Performance tracking'],
  },
]

const creationSections = [
  {
    title: 'Ideation & research automation',
    cards: [
      { name: 'Perplexity AI Pro', note: 'Real-time research with source citations', price: '$20/month', rating: '9.4/10' },
      { name: 'BuzzSumo', note: 'Content trend analysis and competitor research', price: '$119/month', rating: '9.1/10' },
      { name: 'AnswerThePublic', note: 'Question-based content ideation', price: '$99/month', rating: '8.8/10' },
    ],
    workflow: [
      'Topic discovery using trend and competitor signals',
      'Research automation to gather current source-backed information',
      'AI-generated content briefs with structure and target keywords',
    ],
  },
  {
    title: 'AI writing & content generation',
    columns: [
      {
        heading: 'Premium AI writers',
        items: [
          ['Claude 3.5 Sonnet', 'Best for long-form, analytical content', '9.6/10'],
          ['GPT-4', 'Versatile for all content types', '9.4/10'],
          ['Jasper AI', 'Marketing-focused content creation', '8.9/10'],
        ],
      },
      {
        heading: 'Specialized tools',
        items: [
          ['Copy.ai', 'Short-form marketing copy', '8.7/10'],
          ['Writesonic', 'SEO-optimized blog content', '8.5/10'],
          ['Grammarly Business', 'AI editing and brand consistency', '9.2/10'],
        ],
      },
      {
        heading: 'Visual content AI',
        items: [
          ['Midjourney', 'Highest quality image generation', '9.5/10'],
          ['Canva AI', 'Integrated design and content creation', '9.0/10'],
          ['Synthesia', 'AI video content generation', '8.8/10'],
        ],
      },
    ],
  },
]

const planningSolutions = [
  {
    title: 'Enterprise solutions',
    tools: [
      ['CoSchedule Marketing Suite', 'AI-powered content recommendations, automated scheduling, team workflow management, analytics', '$399/month', '9.4/10'],
      ['Hootsuite Enterprise', 'Multi-team collaboration, publishing workflows, social listening, approval processes', '$599/month', '9.1/10'],
    ],
  },
  {
    title: 'AI-powered planning',
    tools: [
      ['Lately AI', 'AI content generation from long-form, brand voice learning, performance prediction', '$149/month', '8.9/10'],
      ['Buffer AI Assistant', 'Smart posting-time optimization, hashtag recommendations, content idea generation', '$99/month', '8.7/10'],
    ],
  },
]

const integrationCards: Array<[string, string[]]> = [
  ['Zapier automations', ['Blog to social auto-posting', 'Approval notifications', 'Lead generation from content', 'CRM content tracking']],
  ['Make (Integromat)', ['Complex content workflows', 'Multi-platform synchronization', 'Data processing automation', 'Custom API integrations']],
  ['IFTTT Pro', ['Simple trigger-based actions', 'Social media cross-posting', 'Content backup automation', 'Notification systems']],
]

const distributionSections = [
  {
    title: 'Multi-platform publishing',
    columns: [
      {
        heading: 'WordPress automation',
        items: [
          ['Jetpack Social', 'Auto-share to 30+ social platforms', '$10/month'],
          ['Uncanny Automator', 'Complex WordPress workflow automation', '$149/year'],
          ['WP Scheduled Posts', 'AI-powered posting optimization', '$79/year'],
        ],
      },
      {
        heading: 'Email marketing integration',
        items: [
          ['Mailchimp Automation', 'Content-triggered email sequences', '$20/month'],
          ['ConvertKit Creator Pro', 'Advanced content marketing funnels', '$29/month'],
          ['Beehiiv AI', 'AI newsletter content optimization', '$39/month'],
        ],
      },
    ],
  },
  {
    title: 'Audience targeting automation',
    columns: [
      {
        heading: 'Behavioral targeting',
        items: [['', 'Previous content engagement'], ['', 'Website behavior tracking'], ['', 'Email interaction history'], ['', 'Social media engagement patterns']],
      },
      {
        heading: 'Demographic automation',
        items: [['', 'Geographic customization'], ['', 'Time-zone delivery'], ['', 'Language-specific versions'], ['', 'Device-optimized formatting']],
      },
      {
        heading: 'Interest-based segmentation',
        items: [['', 'Topic preference learning'], ['', 'Content type optimization'], ['', 'Frequency personalization'], ['', 'Channel preference automation']],
      },
    ],
  },
  {
    title: 'Performance tracking & optimization',
    columns: [
      {
        heading: 'Analytics platforms',
        items: [
          ['Google Analytics 4 + AI', 'Automated insight generation, predictive audiences, custom conversion paths', 'Free'],
          ['Adobe Analytics', 'Real-time optimization, advanced segmentation, attribution modeling', 'Enterprise'],
        ],
      },
      {
        heading: 'AI-powered insights',
        items: [
          ['Mixpanel', 'Event-based content tracking, cohort analysis automation, predictive analytics', '$25/month'],
          ['Hotjar AI', 'Heatmap analysis, automated feedback, content optimization suggestions', '$32/month'],
        ],
      },
      {
        heading: 'Real-time optimization',
        items: [
          ['', 'Automated headline testing'],
          ['', 'Content format optimization'],
          ['', 'CTA placement testing'],
          ['', 'Publishing-time optimization'],
        ],
      },
    ],
  },
]

const implementationPhases = [
  {
    title: 'Phase 1: Foundation Setup (Week 1-2)',
    accent: 'border-blue-500 text-blue-600',
    leftTitle: 'Core tools installation',
    leftItems: ['Set up content management system', 'Install analytics tracking', 'Configure social media accounts', 'Implement basic automation workflows'],
    rightTitle: 'Team training & setup',
    rightItems: ['Define roles and responsibilities', 'Create content guidelines', 'Set up approval workflows', 'Establish quality standards'],
  },
  {
    title: 'Phase 2: Automation Implementation (Week 3-6)',
    accent: 'border-indigo-500 text-indigo-600',
    leftTitle: 'Content creation automation',
    leftItems: ['Implement AI writing workflows', 'Set up research automation', 'Configure SEO optimization tools', 'Establish quality control processes'],
    rightTitle: 'Distribution & publishing',
    rightItems: ['Configure multi-platform publishing', 'Set up social media automation', 'Implement email marketing triggers', 'Establish content scheduling'],
  },
  {
    title: 'Phase 3: Optimization & Scaling (Week 7-12)',
    accent: 'border-violet-500 text-violet-600',
    leftTitle: 'Performance optimization',
    leftItems: ['Implement advanced analytics', 'Set up A/B testing automation', 'Configure real-time optimization', 'Establish performance monitoring'],
    rightTitle: 'Scaling & enhancement',
    rightItems: ['Expand content channels', 'Implement advanced personalization', 'Scale team workflows', 'Continuous optimization cycles'],
  },
]

const roiCards: Array<[string, string]> = [
  ['Starter stack', '$200-400/month'],
  ['Professional stack', '$800-1,500/month'],
  ['Enterprise stack', '$2,000-5,000/month'],
  ['Implementation time', '40-120 hours'],
]

const expectedReturns: Array<[string, string]> = [
  ['Time savings', '40-80 hours/month'],
  ['Content output increase', '200-300%'],
  ['Quality improvement', '85% consistency'],
  ['Traffic growth', '150-400%'],
]

const toolStacks = [
  {
    title: 'Starter stack',
    note: 'Perfect for solo creators and small teams',
    accent: 'bg-blue-50',
    items: ['Writing: Claude 3.5 Sonnet + Grammarly', 'Planning: Buffer + Google Calendar', 'Analytics: Google Analytics 4', 'Automation: Zapier Basic'],
    total: '$200-400/month',
    roi: '400-600%',
  },
  {
    title: 'Professional stack',
    note: 'Ideal for growing teams and agencies',
    accent: 'bg-indigo-50',
    items: ['Writing: Jasper AI + ContentCal', 'Planning: CoSchedule + BuzzSumo', 'Analytics: Mixpanel + Hotjar', 'Automation: Make + HubSpot'],
    total: '$800-1,500/month',
    roi: '500-800%',
  },
  {
    title: 'Enterprise stack',
    note: 'Complete automation for large organizations',
    accent: 'bg-violet-50',
    items: ['Writing: Custom AI + Writesonic', 'Planning: Lately AI + Hootsuite', 'Analytics: Adobe Analytics + Salesforce', 'Automation: Custom APIs + Enterprise tools'],
    total: '$2,000-5,000/month',
    roi: '600-1,200%',
  },
]

const relatedResources = [
  {
    href: '/ai-content-calendar-tools-2026',
    title: 'AI Content Calendar Tools',
    description: 'Go deeper on planning and scheduling tools once the workflow layer is clear.',
  },
  {
    href: '/best-ai-writing-tools-2026',
    title: 'AI Writing Tools Guide',
    description: 'Use this when the creation layer is still the main bottleneck in your pipeline.',
  },
  {
    href: '/best-ai-analytics-tools-bloggers-2026',
    title: 'AI Analytics Tools',
    description: 'Connect workflow automation to performance measurement and optimization decisions.',
  },
]

export default function AIContentWorkflowAutomation() {
  const ideationSectionTitle = creationSections[0]?.title ?? 'Ideation & research automation'
  const ideationCards = creationSections[0]?.cards ?? []
  const ideationWorkflow = creationSections[0]?.workflow ?? []
  const writingColumns = creationSections[1]?.columns ?? []

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description="Comprehensive guide to AI-powered content workflow automation, covering tools, strategies, and implementation frameworks for content teams."
        url={pageUrl}
        imageUrl={pageImage}
        publishedDate="2026-03-06"
        modifiedDate="2026-04-19"
        authorName="SitePilot Content Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_54%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                2026 workflow automation guide
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                AI content workflow automation,
                <span className="brand-gradient-text block">from research to reporting.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                This guide maps the full content automation pipeline: ideation, writing, planning, publishing, performance tracking,
                and the tool stacks that help teams scale output without letting quality collapse.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#overview" className="btn-brand">
                  Explore the workflow
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/ai-content-calendar-tools-2026" className="btn-secondary">
                  Planning tools
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {summaryCards.map((item) => (
                  <div key={item.label} className="page-card p-4 bg-white/90">
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">{item.label}</div>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6">
                <div className="page-card p-6 bg-white/95">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Guide map</div>
                      <div className="text-xl font-semibold text-slate-950">What to read first</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      End-to-end stack
                    </div>
                  </div>

                  <div className="space-y-3">
                    {quickNav.map((item) => (
                      <a key={item.href} href={item.href} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4 block">
                        <div className="font-semibold text-slate-950 mb-1">{item.title}</div>
                        <div className="text-sm text-slate-500">{item.note}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-14 md:py-18">
        <section id="overview" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Overview</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                Why automate the workflow,
                <span className="block brand-gradient-text">not just the writing step.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Automation only compounds when the full system is connected. Research, drafting, approvals, publishing, and analytics
                need to move as one pipeline, otherwise teams just create more content chaos faster.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  '40+ hours per month reclaimed for strategy',
                  '3x faster content production cycles',
                  'Consistent brand voice and style',
                  'Data-driven content decisions and reviews',
                ].map((item) => (
                  <div key={item} className="page-card-soft p-4 flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {stageCards.map((card) => (
                <div key={card.title} className="page-card-soft p-5">
                  <h3 className="text-xl font-semibold text-slate-950 mb-4">{card.title}</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="creation" className="page-card-glow p-1.5 mb-16 scroll-mt-28">
          <div className="page-card rounded-[2rem] p-8 md:p-10">
            <div className="max-w-3xl mb-8">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Content Creation</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                Automate the creation layer,
                <span className="block brand-gradient-text">but keep the brief and review sharp.</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6">
                <div className="page-card-soft p-6">
                  <h3 className="text-2xl font-semibold text-slate-950 mb-5">{ideationSectionTitle}</h3>
                  <div className="space-y-4">
                    {ideationCards.map((tool) => (
                      <div key={tool.name} className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                        <div className="flex items-center justify-between gap-4 mb-2">
                          <div className="font-semibold text-slate-950">{tool.name}</div>
                          <div className="text-sm font-semibold text-indigo-600">{tool.rating}</div>
                        </div>
                        <p className="text-sm text-slate-600 mb-2">{tool.note}</p>
                        <div className="text-sm font-medium text-[#635bff]">{tool.price}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="page-card-soft p-6">
                  <h3 className="text-2xl font-semibold text-slate-950 mb-5">Automation workflow</h3>
                  <div className="space-y-4">
                    {ideationWorkflow.map((item, index) => (
                      <div key={item} className="flex items-start gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#635bff] text-sm font-semibold text-white">
                          {index + 1}
                        </div>
                        <div className="text-slate-600">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {writingColumns.map((column) => (
                  <div key={column.heading} className="page-card-soft p-6">
                    <h3 className="text-xl font-semibold text-slate-950 mb-4">{column.heading}</h3>
                    <div className="space-y-4">
                      {column.items.map(([name, note, rating]) => (
                        <div key={name} className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                          <div className="flex items-center justify-between gap-3 mb-1">
                            <div className="font-medium text-slate-950">{name}</div>
                            <div className="text-sm font-semibold text-indigo-600">{rating}</div>
                          </div>
                          <div className="text-sm text-slate-600">{note}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="planning" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Planning & Scheduling</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Calendar automation works best
              <span className="block brand-gradient-text">when planning, approvals, and publishing are connected.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              This layer should also connect back to the dedicated <Link href="/ai-content-calendar-tools-2026" className="link-brand underline underline-offset-4">content calendar guide</Link> when teams need a deeper tool selection pass.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {planningSolutions.map((group) => (
              <div key={group.title} className="page-card-soft p-6">
                <h3 className="text-2xl font-semibold text-slate-950 mb-5">{group.title}</h3>
                <div className="space-y-4">
                  {group.tools.map(([name, note, price, rating]) => (
                    <div key={name} className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <div className="font-semibold text-slate-950">{name}</div>
                        <div className="text-sm font-semibold text-indigo-600">{rating}</div>
                      </div>
                      <div className="text-sm text-slate-600 mb-2">{note}</div>
                      <div className="text-sm font-medium text-[#635bff]">{price}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {integrationCards.map(([title, items]) => (
              <div key={title} className="page-card-soft p-6">
                <h3 className="text-xl font-semibold text-slate-950 mb-4">{title}</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {(items as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="distribution" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Distribution & Analytics</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Publishing is only one half;
              <span className="block brand-gradient-text">measurement and optimization close the loop.</span>
            </h2>
          </div>

          <div className="space-y-8">
            {distributionSections.map((section) => (
              <div key={section.title} className="page-card-soft p-6">
                <h3 className="text-2xl font-semibold text-slate-950 mb-5">{section.title}</h3>
                <div className={`grid gap-6 ${section.columns.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
                  {section.columns.map((column) => (
                    <div key={column.heading}>
                      <h4 className="text-lg font-semibold text-slate-950 mb-4">{column.heading}</h4>
                      <div className="space-y-3">
                        {column.items.map(([name, note, price]) => (
                          <div key={`${column.heading}-${name}-${note}`} className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                            {name ? <div className="font-medium text-slate-950 mb-1">{name}</div> : null}
                            <div className="text-sm text-slate-600">{note}</div>
                            {price ? <div className="text-sm font-medium text-[#635bff] mt-2">{price}</div> : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="implementation" className="page-card-glow p-1.5 mb-16 scroll-mt-28">
          <div className="page-card rounded-[2rem] p-8 md:p-10">
            <div className="max-w-3xl mb-8">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Implementation</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                A 12-week rollout,
                <span className="block brand-gradient-text">from foundation to optimization.</span>
              </h2>
            </div>

            <div className="space-y-5">
              {implementationPhases.map((phase) => (
                <div key={phase.title} className={`border-l-4 ${phase.accent.split(' ')[0]} page-card-soft px-6 py-6`}>
                  <div className={`text-sm uppercase tracking-[0.18em] mb-2 ${phase.accent.split(' ')[1]}`}>{phase.title}</div>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <div className="font-semibold text-slate-950 mb-3">{phase.leftTitle}</div>
                      <ul className="space-y-2 text-slate-600">
                        {phase.leftItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-950 mb-3">{phase.rightTitle}</div>
                      <ul className="space-y-2 text-slate-600">
                        {phase.rightItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mt-8">
              <div className="page-card-soft p-6">
                <h3 className="text-2xl font-semibold text-slate-950 mb-5">ROI calculation framework</h3>
                <div className="space-y-3 text-sm">
                  {roiCards.map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between gap-4">
                      <span className="text-slate-600">{label}</span>
                      <span className="font-medium text-slate-950">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="page-card-soft p-6">
                <h3 className="text-2xl font-semibold text-slate-950 mb-5">Expected returns</h3>
                <div className="space-y-3 text-sm">
                  {expectedReturns.map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between gap-4">
                      <span className="text-slate-600">{label}</span>
                      <span className="font-medium text-indigo-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stacks" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Recommended Tool Stacks</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Start with the stack
              <span className="block brand-gradient-text">your team can actually absorb.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {toolStacks.map((stack) => (
              <div key={stack.title} className={`page-card p-6 ${stack.accent}`}>
                <h3 className="text-2xl font-semibold text-slate-950 mb-2">{stack.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{stack.note}</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  {stack.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="mt-5 pt-5 border-t border-slate-200">
                  <div className="font-semibold text-slate-950">Total cost: {stack.total}</div>
                  <div className="text-sm text-indigo-600">ROI: {stack.roi}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="page-card-glow p-8 md:p-12 surface-muted mb-16">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Next Step</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Workflow automation is not just about speed;
              <span className="block brand-gradient-text">it is about scaling consistency and impact.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Start small, measure everything, and only add complexity when the team is ready to absorb it.
              The right content automation stack should make the next decision clearer, not create another layer of tool debt.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          {relatedResources.map((resource) => (
            <Link key={resource.href} href={resource.href} className="page-card p-8 hover:-translate-y-0.5 transition-transform">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{resource.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{resource.description}</p>
              <div className="inline-flex items-center text-[#635bff] font-semibold">
                Open resource
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  )
}
