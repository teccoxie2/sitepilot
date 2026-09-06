const MAX_PDF_BYTES = 15 * 1024 * 1024;
const DEFAULT_CHUNK_BYTES = 3_500_000;

export interface UploadPdfsInput {
  files: File[];
  kinds: string[];
  directUrl: string;
  completeUrl: string;
  extraFields?: Record<string, string>;
  fileField?: "files" | "file";
  onNote?: (note: string) => void;
}

function engineDetail(data: unknown, fallback: string): string {
  if (!data || typeof data !== "object") return fallback;
  const detail = (data as { detail?: unknown; error?: { message?: string } }).detail;
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail)) {
    const parts = detail.map((item) => {
      if (typeof item === "string") return item;
      if (item && typeof item === "object" && "msg" in item) return String((item as { msg: string }).msg);
      return "";
    });
    const joined = parts.filter(Boolean).join("；");
    if (joined) return joined;
  }
  if (detail && typeof detail === "object") {
    const record = detail as { error?: { message?: string }; message?: string };
    if (record.error?.message) return record.error.message;
    if (record.message) return record.message;
  }
  const message = (data as { error?: { message?: string } }).error?.message;
  return message || fallback;
}

export async function readEngineJson(response: Response, fallback: string): Promise<Record<string, unknown>> {
  const text = await response.text();
  if (response.status === 413 || /request entity too large|function_payload_too_large/i.test(text)) {
    throw new Error("这份 PDF 超过平台单次请求上限。请重新上传，系统会按约 3.5MB 自动分片。");
  }
  if (!text.trim()) {
    if (!response.ok) throw new Error(fallback);
    return {};
  }
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(fallback);
  }
  if (!response.ok) throw new Error(engineDetail(data, fallback));
  return data && typeof data === "object" ? (data as Record<string, unknown>) : {};
}

function assertPdfFiles(files: File[]): void {
  if (!files.length) throw new Error("请至少上传一份 PDF。");
  if (files.length > 6) throw new Error("一次最多上传 6 份 PDF");
  for (const file of files) {
    if (!file.name.toLowerCase().endsWith(".pdf")) throw new Error(`${file.name} 不是 PDF`);
    if (file.size <= 0) throw new Error(`${file.name} 是空文件`);
    if (file.size > MAX_PDF_BYTES) throw new Error(`${file.name} 超过 15MB`);
  }
}

export async function uploadPdfsToEngine(input: UploadPdfsInput): Promise<Record<string, unknown>> {
  const files = input.files;
  assertPdfFiles(files);
  const total = files.reduce((sum, file) => sum + file.size, 0);
  const useChunks = total > DEFAULT_CHUNK_BYTES || files.some((file) => file.size > DEFAULT_CHUNK_BYTES);
  const fileField = input.fileField || "files";
  if (!useChunks) {
    const body = new FormData();
    if (fileField === "file") body.append("file", files[0]);
    else for (const file of files) body.append("files", file);
    if (input.kinds.length) body.append("kinds", input.kinds.join(","));
    for (const [key, value] of Object.entries(input.extraFields || {})) body.append(key, value);
    const response = await fetch(input.directUrl, { method: "POST", body, cache: "no-store" });
    return readEngineJson(response, "上传失败");
  }
  input.onNote?.("文件较大，正在分片上传（绕过平台 4.5MB 单次限制）…");
  const created = (await readEngineJson(
    await fetch("/engine/uploads/sessions", { method: "POST", cache: "no-store" }),
    "无法创建上传会话",
  )) as { session_id?: string; chunk_bytes?: number };
  const sessionId = String(created.session_id || "");
  if (!sessionId) throw new Error("无法创建上传会话");
  const chunkBytes = Number(created.chunk_bytes) > 0 ? Number(created.chunk_bytes) : DEFAULT_CHUNK_BYTES;
  try {
    for (let fileIndex = 0; fileIndex < files.length; fileIndex += 1) {
      const file = files[fileIndex];
      const chunkCount = Math.max(1, Math.ceil(file.size / chunkBytes));
      for (let chunkIndex = 0; chunkIndex < chunkCount; chunkIndex += 1) {
        input.onNote?.(`正在上传 ${file.name}（${chunkIndex + 1}/${chunkCount}）…`);
        const blob = file.slice(chunkIndex * chunkBytes, Math.min(file.size, (chunkIndex + 1) * chunkBytes));
        const part = new FormData();
        part.append("file_index", String(fileIndex));
        part.append("chunk_index", String(chunkIndex));
        part.append("chunk_count", String(chunkCount));
        part.append("filename", file.name);
        part.append("kind", input.kinds[fileIndex] || "");
        part.append("chunk", blob, file.name);
        await readEngineJson(
          await fetch(`/engine/uploads/sessions/${encodeURIComponent(sessionId)}/chunks`, {
            method: "PUT",
            body: part,
            cache: "no-store",
          }),
          "分片上传失败",
        );
      }
    }
    const complete = new FormData();
    complete.append("session_id", sessionId);
    if (input.kinds.length) complete.append("kinds", input.kinds.join(","));
    for (const [key, value] of Object.entries(input.extraFields || {})) complete.append(key, value);
    const response = await fetch(input.completeUrl, { method: "POST", body: complete, cache: "no-store" });
    return readEngineJson(response, "上传失败");
  } catch (caught) {
    await fetch(`/engine/uploads/sessions/${encodeURIComponent(sessionId)}`, { method: "DELETE", cache: "no-store" }).catch(
      () => undefined,
    );
    throw caught;
  }
}
