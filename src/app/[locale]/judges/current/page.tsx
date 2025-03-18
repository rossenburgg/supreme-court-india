'use client'
import { ChevronRight, Search } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { SupremeCourtHeader } from '@/components/ui/supreme-court-header'
import { useState } from 'react'
import { JudgeCard } from '@/components/ui/judge-card'

export default function CurrentJudgesPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const judges = [
    {
      name: "Sanjiv Khanna",
      nameHindi: "न्यायमूर्ति संजीव खन्ना",
      designation: "भारत के मुख्य न्यायाधीश",
      imageUrl: "/judges/sanjiv-khanna.jpeg",
      appointmentDate: "24 नवंबर 2019"
    },
    {
      name: "Bhushan Ramkrishna Gavai",
      nameHindi: "न्यायमूर्ति भूषण रामकृष्ण गवई",
      imageUrl: "/judges/bhushan-gavai.jpg",
      appointmentDate: "24 मई, 2019",
    },
    {
      name: "Surya Kant",
      nameHindi: "न्यायमूर्ति सूर्यकान्त",
      imageUrl: "/judges/surya-kant.jpg",
      appointmentDate: "24 मई, 2019",
    },
    {
      name: "Abhay S Oka",
      nameHindi: "न्यायमूर्ति अभय.एस. ओका",
      imageUrl: "/judges/abhay-oka.jpg",
      appointmentDate: "31 अगस्त, 2021",
    },
    {
      name: "Vikram Nath",
      nameHindi: "न्यायमूर्ति विक्रम नाथ",
      imageUrl: "/judges/vikram-nath.jpg",
      appointmentDate: "31 अगस्त 2021",
    },
    // Add more judges as needed
  ]

  const filteredJudges = judges.filter(judge => 
    judge.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    judge.nameHindi.includes(searchTerm)
  )

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
              <Link href="#" className="hover:text-[#9b8154] transition-colors">
                Judges
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#9b8154]">Chief Justice & Judges</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-[28px] font-bold text-[#9b8154] mb-12">
            Chief Justice & Judges of the Supreme Court
          </h1>

          {/* Search Box */}
          <div className="mb-8">
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="Search judges by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b8154] focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-[#f8f7f3] p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-[#9b8154]">34</div>
              <div className="text-sm text-gray-600">Total Sanctioned Strength</div>
            </div>
            <div className="bg-[#f8f7f3] p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-[#9b8154]">28</div>
              <div className="text-sm text-gray-600">Current Judges</div>
            </div>
            <div className="bg-[#f8f7f3] p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-[#9b8154]">6</div>
              <div className="text-sm text-gray-600">Vacant Positions</div>
            </div>
            <div className="bg-[#f8f7f3] p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-[#9b8154]">4</div>
              <div className="text-sm text-gray-600">Female Judges</div>
            </div>
          </div>

          {/* Judges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {filteredJudges.map((judge, index) => (
              <JudgeCard 
                key={index}
                name={judge.name}
                nameHindi={judge.nameHindi}
                designation={judge.designation}
                imageUrl={judge.imageUrl}
              />
            ))}
          </div>

          {filteredJudges.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No judges found matching your search criteria.
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
