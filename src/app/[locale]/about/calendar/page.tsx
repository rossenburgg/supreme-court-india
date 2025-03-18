'use client'
import { ChevronRight, Download, Calendar } from 'lucide-react'
import Link from 'next/link'
import { SupremeCourtHeader } from '@/components/ui/supreme-court-header'

export default function CalendarPage() {
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
                About Us
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#9b8154]">Calendar</span>
            </nav>
            
            <button 
              className="p-2 text-gray-500 hover:text-[#9b8154] transition-colors"
              title="Download PDF"
            >
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-[28px] font-bold text-[#9b8154] mb-12 flex items-center gap-3">
            <Calendar className="w-8 h-8" />
            Court Calendar 2025
          </h1>

          <div className="space-y-10 text-[17px] leading-[27px] text-gray-800">
            {/* Calendar Section */}
            <section>
              <div className="relative pl-6 mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#9b8154]" />
                <h2 className="text-[20px] font-bold tracking-wide text-gray-900">
                  COURT HOLIDAYS
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#9b8154]/20" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[#9b8154]">January - March</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Republic Day</span>
                      <span className="font-medium">26 January (Sunday)</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Maha Shivaratri</span>
                      <span className="font-medium">8 March (Saturday)</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Holi</span>
                      <span className="font-medium">24 March (Monday)</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Good Friday</span>
                      <span className="font-medium">18 April (Friday)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[#9b8154]">April - June</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Ram Navami</span>
                      <span className="font-medium">17 April (Thursday)</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Buddha Purnima</span>
                      <span className="font-medium">15 May (Thursday)</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Id-ul-Fitr</span>
                      <span className="font-medium">2 May (Friday)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[#9b8154]">July - September</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Muharram</span>
                      <span className="font-medium">17 July (Thursday)</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Independence Day</span>
                      <span className="font-medium">15 August (Friday)</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Janmashtami</span>
                      <span className="font-medium">26 August (Tuesday)</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Gandhi Jayanti</span>
                      <span className="font-medium">2 October (Thursday)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[#9b8154]">October - December</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Dussehra</span>
                      <span className="font-medium">12 October (Saturday)</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Diwali</span>
                      <span className="font-medium">1 November (Saturday)</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Guru Nanak Jayanti</span>
                      <span className="font-medium">15 November (Saturday)</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Christmas</span>
                      <span className="font-medium">25 December (Thursday)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Court Terms */}
            <section>
              <div className="relative pl-6 mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#9b8154]" />
                <h2 className="text-[20px] font-bold tracking-wide text-gray-900">
                  SUPREME COURT TERMS
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#9b8154]/20" />
              </div>
              
              <div className="space-y-6">
                <div className="bg-[#f8f7f3] p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-[#9b8154]">Winter Term</h3>
                  <p className="text-gray-700">January 2 to March 14, 2025</p>
                </div>
                
                <div className="bg-[#f8f7f3] p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-[#9b8154]">Spring Term</h3>
                  <p className="text-gray-700">March 15 to May 16, 2025</p>
                </div>
                
                <div className="bg-[#f8f7f3] p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-[#9b8154]">Summer Vacation</h3>
                  <p className="text-gray-700">May 17 to July 6, 2025</p>
                </div>
                
                <div className="bg-[#f8f7f3] p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-[#9b8154]">Monsoon Term</h3>
                  <p className="text-gray-700">July 7 to October 12, 2025</p>
                </div>
                
                <div className="bg-[#f8f7f3] p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-[#9b8154]">Autumn Term</h3>
                  <p className="text-gray-700">October 13 to December 18, 2025</p>
                </div>
                
                <div className="bg-[#f8f7f3] p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-[#9b8154]">Winter Vacation</h3>
                  <p className="text-gray-700">December 19, 2025 to January 1, 2026</p>
                </div>
              </div>
            </section>

            {/* Sitting Hours */}
            <section>
              <div className="relative pl-6 mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#9b8154]" />
                <h2 className="text-[20px] font-bold tracking-wide text-gray-900">
                  COURT SITTING HOURS
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#9b8154]/20" />
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="font-medium">Monday to Friday (Regular Courts)</span>
                  <span>10:30 AM to 4:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="font-medium">Lunch Break</span>
                  <span>1:00 PM to 2:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="font-medium">Special Benches (if constituted)</span>
                  <span>2:00 PM to 4:00 PM</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-[#f8f7f3] rounded-lg">
                <p className="italic text-sm">
                  Note: The Court calendar is subject to change. Please refer to the official notifications for the most accurate information.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
