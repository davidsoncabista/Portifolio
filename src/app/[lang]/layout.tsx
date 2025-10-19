import type { Metadata } from 'next';
import '../globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Inter, Space_Grotesk } from 'next/font/google'
import { FirebaseClientProvider } from '@/firebase/client-provider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang ?? 'pt'} className="dark">
      <body className={cn('antialiased flex flex-col min-h-screen font-body', inter.variable, spaceGrotesk.variable)}>
        <FirebaseClientProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
