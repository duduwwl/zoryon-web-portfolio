import type { Metadata } from 'next';
import './globals.css';
import './brand-refinements.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://zoryon-web.duduwwl.chatgpt.site'),
  title: 'Zoryon Web — Sites profissionais sob medida',
  description:
    'Criação de sites profissionais em Lavras, MG. Conheça os projetos da Zoryon Web e escolha a direção ideal para a sua marca.',
  openGraph: {
    title: 'Zoryon Web — Sites profissionais sob medida',
    description: 'Portfólio de sites profissionais criados pela Zoryon Web.',
    url: 'https://zoryon-web.duduwwl.chatgpt.site',
    siteName: 'Zoryon Web',
    locale: 'pt_BR',
    type: 'website',
    images: [{
      url: '/og.png',
      width: 1672,
      height: 941,
      alt: 'Zoryon Web — sites profissionais sob medida.',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoryon Web — Sites profissionais sob medida',
    description: 'Portfólio de sites profissionais criados pela Zoryon Web.',
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
