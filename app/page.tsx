'use client';

import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  AtSign,
  Bot,
  Car,
  Check,
  Cloud,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  UtensilsCrossed,
  X,
} from 'lucide-react';
import { productDemos } from '@/lib/product-demos';

type Project = {
  number: string;
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  categories: string[];
  tags: string[];
  theme: string;
  status: 'Projeto real' | 'Projeto fictício';
  url: string;
  miniTitle: string;
  miniSubtitle: string;
  button: string;
  productType?: 'Sites' | 'Apps' | 'SaaS';
};

const siteProjects: Project[] = [
  {
    number: '01', slug: 'daniels-barber', title: 'Daniel’s Barber', eyebrow: 'Identidade & presença local',
    description: 'Uma experiência digital precisa e elegante para uma barbearia de Lavras, com serviços, personalidade e agendamento em primeiro plano.',
    categories: ['Serviços'], tags: ['Barbearia', 'Agendamento', 'Lavras'], theme: 'barber', status: 'Projeto real',
    url: 'danielsbarber.com.br', miniTitle: 'SEU ESTILO.\nNOSSA ASSINATURA.', miniSubtitle: 'BARBEARIA · LAVRAS MG', button: 'Agendar horário',
  },
  {
    number: '02', slug: 'casa-dos-fios', title: 'Mundix Aviamentos', eyebrow: 'Catálogo & e-commerce',
    description: 'Loja digital completa para linhas e fios, com catálogo organizado por cores, variações visuais e uma jornada de compra simples.',
    categories: ['E-commerce'], tags: ['Catálogo', 'Variações', 'Loja online'], theme: 'yarn', status: 'Projeto real',
    url: 'mundix.com.br', miniTitle: 'CORES QUE\nINSPIRAM.', miniSubtitle: 'FIOS · LINHAS · CRIATIVIDADE', button: 'Ver coleção',
  },
  {
    number: '03', slug: 'pizza-lavras', title: 'Pizza Lavras', eyebrow: 'Cardápio & pedidos',
    description: 'Um site vibrante para transformar fome em pedido, separando sabores tradicionais, especiais e doces com navegação direta.',
    categories: ['Gastronomia'], tags: ['Pizzaria', 'Cardápio', 'Delivery'], theme: 'pizza', status: 'Projeto fictício',
    url: 'pizzalavras.com.br', miniTitle: 'A NOITE PEDE\nPIZZA.', miniSubtitle: 'FORNO QUENTE · ENTREGA RÁPIDA', button: 'Pedir agora',
  },
  {
    number: '04', slug: 'aurele', title: 'Auréle', eyebrow: 'Moda & experiência premium',
    description: 'Uma loja feminina editorial, inspirada no universo das grandes maisons, com foco em produto, desejo e movimento.',
    categories: ['E-commerce'], tags: ['Moda feminina', 'Editorial', 'E-commerce'], theme: 'fashion', status: 'Projeto fictício',
    url: 'aurele.com.br', miniTitle: 'NOVA\nCOLEÇÃO.', miniSubtitle: 'AUTUMN / WINTER 2026', button: 'Descobrir',
  },
  {
    number: '05', slug: 'hamburgueria-do-gordao', title: 'Hamburgueria Na Brasa', eyebrow: 'Marca & cardápio digital',
    description: 'Personalidade forte, categorias bem definidas e uma vitrine irresistível para hambúrgueres tradicionais, artesanais e especiais.',
    categories: ['Gastronomia'], tags: ['Hamburgueria', 'Delivery', 'Cardápio'], theme: 'burger', status: 'Projeto fictício',
    url: 'hamburgueria-ee939.web.app', miniTitle: 'FOME DE\nVERDADE.', miniSubtitle: 'SMASH · ARTESANAL · MONSTRO', button: 'Ver cardápio',
  },
  {
    number: '06', slug: 'serra-alta-imoveis', title: 'Serra Alta Imóveis', eyebrow: 'Imóveis & geração de leads',
    description: 'Conceito de portal imobiliário sofisticado, com busca rápida, destaques e conversão direta para o atendimento comercial.',
    categories: ['Serviços'], tags: ['Imobiliária', 'Busca', 'Leads'], theme: 'estate', status: 'Projeto fictício',
    url: 'serraaltaimoveis.com.br', miniTitle: 'ENCONTRE O SEU\nNOVO LUGAR.', miniSubtitle: 'IMÓVEIS SELECIONADOS EM LAVRAS', button: 'Explorar imóveis',
  },
  {
    number: '07', slug: 'orale-odontologia', title: 'Oralé Odontologia', eyebrow: 'Saúde & credibilidade',
    description: 'Conceito para clínica odontológica contemporânea, equilibrando acolhimento, autoridade e agendamento sem atrito.',
    categories: ['Serviços'], tags: ['Odontologia', 'Institucional', 'Agenda'], theme: 'dental', status: 'Projeto fictício',
    url: 'oraleodontologia.com.br', miniTitle: 'SORRIR MUDA\nTUDO.', miniSubtitle: 'CUIDADO HUMANO · TECNOLOGIA', button: 'Agendar avaliação',
  },
  {
    number: '08', slug: 'raiz-cafe', title: 'Raiz Café', eyebrow: 'Hospitalidade & produto',
    description: 'Conceito para cafeteria autoral, com narrativa de origem, menu enxuto e uma atmosfera digital tão marcante quanto o espaço.',
    categories: ['Gastronomia'], tags: ['Cafeteria', 'Menu', 'Storytelling'], theme: 'coffee', status: 'Projeto fictício',
    url: 'raizcafe.com.br', miniTitle: 'CAFÉ COM\nORIGEM.', miniSubtitle: 'DO GRÃO À XÍCARA · LAVRAS', button: 'Conhecer o menu',
  },
];

const projects: Project[] = [
  ...siteProjects,
  ...productDemos.map((demo, index) => ({
    number: String(siteProjects.length + index + 1).padStart(2, '0'),
    slug: demo.slug,
    title: demo.title,
    eyebrow: demo.eyebrow,
    description: demo.description,
    categories: [demo.kind],
    tags: demo.tags,
    theme: demo.theme,
    status: 'Projeto fictício' as const,
    url: `${demo.slug}.app`,
    miniTitle: demo.previewTitle,
    miniSubtitle: demo.previewLabel,
    button: demo.kind === 'Apps' ? 'Abrir aplicativo' : 'Abrir plataforma',
    productType: demo.kind,
  })),
];

const filters = ['Todos', 'Sites', 'Apps', 'SaaS'];

function ProjectVisual({ project }: { project: Project }) {
  if (project.productType && project.productType !== 'Sites') {
    const isApp = project.productType === 'Apps';
    const PreviewIcon = project.slug === 'veloz-mobilidade' ? Car : project.slug === 'mesa-go' ? UtensilsCrossed : project.slug === 'orbit-ai' ? Bot : Cloud;
    return (
      <a className={`browser-mockup project-preview product-portfolio-preview preview-${isApp ? 'app' : 'saas'} preview-theme-${project.theme}`} href={`/projetos/${project.slug}`} aria-label={`Abrir projeto completo de ${project.title}`}>
        <div className="browser-bar" aria-hidden="true"><i /><i /><i /><span>{project.title} · produto navegável</span><ArrowUpRight size={13} /></div>
        <div className="portfolio-ui" aria-hidden="true">
          <div className="portfolio-ui-nav"><b><PreviewIcon /> {project.title}</b><span>Visão geral</span><span>Atividade</span><em>•••</em></div>
          <div className="portfolio-ui-body">
            <div className="portfolio-ui-copy"><small>{project.productType}</small><h4>{project.miniTitle}</h4><p>{project.description}</p><strong>{project.miniSubtitle}</strong></div>
            <div className="portfolio-ui-panel"><div><span /><span /><span /></div><article><small>DESTAQUE</small><b>{project.title}</b><em>{project.button}</em></article><div className="portfolio-ui-bars"><i /><i /><i /><i /></div></div>
          </div>
        </div>
        <span className="project-preview-caption">Explorar produto completo <ArrowUpRight size={14} /></span>
      </a>
    );
  }
  return (
    <a className="browser-mockup project-preview" href={`/projetos/${project.slug}`} aria-label={`Abrir site completo de ${project.title}`}>
      <div className="browser-bar" aria-hidden="true"><i /><i /><i /><span>{project.title} · prévia do site</span><ArrowUpRight size={13} /></div>
      <img
        className="project-preview-image"
        src={`/project-previews/${project.slug}.webp`}
        alt={`Página inicial atual de ${project.title}`}
        width={1279}
        height={920}
        loading="lazy"
        decoding="async"
      />
      <span className="project-preview-caption">Explorar site completo <ArrowUpRight size={14} /></span>
    </a>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('Sites');
  const [heroType, setHeroType] = useState<'Sites' | 'Apps' | 'SaaS'>('Sites');
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProjects = activeFilter === 'Todos'
    ? projects
    : projects.filter((project) => (project.productType ?? 'Sites') === activeFilter);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Zoryon Web — início" onClick={closeMenu}>
          <img className="brand-logo" src="/brand/zoryon.png" alt="Logo Zoryon Web" width={48} height={48} /><span>ZORYON <b>WEB</b></span>
        </a>
        <nav className={menuOpen ? 'nav-open' : ''} aria-label="Navegação principal">
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </nav>
        <a className="header-cta" href="https://wa.me/5535984259797?text=Olá%2C%20Zoryon%20Web!%20Quero%20conversar%20sobre%20um%20produto%20digital." target="_blank" rel="noreferrer">
          Iniciar projeto <ArrowUpRight size={16} />
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="inicio">
        <span className="hero-z-emblem" aria-hidden="true"><img src="/brand/zoryon.png" alt="" /></span>
        <h1>Sites, apps e SaaS.<br /><em>Feitos para vender.</em></h1>
        <div className="hero-footer">
          <p>Produtos digitais claros, rápidos e preparados para transformar uso em resultado comercial.</p>
          <nav className="hero-project-choices" aria-label="Escolher um projeto">
            <span>Explore por categoria</span>
            <div className="hero-category-tabs" role="group" aria-label="Categoria dos projetos">{(['Sites', 'Apps', 'SaaS'] as const).map((type) => <button key={type} className={heroType === type ? 'active' : ''} onClick={() => setHeroType(type)}>{type}<sup>{projects.filter((project) => (project.productType ?? 'Sites') === type).length}</sup></button>)}</div>
            <div>{projects.filter((project) => (project.productType ?? 'Sites') === heroType).map(project => <a key={project.slug} href={`/projetos/${project.slug}`}>{project.title}<ArrowUpRight size={17} strokeWidth={3} /></a>)}</div>
          </nav>
          <span className="edition">PORTFÓLIO · 2026</span>
        </div>
      </section>

      <section className="signal-strip" aria-label="Diferenciais da Zoryon Web">
        <div><strong>Diagnóstico comercial</strong><span>objetivos e público definidos</span></div>
        <i />
        <div><strong>UX orientada à conversão</strong><span>jornadas e CTAs claros</span></div>
        <i />
        <div><strong>Performance & SEO técnico</strong><span>estrutura preparada para crescer</span></div>
        <i />
        <div><strong>Entrega acompanhada</strong><span>suporte direto em Lavras</span></div>
      </section>

      <section className="projects-section" id="projetos">
        <div className="section-heading light-heading">
          <span>01 / Portfólio selecionado</span>
          <div>
            <h2>Escolha o produto certo para o seu negócio.</h2>
            <p>Sites, aplicativos e plataformas SaaS com jornadas completas. Os conceitos fictícios estão identificados e mostram como cada produto pode funcionar na prática.</p>
          </div>
        </div>

        <div className="project-toolbar">
          <div className="filter-row" role="group" aria-label="Filtrar projetos">
            {filters.map((filter) => (
              <button key={filter} className={activeFilter === filter ? 'active' : ''} onClick={() => setActiveFilter(filter)}>
                {filter}<sup>{filter === 'Todos' ? projects.length : projects.filter((p) => (p.productType ?? 'Sites') === filter).length}</sup>
              </button>
            ))}
          </div>
          <span>{visibleProjects.length.toString().padStart(2, '0')} projetos exibidos</span>
        </div>

        <div className="project-grid">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-copy">
                <div className="project-meta"><span className="project-number">{project.number}</span><span className={`status-badge ${project.status === 'Projeto fictício' ? 'concept' : ''}`}>{project.status}</span></div>
                <div>
                  <p className="eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-actions">
                    <a className="view-site-link" href={`/projetos/${project.slug}`}>
                      Ver {project.productType === 'Apps' ? 'app' : project.productType === 'SaaS' ? 'SaaS' : 'site'} completo <ArrowRight size={15} />
                    </a>
                    <a className="choose-link" href={`https://wa.me/5535984259797?text=${encodeURIComponent(`Olá, Zoryon Web! Gostei do estilo do projeto ${project.title} e quero conversar sobre algo nessa direção.`)}`} target="_blank" rel="noreferrer">
                      Quero este estilo <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
              <ProjectVisual project={project} />
            </article>
          ))}
        </div>
      </section>

      <section className="solutions" id="solucoes">
        <div className="section-heading">
          <span>02 / O que criamos</span>
          <h2>Seu negócio, traduzido em uma experiência digital.</h2>
        </div>
        <div className="solution-grid">
          <article>
            <span>01</span><h3>Sites</h3>
            <p>Presença digital com identidade, conteúdo objetivo e estrutura preparada para gerar contatos e vendas.</p>
            <ul><li><Check size={14} /> Design exclusivo</li><li><Check size={14} /> Jornada de conversão</li><li><Check size={14} /> Performance e SEO</li></ul>
          </article>
          <article className="featured-solution">
            <span>02</span><h3>Aplicativos</h3>
            <p>Experiências móveis rápidas e intuitivas para conectar pessoas, serviços, pedidos e pagamentos.</p>
            <ul><li><Check size={14} /> Fluxos sob medida</li><li><Check size={14} /> Interface responsiva</li><li><Check size={14} /> Integrações essenciais</li></ul>
          </article>
          <article>
            <span>03</span><h3>Plataformas SaaS</h3>
            <p>Sistemas online para operar, automatizar e acompanhar negócios com dados claros e processos escaláveis.</p>
            <ul><li><Check size={14} /> Painéis e permissões</li><li><Check size={14} /> Automação de processos</li><li><Check size={14} /> Métricas em tempo real</li></ul>
          </article>
        </div>
      </section>

      <section className="process-section" id="processo">
        <div className="process-intro">
          <span>03 / Como funciona</span>
          <h2>Um processo claro.<br />Um resultado <em>à sua altura.</em></h2>
          <p>Você acompanha cada decisão importante. Nós organizamos a complexidade para que o caminho do primeiro contato ao site no ar seja simples.</p>
        </div>
        <ol className="process-list">
          <li><span>01</span><div><h3>Imersão</h3><p>Entendemos seu negócio, seu público e o que o site precisa conquistar.</p></div></li>
          <li><span>02</span><div><h3>Direção visual</h3><p>Definimos linguagem, estrutura e referências antes de avançar.</p></div></li>
          <li><span>03</span><div><h3>Criação</h3><p>Design e desenvolvimento caminham juntos, com atenção a cada detalhe.</p></div></li>
          <li><span>04</span><div><h3>Publicação</h3><p>Revisamos, ajustamos e colocamos sua nova presença digital no ar.</p></div></li>
        </ol>
      </section>

      <section className="local-section" aria-label="Identidade visual da Zoryon Web">
        <img className="studio-card" src="/og.png" alt="Zoryon Web — Sites que impulsionam negócios." />
      </section>

      <section className="contact-section" id="contato">
        <div className="contact-label"><Sparkles size={15} /> Seu próximo produto digital começa aqui</div>
        <h2>Vamos colocar sua marca<br /><em>em outro nível?</em></h2>
        <div className="contact-actions">
          <a className="contact-primary" href="https://wa.me/5535984259797?text=Olá%2C%20Zoryon%20Web!%20Quero%20criar%20um%20site%20profissional." target="_blank" rel="noreferrer">
            <MessageCircle /> Conversar no WhatsApp <ArrowUpRight />
          </a>
          <a href="tel:+5535984259797"><Phone /> (35) 98425-9797</a>
          <a href="https://instagram.com/zoryonweb" target="_blank" rel="noreferrer"><AtSign /> @zoryonweb</a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio"><img className="brand-logo" src="/brand/zoryon.png" alt="Logo Zoryon Web" width={48} height={48} /><span>ZORYON <b>WEB</b></span></a>
        <p>Sites, aplicativos e SaaS desenvolvidos para gerar resultado.</p>
        <div><span>Lavras · MG</span><span>© 2026 Zoryon Web</span></div>
      </footer>

      <a className="floating-whatsapp" href="https://wa.me/5535984259797?text=Olá%2C%20Zoryon%20Web!" target="_blank" rel="noreferrer" aria-label="Falar com a Zoryon Web pelo WhatsApp"><MessageCircle size={22} /></a>
    </main>
  );
}
