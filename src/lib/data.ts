import { Github, Code2, ServerCog, Linkedin, Instagram, Youtube, TowerControl } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://192.168.0.70:8080';

export type Project = {
  id: number;
  title: string;
  description: string;
  status: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  imageUrl?: string;
};

// Função de busca de Projetos
export async function getProjects(lang: string = 'pt'): Promise<Project[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/api/projects`, { 
      cache: 'no-store',
      headers: { 'Accept': 'application/json' }
    });
    
    if (!response.ok) {
        console.error(`Erro na API: ${response.status}`);
        return [];
    }
    
    const data = await response.json();
    
    // Log para te ajudar a ver no Docker se os dados estão a chegar
    console.log(`Projetos carregados do Java: ${data.length}`);

    // Retornamos todos, garantindo apenas que o ID existe para não quebrar o React
    return data.filter((p: any) => p.id !== null && p.id !== undefined);
  } catch (error) {
    console.error("Erro de conexão com o Backend .70:", error);
    return [];
  }
}

// Mantenha as outras funções (getSkills, getArticles, getGalleryImages) como estão abaixo...
export async function getSkills(lang: string = 'pt'): Promise<any[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/skills`, { cache: 'no-store' });
        return response.ok ? await response.json() : [];
    } catch (error) { return []; }
}

export async function getArticles(lang: string = 'pt'): Promise<any[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/admin/api/articles`, { cache: 'no-store' });
        return response.ok ? await response.json() : [];
    } catch (error) { return []; }
}

export async function getGalleryImages(): Promise<string[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/gallery`, { cache: 'no-store' });
        return response.ok ? await response.json() : [];
    } catch (error) { return []; }
}

export const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/davidsoncabista/Portifolio' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/davidsonsconceicao' },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/davidson.dev.br" },
    { name: 'Youtube', icon: Youtube, url: 'https://www.youtube.com/@davidson.developer' },
];