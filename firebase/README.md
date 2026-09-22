# Firebase — Zoryon Web Portfolio

Projeto: `zoryon-web-portfolio`  
Banco: Cloud Firestore `(default)`  
Região: `southamerica-east1` (São Paulo)  
Modo: Native / Standard, com proteção contra exclusão.

## Estrutura (schema v3)

- `_meta/schema`: versão e inventário do modelo.
- `siteSettings`: identidade, localização e canais públicos.
- `services`: serviços exibidos no portfólio.
- `projects`: sete projetos publicados e Daniel’s Barber preservado como `archived`.
- `projects/{slug}/pages`: páginas disponíveis em cada projeto.
- `leads`: contatos enviados com consentimento; leitura restrita a administradores.
- `users`: perfis privados, disponíveis ao próprio usuário ou administrador.
- `auditLogs`: reservado para registros administrativos imutáveis.

Cada documento de conteúdo recebe `updatedAt` como `timestamp` nativo do Firestore. Projetos também guardam `availableDevices`, `pageCount` e uma subcoleção ordenada de páginas. A carga mantém o projeto arquivado para preservar o histórico, sem torná-lo público. As páginas de um projeto arquivado também ficam arquivadas.

## Segurança e manutenção

As regras negam qualquer operação não declarada. Conteúdo publicado possui leitura pública; páginas só podem ser lidas quando também pertencem a um projeto publicado. Gravações de conteúdo exigem a custom claim `admin: true`. Leads aceitam somente criação com campos, limites, consentimento e horário recente validados e nunca podem ser lidos publicamente. Perfis de usuário ficam disponíveis apenas ao próprio usuário ou a um administrador; logs são somente leitura para administradores.

## Publicação segura

1. Faça login no Firebase CLI com a conta proprietária.
2. Publique regras e índices.
3. Faça backup do banco e revise a simulação da carga antes de aplicá-la. Ela atualiza documentos existentes.
4. Confirme no console que `_meta/schema.schemaVersion` é `3`.

```bash
pnpm dlx firebase-tools login
pnpm dlx firebase-tools deploy --only firestore --project zoryon-web-portfolio
pnpm firebase:seed
GOOGLE_OAUTH_ACCESS_TOKEN="$(gcloud auth print-access-token)" pnpm firebase:seed -- --apply
```

A carga lê `firebase/seed.json`, não cria duplicatas e atualiza apenas os campos declarados, preservando outros campos existentes. Exige um token OAuth temporário apenas para `--apply`; o modo padrão é somente simulação. Credenciais, chaves privadas e arquivos `.env` reais nunca devem entrar no repositório.

O formulário público grava somente em `leads`; pedidos e pagamentos dos projetos demonstrativos continuam simulados e não devem receber dados reais.
