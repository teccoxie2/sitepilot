import DrawingVerify from "@/components/drawing_verify";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const maxDuration = 180;

export default function DrawingTakeoffPage() {
  return (
    <div>
      <p className="mx-auto max-w-6xl px-4 pt-6 text-sm text-[#5c6754] sm:px-8">
        这是旧版文字层物料验证，用于对照正则与价库。扫描件、分页 Manifest、证据框和人工修正请用{" "}
        <Link href="/estimator" className="underline">
          图纸取量 V2
        </Link>
        。请使用同一项目，避免重复建档。
      </p>
      <DrawingVerify />
    </div>
  );
}
