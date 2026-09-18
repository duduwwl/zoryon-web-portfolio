import { readFile } from 'node:fs/promises';

const projectId = process.env.FIREBASE_PROJECT_ID || 'zoryon-web-portfolio';
const seed = JSON.parse(await readFile(new URL('../firebase/seed.json', import.meta.url), 'utf8'));
const timestamp = new Date().toISOString();

function assertUnique(items, key, label) {
  const values = items.map((item) => item[key]);
  if (values.some((value) => typeof value !== 'string' || !value.trim())) {
    throw new Error(`${label}: ${key} deve ser um texto não vazio.`);
  }
  if (new Set(values).size !== values.length) {
    throw new Error(`${label}: há valores duplicados em ${key}.`);
  }
}

assertUnique(seed.siteSettings, 'id', 'siteSettings');
assertUnique(seed.services, 'id', 'services');
assertUnique(seed.projects, 'slug', 'projects');
for (const project of seed.projects) {
  assertUnique(project.pages, 'slug', `projects/${project.slug}/pages`);
  if (!project.pages.some((page) => page.slug === 'inicio')) {
    throw new Error(`projects/${project.slug}: falta a página inicial.`);
  }
}

function value(input) {
  if (input === null) return { nullValue: null };
  if (Array.isArray(input)) return { arrayValue: { values: input.map(value) } };
  if (typeof input === 'boolean') return { booleanValue: input };
  if (Number.isInteger(input)) return { integerValue: String(input) };
  if (typeof input === 'number') return { doubleValue: input };
  if (typeof input === 'object') return { mapValue: { fields: fields(input) } };
  return { stringValue: String(input) };
}

function fields(input) {
  return Object.fromEntries(Object.entries(input).map(([key, item]) => [key, value(item)]));
}

function document(path, data) {
  return {
    update: {
      name: `projects/${projectId}/databases/(default)/documents/${path}`,
      fields: {
        ...fields(data),
        updatedAt: { timestampValue: timestamp },
      },
    },
  };
}

const writes = [
  document('_meta/schema', {
    schemaVersion: seed.schemaVersion,
    collections: ['siteSettings', 'services', 'projects', 'leads', 'users', 'auditLogs'],
    region: 'southamerica-east1',
  }),
  ...seed.siteSettings.map(({ id, ...data }) => document(`siteSettings/${id}`, data)),
  ...seed.services.map(({ id, ...data }) => document(`services/${id}`, data)),
  ...seed.projects.flatMap(({ pages, ...project }) => [
    document(`projects/${project.slug}`, {
      ...project,
      availableDevices: ['desktop', 'tablet', 'mobile'],
      pageCount: pages.length,
    }),
    ...pages.map((page, order) => document(`projects/${project.slug}/pages/${page.slug}`, {
      ...page,
      order: order + 1,
      status: 'published',
      route: page.slug === 'inicio' ? `/projetos/${project.slug}` : `/projetos/${project.slug}/${page.slug}`,
    })),
  ]),
];

console.log(`Carga preparada: ${writes.length} documentos para ${projectId}.`);
if (!process.argv.includes('--apply')) {
  console.log('Simulação concluída. Nenhum dado foi alterado. Use --apply somente após revisar o destino e ter um backup.');
  process.exit(0);
}

const accessToken = process.env.GOOGLE_OAUTH_ACCESS_TOKEN;
if (!accessToken) throw new Error('Defina GOOGLE_OAUTH_ACCESS_TOKEN antes de aplicar a carga.');

const response = await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents:batchWrite`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ writes }),
});

if (!response.ok) throw new Error(`Falha na carga do Firestore: HTTP ${response.status} ${await response.text()}`);
const result = await response.json();
const failures = (result.status || []).filter((status) => status.code && status.code !== 0);
if (failures.length) throw new Error(`A carga terminou com ${failures.length} falhas.`);

console.log(`Firestore organizado: ${writes.length} documentos gravados no projeto ${projectId}.`);
