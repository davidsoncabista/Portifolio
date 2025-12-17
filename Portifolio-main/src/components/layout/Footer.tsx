import { socialLinks } from '@/lib/data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-card">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <Image src="/logo-trans-davidson-dev.png" alt="Davidson.dev Logo" width={24} height={24} className="h-6 w-6 text-primary" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Davidson.dev. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild>
              <a href={link.url} target="_blank" rel="noreferrer" aria-label={link.name}>
                <link.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
