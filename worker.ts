import handler from 'vinext/server/fetch-handler';
import { addSecurityHeaders } from './lib/security-headers';

type SiteEnv = { ASSETS: { fetch(request: Request): Promise<Response> } };

const worker = {
  async fetch(request: Request, env: SiteEnv, context: ExecutionContext) {
    const url = new URL(request.url);
    if (url.hostname === 'www.zoryonweb.com.br') {
      url.hostname = 'zoryonweb.com.br';
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 308);
    }
    const path = url.pathname;
    if (path.startsWith('/originais/') || path === '/photo-credits' || path === '/photo-credits.html') {
      const asset = await env.ASSETS.fetch(request);
      const headers = new Headers(asset.headers);
      addSecurityHeaders(headers);
      if (headers.get('content-type')?.includes('text/html')) {
        headers.set('X-Robots-Tag', 'noindex, follow');
      }
      return new Response(asset.body, { status: asset.status, statusText: asset.statusText, headers });
    }
    return handler.fetch(request, env, context);
  },
};

export default worker;
