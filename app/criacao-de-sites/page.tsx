import ServicePage, { serviceMetadata, type ServicePageData } from '../../components/ServicePage';

const data: ServicePageData = {
  path: '/criacao-de-sites',
  title: 'Criação de Sites Profissionais | Zoryon Web',
  description: 'Sites profissionais sob medida para apresentar sua empresa, facilitar contatos e apoiar seus objetivos. Conheça o processo de criação da Zoryon Web.',
  eyebrow: 'Criação de sites / Brasil',
  heading: 'Criação de sites profissionais para negócios que querem ir além.',
  lead: 'Seu site deve explicar o que você faz, funcionar bem em qualquer tela e facilitar o próximo passo de quem chega até sua marca.',
  introHeading: 'Um site com propósito, do primeiro contato à publicação.',
  intro: [
    'Criar um site profissional vai além de reunir textos e imagens. A estrutura precisa ajudar as pessoas a encontrar informações, entender seus serviços e entrar em contato sem obstáculos. Por isso, cada projeto começa pela proposta da sua empresa e pelo público que você deseja atender.',
    'A Zoryon Web desenvolve experiências digitais sob medida: páginas institucionais, portfólios, catálogos, lojas virtuais e páginas de campanha. O visual acompanha a identidade da marca, enquanto a navegação, a velocidade e a versão para celular recebem atenção desde o início.',
  ],
  highlights: [
    { title: 'Design responsivo', text: 'Conteúdo e componentes ajustados para celular, tablet e computador, sem deixar informações importantes fora da tela.' },
    { title: 'Navegação clara', text: 'Organização de páginas, menus e chamadas para ação que tornam simples descobrir seus serviços e seguir adiante.' },
    { title: 'Contato sem atrito', text: 'Integração com WhatsApp e outros canais relevantes para aproximar visitantes da sua equipe.' },
    { title: 'Base técnica de SEO', text: 'Títulos, descrições, hierarquia de conteúdo e indexabilidade preparados para mecanismos de busca entenderem o site.' },
  ],
  processHeading: 'Como o projeto ganha forma.',
  process: [
    { title: 'Entendimento', text: 'Alinhamos serviços, público, objetivos e referências para definir o papel de cada página.' },
    { title: 'Estrutura e direção visual', text: 'Organizamos o conteúdo e desenhamos a experiência mantendo a identidade da sua marca.' },
    { title: 'Desenvolvimento', text: 'Construímos o site responsivo e integramos os canais de contato necessários ao projeto.' },
    { title: 'Revisão e publicação', text: 'Conferimos conteúdo, links e funcionamento nas principais telas antes de colocar o site no ar.' },
  ],
  audienceHeading: 'Qual site faz sentido para o seu momento?',
  audience: 'Um site institucional ajuda a apresentar empresa, serviços e contato. Uma loja virtual organiza produtos e a jornada de compra. Landing pages concentram uma oferta ou campanha. A escolha depende do que você precisa comunicar e da ação que espera do visitante.',
  related: [
    { href: '/criacao-de-sites-lavras', label: 'Sites em Lavras/MG', text: 'Atendimento local para empresas de Lavras e região.' },
    { href: '/lojas-virtuais', label: 'Lojas virtuais', text: 'Uma experiência de compra organizada para seus produtos.' },
    { href: '/landing-pages', label: 'Landing pages', text: 'Páginas focadas em campanhas e geração de contatos.' },
  ],
  projectLinks: [
    { href: '/projetos/orale-odontologia', label: 'Oracle Odontologia', status: 'Projeto conceitual' },
    { href: '/projetos/serra-alta-imoveis', label: 'Serra Alta Imóveis', status: 'Projeto conceitual' },
  ],
  ctaMessage: 'Olá, Zoryon Web! Quero conversar sobre a criação de um site profissional.',
};

export const metadata = serviceMetadata(data);
export default function Page() { return <ServicePage data={data} />; }
