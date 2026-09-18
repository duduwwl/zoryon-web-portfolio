import { NextResponse } from 'next/server';

// Keep this policy in sync with public/_headers for files served as static assets.
const securityHeaders = {
  'Content-Security-Policy': "base-uri 'self'; object-src 'none'; frame-ancestors 'self'",
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'X-Frame-Options': 'SAMEORIGIN',
  'Strict-Transport-Security': 'max-age=31536000',
};

export function proxy() {
  const response = NextResponse.next();
  for (const [name, value] of Object.entries(securityHeaders)) {
    response.headers.set(name, value);
  }
  return response;
}

export const config = { matcher: '/:path*' };
