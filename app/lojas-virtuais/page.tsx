import ServicePage, { serviceMetadata, type ServicePageData } from '../../components/ServicePage';

const data: ServicePageData = {
  path: '/lojas-virtuais',
  title: 'Desenvolvimento de Lojas Virtuais | Zoryon Web',
  description: 'Desenvolvimento de lojas virtuais com catálogo claro, páginas de produto responsivas e jornada de compra planejada. Fale com a Zoryon Web.',
  eyebrow: 'E-commerce / Loja virtual',
  heading: 'Lojas virtuais que valorizam seus produtos e simplificam a compra.',
  lead: 'Seu e-commerce precisa ajudar a descobrir produtos, comparar opções e concluir o pedido com clareza, especialmente no celular.',
  introHeading: 'Uma experiência de compra desenhada para o seu catálogo.',
  intro: [
    'Uma loja virtual reúne mais do que uma vitrine bonita. Categorias, buscas, detalhes do produto, variações e informações de compra precisam conversar entre si para que o cliente avance sem dúvidas desnecessárias.',
    'A Zoryon Web planeja e desenvolve e-commerce de acordo com o tipo de produto e a operação do negócio. Estruturamos a navegação e as páginas para destacar o que importa, conectar etapas da jornada e oferecer uma experiência coerente no computador, tablet e celular.',
  ],
  highlights: [
    { title: 'Catálogo organizado', text: 'Categorias, filtros e páginas de produto planejados para tornar a descoberta mais simples.' },
    { title: 'Informação de produto', text: 'Fotos, descrições, variações e detalhes apresentados de forma legível e consistente.' },
    { title: 'Jornada de compra', text: 'Fluxos de sacola e checkout pensados para reduzir dúvidas e orientar os próximos passos.' },
    { title: 'Base técnica', text: 'Estrutura responsiva, desempenho e elementos de SEO técnico considerados desde o desenvolvimento.' },
  ],
  processHeading: 'Da operação à experiência online.',
  process: [
    { title: 'Mapeamento', text: 'Entendemos produtos, categorias, formas de compra e particularidades da sua operação.' },
    { title: 'Arquitetura da loja', text: 'Organizamos a vitrine, as páginas de produto e a jornada até o pedido.' },
    { title: 'Desenvolvimento', text: 'Criamos as interfaces e integrações definidas no escopo do projeto.' },
    { title: 'Testes e publicação', text: 'Conferimos navegação, responsividade e os fluxos de compra antes de colocar a loja no ar.' },
  ],
  audienceHeading: 'Uma loja para vender com mais organização.',
  audience: 'O formato é indicado a marcas com produtos e operação de venda online, seja uma coleção enxuta ou um catálogo com diversas categorias. Se a necessidade é apresentar a empresa e receber contatos, um site institucional pode ser mais adequado; para uma campanha específica, uma landing page costuma ser mais direta.',
  related: [
    { href: '/criacao-de-sites', label: 'Criação de sites', text: 'Entenda como organizamos a presença digital de uma empresa.' },
    { href: '/landing-pages', label: 'Landing pages', text: 'Páginas de campanha para destacar uma oferta ou coleção.' },
    { href: '/criacao-de-sites-lavras', label: 'Atendimento em Lavras', text: 'Conheça a criação de sites para negócios de Lavras/MG.' },
  ],
  projectLinks: [
    { href: '/projetos/casa-dos-fios', label: 'Mundix Aviamentos', status: 'Projeto real' },
    { href: '/projetos/wl-streetwear', label: 'WL Streetwear', status: 'Projeto conceitual' },
  ],
  ctaMessage: 'Olá, Zoryon Web! Quero conversar sobre uma loja virtual.',
};

export const metadata = serviceMetadata(data);
export default function Page() { return <ServicePage data={data} />; }
