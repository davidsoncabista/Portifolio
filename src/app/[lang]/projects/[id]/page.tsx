import { getProjects } from '@/lib/data';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({ params }: { params: Promise<{ lang: string, id: string }> }) {
  const { lang, id } = await params; 
  const projects = await getProjects(lang);
  const project = projects.find((p: any) => p.id.toString() === id);

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-black text-zinc-100 pb-20 pt-24">
      <div className="container mx-auto px-4">
        <Link 
          href={`/${lang}/#projects`} 
          className="group mb-8 inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          {lang === 'pt' ? 'Voltar para projetos' : 'Back to projects'}
        </Link>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">
            {project.imageUrl ? (
              <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover" />
            ) : (
              <div className="flex aspect-video items-center justify-center bg-zinc-800 text-zinc-500">No Image</div>
            )}
          </div>

          <div className="flex flex-col">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
            <div className="mb-6 flex items-center gap-2 text-sm text-zinc-400">
              <Tag size={16} /> <span>{project.status || 'Active'}</span>
            </div>
            <p className="mb-8 text-lg leading-relaxed text-zinc-400">{project.description}</p>

            <div className="mb-10">
              <h3 className="mb-4 text-sm font-semibold uppercase text-zinc-500">Tecnologias</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech: string) => (
                  <Badge key={tech} variant="secondary" className="bg-zinc-800 text-zinc-300 border-zinc-700">{tech}</Badge>
                ))}
              </div>
            </div>

            <div className="mt-auto flex flex-wrap gap-4">
              {project.githubUrl && (
                <Button asChild size="lg" variant="outline" className="flex-1 gap-2 border-zinc-700 hover:bg-zinc-800">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github size={20} /> GitHub</a>
                </Button>
              )}
              {project.demoUrl && (
                <Button asChild size="lg" className="flex-1 gap-2 bg-white text-black hover:bg-zinc-200">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={20} /> Live Demo</a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}