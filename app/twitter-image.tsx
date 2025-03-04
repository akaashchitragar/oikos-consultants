import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const dynamic = 'force-static'

export const alt = 'Oikos Consultants - Environmental Solutions'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #A8C6A1 0%, #4CAF50 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '60px',
              color: '#1A1C1B',
              marginBottom: '20px',
              fontWeight: 'bold',
            }}
          >
            Oikos Consultants
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#2C302E',
              maxWidth: '800px',
            }}
          >
            Sustainable Solutions for a Better Tomorrow
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 