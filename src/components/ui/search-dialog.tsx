"use client"

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './dialog'
import { Input } from './input'
import { Search, FileText, Loader2 } from 'lucide-react'
import { useDebounce } from '@/lib/hooks/use-debounce'
import { useQuery } from '@tanstack/react-query'

interface SearchResult {
  id: string
  title: string
  file_url: string
  labels: string[]
  created_at: string
}

export function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 300)

  const { data: results, isLoading } = useQuery({
    queryKey: ['search', debouncedSearch],
    queryFn: async () => {
      if (!debouncedSearch) return []
      const response = await fetch(`/api/search?q=${encodeURIComponent(debouncedSearch)}`)
      return response.json() as Promise<SearchResult[]>
    },
    enabled: debouncedSearch.length > 0
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center gap-1 text-white">
          <Search className="w-4 h-4" />
          <span className="hidden sm:inline">खोज</span>
        </button>
      </DialogTrigger>
      <DialogContent className="w-[90%] sm:max-w-[600px] max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-2xl">दस्तावेज़ खोजें</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 overflow-hidden">
          <Input
            placeholder="खोज करें..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full"
          />
          <div className="max-h-[50vh] sm:max-h-[400px] overflow-y-auto space-y-2 -mx-6 px-6">
            {isLoading && (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
              </div>
            )}
            {results?.map((result) => (
              <a
                key={result.id}
                href={result.file_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100"
              >
                <FileText className="w-5 h-5 text-[#993333] mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium">{result.title}</h4>
                  <div className="mt-1 flex gap-2">
                    {result.labels.map((label) => (
                      <span
                        key={label}
                        className="inline-flex items-center rounded-full bg-[#993333]/10 px-2 py-0.5 text-xs text-[#993333]"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
            {results?.length === 0 && search && !isLoading && (
              <p className="text-center text-sm text-gray-500 py-8">
                कोई परिणाम नहीं मिला
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
