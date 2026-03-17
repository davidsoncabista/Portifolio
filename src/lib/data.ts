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

export type SkillCategory = {
  category: string;
  icon: LucideIcon;
  list: any[];
}

export type Article = {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
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

export async function getProjects(lang: string = 'pt'): Promise<Project[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/api/projects`, { cache: 'no-store' });
    if (!response.ok) return [];
    const data = await response.json();
    // FILTRO CRÍTICO: Remove projetos sem ID para não quebrar o React
    return data.filter((p: any) => p.id !== null && p.id !== undefined);
  } catch (error) {
    console.error("Erro ao buscar projetos:", error);
    return [];
  }
}

export async function getArticles(lang: string = 'pt'): Promise<Article[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/api/articles`, { cache: 'no-store' });
    if (!response.ok) return [];
    const data = await response.json();
    return data.filter((a: any) => a.id !== null);
  } catch (error) {
    return [];
  }
}

export async function getGalleryImages(): Promise<string[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/gallery`, { cache: 'no-store' });
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
];