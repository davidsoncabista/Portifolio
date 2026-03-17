import { getProjects } from '@/lib/data';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({ params }: { params: Promise<{ lang: string, id: string }> }) {
  // 1. Aguardamos os parâmetros (Obrigatório nas versões novas do Next.js)
  const { lang, id } = await params; 
  
  // 2. Buscamos os projetos
  const projects = await getProjects(lang);
  
  // 3. Filtramos o projeto pelo ID
  const project = projects.find((p: any) => p.id.toString() === id);

  // 4. Se não encontrar, mostra 404
  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-black text-zinc-100 pb-20">
      <div className="container mx-auto px-4 pt-12">
        {/* Usamos a variável 'lang' extraída do await params */}
        <Link 
          href={`/${lang}/#projects`} 
          className="group mb-8 inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          {lang === 'pt' ? 'Voltar para projetos' : 'Back to projects'}
        </Link>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* Coluna da Esquerda: Imagem */}
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">
            {project.imageUrl ? (
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-auto object-cover"
              />
            ) : (
              <div className="flex aspect-video items-center justify-center bg-zinc-800 text-zinc-500">
                No Image Preview
              </div>
            )}
          </div>

          {/* Coluna da Direita: Conteúdo */}
          <div className="flex flex-col">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            
            <div className="mb-6 flex flex-wrap gap-4 text-sm text-zinc-400">
              <div className="flex items-center gap-1">
                <Tag size={16} />
                <span>{project.status || 'Active'}</span>
              </div>
            </div>

            <p className="mb-8 text-lg leading-relaxed text-zinc-400">
              {project.description}
            </p>

            <div className="mb-10">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                {lang === 'pt' ? 'Tecnologias Utilizadas' : 'Technologies Used'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech: string) => (
                  <Badge key={tech} variant="secondary" className="bg-zinc-800/50 px-3 py-1 text-zinc-300 border-zinc-700">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-auto flex flex-wrap gap-4">
              {project.githubUrl && (
                <Button asChild size="lg" variant="outline" className="flex-1 gap-2 border-zinc-700 bg-transparent hover:bg-zinc-800">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                    GitHub
                  </a>
                </Button>
              )}
              {project.demoUrl && (
                <Button asChild size="lg" className="flex-1 gap-2 bg-white text-black hover:bg-zinc-200">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}