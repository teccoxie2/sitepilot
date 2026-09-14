import AddressForm from "@/components/address_form";
import RecentQueries from "@/components/recent_queries";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-10 sm:px-6">
      <header className="mb-8">
        <p className="text-sm tracking-[0.18em] text-[#7a5a2b]">AUCKLAND</p>
        <h1 className="mt-2 text-3xl font-semibold leading-tight sm:text-4xl">奥克兰住宅开发核算台</h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#5c6754]">
          从议会地址库点选物业。系统读取地块、区划和坡度，给出适合这一户的初版方案和可核对造价。拆分门牌只核算当前现址。
        </p>
      </header>

      <section className="mb-8 grid gap-3 sm:grid-cols-3" aria-label="工作台入口">
        <StageCard
          href="/"
          kicker="阶段 1"
          title="选址核算"
          body="点选 AC_Address。地块、区划、坡度来自公开图层；正式 LIM 需上传议会 PDF 文字层。"
        />
        <StageCard
          href="/estimator"
          kicker="阶段 2 · V2"
          title="图纸取量"
          body="建筑平面面积、门窗表文字层、屋面斜面积。结构梁常为未计价。电气、给排水、暖通等专业暂不取量。"
        />
        <StageCard
          href="/drawing-takeoff"
          kicker="旧版"
          title="物料验证"
          body="RC/BC 文字层套价对照。扫描件 / Manifest / 证据框请改用图纸取量 V2。"
        />
      </section>

      <div className="rounded-2xl border border-[#d9d0c0] bg-[#fffaf3] p-5 shadow-[0_12px_40px_rgba(40,32,18,0.06)] sm:p-7">
        <AddressForm embedded>
          <RecentQueries />
        </AddressForm>
      </div>
    </div>
  );
}

function StageCard({
  href,
  kicker,
  title,
  body,
}: {
  href: string;
  kicker: string;
  title: string;
  body: string;
}) {
  const inner = (
    <>
      <p className="text-[10px] tracking-[0.16em] text-[#7a5a2b]">{kicker}</p>
      <h2 className="mt-1 text-base font-semibold">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-[#5c6754]">{body}</p>
    </>
  );
  if (href === "/") {
    return <div className="rounded-2xl border border-[#2f4a32] bg-white p-4">{inner}</div>;
  }
  return (
    <Link href={href} className="rounded-2xl border border-[#d9d0c0] bg-white p-4 hover:border-[#2f4a32]">
      {inner}
    </Link>
  );
}
