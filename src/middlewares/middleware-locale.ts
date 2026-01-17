import { NextFetchEvent, NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from '@/i18n/i18n'
import { CustomMiddleware } from './chain'

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  // This ensures the locale prefix is always present in the URL
  localePrefix: 'always'
})

export function middlewareLocale(middleware: CustomMiddleware): CustomMiddleware {
  return async (request: NextRequest, event: NextFetchEvent) => {
    // 1. Run the next-intl middleware
    const response = intlMiddleware(request)

    // 2. If you want to chain more logic AFTER the locale check:
    // You can pass the 'response' into the next middleware in the chain
    return middleware(request, event, response)
  }
}

export const config = {
  // This matcher ignores internal Next.js files and static assets
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
