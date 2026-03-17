import { Github, Code2, ServerCog, Linkedin, Instagram, Youtube, TowerControl } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// API base URL - Prioriza a env, senão usa o seu IP de produção .70
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://192.168.0.70:8080';

export type Project = {
  id: number; // Importante para a rota dinâmica [id]
  title: string;
  description: string;
  status: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  imageUrl?: string;
};

export type Skill = {
  name: string;
  proficiency: number;
  logo: string;
  category: string;
}

export type SkillCategory = {
  category: string;
  icon: LucideIcon;
  list: Skill[];
}

export type Article = {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  publicationDate: string;
  contentUrl?: string; // Link para o artigo completo
};

const ICONS: { [key: string]: LucideIcon } = {
  "Critical Infrastructure & DevOps": ServerCog,
  "Full-Stack Development": Code2,
  "Telecommunications & Networks": TowerControl,
  "Infraestrutura Crítica": ServerCog,
  "Desenvolvimento Full-Stack": Code2,
  "Telecomunicações": TowerControl,
};

// BUSCA DE PROJETOS - Atualizado para bater no endpoint do Admin
export async function getProjects(lang: string = 'pt'): Promise<Project[]> {
  try {
    // Note: Usamos o endpoint que criamos no Java
    const response = await fetch(`${API_BASE_URL}/admin/api/projects`, { 
      cache: 'no-store' 
    });
    return response.ok ? await response.json() : [];
  } catch (error) {
    console.error("Erro ao buscar projetos do Java:", error);
    return [];
  }
}

// BUSCA DE SKILLS
export async function getSkills(lang: string = 'pt'): Promise<SkillCategory[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/skills`, { 
      cache: 'no-store'
    });
    if (!response.ok) return [];
    const skills: Skill[] = await response.json();
    
    const skillsByCategory = skills.reduce((acc, skill) => {
      const { category } = skill;
      if (!acc[category]) acc[category] = [];
      acc[category].push(skill);
      return acc;
    }, {} as { [key: string]: Skill[] });

    return Object.entries(skillsByCategory).map(([category, list]) => ({
      category,
      icon: ICONS[category] || ServerCog,
      list,
    }));
  } catch (error) {
    return [];
  }
}

// BUSCA DE ARTIGOS - Atualizado para o novo endpoint
export async function getArticles(lang: string = 'pt'): Promise<Article[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/api/articles`, { 
      cache: 'no-store'
    });
    return response.ok ? await response.json() : [];
  } catch (error) {
    console.error("Erro ao buscar artigos do Java:", error);
    return [];
  }
}

export async function getGalleryImages(): Promise<string[]> {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://192.168.0.70:8080';
  try {
    // Ajuste o endpoint se necessário, mas por enquanto vamos manter o padrão
    const response = await fetch(`${apiBaseUrl}/api/gallery`, { 
      cache: 'no-store' 
    });
    return response.ok ? await response.json() : [];
  } catch (error) {
    console.error("Erro ao buscar galeria:", error);
    return [];
  }
}

export const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/davidsoncabista/Portifolio' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/davidsonsconceicao' },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/davidson.dev.br" },
    { name: 'Youtube', icon: Youtube, url: 'https://www.youtube.com/@davidson.developer' },
];