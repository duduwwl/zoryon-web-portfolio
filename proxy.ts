import { NextResponse } from 'next/server';
import { addSecurityHeaders } from './lib/security-headers';

export function proxy() {
  const response = NextResponse.next();
  addSecurityHeaders(response.headers);
  return response;
}

export const config = { matcher: '/:path*' };
