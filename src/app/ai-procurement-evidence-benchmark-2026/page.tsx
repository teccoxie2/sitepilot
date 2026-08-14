import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, FileText, ShieldCheck, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import { normalizeMetadata } from '@/lib/seo'
import benchmarkData from '@/data/evidence/ai-procurement-benchmark-v1.json'
import evidenceData from '@/data/evidence/sitepilot-evidence-v1.json'

const pageTitle = 'AI Procurement Evidence Benchmark 2026 | SitePilot'
const pageDescription = 'A versioned evidence baseline for enterprise AI procurement: governance, security, regulatory fit, pilot acceptance, commercial risk, and reproducible decision records.'
const pageUrl = 'https://sitepilot.co/ai-procurement-evidence-benchmark-2026'

const metadataConfig: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: { title: pageTitle, description: pageDescription, url: pageUrl, type: 'article', siteName: 'SitePilot', locale: 'en_US' },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
  robots: { index: true, follow: true },
}

export const metadata: Metadata = normalizeMetadata(metadataConfig)

const sourceById = new Map(evidenceData.entries.map((entry) => [entry.evidence_id, entry]))

export default function AIProcurementEvidenceBenchmarkPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup type="custom" title={pageTitle} description={pageDescription} url={pageUrl} data={{ '@type': 'TechArticle', version: '1.0', dateModified: benchmarkData.checked_at }} />
      <section className="page-hero relative">
        <div className="page-hero-inner mx-auto max-w-7xl px-4 pb-20 pt-24 md:pb-28 md:pt-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <div className="page-pill mb-6"><Sparkles className="h-4 w-4 text-[#635bff]" /> Versioned evidence baseline</div>
              <h1 className="page-title mb-6 text-5xl md:text-7xl">AI procurement evidence benchmark 2026,<span className="brand-gradient-text block">for decisions another stakeholder can reproduce.</span></h1>
              <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">This is a procurement evidence benchmark, not a vendor ranking. It defines the minimum evidence a buying team should collect before turning a polished demo into an approval decision.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/ai-procurement-decision-matrix-tool-2026" className="btn-brand inline-flex items-center gap-2">Run the decision matrix <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/methodology#evidence-register" className="btn-secondary inline-flex items-center gap-2">Open evidence register <FileText className="h-4 w-4" /></Link>
              </div>
            </div>
            <div className="page-card-glow p-1.5"><div className="page-card rounded-[1.7rem] bg-white/95 p-7">
              <div className="mb-5 flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600"><ShieldCheck className="h-6 w-6" /></div><div><div className="text-sm text-slate-500">Benchmark version</div><div className="text-xl font-semibold text-slate-950">v{benchmarkData.version}.0 · checked {benchmarkData.checked_at}</div></div></div>
              <p className="text-sm leading-6 text-slate-600">Public authority sources are separated from SitePilot editorial model inputs. Rows marked buyer-validation-required are deliberately not treated as verified facts.</p>
            </div></div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="mb-10 max-w-3xl"><div className="page-pill mb-4">The benchmark</div><h2 className="page-title mb-4 text-3xl md:text-5xl">Eight controls before approve, hold, or reject.</h2><p className="page-lead text-lg">Use each row as an evidence request. A baseline row names the authority guidance; a buyer-validation-required row tells you what must come from the vendor, contract, pilot, or your own operating data.</p></div>
        <div className="grid gap-5 md:grid-cols-2">
          {benchmarkData.rows.map((row) => (
            <article key={row.benchmark_id} className="page-card p-6 md:p-7">
              <div className="mb-4 flex items-start justify-between gap-4"><div><div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{row.benchmark_id}</div><h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{row.control}</h3></div><span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${row.status === 'baseline' ? 'border border-emerald-200 bg-emerald-50 text-emerald-800' : 'border border-amber-200 bg-amber-50 text-amber-800'}`}>{row.status}</span></div>
              <p className="mb-4 text-sm font-semibold leading-6 text-slate-800">{row.buyer_question}</p>
              <p className="text-sm leading-6 text-slate-600"><span className="font-semibold text-slate-800">Minimum evidence: </span>{row.minimum_evidence}</p>
              <div className="mt-5 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">Sources: {row.source_evidence_ids.map((id) => sourceById.get(id)?.source_url ? <a key={id} href={sourceById.get(id)?.source_url ?? '#'} target="_blank" rel="noreferrer" className="ml-1 font-semibold text-[#635bff] hover:underline">{id}</a> : <span key={id} className="ml-1 font-semibold text-amber-800">{id} (editorial rule)</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-20 md:pb-28"><div className="page-card-glow p-1.5"><div className="page-card rounded-[1.7rem] p-7 md:p-9"><div className="mb-4 flex items-center gap-2 text-sm font-semibold text-indigo-700"><CheckCircle2 className="h-4 w-4" /> Use this as a baseline, then replace assumptions with evidence.</div><p className="max-w-4xl text-slate-600 leading-7">The benchmark does not certify a vendor, predict ROI, or replace legal, security, or architecture review. Record the source date, owner, unresolved blockers, score version, and next review date in the decision memo before approval.</p><div className="mt-6 flex flex-wrap gap-3"><Link href="/ai-procurement-decision-matrix-tool-2026" className="btn-brand">Create a decision memo</Link><Link href="/apply-for-audit" className="btn-secondary">Request a tailored audit</Link></div></div></div></section>
    </div>
  )
}
