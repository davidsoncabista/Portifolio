'use client';

import * as React from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface GalleryClientProps {
  imageUrls: string[];
}

export function GalleryClient({ imageUrls }: GalleryClientProps) {
  const [index, setIndex] = React.useState(-1);

  if (!imageUrls || imageUrls.length === 0) {
    return null;
  }
  
  // Create slides for the lightbox
  const slides = imageUrls.map(url => ({ src: url }));

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
        {imageUrls.map((url, i) => (
          <div key={i} className="mb-4 break-inside-avoid" onClick={() => setIndex(i)}>
            <Image
              src={url}
              alt={`Gallery image ${i + 1}`}
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer shadow-md hover:shadow-primary/20 hover:shadow-xl"
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
