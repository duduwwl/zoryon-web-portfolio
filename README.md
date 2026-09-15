# Zoryon Web — Portfólio

Portfólio profissional da Zoryon Web com projetos completos de sites, lojas virtuais, catálogos e experiências digitais.

## Projetos disponíveis

- Daniel’s Barber
- WL Streetwear
- Mundix Aviamentos
- Pizza Lavras
- Auréle
- Hamburgueria Na Brasa
- Serra Alta Imóveis
- Oralé Odontologia

Cada projeto pode ser explorado dentro do portfólio em visualização para computador, tablet e celular. As demonstrações incluem suas páginas e interações próprias.

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

Para gerar a versão de produção:

```bash
pnpm build
```

Para gerar e validar o pacote estático usado pelo GitHub Pages:

```bash
pnpm build:pages
pnpm verify:pages
```

## Publicação

- [GitHub Pages](https://duduwwl.github.io/zoryon-web-portfolio/)
- [Publicação principal](https://zoryon-web.duduwwl.chatgpt.site)

O workflow em `.github/workflows/pages.yml` recompila, verifica todas as rotas e publica automaticamente cada alteração enviada para `main`.
