'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function HeroSection() {
  const videoPlaceholder = PlaceHolderImages.find(p => p.id === 'video-intro-placeholder');
  const pathname = usePathname();
  const lang = pathname.split('/')[1] || 'pt';

  const title = lang === 'pt' ? "Olá, eu sou Davidson Conceição" : "Hi, I'm Davidson Conceição";
  const description = lang === 'pt' 
    ? "Arquiteto de Soluções de Infraestrutura e Desenvolvedor Full-Stack. Eu construo soluções robustas, escaláveis e eficientes que dão vida a ideias."
    : "An Infrastructure Solutions Architect and Full-Stack Developer. I build robust, scalable, and efficient solutions that bring ideas to life.";
  const viewWork = lang === 'pt' ? "Ver meu trabalho" : "View My Work";
  const getInTouch = lang === 'pt' ? "Entrar em contato" : "Get in Touch";


  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
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
              <Button asChild variant="outline" size="lg">
                <a href="mailto:atendimento@davidson.dev.br">
                  {getInTouch}
                </a>
              </Button>
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
  );
}
