'use client'
import { useState } from 'react'
import Calendar from 'react-calendar'
import { format, isSameDay } from 'date-fns'
import { hi } from 'date-fns/locale'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const courtEvents = {
  '2025-02-17': ['सुनवाई', 'महत्वपूर्ण'],
  '2025-02-20': ['सुनवाई'],
  '2025-02-25': ['महत्वपूर्ण'],
} as const

export function CalendarView() {
  const [date, setDate] = useState(new Date())
  const today = new Date()

  return (
    <div className="flex justify-end">
      <div className="w-[500px] bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <Calendar 
          onChange={setDate}
          value={date}
          locale="hi-IN"
          className="border-0 p-4"
          navigationLabel={({ date }) => format(date, 'MMMM yyyy', { locale: hi })}
          prevLabel={<ChevronLeft className="w-5 h-5" />}
          nextLabel={<ChevronRight className="w-5 h-5" />}
          tileClassName={({ date: tileDate }) => 
            isSameDay(tileDate, today) ? 'bg-[#993333]/10 font-medium' : ''
          }
          tileContent={({ date: tileDate }) => {
            const dateStr = format(tileDate, 'yyyy-MM-dd')
            const events = courtEvents[dateStr as keyof typeof courtEvents] || []
            return events.length > 0 ? (
              <div className="flex gap-1 absolute bottom-1 left-1">
                {events.includes('सुनवाई') && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#993333]" />
                )}
                {events.includes('महत्वपूर्ण') && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#9b8154]" />
                )}
              </div>
            ) : null
          }}
        />
        <div className="border-t p-4 bg-gray-50">
          <h3 className="text-xs font-medium text-gray-900 mb-2">टिप्पणियाँ</h3>
          <ul className="space-y-1.5 text-xs text-gray-600">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#993333]" />
              <span>सुनवाई के दिन</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 ह-1.5 rounded-full bg-[#9b8154]" />
              <span>महत्वपूर्ण तिथियाँ</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
