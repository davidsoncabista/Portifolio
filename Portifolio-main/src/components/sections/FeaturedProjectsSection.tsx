import { getProjects, type Project } from '@/lib/data';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export async function FeaturedProjectsSection({ lang }: { lang: string }) {
  const projects: Project[] = await getProjects(lang);
  const featuredProjects = projects.slice(0, 3);

  const viewAllProjectsText = lang === 'pt' ? 'Ver Todos os Projetos' : 'View All Projects';
  const featuredProjectsTitle = lang === 'pt' ? 'Projetos em Destaque' : 'Featured Projects';
  const featuredProjectsDescription = lang === 'pt'
    ? 'Aqui estão alguns projetos dos quais me orgulho. Confira a galeria completa para mais.'
    : "Here are a few projects I'm proud of. Check out the full gallery for more.";


  return (
    <section id="projects" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">{featuredProjectsTitle}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {featuredProjectsDescription}
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 py-12 sm:max-w-4xl sm:grid-cols-1 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild size="lg" variant="outline">
            <Link href={`/${lang}/projects`}>
              {viewAllProjectsText} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
