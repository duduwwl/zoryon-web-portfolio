import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { dirname, extname, join } from 'node:path';
import { basePath, routes } from './pages-manifest.mjs';

const outputDirectory = 'pages-dist';
const clientDirectory = 'dist/client';
const workerModule = await import('../dist/server/index.js');
const worker = workerModule.default;

if (!worker?.fetch) throw new Error('O build do servidor não expôs um manipulador fetch.');

await rm(outputDirectory, { recursive: true, force: true });
await cp(clientDirectory, outputDirectory, { recursive: true });

for (const route of routes) {
  const response = await worker.fetch(new Request(`https://zoryon-export.local${route}`));
  if (!response.ok) throw new Error(`Falha ao renderizar ${route}: HTTP ${response.status}`);
  const html = await response.text();
  const destination = route === '/' ? join(outputDirectory, 'index.html') : join(outputDirectory, route.slice(1), 'index.html');
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, html, 'utf8');
}

const textExtensions = new Set(['.css', '.html', '.js', '.json', '.mjs', '.svg', '.txt', '.xml']);
const rootPrefixes = [
  '_next/',
  'brand/',
  'demos/',
  'fonts/',
  'originais/',
  'photos/',
  'project-previews/',
  'projetos/',
  'favicon.svg',
  'og.png',
  'photo-credits.html',
  '#',
];
const rootUrlPattern = new RegExp(`/(?=${rootPrefixes.map((value) => value.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')).join('|')})`, 'g');

async function rewriteDirectory(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const filePath = join(directory, entry.name);
    if (entry.isDirectory()) {
      await rewriteDirectory(filePath);
      continue;
    }
    if (!textExtensions.has(extname(entry.name))) continue;
    const original = await readFile(filePath, 'utf8');
    const rewritten = original.replace(rootUrlPattern, `${basePath}/`);
    if (rewritten !== original) await writeFile(filePath, rewritten, 'utf8');
  }
}

await rewriteDirectory(outputDirectory);
await writeFile(join(outputDirectory, '.nojekyll'), '', 'utf8');

const notFound = await readFile(join(outputDirectory, 'index.html'), 'utf8');
await writeFile(join(outputDirectory, '404.html'), notFound, 'utf8');

console.log(`GitHub Pages: ${routes.length} rotas renderizadas em ${outputDirectory}.`);
