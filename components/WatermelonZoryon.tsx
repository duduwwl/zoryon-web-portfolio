'use client';

import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  type Variants,
} from 'motion/react';
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Code2,
  LayoutTemplate,
  MessageCircle,
  ShoppingBag,
} from 'lucide-react';
import {
  PortfolioImage,
  SiteFooter,
  SiteHeader,
  whatsappUrl,
} from './ZoryonSite';
import type { PortfolioProject } from '../lib/portfolio';

const rotatingWords = ['marcas', 'negócios', 'ideias', 'pessoas'] as const;
const heroProjectSlugs = ['wl-streetwear', 'orale-odontologia', 'pizza-lavras', 'hamburgueria-do-gordao', 'love-pets', 'casa-dos-fios', 'marcio-felipe-arquitetura'];
const selectedProjectSlugs = ['love-pets', 'marcio-felipe-arquitetura', 'wl-streetwear', 'casa-dos-fios', 'aurele'];
const services = [
  {
    icon: LayoutTemplate,
    index: '01',
    title: 'Sites institucionais',
    href: '/criacao-de-sites',
    text: 'Uma casa digital para apresentar a empresa, os serviços e a forma como você trabalha.',
  },
  {
    icon: ShoppingBag,
    index: '02',
    title: 'Lojas virtuais',
    href: '/lojas-virtuais',
    text: 'Produtos, coleções e caminhos de compra organizados com a identidade da sua marca.',
  },
  {
    icon: ArrowUpRight,
    index: '03',
    title: 'Landing pages',
    href: '/landing-pages',
    text: 'Páginas com foco em uma oferta, uma campanha e um próximo passo claro.',
  },
  {
    icon: Code2,
    index: '04',
    title: 'Experiências digitais',
    href: '/criacao-de-sites',
    text: 'Soluções sob medida quando um catálogo ou uma página comum não são suficientes.',
  },
];
const process = [
  ['01', 'Entender', 'O negócio, o público e o que o site precisa fazer.'],
  ['02', 'Planejar', 'Conteúdo, hierarquia, navegação e direção visual.'],
  ['03', 'Construir', 'Design e desenvolvimento pensados para o projeto.'],
  ['04', 'Refinar', 'Apresentar, ouvir, revisar e ajustar juntos.'],
  ['05', 'Publicar', 'Validar as telas e colocar a experiência no ar.'],
];

// Valores de movimento preservados do bloco Watermelon UI Landing Page 01.
const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};
const heroItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};
const glowVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
  },
};
const imageGroup: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.8 } },
};
const imageItem: Variants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};
const revealGroup: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};
const revealItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.2, 0, 0, 1] },
  },
};

function AnimatedWord() {
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setWordIndex((current) => (current + 1) % rotatingWords.length),
      2800,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="wm-rotating-word">
      <AnimatePresence mode="wait">
        <motion.span
          key={rotatingWords[wordIndex]}
          initial={{ y: 12, opacity: 0, filter: 'blur(4px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{
            y: -12,
            opacity: 0,
            filter: 'blur(4px)',
            transition: { duration: 0.15, ease: 'easeIn' },
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {rotatingWords[wordIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Count({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  useEffect(() => {
    if (!isInView || !ref.current) return;
    const controls = animate(0, value, {
      duration: 2.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        if (ref.current) ref.current.textContent = Math.floor(latest).toString();
      },
    });
    return controls.stop;
  }, [isInView, value]);
  return <span ref={ref}>0</span>;
}

function Frame({ project, priority = false }: { project: PortfolioProject; priority?: boolean }) {
  return <PortfolioImage project={project} priority={priority} />;
}

function Hero({ projects }: { projects: PortfolioProject[] }) {
  const heroProjects = heroProjectSlugs.flatMap((slug) => projects.filter((project) => project.slug === slug));
  return (
    <section className="wm-hero" id="inicio" aria-labelledby="wm-hero-title">
      <div className="wm-dot-grid" aria-hidden="true" />
      <motion.div
        className="wm-ambient-glow"
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        aria-hidden="true"
      />
      <span className="wm-tech-line wm-tech-line-top" aria-hidden="true" />
      <span className="wm-tech-line wm-tech-line-bottom" aria-hidden="true" />
      <span className="wm-cross wm-cross-top-left" aria-hidden="true" />
      <span className="wm-cross wm-cross-top-right" aria-hidden="true" />
      <span className="wm-cross wm-cross-bottom-left" aria-hidden="true" />
      <span className="wm-cross wm-cross-bottom-right" aria-hidden="true" />
      <div className="wm-orbits" aria-hidden="true"><i /><i /><i /></div>

      <motion.div className="wm-hero-content" variants={heroContainer} initial="hidden" animate="visible">
        <motion.span variants={heroItem} className="wm-badge">
          CRIAÇÃO DE SITES · LAVRAS/MG E TODO O BRASIL
        </motion.span>
        <motion.h1 variants={heroItem} id="wm-hero-title">
          Sites com identidade.
          <br />
          Feitos para <AnimatedWord />
        </motion.h1>
        <motion.p variants={heroItem} className="wm-hero-description">
          A Zoryon Web cria experiências digitais que traduzem o que torna cada
          negócio diferente. Do primeiro contato ao último detalhe da tela.
        </motion.p>
        <motion.div variants={heroItem} className="wm-hero-actions">
          <a className="wm-button wm-button-primary" href="/projetos">
            Explorar projetos <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a className="wm-button wm-button-secondary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Conversar sobre meu site
          </a>
        </motion.div>
        <motion.div variants={heroItem} className="wm-proof">
          <span className="wm-proof-line" />
          PROJETOS REAIS E CONCEITUAIS, IDENTIFICADOS COM CLAREZA
          <span className="wm-proof-line" />
        </motion.div>
      </motion.div>

      <motion.div className="wm-hero-collage" variants={imageGroup} initial="hidden" animate="visible" aria-label="Capas dos projetos Zoryon Web">
        {heroProjects.map((project, index) => (
          <motion.a
            key={project.slug}
            className={`wm-collage-card wm-collage-card-${index}`}
            href={`/projetos/${project.slug}`}
            aria-label={`Explorar ${project.title}`}
            variants={imageItem}
            whileHover={{ scale: 1.05, zIndex: 50, transition: { duration: 0.4 } }}
          >
            <Frame project={project} priority={index >= 4} />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

function FactsStrip({ projectCount }: { projectCount: number }) {
  const facts = [
    { value: projectCount, label: 'Projetos para explorar' },
    { value: services.length, label: 'Formatos de projeto' },
    { value: 2, label: 'Atendimento local e remoto' },
  ];
  return (
    <section className="wm-facts" aria-label="O que você encontra na Zoryon Web">
      <motion.div variants={revealGroup} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
        {facts.map((fact) => (
          <motion.article variants={revealItem} key={fact.label}>
            <strong><Count value={fact.value} /></strong>
            <span>{fact.label}</span>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const href = project.externalUrl ?? `/projetos/${project.slug}`;
  const target = project.externalUrl ? '_blank' : undefined;
  const rel = project.externalUrl ? 'noopener noreferrer' : undefined;
  return (
    <motion.article className="wm-project-card" variants={revealItem}>
      <a className="wm-project-visual" href={href} target={target} rel={rel} aria-label={`Visualizar ${project.title}${target ? ' em nova aba' : ''}`}>
        <Frame project={project} priority={index === 0} />
      </a>
      <div className="wm-project-meta">
        <span>{String(index + 1).padStart(2, '0')} / {project.type}</span>
        <span>{project.status}</span>
      </div>
      <div className="wm-project-description">
        <div>
          <h3>{project.title}</h3>
          <p>{project.context}</p>
        </div>
        <a href={href} target={target} rel={rel} aria-label={`Abrir ${project.title}${target ? ' em nova aba' : ''}`}>
          <ArrowUpRight size={24} aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}

function WorkSection({ projects, all = false }: { projects: PortfolioProject[]; all?: boolean }) {
  const list = all ? projects : selectedProjectSlugs.flatMap((slug) => projects.filter((project) => project.slug === slug));
  return (
    <section className="wm-section wm-work" id="projetos" aria-labelledby="wm-work-title">
      <div className="wm-section-heading">
        <span className="wm-eyebrow">01 / PORTFÓLIO</span>
        <h2 id="wm-work-title">{all ? 'Cada projeto, uma direção.' : 'Projetos para olhar de perto.'}</h2>
        <p>
          Design pensado para cada marca. Abra as capas para conhecer os sites
          e entender as escolhas por trás de cada projeto.
        </p>
      </div>
      <motion.div className="wm-project-grid" variants={revealGroup} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
        {list.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}
      </motion.div>
      {!all && (
        <a className="wm-all-projects" href="/projetos">
          Ver portfólio completo <ArrowRight size={24} aria-hidden="true" />
        </a>
      )}
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="wm-section wm-services" id="servicos" aria-labelledby="wm-services-title">
      <div className="wm-section-heading">
        <span className="wm-eyebrow">02 / O QUE CONSTRUÍMOS</span>
        <h2 id="wm-services-title">O formato certo para o que sua marca precisa.</h2>
        <p>Sites profissionais, lojas e páginas de campanha com personalidade, clareza e cuidado em cada tela.</p>
      </div>
      <motion.div className="wm-service-grid" variants={revealGroup} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
        {services.map(({ icon: Icon, index, title, text, href }) => (
          <motion.article className="wm-service-card" variants={revealItem} key={title}>
            <span className="wm-corner wm-corner-tl" aria-hidden="true" />
            <span className="wm-corner wm-corner-tr" aria-hidden="true" />
            <span className="wm-corner wm-corner-bl" aria-hidden="true" />
            <span className="wm-corner wm-corner-br" aria-hidden="true" />
            <div className="wm-service-top"><Icon size={30} strokeWidth={1.5} aria-hidden="true" /><span>{index}</span></div>
            <h3><a href={href}>{title} <ArrowUpRight size={18} aria-hidden="true" /></a></h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="wm-section wm-process" id="processo" aria-labelledby="wm-process-title">
      <div className="wm-section-heading">
        <span className="wm-eyebrow">03 / NOSSO PROCESSO</span>
        <h2 id="wm-process-title">Do entendimento ao site no ar.</h2>
        <p>Sem encaixar a marca em um template. Cada etapa tem um propósito e acontece com você.</p>
      </div>
      <motion.div className="wm-process-list" variants={revealGroup} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
        {process.map(([index, title, text]) => (
          <motion.article variants={revealItem} key={index}>
            <span>{index}</span><h3>{title}</h3><p>{text}</p><Check size={18} aria-hidden="true" />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="wm-contact" id="contato" aria-labelledby="wm-contact-title">
      <div className="wm-dot-grid" aria-hidden="true" />
      <motion.div variants={heroContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
        <motion.span variants={heroItem} className="wm-eyebrow">04 / VAMOS COMEÇAR</motion.span>
        <motion.h2 variants={heroItem} id="wm-contact-title">Uma boa ideia merece um site à altura.</motion.h2>
        <motion.p variants={heroItem}>Atendemos em Lavras/MG e também desenvolvemos projetos à distância. Conte o que você imagina.</motion.p>
        <motion.p variants={heroItem} className="wm-local-link"><a href="/criacao-de-sites-lavras">Conheça a criação de sites em Lavras/MG <ArrowUpRight size={15} aria-hidden="true" /></a></motion.p>
        <motion.a variants={heroItem} className="wm-button wm-button-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} aria-hidden="true" /> Conversar sobre meu projeto <ArrowUpRight size={16} aria-hidden="true" />
        </motion.a>
      </motion.div>
    </section>
  );
}

export function HomeExperience({ projects }: { projects: PortfolioProject[] }) {
  return (
    <main className="zw-site wm-site">
      <SiteHeader active="home" />
      <Hero projects={projects} />
      <FactsStrip projectCount={projects.length} />
      <WorkSection projects={projects} />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}

export function PortfolioExperience({ projects }: { projects: PortfolioProject[] }) {
  return (
    <main className="zw-site wm-site wm-portfolio-page">
      <SiteHeader active="projects" />
      <section className="wm-page-hero" aria-labelledby="wm-page-title">
        <div className="wm-dot-grid" aria-hidden="true" />
        <motion.div variants={heroContainer} initial="hidden" animate="visible">
          <motion.span variants={heroItem} className="wm-badge">PORTFÓLIO / ZORYON WEB</motion.span>
          <motion.h1 variants={heroItem} id="wm-page-title">Projetos com <em>identidade.</em></motion.h1>
          <motion.p variants={heroItem}>Projetos reais e conceituais, cada um com seu próprio universo visual e um site para conhecer.</motion.p>
        </motion.div>
      </section>
      <WorkSection projects={projects} all />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
