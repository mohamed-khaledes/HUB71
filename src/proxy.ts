import { chainMiddleware } from './middlewares/chain'
import { middlewareLocale } from './middlewares/middleware-locale'

const middlewares = [middlewareLocale]

export default chainMiddleware(middlewares)

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
