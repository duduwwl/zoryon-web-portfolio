export const basePath = '/zoryon-web-portfolio';

export const projects = [
  { slug: 'daniels-barber', pages: ['agendamento', 'barbearia', 'contato'] },
  { slug: 'wl-streetwear', pages: ['colecao', 'produtos', 'gerencia'] },
  { slug: 'casa-dos-fios', pages: ['produtos', 'categorias', 'carrinho'] },
  { slug: 'pizza-lavras', pages: ['cardapio', 'combos', 'contato'] },
  { slug: 'aurele', pages: ['colecao', 'editorial', 'contato'] },
  { slug: 'hamburgueria-do-gordao', pages: ['cardapio', 'combos', 'contato'] },
  { slug: 'serra-alta-imoveis', pages: ['imoveis', 'sobre', 'contato'], embedded: true },
  { slug: 'orale-odontologia', pages: ['tratamentos', 'equipe', 'contato'], embedded: true },
];

export const routes = [
  '/',
  ...projects.flatMap((project) => {
    const publicRoutes = [`/projetos/${project.slug}`, ...project.pages.map((page) => `/projetos/${project.slug}/${page}`)];
    const embeddedRoutes = project.embedded
      ? ['inicio', ...project.pages].map((page) => `/projetos/${project.slug}/_embed/${page}`)
      : [];
    return [...publicRoutes, ...embeddedRoutes];
  }),
];
