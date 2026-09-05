# 把局域网 CPA 暴露给 Vercel（不用 Fly），带白名单门禁

核算台生产环境在 Vercel，访问不到 `192.168.52.81:8317`。在**能访问该地址**的电脑上跑 Cloudflare Tunnel。公网流量先经过本目录的 **gate**：

1. **路径白名单**：只转发 `/v1`，`/management.html` 不暴露
2. **门禁令牌**：请求必须带 `X-CPA-Gate`，与 `.env` 里的 `CPA_GATE_TOKEN` 一致
3. **可选 IP/CIDR 白名单**：`allowlist.txt` 里有生效行时，只放行这些 `Cf-Connecting-IP`

Vercel 函数出口 IP 不固定，生产请靠门禁令牌，不要编造一份「Vercel IP 列表」。`CPA_API_KEY` 仍是 CPA 客户端密钥，不是管理页登录密码。

## 启动

```bash
cd cpa-tunnel
cp cloudflared.env.example .env
# CPA_GATE_TOKEN=$(openssl rand -hex 32)  写入 .env，不要提交
docker compose -f docker-compose.cloudflared.yml --env-file .env up --build
```

日志里会出现 `https://….trycloudflare.com`。无令牌或访问管理页会失败。

需要按办公室出口 IP 收紧时，把 CIDR 写入 `allowlist.txt` 后重启 gate。本机探测可加 `127.0.0.1`。

路由器端口映射 `182.48.141.208:38317` 若只能加 **一个** 白名单 IP，填核算台刚测到的出口：

`54.209.172.110`

来源：`https://demo-cost.vsense.co.nz/engine/runtime/egress`（api.ipify.org，2026-09-05）。加完后公网管理页从你家浏览器会打不开；管理请继续用局域网 `192.168.52.81:8317`。

## 固定主机名（Named Tunnel）

Zero Trust 源站填 **gate**，不要直连 8317：

- Compose 里跑 cloudflared：源站 `http://cpa-gate:8318`
- 宿主机跑 cloudflared：源站 `http://127.0.0.1:8318`

可选再给该主机名加 Cloudflare Access，只放行 Service Token；核算台会发送 `CF-Access-Client-Id` / `CF-Access-Client-Secret`。

```bash
docker compose -f docker-compose.cloudflared.yml -f docker-compose.cloudflared.named.yml --env-file .env up -d --build
```

## 接到核算台

当前演示也可以直连路由器映射的 CPA（不经过本目录 gate，IP 白名单之后再加）：

```bash
CPA_BASE_URL='http://182.48.141.208:38317/v1' \
CPA_API_KEY='客户端密钥' \
./scripts/link-public-cpa.sh
```

走本目录 gate 时再带上门禁：

```bash
CPA_BASE_URL='https://你的公网主机名' \
CPA_API_KEY='客户端密钥' \
CPA_GATE_TOKEN='与 .env 相同的门禁令牌' \
./scripts/link-public-cpa.sh
```

脚本会先请求公网 `/v1/models`；失败则退出，不会写入假地址。有 `CPA_GATE_TOKEN` 时才会写该变量并带 `X-CPA-Gate`。
