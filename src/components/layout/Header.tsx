'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Globe } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { socialLinks } from '@/lib/data';

const navLinks = [
  { href: '/', label: 'Home', ptLabel: 'Início' },
  { href: '/projects', label: 'Projects', ptLabel: 'Projetos' },
];

export function Header() {
  const pathname = usePathname();
  const lang = pathname.split('/')[1] || 'pt';
  const currentLang = (lang === 'pt' || lang === 'en') ? lang : 'pt';

  const getLocalizedPath = (path: string) => {
    if (path === '/') return `/${currentLang}`;
    return `/${currentLang}${path}`;
  }
  
  const getPathForLang = (newLang: string) => {
    const pathSegments = pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0 && (pathSegments[0] === 'en' || pathSegments[0] === 'pt')) {
      pathSegments[0] = newLang;
    } else {
      pathSegments.unshift(newLang);
    }
    return '/' + pathSegments.join('/');
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href={getLocalizedPath('/')} className="mr-6 flex items-center space-x-2">
            <Image src="/logo trans davidson.dev.png" alt="Davidson.dev Logo" width={24} height={24} className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">Davidson.dev</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getLocalizedPath(link.href)}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === getLocalizedPath(link.href) ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {currentLang === 'pt' ? link.ptLabel : link.label}
              </Link>
            ))}
          </nav>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
               <SheetTitle className="sr-only">Menu</SheetTitle>
            </SheetHeader>
            <Link href={getLocalizedPath('/')} className="mr-6 flex items-center space-x-2">
              <Image src="/logo trans davidson.dev.png" alt="Davidson.dev Logo" width={24} height={24} className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline">Davidson.dev</span>
            </Link>
            <div className="grid gap-2 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={getLocalizedPath(link.href)}
                  className={cn(
                    'flex w-full items-center py-2 text-lg font-semibold',
                     pathname === getLocalizedPath(link.href) ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  {currentLang === 'pt' ? link.ptLabel : link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Could be a search bar */}
          </div>
          <nav className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Choose language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                   <Link href={getPathForLang('pt')}>Português</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={getPathForLang('en')}>English</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <a href={link.url} target="_blank" rel="noreferrer" aria-label={link.name}>
                  <link.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
