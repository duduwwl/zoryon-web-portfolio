import type { Metadata } from 'next';
import './globals.css';
import './brand-refinements.css';

const siteUrl = 'https://zoryonweb.com.br/';
const siteTitle = 'Zoryon Web | Criação de Sites Profissionais';
const siteDescription = 'Criação de sites profissionais, modernos, rápidos e responsivos para empresas. Transforme sua presença digital com a Zoryon Web.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: 'Zoryon Web',
  alternates: { canonical: siteUrl },
  icons: { icon: '/favicon.svg' },
  robots: { index: true, follow: true },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: 'Zoryon Web',
    locale: 'pt_BR',
    type: 'website',
    images: [{
      url: '/og.png',
      width: 1672,
      height: 941,
      alt: 'Zoryon Web — criação de sites profissionais.',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og.png'],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}#organization`,
  name: 'Zoryon Web',
  url: siteUrl,
  logo: `${siteUrl}brand/zoryon.webp`,
  image: `${siteUrl}og.png`,
  description: siteDescription,
  telephone: '+55-35-98425-9797',
  sameAs: ['https://instagram.com/zoryonweb'],
  areaServed: { '@type': 'Country', name: 'Brasil' },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}#website`,
  name: 'Zoryon Web',
  url: siteUrl,
  description: siteDescription,
  inLanguage: 'pt-BR',
  publisher: { '@id': `${siteUrl}#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema]).replace(/</g, '\\u003c') }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
