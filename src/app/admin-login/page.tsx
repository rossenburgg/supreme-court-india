'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { Lock } from 'lucide-react'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      const data = await response.json()
      
      if (!response.ok) throw new Error(data.error || 'Invalid password')

      // Store CSRF token for future requests
      sessionStorage.setItem('csrfToken', data.csrfToken)

      toast({
        title: 'Success',
        description: 'Successfully logged in',
      })

      router.push('/admin/documents')
      router.refresh()
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Invalid password',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center mb-8">
          <Lock className="w-12 h-12 text-[#993333] mb-4" />
          <h1 className="text-2xl font-bold text-gray-900">Admin Access</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Verifying...' : 'Login'}
          </Button>
        </form>
      </div>
    </div>
  )
}
