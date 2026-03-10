
'use client';

import * as React from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Skeleton } from '@/components/ui/skeleton';

interface ProjectGalleryProps {
  projectSlug: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://davidson-portfolio-api.onrender.com';

async function getProjectImages(slug: string): Promise<string[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/gallery/${slug}`);
        if (!response.ok) {
            console.error(`Failed to fetch gallery for ${slug}:`, response.statusText);
            return [];
        }
        return response.json();
    } catch (error) {
        console.error(`Error fetching gallery for ${slug}:`, error);
        return [];
    }
}

export function ProjectGallery({ projectSlug }: ProjectGalleryProps) {
  const [imageUrls, setImageUrls] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [index, setIndex] = React.useState(-1);

  React.useEffect(() => {
    async function fetchData() {
        setLoading(true);
        const urls = await getProjectImages(projectSlug);
        setImageUrls(urls);
        setLoading(false);
    }
    fetchData();
  }, [projectSlug]);

  if (loading) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto p-1">
            {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="w-full h-40 rounded-lg" />
            ))}
        </div>
    );
  }

  if (!imageUrls || imageUrls.length === 0) {
    return <p className="text-muted-foreground text-center py-8">Nenhuma imagem encontrada para este projeto.</p>;
  }
  
  const slides = imageUrls.map(url => ({ src: url }));

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto p-1 pr-4">
        {imageUrls.map((url, i) => (
          <div key={i} className="relative aspect-video cursor-pointer group" onClick={() => setIndex(i)}>
            <Image
              src={url}
              alt={`Imagem da galeria do projeto ${i + 1}`}
              fill
              className="rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 shadow-md"
              unoptimized
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        index={index}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .85)" } }}
      />
    </>
  );
}

    