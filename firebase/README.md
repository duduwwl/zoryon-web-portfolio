# Firebase — Zoryon Web Portfolio

Projeto: `zoryon-web-portfolio`  
Banco: Cloud Firestore `(default)`  
Região: `southamerica-east1` (São Paulo)  
Modo: Native / Standard, com proteção contra exclusão.

## Estrutura (schema v2)

- `_meta/schema`: versão e inventário do modelo.
- `siteSettings`: identidade, localização e canais públicos.
- `services`: serviços exibidos no portfólio.
- `projects`: um documento por projeto publicado.
- `projects/{slug}/pages`: páginas disponíveis em cada projeto.
- `leads`: contatos enviados com consentimento; leitura restrita a administradores.
- `users`: perfis privados, disponíveis ao próprio usuário ou administrador.
- `auditLogs`: reservado para registros administrativos imutáveis.

Cada documento de conteúdo recebe `updatedAt` como `timestamp` nativo do Firestore. Projetos também guardam `availableDevices`, `pageCount` e uma subcoleção ordenada de páginas. O projeto de café removido do portfólio não faz parte da carga oficial.

## Segurança e manutenção

As regras negam qualquer operação não declarada. Conteúdo publicado possui leitura pública; gravações de conteúdo exigem a custom claim `admin: true`. Leads aceitam somente criação com campos, limites, consentimento e horário recente validados e nunca podem ser lidos publicamente. Perfis de usuário ficam disponíveis apenas ao próprio usuário ou a um administrador; logs são somente leitura para administradores.

## Publicação segura

1. Faça login no Firebase CLI com a conta proprietária.
2. Publique regras e índices.
3. Execute a carga inicial reproduzível.
4. Confirme no console que `_meta/schema.schemaVersion` é `2`.

```bash
pnpm dlx firebase-tools login
pnpm dlx firebase-tools deploy --only firestore --project zoryon-web-portfolio
GOOGLE_OAUTH_ACCESS_TOKEN="$(gcloud auth print-access-token)" pnpm firebase:seed
```

A carga inicial lê `firebase/seed.json`, pode ser repetida sem criar duplicatas e exige um token OAuth temporário apenas no ambiente do processo. Credenciais, chaves privadas e arquivos `.env` reais nunca devem entrar no repositório.

O formulário público grava somente em `leads`; pedidos e pagamentos dos projetos demonstrativos continuam simulados e não devem receber dados reais.
