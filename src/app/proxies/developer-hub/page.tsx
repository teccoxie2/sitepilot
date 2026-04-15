import type { Metadata } from 'next'
import Link from 'next/link'
import { Terminal, Code2, Server, Globe2 } from 'lucide-react'

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

export default function DeveloperHubPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <section className="bg-slate-900 border-b border-slate-800 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400 mb-6">
            <Terminal className="w-4 h-4 inline mr-2 -mt-0.5" />
            Developer Integration Guide
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
            Proxy Developer Hub
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-4xl">
            Buying a good proxy network is only half the problem. If your integration leaks WebRTC IPs, fails to handle TLS fingerprinting, or misconfigures sticky sessions, you will still get blocked. Use these tested patterns to wire proxies into standard automation frameworks and next-generation AI agents.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">Node.js Automation</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-blue-400" />
                  Puppeteer
                </h3>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                Puppeteer requires passing the proxy as an launch argument, but authentication must be handled at the page level.
              </p>
              <div className="bg-slate-950 rounded-xl p-4 overflow-x-auto border border-slate-800">
                <pre className="text-sm text-emerald-300">
                  <code>{`import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  args: ['--proxy-server=http://proxy.vendor.com:8000']
});

const page = await browser.newPage();
// Authenticate before navigating
await page.authenticate({
  username: 'your_username',
  password: 'your_password'
});

await page.goto('https://api.ipify.org?format=json');`}</code>
                </pre>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-green-400" />
                  Playwright
                </h3>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                Playwright handles proxies much cleaner than Puppeteer by defining them directly in the browser context.
              </p>
              <div className="bg-slate-950 rounded-xl p-4 overflow-x-auto border border-slate-800">
                <pre className="text-sm text-emerald-300">
                  <code>{`import { chromium } from 'playwright';

const browser = await chromium.launch({
  proxy: {
    server: 'http://proxy.vendor.com:8000',
    username: 'your_username',
    password: 'your_password'
  }
});

const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://api.ipify.org?format=json');`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900/30 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">AI Agent Frameworks (2026)</h2>
          <p className="text-slate-400 mb-8 max-w-3xl leading-relaxed">
            AI web agents (like Skyvern or MultiOn) handle DOM reasoning but still need raw networking cover to bypass Cloudflare and DataDome. Wire proxies into them at the transport layer.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Skyvern Integration</h3>
              <p className="text-sm text-slate-400 mb-4">
                Skyvern allows you to pass proxy configurations via environment variables or directly in the workflow payload.
              </p>
              <div className="bg-slate-950 rounded-xl p-4 overflow-x-auto border border-slate-800">
                <pre className="text-sm text-emerald-300">
                  <code>{`# Add to your Skyvern .env
PROXY_URL="http://user:pass@proxy.vendor.com:8000"
PROXY_BYPASS_LIST="localhost,127.0.0.1"

# Or via API payload
{
  "url": "https://target.com",
  "proxy": "http://user:pass@proxy.vendor.com:8000",
  "navigation_goal": "Extract pricing data"
}`}</code>
                </pre>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Firecrawl (LLM Scraper)</h3>
              <p className="text-sm text-slate-400 mb-4">
                Firecrawl abstracts the browser but allows enterprise plans to route extraction through specific proxy networks.
              </p>
              <div className="bg-slate-950 rounded-xl p-4 overflow-x-auto border border-slate-800">
                <pre className="text-sm text-emerald-300">
                  <code>{`import FirecrawlApp from '@mendable/firecrawl-js';

const app = new FirecrawlApp({ apiKey: "fc-..." });

// Pass proxy parameters in extract options
const scrapeResult = await app.scrapeUrl('https://target.com', {
  formats: ['markdown'],
  proxy: 'http://user:pass@proxy.vendor.com:8000'
});`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
            <Server className="w-12 h-12 text-blue-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Need infrastructure to match your code?</h2>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto">
              Code is useless if the IP is burned. Choose an infrastructure model that fits the target's threat profile before you spend hours fighting 403 Forbidden errors.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/proxies/best-residential-proxies-2026" className="px-6 py-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors font-semibold border border-slate-700">
                View Residential
              </Link>
              <Link href="/proxies/best-mobile-proxies-2026" className="px-6 py-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors font-semibold border border-slate-700">
                View Mobile
              </Link>
              <Link href="/proxies" className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors font-semibold">
                Back to Hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}