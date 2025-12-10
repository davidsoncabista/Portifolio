
import { socialLinks } from '@/lib/data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'pt';

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
           <Button variant="ghost" size="icon" asChild>
              <Link href={`/${lang}/login`} aria-label="Admin Login">
                <Shield className="h-4 w-4 text-muted-foreground/50 hover:text-primary transition-colors" />
              </Link>
            </Button>
        </div>
      </div>
    </footer>
  );
}
