const origin = 'https://zoryonweb.com.br';

const paths = [
  '/',
  '/projetos',
  '/projetos/wl-streetwear',
  '/projetos/casa-dos-fios',
  '/projetos/pizza-lavras',
  '/projetos/aurele',
  '/projetos/hamburgueria-do-gordao',
  '/projetos/serra-alta-imoveis',
  '/projetos/orale-odontologia',
] as const;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
  .map((path) => `  <url><loc>${origin}${path}</loc></url>`)
  .join('\n')}\n</urlset>\n`;

const headers = {
  'Content-Type': 'application/xml; charset=utf-8',
  'Cache-Control': 'public, max-age=300',
  'X-Content-Type-Options': 'nosniff',
};

export function GET() {
  return new Response(sitemap, { status: 200, headers });
}

export function HEAD() {
  return new Response(null, { status: 200, headers });
}
