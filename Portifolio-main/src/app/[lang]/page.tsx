import { HeroSection } from '@/components/sections/HeroSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { FeaturedProjectsSection } from '@/components/sections/FeaturedProjectsSection';
import { ArticlesSection } from '@/components/sections/ArticlesSection'; // Importe a seção
import { getProfile, getSkills, getProjects, getArticles } from '@/lib/data'; // Importe a nova função getArticles

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  // 1. Busca todos os dados em paralelo (Performance rápida!)
  const [profile, skills, projects, articles] = await Promise.all([
    getProfile(lang),
    getSkills(lang),
    getProjects(lang),
    getArticles(lang) 
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection profile={profile} lang={lang} />
      <SkillsSection data={skills} lang={lang} />
      <FeaturedProjectsSection projects={projects} lang={lang} />
      
      {/* 2. Passa os artigos buscados para o componente */}
      <ArticlesSection lang={lang} articles={articles} />
    </main>
  );
}