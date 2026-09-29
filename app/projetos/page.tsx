import type { Metadata } from 'next';
import {
  PortfolioImage,
  SiteFooter,
  SiteHeader,
  whatsappUrl,
} from '../../components/ZoryonSite';
import { projects } from '../../lib/portfolio';

export const metadata: Metadata = {
  title: 'Projetos | Zoryon Web',
  description:
    'Conheça sites, lojas virtuais e experiências digitais da Zoryon Web. Projetos reais e conceituais apresentados com transparência.',
  alternates: { canonical: 'https://zoryonweb.com.br/projetos' },
  openGraph: {
    title: 'Projetos | Zoryon Web',
    description:
      'Uma seleção de sites e experiências digitais criados pela Zoryon Web.',
    url: 'https://zoryonweb.com.br/projetos',
  },
};

export default function ProjectsPage() {
  return (
    <main className="zw-site zw-projects-page">
      <SiteHeader active="projects" />
      <header className="zw-projects-hero">
        <span className="zw-eyebrow">
          Trabalho publicado e projetos de conceito
        </span>
        <h1>
          Sites para olhar <em>de perto.</em>
        </h1>
        <p>
          O jeito mais direto de entender o que fazemos é entrar nos projetos.
          Cada um parte de um contexto, de uma identidade e de uma escolha de
          navegação diferente.
        </p>
      </header>
      <section className="zw-portfolio" aria-label="Portfólio da Zoryon Web">
        {projects.map((project, index) => (
          <article
            className={`zw-portfolio-item zw-portfolio-item-${index}`}
            key={project.slug}
          >
            <a
              className="zw-portfolio-image"
              href={`/projetos/${project.slug}`}
              aria-label={`Visualizar ${project.title}`}
            >
              <PortfolioImage project={project} priority={index === 0} />
            </a>
            <div className="zw-portfolio-copy">
              <div className="zw-portfolio-meta">
                <span>{project.type}</span>
                <span>{project.status}</span>
              </div>
              <h2>{project.title}</h2>
              <p>{project.context}</p>
              <a className="zw-inline-link" href={`/projetos/${project.slug}`}>
                Visualizar projeto
              </a>
            </div>
          </article>
        ))}
      </section>
      <section className="zw-contact zw-projects-contact">
        <span className="zw-eyebrow">O seu pode ser o próximo</span>
        <h2>Tem uma ideia para um site com a sua cara?</h2>
        <a
          className="zw-button zw-button-light"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Conversar sobre meu projeto
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}
