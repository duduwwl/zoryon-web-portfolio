import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, MapPin, MessageCircle, Phone } from 'lucide-react';
import { demoProjects, getDemoProject } from '@/lib/demo-projects';

type DemoPageProps = {
  params: Promise<{ slug: string; page?: string[] }>;
};

const whatsapp = 'https://wa.me/5535984259797';

function demoHref(projectSlug: string, pageSlug: string) {
  return pageSlug === 'inicio' ? `/projetos/${projectSlug}` : `/projetos/${projectSlug}/${pageSlug}`;
}

export async function generateMetadata({ params }: DemoPageProps): Promise<Metadata> {
  const { slug, page } = await params;
  const project = getDemoProject(slug);
  if (!project) return { title: 'Projeto não encontrado' };

  const current = project.navigation.find((item) => item.slug === (page?.[0] ?? 'inicio'));
  const title = `${current?.label ?? 'Início'} — ${project.title}`;
  const description = `${project.description} Demonstração criada pela Zoryon Web.`;

  return {
    title,
    description,
    openGraph: { title, description, images: [] },
    twitter: { title, description, images: [] },
  };
}

export function generateStaticParams() {
  return demoProjects.flatMap((project) => [
    { slug: project.slug, page: undefined },
    ...project.navigation.filter((item) => item.slug !== 'inicio').map((item) => ({ slug: project.slug, page: [item.slug] })),
  ]);
}

function DemoHome({ project }: { project: NonNullable<ReturnType<typeof getDemoProject>> }) {
  return (
    <>
      <section className="demo-hero">
        <div className="demo-hero-copy">
          <span className="demo-kicker">{project.heroKicker}</span>
          <h1>{project.tagline}</h1>
          <p>{project.description}</p>
          <div className="demo-hero-actions">
            <a className="demo-primary" href={demoHref(project.slug, project.navigation[1].slug)}>{project.primaryAction} <ArrowRight size={17} /></a>
            <a className="demo-secondary" href={demoHref(project.slug, project.navigation[2].slug)}>Conheça a experiência</a>
          </div>
        </div>
        <div className="demo-art" aria-hidden="true">
          <span className="demo-art-word">{project.visualWord}</span>
          <div className="demo-art-frame"><i /><i /><i /></div>
          <span className="demo-art-index">01 / 04</span>
        </div>
      </section>

      <section className="demo-intro-grid">
        <span>O cuidado está<br />nos detalhes.</span>
        <div>
          <h2>{project.storyTitle}</h2>
          <p>{project.story}</p>
          <a href={demoHref(project.slug, project.navigation[1].slug)}>Explorar {project.navigation[1].label.toLowerCase()} <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="demo-home-offers">
        {project.offers.slice(0, 3).map((offer, index) => (
          <article key={offer.title}><span>0{index + 1}</span><h3>{offer.title}</h3><p>{offer.description}</p><strong>{offer.price}</strong></article>
        ))}
      </section>
    </>
  );
}

function DemoOffers({ project }: { project: NonNullable<ReturnType<typeof getDemoProject>> }) {
  return (
    <section className="demo-inner-page">
      <div className="demo-page-heading"><span>Escolha sua experiência</span><h1>{project.navigation[1].label}</h1><p>Uma seleção organizada para encontrar exatamente o que você procura, com informações claras e atendimento direto.</p></div>
      <div className="demo-offer-grid">
        {project.offers.map((offer, index) => (
          <article key={offer.title}>
            <div className="demo-offer-art"><span>0{index + 1}</span></div>
            <div><h2>{offer.title}</h2><p>{offer.description}</p><strong>{offer.price}</strong></div>
            <a href={`${whatsapp}?text=${encodeURIComponent(`Olá! Quero saber mais sobre ${offer.title} no projeto ${project.title}.`)}`} target="_blank" rel="noreferrer" aria-label={`Consultar ${offer.title}`}><ArrowUpRight /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function DemoStory({ project }: { project: NonNullable<ReturnType<typeof getDemoProject>> }) {
  return (
    <section className="demo-inner-page demo-story-page">
      <div className="demo-page-heading"><span>Mais do que aparência</span><h1>{project.navigation[2].label}</h1></div>
      <div className="demo-story-layout">
        <div className="demo-story-visual"><span>{project.visualWord}</span><i /></div>
        <div className="demo-story-copy">
          <h2>{project.storyTitle}</h2><p>{project.story}</p>
          <ul>{project.highlights.map((item) => <li key={item}><Check size={16} /> {item}</li>)}</ul>
        </div>
      </div>
      <div className="demo-stats">{project.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
    </section>
  );
}

function DemoContact({ project }: { project: NonNullable<ReturnType<typeof getDemoProject>> }) {
  const message = encodeURIComponent(`Olá, Zoryon Web! Gostei da demonstração ${project.title} e quero um site nessa direção.`);
  return (
    <section className="demo-inner-page demo-contact-page">
      <div className="demo-contact-copy">
        <span>Vamos conversar</span><h1>{project.contactPrompt}</h1><p>Esta é uma demonstração de contato. Ao continuar, você fala diretamente com a Zoryon Web sobre um projeto inspirado neste estilo.</p>
        <a className="demo-primary" href={`${whatsapp}?text=${message}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Falar no WhatsApp <ArrowUpRight size={17} /></a>
      </div>
      <div className="demo-contact-card">
        <div><MapPin /><span><small>Atendimento</small>Lavras · Minas Gerais</span></div>
        <div><Phone /><span><small>Telefone e WhatsApp</small>(35) 98425-9797</span></div>
        <div className="demo-contact-note">Projeto demonstrativo desenvolvido pela <strong>Zoryon Web</strong>.</div>
      </div>
    </section>
  );
}

export default async function DemoProjectPage({ params }: DemoPageProps) {
  const { slug, page } = await params;
  const project = getDemoProject(slug);
  if (!project) return <main className="demo-not-found"><h1>Projeto não encontrado.</h1><a href="/#projetos">Voltar ao portfólio</a></main>;

  const activePage = page?.[0] ?? 'inicio';
  const validPage = project.navigation.some((item) => item.slug === activePage) ? activePage : 'inicio';
  const vars = {
    '--demo-canvas': project.theme.canvas,
    '--demo-surface': project.theme.surface,
    '--demo-text': project.theme.text,
    '--demo-muted': project.theme.muted,
    '--demo-accent': project.theme.accent,
    '--demo-accent-2': project.theme.accent2,
  } as CSSProperties;

  return (
    <main className="demo-shell" data-demo={project.slug} style={vars}>
      <aside className="demo-toolbar">
        <a href="/#projetos"><ArrowLeft size={15} /> Voltar ao portfólio</a>
        <span>Projeto navegável · Zoryon Web</span>
        <a href={`${whatsapp}?text=${encodeURIComponent(`Olá, Zoryon Web! Quero um site inspirado no projeto ${project.title}.`)}`} target="_blank" rel="noreferrer">Quero este estilo <ArrowUpRight size={14} /></a>
      </aside>

      <header className="demo-header">
        <a className="demo-brand" href={demoHref(project.slug, 'inicio')}><b>{project.mark}</b><span>{project.title}<small>{project.category}</small></span></a>
        <nav aria-label={`Navegação de ${project.title}`}>
          {project.navigation.map((item) => <a key={item.slug} className={validPage === item.slug ? 'active' : ''} href={demoHref(project.slug, item.slug)}>{item.label}</a>)}
        </nav>
        <span className="demo-location">{project.location}</span>
      </header>

      {validPage === 'inicio' && <DemoHome project={project} />}
      {validPage === project.navigation[1].slug && <DemoOffers project={project} />}
      {validPage === project.navigation[2].slug && <DemoStory project={project} />}
      {validPage === project.navigation[3].slug && <DemoContact project={project} />}

      <footer className="demo-footer"><span>{project.title} · Projeto demonstrativo</span><span>Concebido por Zoryon Web · Lavras MG</span></footer>
    </main>
  );
}
