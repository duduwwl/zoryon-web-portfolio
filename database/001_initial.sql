-- Zoryon Web: conteúdo público e contatos. Reexecutável, sem apagar registros.
CREATE TABLE IF NOT EXISTS public.portfolio_projects (
  slug varchar(80) PRIMARY KEY CHECK (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  title varchar(120) NOT NULL,
  category varchar(120) NOT NULL,
  description text NOT NULL,
  kind varchar(12) NOT NULL CHECK (kind IN ('real', 'conceptual')),
  cover_path text NOT NULL,
  cover_alt varchar(200) NOT NULL,
  cover_position varchar(40),
  external_url text CHECK (external_url IS NULL OR external_url LIKE 'https://%'),
  display_order integer NOT NULL CHECK (display_order > 0),
  published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS portfolio_projects_published_order
  ON public.portfolio_projects (display_order, slug) WHERE published;

CREATE TABLE IF NOT EXISTS public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar(80) NOT NULL CHECK (char_length(name) >= 2),
  business varchar(120) NOT NULL CHECK (char_length(business) >= 2),
  need varchar(40) NOT NULL CHECK (need IN (
    'Site institucional', 'Loja virtual', 'Cardápio ou catálogo', 'Quero orientação'
  )),
  message varchar(1200) NOT NULL DEFAULT '',
  project_title varchar(120) NOT NULL,
  source varchar(20) NOT NULL CHECK (source IN ('portfolio', 'github-pages')),
  status varchar(20) NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
  consent_at timestamptz NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS leads_status_created_at
  ON public.leads (status, created_at DESC);

INSERT INTO public.portfolio_projects (
  slug, title, category, description, kind, cover_path, cover_alt,
  cover_position, external_url, display_order
) VALUES
  ('wl-streetwear', 'WL Streetwear', 'Loja virtual · moda urbana', 'Uma loja para explorar a coleção, conhecer cada peça e percorrer a compra sem perder a força visual da marca.', 'conceptual', '/originais/wl-streetwear/assets/images/tee-blue-graffiti-blue.webp', 'Camiseta gráfica WL Streetwear em fundo azul', 'center', NULL, 1),
  ('casa-dos-fios', 'Mundix Aviamentos', 'Loja virtual · aviamentos', 'Fios, linhas e cores organizados em uma loja digital que dá espaço ao produto e facilita a escolha.', 'real', '/project-previews/casa-dos-fios.webp', 'Página inicial da loja Mundix Aviamentos', NULL, NULL, 2),
  ('pizza-lavras', 'Pizza Lavras', 'Cardápio digital · gastronomia', 'Sabores e caminhos de pedido apresentados de forma direta, com a energia visual de uma pizzaria.', 'conceptual', '/project-previews/pizza-lavras.webp', 'Página inicial da Pizza Lavras', NULL, NULL, 3),
  ('aurele', 'Auréle', 'Loja virtual · moda feminina', 'Uma experiência editorial que aproxima a coleção do olhar e deixa a navegação respirar.', 'conceptual', '/project-previews/aurele.webp', 'Página inicial da loja Auréle', NULL, NULL, 4),
  ('hamburgueria-do-gordao', 'Hamburgueria Na Brasa', 'Cardápio digital · gastronomia', 'Um cardápio com personalidade para encontrar combinações e seguir até o pedido.', 'conceptual', '/project-previews/hamburgueria-do-gordao.webp', 'Página inicial da Hamburgueria Na Brasa', NULL, NULL, 5),
  ('serra-alta-imoveis', 'Serra Alta Imóveis', 'Site imobiliário · imóveis', 'Busca, imóveis em destaque e contato reunidos numa apresentação clara para quem procura um novo lugar.', 'conceptual', '/project-previews/serra-alta-imoveis.webp', 'Página inicial da Serra Alta Imóveis', NULL, NULL, 6),
  ('orale-odontologia', 'Oracle Odontologia', 'Site institucional · saúde', 'Tratamentos, cuidado e agendamento organizados para quem quer entender o atendimento antes de entrar em contato.', 'conceptual', '/project-previews/orale-odontologia.webp', 'Página inicial da Oracle Odontologia', NULL, NULL, 7),
  ('love-pets', 'Love Pets', 'Site institucional · pet shop', 'Banho, tosa, produtos e agendamento reunidos em uma experiência acolhedora para a Love Pets, em Lavras.', 'real', '/project-previews/love-pets.png', 'Página inicial do site Love Pets', NULL, 'https://lovepets.app.br/', 8),
  ('marcio-felipe-arquitetura', 'Márcio Felipe Arquitetura', 'Site institucional · arquitetura', 'Projetos de arquitetura e interiores, serviços e contato apresentados em uma experiência editorial.', 'real', '/project-previews/marcio-felipe-arquitetura.jpg', 'Página inicial do site Márcio Felipe Arquitetura', NULL, 'https://marciofelipearquitetura.com.br/', 9)
ON CONFLICT (slug) DO NOTHING;
