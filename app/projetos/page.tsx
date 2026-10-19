import type { Metadata } from 'next';
import { PortfolioExperience } from '../../components/WatermelonZoryon';

export const metadata: Metadata = {
  title: 'Projetos | Zoryon Web',
  description:
    'Conheça sites, lojas virtuais e experiências digitais da Zoryon Web. Projetos reais e conceituais apresentados com transparência.',
  alternates: { canonical: 'https://zoryonweb.com.br/projetos' },
  openGraph: {
    title: 'Projetos | Zoryon Web',
    description:
      'Uma seleção de sites e experiências digitais criados pela Zoryon Web.',
    url: 'https://zoryonweb.com.br/projetos',
  },
};

export default function ProjectsPage() {
  return <PortfolioExperience />;
}
