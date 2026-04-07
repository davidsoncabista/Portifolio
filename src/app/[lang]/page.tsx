import { HeroSection } from '@/components/sections/HeroSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ArticlesSection } from '@/components/sections/ArticlesSection';
import { FeaturedProjectsSection } from '@/components/sections/FeaturedProjectsSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { Separator } from '@/components/ui/separator';
import { getProfile } from '@/lib/data'; // Importamos a função de busca

export default async function Home({ params }: { params: { lang: string } }) {
  const lang = params?.lang || 'pt';
  const profile = await getProfile(lang); // Buscamos o perfil bilingue no Java
  
  return (
    <div className="flex flex-col">
      {/* Passamos o perfil e o idioma para o HeroSection */}
      <HeroSection profile={profile} lang={lang} />
      
      <div className="container mx-auto px-4">
        <Separator className="my-8 md:my-12" />
        <GallerySection lang={lang} />
        
        <Separator className="my-8 md:my-12" />
        <FeaturedProjectsSection lang={lang} />
        
        <Separator className="my-8 md:my-12" />
        <ArticlesSection lang={lang} />
        
        <Separator className="my-12 md:my-24" />
        <SkillsSection lang={lang} />
      </div>
    </div>
  );
}