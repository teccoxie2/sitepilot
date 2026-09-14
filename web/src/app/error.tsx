"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-semibold">这一页没能打开</h1>
      <p className="mt-4 rounded-xl bg-[#f8e7dc] px-4 py-3 text-sm leading-6 text-[#8a3b1d]" role="alert">
        {error.message || "核算服务返回了无法显示的结果。"}
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-6 h-11 rounded-xl bg-[#2f4a32] px-5 text-sm font-medium text-white hover:bg-[#3f6b45]"
      >
        重试
      </button>
    </main>
  );
}
