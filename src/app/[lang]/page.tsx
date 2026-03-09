import { HeroSection } from '@/components/sections/HeroSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ArticlesSection } from '@/components/sections/ArticlesSection';
import { FeaturedProjectsSection } from '@/components/sections/FeaturedProjectsSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { Separator } from '@/components/ui/separator';
// Importe o componente de contacto (vamos garantir que ele aponte para o Java)
// Se ainda não criou este componente, pode usar um placeholder ou criar o ContactSection.tsx
import { ContactSection } from '@/components/sections/ContactSection'; 

export default async function Home({ params }: { params: { lang: string } }) {
  const lang = params?.lang || 'pt';
  
  return (
    <div className="flex flex-col">
      <HeroSection />
      <div className="container mx-auto px-4">
        <Separator className="my-8 md:my-12" />
        <GallerySection lang={lang} />
        
        <Separator className="my-8 md:my-12" />
        <FeaturedProjectsSection lang={lang} />
        
        <Separator className="my-8 md:my-12" />
        {/* Esta seção agora buscará os artigos do Java via getArticles no lib/data.ts */}
        <ArticlesSection lang={lang} />
        
        <Separator className="my-12 md:my-24" />
        <SkillsSection lang={lang} />

        {/* Nova seção de contacto via Telegram */}
        <Separator className="my-12 md:my-24" />
        <ContactSection lang={lang} />
      </div>
    </div>
  );
}