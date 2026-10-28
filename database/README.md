# Banco Zoryon Web

O banco PostgreSQL `zoryon-web-db` foi criado no Neon pelo painel Vercel da equipe `zoryon` (região São Paulo). O arquivo `001_initial.sql` reproduz a estrutura e os nove projetos sem apagar registros existentes.

- `portfolio_projects`: capas, textos, classificação real/conceitual e ordem de exibição.
- `leads`: contatos consentidos, com validação, estado de atendimento e data de criação.
- Índices cobrem a listagem de projetos publicados e a fila de contatos.

O site consulta o Neon somente quando a hospedagem atual tiver `DATABASE_URL` como segredo de servidor. Sem esse segredo, exibe a lista local de projetos e continua gravando contatos no Firebase. A rota `/api/leads` exige um token Firebase App Check válido antes de inserir no Neon.

O histórico de contatos do Firestore não foi apagado nem importado. Antes de retirar o Firebase, exporte os contatos existentes, importe-os no Neon e confira as contagens. A hospedagem atual precisa receber `DATABASE_URL` e publicar esta versão; a conta Sites conectada no momento não tem acesso ao projeto existente.
