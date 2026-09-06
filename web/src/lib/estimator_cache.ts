import type { EstimatorProject, EstimatorSummary } from "@/lib/estimator";

const META_KEY = "auckland-estimator-workspaces-v1";
const DB_NAME = "auckland-estimator";
const STORE = "originals";

export interface EstimatorMeta {
  id: string;
  name: string;
  address: string;
  created_at: string;
  status: string;
}

export interface StoredOriginal {
  filename: string;
  kind: string;
  mime: string;
  bytes: ArrayBuffer;
}

export interface StoredWorkspace {
  projectId: string;
  name: string;
  address: string;
  originals: StoredOriginal[];
  project: EstimatorProject | null;
}

function asMeta(row: unknown): EstimatorMeta | null {
  if (!row || typeof row !== "object") return null;
  const item = row as Record<string, unknown>;
  if (typeof item.id !== "string" || !item.id) return null;
  return {
    id: item.id,
    name: typeof item.name === "string" && item.name.trim() ? item.name : "未命名图纸项目",
    address: typeof item.address === "string" ? item.address : "",
    created_at: typeof item.created_at === "string" ? item.created_at : "",
    status: typeof item.status === "string" ? item.status : "UPLOADED",
  };
}

export function listEstimatorMetas(): EstimatorMeta[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(META_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.map(asMeta).filter((item): item is EstimatorMeta => Boolean(item));
  } catch {
    return [];
  }
}

export function readEstimatorMeta(projectId: string): EstimatorMeta | null {
  return listEstimatorMetas().find((item) => item.id === projectId) || null;
}

export function rememberEstimatorMeta(input: {
  id: string;
  name?: string | null;
  address?: string | null;
  created_at?: string | null;
  status?: string | null;
}): void {
  if (typeof window === "undefined") return;
  const current = readEstimatorMeta(input.id);
  const next: EstimatorMeta = {
    id: input.id,
    name: (input.name || current?.name || "").trim() || "未命名图纸项目",
    address: (input.address || current?.address || "").trim(),
    created_at: input.created_at || current?.created_at || new Date().toISOString(),
    status: input.status || current?.status || "UPLOADED",
  };
  const rows = [next, ...listEstimatorMetas().filter((item) => item.id !== input.id)].slice(0, 30);
  window.localStorage.setItem(META_KEY, JSON.stringify(rows));
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE, { keyPath: "projectId" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("无法打开本机图纸库"));
  });
}

export async function loadStoredWorkspace(projectId: string): Promise<StoredWorkspace | null> {
  if (typeof window === "undefined" || !window.indexedDB) return null;
  try {
    const db = await openDb();
    try {
      const row = await new Promise<StoredWorkspace | null>((resolve, reject) => {
        const request = db.transaction(STORE, "readonly").objectStore(STORE).get(projectId);
        request.onsuccess = () => resolve((request.result as StoredWorkspace | undefined) || null);
        request.onerror = () => reject(request.error || new Error("无法读取本机原件"));
      });
      return row;
    } finally {
      db.close();
    }
  } catch {
    return null;
  }
}

export async function saveStoredWorkspace(input: {
  projectId: string;
  name: string;
  address: string;
  originals?: StoredOriginal[];
  project?: EstimatorProject | null;
}): Promise<void> {
  if (typeof window === "undefined" || !window.indexedDB) return;
  const existing = await loadStoredWorkspace(input.projectId);
  const record: StoredWorkspace = {
    projectId: input.projectId,
    name: input.name || existing?.name || "未命名图纸项目",
    address: input.address || existing?.address || "",
    originals: input.originals || existing?.originals || [],
    project: input.project === undefined ? existing?.project || null : input.project,
  };
  rememberEstimatorMeta({
    id: input.projectId,
    name: record.name,
    address: record.address,
    created_at: record.project?.created_at,
    status: record.project?.status,
  });
  try {
    const db = await openDb();
    try {
      await new Promise<void>((resolve, reject) => {
        const request = db.transaction(STORE, "readwrite").objectStore(STORE).put(record);
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error || new Error("无法保存本机原件"));
      });
    } finally {
      db.close();
    }
  } catch {
    rememberEstimatorMeta({
      id: input.projectId,
      name: record.name,
      address: record.address,
      status: record.project?.status,
    });
  }
}

export async function originalsFromFiles(files: File[], kinds: string[]): Promise<StoredOriginal[]> {
  const rows: StoredOriginal[] = [];
  for (let index = 0; index < files.length; index += 1) {
    const file = files[index];
    rows.push({
      filename: file.name,
      kind: kinds[index] || "UNKNOWN",
      mime: file.type || "application/pdf",
      bytes: await file.arrayBuffer(),
    });
  }
  return rows;
}

export function filesFromOriginals(originals: StoredOriginal[]): { files: File[]; kinds: string[] } {
  const files = originals.map(
    (item) => new File([item.bytes], item.filename, { type: item.mime || "application/pdf" }),
  );
  return { files, kinds: originals.map((item) => item.kind || "UNKNOWN") };
}

export function metaToSummary(item: EstimatorMeta): EstimatorSummary {
  return {
    id: item.id,
    name: item.name,
    address: item.address || null,
    created_at: item.created_at,
    status: item.status,
    document_set_version: 0,
  };
}
