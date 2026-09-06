"use client";

import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import type { SchemeOption } from "@/lib/api";
import { readEngineJson } from "@/lib/engine_upload";

const GFA: Record<string, Record<string, number>> = {
  "1": { "2": 85, "3": 110, "4": 150, "5": 180 },
  "2": { "2": 110, "3": 165, "4": 220, "5": 260 },
  "3": { "2": 130, "3": 180, "4": 240, "5": 280 },
};

export default function SchemeConfig({
  projectId,
  option,
}: {
  projectId: string;
  option?: SchemeOption;
}) {
  const template = option?.template;
  const [kind, setKind] = useState(template?.kind || "standalone");
  const [dwellings, setDwellings] = useState(template?.dwellings || 1);
  const [storeys, setStoreys] = useState(template?.storeys || 1);
  const [bedrooms, setBedrooms] = useState(template?.bedrooms || 3);
  const [bathrooms, setBathrooms] = useState(template?.bathrooms ?? 2);
  const [kitchens, setKitchens] = useState(template?.kitchens ?? 1);
  const [gfa, setGfa] = useState(template?.gfa_m2 ?? 110);
  const [gfaTouched, setGfaTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const startLabel = useMemo(
    () => (option?.template.name_zh ? `以当前选中的「${option.template.name_zh}」为起点，改套数、层数、户型、厨房和卫生间。` : "改套数、层数、户型、厨房和卫生间。"),
    [option?.template.name_zh],
  );

  const handleStoreys = (value: number) => {
    setStoreys(value);
    if (!gfaTouched) setGfa(suggestGfa(bedrooms, value, dwellings));
  };
  const handleBedrooms = (value: number) => {
    setBedrooms(value);
    if (!gfaTouched) setGfa(suggestGfa(value, storeys, dwellings));
    setBathrooms((current) => Math.max(current, value >= 4 ? 3 : value >= 3 ? 2 : 1));
  };
  const handleDwellings = (value: number) => {
    setDwellings(value);
    setKitchens((current) => Math.max(current, value));
    if (!gfaTouched) setGfa(suggestGfa(bedrooms, storeys, value));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const response = await fetch(`/engine/projects/${encodeURIComponent(projectId)}/configure`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        cache: "no-store",
        body: JSON.stringify({
          kind,
          dwellings,
          storeys,
          bedrooms,
          bathrooms,
          kitchens,
          gfa_m2: gfa,
        }),
      });
      await readEngineJson(response, "选装核算失败");
      window.location.assign(`/projects/${encodeURIComponent(projectId)}?tab=cards#cost-ledger`);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "选装核算失败");
      setBusy(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-[#d9d0c0] bg-[#fffaf3] p-5 sm:p-6">
      <h3 className="text-base font-semibold">按你的需求选装</h3>
      <p className="mt-1 text-sm leading-6 text-[#5c6754]">
        {startLabel}
        核算仍用这块地已经读到的区划、面积和坡度。图纸方案改选装后会走户型模板，不再沿用图纸文字层。可先到「方案卡片」点选起点。
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Field label="形态">
          <select
            name="kind"
            value={kind}
            onChange={(event) => setKind(event.target.value)}
            className="h-11 w-full rounded-xl border border-[#cfc4b0] bg-white px-3"
            aria-label="形态"
            disabled={busy}
          >
            <option value="standalone">独栋</option>
            <option value="duplex">双拼</option>
            <option value="terrace">联排</option>
            <option value="minor_dwelling">主屋 + 独立住宅</option>
          </select>
        </Field>
        <NumberField label="套数" name="dwellings" value={dwellings} min={1} max={6} onChange={handleDwellings} disabled={busy} />
        <NumberField label="层数" name="storeys" value={storeys} min={1} max={5} onChange={handleStoreys} disabled={busy} />
        <NumberField label="每套卧室" name="bedrooms" value={bedrooms} min={1} max={6} onChange={handleBedrooms} disabled={busy} />
        <NumberField label="卫生间" name="bathrooms" value={bathrooms} min={1} max={6} onChange={setBathrooms} disabled={busy} />
        <NumberField label="厨房" name="kitchens" value={kitchens} min={1} max={4} onChange={setKitchens} disabled={busy} />
        <label className="flex flex-col gap-1 sm:col-span-2 lg:col-span-3">
          <span className="text-xs text-[#7b8474]">建筑面积 GFA（m²）</span>
          <input
            name="gfa_m2"
            type="number"
            min={60}
            max={450}
            step={5}
            value={gfa}
            disabled={busy}
            onChange={(event) => {
              setGfaTouched(true);
              setGfa(Number(event.target.value));
            }}
            className="h-11 rounded-xl border border-[#cfc4b0] bg-white px-3"
            aria-label="建筑面积"
          />
        </label>
      </div>
      <p className="mt-3 text-xs leading-5 text-[#7b8474]">
        未手改面积时，按初版规则：单层三房约 110 m²、二层三房 165 m²、二层四房 220 m²。厨房无公开总价，会按套数标缺价。
      </p>
      <div className="mt-4">
        <button
          type="submit"
          disabled={busy}
          aria-busy={busy}
          className="h-11 rounded-xl bg-[#2f4a32] px-5 text-sm font-medium text-white hover:bg-[#3f6b45] disabled:opacity-60"
        >
          {busy ? "正在按选装重新核算…" : "按选装生成这一版"}
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

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs text-[#7b8474]">{label}</span>
      {children}
    </label>
  );
}

function NumberField({
  label,
  name,
  value,
  min,
  max,
  onChange,
  disabled,
}: {
  label: string;
  name: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs text-[#7b8474]">{label}</span>
      <input
        name={name}
        type="number"
        min={min}
        max={max}
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-11 rounded-xl border border-[#cfc4b0] bg-white px-3"
        aria-label={label}
      />
    </label>
  );
}

function suggestGfa(bedrooms: number, storeys: number, dwellings: number) {
  const storeyKey = String(Math.min(Math.max(storeys, 1), 3));
  const bedKey = String(Math.min(Math.max(bedrooms, 2), 5));
  return (GFA[storeyKey]?.[bedKey] || 165) * Math.max(dwellings, 1);
}
