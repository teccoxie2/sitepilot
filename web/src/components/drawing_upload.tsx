"use client";

import { useState, type FormEvent } from "react";
import { uploadPdfsToEngine } from "@/lib/engine_upload";

export default function DrawingUpload({ projectId }: { projectId: string }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const files: File[] = [];
    const kinds: string[] = [];
    const rc = data.get("rc");
    const bc = data.get("bc");
    if (rc instanceof File && rc.size > 0) {
      files.push(rc);
      kinds.push("rc");
    }
    if (bc instanceof File && bc.size > 0) {
      files.push(bc);
      kinds.push("bc");
    }
    for (const extra of data.getAll("extras")) {
      if (extra instanceof File && extra.size > 0) {
        files.push(extra);
        kinds.push("unknown");
      }
    }
    if (!files.length) {
      setError("请至少上传一份 RC 或 BC 的 PDF。");
      return;
    }
    setBusy(true);
    setError("");
    try {
      await uploadPdfsToEngine({
        files,
        kinds,
        directUrl: `/engine/projects/${encodeURIComponent(projectId)}/drawings`,
        completeUrl: `/engine/projects/${encodeURIComponent(projectId)}/drawings/from-session`,
      });
      window.location.assign(`/projects/${encodeURIComponent(projectId)}`);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "图纸核算失败");
      setBusy(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-[#d9d0c0] bg-[#fffaf3] p-5 sm:p-6">
      <h2 className="text-lg font-semibold">第二阶段：RC / BC 图纸套价</h2>
      <p className="mt-1 text-sm leading-6 text-[#5c6754]">
        上传可选中文字的 Resource Consent 或 Building Consent PDF。系统只读文字层里的面积、层高、覆盖率、砌块贴面和门窗表，再套同一份公开价库。扫描件没有文字层会报错，无法读取尺寸。开发完成后只按当前议会门牌地块校核；整宗开发图如果比本户大，会标成与现址不符，不合计其他门牌。
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-1">
          <span className="text-xs text-[#7b8474]">RC 图（面积 / 覆盖率 / 层数）</span>
          <input
            name="rc"
            type="file"
            accept="application/pdf"
            className="text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-[#e4f0e6] file:px-3 file:py-2 file:text-[#2f4a32]"
            aria-label="Resource Consent PDF"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-xs text-[#7b8474]">BC 建筑图（门窗表优先）</span>
          <input
            name="bc"
            type="file"
            accept="application/pdf"
            className="text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-[#e4f0e6] file:px-3 file:py-2 file:text-[#2f4a32]"
            aria-label="Building Consent PDF"
          />
        </label>
        <label className="flex flex-col gap-1 md:col-span-2">
          <span className="text-xs text-[#7b8474]">其他带文字层的 PDF（可选）</span>
          <input
            name="extras"
            type="file"
            accept="application/pdf"
            multiple
            className="text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-[#e4f0e6] file:px-3 file:py-2 file:text-[#2f4a32]"
            aria-label="补充 PDF"
          />
        </label>
      </div>
      <p className="mt-3 text-xs leading-5 text-[#7b8474]">
        单份不超过 15MB；大于约 3.5MB 会自动分片。读不到的尺寸和没有公开 SKU 的樘会标缺项，不回填户型模板面积。
      </p>
      <div className="mt-4">
        <button
          type="submit"
          disabled={busy}
          aria-busy={busy}
          className="h-11 rounded-xl bg-[#2f4a32] px-5 text-sm font-medium text-white hover:bg-[#3f6b45] disabled:opacity-60"
        >
          {busy ? "正在读文字层并套价…" : "按图纸套价"}
        </button>
      </div>
      {error ? (
        <p className="mt-3 rounded-lg bg-[#f8e7dc] px-3 py-2 text-sm text-[#8a3b1d]" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
