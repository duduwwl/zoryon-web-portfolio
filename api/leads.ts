import type { IncomingMessage, ServerResponse } from 'node:http';
import { neon } from '@neondatabase/serverless';
import { createRemoteJWKSet, jwtVerify } from 'jose';
import { validateLead } from '../lib/validate-lead';

const jwks = createRemoteJWKSet(new URL('https://firebaseappcheck.googleapis.com/v1/jwks'));
const projectNumber = '477059621908';
const appId = '1:477059621908:web:327603e0cf4485c2083301';

type RequestWithBody = IncomingMessage & { body?: unknown };

async function readBody(request: RequestWithBody) {
  if (request.body !== undefined) return JSON.stringify(request.body);
  let body = '';
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 4096) return '';
  }
  return body;
}

export default async function handler(request: RequestWithBody, response: ServerResponse) {
  if (request.method !== 'POST') {
    response.writeHead(405, { Allow: 'POST' }).end();
    return;
  }
  if (!process.env.DATABASE_URL) {
    response.writeHead(503).end('Banco não configurado.');
    return;
  }
  if (!request.headers['content-type']?.startsWith('application/json')) {
    response.writeHead(415).end('Formato inválido.');
    return;
  }

  const token = request.headers['x-firebase-appcheck'];
  if (typeof token !== 'string') {
    response.writeHead(401).end('Acesso negado.');
    return;
  }
  try {
    const { payload, protectedHeader } = await jwtVerify(token, jwks, {
      algorithms: ['RS256'],
      issuer: `https://firebaseappcheck.googleapis.com/${projectNumber}`,
      audience: `projects/${projectNumber}`,
    });
    if (protectedHeader.typ !== 'JWT' || payload.sub !== appId) throw new Error('Token inválido.');
  } catch {
    response.writeHead(401).end('Acesso negado.');
    return;
  }

  let lead: ReturnType<typeof validateLead>;
  try {
    const body = await readBody(request);
    lead = body.length <= 4096 ? validateLead(JSON.parse(body)) : null;
  } catch {
    lead = null;
  }
  if (!lead) {
    response.writeHead(400).end('Dados inválidos.');
    return;
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    await sql`
      INSERT INTO public.leads (name, business, need, message, project_title, source, consent_at)
      VALUES (${lead.name}, ${lead.business}, ${lead.need}, ${lead.message},
              ${lead.projectTitle}, ${lead.source}, now())
    `;
    response.writeHead(204).end();
  } catch (error) {
    console.error('Falha ao registrar contato no banco.', error);
    response.writeHead(500).end('Não foi possível registrar o contato.');
  }
}
