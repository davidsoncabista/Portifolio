
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const supportedLangs = ['en', 'pt'];
const publicRoutes = ['/login']; // Routes that should not be redirected

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Ignore specific files and API routes
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.') // for static files
  ) {
    return NextResponse.next();
  }

  // Redirect root to /pt
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/pt', request.url))
  }

  const pathnameHasLang = supportedLangs.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  )

  const isPublicRoute = publicRoutes.some(route => pathname.endsWith(route));

  // If it's a public route (like /login), don't add language prefix
  if (isPublicRoute) {
     const lang = pathname.split('/')[1];
     if (supportedLangs.includes(lang)) {
        // if it has a lang prefix like /en/login, redirect to /login
        const newPath = pathname.substring(lang.length + 1);
        return NextResponse.redirect(new URL(newPath, request.url));
     }
     return NextResponse.next();
  }
  
  // For other routes, ensure they have a language prefix
  if (!pathnameHasLang) {
     const newPath = `/pt${pathname}`
     return NextResponse.redirect(new URL(newPath, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
  ],
}
