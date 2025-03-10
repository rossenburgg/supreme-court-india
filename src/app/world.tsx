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
import { useLanguage } from '@/lib/contexts/language-context'
import { PAGE_TRANSLATIONS } from '@/lib/translations/page-translations'
import { useTranslations } from 'next-intl';

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
  important_judgments: FileSearch,  // Updated keys to match translations
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

type ServiceIconKey = keyof typeof PAGE_TRANSLATIONS['service_icons']

export default function Home() {
  const { language } = useLanguage()
  const t = useTranslations('home');
  
  const videoId = "QjWiryRN1TE";
  
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
          className="object-cover object-[center_35%]"
        />
        <div className="absolute inset-x-0 top-0 z-20">
          <div className="container mx-auto flex items-start gap-8 px-4 py-6">
            <Image 
              src="/supreme-court-logo.svg" 
              alt="Supreme Court Logo" 
              width={100} 
              height={100}
              className="p-2"
            />
            <div className="text-black pt-1">
              <h1 className="text-hindi text-xl font-medium tracking-wide mb-1">
                {language === 'hi' ? 'भारत का सर्वोच्च न्यायालय' : 'Supreme Court of India'}
              </h1>
              <h2 className="text-english-serif text-3xl font-bold mb-1 tracking-wider">
                Supreme Court of India
              </h2>
              <p className="text-hindi text-lg font-medium tracking-widest mb-4">
                ॥ यतो धर्मस्ततो जय: ॥
              </p>
              
              {/* Add Navigation here */}
              <div className="-mx-4">
                <Navigation />
              </div>
            </div>
          </div>
        </div>
        
        {/* Service cards positioned at bottom of hero */}
        <div className="absolute -bottom-20 left-0 right-0 z-30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-9 gap-3">
              {PAGE_TRANSLATIONS.service_icons && Object.keys(PAGE_TRANSLATIONS.service_icons).map((key) => {
                const iconKey = key as keyof typeof SERVICE_ICONS
                const IconComponent = SERVICE_ICONS[iconKey]
                const translations = PAGE_TRANSLATIONS.service_icons[key as ServiceIconKey]

                if (!IconComponent || !translations) return null

                return (
                  <ServiceIcon 
                    key={key}
                    icon={<IconComponent className="w-8 h-8 stroke-[#993333] stroke-[1.5]" />}
                    titleHindi={translations.title[language]}
                    subtitleHindi={translations.subtitle[language]}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Content section pushed down to accommodate service cards */}
      <section className="pt-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column - Live Streaming */}
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
                  {t('live-session')}
                </a>
                <a href="https://www.youtube.com/@supremecourtofindia" target="_blank" rel="noopener noreferrer" className="text-[#993333]/70 hover:text-[#993333]">
                  {t('previous-sessions')}
                </a>
              </div>
            </div>

            {/* Right Column - Latest Updates */}
            <div>
              <h2 className="text-[#993333] text-2xl font-semibold mb-6">
                {t('latest-updates')}
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

      {/* Explore Section */}
      <section className="bg-[#f5f2eb] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#9b8154] text-center mb-12">
            {t('explore-connect')}
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
                  "भारत का सर्वोच्च न्यायालय 28-29 सितंबर, 2024 को विकलांग बच्चों के अधिकारों की रक्षा पर दो दिवसीय राष्ट्रीय वार्षिक हितधारक परामर्श आयोजित करेगा।",
                  "भारत के सर्वोच्च न्यायालय ने एक नया वेब पेज लॉन्च किया – 'महत्वपूर्ण निर्णय सारांश'",
                  "भारत के सर्वोच्च न्यायालय ने जिला न्यायपालिका के दो दिवसीय राष्ट्रीय सम्मलेन आयोजित किया",
                  "भारत के सर्वोच्च न्यायालय ने 21 जून 2024 को अंतर्राष्ट्रीय योग दिवस मनाया ।",
                  "भारत के सर्वोच्च न्यायालय द्वारा विशेष लोक अदालत का आयोजन किया जाएगा।",
                  "भारत का सर्वोच्च न्यायालय श्रीलंका के सर्वोच्च न्यायालय के रजिस्ट्री अधिकारियों के लिए प्रशिक्षण कार्यक्रम का आयोजन किया।",
                  "भारत के सर्वोच्च न्यायालय ने 13-14 अप्रैल, 2024 को सिंगापुर के साथ प्रौद्योगिकी और न्यायिक वार्ता पर दो दिवसीय सम्मेलन की मेजबानी की",
                  "सुगम्यता",
                  "न्यायिक डाटा ग्रिड (एनजेडीजी) में भारत के सर्वोच्च न्यायालय का शामिल होना"
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
            <div className="flex flex-col items-center"> {/* Changed to flex container with center alignment */}
              <h2 className="text-2xl font-semibold text-[#993333] mb-8 flex items-center gap-2">
                <CalendarIcon className="w-6 h-6" />
                कोर्ट कैलेंडर
              </h2>
              <CalendarView />
            </div>
          </div>
        </div>
      </section>

      {/* Animation Section */}
      <AnimatedSection />

      {/* Judges Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-semibold text-[#993333]">
              मुख्य न्यायाधीश एवं न्यायाधीश
            </h2>
            <Link
              href="/justices"
              className="px-6 py-2 border border-[#993333] text-[#993333] rounded-lg hover:bg-[#993333] hover:text-white transition-colors"
            >
              सभी देखें
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
              enrollmentDate="16 मार्च, 1985"
              bio={`न्यायमूर्ति भूषण रामकृष्ण गवई का जन्म 24 नवंबर 1960 को अमरावती में हुआ। 16 मार्च, 1985 को बार में शामिल हुए। उन्होंने दिवंगत बैरिस्टर, राजा एस. भोंसले, पूर्व महाधिवक्ता और 1987 तक उच्च न्यायालय के न्यायाधीश, के साथ काम किया।

1987 से 1990 तक बॉम्बे उच्च न्यायालय में स्वतंत्र रूप से वकालत की। 1990 के बाद, मुख्य रूप से बॉम्बे उच्च न्यायालय की नागपुर पीठ के समक्ष वकालत की। संवैधानिक विधि और प्रशासनिक कानून में वकालत की।

14 नवंबर, 2003 को उच्च न्यायालय के अतिरिक्त न्यायाधीश के रूप में पदोन्नत। 12 नवंबर, 2005 को बॉम्बे उच्च न्यायालय के स्थायी न्यायाधीश बने। मुंबई स्थित मुख्य पीठ के साथ-साथ नागपुर, औरंगाबाद और पणजी स्थित पीठों में सभी प्रकार के कार्यों वाली पीठों की अध्यक्षता की।`}
              specialization={[
                "संवैधानिक विधि",
                "प्रशासनिक कानून"
              ]}
              previousPositions={[
                "सहायक सरकारी अभिवक्ता और अतिरिक्त लोक अभियोजक, बॉम्बे उच्च न्यायालय (अगस्त 1992 - जुलाई 1993)",
                "सरकारी अभिवक्ता और लोक अभियोजक, नागपुर बेंच (17 जनवरी 2000)",
                "बॉम्बे उच्च न्यायालय के स्थायी न्यायाधीश (12 नवंबर 2005)",
                "भारत के सर्वोच्च न्यायालय के न्यायाधीश (24 मई 2019)"
              ]}
            />
            <JudgeCard 
              name="Honourable Mr Justice Surya Kant"
              nameHindi="न्यायमूर्ति सूर्यकान्त"
              imageUrl="/judges/surya-kant.jpg"
              birthInfo={{
                date: "10 फरवरी, 1962",
                place: "हिसार (हरियाणा)"
              }}
              education={[
                "स्नातक - गवर्नमेंट पोस्ट ग्रेजुएट कॉलेज, हिसार (1981)",
                "कानून स्नातक - महर्षि दयानंद विश्वविद्यालय, रोहतक (1984)",
                "कानून में स्नातकोत्तर - कुरुक्षेत्र विश्वविद्यालय (2011, प्रथम श्रेणी)"
              ]}
              enrollmentDate="1984"
              appointmentDate="24 मई, 2019"
              retirementDate="09 फरवरी, 2027"
              specialization={[
                "संवैधानिक कानून",
                "सेवा मामले",
                "सिविल मामले"
              ]}
              previousPositions={[
                "हरियाणा के एडवोकेट जनरल (जुलाई 2000 - जनवरी 2004)",
                "वरिष्ठ अधिवक्ता (मार्च 2001)",
                "पंजाब और हरियाणा उच्च न्यायालय के स्थायी न्यायाधीश (09 जनवरी 2004)",
                "हिमाचल प्रदेश उच्च न्यायालय के मुख्य न्यायाधीश (05 अक्टूबर 2018)",
                "भारत के सर्वोच्च न्यायालय के न्यायाधीश (24 मई 2019)",
                "सर्वोच्च न्यायालय कानूनी सेवा समिति के अध्यक्ष (12 नवंबर 2024)"
              ]}
              bio={`न्यायमूर्ति सूर्यकान्त का जन्म 10 फरवरी, 1962 को हिसार (हरियाणा) में एक मध्यम वर्गीय परिवार में हुआ। 1984 में जिला न्यायालय, हिसार में वकालत शुरू की। 1985 में पंजाब और हरियाणा उच्च न्यायालय में वकालत करने के लिए चंडीगढ़ चले गए।

संवैधानिक, सेवा और सिविल मामलों में विशेषज्ञता। कई विश्वविद्यालयों, बोर्डों, निगमों, बैंकों और खुद उच्च न्यायालय का प्रतिनिधित्व किया। 7 जुलाई 2000 को हरियाणा के सबसे युवा एडवोकेट जनरल नियुक्त होने का गौरव प्राप्त किया।

23 फरवरी 2007 को 22 फरवरी 2011 तक लगातार दो कार्यकाल के लिए राष्ट्रीय कानूनी सेवा प्राधिकरण के शासी निकाय के सदस्य के रूप में नामित किए गए। वर्तमान में भारतीय विधि संस्थान की विभिन्न समितियों के सदस्य हैं।`}
            />
            <JudgeCard 
              name="Honourable Mr Justice Abhay S Oka"
              nameHindi="न्यायमूर्ति अभय.एस. ओका"
              imageUrl="/judges/abhay-oka.jpg"
              birthInfo={{
                date: "25 मई, 1960",
                place: "मुंबई"
              }}
              education={[
                "बी.एससी., एलएलएम (बॉम्बे विश्वविद्यालय)"
              ]}
              enrollmentDate="28 जून, 1983"
              appointmentDate="31 अगस्त, 2021"
              previousPositions={[
                "बॉम्बे हाई कोर्ट के अतिरिक्त न्यायाधीश (29 अगस्त 2003)",
                "बॉम्बे हाई कोर्ट के स्थायी न्यायाधीश (12 नवंबर 2005)",
                "कर्नाटक उच्च न्यायालय के मुख्य न्यायाधीश (10 मई 2019)",
                "भारत के सर्वोच्च न्यायालय के न्यायाधीश (31 अगस्त 2021)"
              ]}
              specialization={[
                "जनहित याचिकाएं",
                "संवैधानिक कानून"
              ]}
              bio={`न्यायमूर्ति अभय.एस.ओका का जन्म 25 मई, 1960 को हुआ। उन्होंने बॉम्बे विश्वविद्यालय से बी.एससी. और एलएलएम की डिग्री प्राप्त की।

28 जून, 1983 को एक अधिवक्ता के रूप में नामांकित हुए। अपने पिता श्रीनिवास डब्ल्यू ओका के कक्ष में ठाणे जिला न्यायालय में अभ्यास करना शुरू किया। 1985-86 में, वह बॉम्बे उच्च न्यायालय के पूर्व न्यायाधीश और पूर्व लोकायुक्त श्री वी. पी. टिपनिस के कक्ष में शामिल हुए।

कई महत्वपूर्ण मामलों और जनहित याचिकाओं में पैरवी की गई। उनकी विशेषज्ञता जनहित याचिकाओं और संवैधानिक कानून में है।`}
            />
            <JudgeCard 
              name="Honourable Mr Justice Vikram Nath"
              nameHindi="न्यायमूर्ति विक्रम नाथ"
              imageUrl="/judges/vikram-nath.jpg"
              birthInfo={{
                date: "24 सितंबर 1962",
                place: ""
              }}
              enrollmentDate="30 मार्च 1987"
              appointmentDate="31 अगस्त 2021"
              retirementDate="23 सितंबर 2027"
              previousPositions={[
                "इलाहाबाद उच्च न्यायालय के अपर न्यायाधीश (24 सितंबर 2004)",
                "इलाहाबाद उच्च न्यायालय के न्यायाधीश (27 फ़रवरी 2006)",
                "गुजरात उच्च न्यायालय के मुख्य न्यायमूर्ति (10 सितंबर 2019)",
                "भारत के सर्वोच्च न्यायालय के न्यायाधीश (31 अगस्त 2021)"
              ]}
              achievements={[
                "वह यू-ट्यूब चैनल पर न्यायालय कार्यवाहियों का सीधा प्रसारण करने वाले भारत के किसी उच्च न्यायालय के पहले मुख्य न्यायमूर्ति हैं।"
              ]}
              bio={`न्यायमूर्ति विक्रम नाथ का जन्म 24 सितंबर 1962 को हुआ था। उन्हें 30 मार्च 1987 को बार काउंसिल ऑफ़ उत्तर प्रदेश में नामांकित किया गया था।

24 सितंबर 2004 को उन्हें इलाहाबाद उच्च न्यायालय के अपर न्यायाधीश के रूप में पदोन्नत किया गया। उन्होंने 27 फ़रवरी 2006 को इलाहाबाद उच्च न्यायालय के न्यायाधीश के रूप में शपथ ली।

उन्हें 10 सितंबर 2019 को गुजरात उच्च न्यायालय के मुख्य न्यायाधीश के रूप में पदोन्नत किया गया। उन्हें 31 अगस्त 2021 को भारत के सर्वोच्च न्यायालय के न्यायाधीश के रूप में पदोन्नत किया गया था।`}
            />
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}