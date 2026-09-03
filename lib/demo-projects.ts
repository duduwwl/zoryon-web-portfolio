export type DemoProject = {
  slug: string;
  title: string;
  mark: string;
  location: string;
  category: string;
  tagline: string;
  description: string;
  heroKicker: string;
  primaryAction: string;
  visualWord: string;
  theme: {
    canvas: string;
    surface: string;
    text: string;
    muted: string;
    accent: string;
    accent2: string;
  };
  navigation: { slug: string; label: string }[];
  offers: { title: string; description: string; price: string }[];
  storyTitle: string;
  story: string;
  highlights: string[];
  stats: { value: string; label: string }[];
  contactPrompt: string;
};

export const demoProjects: DemoProject[] = [
  {
    slug: 'daniels-barber',
    title: 'Daniel’s Barber',
    mark: 'DB',
    location: 'Lavras · MG',
    category: 'Barbearia contemporânea',
    tagline: 'Seu estilo. Nossa assinatura.',
    description: 'Cortes precisos, atendimento sem pressa e uma experiência pensada para quem entende que presença também se constrói nos detalhes.',
    heroKicker: 'Desde 2019 · tradição em movimento',
    primaryAction: 'Agendar horário',
    visualWord: 'PRECISÃO',
    theme: {
      canvas: '#08090b',
      surface: '#121418',
      text: '#f5f1e8',
      muted: '#98958d',
      accent: '#e39a3b',
      accent2: '#7a3f16',
    },
    navigation: [
      { slug: 'inicio', label: 'Início' },
      { slug: 'servicos', label: 'Serviços' },
      { slug: 'galeria', label: 'Galeria' },
      { slug: 'contato', label: 'Contato' },
    ],
    offers: [
      { title: 'Corte assinatura', description: 'Consultoria de estilo, corte e finalização.', price: 'R$ 55' },
      { title: 'Barba clássica', description: 'Toalha quente, desenho e hidratação.', price: 'R$ 45' },
      { title: 'Experiência completa', description: 'Cabelo, barba e acabamento premium.', price: 'R$ 90' },
      { title: 'Pezinho & acabamento', description: 'Manutenção rápida entre os cortes.', price: 'R$ 25' },
    ],
    storyTitle: 'Técnica de ontem. Atitude de agora.',
    story: 'A Daniel’s nasceu para resgatar o cuidado das barbearias clássicas sem abrir mão de uma leitura atual de estilo. Cada atendimento começa com uma conversa e termina com um corte que faz sentido para a rotina de cada cliente.',
    highlights: ['Diagnóstico de estilo', 'Produtos profissionais', 'Horário reservado', 'Ambiente autoral'],
    stats: [
      { value: '7+', label: 'anos de história' },
      { value: '4,9', label: 'avaliação média' },
      { value: '2,4k', label: 'clientes atendidos' },
    ],
    contactPrompt: 'Reserve seu horário e descubra uma barbearia feita no seu ritmo.',
  },
  {
    slug: 'casa-dos-fios',
    title: 'Casa dos Fios',
    mark: 'CF',
    location: 'Brasil · envio nacional',
    category: 'Fios, linhas & criatividade',
    tagline: 'Cores que inspiram novas histórias.',
    description: 'Um universo de texturas e tonalidades selecionadas para transformar ideias em peças únicas — do primeiro ponto ao acabamento.',
    heroKicker: 'Mais de 180 cores para criar sem limites',
    primaryAction: 'Ver catálogo',
    visualWord: 'TEXTURA',
    theme: {
      canvas: '#fbf4ea',
      surface: '#efe4d6',
      text: '#30231e',
      muted: '#7b6960',
      accent: '#c95072',
      accent2: '#e5a9b8',
    },
    navigation: [
      { slug: 'inicio', label: 'Início' },
      { slug: 'catalogo', label: 'Catálogo' },
      { slug: 'cores', label: 'Cores' },
      { slug: 'contato', label: 'Contato' },
    ],
    offers: [
      { title: 'Algodão Natural', description: 'Toque macio e caimento leve para peças delicadas.', price: 'A partir de R$ 18,90' },
      { title: 'Merino Essencial', description: 'Conforto térmico, definição e uma paleta sofisticada.', price: 'A partir de R$ 32,90' },
      { title: 'Linha Amigurumi', description: 'Cores vivas, estrutura firme e acabamento uniforme.', price: 'A partir de R$ 14,50' },
      { title: 'Kit Primeiros Pontos', description: 'Fios, agulhas e guia para começar sua primeira peça.', price: 'R$ 79,90' },
    ],
    storyTitle: 'Cada cor abre uma possibilidade.',
    story: 'A Casa dos Fios nasceu do encontro entre técnica e afeto. Nossa curadoria aproxima artesãs, criadores e marcas de matérias-primas bonitas, consistentes e agradáveis de trabalhar.',
    highlights: ['Paleta com 180+ cores', 'Lotes identificados', 'Envio para todo o Brasil', 'Atendimento especializado'],
    stats: [
      { value: '180+', label: 'cores disponíveis' },
      { value: '24h', label: 'para postagem' },
      { value: '12k', label: 'novelos enviados' },
    ],
    contactPrompt: 'Conte o que você quer criar. A gente ajuda a encontrar o fio certo.',
  },
  {
    slug: 'pizza-lavras',
    title: 'Pizza Lavras',
    mark: 'PL',
    location: 'Lavras · MG',
    category: 'Pizzaria & delivery',
    tagline: 'A noite pede pizza. A sua pede sabor.',
    description: 'Massa de fermentação lenta, ingredientes de verdade e combinações que chegam quentes para reunir todo mundo ao redor da mesa.',
    heroKicker: 'Forno aceso · pedidos até 23h30',
    primaryAction: 'Abrir cardápio',
    visualWord: 'FORNO',
    theme: {
      canvas: '#2b0807',
      surface: '#3a0e0a',
      text: '#fff3dc',
      muted: '#d3ab91',
      accent: '#ffb000',
      accent2: '#bf321d',
    },
    navigation: [
      { slug: 'inicio', label: 'Início' },
      { slug: 'cardapio', label: 'Cardápio' },
      { slug: 'combos', label: 'Combos' },
      { slug: 'contato', label: 'Contato' },
    ],
    offers: [
      { title: 'Mineirinha', description: 'Muçarela, calabresa artesanal, cebola roxa e toque de pimenta.', price: 'A partir de R$ 48' },
      { title: 'Quatro Queijos', description: 'Muçarela, gorgonzola, parmesão e requeijão cremoso.', price: 'A partir de R$ 52' },
      { title: 'Caprese do Forno', description: 'Tomate, muçarela de búfala, pesto fresco e manjericão.', price: 'A partir de R$ 54' },
      { title: 'Chocolate & Morango', description: 'Chocolate ao leite, morangos e finalização crocante.', price: 'A partir de R$ 44' },
    ],
    storyTitle: 'Tempo, fogo e ingredientes honestos.',
    story: 'Nossa massa descansa por 48 horas antes de entrar no forno. É essa espera, somada a produtores locais e receitas equilibradas, que cria uma pizza leve, crocante e cheia de sabor.',
    highlights: ['Fermentação de 48h', 'Molho feito na casa', 'Ingredientes selecionados', 'Entrega acompanhada'],
    stats: [
      { value: '48h', label: 'de fermentação' },
      { value: '25+', label: 'sabores no menu' },
      { value: '35min', label: 'tempo médio' },
    ],
    contactPrompt: 'Escolha o sabor. A gente cuida para chegar perfeito.',
  },
  {
    slug: 'maison-aurea',
    title: 'Maison Aurea',
    mark: 'MA',
    location: 'Curadoria · Brasil',
    category: 'Moda feminina contemporânea',
    tagline: 'Vista o que fica na memória.',
    description: 'Uma curadoria de peças femininas desenhadas para atravessar ocasiões, estações e tendências com presença silenciosa.',
    heroKicker: 'Collection 02 · lumière naturelle',
    primaryAction: 'Descobrir coleção',
    visualWord: 'AUREA',
    theme: {
      canvas: '#eee9df',
      surface: '#d9d0c3',
      text: '#211f1c',
      muted: '#706c65',
      accent: '#8e7145',
      accent2: '#b9a990',
    },
    navigation: [
      { slug: 'inicio', label: 'Início' },
      { slug: 'colecao', label: 'Coleção' },
      { slug: 'editorial', label: 'Editorial' },
      { slug: 'contato', label: 'Contato' },
    ],
    offers: [
      { title: 'Blazer Lumière', description: 'Alfaiataria fluida, ombro preciso e caimento alongado.', price: 'R$ 489' },
      { title: 'Vestido Élan', description: 'Silhueta limpa em tecido acetinado de movimento leve.', price: 'R$ 429' },
      { title: 'Chemise Sable', description: 'Algodão premium, comprimento midi e botões naturais.', price: 'R$ 319' },
      { title: 'Bolsa Arc', description: 'Couro estruturado, ferragens foscas e alça removível.', price: 'R$ 579' },
    ],
    storyTitle: 'Menos ruído. Mais intenção.',
    story: 'A Aurea nasce de uma ideia simples: vestir pode ser um gesto de clareza. Escolhemos tecidos, cortes e acabamentos que valorizam a mulher e continuam relevantes muito além de uma temporada.',
    highlights: ['Curadoria em pequenas séries', 'Tecidos de origem rastreável', 'Modelagem autoral', 'Embalagem premium'],
    stats: [
      { value: '02', label: 'coleções por ano' },
      { value: '18', label: 'peças essenciais' },
      { value: '100%', label: 'curadoria autoral' },
    ],
    contactPrompt: 'Descubra uma curadoria pensada para o seu ritmo e a sua presença.',
  },
  {
    slug: 'hamburgueria-do-gordao',
    title: 'Hamburgueria do Gordão',
    mark: 'HG',
    location: 'Lavras · MG',
    category: 'Smash, artesanal & delivery',
    tagline: 'Fome de verdade pede um burger de respeito.',
    description: 'Carne na chapa, queijo derretendo e molhos feitos na casa. Aqui o hambúrguer chega sem frescura e com sabor até o último pedaço.',
    heroKicker: 'Chapa quente · entrega todos os dias',
    primaryAction: 'Ver cardápio',
    visualWord: 'BRASA',
    theme: {
      canvas: '#090806',
      surface: '#16120c',
      text: '#fff8e8',
      muted: '#b5a88c',
      accent: '#ff9d00',
      accent2: '#8f2c09',
    },
    navigation: [
      { slug: 'inicio', label: 'Início' },
      { slug: 'cardapio', label: 'Cardápio' },
      { slug: 'combos', label: 'Combos' },
      { slug: 'contato', label: 'Contato' },
    ],
    offers: [
      { title: 'Gordão Smash', description: 'Dois smash de 90g, cheddar, cebola e molho da casa.', price: 'R$ 32' },
      { title: 'Brasa Bacon', description: 'Burger de 160g, queijo prato, bacon e barbecue de café.', price: 'R$ 39' },
      { title: 'Monstro Triplo', description: 'Três carnes, cheddar cremoso, picles e cebola crispy.', price: 'R$ 47' },
      { title: 'Veggie Crocante', description: 'Burger de grão-de-bico, salada fresca e maionese verde.', price: 'R$ 29' },
    ],
    storyTitle: 'A chapa é o nosso palco.',
    story: 'A gente acredita em hambúrguer bem executado: blend fresco, pão macio, ponto certo e equilíbrio em cada camada. Sem atalhos, com muita personalidade e aquele exagero que vale a pena.',
    highlights: ['Blend moído diariamente', 'Molhos da casa', 'Pão selado na manteiga', 'Embalagem térmica'],
    stats: [
      { value: '160g', label: 'de carne no artesanal' },
      { value: '11', label: 'burgers autorais' },
      { value: '4,8', label: 'avaliação média' },
    ],
    contactPrompt: 'Sua fome já escolheu. Agora é só chamar.',
  },
  {
    slug: 'serra-alta-imoveis',
    title: 'Serra Alta Imóveis',
    mark: 'SA',
    location: 'Lavras & região',
    category: 'Imóveis selecionados',
    tagline: 'O próximo capítulo começa em um novo lugar.',
    description: 'Imóveis escolhidos com critério, leitura de mercado e acompanhamento próximo para você decidir com segurança.',
    heroKicker: 'Comprar · vender · investir',
    primaryAction: 'Explorar imóveis',
    visualWord: 'MORAR',
    theme: {
      canvas: '#0a1a22',
      surface: '#102b34',
      text: '#eef7f4',
      muted: '#9bb0ae',
      accent: '#d6b879',
      accent2: '#315d60',
    },
    navigation: [
      { slug: 'inicio', label: 'Início' },
      { slug: 'imoveis', label: 'Imóveis' },
      { slug: 'sobre', label: 'Sobre' },
      { slug: 'contato', label: 'Contato' },
    ],
    offers: [
      { title: 'Casa · Jardim Europa', description: '3 suítes, área gourmet e arquitetura contemporânea.', price: 'R$ 1.280.000' },
      { title: 'Apartamento · Centro', description: '2 quartos, vista aberta e 2 vagas de garagem.', price: 'R$ 480.000' },
      { title: 'Chácara · Zona Norte', description: 'Área verde, piscina e acesso asfaltado.', price: 'R$ 760.000' },
      { title: 'Lote · Condomínio Alto', description: '420 m², topografia suave e vista permanente.', price: 'R$ 295.000' },
    ],
    storyTitle: 'Escuta antes da visita. Critério antes da escolha.',
    story: 'A Serra Alta combina conhecimento local com uma seleção rigorosa de imóveis. Nosso trabalho começa entendendo o momento de cada cliente e só termina quando a decisão realmente faz sentido.',
    highlights: ['Curadoria personalizada', 'Análise documental', 'Visitas acompanhadas', 'Negociação transparente'],
    stats: [
      { value: '92%', label: 'clientes por indicação' },
      { value: '8 anos', label: 'de mercado local' },
      { value: '74', label: 'imóveis selecionados' },
    ],
    contactPrompt: 'Conte como você quer viver. A gente encontra os lugares que combinam.',
  },
  {
    slug: 'orale-odontologia',
    title: 'Oralé Odontologia',
    mark: 'O',
    location: 'Lavras · MG',
    category: 'Odontologia integrada',
    tagline: 'Sorrir muda tudo. Cuidar muda ainda mais.',
    description: 'Tecnologia, acolhimento e planos de cuidado individuais para transformar a experiência de ir ao dentista.',
    heroKicker: 'Cuidado humano · precisão clínica',
    primaryAction: 'Agendar avaliação',
    visualWord: 'SORRIR',
    theme: {
      canvas: '#edf6f4',
      surface: '#dcebe7',
      text: '#173b3a',
      muted: '#607d7b',
      accent: '#2d9f96',
      accent2: '#a8d7d0',
    },
    navigation: [
      { slug: 'inicio', label: 'Início' },
      { slug: 'tratamentos', label: 'Tratamentos' },
      { slug: 'equipe', label: 'Equipe' },
      { slug: 'contato', label: 'Contato' },
    ],
    offers: [
      { title: 'Clínica preventiva', description: 'Avaliação, limpeza e acompanhamento periódico.', price: 'Agende sua avaliação' },
      { title: 'Estética do sorriso', description: 'Clareamento e facetas com planejamento digital.', price: 'Plano personalizado' },
      { title: 'Implantodontia', description: 'Reabilitação segura, da análise ao pós-operatório.', price: 'Consulta inicial' },
      { title: 'Ortodontia', description: 'Alinhadores e aparelhos para diferentes rotinas.', price: 'Diagnóstico completo' },
    ],
    storyTitle: 'Ciência precisa, atendimento leve.',
    story: 'Na Oralé, cada tratamento é explicado com clareza e conduzido sem pressa. Tecnologia digital ajuda no diagnóstico, mas é a escuta que define um cuidado verdadeiramente individual.',
    highlights: ['Planejamento digital', 'Especialistas integrados', 'Ambiente acolhedor', 'Acompanhamento contínuo'],
    stats: [
      { value: '12+', label: 'anos de experiência' },
      { value: '3D', label: 'planejamento digital' },
      { value: '4,9', label: 'avaliação média' },
    ],
    contactPrompt: 'Seu novo sorriso começa com uma conversa tranquila.',
  },
  {
    slug: 'raiz-cafe',
    title: 'Raiz Café',
    mark: 'RC',
    location: 'Lavras · MG',
    category: 'Cafés especiais & cozinha',
    tagline: 'Café com origem. Pausa com significado.',
    description: 'Grãos de pequenos produtores, torra cuidadosa e uma mesa feita para encontros — da primeira extração ao último gole.',
    heroKicker: 'Aberto hoje · 08h às 19h',
    primaryAction: 'Conhecer o menu',
    visualWord: 'ORIGEM',
    theme: {
      canvas: '#21150f',
      surface: '#34231a',
      text: '#f4e7d2',
      muted: '#b7a28f',
      accent: '#d59a54',
      accent2: '#70452a',
    },
    navigation: [
      { slug: 'inicio', label: 'Início' },
      { slug: 'menu', label: 'Menu' },
      { slug: 'historia', label: 'História' },
      { slug: 'contato', label: 'Contato' },
    ],
    offers: [
      { title: 'V60 da Safra', description: 'Extração filtrada com notas da semana.', price: 'R$ 16' },
      { title: 'Latte Raiz', description: 'Espresso duplo, leite vaporizado e rapadura.', price: 'R$ 18' },
      { title: 'Pão de Queijo Canastra', description: 'Receita da casa com queijo curado mineiro.', price: 'R$ 12' },
      { title: 'Brunch do Campo', description: 'Ovos, pão artesanal, frutas e café filtrado.', price: 'R$ 38' },
    ],
    storyTitle: 'Do produtor à xícara, sem esconder o caminho.',
    story: 'O Raiz aproxima quem cultiva de quem aprecia. Trabalhamos com cafés rastreáveis da região, torra em pequenos lotes e preparos que respeitam as características de cada safra.',
    highlights: ['Cafés rastreáveis', 'Torra em pequenos lotes', 'Produtores da região', 'Cozinha feita na casa'],
    stats: [
      { value: '6', label: 'fazendas parceiras' },
      { value: '86+', label: 'pontos de qualidade' },
      { value: '100%', label: 'origem rastreada' },
    ],
    contactPrompt: 'Passe para um café, fique pelo tempo que precisar.',
  },
];

export function getDemoProject(slug: string) {
  return demoProjects.find((project) => project.slug === slug);
}
