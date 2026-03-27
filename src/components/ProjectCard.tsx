"use client";

import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Eye } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  lang: string;
}

export function ProjectCard({
  id,
  title,
  description,
  imageUrl,
  technologies,
  githubUrl,
  demoUrl,
  lang
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 transition-all duration-500 hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]">
      
      {/* Área da Foto / Preview */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-800">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-sm"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-zinc-500">
            Sem imagem
          </div>
        )}

        {/* Overlay que aparece no Hover - O brilho amarelo foca aqui agora */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <Link 
            href={`/${lang}/projects/${id}`}
            className="flex items-center gap-2 rounded-full bg-yellow-500 px-6 py-2 text-sm font-bold text-black shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            <Eye size={18} />
            {lang === 'pt' ? 'Ver Detalhes' : 'View Details'}
          </Link>
        </div>
      </div>

      {/* Conteúdo do Texto */}
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold text-zinc-100 transition-colors group-hover:text-yellow-500">
          {title}
        </h3>
        
        <p className="mb-4 line-clamp-2 text-sm text-zinc-400">
          {description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {}
          {(technologies || []).map((tech) => (
            <Badge key={tech} variant="outline" className="border-zinc-700 bg-zinc-800/50 text-[10px] text-zinc-300">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Rodapé com links diretos */}
        <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
          <div className="flex gap-4">
            {githubUrl && (
              <a href={githubUrl} target="_blank" className="text-zinc-500 hover:text-yellow-500 transition-colors">
                <Github size={18} />
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} target="_blank" className="text-zinc-500 hover:text-yellow-500 transition-colors">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
          
          <Link 
            href={`/${lang}/projects/${id}`}
            className="text-xs font-medium text-zinc-400 hover:text-yellow-500 hover:underline"
          >
            {lang === 'pt' ? 'Saber mais' : 'Read more'}
          </Link>
        </div>
      </div>
    </div>
  );
}