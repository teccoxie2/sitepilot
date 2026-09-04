"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { EstimatorSummary } from "@/lib/estimator";

export default function EstimatorHome() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [projects, setProjects] = useState<EstimatorSummary[]>([]);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const load = () => {
    fetch("/engine/estimator/projects", { cache: "no-store" })
      .then(async (response) => {
        const payload = await response.json();
        if (!response.ok) throw new Error(payload?.detail || "无法列出 Estimator 项目");
        setProjects(payload.projects || []);
      })
      .catch((caught: unknown) => {
        setError(caught instanceof Error ? caught.message : "无法列出 Estimator 项目");
      });
  };

  useEffect(() => {
    load();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/engine/estimator/projects", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name: name.trim(), address: address.trim() || null }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.detail || "无法创建项目");
      window.location.href = `/estimator/${payload.id}`;
    } catch (caught: unknown) {
      setError(caught instanceof Error ? caught.message : "无法创建项目");
      setBusy(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <p className="text-sm tracking-[0.18em] text-[#7a5a2b]">ESTIMATOR V2</p>
      <h1 className="mt-2 text-3xl font-semibold">图纸取量工作区</h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#5c6754]">
        上传建筑图 / 结构图。系统先做预检、分页和 Manifest；数量必须能回到原图证据，金额只走价表。无文字层且未配置视觉密钥时，不编造图号。V1
        选址核算仍在首页。
      </p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-3 rounded-2xl border border-[#d9d0c0] bg-[#fffaf3] p-5">
        <label className="block text-sm">
          项目名称
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="mt-1 h-11 w-full rounded-xl border border-[#d9d0c0] bg-white px-3"
            aria-label="项目名称"
          />
        </label>
        <label className="block text-sm">
          地址（可选，不替代议会选址）
          <input
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            className="mt-1 h-11 w-full rounded-xl border border-[#d9d0c0] bg-white px-3"
            aria-label="地址"
          />
        </label>
        <Button type="submit" disabled={busy || !name.trim()}>
          {busy ? "正在创建…" : "创建工作区"}
        </Button>
        {error ? (
          <p className="text-sm text-[#8a3b1d]" role="alert">
            {error}
          </p>
        ) : null}
      </form>
      <section className="mt-10">
        <h2 className="text-lg font-semibold">本机工作区</h2>
        {projects.length === 0 ? (
          <p className="mt-2 text-sm text-[#5c6754]">还没有 Estimator 项目。</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {projects.map((project) => (
              <li key={project.id}>
                <Link href={`/estimator/${project.id}`} className="block rounded-xl border border-[#d9d0c0] bg-white px-4 py-3 hover:border-[#2f4a32]">
                  <p className="font-medium">{project.name}</p>
                  <p className="text-xs text-[#7b8474]">
                    {project.status} · {project.address || "未填地址"}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
