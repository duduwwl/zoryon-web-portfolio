import { neon } from '@neondatabase/serverless';
import { projects, type PortfolioProject } from './portfolio';

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  if (!process.env.DATABASE_URL) return projects;

  try {
    const sql = neon(process.env.DATABASE_URL);
    const rows = await sql`
      SELECT slug, title, category, description, kind, cover_path, cover_alt,
             cover_position, external_url
      FROM public.portfolio_projects
      WHERE published = true
      ORDER BY display_order, slug
    `;

    return rows.map((row) => ({
      slug: String(row.slug),
      title: String(row.title),
      type: String(row.category),
      context: String(row.description),
      status: row.kind === 'real' ? 'Projeto real' : 'Projeto conceitual',
      image: String(row.cover_path),
      alt: String(row.cover_alt),
      imagePosition: row.cover_position ? String(row.cover_position) : undefined,
      externalUrl: row.external_url ? String(row.external_url) : undefined,
    }));
  } catch (error) {
    console.error('Falha ao consultar projetos no banco.', error);
    return projects;
  }
}
