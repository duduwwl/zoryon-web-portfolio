# Firebase — Zoryon Web Portfolio

Projeto: `zoryon-web-portfolio`  
Banco: Cloud Firestore `(default)`  
Região: `southamerica-east1` (São Paulo)  
Modo: Native / Standard, com proteção contra exclusão.

## Estrutura

- `_meta/schema`: versão e inventário do modelo.
- `siteSettings`: identidade, localização e canais públicos.
- `services`: serviços exibidos no portfólio.
- `projects`: um documento por projeto publicado.
- `projects/{slug}/pages`: páginas disponíveis em cada projeto.
- `leads`: contatos enviados com consentimento; leitura restrita a administradores.
- `users`: perfis privados, disponíveis ao próprio usuário ou administrador.
- `auditLogs`: reservado para registros administrativos imutáveis.

## Segurança e manutenção

As regras negam qualquer operação não declarada. Conteúdo publicado possui leitura pública; gravações de conteúdo exigem a custom claim `admin: true`. Leads aceitam somente criação com campos e limites validados e nunca podem ser lidos publicamente.

```bash
pnpm dlx firebase-tools login
pnpm dlx firebase-tools deploy --only firestore --project zoryon-web-portfolio
```

A carga inicial é reproduzível por `scripts/seed-firestore.mjs` e lê os dados de `firebase/seed.json`. Ela exige um token OAuth temporário no ambiente e nunca grava credenciais no repositório.
