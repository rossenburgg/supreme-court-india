import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  // Clear admin cookies
  cookies().delete('admin-token')
  cookies().delete('csrf-token')

  return NextResponse.json({ success: true })
}
