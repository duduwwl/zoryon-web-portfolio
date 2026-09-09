'use client';

import { useState } from 'react';
import {
  ArrowDownRight,
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
};

const projects: Project[] = [
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

const filters = ['Todos', 'Serviços', 'E-commerce', 'Gastronomia'];

function ProjectVisual({ project }: { project: Project }) {
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
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProjects = activeFilter === 'Todos'
    ? projects
    : projects.filter((project) => project.categories.includes(activeFilter));

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
        <a className="header-cta" href="https://wa.me/5535984259797?text=Olá%2C%20Zoryon%20Web!%20Quero%20conversar%20sobre%20um%20site." target="_blank" rel="noreferrer">
          Iniciar projeto <ArrowUpRight size={16} />
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-kicker"><span className="status-dot" /> Estúdio digital em Lavras — MG</div>
        <h1>Sites que fazem<br />sua marca <em>avançar.</em></h1>
        <div className="hero-footer">
          <p>Sites planejados para posicionar sua marca, facilitar decisões e transformar visitas em oportunidades comerciais.</p>
          <nav className="hero-project-choices" aria-label="Escolher um projeto"><span>Explore os projetos</span><div>{projects.map(project => <a key={project.slug} href={`/projetos/${project.slug}`}>{project.title}<ArrowUpRight size={16} strokeWidth={1.8} /></a>)}</div></nav>
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
            <h2>Encontre a direção certa para a sua marca.</h2>
            <p>Projetos que já desenvolvemos e conceitos prontos para você imaginar possibilidades. Os modelos fictícios estão identificados e podem ser substituídos quando quiser.</p>
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
        <a className="brand footer-brand" href="#inicio"><img className="brand-logo" src="/brand/zoryon.png" alt="Logo Zoryon Web" width={48} height={48} /><span>ZORYON <b>WEB</b></span></a>
        <p>Sites profissionais com estratégia, personalidade e propósito.</p>
        <div><span>Lavras · MG</span><span>© 2026 Zoryon Web</span></div>
      </footer>

      <a className="floating-whatsapp" href="https://wa.me/5535984259797?text=Olá%2C%20Zoryon%20Web!" target="_blank" rel="noreferrer" aria-label="Falar com a Zoryon Web pelo WhatsApp"><MessageCircle size={22} /></a>
    </main>
  );
}
