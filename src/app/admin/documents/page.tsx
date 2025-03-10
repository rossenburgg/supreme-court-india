'use client'

import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { Loader2, Upload, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'  // Changed from next/router to next/navigation

export default function DocumentsPage() {
  const [uploading, setUploading] = useState(false)
  const [title, setTitle] = useState('')
  const [labels, setLabels] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [csrfToken, setCsrfToken] = useState('')
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    const token = sessionStorage.getItem('csrfToken')
    if (token) {
      setCsrfToken(token)
    } else {
      router.push('/admin-login')
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file || !title || !csrfToken) return

    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('title', title)
    formData.append('labels', JSON.stringify(labels.split(',').map(l => l.trim())))

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'X-CSRF-Token': csrfToken
        },
        body: formData,
      })

      if (!response.ok) throw new Error('Upload failed')

      toast({
        title: 'Success',
        description: 'Document uploaded successfully',
      })

      // Reset form
      setTitle('')
      setLabels('')
      setFile(null)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to upload document',
        variant: 'destructive',
      })
    } finally {
      setUploading(false)
    }
  }

  const handleSignOut = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' })
      sessionStorage.removeItem('csrfToken')
      router.push('/admin-login')
      router.refresh()
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to sign out',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Upload Document</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Document Title</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter document title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Labels</label>
          <Input
            value={labels}
            onChange={(e) => setLabels(e.target.value)}
            placeholder="Enter labels (comma separated)"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">PDF File</label>
          <Input
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            required
          />
        </div>

        <Button 
          type="submit" 
          disabled={uploading || !file || !title}
          className="w-full"
        >
          {uploading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Upload Document
            </>
          )}
        </Button>
      </form>

      <Button
        variant="outline"
        className="w-full mt-4 text-red-600 border-red-200 hover:bg-red-50"
        onClick={handleSignOut}
      >
        <LogOut className="w-4 h-4 mr-2" />
        Sign Out
      </Button>
    </div>
  )
}
