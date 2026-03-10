import { Github, Code2, ServerCog, BrainCircuit, Linkedin, Instagram, Youtube, TowerControl } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// API base URL (configurável via env)
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL || 'http://192.168.0.70:8080';

export type Project = {
  slug: string;
  title: string;
  description: string;
  status: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  imageUrl?: string;
  hasGallery?: boolean;
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

// Novo Tipo para Artigos vindos do Backend
export type Article = {
  title: string;
  description: string;
  url: string;
  publicationDate: string;
};

const ICONS: { [key: string]: LucideIcon } = {
  "Critical Infrastructure & DevOps": ServerCog,
  "Full-Stack Development": Code2,
  "Telecommunications & Networks": TowerControl,
  "Infraestrutura Crítica": ServerCog,
  "Desenvolvimento Full-Stack": Code2,
  "Telecomunicações": TowerControl,
};

// Busca de Projetos
export async function getProjects(lang: string): Promise<Project[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects?lang=${lang}`, { 
      next: { revalidate: 86400 } 
    });
    return response.ok ? await response.json() : [];
  } catch (error) {
    return [];
  }
}

// Busca de Skills
export async function getSkills(lang: string): Promise<SkillCategory[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/skills?lang=${lang}`, { 
      next: { revalidate: 86400 } 
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

// NOVA FUNÇÃO: Busca de Artigos dinâmicos do Backend
export async function getArticles(lang: string): Promise<Article[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/articles?lang=${lang}`, { 
      next: { revalidate: 86400 } 
    });
    return response.ok ? await response.json() : [];
  } catch (error) {
    console.error("Erro ao buscar artigos do Java:", error);
    return [];
  }
}

// Busca de Imagens da Galeria
export async function getGalleryImages(): Promise<string[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/gallery`, { 
      next: { revalidate: 86400 } 
    });
    return response.ok ? await response.json() : [];
  } catch (error) {
    return [];
  }
}

export const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/davidsoncabista/Portifolio' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/davidsonsconceicao' },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/davidson.dev.br" },
    { name: 'Youtube', icon: Youtube, url: 'https://www.youtube.com/@davidson.developer' },
    { name: 'Telegram', icon: TowerControl, url: 'https://t.me/seu_usuario_ou_link' }, // Adicionado link para Telegram
];