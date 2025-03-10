import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createHash, randomBytes } from 'crypto'

// Function to generate secure random token
function generateSecureToken(length: number = 32): string {
  return randomBytes(length).toString('hex')
}

// Function to hash password with salt
function hashPassword(password: string, salt: string): string {
  return createHash('sha256')
    .update(password + salt + process.env.ADMIN_PASSWORD_PEPPER)
    .digest('hex')
}

export async function POST(request: Request) {
  try {
    // Rate limiting check will be handled by middleware
    
    // Validate request
    if (!request.headers.get('Content-Type')?.includes('application/json')) {
      return NextResponse.json(
        { error: 'Invalid content type' },
        { status: 400 }
      )
    }

    const { password } = await request.json()
    
    if (!password || typeof password !== 'string') {
      return NextResponse.json(
        { error: 'Invalid request' },
        { status: 400 }
      )
    }

    // Compare password with hashed version
    const hashedPassword = hashPassword(password, process.env.ADMIN_PASSWORD_SALT!)
    console.log('Received password:', password)
    console.log('Generated hash:', hashedPassword)
    console.log('Stored hash:', process.env.ADMIN_PASSWORD_HASH)
    
    if (hashedPassword !== process.env.ADMIN_PASSWORD_HASH) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      )
    }

    // Generate new CSRF token
    const csrfToken = generateSecureToken()
    
    // Set secure cookies
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict' as const,
      maxAge: 60 * 60 * 4, // 4 hours
      path: '/',
    }

    cookies().set('admin-token', process.env.ADMIN_SECRET_TOKEN!, cookieOptions)
    cookies().set('csrf-token', csrfToken, cookieOptions)

    return NextResponse.json({ 
      success: true,
      csrfToken // Send CSRF token to client for future requests
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    )
  }
}
