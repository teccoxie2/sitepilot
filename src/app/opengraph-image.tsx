import { ImageResponse } from 'next/og'

export const alt = 'SitePilot — Independent digital infrastructure research'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#f8fafc',
          color: '#0f172a',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          padding: '72px',
          width: '100%',
        }}
      >
        <div style={{ color: '#2563eb', display: 'flex', fontSize: 30, fontWeight: 700 }}>
          SITEPILOT
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', fontSize: 68, fontWeight: 700, letterSpacing: '-0.04em' }}>
            Infrastructure decisions,
          </div>
          <div style={{ color: '#475569', display: 'flex', fontSize: 48 }}>
            backed by evidence.
          </div>
        </div>
        <div style={{ color: '#64748b', display: 'flex', fontSize: 28 }}>
          Hosting · website builders · proxy infrastructure · AI tools
        </div>
      </div>
    ),
    { ...size },
  )
}
