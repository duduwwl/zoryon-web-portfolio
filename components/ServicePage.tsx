import type { Metadata } from 'next';
import { ArrowRight, ArrowUpRight, Check, MessageCircle } from 'lucide-react';
import { SiteFooter, SiteHeader } from './ZoryonSite';

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
  projectLinks: { href: string; label: string; status: 'Projeto real' | 'Projeto conceitual' }[];
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
      images: [{ url: `${origin}/og.png`, width: 1672, height: 941, alt: 'Zoryon Web — criação de sites profissionais.' }],
    },
    twitter: { card: 'summary_large_image', title: data.title, description: data.description, images: [`${origin}/og.png`] },
  };
}

function structuredData(data: ServicePageData) {
  const url = `${origin}${data.path}`;
  const breadcrumbItems = [
    { '@type': 'ListItem', position: 1, name: 'Início', item: `${origin}/` },
    ...(data.breadcrumbParent ? [{ '@type': 'ListItem', position: 2, name: data.breadcrumbParent.label, item: `${origin}${data.breadcrumbParent.href}` }] : []),
    { '@type': 'ListItem', position: data.breadcrumbParent ? 3 : 2, name: data.heading, item: url },
  ];
  const graph: object[] = [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: data.title, description: data.description, inLanguage: 'pt-BR', isPartOf: { '@id': `${origin}/#website` }, breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#service` } },
    { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: breadcrumbItems },
    { '@type': 'Service', '@id': `${url}#service`, name: data.heading, serviceType: data.heading, description: data.description, url, provider: { '@id': `${origin}/#organization` }, areaServed: data.areaServed === 'Lavras, MG' ? { '@type': 'City', name: 'Lavras', containedInPlace: { '@type': 'State', name: 'Minas Gerais' } } : { '@type': 'Country', name: 'Brasil' } },
  ];
  if (data.faq) graph.push({ '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: data.faq.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) });
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}

export default function ServicePage({ data }: { data: ServicePageData }) {
  const whatsapp = `https://wa.me/5535984259797?text=${encodeURIComponent(data.ctaMessage)}`;
  return (
    <main className="zw-site wm-site wm-service-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData(data) }} />
      <SiteHeader active="service" />
      <div className="wm-service-hero">
        <div className="wm-dot-grid" aria-hidden="true" />
        <nav className="wm-breadcrumb" aria-label="Você está aqui">
          <a href="/">Início</a><span aria-hidden="true">/</span>
          {data.breadcrumbParent && <><a href={data.breadcrumbParent.href}>{data.breadcrumbParent.label}</a><span aria-hidden="true">/</span></>}
          <span aria-current="page">{data.heading}</span>
        </nav>
        <div className="wm-service-hero-grid">
          <div><span className="wm-badge">{data.eyebrow}</span><h1>{data.heading}</h1></div>
          <div className="wm-service-hero-aside"><p>{data.lead}</p><a className="wm-button wm-button-primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Conversar sobre o projeto <ArrowUpRight size={17} aria-hidden="true" /></a><small>Lavras/MG · Atendimento remoto</small></div>
        </div>
      </div>

      <section className="wm-section wm-service-intro" aria-labelledby="wm-service-intro-title">
        <span className="wm-eyebrow">01 / VISÃO GERAL</span>
        <div><h2 id="wm-service-intro-title">{data.introHeading}</h2>{data.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>

      <section className="wm-section wm-service-highlights" aria-labelledby="wm-service-highlights-title">
        <div className="wm-section-heading"><span className="wm-eyebrow">02 / O QUE FAZ PARTE</span><h2 id="wm-service-highlights-title">Estrutura pensada para o seu negócio.</h2></div>
        <div className="wm-service-grid">{data.highlights.map((item, index) => <article className="wm-service-card" key={item.title}><span className="wm-corner wm-corner-tl" aria-hidden="true" /><span className="wm-corner wm-corner-tr" aria-hidden="true" /><span className="wm-corner wm-corner-bl" aria-hidden="true" /><span className="wm-corner wm-corner-br" aria-hidden="true" /><div className="wm-service-top"><Check size={25} strokeWidth={1.5} aria-hidden="true" /><span>{String(index + 1).padStart(2, '0')}</span></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section className="wm-section wm-service-process" aria-labelledby="wm-service-process-title">
        <div className="wm-section-heading"><span className="wm-eyebrow">03 / PROCESSO</span><h2 id="wm-service-process-title">{data.processHeading}</h2></div>
        <ol className="wm-service-steps">{data.process.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.text}</p><ArrowRight size={18} aria-hidden="true" /></li>)}</ol>
      </section>

      <section className="wm-section wm-service-audience" aria-labelledby="wm-service-audience-title"><span className="wm-eyebrow">04 / APLICAÇÕES</span><div><h2 id="wm-service-audience-title">{data.audienceHeading}</h2><p>{data.audience}</p></div></section>

      {data.faq && <section className="wm-section wm-service-faq" aria-labelledby="wm-service-faq-title"><div className="wm-section-heading"><span className="wm-eyebrow">05 / PERGUNTAS FREQUENTES</span><h2 id="wm-service-faq-title">Dúvidas antes de começar?</h2></div><div>{data.faq.map(({ question, answer }) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></section>}

      <section className="wm-section wm-service-related" aria-labelledby="wm-service-related-title"><div className="wm-section-heading"><span className="wm-eyebrow">EXPLORE MAIS</span><h2 id="wm-service-related-title">Encontre o formato certo para você.</h2></div><div className="wm-service-related-grid">{data.related.map((item) => <a key={item.href} href={item.href}><span>{item.label}<ArrowUpRight size={18} aria-hidden="true" /></span><p>{item.text}</p></a>)}</div><div className="wm-service-project-links"><p>Veja exemplos no <a href="/projetos">portfólio</a>:</p>{data.projectLinks.map((project) => <a key={project.href} href={project.href}>{project.label}<small>{project.status}</small><ArrowUpRight size={15} aria-hidden="true" /></a>)}</div></section>

      <section className="wm-contact" aria-labelledby="wm-service-contact-title"><div className="wm-dot-grid" aria-hidden="true" /><div><span className="wm-eyebrow">VAMOS COMEÇAR</span><h2 id="wm-service-contact-title">Vamos criar um site à altura da sua marca?</h2><p>Conte o que você imagina. Vamos encontrar juntos o formato certo para seu projeto.</p><a className="wm-button wm-button-primary" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden="true" /> Pedir orçamento pelo WhatsApp <ArrowUpRight size={17} aria-hidden="true" /></a></div></section>
      <SiteFooter />
    </main>
  );
}
