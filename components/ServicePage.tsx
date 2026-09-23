import type { Metadata } from 'next';
import { ArrowRight, ArrowUpRight, Check, MessageCircle } from 'lucide-react';

const origin = 'https://zoryonweb.com.br';

export type ServicePageData = {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  lead: string;
  introHeading: string;
  intro: string[];
  highlights: { title: string; text: string }[];
  processHeading: string;
  process: { title: string; text: string }[];
  audienceHeading: string;
  audience: string;
  related: { href: string; label: string; text: string }[];
  projectLinks: { href: string; label: string; status: 'Projeto real' | 'Projeto fictício' }[];
  faq?: { question: string; answer: string }[];
  breadcrumbParent?: { href: string; label: string };
  areaServed?: 'Brasil' | 'Lavras, MG';
  ctaMessage: string;
};

export function serviceMetadata(data: ServicePageData): Metadata {
  const url = `${origin}${data.path}`;
  return {
    title: data.title,
    description: data.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: data.title,
      description: data.description,
      url,
      siteName: 'Zoryon Web',
      locale: 'pt_BR',
      type: 'website',
      images: [],
    },
    twitter: {
      card: 'summary',
      title: data.title,
      description: data.description,
      images: [],
    },
  };
}

function structuredData(data: ServicePageData) {
  const url = `${origin}${data.path}`;
  const items = [
    { '@type': 'ListItem', position: 1, name: 'Início', item: `${origin}/` },
    ...(data.breadcrumbParent ? [{ '@type': 'ListItem', position: 2, name: data.breadcrumbParent.label, item: `${origin}${data.breadcrumbParent.href}` }] : []),
    { '@type': 'ListItem', position: data.breadcrumbParent ? 3 : 2, name: data.heading, item: url },
  ];
  const graph: object[] = [
    {
      '@type': 'WebPage', '@id': `${url}#webpage`, url, name: data.title,
      description: data.description, inLanguage: 'pt-BR',
      isPartOf: { '@id': `${origin}/#website` },
      breadcrumb: { '@id': `${url}#breadcrumb` },
      mainEntity: { '@id': `${url}#service` },
    },
    { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: items },
    {
      '@type': 'Service', '@id': `${url}#service`, name: data.heading,
      serviceType: data.heading, description: data.description, url,
      provider: { '@id': `${origin}/#organization` },
      areaServed: data.areaServed === 'Lavras, MG'
        ? { '@type': 'City', name: 'Lavras', containedInPlace: { '@type': 'State', name: 'Minas Gerais' } }
        : { '@type': 'Country', name: 'Brasil' },
    },
  ];
  if (data.faq) {
    graph.push({
      '@type': 'FAQPage', '@id': `${url}#faq`,
      mainEntity: data.faq.map(({ question, answer }) => ({
        '@type': 'Question', name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    });
  }
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}

export default function ServicePage({ data }: { data: ServicePageData }) {
  const whatsapp = `https://wa.me/5535984259797?text=${encodeURIComponent(data.ctaMessage)}`;
  return (
    <main className="service-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData(data) }} />
      <header className="service-header">
        <a className="brand" href="/" aria-label="Zoryon Web — página inicial">
          <img className="brand-logo" src="/brand/zoryon.webp" alt="" width={52} height={52} />
          <span>ZORYON <b>WEB</b></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="/criacao-de-sites">Criação de sites</a>
          <a href="/lojas-virtuais">Lojas virtuais</a>
          <a href="/landing-pages">Landing pages</a>
          <a href="/#projetos">Projetos</a>
        </nav>
        <a className="service-header-cta" href={whatsapp} target="_blank" rel="noopener noreferrer">Pedir orçamento <ArrowUpRight size={16} /></a>
      </header>

      <div className="service-hero">
        <nav className="service-breadcrumb" aria-label="Você está aqui">
          <a href="/">Início</a><span aria-hidden="true">/</span>
          {data.breadcrumbParent && <><a href={data.breadcrumbParent.href}>{data.breadcrumbParent.label}</a><span aria-hidden="true">/</span></>}
          <span aria-current="page">{data.heading}</span>
        </nav>
        <div className="service-hero-grid">
          <div>
            <p className="service-eyebrow">{data.eyebrow}</p>
            <h1>{data.heading}</h1>
          </div>
          <div className="service-hero-aside">
            <p>{data.lead}</p>
            <a className="service-button" href={whatsapp} target="_blank" rel="noopener noreferrer">Converse sobre seu projeto <ArrowRight size={17} /></a>
            <span>Atendimento em Lavras/MG e remoto</span>
          </div>
        </div>
      </div>

      <section className="service-section service-intro" aria-labelledby="service-intro-title">
        <p className="service-section-number">01 / Visão geral</p>
        <div>
          <h2 id="service-intro-title">{data.introHeading}</h2>
          {data.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="service-section service-highlights" aria-labelledby="service-highlights-title">
        <div className="service-section-heading">
          <p className="service-section-number">02 / O que faz parte</p>
          <h2 id="service-highlights-title">Estrutura pensada para o seu negócio.</h2>
        </div>
        <div className="service-highlight-grid">
          {data.highlights.map((item, index) => <article key={item.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>)}
        </div>
      </section>

      <section className="service-section service-process" aria-labelledby="service-process-title">
        <div>
          <p className="service-section-number">03 / Processo</p>
          <h2 id="service-process-title">{data.processHeading}</h2>
        </div>
        <ol>
          {data.process.map((step, index) => <li key={step.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div><h3>{step.title}</h3><p>{step.text}</p></div>
          </li>)}
        </ol>
      </section>

      <section className="service-section service-audience" aria-labelledby="service-audience-title">
        <p className="service-section-number">04 / Aplicações</p>
        <div><h2 id="service-audience-title">{data.audienceHeading}</h2><p>{data.audience}</p></div>
      </section>

      {data.faq && <section className="service-section service-faq" aria-labelledby="service-faq-title">
        <div><p className="service-section-number">05 / Perguntas frequentes</p><h2 id="service-faq-title">Dúvidas antes de começar?</h2></div>
        <div>{data.faq.map(({ question, answer }) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div>
      </section>}

      <section className="service-section service-related" aria-labelledby="service-related-title">
        <div><p className="service-section-number">Explore mais</p><h2 id="service-related-title">Encontre o formato certo para você.</h2></div>
        <div className="service-related-grid">
          {data.related.map((item) => <a key={item.href} href={item.href}>
            <span>{item.label}<ArrowUpRight size={18} /></span><p>{item.text}</p>
          </a>)}
        </div>
        <div className="service-project-links">
          <p>Veja exemplos no <a href="/#projetos">portfólio</a>:</p>
          {data.projectLinks.map((project) => <a key={project.href} href={project.href}>{project.label} <small>{project.status}</small><ArrowUpRight size={15} /></a>)}
        </div>
      </section>

      <section className="service-final-cta">
        <p className="service-section-number"><Check size={15} /> Seu próximo projeto</p>
        <h2>Vamos transformar sua ideia em um site à altura da sua marca?</h2>
        <a className="service-button" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> Pedir orçamento pelo WhatsApp <ArrowUpRight size={18} /></a>
      </section>
      <footer className="service-footer">
        <a className="brand" href="/"><img className="brand-logo" src="/brand/zoryon.webp" alt="" width={48} height={48} /><span>ZORYON <b>WEB</b></span></a>
        <nav aria-label="Navegação do rodapé"><a href="/">Início</a><a href="/#projetos">Projetos</a><a href="/criacao-de-sites-lavras">Lavras/MG</a></nav>
        <span>© 2026 Zoryon Web</span>
      </footer>
    </main>
  );
}
