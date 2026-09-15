import { access, readFile, readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { basePath, routes } from './pages-manifest.mjs';

const outputDirectory = 'pages-dist';
const failures = [];

for (const route of routes) {
  const file = route === '/' ? join(outputDirectory, 'index.html') : join(outputDirectory, route.slice(1), 'index.html');
  try {
    const html = await readFile(file, 'utf8');
    if (!html.includes('<!DOCTYPE html>') && !html.includes('<!doctype html>')) failures.push(`${route}: HTML inválido`);
    if (html.includes('src="/_next/') || html.includes('href="/_next/')) failures.push(`${route}: ativo sem base path`);
    if (!html.includes(basePath)) failures.push(`${route}: base path ausente`);
  } catch {
    failures.push(`${route}: arquivo ausente`);
  }
}

for (const required of [
  '.nojekyll',
  '404.html',
  'originais/daniels-barber/index.html',
  'originais/wl-streetwear/index.html',
  'originais/casa-dos-fios/index.html',
  'originais/pizza-lavras/index.html',
  'originais/aurele/index.html',
  'originais/hamburgueria-do-gordao/index.html',
]) {
  try { await access(join(outputDirectory, required)); } catch { failures.push(`Arquivo obrigatório ausente: ${required}`); }
}

async function countFiles(directory) {
  let count = 0;
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    count += entry.isDirectory() ? await countFiles(join(directory, entry.name)) : 1;
  }
  return count;
}

const size = (await stat(outputDirectory)).isDirectory();
if (!size) failures.push('pages-dist não é um diretório');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`GitHub Pages verificado: ${routes.length} rotas e ${await countFiles(outputDirectory)} arquivos.`);
