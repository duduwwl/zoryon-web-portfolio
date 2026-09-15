import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight, ArrowUpRight, AtSign, CalendarDays, Check, Clock3, ExternalLink, MapPin, MessageCircle, ShieldCheck, ShoppingBag, Sparkles, Star } from 'lucide-react';
import { demoProjects, getDemoProject, type DemoProject } from '@/lib/demo-projects';
import DemoContactForm from './DemoContactForm';
import OriginalSiteViewer from './OriginalSiteViewer';
import ConceptCatalog from './ConceptCatalog';
import ConceptHeader from './ConceptHeader';
import CoffeeHero from './CoffeeHero';

type DemoPageProps = { params: Promise<{ slug: string; page?: string[] }> };
type Profile = {
  hero: string;
  original?: string;
  layout: 'editorial' | 'bold' | 'clean';
  promise: string;
  address: string;
  hours: string;
  steps: [string, string, string];
  faqs: [string, string][];
};

const whatsapp = 'https://wa.me/5535984259797';

const profiles: Record<string, Profile> = {
  'daniels-barber': {
    hero: '/demos/daniels-barber-real.webp', original: 'https://daniels-barber-lavras.duduwwl.chatgpt.site', layout: 'bold',
    promise: 'Atendimento com hora marcada, dois profissionais e escolha completa do serviço.', address: 'Av. Álvaro A. Leite, 657 · Lavras', hours: 'Seg–sex 08:30–18:30 · Sáb 08:30–14:00',
    steps: ['Escolha o serviço', 'Selecione Daniel ou Vinícius', 'Confirme dia e horário'],
    faqs: [['Preciso chegar antes?', 'Cinco minutos são suficientes para preparar o atendimento.'], ['Posso remarcar?', 'Sim. Fale pelo WhatsApp com pelo menos duas horas de antecedência.'], ['Atendem crianças?', 'Sim, mediante escolha do serviço infantil no agendamento.']],
  },
  'wl-streetwear': {
    hero: '/originais/wl-streetwear/assets/images/hero-graphic-tee.png', original: 'https://github.com/duduwwl/wl-streetwear', layout: 'bold',
    promise: 'Coleção, produto, sacola, checkout, conta e gestão em uma experiência completa de e-commerce.', address: 'Lavras · MG · entrega nacional', hours: 'Loja online · atendimento digital',
    steps: ['Explore o drop', 'Escolha peça e tamanho', 'Finalize no checkout'],
    faqs: [['O projeto possui catálogo completo?', 'Sim, com categorias, páginas individuais e filtros.'], ['O checkout funciona?', 'O fluxo demonstrativo inclui sacola, entrega e pagamento.'], ['Existe área de gestão?', 'Sim, com acesso às rotinas de catálogo e pedidos da demonstração.']],
  },
  'casa-dos-fios': {
    hero: '/demos/casa-dos-fios.webp', layout: 'clean',
    promise: 'Catálogo da Mundix com fios reais, variações de cor e carrinho organizado.', address: 'Loja online · envio para todo o Brasil', hours: 'Atendimento seg–sex · 09:00–18:00',
    steps: ['Encontre seu fio', 'Escolha a cor e quantidade', 'Revise no carrinho'],
    faqs: [['As cores são fiéis?', 'As fotos são preparadas para representar cada variante; telas podem apresentar pequenas diferenças.'], ['Como conferir o lote?', 'O lote aparece na etiqueta e pode ser confirmado com o atendimento antes do envio.'], ['Enviam para todo o Brasil?', 'Sim, com cálculo de prazo e frete no fechamento do pedido.']],
  },
  'pizza-lavras': {
    hero: '/demos/pizza-lavras.webp', original: 'https://duduwwl.github.io/pizzarialavras/', layout: 'bold',
    promise: 'Tradicionais, especiais e doces em um cardápio direto para pedir.', address: 'Lavras · MG · delivery local', hours: 'Ter–dom · 18:00–23:30',
    steps: ['Escolha tamanho e sabor', 'Adicione borda e bebida', 'Acompanhe a entrega'],
    faqs: [['Posso pedir meio a meio?', 'Sim, nas pizzas médias e grandes; o valor acompanha o sabor de maior preço.'], ['Qual o tempo de entrega?', 'A estimativa aparece no pedido e varia conforme o bairro e o movimento.'], ['Tem retirada?', 'Sim, basta selecionar retirada antes de confirmar.']],
  },
  aurele: {
    hero: '/demos/aurele-real.webp', original: 'https://aurelle-atelier-lavras.zoryonlabs.chatgpt.site', layout: 'editorial',
    promise: 'Coleção completa, filtros, favoritos, carrinho, conta e checkout demonstrativo.', address: 'Rua das Acácias, 248 · Centro · Lavras', hours: 'Seg–sáb · 10:00–19:00',
    steps: ['Explore a coleção', 'Escolha tamanho e cor', 'Receba ou retire em Lavras'],
    faqs: [['Como funcionam as trocas?', 'A solicitação pode ser feita em até sete dias após o recebimento.'], ['Há retirada em Lavras?', 'Sim, sem custo, após a confirmação de disponibilidade.'], ['Quais formas de pagamento?', 'Pix e cartões, com parcelamento informado no checkout.']],
  },
  'hamburgueria-do-gordao': {
    hero: '/demos/hamburgueria-real.webp', original: 'https://hamburgueria-ee939.web.app', layout: 'bold',
    promise: 'Cardápio real com tradicionais, artesanais, especiais, bebidas e pedido online.', address: 'Lavras · MG · entrega por bairros', hours: 'Todos os dias · 18:00–00:00',
    steps: ['Monte seu pedido', 'Informe entrega ou retirada', 'Acompanhe o preparo'],
    faqs: [['Dá para retirar ingredientes?', 'Sim, personalize o item antes de adicionar ao carrinho.'], ['Tem ponto da carne?', 'Nos artesanais você escolhe o ponto durante o pedido.'], ['Como acompanho?', 'Use o código recebido na confirmação para consultar o status.']],
  },
  'serra-alta-imoveis': {
    hero: '/demos/serra-alta-imoveis.webp', layout: 'clean',
    promise: 'Busca por perfil, imóveis selecionados, visita agendada e atendimento consultivo.', address: 'Lavras e região · atendimento com hora marcada', hours: 'Seg–sex · 09:00–18:00',
    steps: ['Defina o seu perfil', 'Compare imóveis', 'Agende uma visita'],
    faqs: [['Os imóveis são verificados?', 'A documentação é conferida antes do início da negociação.'], ['Atendem financiamento?', 'Sim, com orientação sobre as etapas e instituições disponíveis.'], ['Posso anunciar meu imóvel?', 'Sim, após avaliação comercial e fotográfica.']],
  },
  'orale-odontologia': {
    hero: '/photos/dental/prevencao.jpg', layout: 'clean',
    promise: 'Avaliação completa, plano de tratamento transparente e acompanhamento próximo.', address: 'Centro · Lavras · MG', hours: 'Seg–sex · 08:00–19:00',
    steps: ['Conte o que precisa', 'Faça a avaliação', 'Receba seu plano de cuidado'],
    faqs: [['A avaliação é completa?', 'Sim, inclui conversa, exame clínico e indicação dos próximos passos.'], ['Atendem urgência?', 'Os encaixes são avaliados pelo WhatsApp durante o horário de atendimento.'], ['Há opções de pagamento?', 'O plano financeiro é apresentado junto ao plano de tratamento.']],
  },
  'raiz-cafe': {
    hero: '/demos/raiz-cafe.webp', layout: 'editorial',
    promise: 'Menu, origem dos grãos, métodos de preparo e informações para visitar.', address: 'Lavras · MG · espaço fictício editável', hours: 'Seg–sáb · 08:00–19:00',
    steps: ['Escolha o método', 'Conheça a safra', 'Aproveite sem pressa'],
    faqs: [['Os grãos mudam?', 'Sim, o menu acompanha as melhores safras das fazendas parceiras.'], ['Tem opções sem lactose?', 'Sim, com bebidas vegetais disponíveis.'], ['Aceitam encomendas?', 'Bolos e kits de café podem ser encomendados com antecedência.']],
  },
};

function demoHref(projectSlug: string, pageSlug: string) {
  return pageSlug === 'inicio' ? `/projetos/${projectSlug}` : `/projetos/${projectSlug}/${pageSlug}`;
}

export async function generateMetadata({ params }: DemoPageProps): Promise<Metadata> {
  const { slug, page } = await params;
  const project = getDemoProject(slug);
  if (!project) return { title: 'Projeto não encontrado' };
  const current = project.navigation.find((item) => item.slug === (page?.[0] ?? 'inicio'));
  const title = `${current?.label ?? 'Início'} — ${project.title}`;
  const description = `${project.description} Projeto apresentado pela Zoryon Web.`;
  return { title, description, openGraph: { title, description, images: [] }, twitter: { title, description, images: [] } };
}

export function generateStaticParams() {
  return demoProjects.flatMap((project) => [{ slug: project.slug, page: undefined }, ...project.navigation.slice(1).map((item) => ({ slug: project.slug, page: [item.slug] }))]);
}

function ProjectHeader({ project, active }: { project: DemoProject; active: string }) {
  if (['raiz-cafe','serra-alta-imoveis'].includes(project.slug)) return <ConceptHeader project={project} active={active}/>;
  return <header className="showcase-header"><a className="showcase-brand" href={demoHref(project.slug, 'inicio')}>{project.slug === 'orale-odontologia' ? <img className="oracle-brand-mark" src="/brand/oracle-odontologia.svg" alt="" width={48} height={48}/> : <b>{project.mark}</b>}<span>{project.title}<small>{project.category}</small></span></a><nav aria-label={`Navegação de ${project.title}`}>{project.navigation.map((item) => <a key={item.slug} className={active === item.slug ? 'active' : ''} href={demoHref(project.slug, item.slug)}>{item.label}</a>)}</nav>{project.slug !== 'orale-odontologia' && <a className="showcase-nav-cta" href={demoHref(project.slug, project.navigation[3].slug)}>{project.navigation[3].label} <ArrowUpRight size={15} /></a>}</header>;
}

function ProjectFooter({ project, profile }: { project: DemoProject; profile: Profile }) {
  if (['raiz-cafe','serra-alta-imoveis'].includes(project.slug)) {
    const coffee=project.slug==='raiz-cafe';
    return <footer className="concept-footer"><div className="concept-footer-intro"><a className="concept-brand" href={demoHref(project.slug,'inicio')}><img src={`/brand/${project.slug}.png`} alt="" width={58} height={58}/><span>{project.title}<small>{coffee?'Café, cozinha e boas conversas':'Seu lugar em Lavras'}</small></span></a><p>{coffee?'Café passado na hora, receitas mineiras e tempo para ficar. Uma pausa boa começa à mesa.':'Da primeira busca à próxima mudança, espaço para escolher com calma. Conheça possibilidades de morar e investir em Lavras.'}</p></div><nav aria-label={`Links do rodapé de ${project.title}`}><h2>{coffee?'Conheça o Raiz':'Encontre seu lugar'}</h2>{project.navigation.map(item=><a key={item.slug} href={demoHref(project.slug,item.slug)}>{item.label}<ArrowUpRight size={14}/></a>)}</nav><div className="concept-footer-info"><h2>{coffee?'Planeje sua visita':'Vamos conversar'}</h2><p><MapPin size={18}/><span>Lavras, Minas Gerais<br/><small>{coffee?'Endereço a definir neste modelo':'Visitas com hora marcada'}</small></span></p><p><Clock3 size={18}/><span>{coffee?'Segunda a sábado':'Segunda a sexta'}<br/><small>{coffee?'Das 8h às 19h':'Das 9h às 18h'}</small></span></p></div><div className="concept-footer-bottom"><span>Conceito demonstrativo da Zoryon Web · não é um estabelecimento real</span><a href="/#projetos">Voltar ao portfólio <ArrowUpRight size={14}/></a></div></footer>;
  }
  return <footer className="showcase-footer"><div>{project.slug === 'orale-odontologia' ? <img className="oracle-brand-mark" src="/brand/oracle-odontologia.svg" alt="Logo Oracle Odontologia" width={48} height={48}/> : <b>{project.mark}</b>}<h3>{project.title}</h3><p>{project.description}</p></div><div><span>Explore</span>{project.navigation.map((item) => <a key={item.slug} href={demoHref(project.slug, item.slug)}>{item.label}</a>)}</div><div><span>Atendimento</span><p>{profile.address}</p><p>{profile.hours}</p></div><div className="showcase-footer-bottom"><span>Projeto apresentado por Zoryon Web</span><span>Lavras · MG · 2026</span></div></footer>;
}

function ClosingCta({ project }: { project: DemoProject }) {
  if (project.slug === 'orale-odontologia') return null;
  const message = encodeURIComponent(`Olá, Zoryon Web! Gostei do projeto ${project.title} e quero um site nessa direção.`);
  return <section className="showcase-closing"><span><Sparkles size={15} /> Projeto completo</span><h2>Gostou desta direção<br />para a sua marca?</h2><a href={`${whatsapp}?text=${message}`} target="_blank" rel="noreferrer">Quero um site assim <ArrowUpRight /></a></section>;
}

function HomePage({ project, profile }: { project: DemoProject; profile: Profile }) {
  const isDental = project.slug === 'orale-odontologia';
  return <>{project.slug === 'raiz-cafe' ? <CoffeeHero/> : <section className="showcase-hero"><img src={profile.hero} alt={`Imagem principal de ${project.title}`} /><div className="showcase-hero-shade" /><div className="showcase-hero-copy"><span>{project.heroKicker}</span><h1>{project.tagline}</h1><p>{project.description}</p><div><a className="showcase-primary" href={demoHref(project.slug, project.navigation[1].slug)}>{project.primaryAction} <ArrowRight /></a><a className="showcase-text-link" href={demoHref(project.slug, project.navigation[2].slug)}>{isDental ? 'Conhecer a clínica' : 'Conhecer a marca'}</a></div></div><div className="showcase-hero-note"><strong>01</strong><span>{profile.promise}</span></div></section>}<section className="showcase-trust"><div><Clock3 /><span>{profile.hours}</span></div><div><MapPin /><span>{profile.address}</span></div><div><ShieldCheck /><span>Atendimento direto e seguro</span></div></section><section className="showcase-selection"><div className="showcase-section-title"><span>{isDental ? 'Especialidades' : 'Seleção em destaque'}</span><h2>{isDental ? <>Tratamentos para<br />cada necessidade.</> : <>{project.navigation[1].label}<br />para escolher com calma.</>}</h2><a href={demoHref(project.slug, project.navigation[1].slug)}>Ver tudo <ArrowRight /></a></div><div className="showcase-product-grid">{project.offers.map((offer, index) => <article key={offer.title}>{offer.image ? <img src={offer.image} alt={offer.title} /> : <div className="showcase-card-image" style={{ backgroundImage: `url(${profile.hero})`, backgroundPosition: `${20 + index * 22}% center` }} />}<div><small>0{index + 1}</small><h3>{offer.title}</h3><p>{offer.description}</p><strong>{offer.price}</strong></div></article>)}</div></section><section className="showcase-story-block"><div className="showcase-story-image"><img src={profile.hero} alt={`Universo visual de ${project.title}`} /><span>{project.visualWord}</span></div><div><span>Nossa essência</span><h2>{project.storyTitle}</h2><p>{project.story}</p><ul>{project.highlights.map((item) => <li key={item}><Check /> {item}</li>)}</ul><a href={demoHref(project.slug, project.navigation[2].slug)}>Conhecer em detalhes <ArrowUpRight /></a></div></section>{project.slug !== 'serra-alta-imoveis' && <section className="showcase-numbers">{project.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</section>}<ClosingCta project={project} /></>;
}

function OffersPage({ project, profile }: { project: DemoProject; profile: Profile }) {
  const isBooking = project.slug === 'daniels-barber';
  if (!isBooking) return <><section className="showcase-page-hero"><img src={profile.hero} alt=""/><div><span>Projeto conceito · seleção completa</span><h1>{project.navigation[1].label}</h1><p>{profile.promise}</p></div></section><ConceptCatalog project={project} hero={profile.hero}/><Faq project={project} profile={profile}/><ClosingCta project={project}/></>;
  return <><section className="showcase-page-hero"><img src={profile.hero} alt="" /><div><span>{isBooking ? 'Agenda online' : 'Seleção completa'}</span><h1>{project.navigation[1].label}</h1><p>{profile.promise}</p></div></section><section className="showcase-catalog"><div className="showcase-filter"><button className="active">Todos</button>{project.highlights.slice(0, 3).map((item) => <button key={item}>{item}</button>)}</div><div className="showcase-catalog-grid">{project.offers.map((offer, index) => <article key={offer.title}>{offer.image ? <img src={offer.image} alt={offer.title} /> : <div className="showcase-card-image" style={{ backgroundImage: `url(${profile.hero})`, backgroundPosition: `${15 + index * 25}% center` }} />}<div><small>{project.category}</small><h2>{offer.title}</h2><p>{offer.description}</p><footer><strong>{offer.price}</strong><button aria-label={`Selecionar ${offer.title}`}>{isBooking ? <CalendarDays /> : <ShoppingBag />}</button></footer></div></article>)}</div></section>{isBooking && <section className="showcase-booking"><div><span>02 / Profissional</span><h2>Com quem você quer cuidar do seu estilo?</h2></div><div className="showcase-barbers"><article><b>D</b><h3>Daniel</h3><p>Degradê, cortes clássicos e barba.</p><span>Selecionar</span></article><article><b>V</b><h3>Vinícius</h3><p>Navalhado, freestyle e acabamento.</p><span>Selecionar</span></article></div><div className="showcase-slots"><span>Próximos horários</span>{['08:30', '09:30', '10:30', '14:00', '16:30', '18:00'].map((time) => <button key={time}>{time}</button>)}</div></section>}<section className="showcase-how"><div><span>Como funciona</span><h2>Simples do começo ao fim.</h2></div><ol>{profile.steps.map((step, index) => <li key={step}><b>0{index + 1}</b><span>{step}</span></li>)}</ol></section><Faq project={project} profile={profile} /><ClosingCta project={project} /></>;
}

function DetailPage({ project, profile }: { project: DemoProject; profile: Profile }) {
  return <><section className="showcase-editorial"><div><span>{project.navigation[2].label}</span><h1>{project.storyTitle}</h1><p>{project.story}</p></div><img src={profile.hero} alt={`Detalhe de ${project.title}`} /></section><section className="showcase-values">{project.highlights.map((item, index) => <article key={item}><small>0{index + 1}</small><h2>{item}</h2><p>Cada etapa foi pensada para entregar uma experiência clara, cuidadosa e coerente com a proposta da marca.</p></article>)}</section><section className="showcase-process"><div><span>Experiência</span><h2>Da primeira escolha<br />ao resultado final.</h2></div><ol>{profile.steps.map((step, index) => <li key={step}><b>{index + 1}</b><div><h3>{step}</h3><p>Informação objetiva, orientação quando necessário e confirmação em cada etapa.</p></div></li>)}</ol></section><section className="showcase-quote"><Star /><blockquote>“Uma experiência bonita por fora, mas principalmente fácil de entender e usar.”</blockquote><span>Direção de projeto · Zoryon Web</span></section><Faq project={project} profile={profile} /><ClosingCta project={project} /></>;
}

function Faq({ project, profile }: { project: DemoProject; profile: Profile }) {
  return <section className="showcase-faq"><div><span>Dúvidas frequentes</span><h2>Antes de escolher.</h2><p>Informações importantes para navegar pelo projeto {project.title}.</p></div><div>{profile.faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<b>+</b></summary><p>{answer}</p></details>)}</div></section>;
}

function ContactPage({ project, profile }: { project: DemoProject; profile: Profile }) {
  if (project.slug === 'casa-dos-fios') return <CartPage project={project} profile={profile} />;
  return <><section className="showcase-contact"><div><span>Contato</span><h1>{project.contactPrompt}</h1><p>Preencha os dados para montar uma mensagem e falar diretamente com a Zoryon Web sobre este modelo de site.</p><div className="showcase-contact-info"><p><MapPin /> {profile.address}</p><p><Clock3 /> {profile.hours}</p><p><AtSign /> @{project.slug}</p></div></div><DemoContactForm projectTitle={project.title} /></section><Faq project={project} profile={profile} /></>;
}

function CartPage({ project, profile }: { project: DemoProject; profile: Profile }) {
  const item = project.offers[0];
  return <><section className="showcase-cart"><div><span>Seu carrinho</span><h1>Revise antes de finalizar.</h1><article>{item.image && <img src={item.image} alt={item.title} />}<div><small>Cor: natural · Quantidade: 2</small><h2>{item.title}</h2><p>{item.description}</p><strong>2 × {item.price.replace('A partir de ', '')}</strong></div><button>×</button></article></div><aside><span>Resumo do pedido</span><p>Subtotal <b>R$ 37,80</b></p><p>Frete <b>Calculado no checkout</b></p><hr /><p>Total <strong>R$ 37,80</strong></p><a href={`${whatsapp}?text=${encodeURIComponent('Olá, Zoryon Web! Gostei da loja Mundix e quero um e-commerce nessa direção.')}`} target="_blank" rel="noreferrer">Continuar para o checkout <ArrowRight /></a><small><ShieldCheck /> Ambiente demonstrativo seguro</small></aside></section><section className="showcase-how"><div><span>Compra completa</span><h2>Do produto à confirmação.</h2></div><ol>{profile.steps.map((step, index) => <li key={step}><b>0{index + 1}</b><span>{step}</span></li>)}</ol></section></>;
}

export default async function DemoProjectPage({ params }: DemoPageProps) {
  const { slug, page } = await params;
  const project = getDemoProject(slug);
  if (!project || !profiles[slug]) return <main className="demo-not-found"><h1>Projeto não encontrado.</h1><a href="/#projetos">Voltar ao portfólio</a></main>;
  const profile = profiles[slug];
  if (['daniels-barber', 'wl-streetwear', 'casa-dos-fios', 'pizza-lavras', 'aurele', 'hamburgueria-do-gordao'].includes(slug)) {
    return <OriginalSiteViewer slug={slug} title={slug === 'hamburgueria-do-gordao' ? 'Hamburgueria Na Brasa' : project.title} initialPage={page?.[0]} />;
  }
  const requested = page?.[0] ?? 'inicio';
  const active = project.navigation.some((item) => item.slug === requested) ? requested : 'inicio';
  const vars = { '--demo-canvas': project.theme.canvas, '--demo-surface': project.theme.surface, '--demo-text': project.theme.text, '--demo-muted': project.theme.muted, '--demo-accent': project.theme.accent, '--demo-accent-2': project.theme.accent2 } as CSSProperties;
  return <main className={`showcase-shell showcase-theme-${profile.layout}`} data-demo={project.slug} style={vars}><aside className="showcase-toolbar"><a href="/#projetos"><ArrowLeft /> Voltar à Zoryon Web</a><span>Você está navegando em um projeto completo</span>{profile.original ? <a href={profile.original} target="_blank" rel="noreferrer">Abrir versão original <ExternalLink /></a> : <a href={`${whatsapp}?text=${encodeURIComponent(`Olá, Zoryon Web! Quero saber mais sobre o projeto ${project.title}.`)}`} target="_blank" rel="noreferrer">Falar sobre este projeto <MessageCircle /></a>}</aside><ProjectHeader project={project} active={active} />{active === 'inicio' && <HomePage project={project} profile={profile} />}{active === project.navigation[1].slug && <OffersPage project={project} profile={profile} />}{active === project.navigation[2].slug && <DetailPage project={project} profile={profile} />}{active === project.navigation[3].slug && <ContactPage project={project} profile={profile} />}<ProjectFooter project={project} profile={profile} /></main>;
}
