import ServicePage, { serviceMetadata, type ServicePageData } from '../../components/ServicePage';

const data: ServicePageData = {
  path: '/landing-pages',
  title: 'Criação de Landing Pages | Zoryon Web',
  description: 'Landing pages para campanhas, lançamentos e geração de leads, com mensagem objetiva, design responsivo e caminho claro para contato.',
  eyebrow: 'Campanhas / Geração de contatos',
  heading: 'Landing pages para transformar interesse em conversa.',
  lead: 'Uma página focada em uma oferta ou objetivo ajuda o visitante a entender o valor da proposta e escolher o próximo passo.',
  introHeading: 'Menos distração. Mais clareza para sua campanha.',
  intro: [
    'Uma landing page concentra uma mensagem específica: apresentar um serviço, divulgar um lançamento, receber inscrições ou abrir conversas comerciais. Em vez de dispersar a atenção em muitos caminhos, ela organiza as informações na sequência certa para quem chegou por anúncio, rede social ou busca.',
    'A Zoryon Web cria páginas de campanha alinhadas à identidade da marca. Conteúdo, hierarquia visual, perguntas essenciais e chamadas para ação são planejados em conjunto. O objetivo não é prometer um número de leads, mas construir uma experiência clara, rápida e fácil de usar.',
  ],
  highlights: [
    { title: 'Mensagem objetiva', text: 'Oferta, benefícios e informações importantes apresentados na ordem que facilita a compreensão.' },
    { title: 'Chamada para ação', text: 'Botões e pontos de contato visíveis, como WhatsApp ou formulário, conforme a necessidade da campanha.' },
    { title: 'Design responsivo', text: 'Leitura e interação confortáveis em celulares, tablets e computadores.' },
    { title: 'Base técnica de campanha', text: 'Metadados, carregamento e estrutura semântica preparados para uma página pública bem construída.' },
  ],
  processHeading: 'Uma página com um objetivo definido.',
  process: [
    { title: 'Objetivo e público', text: 'Alinhamos a oferta, a origem do tráfego e a ação que a campanha espera receber.' },
    { title: 'Roteiro da página', text: 'Organizamos argumentos, dúvidas frequentes e pontos de contato em uma sequência coerente.' },
    { title: 'Criação', text: 'Desenvolvemos o layout e os elementos funcionais mantendo a identidade visual da marca.' },
    { title: 'Revisão', text: 'Conferimos texto, links, responsividade e funcionamento da chamada para ação antes da publicação.' },
  ],
  audienceHeading: 'Quando escolher uma landing page?',
  audience: 'Ela é indicada quando existe uma oferta, campanha ou objetivo de contato bem definido. Para apresentar vários serviços e construir uma presença mais ampla, um site profissional pode ser a base principal. Se a intenção é vender uma linha de produtos com catálogo e checkout, a loja virtual é o formato mais completo.',
  related: [
    { href: '/criacao-de-sites', label: 'Criação de sites', text: 'Uma presença digital completa para a empresa e seus serviços.' },
    { href: '/lojas-virtuais', label: 'Lojas virtuais', text: 'Catálogo, páginas de produto e jornada de compra.' },
    { href: '/criacao-de-sites-lavras', label: 'Sites em Lavras/MG', text: 'Atendimento local para negócios da cidade e região.' },
  ],
  projectLinks: [
    { href: '/projetos/serra-alta-imoveis', label: 'Serra Alta Imóveis', status: 'Projeto fictício' },
    { href: '/projetos/orale-odontologia', label: 'Oracle Odontologia', status: 'Projeto fictício' },
  ],
  ctaMessage: 'Olá, Zoryon Web! Quero conversar sobre uma landing page para minha campanha.',
};

export const metadata = serviceMetadata(data);
export default function Page() { return <ServicePage data={data} />; }
