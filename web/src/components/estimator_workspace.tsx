"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import type { EstimatorProject } from "@/lib/estimator";
import { nzdExact } from "@/lib/money";
import { readEngineJson, uploadPdfsToEngine } from "@/lib/engine_upload";

const TABS = [
  { id: "project", label: "PROJECT" },
  { id: "documents", label: "DOCUMENTS" },
  { id: "takeoff", label: "TAKEOFF" },
  { id: "review", label: "REVIEW" },
  { id: "estimate", label: "ESTIMATE" },
  { id: "history", label: "HISTORY" },
];

function emptyWorkspace(projectId: string): EstimatorProject {
  return {
    id: projectId,
    name: "未命名图纸项目",
    created_at: "",
    status: "UPLOADED",
    document_set_version: 0,
    documents: [],
    drawings: [],
    expected_drawings: [],
    references: [],
    evidence: [],
    takeoff: [],
    review: [],
    correction_events: [],
    estimate: null,
    estimate_versions: [],
  };
}

export default function EstimatorWorkspace({ projectId }: { projectId: string }) {
  const [project, setProject] = useState<EstimatorProject | null>(null);
  const [tab, setTab] = useState("project");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState("");
  const [readyNote, setReadyNote] = useState("");
  const [selectedDrawingId, setSelectedDrawingId] = useState<string | null>(null);
  const [selectedEvidenceId, setSelectedEvidenceId] = useState<string | null>(null);
  const [pageFailed, setPageFailed] = useState(false);

  const load = async () => {
    const response = await fetch(`/engine/estimator/projects/${projectId}`, { cache: "no-store" });
    if (response.status === 404) {
      await response.text().catch(() => "");
      setProject(emptyWorkspace(projectId));
      setTab("documents");
      setError(
        "这份工作区不在当前引擎磁盘上。演示容器重启或换实例后记录会消失，不会用缓存顶上。请重新上传图纸。",
      );
      return;
    }
    const payload = (await readEngineJson(response, "无法读取工作区")) as unknown as EstimatorProject;
    setProject(payload);
    setError("");
    if (!selectedDrawingId && payload.drawings?.[0]) setSelectedDrawingId(payload.drawings[0].id);
  };

  useEffect(() => {
    fetch("/engine/estimator/ready", { cache: "no-store" })
      .then(async (response) => {
        const payload = await readEngineJson(response, "无法确认视觉密钥。");
        setReadyNote(typeof payload.note === "string" ? payload.note : "");
      })
      .catch(() => setReadyNote("无法确认视觉密钥。"));
    load().catch((caught: unknown) => setError(caught instanceof Error ? caught.message : "无法读取工作区"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);

  const drawings = project?.drawings || [];
  const expectedDrawings = project?.expected_drawings || [];
  const takeoff = project?.takeoff || [];
  const reviewItems = project?.review || [];
  const correctionEvents = project?.correction_events || [];

  const selectedDrawing = useMemo(
    () => drawings.find((item) => item.id === selectedDrawingId) || drawings[0],
    [drawings, selectedDrawingId],
  );
  const pageEvidence = useMemo(
    () => (project?.evidence || []).filter((item) => item.drawing_id === selectedDrawing?.id),
    [project, selectedDrawing],
  );

  useEffect(() => {
    setPageFailed(false);
  }, [selectedDrawing?.id]);

  const applyProject = (next: EstimatorProject) => {
    setProject(next);
    if (next.drawings?.[0]) {
      setSelectedDrawingId((current) => current || next.drawings[0].id);
    }
  };

  const tryReadProject = async (): Promise<EstimatorProject | null> => {
    const response = await fetch(`/engine/estimator/projects/${projectId}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(12_000),
    });
    if (response.status === 404) {
      await response.text().catch(() => "");
      return null;
    }
    return (await readEngineJson(response, "无法读取工作区")) as unknown as EstimatorProject;
  };

  const waitJob = async (jobId: string): Promise<EstimatorProject | null> => {
    const deadline = Date.now() + 420_000;
    let failures = 0;
    while (Date.now() < deadline) {
      try {
        const response = await fetch(`/engine/estimator/jobs/${encodeURIComponent(jobId)}`, {
          cache: "no-store",
          signal: AbortSignal.timeout(12_000),
        });
        if (response.status === 404) {
          await response.text().catch(() => "");
          setBusy("任务还没出现在当前引擎实例，继续查询…");
        } else {
          const payload = await readEngineJson(response, "查询进度失败");
          failures = 0;
          if (payload.note) setBusy(String(payload.note));
          if (payload.status === "ok") {
            const result = payload.result;
            if (result && typeof result === "object" && "id" in result) {
              return result as unknown as EstimatorProject;
            }
            return tryReadProject();
          }
          if (payload.status === "error") {
            throw new Error(typeof payload.detail === "string" ? payload.detail : "处理失败");
          }
        }
        const snapshot = await tryReadProject();
        if (snapshot) {
          applyProject(snapshot);
          if (snapshot.status === "READY" || (snapshot.takeoff && snapshot.takeoff.length > 0)) {
            return snapshot;
          }
          if (snapshot.documents?.length) {
            setBusy(`已收到图纸（${snapshot.status}），正在当前引擎处理…`);
          }
        }
      } catch (caught) {
        const name = caught instanceof Error ? caught.name : "";
        const message = caught instanceof Error ? caught.message : "";
        const transient =
          name === "AbortError" ||
          name === "TimeoutError" ||
          /failed to fetch|networkerror|load failed|fetch failed/i.test(message);
        if (!transient) throw caught;
        failures += 1;
        if (failures >= 8) throw new Error("无法连上核算服务。请稍后重试；未编造结果。");
        setBusy("核算服务暂时连不上，继续查询…");
      }
      await new Promise((resolve) => window.setTimeout(resolve, 1500));
    }
    throw new Error("处理超时。未编造数量或金额。");
  };

  const handleUpload = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const files: File[] = [];
    const kinds: string[] = [];
    const arch = data.get("architectural");
    const struct = data.get("structural");
    if (arch instanceof File && arch.size > 0) {
      files.push(arch);
      kinds.push("ARCHITECTURAL");
    }
    if (struct instanceof File && struct.size > 0) {
      files.push(struct);
      kinds.push("STRUCTURAL");
    }
    for (const extra of data.getAll("extras")) {
      if (extra instanceof File && extra.size > 0) {
        files.push(extra);
        kinds.push("UNKNOWN");
      }
    }
    if (!files.length) {
      setError("请至少上传一份 PDF。");
      return;
    }
    setBusy("正在上传原件（只读副本，不改写）…");
    setError("");
    try {
      const uploaded = await uploadPdfsToEngine({
        files,
        kinds,
        extraFields: {
          workspace_name: project?.name || "未命名图纸项目",
          workspace_address: project?.address || "",
        },
        directUrl: `/engine/estimator/projects/${projectId}/documents`,
        completeUrl: `/engine/estimator/projects/${projectId}/documents/from-session`,
        onNote: setBusy,
      });
      const uploadedProject = uploaded.project;
      if (uploadedProject && typeof uploadedProject === "object" && "id" in uploadedProject) {
        applyProject(uploadedProject as EstimatorProject);
      } else if (typeof uploaded.id === "string") {
        applyProject(uploaded as unknown as EstimatorProject);
      }
      let jobId = typeof uploaded.job_id === "string" ? uploaded.job_id : "";
      if (!jobId) {
        const started = await fetch(`/engine/estimator/projects/${projectId}/process`, { method: "POST" });
        const job = await readEngineJson(started, "无法开始处理");
        jobId = typeof job.job_id === "string" ? job.job_id : "";
      }
      if (!jobId) throw new Error("上传已收到，但没有返回处理任务编号。请重新上传。");
      const finished = await waitJob(jobId);
      if (finished) applyProject(finished);
    } catch (caught: unknown) {
      setError(caught instanceof Error ? caught.message : "处理失败");
    } finally {
      setBusy("");
    }
  };

  const handleEstimate = async () => {
    setBusy("正在按价表生成报价版本…");
    setError("");
    try {
      const response = await fetch(`/engine/estimator/projects/${projectId}/estimate`, { method: "POST" });
      const payload = (await readEngineJson(response, "无法生成报价")) as unknown as EstimatorProject;
      setProject(payload);
      setTab("estimate");
    } catch (caught: unknown) {
      setError(caught instanceof Error ? caught.message : "无法生成报价");
    } finally {
      setBusy("");
    }
  };

  const handleReview = async (reviewId: string, action: string) => {
    setError("");
    try {
      const response = await fetch(`/engine/estimator/projects/${projectId}/review/${reviewId}/${action}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ reason_code: "OTHER" }),
      });
      const payload = (await readEngineJson(response, "审核失败")) as unknown as EstimatorProject;
      setProject(payload);
    } catch (caught: unknown) {
      setError(caught instanceof Error ? caught.message : "审核失败");
    }
  };

  if (!project) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p>{error || "正在读取工作区…"}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-8">
      <p className="text-sm tracking-[0.18em] text-[#7a5a2b]">ESTIMATOR V2</p>
      <h1 className="mt-2 text-3xl font-semibold">{project.name}</h1>
      <p className="mt-2 text-sm text-[#5c6754]">
        状态 {project.status} · 图纸集版本 {project.document_set_version} · 价表 {project.pricebook_version || "未读"}
      </p>
      {readyNote ? (
        <p className="mt-3 rounded-lg bg-[#f8e7dc] px-3 py-2 text-sm text-[#8a3b1d]" role="status">
          {readyNote}
        </p>
      ) : null}
      {busy ? (
        <p className="mt-3 rounded-lg bg-[#eef3ea] px-3 py-2 text-sm text-[#2f4a32]" role="status">
          {busy}
        </p>
      ) : null}
      {error ? (
        <p className="mt-3 rounded-lg bg-[#f8e7dc] px-3 py-2 text-sm text-[#8a3b1d]" role="alert">
            {/项目不存在|当前引擎磁盘/.test(error)
            ? "这份工作区不在当前引擎磁盘上。演示容器重启或换实例后记录会消失，不会用缓存顶上。图纸仍在表单里的话，请再点一次上传。"
            : error}
        </p>
      ) : null}

      <div className="mt-6">
        <Tabs tabs={TABS} value={tab} onChange={setTab} />
      </div>

      {tab === "project" ? (
        <section className="mt-6 space-y-4">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(project.document_health || {}).map(([discipline, status]) => (
              <div key={discipline} className="rounded-2xl border border-[#d9d0c0] bg-[#fffaf3] p-4">
                <p className="text-xs text-[#7b8474]">{discipline}</p>
                <p className="mt-1 font-medium">{status}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#5c6754]">
            审核队列：自动接受 {project.review_counts?.AUTO_ACCEPTED || 0} · 待审 {project.review_counts?.NEEDS_REVIEW || 0} ·
            未解决 {project.review_counts?.UNRESOLVED || 0}
          </p>
          {expectedDrawings.length ? (
            <p className="text-sm text-[#9a6b12]">
              Drawing Index 期望 {expectedDrawings.length} 张；缺图请到 DOCUMENTS 查看，不把缺图包装成完整报价。
            </p>
          ) : (
            <p className="text-sm text-[#5c6754]">还没有从封面读到 Drawing Index。无文字层时需人工补 index，不会编造图号。</p>
          )}
        </section>
      ) : null}

      {tab === "documents" ? (
        <section className="mt-6 space-y-6">
          <form onSubmit={handleUpload} className="rounded-2xl border border-[#d9d0c0] bg-[#fffaf3] p-5">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-1 text-sm">
                Architectural PDF
                <input name="architectural" type="file" accept="application/pdf" aria-label="Architectural PDF" />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                Structural PDF
                <input name="structural" type="file" accept="application/pdf" aria-label="Structural PDF" />
              </label>
              <label className="flex flex-col gap-1 text-sm md:col-span-2">
                其他 PDF
                <input name="extras" type="file" accept="application/pdf" multiple aria-label="其他 PDF" />
              </label>
            </div>
            <p className="mt-3 text-xs leading-5 text-[#7b8474]">单份不超过 15MB；大于约 3.5MB 会自动分片。</p>
            <Button type="submit" className="mt-4" disabled={Boolean(busy)}>
              上传并生成 Manifest
            </Button>
          </form>
          <div className="grid gap-6 lg:grid-cols-[16rem_1fr]">
            <ul className="space-y-2">
              {drawings.map((drawing) => (
                <li key={drawing.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedDrawingId(drawing.id)}
                    className={`w-full rounded-xl border px-3 py-2 text-left text-sm ${
                      selectedDrawing?.id === drawing.id ? "border-[#2f4a32] bg-[#e4f0e6]" : "border-[#d9d0c0] bg-white"
                    }`}
                  >
                    <p className="font-medium">
                      {drawing.drawing_number || "无图号"} · p.{drawing.page_number}
                    </p>
                    <p className="text-xs text-[#7b8474]">
                      {drawing.discipline} / {drawing.page_type}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
            {selectedDrawing ? (
              <div>
                <div className="relative overflow-hidden rounded-2xl border border-[#d9d0c0] bg-[#111]">
                  {pageFailed ? (
                    <p className="px-4 py-16 text-center text-sm text-[#f8e7dc]" role="status">
                      这一页的渲染图不在当前引擎磁盘上。演示容器重启后原图会丢，请重新上传图纸，不会用缓存图顶上。
                    </p>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`/engine/estimator/projects/${project.id}/documents/${selectedDrawing.document_id}/pages/${selectedDrawing.page_number}`}
                      alt={`第 ${selectedDrawing.page_number} 页`}
                      className="h-auto w-full"
                      onError={() => setPageFailed(true)}
                    />
                  )}
                  {pageFailed
                    ? null
                    : pageEvidence.map((item) => {
                        const box = item.bbox;
                        const x1 = Number(box?.x1);
                        const y1 = Number(box?.y1);
                        const x2 = Number(box?.x2);
                        const y2 = Number(box?.y2);
                        if (![x1, y1, x2, y2].every(Number.isFinite)) return null;
                        const width = Math.max(0.004, x2 - x1);
                        const height = Math.max(0.004, y2 - y1);
                        if (width <= 0.004 && height <= 0.004) return null;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            aria-label={item.raw_text || "证据"}
                            onClick={() => setSelectedEvidenceId(item.id)}
                            className={`absolute border-2 ${selectedEvidenceId === item.id ? "border-amber-400" : "border-emerald-400/80"}`}
                            style={{
                              left: `${x1 * 100}%`,
                              top: `${y1 * 100}%`,
                              width: `${width * 100}%`,
                              height: `${height * 100}%`,
                            }}
                          />
                        );
                      })}
                </div>
                <div className="mt-4 rounded-2xl border border-[#d9d0c0] bg-white p-4 text-sm">
                  <p className="font-medium">证据</p>
                  {pageEvidence.length === 0 ? (
                    <p className="mt-2 text-[#5c6754]">本页没有文字层证据。扫描页在未配置视觉密钥时保持空提取。</p>
                  ) : (
                    <ul className="mt-2 space-y-2">
                      {pageEvidence.map((item) => (
                        <li key={item.id}>
                          <button type="button" className="text-left hover:underline" onClick={() => setSelectedEvidenceId(item.id)}>
                            {item.extraction_method} · {item.raw_text || JSON.stringify(item.structured_value)}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-sm text-[#5c6754]">上传图纸后将在这里显示分页与证据框。</p>
            )}
          </div>
          {expectedDrawings.length ? (
            <div>
              <h3 className="font-medium">期望图纸 / 缺失</h3>
              <ul className="mt-2 text-sm">
                {expectedDrawings.map((item) => {
                  const supplied = drawings.some((drawing) => drawing.drawing_number === item.drawing_number);
                  return (
                    <li key={item.drawing_number} className={supplied ? "text-[#2f4a32]" : "text-[#9a6b12]"}>
                      {item.drawing_number} {item.drawing_title || ""} {supplied ? "Available" : "Missing"}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </section>
      ) : null}

      {tab === "takeoff" ? (
        <section className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <thead>
              <tr className="border-b border-[#eee6d8] text-xs text-[#7b8474]">
                <th className="py-2 pr-3">科目</th>
                <th className="py-2 pr-3">数量</th>
                <th className="py-2 pr-3">状态</th>
                <th className="py-2 pr-3">公式</th>
              </tr>
            </thead>
            <tbody>
              {takeoff.map((item) => (
                <tr key={item.id} className="border-b border-[#f3eee4]">
                  <td className="py-2 pr-3">{item.description}</td>
                  <td className="py-2 pr-3">
                    {item.quantity ?? "—"} {item.unit}
                  </td>
                  <td className="py-2 pr-3">{item.status}</td>
                  <td className="py-2 pr-3 text-xs">{item.calculation_formula || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {takeoff.length === 0 ? <p className="mt-3 text-sm text-[#5c6754]">还没有可复算的工程量。</p> : null}
        </section>
      ) : null}

      {tab === "review" ? (
        <section className="mt-6 space-y-3">
          {reviewItems.map((item) => (
            <article key={item.id} className="rounded-2xl border border-[#d9d0c0] bg-white p-4">
              <p className="text-xs text-[#7b8474]">
                {item.queue_status} · {item.reason_code} · {item.entity_type}
              </p>
              <p className="mt-1 text-sm">{JSON.stringify(item.payload)}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button type="button" onClick={() => handleReview(item.id, "accept")}>
                  Accept
                </Button>
                <Button type="button" variant="outline" onClick={() => handleReview(item.id, "reject")}>
                  Reject
                </Button>
                <Button type="button" variant="ghost" onClick={() => handleReview(item.id, "unresolved")}>
                  Unresolved
                </Button>
              </div>
            </article>
          ))}
          {reviewItems.length === 0 ? <p className="text-sm text-[#5c6754]">暂无审核项。</p> : null}
        </section>
      ) : null}

      {tab === "estimate" ? (
        <section className="mt-6 space-y-4">
          <Button type="button" onClick={handleEstimate} disabled={Boolean(busy)}>
            生成 / 刷新报价版本
          </Button>
          {project.estimate ? (
            <>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <Stat label="Expected" value={nzdExact(project.estimate.expected_total)} />
                <Stat
                  label="Range"
                  value={`${nzdExact(project.estimate.range_low)} – ${nzdExact(project.estimate.range_high)}`}
                />
                <Stat label="Scope" value={`${Math.round(project.estimate.scope_completeness * 100)}%`} />
                <Stat label="Pricing" value={`${Math.round(project.estimate.pricing_completeness * 100)}%`} />
              </div>
              <p className="text-sm text-[#5c6754]">
                Reliability {project.estimate.reliability} · 绑定图纸集 v{project.estimate.document_set_version} · 价表{" "}
                {project.estimate.pricebook_version}
              </p>
              <table className="w-full min-w-[40rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-[#eee6d8] text-xs text-[#7b8474]">
                    <th className="py-2 pr-3">分项</th>
                    <th className="py-2 pr-3">金额</th>
                    <th className="py-2 pr-3">状态</th>
                    <th className="py-2 pr-3">费率来源</th>
                  </tr>
                </thead>
                <tbody>
                  {(project.estimate.quote_lines || []).map((line) => (
                    <tr key={line.id} className="border-b border-[#f3eee4]">
                      <td className="py-2 pr-3">{line.description}</td>
                      <td className="py-2 pr-3">{nzdExact(line.amount_incl_gst)}</td>
                      <td className="py-2 pr-3">{line.status}</td>
                      <td className="py-2 pr-3 text-xs">
                        {line.payload?.source_url ? (
                          <a href={line.payload.source_url} className="underline">
                            {line.payload.source_name || line.rate_id}
                          </a>
                        ) : (
                          line.rate_id || "无费率"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-[#9a6b12]">{project.estimate.payload?.note}</p>
            </>
          ) : (
            <p className="text-sm text-[#5c6754]">处理图纸后再生成报价。缺图与无价科目不会进入确定总价。</p>
          )}
        </section>
      ) : null}

      {tab === "history" ? (
        <section className="mt-6 space-y-4">
          <h3 className="font-medium">报价版本</h3>
          <ul className="text-sm">
            {(project.estimate_versions || []).map((item) => (
              <li key={item.id}>
                v{item.version} · 图纸集 {item.document_set_version} · {nzdExact(item.expected_total)} · {item.created_at}
              </li>
            ))}
          </ul>
          <h3 className="font-medium">修正记录（只追加）</h3>
          <ul className="text-sm">
            {(correctionEvents || []).map((item) => (
              <li key={item.id} className="border-b border-[#f3eee4] py-2">
                {item.created_at} · {item.entity_type}.{item.field_name} · {item.reason_code}
                <pre className="mt-1 whitespace-pre-wrap text-xs text-[#5c6754]">
                  {item.original_value} → {item.corrected_value}
                </pre>
              </li>
            ))}
          </ul>
          {correctionEvents.length === 0 ? <p className="text-sm text-[#5c6754]">还没有人工修正。</p> : null}
        </section>
      ) : null}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#d9d0c0] bg-[#fffaf3] p-4">
      <p className="text-xs text-[#7b8474]">{label}</p>
      <p className="mt-1 font-medium">{value}</p>
    </div>
  );
}
