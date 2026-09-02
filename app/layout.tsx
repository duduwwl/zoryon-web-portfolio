import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zoryon Web — Sites que fazem marcas avançarem',
  description:
    'Criação de sites profissionais em Lavras, MG. Conheça os projetos da Zoryon Web e escolha a direção ideal para a sua marca.',
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
