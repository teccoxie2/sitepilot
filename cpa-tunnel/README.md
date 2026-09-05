# 把局域网 CPA 暴露给 Vercel（不用 Fly）

核算台生产环境在 Vercel，访问不到 `192.168.52.81:8317`。在**能访问该地址**的电脑上跑 Cloudflare Tunnel，把 CPA 的 HTTP 变成公网 HTTPS，再写入现有 Vercel 项目的 `CPA_BASE_URL` / `CPA_API_KEY`。

`CPA_API_KEY` 必须是管理页里的**客户端密钥**，不是登录密码。

## 临时公网地址（Quick Tunnel）

```bash
cd cpa-tunnel
docker compose -f docker-compose.cloudflared.yml up
```

日志里会出现 `https://….trycloudflare.com`。容器重建后主机名会变。

## 固定主机名（Named Tunnel）

在 Cloudflare Zero Trust 建隧道，源站填 `http://192.168.52.81:8317`，公钥名例如在 Microsoft 365 DNS 增加 CNAME（不要改 nameserver）。然后：

```bash
cd cpa-tunnel
cp cloudflared.env.example .env
# 填 TUNNEL_TOKEN，不要提交 .env
docker compose -f docker-compose.cloudflared.yml -f docker-compose.cloudflared.named.yml --env-file .env up -d
```

## 接到核算台

```bash
CPA_BASE_URL='https://你的公网主机名' CPA_API_KEY='客户端密钥' ./scripts/link-public-cpa.sh
```

脚本会先请求公网 `/v1/models`；连不上或密钥被拒就退出，不会写入假地址或假密钥。
