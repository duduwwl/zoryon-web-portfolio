'use client';

import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  AtSign,
  Check,
  MapPin,
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
  status: 'Projeto real' | 'Conceito editável';
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
    categories: ['Gastronomia'], tags: ['Pizzaria', 'Cardápio', 'Delivery'], theme: 'pizza', status: 'Projeto real',
    url: 'pizzalavras.com.br', miniTitle: 'A NOITE PEDE\nPIZZA.', miniSubtitle: 'FORNO QUENTE · ENTREGA RÁPIDA', button: 'Pedir agora',
  },
  {
    number: '04', slug: 'aurele', title: 'Auréle', eyebrow: 'Moda & experiência premium',
    description: 'Uma loja feminina editorial, inspirada no universo das grandes maisons, com foco em produto, desejo e movimento.',
    categories: ['E-commerce'], tags: ['Moda feminina', 'Editorial', 'E-commerce'], theme: 'fashion', status: 'Projeto real',
    url: 'aurele.com.br', miniTitle: 'NOVA\nCOLEÇÃO.', miniSubtitle: 'AUTUMN / WINTER 2026', button: 'Descobrir',
  },
  {
    number: '05', slug: 'hamburgueria-do-gordao', title: 'Hamburgueria Na Brasa', eyebrow: 'Marca & cardápio digital',
    description: 'Personalidade forte, categorias bem definidas e uma vitrine irresistível para hambúrgueres tradicionais, artesanais e especiais.',
    categories: ['Gastronomia'], tags: ['Hamburgueria', 'Delivery', 'Cardápio'], theme: 'burger', status: 'Projeto real',
    url: 'hamburgueria-ee939.web.app', miniTitle: 'FOME DE\nVERDADE.', miniSubtitle: 'SMASH · ARTESANAL · MONSTRO', button: 'Ver cardápio',
  },
  {
    number: '06', slug: 'serra-alta-imoveis', title: 'Serra Alta Imóveis', eyebrow: 'Imóveis & geração de leads',
    description: 'Conceito de portal imobiliário sofisticado, com busca rápida, destaques e conversão direta para o atendimento comercial.',
    categories: ['Serviços'], tags: ['Imobiliária', 'Busca', 'Leads'], theme: 'estate', status: 'Conceito editável',
    url: 'serraaltaimoveis.com.br', miniTitle: 'ENCONTRE O SEU\nNOVO LUGAR.', miniSubtitle: 'IMÓVEIS SELECIONADOS EM LAVRAS', button: 'Explorar imóveis',
  },
  {
    number: '07', slug: 'orale-odontologia', title: 'Oralé Odontologia', eyebrow: 'Saúde & credibilidade',
    description: 'Conceito para clínica odontológica contemporânea, equilibrando acolhimento, autoridade e agendamento sem atrito.',
    categories: ['Serviços'], tags: ['Odontologia', 'Institucional', 'Agenda'], theme: 'dental', status: 'Conceito editável',
    url: 'oraleodontologia.com.br', miniTitle: 'SORRIR MUDA\nTUDO.', miniSubtitle: 'CUIDADO HUMANO · TECNOLOGIA', button: 'Agendar avaliação',
  },
  {
    number: '08', slug: 'raiz-cafe', title: 'Raiz Café', eyebrow: 'Hospitalidade & produto',
    description: 'Conceito para cafeteria autoral, com narrativa de origem, menu enxuto e uma atmosfera digital tão marcante quanto o espaço.',
    categories: ['Gastronomia'], tags: ['Cafeteria', 'Menu', 'Storytelling'], theme: 'coffee', status: 'Conceito editável',
    url: 'raizcafe.com.br', miniTitle: 'CAFÉ COM\nORIGEM.', miniSubtitle: 'DO GRÃO À XÍCARA · LAVRAS', button: 'Conhecer o menu',
  },
];

const filters = ['Todos', 'Serviços', 'E-commerce', 'Gastronomia'];

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className={`browser-mockup theme-${project.theme}`} aria-label={`Prévia visual do projeto ${project.title}`}>
      <div className="browser-bar"><i /><i /><i /><span>{project.url}</span></div>
      <div className="mini-site">
        <div className="mini-nav"><b>{project.title}</b><span>MENU&nbsp;&nbsp; CONTATO</span></div>
        <div className="mini-visual">
          <small>{project.miniSubtitle}</small>
          <strong>{project.miniTitle.split('\n').map((line) => <span key={line}>{line}</span>)}</strong>
          <button>{project.button} <ArrowRight size={11} /></button>
        </div>
        <div className="mini-decoration"><span /><span /><span /></div>
      </div>
    </div>
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
          <span className="brand-mark">Z</span><span>ZORYON <b>WEB</b></span>
        </a>
        <nav className={menuOpen ? 'nav-open' : ''} aria-label="Navegação principal">
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#solucoes" onClick={closeMenu}>Soluções</a>
          <a href="#processo" onClick={closeMenu}>Processo</a>
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
          <p>Design, estratégia e desenvolvimento reunidos para transformar a sua presença digital em uma experiência que gera confiança — e resultado.</p>
          <a href="#projetos" className="scroll-link">Ver projetos <ArrowDownRight size={18} /></a>
          <span className="edition">PORTFÓLIO · 2026</span>
        </div>
      </section>

      <section className="signal-strip" aria-label="Diferenciais da Zoryon Web">
        <div><strong>Estratégia</strong><span>antes da estética</span></div>
        <i />
        <div><strong>Design autoral</strong><span>sem cara de template</span></div>
        <i />
        <div><strong>Responsivo</strong><span>em cada tela</span></div>
        <i />
        <div><strong>Lavras · MG</strong><span>atendimento próximo</span></div>
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
                <div className="project-meta"><span className="project-number">{project.number}</span><span className={`status-badge ${project.status === 'Conceito editável' ? 'concept' : ''}`}>{project.status}</span></div>
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

      <section className="local-section">
        <img className="studio-card" src="/og.png" alt="Zoryon Web — Sites que fazem marcas avançarem." />
        <div>
          <span className="small-label"><MapPin size={14} /> Feito em Lavras, Minas Gerais</span>
          <h2>Próximos o bastante para entender. Digitais o bastante para ir além.</h2>
          <p>A Zoryon Web cria sites para negócios locais e marcas que querem crescer com uma presença profissional, singular e preparada para o futuro.</p>
        </div>
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
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark">Z</span><span>ZORYON <b>WEB</b></span></a>
        <p>Sites profissionais com estratégia, personalidade e propósito.</p>
        <div><span>Lavras · MG</span><span>© 2026 Zoryon Web</span></div>
      </footer>

      <a className="floating-whatsapp" href="https://wa.me/5535984259797?text=Olá%2C%20Zoryon%20Web!" target="_blank" rel="noreferrer" aria-label="Falar com a Zoryon Web pelo WhatsApp"><MessageCircle size={22} /></a>
    </main>
  );
}
