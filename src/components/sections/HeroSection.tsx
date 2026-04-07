'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContactSection } from './ContactSection';
import Link from 'next/link';

// Tipagem para os dados vindos do seu backend Java
interface Profile {
  name?: string;
  description?: string;
}

interface HeroSectionProps {
  profile: Profile | null;
  lang: string;
}

export function HeroSection({ profile, lang }: HeroSectionProps) {
  // 1. Dados dinâmicos do backend com fallback para os textos que você já usava
  const name = profile?.name || "Davidson Conceição";
  const title = lang === 'pt' ? `Olá, eu sou ${name}` : `Hi, I'm ${name}`;
  
  const description = profile?.description || (lang === 'pt' 
    ? "Arquiteto de Soluções & Engenheiro de Software Sênior. Projeto e construo plataformas robustas de ponta a ponta. Transformo desafios de negócios em soluções escaláveis, desde o Desenho da Arquitetura (Solution Design) até a entrega final da aplicação."
    : "Solutions Architect & Senior Software Engineer. I design and build robust end-to-end platforms. I transform business challenges into scalable solutions, from Solution Design to final application delivery.");
  
  const viewWork = lang === 'pt' ? "Ver meu trabalho" : "View My Work";

  return (
    <>
      <section className="w-full py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 lg:grid-cols-[1fr_550px] lg:gap-8 xl:grid-cols-[1fr_650px]">
            
            {/* Coluna de Texto e Ações */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {title}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  {description}
                </p>
              </div>
              
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href={`/${lang}/projects`}>
                    {viewWork}
                  </Link>
                </Button>
                
                {/* Modal de Contato (Telegram) */}
                <ContactSection lang={lang} />
              </div>
            </div>

            {/* Coluna do Vídeo (Placeholder agora com o Iframe funcional) */}
            <Card className="relative group overflow-hidden rounded-xl">
              <div className="w-full aspect-video overflow-hidden rounded-xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/70ERxt8lftA"
                  title={lang === 'pt' ? 'Vídeo de introdução' : 'Intro video'}
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Card>

          </div>
        </div>
      </section>
    </>
  );
}