import { neon } from '@neondatabase/serverless';
import { createRemoteJWKSet, jwtVerify } from 'jose';
import { validateLead } from '../../../lib/validate-lead';

const jwks = createRemoteJWKSet(new URL('https://firebaseappcheck.googleapis.com/v1/jwks'));
const projectNumber = '477059621908';
const appId = '1:477059621908:web:327603e0cf4485c2083301';

export async function POST(request: Request) {
  if (!process.env.DATABASE_URL) return new Response('Banco não configurado.', { status: 503 });
  if (!request.headers.get('content-type')?.startsWith('application/json')) return new Response('Formato inválido.', { status: 415 });

  const token = request.headers.get('X-Firebase-AppCheck');
  if (!token) return new Response('Acesso negado.', { status: 401 });
  try {
    const { payload, protectedHeader } = await jwtVerify(token, jwks, {
      algorithms: ['RS256'],
      issuer: `https://firebaseappcheck.googleapis.com/${projectNumber}`,
      audience: `projects/${projectNumber}`,
    });
    if (protectedHeader.typ !== 'JWT' || payload.sub !== appId) return new Response('Acesso negado.', { status: 401 });
  } catch {
    return new Response('Acesso negado.', { status: 401 });
  }

  let lead: ReturnType<typeof validateLead>;
  try {
    const body = await request.text();
    lead = body.length <= 4096 ? validateLead(JSON.parse(body)) : null;
  } catch {
    lead = null;
  }
  if (!lead) return new Response('Dados inválidos.', { status: 400 });

  try {
    const sql = neon(process.env.DATABASE_URL);
    await sql`
      INSERT INTO public.leads (name, business, need, message, project_title, source, consent_at)
      VALUES (${lead.name}, ${lead.business}, ${lead.need}, ${lead.message},
              ${lead.projectTitle}, ${lead.source}, now())
    `;
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error('Falha ao registrar contato no banco.', error);
    return new Response('Não foi possível registrar o contato.', { status: 500 });
  }
}
