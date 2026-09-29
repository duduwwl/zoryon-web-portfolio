import {
  PortfolioImage,
  SiteFooter,
  SiteHeader,
  whatsappUrl,
} from '../components/ZoryonSite';
import { projects } from '../lib/portfolio';

const selected = [projects[0], projects[1], projects[3], projects[5]];
const services = [
  {
    title: 'Sites institucionais',
    text: 'Para apresentar sua empresa, seus serviços e o jeito como você trabalha — com um endereço próprio, além das redes sociais.',
  },
  {
    title: 'Landing pages',
    text: 'Uma página com foco claro: explicar uma oferta, responder dúvidas e conduzir o visitante ao contato.',
  },
  {
    title: 'Lojas virtuais',
    text: 'Coleções, produtos e caminhos de compra organizados para que encontrar e escolher seja simples.',
  },
  {
    title: 'Catálogos e experiências digitais',
    text: 'Quando um catálogo comum não basta, desenhamos uma forma melhor de explorar o que sua marca oferece.',
  },
];
const process = [
  {
    title: 'Entendemos o negócio',
    text: 'Antes de abrir o editor, entendemos o que a empresa vende, para quem e qual papel o site precisa cumprir.',
  },
  {
    title: 'Definimos a experiência',
    text: 'Organizamos conteúdo, hierarquia e os caminhos que o visitante deve percorrer.',
  },
  {
    title: 'Criamos',
    text: 'Design e desenvolvimento nascem do projeto, não de uma troca de logo e cores em um template.',
  },
  {
    title: 'Ajustamos juntos',
    text: 'Apresentamos, ouvimos, revisamos e refinamos o que precisa melhorar.',
  },
  {
    title: 'Colocamos no ar',
    text: 'Depois das validações finais, cuidamos da publicação e das configurações necessárias.',
  },
];

export default function Home() {
  return (
    <main className="zw-site">
      <SiteHeader active="home" />
      <section className="zw-hero" id="inicio" aria-labelledby="hero-title">
        <div className="zw-hero-copy">
          <span className="zw-eyebrow">Sites feitos para ter identidade</span>
          <h1 id="hero-title">
            Seu site não precisa parecer com <em>todos os outros.</em>
          </h1>
          <p>
            A Zoryon Web cria sites profissionais a partir do que torna cada
            negócio diferente. O resultado é uma presença digital que faz
            sentido para sua marca — e para quem chega até ela.
          </p>
          <div className="zw-actions">
            <a className="zw-button" href="/projetos">
              Conhecer projetos
            </a>
            <a
              className="zw-text-link"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Conversar sobre meu site
            </a>
          </div>
        </div>
        <div
          className="zw-hero-work"
          aria-label="Recortes de projetos da Zoryon Web"
        >
          <a
            className="zw-hero-shot zw-hero-shot-a"
            href="/projetos/aurele"
            aria-label="Explorar Auréle, projeto conceitual"
          >
            <PortfolioImage project={projects[3]} priority />
          </a>
          <a
            className="zw-hero-shot zw-hero-shot-b"
            href="/projetos/casa-dos-fios"
            aria-label="Explorar Mundix Aviamentos, projeto real"
          >
            <PortfolioImage project={projects[1]} priority />
          </a>
          <span className="zw-hero-work-caption">
            Do universo de uma marca à tela de quem a encontra.
          </span>
        </div>
        <a className="zw-scroll-note" href="#trabalhos">
          Veja o trabalho
        </a>
      </section>

      <section
        className="zw-work-intro"
        id="trabalhos"
        aria-labelledby="work-title"
      >
        <div className="zw-section-top">
          <span className="zw-eyebrow">Uma amostra do que fazemos</span>
          <a className="zw-inline-link" href="/projetos">
            Todo o portfólio
          </a>
        </div>
        <h2 id="work-title">
          Cada tela conta uma história diferente.{' '}
          <span>É assim que deve ser.</span>
        </h2>
      </section>
      <section
        className="zw-selected"
        id="projetos"
        aria-label="Projetos selecionados"
      >
        {selected.map((project, index) => (
          <article
            className={`zw-feature zw-feature-${index}`}
            key={project.slug}
          >
            <a
              href={`/projetos/${project.slug}`}
              className="zw-feature-image"
              aria-label={`Visualizar ${project.title}`}
            >
              <PortfolioImage project={project} />
            </a>
            <div className="zw-feature-info">
              <div>
                <span className="zw-project-type">{project.type}</span>
                <span className="zw-status">{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.context}</p>
              <a className="zw-inline-link" href={`/projetos/${project.slug}`}>
                Visualizar projeto
              </a>
            </div>
          </article>
        ))}
        <a className="zw-all-projects" href="/projetos">
          <span>Ver todos os projetos</span>
        </a>
      </section>

      <section
        className="zw-services"
        id="servicos"
        aria-labelledby="services-title"
      >
        <div className="zw-services-lead">
          <span className="zw-eyebrow">O que podemos construir</span>
          <h2 id="services-title">
            O formato certo depende do que o site precisa fazer.
          </h2>
          <p>
            Atendemos empresas em Lavras/MG e também desenvolvemos projetos à
            distância.
          </p>
        </div>
        <div className="zw-service-list">
          {services.map((service) => (
            <article key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="zw-philosophy" aria-labelledby="philosophy-title">
        <span className="zw-eyebrow">O ponto de partida</span>
        <h2 id="philosophy-title">Não começamos pelo template.</h2>
        <div>
          <p>
            Começamos pela empresa, pelo público e pelo conteúdo. Só depois
            decidimos como a página deve se comportar, onde a atenção precisa
            estar e o que deve acontecer no próximo clique.
          </p>
          <p>
            Isso muda o trabalho: em vez de encaixar uma marca em um layout
            pronto, construímos uma experiência que pertence a ela.
          </p>
        </div>
      </section>
      <section className="zw-process" aria-labelledby="process-title">
        <div className="zw-process-heading">
          <span className="zw-eyebrow">Como o trabalho acontece</span>
          <h2 id="process-title">Da primeira conversa ao site no ar.</h2>
        </div>
        <div className="zw-process-steps">
          {process.map((step) => (
            <article key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        className="zw-contact"
        id="contato"
        aria-labelledby="contact-title"
      >
        <span className="zw-eyebrow">Vamos conversar</span>
        <h2 id="contact-title">
          Seu próximo site começa com uma conversa sobre o seu negócio.
        </h2>
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
