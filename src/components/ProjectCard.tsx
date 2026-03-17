"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink, Eye } from "lucide-react";
import Link from "next/link";

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  lang: string;
}

export function ProjectCard({ id, title, description, imageUrl, technologies, githubUrl, demoUrl, lang }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group relative overflow-hidden border-zinc-800 bg-zinc-900/50 transition-all hover:border-zinc-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container da Imagem (Preview) */}
      <div className="relative h-48 w-full overflow-hidden bg-zinc-800">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className={`h-full w-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110 blur-sm' : 'scale-100'}`}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-zinc-600">No Image</div>
        )}

        {/* Overlay que aparece no Hover */}
        <div className={`absolute inset-0 flex items-center justify-center bg-black/60 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Link href={`/${lang}/projects/${id}`}>
            <Button variant="outline" size="sm" className="gap-2 border-white text-white hover:bg-white hover:text-black">
              <Eye size={16} /> Ver Detalhes
            </Button>
          </Link>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl text-zinc-100">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="line-clamp-2 text-sm text-zinc-400">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-zinc-800 text-zinc-300">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between gap-2 border-t border-zinc-800/50 pt-4">
        {githubUrl && (
          <Button variant="ghost" size="sm" asChild className="text-zinc-400 hover:text-white">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Code
            </a>
          </Button>
        )}
        {demoUrl && (
          <Button variant="ghost" size="sm" asChild className="text-zinc-400 hover:text-white">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}