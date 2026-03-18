import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'PromptedCRE — Real Estate Intelligence for American Builders'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            background: '#ffffff',
            borderRadius: 20,
            marginBottom: 40,
          }}
        >
          <span style={{ fontSize: 64, fontWeight: 700, color: '#0a0a0a', lineHeight: 1 }}>
            P
          </span>
        </div>

        {/* Site name */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-1px',
            marginBottom: 16,
          }}
        >
          PromptedCRE
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: '#888888',
            fontWeight: 400,
            letterSpacing: '-0.5px',
          }}
        >
          Real Estate Intelligence for American Builders
        </div>
      </div>
    ),
    { ...size }
  )
}
