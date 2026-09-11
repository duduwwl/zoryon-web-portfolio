export type ProductDemo = {
  slug: string;
  title: string;
  kind: 'Apps' | 'SaaS';
  category: string;
  eyebrow: string;
  description: string;
  tags: string[];
  theme: string;
  mark: string;
  accent: string;
  previewTitle: string;
  previewMetric: string;
  previewLabel: string;
};

export const productDemos: ProductDemo[] = [
  {
    slug: 'veloz-mobilidade', title: 'Veloz', kind: 'Apps', category: 'Mobilidade urbana',
    eyebrow: 'Corridas & mobilidade', description: 'Aplicativo de corridas com rota, categorias de veículo, estimativa transparente e acompanhamento do motorista em tempo real.',
    tags: ['Mobilidade', 'Geolocalização', 'Pagamento'], theme: 'veloz', mark: 'V', accent: '#6d5cff',
    previewTitle: 'Para onde vamos?', previewMetric: '4 min', previewLabel: 'motorista mais próximo',
  },
  {
    slug: 'mesa-go', title: 'MesaGo', kind: 'Apps', category: 'Delivery de comida',
    eyebrow: 'Delivery & fidelização', description: 'Experiência de delivery com busca rápida, cardápio visual, carrinho, entrega acompanhada e recompensas para clientes recorrentes.',
    tags: ['Delivery', 'Cardápio', 'Pedidos'], theme: 'mesago', mark: 'M', accent: '#ff5a36',
    previewTitle: 'O que vai pedir?', previewMetric: '28 min', previewLabel: 'entrega estimada',
  },
  {
    slug: 'ritmo-fit', title: 'Ritmo', kind: 'Apps', category: 'Saúde & performance',
    eyebrow: 'Treino & bem-estar', description: 'Aplicativo de rotina saudável com treinos guiados, metas semanais, evolução e sessões rápidas adaptadas ao dia do usuário.',
    tags: ['Fitness', 'Hábitos', 'Progresso'], theme: 'ritmo', mark: 'R', accent: '#18c98b',
    previewTitle: 'Seu ritmo hoje', previewMetric: '72%', previewLabel: 'meta semanal concluída',
  },
  {
    slug: 'orbit-ai', title: 'Orbit AI', kind: 'SaaS', category: 'Operação de agentes de IA',
    eyebrow: 'IA & automação operacional', description: 'Central para criar, acompanhar e revisar agentes de IA, com filas de execução, aprovações humanas e métricas de qualidade.',
    tags: ['Agentes de IA', 'Automação', 'Governança'], theme: 'orbit', mark: 'O', accent: '#8b5cf6',
    previewTitle: 'Agent operations', previewMetric: '94,8%', previewLabel: 'execuções concluídas',
  },
  {
    slug: 'nexo-flow', title: 'Nexo Flow', kind: 'SaaS', category: 'Gestão para serviços',
    eyebrow: 'Operação & pagamentos', description: 'Plataforma vertical para negócios de serviços, reunindo agenda, clientes, cobrança, repasses e indicadores em um só fluxo.',
    tags: ['Agenda', 'Pagamentos', 'CRM'], theme: 'nexo', mark: 'N', accent: '#2563eb',
    previewTitle: 'Operação em dia', previewMetric: 'R$ 48,2k', previewLabel: 'receita no mês',
  },
  {
    slug: 'lumen-cloud', title: 'Lumen Cloud', kind: 'SaaS', category: 'FinOps & infraestrutura',
    eyebrow: 'Custos de nuvem & eficiência', description: 'Painel FinOps que consolida custos, detecta desperdícios e prioriza recomendações para reduzir a fatura sem comprometer a operação.',
    tags: ['FinOps', 'Cloud', 'Alertas'], theme: 'lumen', mark: 'L', accent: '#00a6a6',
    previewTitle: 'Cloud efficiency', previewMetric: 'R$ 12,4k', previewLabel: 'economia potencial',
  },
];

export function getProductDemo(slug: string) {
  return productDemos.find((demo) => demo.slug === slug);
}
