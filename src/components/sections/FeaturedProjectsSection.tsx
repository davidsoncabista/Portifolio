import { getProjects, type Project } from '@/lib/data';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export async function FeaturedProjectsSection({ lang }: { lang: string }) {
  // Buscamos os projetos (agora vindo da API via lib/data.ts)
  const projects: Project[] = await getProjects(lang);
  
  // Pegamos os 3 primeiros para destaque
  const featuredProjects = projects.slice(0, 3);

  const viewAllProjectsText = lang === 'pt' ? 'Ver Todos os Projetos' : 'View All Projects';
  const featuredProjectsTitle = lang === 'pt' ? 'Projetos em Destaque' : 'Featured Projects';
  const featuredProjectsDescription = lang === 'pt'
    ? 'Aqui estão alguns projetos dos quais me orgulho. Confira a galeria completa para mais.'
    : "Here are a few projects I'm proud of. Check out the full gallery for more.";

  return (
    <section id="projects" className="w-full">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">{featuredProjectsTitle}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {featuredProjectsDescription}
            </p>
          </div>
        </div>
        
        <div className="mx-auto grid items-start gap-6 py-8 sm:max-w-4xl sm:grid-cols-1 md:gap-8 lg:max-w-5xl lg:grid-cols-3">
          {featuredProjects.map((project) => (
            /* Passamos o objeto project completo e garantimos o id para a página dinâmica */
            <ProjectCard 
              key={project.id} 
              id={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
              lang={lang}
            />
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