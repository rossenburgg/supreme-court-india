'use client'
import { ChevronRight, Search, Download, Clock, Calendar } from 'lucide-react'
import Link from 'next/link'
import { SupremeCourtHeader } from '@/components/ui/supreme-court-header'
import { useState } from 'react'

type Resolution = {
  title: string
  date: string
  category: 'appointment' | 'transfer' | 'elevation'
  court: string
  fileUrl: string
}

export default function CollegiumResolutionsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null)
  const [yearFilter, setYearFilter] = useState<string | null>(null)
  
  const resolutions: Resolution[] = [
    {
      title: "Statement dated 13.02.2025 - Recommendation for appointment of Shri Justice Manish Sharma as Chief Justice of the High Court of Gujarat",
      date: "13 Feb 2025",
      category: "appointment",
      court: "Gujarat High Court",
      fileUrl: "#"
    },
    {
      title: "Statement dated 10.02.2025 - Recommendation for appointment of three Judges in the Supreme Court of India",
      date: "10 Feb 2025",
      category: "appointment",
      court: "Supreme Court of India",
      fileUrl: "#"
    },
    {
      title: "Statement dated 06.02.2025 - Recommendation for transfer of Mr. Justice Rajesh Patil, Judge, High Court of Bombay to High Court of Kerala",
      date: "06 Feb 2025",
      category: "transfer",
      court: "Bombay High Court",
      fileUrl: "#"
    },
    {
      title: "Statement dated 31.01.2025 - Recommendation for appointment of five Judges in the High Court of Delhi",
      date: "31 Jan 2025",
      category: "appointment",
      court: "Delhi High Court",
      fileUrl: "#"
    },
    {
      title: "Statement dated 29.01.2025 - Recommendation for elevation of Mr. Justice Sanjay Mishra, Judge, Allahabad High Court as Chief Justice of Jharkhand High Court",
      date: "29 Jan 2025",
      category: "elevation",
      court: "Allahabad High Court",
      fileUrl: "#"
    },
    {
      title: "Statement dated 24.01.2025 - Recommendation for transfer of Smt. Justice Ranjana Desai, Judge, Gujarat High Court to High Court of Rajasthan",
      date: "24 Jan 2025",
      category: "transfer",
      court: "Gujarat High Court",
      fileUrl: "#"
    },
    {
      title: "Statement dated 15.01.2025 - Recommendation for appointment of ten Judges in the High Court of Punjab and Haryana",
      date: "15 Jan 2025",
      category: "appointment",
      court: "Punjab and Haryana High Court",
      fileUrl: "#"
    },
  ]

  const years = [...new Set(resolutions.map(r => r.date.split(' ')[2]))].sort().reverse()
  const categories = [
    { id: 'appointment', label: 'Appointment' },
    { id: 'transfer', label: 'Transfer' },
    { id: 'elevation', label: 'Elevation' },
  ]

  const filteredResolutions = resolutions.filter(resolution => {
    const matchesSearch = searchTerm === '' || 
      resolution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resolution.court.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = categoryFilter === null || resolution.category === categoryFilter
    const matchesYear = yearFilter === null || resolution.date.includes(yearFilter)
    
    return matchesSearch && matchesCategory && matchesYear
  })

  return (
    <main className="min-h-screen bg-white">
      <SupremeCourtHeader />
      
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="py-4 flex items-center justify-between">
            <nav className="flex items-center gap-2 text-[13px] text-gray-500">
              <Link href="/" className="hover:text-[#9b8154] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#9b8154]">Collegium Resolutions</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-[28px] font-bold text-[#9b8154] mb-12">
            Collegium Resolutions
          </h1>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search resolutions"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b8154] focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>

            <div className="flex flex-wrap gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={categoryFilter || ''}
                  onChange={(e) => setCategoryFilter(e.target.value || null)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#9b8154] focus:border-[#9b8154] sm:text-sm"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                <select
                  value={yearFilter || ''}
                  onChange={(e) => setYearFilter(e.target.value || null)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#9b8154] focus:border-[#9b8154] sm:text-sm"
                >
                  <option value="">All Years</option>
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Resolutions List */}
          <div className="space-y-4">
            {filteredResolutions.map((resolution, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-[#9b8154] transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-lg text-gray-900">{resolution.title}</h3>
                    <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {resolution.date}
                      </span>
                      <span className="capitalize">
                        {resolution.category}
                      </span>
                      <span>
                        {resolution.court}
                      </span>
                    </div>
                  </div>
                  <a 
                    href={resolution.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="shrink-0 text-[#9b8154] hover:text-[#9b8154]/80 transition-colors"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}

            {filteredResolutions.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No resolutions found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
