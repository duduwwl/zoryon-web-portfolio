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
  const isStreetwear = project.slug === 'wl-streetwear';
  return (
    <span className={`zw-cover ${isStreetwear ? 'zw-cover-wl' : ''}`}>
      <span className="zw-cover-bar" aria-hidden="true">
        <span className="zw-cover-dots">
          <i />
          <i />
          <i />
        </span>
        <span>{project.title}</span>
        <span className="zw-cover-open">↗</span>
      </span>
      {isStreetwear ? (
        <span className="zw-wl-screen" role="img" aria-label={project.alt}>
          <span className="zw-wl-navigation">
            WL <small>STREETWEAR / EST. 2026</small>
            <b>COLEÇÃO&nbsp; +</b>
          </span>
          <span className="zw-wl-layout">
            <span className="zw-wl-copy">
              <small>WL / EDIÇÃO DE ESTREIA</small>
              <strong>
                STREETWEAR
                <br />
                COM <em>ASSINATURA.</em>
              </strong>
              <span>Peças de impacto. Gráficos autorais.</span>
            </span>
            <img
              src={project.image}
              alt=""
              width="960"
              height="960"
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={priority ? 'high' : 'auto'}
            />
          </span>
        </span>
      ) : (
        <img
          src={project.image}
          alt={project.alt}
          width="1279"
          height="920"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
        />
      )}
    </span>
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
