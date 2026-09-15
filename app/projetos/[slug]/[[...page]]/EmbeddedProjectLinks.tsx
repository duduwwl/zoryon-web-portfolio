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
      if (url.origin !== window.location.origin || !url.pathname.startsWith('/projetos/')) return;
      event.preventDefault();
      url.searchParams.set('embed', '1');
      window.location.assign(url.toString());
    };
    document.addEventListener('click', preserveFrame);
    return () => document.removeEventListener('click', preserveFrame);
  }, []);
  return null;
}
