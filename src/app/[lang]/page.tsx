
import { HeroSection } from '@/components/sections/HeroSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { FeaturedProjectsSection } from '@/components/sections/FeaturedProjectsSection';
import { Separator } from '@/components/ui/separator';

export default function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang || 'pt';
  return (
    <div className="flex flex-col">
      <HeroSection />
      <div className="container mx-auto px-4">
        <Separator className="my-12 md:my-24" />
        <SkillsSection lang={lang} />
        <Separator className="my-12 md:my-24" />
        <TimelineSection lang={lang} />
        <Separator className="my-12 md:my-24" />
        <FeaturedProjectsSection lang={lang} />
      </div>
    </div>
  );
}
