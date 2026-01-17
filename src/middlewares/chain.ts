// src/middleware/chain.ts
import { NextMiddleware, NextResponse } from 'next/server'

export type CustomMiddleware = (
  request: any,
  event: any,
  response: NextResponse
) => NextMiddleware | Promise<NextMiddleware | NextResponse>

export function chainMiddleware(
  functions: ((middleware: CustomMiddleware) => CustomMiddleware)[] = [],
  index = 0
): any {
  const current = functions[index]

  if (current) {
    const next = chainMiddleware(functions, index + 1)
    return current(next)
  }

  return (request: any, event: any) => NextResponse.next()
}
