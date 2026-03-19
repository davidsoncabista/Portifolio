import { Github, Code2, ServerCog, Linkedin, Instagram, Youtube, TowerControl } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const API_BASE_URL = 'http://192.168.0.70:8080';

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

// 1. Função de busca de Projetos
export async function getProjects(lang: string = 'pt'): Promise<Project[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/api/projects`, { 
      cache: 'no-store' 
    });
    
    if (!response.ok) {
        console.error(`Erro na API de Projetos: ${response.status}`);
        return [];
    }
    
    const data = await response.json();
    
    // Log para ver no Docker do servidor .13
    console.log(`Projetos carregados do Java: ${Array.isArray(data) ? data.length : 0}`);

    if (!Array.isArray(data)) return [];

    // Filtra para garantir que o ID existe para não quebrar o React
    return data.filter((p: any) => p.id !== null && p.id !== undefined);
  } catch (error) {
    console.error("Erro de conexão com o Backend .70:", error);
    return [];
  }
}

// 2. Função de busca de Skills
export async function getSkills(lang: string = 'pt'): Promise<any[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/admin/api/skills`, { cache: 'no-store' });
        if (!response.ok) return [];
        const data = await response.json();
        return Array.isArray(data) ? data : [];
    } catch (error) { 
        console.error("Erro ao carregar Skills:", error);
        return []; 
    }
}

// 3. Função de busca de Artigos
export async function getArticles(lang: string = 'pt'): Promise<any[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/admin/api/articles`, { cache: 'no-store' });
        if (!response.ok) return [];
        const data = await response.json();
        return Array.isArray(data) ? data : [];
    } catch (error) { 
        return []; 
    }
}

// 4. Função de busca de Imagens da Galeria
export async function getGalleryImages(): Promise<string[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/gallery`, { cache: 'no-store' });
        if (!response.ok) return [];
        const data = await response.json();
        return Array.isArray(data) ? data : [];
    } catch (error) { 
        return []; 
    }
}

// 5. Links Sociais
export const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/davidsoncabista/Portifolio' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/davidsonsconceicao' },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/davidson.dev.br" },
    { name: 'Youtube', icon: Youtube, url: 'https://www.youtube.com/@davidson.developer' },
];