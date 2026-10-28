export type PortfolioProject = {
  slug: string;
  title: string;
  type: string;
  context: string;
  status: 'Projeto real' | 'Projeto conceitual';
  image: string;
  alt: string;
  imagePosition?: string;
  externalUrl?: string;
};

export const projects: PortfolioProject[] = [
  {
    slug: 'wl-streetwear',
    title: 'WL Streetwear',
    type: 'Loja virtual · moda urbana',
    context:
      'Uma loja para explorar a coleção, conhecer cada peça e percorrer a compra sem perder a força visual da marca.',
    status: 'Projeto conceitual',
    image: '/originais/wl-streetwear/assets/images/tee-blue-graffiti-blue.webp',
    alt: 'Camiseta gráfica WL Streetwear em fundo azul',
    imagePosition: 'center',
  },
  {
    slug: 'casa-dos-fios',
    title: 'Mundix Aviamentos',
    type: 'Loja virtual · aviamentos',
    context:
      'Fios, linhas e cores organizados em uma loja digital que dá espaço ao produto e facilita a escolha.',
    status: 'Projeto real',
    image: '/project-previews/casa-dos-fios.webp',
    alt: 'Página inicial da loja Mundix Aviamentos',
  },
  {
    slug: 'pizza-lavras',
    title: 'Pizza Lavras',
    type: 'Cardápio digital · gastronomia',
    context:
      'Sabores e caminhos de pedido apresentados de forma direta, com a energia visual de uma pizzaria.',
    status: 'Projeto conceitual',
    image: '/project-previews/pizza-lavras.webp',
    alt: 'Página inicial da Pizza Lavras',
  },
  {
    slug: 'aurele',
    title: 'Auréle',
    type: 'Loja virtual · moda feminina',
    context:
      'Uma experiência editorial que aproxima a coleção do olhar e deixa a navegação respirar.',
    status: 'Projeto conceitual',
    image: '/project-previews/aurele.webp',
    alt: 'Página inicial da loja Auréle',
  },
  {
    slug: 'hamburgueria-do-gordao',
    title: 'Hamburgueria Na Brasa',
    type: 'Cardápio digital · gastronomia',
    context:
      'Um cardápio com personalidade para encontrar combinações e seguir até o pedido.',
    status: 'Projeto conceitual',
    image: '/project-previews/hamburgueria-do-gordao.webp',
    alt: 'Página inicial da Hamburgueria Na Brasa',
  },
  {
    slug: 'serra-alta-imoveis',
    title: 'Serra Alta Imóveis',
    type: 'Site imobiliário · imóveis',
    context:
      'Busca, imóveis em destaque e contato reunidos numa apresentação clara para quem procura um novo lugar.',
    status: 'Projeto conceitual',
    image: '/project-previews/serra-alta-imoveis.webp',
    alt: 'Página inicial da Serra Alta Imóveis',
  },
  {
    slug: 'orale-odontologia',
    title: 'Oracle Odontologia',
    type: 'Site institucional · saúde',
    context:
      'Tratamentos, cuidado e agendamento organizados para quem quer entender o atendimento antes de entrar em contato.',
    status: 'Projeto conceitual',
    image: '/project-previews/orale-odontologia.webp',
    alt: 'Página inicial da Oracle Odontologia',
  },
  {
    slug: 'love-pets',
    title: 'Love Pets',
    type: 'Site institucional · pet shop',
    context:
      'Banho, tosa, produtos e agendamento reunidos em uma experiência acolhedora para a Love Pets, em Lavras.',
    status: 'Projeto real',
    image: '/project-previews/love-pets.png',
    alt: 'Página inicial do site Love Pets',
    externalUrl: 'https://lovepets.app.br/',
  },
  {
    slug: 'marcio-felipe-arquitetura',
    title: 'Márcio Felipe Arquitetura',
    type: 'Site institucional · arquitetura',
    context:
      'Projetos de arquitetura e interiores, serviços e contato apresentados em uma experiência editorial.',
    status: 'Projeto real',
    image: '/project-previews/marcio-felipe-arquitetura.jpg',
    alt: 'Página inicial do site Márcio Felipe Arquitetura',
    externalUrl: 'https://marciofelipearquitetura.com.br/',
  },
];
