import { locales, defaultLocale } from '@/i18n/i18n'

import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  // This ensures the locale prefix is always present in the URL
  localePrefix: 'always'
})

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect root to default locale
  if (pathname === '/') {
    return Response.redirect(new URL('/en', request.url))
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: ['/', '/((?!api|_next|_vercel|.*\\..*).*)']
}
