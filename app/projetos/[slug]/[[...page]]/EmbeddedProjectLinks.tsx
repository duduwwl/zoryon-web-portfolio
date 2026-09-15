'use client';

import { useEffect } from 'react';

export default function EmbeddedProjectLinks() {
  useEffect(() => {
    if (window.self === window.top) return;
    const preserveFrame = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest('a');
      if (!link || link.target === '_blank') return;
      const url = new URL(link.href, window.location.href);
      const routeMarker = '/projetos/';
      const routeStart = url.pathname.indexOf(routeMarker);
      if (url.origin !== window.location.origin || routeStart < 0) return;
      const [projectSlug, requestedPage = 'inicio'] = url.pathname.slice(routeStart + routeMarker.length).split('/').filter(Boolean);
      if (!projectSlug || requestedPage === '_embed') return;
      event.preventDefault();
      url.pathname = `${url.pathname.slice(0, routeStart)}${routeMarker}${projectSlug}/_embed/${requestedPage}`;
      window.location.assign(url.toString());
    };
    document.addEventListener('click', preserveFrame);
    return () => document.removeEventListener('click', preserveFrame);
  }, []);
  return null;
}
