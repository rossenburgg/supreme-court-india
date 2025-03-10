'use client'
import { usePathname } from 'next/navigation'
import { Search, Sun } from 'lucide-react'
import { Navigation } from './navigation'  // Change to import Navigation instead of MainNavigation

export function Header() {
  const pathname = usePathname()
  const isAboutPage = pathname?.includes('/about/')

  return (
    <header className="relative z-50">
      {/* Top black bar */}
      <div className="bg-[#1a1a1a] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm">
            <span className="text-hindi text-xs">भारत का सर्वोच्च न्यायालय</span>
            {" | "}
            <span className="text-hindi text-xs tracking-wide">SUPREME COURT OF INDIA</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span>मुख्य विषयवस्तु पर जाएं</span>
            <Search className="w-4 h-4" />
            <button className="flex items-center gap-1">
              <Sun className="w-4 h-4" />
              <span>टेक्स्ट</span>
            </button>
            <button>हिंदी</button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      {!isAboutPage && (
        <div className="bg-white border-b">
          <div className="container mx-auto px-4">
            <Navigation />
          </div>
        </div>
      )}
    </header>
  )
}
