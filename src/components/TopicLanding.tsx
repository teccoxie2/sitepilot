import Link from 'next/link'

type Props = {
  title: string
  intro: string
  steps: { title: string; body: string; href: string; label: string }[]
}

export default function TopicLanding({ title, intro, steps }: Props) {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-10 pb-4 sm:px-6 lg:px-8">
      <h1 className="page-title max-w-4xl text-4xl md:text-6xl">{title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{intro}</p>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {steps.map((step, index) => (
          <section key={step.href} className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold text-indigo-700">Step {index + 1}</p>
            <h2 className="mt-3 text-xl font-semibold text-slate-950">{step.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">{step.body}</p>
            <Link href={step.href} className="mt-5 inline-block font-medium text-indigo-700 underline underline-offset-4">{step.label}</Link>
          </section>
        ))}
      </div>
      <p className="mt-8 text-sm text-slate-600">See how sources, assumptions, and editorial judgements are distinguished in our <Link href="/methodology" className="text-indigo-700 underline">evaluation methodology</Link>.</p>
    </div>
  )
}
