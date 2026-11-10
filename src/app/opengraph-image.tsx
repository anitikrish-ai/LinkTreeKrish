import { ImageResponse } from 'next/og';
import { profileConfig } from '@/config/profile';

export const alt = `${profileConfig.name} (${profileConfig.username}) — ${profileConfig.headline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0C0C0E',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle graphite frame border */}
        <div
          style={{
            position: 'absolute',
            inset: 24,
            borderRadius: 28,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
          }}
        />

        {/* Monogram Badge */}
        <div
          style={{
            width: 110,
            height: 110,
            borderRadius: 26,
            backgroundColor: '#16161A',
            border: '2px solid rgba(109, 159, 234, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 54,
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: 20,
          }}
        >
          K
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 54,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: '#FFFFFF',
            marginBottom: 6,
          }}
        >
          {profileConfig.name}
        </div>

        {/* Username */}
        <div
          style={{
            fontSize: 20,
            fontFamily: 'monospace',
            color: '#6D9FEA',
            marginBottom: 16,
            backgroundColor: '#161618',
            padding: '6px 16px',
            borderRadius: 8,
            border: '1px solid #28282D',
          }}
        >
          {profileConfig.username}
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 26,
            color: '#F5F5F7',
            fontWeight: 600,
            letterSpacing: '-0.01em',
            marginBottom: 12,
          }}
        >
          {profileConfig.headline}
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 18,
            color: '#8E8E93',
            fontWeight: 400,
            maxWidth: 800,
            textAlign: 'center',
            lineHeight: 1.4,
          }}
        >
          {profileConfig.tagline}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
