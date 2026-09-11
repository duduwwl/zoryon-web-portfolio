'use client';

import { useMemo, useState, type CSSProperties } from 'react';
import {
  Activity, ArrowLeft, ArrowRight, ArrowUpRight, Bell, Bot, Car, Check,
  CheckCircle2, ChevronRight, CircleDollarSign, Clock3, Cloud, CreditCard,
  Dumbbell, Gauge, LayoutDashboard, MapPin, Menu, Navigation, Play, Search,
  Settings2, ShieldCheck, ShoppingBag, Sparkles, Target, TrendingDown, Users,
  UtensilsCrossed, WalletCards, X, Zap,
} from 'lucide-react';
import type { ProductDemo as ProductDemoData } from '@/lib/product-demos';

const whatsapp = 'https://wa.me/5535984259797';

function DemoTopbar({ demo }: { demo: ProductDemoData }) {
  return <div className="product-demo-topbar">
    <a href="/#projetos"><ArrowLeft /> Voltar à Zoryon Web</a>
    <span>Projeto fictício · experiência navegável</span>
    <a href={`${whatsapp}?text=${encodeURIComponent(`Olá, Zoryon Web! Gostei do projeto ${demo.title}.`)}`} target="_blank" rel="noreferrer">Criar algo assim <ArrowUpRight /></a>
  </div>;
}

function DemoHeader({ demo, active, setActive }: { demo: ProductDemoData; active: string; setActive: (value: string) => void }) {
  const [open, setOpen] = useState(false);
  return <header className="product-demo-header">
    <button className="product-brand" onClick={() => setActive('Visão geral')} aria-label={`Ir ao início de ${demo.title}`}>
      <b style={{ background: demo.accent }}>{demo.mark}</b><span>{demo.title}<small>{demo.category}</small></span>
    </button>
    <button className="product-menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'is-open' : ''} aria-label={`Navegação de ${demo.title}`}>
      {['Visão geral', 'Atividade', 'Relatórios'].map((item) => <button key={item} className={active === item ? 'active' : ''} onClick={() => { setActive(item); setOpen(false); }}>{item}</button>)}
    </nav>
    <a className="product-demo-cta" href={`${whatsapp}?text=${encodeURIComponent(`Olá, Zoryon Web! Quero desenvolver um ${demo.kind === 'Apps' ? 'aplicativo' : 'SaaS'} como ${demo.title}.`)}`} target="_blank" rel="noreferrer">Solicitar projeto <ArrowUpRight /></a>
  </header>;
}

const rideOptions = [
  { name: 'Veloz', detail: 'Chega em 4 min', price: 'R$ 14,80' },
  { name: 'Comfort', detail: 'Mais espaço · 6 min', price: 'R$ 19,40' },
  { name: 'Elétrico', detail: 'Viagem sustentável · 8 min', price: 'R$ 22,10' },
];

const foodItems = [
  { name: 'Smash da Casa', place: 'Na Brasa', price: 29.9, image: '/demos/products/burger-classic.webp' },
  { name: 'Bacon Crocante', place: 'Na Brasa', price: 34.9, image: '/demos/products/burger-bacon.webp' },
  { name: 'Costela BBQ', place: 'Na Brasa', price: 38.5, image: '/demos/products/burger-costela.webp' },
];

function RideExperience({ active }: { active: string }) {
  const [selected, setSelected] = useState(0);
  const [booked, setBooked] = useState(false);
  return <div className="app-experience-grid">
    <section className="phone-stage">
      <div className="phone-shell ride-phone">
        <div className="phone-status"><span>9:41</span><span>● ◒ ▰</span></div>
        <div className="app-phone-heading"><div><small>Boa tarde, Marina</small><h1>{active === 'Atividade' ? 'Suas corridas' : active === 'Relatórios' ? 'Resumo de mobilidade' : 'Para onde vamos?'}</h1></div><button aria-label="Notificações"><Bell /></button></div>
        <div className="ride-map" aria-label="Prévia da rota"><span className="map-street street-one" /><span className="map-street street-two" /><span className="map-route" /><i className="map-pin origin" /><i className="map-pin destination" /><span className="driver-dot"><Car /></span><div><b>12 min</b><small>até o destino</small></div></div>
        <label className="destination-field"><Search /><input defaultValue="Praça Dr. Augusto Silva" aria-label="Destino" /></label>
        <div className="ride-options">{rideOptions.map((option, index) => <button key={option.name} className={selected === index ? 'selected' : ''} onClick={() => { setSelected(index); setBooked(false); }}><span><Car /></span><div><b>{option.name}</b><small>{option.detail}</small></div><strong>{option.price}</strong></button>)}</div>
        <button className={`app-primary-action ${booked ? 'success' : ''}`} onClick={() => setBooked(true)}>{booked ? <><CheckCircle2 /> Motorista encontrado</> : <>Confirmar {rideOptions[selected].name}<ArrowRight /></>}</button>
      </div>
    </section>
    <aside className="product-story-panel"><span>Aplicativo de mobilidade</span><h2>Da origem ao destino, sem dúvida no caminho.</h2><p>O fluxo mostra preço, tempo e categoria antes da confirmação. Após o pedido, o passageiro acompanha o motorista e compartilha a rota.</p><div className="story-metrics"><article><b>4,9</b><span>nota média dos motoristas</span></article><article><b>2 min</b><span>para solicitar uma corrida</span></article></div><ol><li><Check /> Destino e estimativa claros</li><li><Check /> Pagamento por Pix ou cartão</li><li><Check /> Histórico e suporte da viagem</li></ol></aside>
  </div>;
}

function FoodExperience({ active }: { active: string }) {
  const [query, setQuery] = useState('');
  const [cart, setCart] = useState(0);
  const [ordered, setOrdered] = useState(false);
  const visible = useMemo(() => foodItems.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())), [query]);
  return <div className="app-experience-grid">
    <section className="phone-stage food-stage">
      <div className="phone-shell food-phone">
        <div className="phone-status"><span>9:41</span><span>● ◒ ▰</span></div>
        <div className="food-location"><div><small>Entregar em</small><b>Centro, Lavras <ChevronRight /></b></div><button aria-label="Carrinho"><ShoppingBag /><em>{cart}</em></button></div>
        <h1>{active === 'Atividade' ? 'Pedidos recentes' : active === 'Relatórios' ? 'Seus favoritos' : 'O que vai pedir?'}</h1>
        <label className="food-search"><Search /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar no cardápio" /></label>
        <div className="food-chips"><button className="active">Destaques</button><button>Burgers</button><button>Combos</button></div>
        <div className="food-list">{visible.map((item) => <article key={item.name}><img src={item.image} alt={item.name} /><div><small>{item.place} · 25–35 min</small><b>{item.name}</b><span>R$ {item.price.toFixed(2).replace('.', ',')}</span></div><button onClick={() => { setCart(cart + 1); setOrdered(false); }} aria-label={`Adicionar ${item.name}`}>+</button></article>)}</div>
        <button className={`app-primary-action food-action ${ordered ? 'success' : ''}`} disabled={cart === 0} onClick={() => setOrdered(true)}>{ordered ? <><CheckCircle2 /> Pedido confirmado</> : <><span>Ver sacola · {cart} {cart === 1 ? 'item' : 'itens'}</span><ArrowRight /></>}</button>
      </div>
    </section>
    <aside className="product-story-panel"><span>Aplicativo de delivery</span><h2>Escolher, pedir e acompanhar em poucos toques.</h2><p>Busca, cardápio, personalização e carrinho convivem em uma jornada objetiva, pensada para reduzir abandono e aumentar recompra.</p><div className="story-metrics"><article><b>28 min</b><span>entrega estimada</span></article><article><b>12%</b><span>de cashback no clube</span></article></div><ol><li><Check /> Cardápio visual e pesquisável</li><li><Check /> Carrinho com atualização imediata</li><li><Check /> Rastreamento do preparo</li></ol></aside>
  </div>;
}

function FitnessExperience({ active }: { active: string }) {
  const [workout, setWorkout] = useState('Força total');
  const [started, setStarted] = useState(false);
  return <div className="app-experience-grid">
    <section className="phone-stage fitness-stage">
      <div className="phone-shell fitness-phone">
        <div className="phone-status"><span>9:41</span><span>● ◒ ▰</span></div>
        <div className="app-phone-heading"><div><small>Quinta-feira, 11 set</small><h1>{active === 'Atividade' ? 'Seu histórico' : active === 'Relatórios' ? 'Evolução mensal' : 'Seu ritmo hoje'}</h1></div><button aria-label="Metas"><Target /></button></div>
        <div className="fitness-score"><div className="progress-ring"><span><b>72%</b><small>semana</small></span></div><div><small>Sequência atual</small><b>8 dias ativos</b><span>Mais 2 treinos para a meta</span></div></div>
        <div className="fitness-summary"><span><Activity /> 6.420<small>passos</small></span><span><Zap /> 486<small>kcal</small></span><span><Clock3 /> 42<small>minutos</small></span></div>
        <h2>Treinos para hoje</h2>
        <div className="workout-list">{['Força total', 'Mobilidade', 'Corrida leve'].map((item, index) => <button key={item} className={workout === item ? 'selected' : ''} onClick={() => { setWorkout(item); setStarted(false); }}><span><Dumbbell /></span><div><b>{item}</b><small>{[32, 18, 24][index]} min · nível adaptado</small></div><ChevronRight /></button>)}</div>
        <button className={`app-primary-action fitness-action ${started ? 'success' : ''}`} onClick={() => setStarted(!started)}>{started ? <><Activity /> Treino em andamento</> : <><Play /> Começar {workout}</>}</button>
      </div>
    </section>
    <aside className="product-story-panel"><span>Aplicativo de bem-estar</span><h2>Consistência visível, metas que cabem no dia.</h2><p>O plano se adapta à rotina e transforma progresso em decisões simples: o que fazer agora, quanto falta e como a semana evoluiu.</p><div className="story-metrics"><article><b>8 dias</b><span>de sequência ativa</span></article><article><b>72%</b><span>da meta semanal</span></article></div><ol><li><Check /> Treinos guiados e adaptativos</li><li><Check /> Metas e indicadores semanais</li><li><Check /> Histórico de evolução</li></ol></aside>
  </div>;
}

type SaasRow = { name: string; detail: string; value: string; status: string };

const saasContent: Record<string, { headline: string; metrics: [string, string, string][]; rows: SaasRow[]; action: string; saving: string }> = {
  'orbit-ai': {
    headline: 'Agentes trabalhando. Você no controle.',
    metrics: [['1.284', 'execuções hoje', '+18%'], ['94,8%', 'concluídas sem revisão', '+3,2%'], ['38 h', 'tempo poupado', 'esta semana']],
    rows: [
      { name: 'Qualificação de leads', detail: 'CRM · a cada 15 min', value: '428 tarefas', status: 'Operando' },
      { name: 'Resumo de suporte', detail: 'Help desk · contínuo', value: '316 tarefas', status: 'Operando' },
      { name: 'Relatório comercial', detail: 'Planilhas · diário', value: 'Aguardando', status: 'Revisão' },
    ], action: 'Executar agente', saving: '12 tarefas adicionadas à fila',
  },
  'nexo-flow': {
    headline: 'Agenda, clientes e receita no mesmo fluxo.',
    metrics: [['R$ 48,2k', 'receita no mês', '+12,4%'], ['86%', 'agenda ocupada', '+7,1%'], ['R$ 9,8k', 'repasses pendentes', 'sexta-feira']],
    rows: [
      { name: 'Marina Costa', detail: 'Consultoria · 10:00', value: 'R$ 480,00', status: 'Confirmado' },
      { name: 'Lucas Andrade', detail: 'Retorno · 11:30', value: 'R$ 220,00', status: 'Pago' },
      { name: 'Amanda Freitas', detail: 'Sessão · 14:00', value: 'R$ 350,00', status: 'Pendente' },
    ], action: 'Criar cobrança', saving: 'Cobrança enviada com sucesso',
  },
  'lumen-cloud': {
    headline: 'Cada real da nuvem com destino claro.',
    metrics: [['R$ 82,6k', 'gasto no mês', '-4,8%'], ['R$ 12,4k', 'economia potencial', '15 ações'], ['73%', 'recursos otimizados', '+9%']],
    rows: [
      { name: 'Instâncias ociosas', detail: 'AWS · produção', value: 'R$ 4.820/mês', status: 'Alta prioridade' },
      { name: 'Storage sem acesso', detail: 'GCP · 90+ dias', value: 'R$ 2.140/mês', status: 'Recomendado' },
      { name: 'Reserva de capacidade', detail: 'Azure · compute', value: 'R$ 1.760/mês', status: 'Simular' },
    ], action: 'Aplicar recomendação', saving: 'Economia projetada atualizada',
  },
};

function SaasExperience({ demo, active }: { demo: ProductDemoData; active: string }) {
  const content = saasContent[demo.slug];
  const [resolved, setResolved] = useState<number[]>([]);
  const [message, setMessage] = useState('');
  const icon = demo.slug === 'orbit-ai' ? <Bot /> : demo.slug === 'nexo-flow' ? <WalletCards /> : <Cloud />;
  const apply = (index: number) => { setResolved([...new Set([...resolved, index])]); setMessage(content.saving); };
  return <div className="saas-workspace">
    <aside className="saas-sidebar"><div className="saas-sidebar-title"><b style={{ background: demo.accent }}>{demo.mark}</b><span>{demo.title}</span></div><nav>{[['Visão geral', <LayoutDashboard key="a" />], ['Operação', icon], ['Clientes', <Users key="c" />], ['Financeiro', <CreditCard key="d" />], ['Configurações', <Settings2 key="e" />]].map(([label, itemIcon], index) => <button key={String(label)} className={index === 0 ? 'active' : ''}>{itemIcon}{label}</button>)}</nav><div className="saas-user"><span>MC</span><div><b>Marina Costa</b><small>Administradora</small></div></div></aside>
    <main className="saas-main">
      <header><div><small>{active}</small><h1>{content.headline}</h1></div><div><button aria-label="Notificações"><Bell /></button><button className="saas-header-action" onClick={() => setMessage(content.saving)}><Sparkles /> {content.action}</button></div></header>
      <section className="saas-metrics">{content.metrics.map(([value, label, trend]) => <article key={label}><div><span>{label}</span><Gauge /></div><b>{value}</b><small>{trend}</small></article>)}</section>
      <section className="saas-chart-card"><div className="saas-card-heading"><div><span>{demo.slug === 'lumen-cloud' ? 'Custos consolidados' : demo.slug === 'nexo-flow' ? 'Receita processada' : 'Volume de execuções'}</span><b>Últimos 7 dias</b></div><button>Esta semana <ChevronRight /></button></div><div className="saas-chart" aria-label="Gráfico dos últimos sete dias">{[44, 58, 52, 76, 67, 88, 94].map((height, index) => <span key={index} style={{ height: `${height}%`, background: demo.accent }}><i>{['S', 'T', 'Q', 'Q', 'S', 'S', 'D'][index]}</i></span>)}</div></section>
      <section className="saas-table-card"><div className="saas-card-heading"><div><span>{demo.slug === 'orbit-ai' ? 'Agentes em produção' : demo.slug === 'nexo-flow' ? 'Próximos atendimentos' : 'Recomendações prioritárias'}</span><b>Atualizado agora</b></div><button>Ver tudo <ArrowUpRight /></button></div><div className="saas-table">{content.rows.map((row, index) => <article key={row.name} className={resolved.includes(index) ? 'resolved' : ''}><span className="row-icon">{demo.slug === 'orbit-ai' ? <Bot /> : demo.slug === 'nexo-flow' ? <Users /> : <TrendingDown />}</span><div><b>{row.name}</b><small>{row.detail}</small></div><strong>{resolved.includes(index) ? 'Concluído' : row.value}</strong><span className="row-status">{resolved.includes(index) ? <CheckCircle2 /> : null}{resolved.includes(index) ? 'Aplicado' : row.status}</span><button onClick={() => apply(index)} disabled={resolved.includes(index)}>{resolved.includes(index) ? <Check /> : <ArrowRight />}</button></article>)}</div></section>
      {message && <button className="saas-toast" onClick={() => setMessage('')}><CheckCircle2 /> {message}<X /></button>}
    </main>
  </div>;
}

function ProductFooter({ demo }: { demo: ProductDemoData }) {
  return <footer className="product-demo-footer"><div><b style={{ background: demo.accent }}>{demo.mark}</b><span><strong>{demo.title}</strong><small>Projeto fictício desenvolvido pela Zoryon Web</small></span></div><p>Experiência demonstrativa. Dados, marcas e operações apresentados são fictícios.</p><a href={`${whatsapp}?text=${encodeURIComponent(`Olá, Zoryon Web! Quero conversar sobre um projeto como ${demo.title}.`)}`} target="_blank" rel="noreferrer">Desenvolver meu projeto <ArrowUpRight /></a></footer>;
}

export default function ProductDemo({ demo }: { demo: ProductDemoData }) {
  const [active, setActive] = useState('Visão geral');
  return <main className={`product-demo-shell product-${demo.kind.toLowerCase()} product-theme-${demo.theme}`} style={{ '--product-accent': demo.accent } as CSSProperties}>
    <DemoTopbar demo={demo} />
    <DemoHeader demo={demo} active={active} setActive={setActive} />
    {demo.kind === 'Apps' && demo.slug === 'veloz-mobilidade' && <RideExperience active={active} />}
    {demo.kind === 'Apps' && demo.slug === 'mesa-go' && <FoodExperience active={active} />}
    {demo.kind === 'Apps' && demo.slug === 'ritmo-fit' && <FitnessExperience active={active} />}
    {demo.kind === 'SaaS' && <SaasExperience demo={demo} active={active} />}
    <ProductFooter demo={demo} />
  </main>;
}
