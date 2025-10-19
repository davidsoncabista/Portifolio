import { Metadata } from 'next';
import { ProjectCard } from "@/components/ProjectCard";
import { projects as projectsData } from "@/lib/data";

export const metadata: Metadata = {
  title: 'Projects | Davidson.dev',
  description: "A gallery of projects by Davidson.",
};

export default function ProjectsPage({ params }: { params: { lang: string } }) {
    const lang = params.lang || 'pt';
    const projects = projectsData[lang as keyof typeof projectsData];
    return (
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-headline font-bold text-center sm:text-5xl lg:text-6xl">My Work</h1>
                    <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                        A collection of projects I've built, from complex infrastructure solutions to modern web applications.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
