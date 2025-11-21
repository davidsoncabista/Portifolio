import { getGalleryImages } from '@/lib/data';
import { GalleryClient } from './GalleryClient';

export async function GallerySection({ lang }: { lang: string }) {
  const imageUrls = await getGalleryImages();

  if (!imageUrls || imageUrls.length === 0) {
    return null;
  }
  
  const title = lang === 'pt' ? 'Galeria' : 'Gallery';
  const description = lang === 'pt'
    ? 'Momentos da minha jornada, projetos e inspirações.'
    : 'Moments from my journey, projects, and inspirations.';

  return (
    <section id="gallery" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">{title}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          </div>
        </div>
        <GalleryClient imageUrls={imageUrls} />
      </div>
    </section>
  );
}
