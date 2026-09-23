'use client';

import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  AtSign,
  Check,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  X,
} from 'lucide-react';

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
  preview?: string;
};

const projects: Project[] = [
  {
    number: '01', slug: 'wl-streetwear', title: 'WL Streetwear', eyebrow: 'Moda urbana & e-commerce',
    description: 'Loja streetwear completa com coleção, páginas de produto, sacola, checkout, conta de cliente e gestão do catálogo.',
    categories: ['E-commerce'], tags: ['Streetwear', 'Loja virtual', 'Checkout'], theme: 'streetwear', status: 'Projeto fictício',
    url: 'wl-streetwear', miniTitle: 'STREETWEAR\nCOM ASSINATURA.', miniSubtitle: 'DROP 01 · LAVRAS MG', button: 'Explorar coleção',
  },
  {
    number: '02', slug: 'casa-dos-fios', title: 'Mundix Aviamentos', eyebrow: 'Catálogo & e-commerce',
    description: 'Loja digital completa para linhas e fios, com catálogo organizado por cores, variações visuais e uma jornada de compra simples.',
    categories: ['E-commerce'], tags: ['Catálogo', 'Variações', 'Loja online'], theme: 'yarn', status: 'Projeto real',
    url: 'mundix.com.br', miniTitle: 'CORES QUE\nINSPIRAM.', miniSubtitle: 'FIOS · LINHAS · CRIATIVIDADE', button: 'Ver coleção',
  },
  {
    number: '03', slug: 'pizza-lavras', title: 'Pizza Lavras', eyebrow: 'Pizzarias',
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
    number: '07', slug: 'orale-odontologia', title: 'Oracle Odontologia', eyebrow: 'Saúde & credibilidade',
    description: 'Site profissional para uma clínica odontológica, com tratamentos bem apresentados, confiança e agendamento direto.',
    categories: ['Serviços'], tags: ['Odontologia', 'Institucional', 'Agenda'], theme: 'dental', status: 'Projeto fictício',
    url: 'oracleodontologia.com.br', miniTitle: 'SAÚDE BUCAL\nCOMPLETA.', miniSubtitle: 'ATENDIMENTO · PLANEJAMENTO · CUIDADO', button: 'Agendar avaliação',
  },
];

const filters = ['Todos', 'Serviços', 'E-commerce', 'Gastronomia'];

function ProjectVisual({ project }: { project: Project }) {
  return (
    <a className="browser-mockup project-preview" href={`/projetos/${project.slug}`} aria-label={`Abrir site completo de ${project.title}`}>
      <div className="browser-bar" aria-hidden="true"><i /><i /><i /><span>{project.title} · prévia do site</span><ArrowUpRight size={13} /></div>
      {project.slug === 'wl-streetwear' ? (
        <div className="wl-site-cover" aria-label="Capa da loja WL Streetwear">
          <div className="wl-site-cover-copy"><small>WL / EDIÇÃO DE ESTREIA</small><strong>STREETWEAR<br />COM <em>ASSINATURA.</em></strong><span>EXPLORAR CATÁLOGO <ArrowRight size={14} /></span></div>
          <img src="/originais/wl-streetwear/assets/images/hero-graphic-tee.webp" alt="Camiseta da coleção WL Streetwear" loading="lazy" decoding="async" />
        </div>
      ) : project.slug === 'pizza-lavras' ? (
        <div className="pizza-site-cover" aria-label="Página inicial atual da Pizza Lavras">
          <div className="pizza-site-header"><strong>🍕 Pizza<br />Lavras</strong><span>Início　 Cardápio　 A casa　 Contato</span><b>Pedir agora →</b></div>
          <div className="pizza-site-hero">
            <img src="/originais/pizza-lavras/assets/hero-pizza-oven.webp" alt="Pizza artesanal assada no forno" loading="lazy" decoding="async" />
            <div className="pizza-site-copy"><small>PIZZARIA ARTESANAL · LAVRAS, MG</small><p>Massa aberta diariamente, molho da casa e ingredientes bem escolhidos. Peça online para receber ou retirar.</p><strong>Ver cardápio e pedir →</strong></div>
            <div className="pizza-site-order"><small>ABERTO HOJE</small><h4>Entrega e retirada até 00h</h4><p>Escolha o tamanho, combine até dois sabores e acompanhe o resumo antes de confirmar.</p><b>Começar pedido →</b></div>
          </div>
          <div className="pizza-site-benefits"><span>01　 Ingredientes selecionados</span><span>02　 Preparo no pedido</span><span>03　 Entrega acompanhada</span></div>
        </div>
      ) : ['serra-alta-imoveis', 'orale-odontologia'].includes(project.slug) ? (
        <div className="project-preview-live">
          <iframe
            src={`/projetos/${project.slug}/_embed/inicio`}
            title={`Prévia atual de ${project.title}`}
            loading="lazy"
            tabIndex={-1}
            aria-hidden="true"
            sandbox="allow-same-origin"
          />
        </div>
      ) : (
        <img
          className="project-preview-image"
          src={project.preview ?? `/project-previews/${project.slug}.webp`}
          alt={`Página inicial atual de ${project.title}`}
          width={1279}
          height={920}
          loading="lazy"
          decoding="async"
        />
      )}
      <span className="project-preview-caption">Explorar site completo <ArrowUpRight size={14} /></span>
    </a>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProjects = activeFilter === 'Todos'
    ? projects
    : projects.filter((project) => project.categories.includes(activeFilter));

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <link rel="canonical" href="https://zoryonweb.com.br/" />
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Zoryon Web — início" onClick={closeMenu}>
          <img className="brand-logo" src="/brand/zoryon.webp" alt="Logo Zoryon Web" width={48} height={48} /><span>ZORYON <b>WEB</b></span>
        </a>
        <nav className={menuOpen ? 'nav-open' : ''} aria-label="Navegação principal">
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </nav>
        <div className="header-actions">
          <a className="header-instagram" href="https://instagram.com/zoryonweb" target="_blank" rel="noopener noreferrer" aria-label="Acompanhar a Zoryon Web no Instagram">
            <svg width="23" height="23" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <defs>
                <linearGradient id="instagram-gradient" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FEDA75" />
                  <stop offset="0.3" stopColor="#FA7E1E" />
                  <stop offset="0.55" stopColor="#D62976" />
                  <stop offset="0.78" stopColor="#962FBF" />
                  <stop offset="1" stopColor="#4F5BD5" />
                </linearGradient>
              </defs>
              <rect width="24" height="24" rx="6" fill="url(#instagram-gradient)" />
              <rect x="5" y="5" width="14" height="14" rx="4.2" fill="none" stroke="#fff" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.8" />
              <circle cx="16.9" cy="7.2" r="1.1" fill="#fff" />
            </svg>
          </a>
          <a className="header-cta" href="https://wa.me/5535984259797?text=Olá%2C%20Zoryon%20Web!%20Quero%20conversar%20sobre%20um%20site%20profissional." target="_blank" rel="noreferrer">
            Iniciar projeto <ArrowRight size={16} />
          </a>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="inicio">
        <span className="hero-z-emblem" aria-hidden="true"><img src="/brand/zoryon.webp" alt="" /></span>
        <h1>Sites profissionais.<br /><em>Feitos para vender.</em></h1>
        <div className="hero-footer">
          <p>Transforme visitas em contatos, pedidos e vendas com um site rápido, estratégico e feito sob medida para o seu negócio.</p>
          <nav className="hero-project-choices" aria-label="Escolher um projeto">
            <span>Explore os projetos</span>
            <div>{projects.map(project => <a key={project.slug} href={`/projetos/${project.slug}`}>{project.title}<ArrowRight size={17} strokeWidth={3} /></a>)}</div>
          </nav>
          <span className="edition">PORTFÓLIO · 2026</span>
        </div>
      </section>

      <section className="signal-strip" aria-label="Diferenciais da Zoryon Web">
        <div><strong>Diagnóstico comercial</strong><span>objetivos e público definidos</span></div>
        <i />
        <div><strong>Jornada que converte</strong><span>cada clique conduz ao próximo passo</span></div>
        <i />
        <div><strong>Rápido e fácil de encontrar</strong><span>velocidade, busca e estrutura sólida</span></div>
        <i />
        <div><strong>Entrega acompanhada</strong><span>suporte dedicado</span></div>
      </section>

      <section className="projects-section" id="projetos">
        <div className="section-heading light-heading">
          <span>01 / Portfólio selecionado</span>
          <div>
            <h2>Escolha <em>a direção certa</em><br />para o seu site.</h2>
          </div>
        </div>

        <div className="project-toolbar">
          <div className="filter-row" role="group" aria-label="Filtrar projetos">
            {filters.map((filter) => (
              <button key={filter} className={activeFilter === filter ? 'active' : ''} onClick={() => setActiveFilter(filter)}>
                {filter}<sup>{filter === 'Todos' ? projects.length : projects.filter((p) => p.categories.includes(filter)).length}</sup>
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
                      Ver site completo <ArrowRight size={15} />
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
        <p className="service-home-intro">A Zoryon Web cria sites profissionais e institucionais, lojas virtuais e landing pages. Atendemos empresas em Lavras/MG e desenvolvemos projetos remotamente para outras regiões do Brasil.</p>
        <div className="solution-grid">
          <article>
            <span>01</span><h3>Site institucional</h3>
            <p>Para apresentar sua empresa com autoridade, organizar seus serviços e transformar visitantes em contatos.</p>
            <ul><li><Check size={14} /> Design exclusivo</li><li><Check size={14} /> WhatsApp integrado</li><li><Check size={14} /> Otimizado para celular</li></ul>
          </article>
          <article className="featured-solution">
            <span>02</span><h3>Loja virtual</h3>
            <p>Uma vitrine preparada para vender, com categorias claras, produtos valorizados e jornada de compra simples.</p>
            <ul><li><Check size={14} /> Catálogo completo</li><li><Check size={14} /> Variações e filtros</li><li><Check size={14} /> Estrutura para pagamentos</li></ul>
          </article>
          <article>
            <span>03</span><h3>Cardápio & catálogo</h3>
            <p>Para quem precisa mostrar opções com clareza e receber pedidos ou orçamentos diretamente pelo WhatsApp.</p>
            <ul><li><Check size={14} /> Navegação rápida</li><li><Check size={14} /> Categorias inteligentes</li><li><Check size={14} /> Pedido direcionado</li></ul>
          </article>
        </div>
        <nav className="service-home-links" aria-label="Conhecer serviços">
          <a href="/criacao-de-sites">Criação de sites <ArrowUpRight size={15} /></a>
          <a href="/criacao-de-sites-lavras">Sites em Lavras <ArrowUpRight size={15} /></a>
          <a href="/lojas-virtuais">Lojas virtuais <ArrowUpRight size={15} /></a>
          <a href="/landing-pages">Landing pages <ArrowUpRight size={15} /></a>
        </nav>
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

      <section className="contact-section" id="contato">
        <div className="contact-label"><Sparkles size={15} /> Seu próximo site começa aqui</div>
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
        <a className="brand footer-brand" href="#inicio"><img className="brand-logo" src="/brand/zoryon.webp" alt="Logo Zoryon Web" width={48} height={48} /><span>ZORYON <b>WEB</b></span></a>
        <p>Sites profissionais desenvolvidos para gerar resultado.</p>
        <div><span>Lavras · MG</span><span>© 2026 Zoryon Web</span></div>
      </footer>

      <a className="floating-whatsapp" href="https://wa.me/5535984259797?text=Olá%2C%20Zoryon%20Web!" target="_blank" rel="noreferrer" aria-label="Falar com a Zoryon Web pelo WhatsApp"><MessageCircle size={22} /></a>
    </main>
  );
}
