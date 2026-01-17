// src/middleware.ts
// import { middlewareAuth } from './middleware/middlewareAuth'; // Example of another one
import { chainMiddleware } from './middlewares/chain'
import { middlewareLocale } from './middlewares/middleware-locale'

// List your middlewares here in the order you want them to run
const middlewares = [middlewareLocale]

export default chainMiddleware(middlewares)

export const config = {
  // The matcher must stay here in the main middleware file
  matcher: ['/((?!api|_next|.*\\..*).*)']
}
