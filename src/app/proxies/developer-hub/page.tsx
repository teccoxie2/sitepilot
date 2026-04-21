import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Code2, Globe2, Server, ShieldCheck, Sparkles, Terminal } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Proxy Developer Hub: Automation, API & Agent Integration - SitePilot',
  description:
    'Integrate residential and mobile proxies into Puppeteer, Playwright, Scrapy, and modern AI agents (Skyvern, Firecrawl). Copy-paste code snippets for reliable automation.',
  keywords:
    'proxy developer guide, puppeteer proxy setup, playwright proxy authentication, skyvern proxy, firecrawl proxy, proxy api integration',
  openGraph: {
    title: 'Proxy Developer Hub: Automation, API & Agent Integration',
    description:
      'Integration guides and code snippets for hooking modern proxy networks into web automation frameworks and AI agents.',
    type: 'article',
    url: 'https://sitepilot.co/proxies/developer-hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proxy Developer Hub',
    description: 'Code snippets for proxy integration with Puppeteer, Playwright, and AI agents.',
  },
  alternates: {
    canonical: 'https://sitepilot.co/proxies/developer-hub',
  },
}

const nodeAutomationGuides = [
  {
    title: 'Puppeteer',
    icon: Code2,
    accent: 'text-blue-600',
    description:
      'Puppeteer expects the proxy server at launch time, but authentication still needs to happen at the page layer before navigation.',
    code: `import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  args: ['--proxy-server=http://proxy.vendor.com:8000']
});

const page = await browser.newPage();
await page.authenticate({
  username: 'your_username',
  password: 'your_password'
});

await page.goto('https://api.ipify.org?format=json');`,
  },
  {
    title: 'Playwright',
    icon: Globe2,
    accent: 'text-indigo-600',
    description:
      'Playwright handles proxies more cleanly by defining them in the browser launch configuration instead of bolting them on per page.',
    code: `import { chromium } from 'playwright';

const browser = await chromium.launch({
  proxy: {
    server: 'http://proxy.vendor.com:8000',
    username: 'your_username',
    password: 'your_password'
  }
});

const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://api.ipify.org?format=json');`,
  },
]

const agentGuides = [
  {
    title: 'Skyvern integration',
    description:
      'Skyvern accepts proxy configuration through environment variables or directly inside the workflow payload when transport needs to be controlled explicitly.',
    code: `# Add to your Skyvern .env
PROXY_URL="http://user:pass@proxy.vendor.com:8000"
PROXY_BYPASS_LIST="localhost,127.0.0.1"

# Or via API payload
{
  "url": "https://target.com",
  "proxy": "http://user:pass@proxy.vendor.com:8000",
  "navigation_goal": "Extract pricing data"
}`,
  },
  {
    title: 'Firecrawl integration',
    description:
      'Firecrawl abstracts the browser layer, but enterprise-grade extraction still benefits from passing the right proxy network into the scrape configuration.',
    code: `import FirecrawlApp from '@mendable/firecrawl-js';

const app = new FirecrawlApp({ apiKey: "fc-..." });

const scrapeResult = await app.scrapeUrl('https://target.com', {
  formats: ['markdown'],
  proxy: 'http://user:pass@proxy.vendor.com:8000'
});`,
  },
]

const integrationRules = [
  'Choose the proxy type before touching code, because the wrong network makes clean code irrelevant.',
  'Authenticate early and verify egress IPs before you start debugging target-side failures.',
  'Treat sticky sessions, TLS fingerprints, and WebRTC leakage as integration requirements, not optional extras.',
  'Map infrastructure choice to the target threat profile instead of forcing one proxy class into every workflow.',
]

export default function DeveloperHubPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title="Proxy Developer Hub: Automation, API & Agent Integration"
        description="Integration guides and code snippets for hooking modern proxy networks into web automation frameworks and AI agents."
        url="https://sitepilot.co/proxies/developer-hub"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.04fr_0.96fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Proxy developer workflows
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Proxy developer hub,
                <span className="brand-gradient-text block">for automation, agents, and transport-layer sanity.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                Buying a good proxy network is only half the problem. If your integration leaks WebRTC IPs, mishandles sticky sessions, or wires authentication into the wrong layer, you still get blocked. This hub keeps the patterns practical so you can move from infrastructure choice to working code faster.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/proxies" className="btn-brand">
                  Back to proxy hub
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/proxies/best-residential-proxies-2026" className="btn-secondary">
                  View residential options
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {integrationRules.map((rule) => (
                  <div key={rule} className="page-card px-4 py-4 flex items-start gap-3">
                    <ShieldCheck className="h-4 w-4 mt-0.5 text-indigo-500 shrink-0" />
                    <span className="text-sm text-slate-700 leading-6">{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6">
                <div className="page-card p-6 bg-white/95">
                  <div className="flex items-center justify-between mb-6 gap-4">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Integration path</div>
                      <div className="text-xl font-semibold text-slate-950">What to lock down first</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Network before code
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['Proxy class', 'Residential, mobile, ISP, or datacenter depending on trust requirements and target difficulty.'],
                      ['Framework wiring', 'Launch configuration, auth flow, and IP verification should be tested before target logic.'],
                      ['Session model', 'Sticky versus rotating behavior changes how the rest of the automation should be designed.'],
                      ['Agent transport', 'AI agents still need raw networking cover; DOM reasoning alone does not bypass block infrastructure.'],
                    ].map(([title, note]) => (
                      <div
                        key={title}
                        className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4"
                      >
                        <div className="font-semibold text-slate-950 mb-1">{title}</div>
                        <div className="text-sm text-slate-500">{note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section surface-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Node.js automation</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">Puppeteer and Playwright patterns that do not waste time.</h2>
            <p className="page-lead text-lg">
              These examples are intentionally simple. The point is to show where proxy configuration belongs so you can verify the transport layer before layering on the rest of the workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {nodeAutomationGuides.map((guide) => {
              const Icon = guide.icon

              return (
                <div key={guide.title} className="page-card-glow p-1.5">
                  <div className="page-card rounded-[1.6rem] p-6 md:p-7 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                        <Icon className={`h-5 w-5 ${guide.accent}`} />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">Runtime</div>
                        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">{guide.title}</h3>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-7 mb-5">{guide.description}</p>

                    <div className="rounded-[1.4rem] border border-slate-200 bg-slate-950 p-4 md:p-5 overflow-x-auto">
                      <pre className="text-sm leading-6 text-sky-200">
                        <code>{guide.code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">AI agent frameworks</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">Modern agents still depend on old networking reality.</h2>
            <p className="page-lead text-lg">
              Tools like Skyvern and Firecrawl can reason about the DOM, but transport still decides whether the request reaches the page cleanly enough to matter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {agentGuides.map((guide) => (
              <div key={guide.title} className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.6rem] p-6 md:p-7 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                      <Terminal className="h-5 w-5 text-[#635bff]" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Agent integration</div>
                      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">{guide.title}</h3>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-7 mb-5">{guide.description}</p>

                  <div className="rounded-[1.4rem] border border-slate-200 bg-slate-950 p-4 md:p-5 overflow-x-auto">
                    <pre className="text-sm leading-6 text-sky-200">
                      <code>{guide.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-5xl mx-auto px-4">
          <div className="page-card-glow p-8 md:p-12 surface-muted">
            <div className="max-w-3xl">
              <div className="w-12 h-12 rounded-2xl border border-indigo-100 bg-indigo-50 flex items-center justify-center mb-6">
                <Server className="h-6 w-6 text-[#635bff]" />
              </div>
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Infrastructure fit</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                Code quality does not rescue bad IP strategy.
                <span className="block brand-gradient-text">Match the network model to the threat profile first.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Clean code is wasted if the underlying proxy class is wrong for the target. Pick the infrastructure that matches the block surface, then wire it into your framework without leaking identity or breaking session assumptions.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/proxies/best-residential-proxies-2026" className="btn-secondary">
                  View residential
                </Link>
                <Link href="/proxies/best-mobile-proxies-2026" className="btn-secondary">
                  View mobile
                </Link>
                <Link href="/proxies" className="btn-brand">
                  Back to hub
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
