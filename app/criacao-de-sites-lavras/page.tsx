import ServicePage, { serviceMetadata, type ServicePageData } from '../../components/ServicePage';

const data: ServicePageData = {
  path: '/criacao-de-sites-lavras',
  title: 'Criação de Sites em Lavras MG | Zoryon Web',
  description: 'Criação de sites em Lavras, MG, com design responsivo, WhatsApp integrado e base técnica de SEO. Conheça o processo e peça um orçamento.',
  eyebrow: 'Presença digital / Lavras, MG',
  heading: 'Criação de sites em Lavras para apresentar seu negócio com clareza.',
  lead: 'Um site próprio ajuda sua empresa a ser encontrada, mostrar o que oferece e abrir um caminho direto para a conversa com novos clientes.',
  introHeading: 'Uma presença digital feita para as pessoas que procuram você.',
  intro: [
    'Em Lavras, muita gente descobre serviços pelo celular antes de decidir com quem falar. Um site bem organizado permite que essa pessoa conheça sua empresa, entenda suas opções e encontre o contato certo, mesmo fora do horário de atendimento.',
    'A Zoryon Web cria sites para negócios de Lavras/MG e atende também de forma remota. O projeto é construído conforme seus objetivos: apresentar serviços, organizar um catálogo, receber pedidos, divulgar uma campanha ou apoiar contatos comerciais. Definimos juntos o que cada página precisa resolver.',
  ],
  highlights: [
    { title: 'Funciona em toda tela', text: 'Layout responsivo para celular, tablet e computador, com leitura confortável e botões fáceis de usar.' },
    { title: 'WhatsApp integrado', text: 'Chamadas para conversa posicionadas onde ajudam o visitante a pedir informações ou solicitar orçamento.' },
    { title: 'SEO técnico essencial', text: 'Estrutura de títulos, metadados, links e indexabilidade para que buscadores compreendam as páginas.' },
    { title: 'Conteúdo organizado', text: 'Serviços, área de atendimento e próximos passos apresentados sem confundir quem visita.' },
  ],
  processHeading: 'Do primeiro encontro ao site no ar.',
  process: [
    { title: 'Conversa inicial', text: 'Entendemos o negócio, o público em Lavras e os canais pelos quais as pessoas chegam até você.' },
    { title: 'Planejamento das páginas', text: 'Definimos serviços, informações prioritárias e a melhor forma de apresentar cada conteúdo.' },
    { title: 'Criação e integrações', text: 'Desenvolvemos o visual responsivo, conectamos o WhatsApp e preparamos a base técnica de SEO.' },
    { title: 'Revisão e publicação', text: 'Testamos os pontos principais em diferentes telas e revisamos os caminhos de contato antes de publicar.' },
  ],
  audienceHeading: 'Para diferentes tipos de projeto em Lavras.',
  audience: 'Empresas de serviços podem precisar de um site institucional. Quem vende produtos pode optar por catálogo ou loja virtual. Para ações pontuais, uma landing page concentra a mensagem e o formulário ou WhatsApp. Portfólios ajudam profissionais a mostrar seu trabalho de forma organizada. O formato é definido de acordo com o objetivo — não apenas com o setor.',
  faq: [
    { question: 'Vocês atendem apenas empresas de Lavras?', answer: 'Não. A Zoryon Web atende negócios de Lavras/MG e também conduz projetos remotamente para outras localidades.' },
    { question: 'O site vai funcionar bem no celular?', answer: 'Sim. A adaptação para celular, tablet e computador faz parte do planejamento e é conferida antes da publicação.' },
    { question: 'É possível colocar um botão de WhatsApp?', answer: 'Sim. Podemos integrar chamadas para o WhatsApp em pontos estratégicos, com mensagens adequadas ao contexto da página.' },
    { question: 'O site já sai preparado para aparecer no Google?', answer: 'O projeto inclui uma base técnica de SEO, como títulos, descrições e estrutura de conteúdo. A indexação e a posição nos resultados dependem dos mecanismos de busca e de fatores externos; não há promessa de colocação.' },
    { question: 'Qual é o melhor tipo de site para meu negócio?', answer: 'Depende do que você deseja apresentar e da ação esperada do visitante. Na conversa inicial, avaliamos se faz mais sentido um site institucional, catálogo, loja virtual ou landing page.' },
  ],
  related: [
    { href: '/criacao-de-sites', label: 'Criação de sites', text: 'Conheça a visão geral do serviço para negócios em todo o Brasil.' },
    { href: '/lojas-virtuais', label: 'Lojas virtuais', text: 'Organize seus produtos e a experiência de compra.' },
    { href: '/landing-pages', label: 'Landing pages', text: 'Dê foco a campanhas e oportunidades de contato.' },
  ],
  projectLinks: [
    { href: '/projetos/orale-odontologia', label: 'Oracle Odontologia', status: 'Projeto conceitual' },
    { href: '/projetos/pizza-lavras', label: 'Pizza Lavras', status: 'Projeto conceitual' },
  ],
  breadcrumbParent: { href: '/criacao-de-sites', label: 'Criação de sites' },
  areaServed: 'Lavras, MG',
  ctaMessage: 'Olá, Zoryon Web! Gostaria de um orçamento para criação de site em Lavras.',
};

export const metadata = serviceMetadata(data);
export default function Page() { return <ServicePage data={data} />; }
