'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Mountain, Globe } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { href: '/', label: 'Home', ptLabel: 'Início' },
  { href: '/projects', label: 'Projects', ptLabel: 'Projetos' },
];

export function Header() {
  const pathname = usePathname();
  const lang = pathname.split('/')[1];
  const currentLang = (lang === 'pt' || lang === 'en') ? lang : 'pt';

  const getLocalizedPath = (path: string) => {
    return `/${currentLang}${path}`;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href={getLocalizedPath('/')} className="mr-6 flex items-center space-x-2">
            <Mountain className="h-6 w-6 text-primary" />
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
            <Link href={getLocalizedPath('/')} className="mr-6 flex items-center space-x-2">
              <Mountain className="h-6 w-6 text-primary" />
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
                   <Link href={`/pt${pathname.startsWith('/en') ? pathname.substring(3) : pathname}`}>Português</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/en${pathname.startsWith('/pt') ? pathname.substring(3) : pathname}`}>English</Link>
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