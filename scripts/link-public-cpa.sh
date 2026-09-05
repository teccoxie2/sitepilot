#!/usr/bin/env bash
set -euo pipefail

# Probe a public CPA /v1 and write CPA_BASE_URL, CPA_API_KEY, and CPA_GATE_TOKEN
# to the existing Vercel project, then redeploy. Does not invent a URL or a key.
#
# Usage:
#   CPA_BASE_URL=https://your-tunnel.example \
#   CPA_API_KEY='client-key' \
#   CPA_GATE_TOKEN='gate-token' \
#   ./scripts/link-public-cpa.sh

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ -z "${CPA_BASE_URL:-}" ]]; then
  echo "缺少 CPA_BASE_URL。填公网 HTTPS 源站（可带 /v1 或管理页路径），不要填 192.168.52.81。" >&2
  exit 1
fi
if [[ -z "${CPA_API_KEY:-}" ]]; then
  echo "缺少 CPA_API_KEY。使用 CPA 管理页里的客户端密钥，不要用管理页登录密码。" >&2
  exit 1
fi
if [[ -z "${CPA_GATE_TOKEN:-}" ]]; then
  echo "缺少 CPA_GATE_TOKEN。公网入口只接受带 X-CPA-Gate 的请求；用 openssl rand -hex 32 生成，不要用管理页密码。" >&2
  exit 1
fi

raw="${CPA_BASE_URL}"
raw="${raw%%/management.html*}"
raw="${raw%/chat/completions}"
raw="${raw%/}"
if [[ "${raw}" != */v1 ]]; then
  raw="${raw}/v1"
fi

tmp="$(mktemp)"
trap 'rm -f "$tmp"' EXIT
set +e
http_code="$(curl -sS -m 20 -o "$tmp" -w '%{http_code}' \
  -H "Authorization: Bearer ${CPA_API_KEY}" \
  -H "X-CPA-Gate: ${CPA_GATE_TOKEN}" \
  -H "Accept: application/json" \
  "${raw}/models")"
curl_status=$?
set -e
if [[ "$curl_status" -ne 0 ]]; then
  echo "公网还打不到 ${raw}/models（curl 退出 ${curl_status}）。先把 192.168.52.81:8317 暴露为 HTTPS 再跑本脚本。" >&2
  exit 1
fi
if [[ "$http_code" == "401" || "$http_code" == "403" ]]; then
  echo "已连上 ${raw}，但被拒绝（HTTP ${http_code}）。请核对 CPA_GATE_TOKEN 与 CPA 客户端密钥；不要用管理页密码。" >&2
  exit 1
fi
if [[ "$http_code" != "200" ]]; then
  echo "已连上 ${raw}/models，但 HTTP ${http_code}，未写入 Vercel，也未编造模型列表。" >&2
  head -c 400 "$tmp" >&2 || true
  echo >&2
  exit 1
fi

echo "已从 ${raw}/models 读到 CPA 模型列表，写入现有 Vercel 项目环境变量。"
npx vercel env add CPA_BASE_URL production --scope xentechs-projects --yes --force --no-sensitive --value "$raw"
npx vercel env add CPA_API_KEY production --scope xentechs-projects --yes --force --sensitive --value "$CPA_API_KEY"
npx vercel env add CPA_GATE_TOKEN production --scope xentechs-projects --yes --force --sensitive --value "$CPA_GATE_TOKEN"
npx vercel env add CPA_BASE_URL preview --scope xentechs-projects --yes --force --no-sensitive --value "$raw"
npx vercel env add CPA_API_KEY preview --scope xentechs-projects --yes --force --sensitive --value "$CPA_API_KEY"
npx vercel env add CPA_GATE_TOKEN preview --scope xentechs-projects --yes --force --sensitive --value "$CPA_GATE_TOKEN"
if [[ -n "${CF_ACCESS_CLIENT_ID:-}" && -n "${CF_ACCESS_CLIENT_SECRET:-}" ]]; then
  npx vercel env add CF_ACCESS_CLIENT_ID production --scope xentechs-projects --yes --force --sensitive --value "$CF_ACCESS_CLIENT_ID"
  npx vercel env add CF_ACCESS_CLIENT_SECRET production --scope xentechs-projects --yes --force --sensitive --value "$CF_ACCESS_CLIENT_SECRET"
  npx vercel env add CF_ACCESS_CLIENT_ID preview --scope xentechs-projects --yes --force --sensitive --value "$CF_ACCESS_CLIENT_ID"
  npx vercel env add CF_ACCESS_CLIENT_SECRET preview --scope xentechs-projects --yes --force --sensitive --value "$CF_ACCESS_CLIENT_SECRET"
fi

echo "重新发布，让 engine 容器读到新变量。"
npx vercel deploy --prod --yes --scope xentechs-projects

echo "检查 https://demo-cost.vsense.co.nz/engine/drawings/verify/ready"
curl -sS -m 30 "https://demo-cost.vsense.co.nz/engine/drawings/verify/ready"
echo
