import Link from "next/link";

const STAGES = [
  { href: "/", label: "选址核算", hint: "土地 / LIM" },
  { href: "/estimator", label: "图纸取量", hint: "V2 工作区" },
  { href: "/drawing-takeoff", label: "物料验证", hint: "旧版文字层" },
];

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#e4dccb] bg-[#f3eee4]/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-8">
        <Link href="/" className="min-w-0 truncate text-sm font-semibold tracking-tight sm:text-base">
          奥克兰开发核算台
        </Link>
        <nav className="flex items-center gap-2 sm:gap-3" aria-label="工作台阶段">
          {STAGES.map((stage) => (
            <Link
              key={stage.href}
              href={stage.href}
              className="rounded-lg px-2 py-1 text-xs text-[#2f4a32] hover:bg-[#e4f0e6] sm:text-sm"
            >
              <span className="block leading-4">{stage.label}</span>
              <span className="hidden text-[10px] text-[#7b8474] sm:block">{stage.hint}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
