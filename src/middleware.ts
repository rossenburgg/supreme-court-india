import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Track login attempts
const loginAttempts = new Map<string, { count: number; lastAttempt: number }>()
const MAX_ATTEMPTS = 5
const LOCKOUT_TIME = 15 * 60 * 1000 // 15 minutes

export function middleware(request: NextRequest) {
  // Apply security headers to all responses
  const response = NextResponse.next()
  
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  
  // Check if it's an admin route
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const ip = request.ip || 'unknown'
    
    // Check for login attempts if it's the login endpoint
    if (request.nextUrl.pathname === '/admin-login' && request.method === 'POST') {
      const attempts = loginAttempts.get(ip)
      
      if (attempts) {
        const timeSinceLastAttempt = Date.now() - attempts.lastAttempt
        
        if (attempts.count >= MAX_ATTEMPTS && timeSinceLastAttempt < LOCKOUT_TIME) {
          return new NextResponse(
            JSON.stringify({ error: 'Too many attempts. Please try again later.' }),
            { status: 429, headers: { 'Content-Type': 'application/json' } }
          )
        }
        
        if (timeSinceLastAttempt >= LOCKOUT_TIME) {
          loginAttempts.delete(ip)
        }
      }
    }
    
    // Verify admin token for all other admin routes
    if (request.nextUrl.pathname !== '/admin-login') {
      const authToken = request.cookies.get('admin-token')?.value
      const csrfToken = request.cookies.get('csrf-token')?.value
      
      if (!authToken || authToken !== process.env.ADMIN_SECRET_TOKEN) {
        return NextResponse.redirect(new URL('/admin-login', request.url))
      }
      
      // Verify CSRF token for POST/PUT/DELETE requests
      if (['POST', 'PUT', 'DELETE'].includes(request.method)) {
        const headerToken = request.headers.get('X-CSRF-Token')
        if (!csrfToken || !headerToken || csrfToken !== headerToken) {
          return new NextResponse(
            JSON.stringify({ error: 'Invalid CSRF token' }),
            { status: 403, headers: { 'Content-Type': 'application/json' } }
          )
        }
      }
    }
  }

  return response
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/admin/:path*'
  ]
}
