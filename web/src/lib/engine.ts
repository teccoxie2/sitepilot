import type { ConfigureSpec, ProjectRecord } from "./api";
import { readEngineJson } from "./engine_upload";

const ENGINE_URL = process.env.ENGINE_URL || "http://127.0.0.1:8764";

export async function getProject(id: string): Promise<ProjectRecord | null> {
  const response = await fetch(`${ENGINE_URL}/projects/${id}`, { cache: "no-store" });
  if (response.status === 404) return null;
  return (await readEngineJson(response, "无法读取项目")) as unknown as ProjectRecord;
}

export async function postProject(input: {
  address: string;
  lat: number;
  lon: number;
  full_address?: string;
  sap_address_id?: string | null;
  sap_site_id?: string | null;
}): Promise<ProjectRecord> {
  const response = await fetch(`${ENGINE_URL}/projects`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  return (await readEngineJson(response, "核算失败")) as unknown as ProjectRecord;
}

export async function configureProject(projectId: string, spec: ConfigureSpec): Promise<ProjectRecord> {
  const response = await fetch(`${ENGINE_URL}/projects/${projectId}/configure`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(spec),
  });
  return (await readEngineJson(response, "选装核算失败")) as unknown as ProjectRecord;
}

export async function uploadDrawings(projectId: string, formData: FormData): Promise<ProjectRecord> {
  const response = await fetch(`${ENGINE_URL}/projects/${projectId}/drawings`, {
    method: "POST",
    body: formData,
  });
  return (await readEngineJson(response, "图纸核算失败")) as unknown as ProjectRecord;
}

export async function uploadLim(projectId: string, formData: FormData): Promise<ProjectRecord> {
  const response = await fetch(`${ENGINE_URL}/projects/${projectId}/lim`, {
    method: "POST",
    body: formData,
  });
  return (await readEngineJson(response, "LIM 读取失败")) as unknown as ProjectRecord;
}
