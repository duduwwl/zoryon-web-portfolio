import type { PortfolioProject } from '../lib/portfolio';

export const whatsappUrl = `https://wa.me/5535984259797?text=${encodeURIComponent('Olá! Vim pelo site da Zoryon Web e quero conversar sobre um projeto.')}`;

export function SiteHeader({ active }: { active: 'home' | 'projects' }) {
  return (
    <header className="zw-header">
      <a className="zw-brand" href="/" aria-label="Zoryon Web, página inicial">
        <img src="/brand/zoryon.webp" alt="" width="38" height="38" />
        <span>
          Zoryon <b>Web</b>
        </span>
      </a>
      <nav className="zw-nav" aria-label="Navegação principal">
        <a href="/" aria-current={active === 'home' ? 'page' : undefined}>
          Início
        </a>
        <a
          href="/projetos"
          aria-current={active === 'projects' ? 'page' : undefined}
        >
          Projetos
        </a>
      </nav>
      <a
        className="zw-header-cta"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Solicitar orçamento
      </a>
      <details className="zw-mobile-menu">
        <summary aria-label="Abrir menu">
          <span></span>
          <span></span>
          <span></span>
        </summary>
        <nav aria-label="Navegação para celular">
          <a href="/">Início</a>
          <a href="/projetos">Projetos</a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Solicitar orçamento
          </a>
        </nav>
      </details>
    </header>
  );
}

export function PortfolioImage({
  project,
  priority = false,
}: {
  project: PortfolioProject;
  priority?: boolean;
}) {
  return (
    <img
      src={project.image}
      alt={project.alt}
      width="1279"
      height="920"
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      style={{ objectPosition: project.imagePosition || 'top center' }}
    />
  );
}

export function SiteFooter() {
  return (
    <footer className="zw-footer">
      <a href="/" className="zw-footer-brand">
        Zoryon Web<span>Sites com identidade própria.</span>
      </a>
      <nav aria-label="Navegação do rodapé">
        <a href="/">Início</a>
        <a href="/projetos">Projetos</a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Solicitar orçamento
        </a>
      </nav>
      <span className="zw-footer-local">Lavras/MG · Atendimento remoto</span>
    </footer>
  );
}
