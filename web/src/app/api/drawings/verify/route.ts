import { NextRequest } from "next/server";

const ENGINE_URL = process.env.ENGINE_URL || "http://127.0.0.1:8764";

export const maxDuration = 180;
export const runtime = "nodejs";

function engineError(message: string, status = 502) {
  return new Response(JSON.stringify({ detail: message }), {
    status,
    headers: { "content-type": "application/json" },
  });
}

export async function POST(request: NextRequest) {
  let body: FormData;
  try {
    body = await request.formData();
  } catch {
    return engineError("无法读取上传的 PDF，请确认单份不超过 15MB 后重试。", 400);
  }
  try {
    const response = await fetch(`${ENGINE_URL}/drawings/verify`, {
      method: "POST",
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(30_000),
    });
    const text = await response.text();
    return new Response(text, {
      status: response.status,
      headers: { "content-type": response.headers.get("content-type") || "application/json" },
    });
  } catch (caught) {
    const name = caught instanceof Error ? caught.name : "";
    if (name === "TimeoutError" || name === "AbortError") {
      return engineError("核算服务接收图纸超时，请稍后重试。", 504);
    }
    return engineError("无法连上核算服务，请稍后重试。", 502);
  }
}
