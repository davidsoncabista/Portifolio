'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ContactSection } from './ContactSection';
import Link from 'next/link';

// Adicionamos as propriedades que o componente vai receber do page.tsx
export function HeroSection({ profile, lang }: { profile?: any, lang: string }) {
  const videoPlaceholder = PlaceHolderImages.find(p => p.id === 'video-intro-placeholder');

  // Saudação consoante o idioma
  const greeting = lang === 'pt' ? "Olá, eu sou" : "Hi, I'm";
  const name = profile?.name || "Davidson Conceição";
  const viewWork = lang === 'pt' ? "Ver meu trabalho" : "View My Work";

  // Usa os dados da base de dados (se existirem) ou os textos padrão (se falhar)
  const displayTitle = profile?.title || (lang === 'pt' 
    ? "Troubleshooting de Infraestrutura e Desenvolvedor Full-Stack." 
    : "Infrastructure Troubleshooting and Full-Stack Developer.");
    
  const displaySummary = profile?.summary || (lang === 'pt' 
    ? "Eu construo soluções robustas, escaláveis e eficientes que dão vida a ideias."
    : "I build robust, scalable, and efficient solutions that bring ideas to life.");

  return (
    <>
      <section className="w-full py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 lg:grid-cols-[1fr_550px] lg:gap-8 xl:grid-cols-[1fr_650px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {greeting} {name}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl font-medium">
                  {displayTitle}
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-lg">
                  {displaySummary}
                </p>
              </div>
              
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href={`/${lang}/projects`}>
                    {viewWork}
                  </Link>
                </Button>
                
                <ContactSection lang={lang} />
              </div>

            </div>
            <Card className="relative group overflow-hidden rounded-xl">
              {videoPlaceholder && (
                <Image
                  alt={videoPlaceholder.description}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full transition-transform duration-300 group-hover:scale-105"
                  src={videoPlaceholder.imageUrl}
                  width={1280}
                  height={720}
                  data-ai-hint={videoPlaceholder.imageHint}
                  priority
                />
              )}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <PlayCircle className="w-20 h-20 text-white/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}