import { Github, Code2, ServerCog, Linkedin, Instagram, Youtube, TowerControl } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const API_BASE_URL = process.env.API_INTERNAL_URL || 'http://192.168.0.70:8080';

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
    console.log(`Projetos carregados do Java: ${Array.isArray(data) ? data.length : 0}`);

    if (!Array.isArray(data)) return [];

    // Filtra e Mapeia o Idioma
    return data
        .filter((p: any) => p.id !== null && p.id !== undefined)
        .map((p: any) => ({
            ...p,
            title: lang === 'en' && p.titleEn ? p.titleEn : p.title,
            description: lang === 'en' && p.descriptionEn ? p.descriptionEn : p.description,
            status: lang === 'en' && p.statusEn ? p.statusEn : p.status
        }));
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
        if (!Array.isArray(data)) return [];
        
        // Mapeia o Idioma
        return data.map((s: any) => ({
            ...s,
            name: lang === 'en' && s.nameEn ? s.nameEn : s.name,
            category: lang === 'en' && s.categoryEn ? s.categoryEn : s.category
        }));
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
        if (!Array.isArray(data)) return [];
        
        // Mapeia o Idioma
        return data.map((a: any) => ({
            ...a,
            title: lang === 'en' && a.titleEn ? a.titleEn : a.title,
            summary: lang === 'en' && a.summaryEn ? a.summaryEn : a.summary
        }));
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