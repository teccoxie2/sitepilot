'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, CheckCircle2, CircleDashed, Scale, Sparkles, Trophy } from 'lucide-react'

const criteria = [
  { id: 'fit', label: 'Workflow fit', weight: 5 },
  { id: 'risk', label: 'Risk profile', weight: 5 },
  { id: 'cost', label: 'Commercial clarity', weight: 4 },
  { id: 'support', label: 'Support quality', weight: 4 },
  { id: 'proof', label: 'Implementation evidence', weight: 5 },
] as const

type CriterionId = (typeof criteria)[number]['id']
type Vendor = { name: string } & Record<CriterionId, number>

const defaults: [Vendor, Vendor] = [
  { name: 'Vendor A', fit: 4, risk: 3, cost: 3, support: 4, proof: 4 },
  { name: 'Vendor B', fit: 3, risk: 4, cost: 4, support: 3, proof: 3 },
]

export default function ComparisonTool() {
  const [vendors, setVendors] = useState<[Vendor, Vendor]>(defaults)

  const totals = useMemo(() => {
    return vendors.map((vendor) => {
      const raw = criteria.reduce((sum, criterion) => sum + vendor[criterion.id] * criterion.weight, 0)
      return { ...vendor, total: raw * 4 }
    })
  }, [vendors])

  const winner = totals[0].total === totals[1].total ? 'Tie' : totals[0].total > totals[1].total ? totals[0].name : totals[1].name

  const updateVendor = (index: 0 | 1, key: keyof Vendor, value: string | number) => {
    setVendors((prev) => {
      const copy = [...prev] as [Vendor, Vendor]
      const current = copy[index]
      copy[index] = key === 'name' ? { ...current, name: String(value) } : ({ ...current, [key]: Number(value) } as Vendor)
      return copy
    })
  }

  return (
    <div id="comparison-tool" className="space-y-8">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 mb-4">
            <Sparkles className="h-4 w-4" />
            Interactive vendor comparison
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950">Compare two vendors head to head.</h2>
          <p className="mt-4 text-base md:text-lg leading-7 text-slate-600">
            Score the two vendors and see the winner update instantly.
          </p>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 md:p-6 shadow-sm overflow-x-auto">
          <table className="min-w-[840px] w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="sticky left-0 bg-white px-4 py-3 text-left text-sm font-semibold text-slate-900">Criterion</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">
                  <input
                    value={vendors[0].name}
                    onChange={(e) => updateVendor(0, 'name', e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-indigo-400"
                  />
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">
                  <input
                    value={vendors[1].name}
                    onChange={(e) => updateVendor(1, 'name', e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-indigo-400"
                  />
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Weight</th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((criterion) => (
                <tr key={criterion.id} className="border-t border-slate-200">
                  <td className="sticky left-0 bg-white px-4 py-4 align-top">
                    <div className="font-medium text-slate-950">{criterion.label}</div>
                    <div className="text-xs text-slate-500 mt-1">1 = weak, 5 = strong</div>
                  </td>
                  {[0, 1].map((index) => (
                    <td key={index} className="px-4 py-4 align-top">
                      <select
                        value={vendors[index as 0 | 1][criterion.id]}
                        onChange={(e) => updateVendor(index as 0 | 1, criterion.id, e.target.value)}
                        className="w-24 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-400"
                      >
                        {[1, 2, 3, 4, 5].map((value) => (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </td>
                  ))}
                  <td className="px-4 py-4 text-sm text-slate-600">{criterion.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <aside className="space-y-5">
          <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm sticky top-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-4">
              <CircleDashed className="h-4 w-4 text-indigo-600" />
              Live result
            </div>
            <div className="space-y-3">
              {totals.map((vendor, index) => (
                <div key={vendor.name} className={`rounded-2xl border px-4 py-4 ${index === 0 ? 'border-slate-200 bg-white' : 'border-slate-200 bg-white'}`}>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm text-slate-500">{index === 0 ? 'Vendor A' : 'Vendor B'}</div>
                      <div className="text-lg font-semibold text-slate-950">{vendor.name}</div>
                    </div>
                    {index === 0 && vendor.total === Math.max(totals[0].total, totals[1].total) ? (
                      <Trophy className="h-5 w-5 text-emerald-600" />
                    ) : (
                      <Scale className="h-5 w-5 text-slate-400" />
                    )}
                  </div>
                  <div className="mt-3 text-3xl font-semibold text-slate-950">{vendor.total}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-indigo-200 bg-indigo-50 px-4 py-4">
              <div className="text-sm text-indigo-700 font-semibold uppercase tracking-[0.16em]">Winner</div>
              <div className="mt-1 text-2xl font-semibold text-slate-950">{winner}</div>
            </div>
            <div className="mt-5 text-sm leading-6 text-slate-600">
              <CheckCircle2 className="inline-block h-4 w-4 text-emerald-500 mr-1 align-text-bottom" />
              Update the scores and the ranking will change instantly.
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}
