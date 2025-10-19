import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const supportedLangs = ['en', 'pt'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/pt', request.url))
  }

  const pathnameHasLang = supportedLangs.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  )

  if (!pathnameHasLang && pathname !== '/favicon.ico') {
     const newPath = `/pt${pathname}`
     return NextResponse.redirect(new URL(newPath, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ],
}