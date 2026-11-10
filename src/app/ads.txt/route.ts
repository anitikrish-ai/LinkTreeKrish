import { NextResponse } from 'next/server';
import { adsenseConfig } from '@/config/adsense';

export async function GET() {
  const { domain, publisherId, relationship, certificationAuthorityId } = adsenseConfig.adsTxt;

  // Strict sanitization: alphanumeric and hyphen only to prevent CRLF injection
  const sanitize = (str: string) => str.replace(/[^a-zA-Z0-9.-]/g, '');

  const safeDomain = sanitize(domain);
  const safePublisherId = sanitize(publisherId);
  const safeRelationship = relationship === 'RESELLER' ? 'RESELLER' : 'DIRECT';
  const safeAuthorityId = sanitize(certificationAuthorityId);

  const content = `${safeDomain}, ${safePublisherId}, ${safeRelationship}, ${safeAuthorityId}\n`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
