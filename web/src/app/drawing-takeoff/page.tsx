import DrawingVerify from "@/components/drawing_verify";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const maxDuration = 180;

export default function DrawingTakeoffPage() {
  return (
    <div>
      <p className="mx-auto max-w-6xl px-4 pt-6 text-sm text-[#5c6754] sm:px-8">
        文字层套价仍可用本页。扫描件 / Manifest / 证据框请用{" "}
        <Link href="/estimator" className="underline">
          图纸取量 V2
        </Link>
        。
      </p>
      <DrawingVerify />
    </div>
  );
}


export const dynamic = "force-dynamic";
export const maxDuration = 180;

export default function DrawingTakeoffPage() {
  return <DrawingVerify />;
}
