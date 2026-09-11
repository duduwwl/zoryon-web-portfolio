import type { Metadata } from 'next';
import './globals.css';
import './brand-refinements.css';
import './product-demos.css';
import './portfolio-products.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://zoryon-web.duduwwl.chatgpt.site'),
  title: 'Zoryon Web — Sites, aplicativos e SaaS sob medida',
  description:
    'Criação de sites, aplicativos e plataformas SaaS profissionais. Conheça os projetos da Zoryon Web e escolha a solução ideal para o seu negócio.',
  openGraph: {
    title: 'Zoryon Web — Sites, aplicativos e SaaS sob medida',
    description: 'Portfólio de produtos digitais profissionais criados pela Zoryon Web.',
    url: 'https://zoryon-web.duduwwl.chatgpt.site',
    siteName: 'Zoryon Web',
    locale: 'pt_BR',
    type: 'website',
    images: [{
      url: '/og.png',
      width: 1672,
      height: 941,
      alt: 'Zoryon Web — sites, aplicativos e SaaS sob medida.',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoryon Web — Sites, aplicativos e SaaS sob medida',
    description: 'Portfólio de produtos digitais profissionais criados pela Zoryon Web.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
