'use client'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ServiceIcon } from "@/components/ui/service-icon"
import { UpdateItem } from "@/components/ui/update-item"
import { FileText, Search, Scale as ScaleIcon, Check, Files, Upload, LayoutDashboard, HelpCircle, CalendarIcon, Newspaper, Users } from 'lucide-react'
import { UpdatesTabs } from '@/components/ui/updates-tabs'
import { ExploreCard } from '@/components/ui/explore-card'
import { Book, FileSearch, Globe, Database, Library, School, Gavel, HandHelping, Building2, FileSpreadsheet } from 'lucide-react'
import { CalendarView } from '@/components/ui/calendar-view'
import { AnimatedSection } from '@/components/ui/animated-section'
import { JudgeCard } from '@/components/ui/judge-card'
import Link from 'next/link'
import { ContactSection } from '@/components/ui/contact-section'
import { Navigation } from '@/components/ui/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'

const SERVICE_ICONS = {
  'causelist': FileText,
  'case-status': Search,
  'daily-orders': FileText,
  'judgments': Check,
  'office-report': Files,
  'kvaa': ScaleIcon,
  'e-filing': Upload,
  'display': LayoutDashboard,
  'helpline': HelpCircle,
} as const

const EXPLORE_ICONS = {
  important_judgments: FileSearch,
  rti: Globe,
  escr: Database,
  digital_scr: ScaleIcon,
  njdg: Gavel,
  welcome: Users,
  judges_library: Library,
  research_center: School,
  lisaashis: Book,
  legal_aid: HandHelping,
  snyavises: Building2,
  e_committee: FileSpreadsheet,
} as const

export default function Home() {
  const t = useTranslations('home')
  const locale = useLocale()
  const videoId = "QjWiryRN1TE"
  
  return (
    <main className="relative">
      <section className="relative h-[80vh] w-full">
        <Image
          src="/supreme-court-building.jpg"
          alt="Supreme Court Building"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[center_60%]"
        />

        <div className="absolute inset-x-0 top-0 z-20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-start gap-8">
              <Image 
                src="/supreme-court-logo.svg" 
                alt="Supreme Court Logo" 
                width={100} 
                height={100}
                className="p-2"
              />
              <div className="text-black pt-1">
                <h1 className="text-hindi text-xl font-medium tracking-wide mb-1">
                  {locale === 'hi' ? 'भारत का सर्वोच्च न्यायालय' : 'Supreme Court of India'}
                </h1>
                <h2 className="text-english-serif text-3xl font-bold mb-1 tracking-wider">
                  Supreme Court of India
                </h2>
                <p className="text-hindi text-lg font-medium tracking-widest mb-6">
                  ॥ यतो धर्मस्ततो जय: ॥
                </p>
                
                {/* Navigation with semi-transparent background */}
                <div className="-mx-4 bg-white/90 backdrop-blur-sm rounded-md">
                  <Navigation />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute -bottom-20 left-0 right-0 z-30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-9 gap-3">
              {Object.entries(SERVICE_ICONS).map(([key, Icon]) => (
                <ServiceIcon 
                  key={key}
                  icon={<Icon className="w-8 h-8 stroke-[#993333] stroke-[1.5]" />}
                  titleHindi={t(`serviceIcons.${key}.title`)}
                  subtitleHindi={t(`serviceIcons.${key}.subtitle`)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-[#993333] text-xl font-medium mb-4">
                {t('livestream')}
              </h2>
              <div className="relative aspect-video bg-black mb-4">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="Supreme Court Live Stream"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="flex justify-between text-sm">
                <a href={`https://youtu.be/${videoId}`} target="_blank" rel="noopener noreferrer" className="text-[#993333]/70 hover:text-[#993333]">
                  {t('liveSession')}
                </a>
                <a href="https://www.youtube.com/@supremecourtofindia" target="_blank" rel="noopener noreferrer" className="text-[#993333]/70 hover:text-[#993333]">
                  {t('previousSessions')}
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[#993333] text-2xl font-semibold mb-6">
                {t('latestUpdates')}
              </h2>
              <UpdatesTabs />
              <div className="text-center mt-8">
                <button className="px-8 py-2.5 border border-gray-300 text-[#993333] rounded-full hover:bg-gray-50 transition-colors font-medium">
                  सभी को देखें ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f2eb] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#9b8154] text-center mb-12">
            {t('exploreConnect')}
          </h2>
          <div className="grid grid-cols-4 gap-6">
            {Object.entries(EXPLORE_ICONS).map(([key, Icon]) => (
              <ExploreCard 
                key={key}
                icon={<Icon />}
                title={t(`exploreCards.${key}`)}
                href="#"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Calendar and Press Release Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-12">
            {/* Left Column - Press Releases with Tabs */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex border-b">
                {[
                  { id: 'press', label: 'प्रेस विज्ञप्ति', icon: <Newspaper className="w-4 h-4" /> },
                  { id: 'tenders', label: 'निविदाएँ', icon: <FileText className="w-4 h-4" /> },
                  { id: 'recruitment', label: 'भर्ती', icon: <Users className="w-4 h-4" /> },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    className={`flex-1 px-4 py-3 flex items-center justify-center gap-2 text-sm font-medium transition-colors relative
                      ${tab.id === 'press' 
                        ? 'text-[#993333] bg-white' 
                        : 'text-gray-600 hover:text-gray-900 bg-gray-50'
                      }
                      ${tab.id === 'press' && 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#993333]'}
                    `}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="p-6 space-y-4 max-h-[600px] overflow-y-auto">
                {[
                  "निविदाएँ",
                  "भर्ती",
                  "सर्वोच्च न्यायालय ने 7 नवंबर, 2024 को ऑन-प्रिमाइस डेटा सेंटर की स्थापना की",
                  // ...rest of the press releases...
                ].map((item, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="block p-4 rounded-lg border border-gray-100 hover:border-[#993333]/20 hover:bg-[#993333]/5 transition-colors"
                  >
                    <p className="text-sm text-gray-800 leading-relaxed">{item}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column - Calendar */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-[#993333] mb-8 flex items-center gap-2">
                <CalendarIcon className="w-6 h-6" />
                {t('courtCalendar')}
              </h2>
              <CalendarView />
            </div>
          </div>
        </div>
      </section>

      {/* Judges Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-semibold text-[#993333]">
              {t('chiefJustices')}
            </h2>
            <Link
              href="/justices"
              className="px-6 py-2 border border-[#993333] text-[#993333] rounded-lg hover:bg-[#993333] hover:text-white transition-colors"
            >
              {t('viewAllJudges')}
            </Link>
          </div>
          
          <div className="grid grid-cols-5 gap-6">
            <JudgeCard 
              name="Sanjiv Khanna"
              nameHindi="न्यायमूर्ति संजीव खन्ना"
              designation="भारत के मुख्य न्यायाधीश"
              imageUrl="/judges/sanjiv-khanna.jpeg"
            />
            <JudgeCard 
              name="Honourable Mr Justice Bhushan Ramkrishna Gavai"
              nameHindi="न्यायमूर्ति भूषण रामकृष्ण गवई"
              imageUrl="/judges/bhushan-gavai.jpg"
              appointmentDate="24 मई, 2019"
              retirementDate="23 नवंबर, 2025"
              birthInfo={{
                date: "24 नवंबर 1960",
                place: "अमरावती"
              }}
            />
            <JudgeCard 
              name="Honourable Mr Justice Surya Kant"
              nameHindi="न्यायमूर्ति सूर्यकान्त"
              imageUrl="/judges/surya-kant.jpg"
              appointmentDate="24 मई, 2019"
              retirementDate="09 फरवरी, 2027"
            />
            <JudgeCard 
              name="Honourable Mr Justice Abhay S Oka"
              nameHindi="न्यायमूर्ति अभय.एस. ओका"
              imageUrl="/judges/abhay-oka.jpg"
              appointmentDate="31 अगस्त, 2021"
            />
            <JudgeCard 
              name="Honourable Mr Justice Vikram Nath"
              nameHindi="न्यायमूर्ति विक्रम नाथ"
              imageUrl="/judges/vikram-nath.jpg"
              appointmentDate="31 अगस्त 2021"
              retirementDate="23 सितंबर 2027"
            />
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
