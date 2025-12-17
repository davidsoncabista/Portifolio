
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '../output.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

const baseMetadata: Metadata = {
  title: 'Davidson Conceição | Portfolio',
  description: 'The personal portfolio of Davidson Conceição, an Infrastructure Solutions Architect and Full-Stack Developer.',
  keywords: ['Davidson Conceição', 'Full-Stack Developer', 'Infrastructure Architect', 'DevOps', 'React', 'Next.js', 'AWS', 'TIM Brasil', 'Portfolio'],
  authors: [{ name: 'Davidson Conceição', url: 'https://davidson.dev.br' }],
  creator: 'Davidson Conceição',
  openGraph: {
    title: 'Davidson Conceição | Portfolio',
    description: 'The personal portfolio of Davidson Conceição, an Infrastructure Solutions Architect and Full-Stack Developer.',
    url: 'https://davidson.dev.br',
    siteName: 'Davidson.dev',
    locale: 'pt_BR',
    type: 'website',
  }
};

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const lang = params?.lang || 'pt';
  
  return {
    title: 'davidson portifolio',
    description: lang === 'pt' ? 'Bem vindo ao meu portfólio' : 'Welcome to my portfolio',
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = params?.lang || 'pt';
  
  return (
    <html lang={lang} className="dark">
      <body className={cn('antialiased flex flex-col min-h-screen font-body', inter.variable, spaceGrotesk.variable)}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
      </body>
    </html>
  );
}
