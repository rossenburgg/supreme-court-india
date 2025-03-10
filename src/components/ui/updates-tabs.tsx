'use client'
import { useState } from 'react'
import { UpdateItem } from './update-item'
import { FileText, Circle, Gavel, FileStack, Bell } from 'lucide-react' // Add new icons

const TABS = [
  { 
    id: 'updates', 
    label: 'अपडेट',
    icon: <FileStack className="w-4 h-4" />
  },
  { 
    id: 'judgments', 
    label: 'निर्णय',
    icon: <Gavel className="w-4 h-4" />
  },
  { 
    id: 'orders', 
    label: 'आदेश',
    icon: <FileText className="w-4 h-4" />
  },
  { 
    id: 'notices', 
    label: 'सूचीबद्ध नोटिस',
    icon: <Bell className="w-4 h-4" />
  }
] as const

const TAB_CONTENT = {
  updates: [
    {
      text: "दिनांक 18.02.2025 (मंगलवार) को कोर्ट संख्या 8 एवं 15 में परिवर्तन के संबंध में सूचना",
      url: "https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/uploads/2025/02/2025021874.pdf"
    },
    {
      text: "18.02.2025 को प्रसारित सूची में शामिल समीक्षा याचिकाओं को हटाने के संबंध में सूचना",
      url: "https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/uploads/2025/02/2025021897.pdf"
    },
    {
      text: "दिनांक 18.02.2025 को माननीय न्यायालय के समक्ष मौखिक उल्लेखित मामलों की सूची",
      url: "https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/uploads/2025/02/2025021746.pdf"
    },
    {
      text: "18.02.2025 को प्रसारित सूची में शामिल समीक्षा याचिकाओं को हटाने के संबंध में सूचना।",
      url: "https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/uploads/2025/02/2025021762.pdf"
    },
    {
      text: "मंगलवार (18.02.2025) को कोर्ट संख्या 5 एवं 15 में परिवर्तन संबंधी सूचना",
      url: "https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/uploads/2025/02/2025021725.pdf"
    },
    {
      text: "कोर्ट संख्या 8 को रद्द करने और एकल न्यायाधीश बेंच/चैंबर मामलों को 18.02.2025 (मंगलवार) को सूचीबद्ध करने के संबंध में नोटिस।",
      url: "https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/uploads/2025/02/2025021721.pdf"
    }
  ],
  judgments: [
    "शांति VS. राष्ट्रीय बीमा कंपनी - सि.अ. सं 2586/2025 - डायरी संख्या 20473 / 2021 - 17-Feb-2025\n(अपलोड ऑन 17-02-2025 18:24:12)",
    "वेस्टर्न कोल फील्ड्स लिमिटेड VS. मनोहर गोविंदा फुलजेले - सि.अ. सं 2608/2025 - डायरी संख्या 16870 / 2020 - 17-Feb-2025\n(अपलोड ऑन 17-02-2025 18:23:46)",
    "जगदीश चंद मेमोरियल ट्रस्ट VS. हिमाचल प्रदेश का राज्य - सि.अ. सं 2585/2025 - डायरी संख्या 11814 / 2018 - 17-Feb-2025\n(अपलोड ऑन 17-02-2025 18:23:20)",
    "पंजाब राज्य VS. त्रिशाला मिश्र धातु प्राइवेट लिमिटेड - सि.अ. सं 2212/2024 - डायरी संख्या 38525 / 2015 - 17-Feb-2025\n(अपलोड ऑन 17-02-2025 17:43:31)",
    "जतिंदर कुमार सपरा VS. अनुपमा साप्रा - वि. आव. 320/2025 - डायरी संख्या 30696 / 2024 - 17-Feb-2025\n(अपलोड ऑन 17-02-2025 17:07:02)",
    "तपस कुमार पालित VS. छत्तीसगढ़ राज्य - दा.अ. सं 738/2025 - डायरी संख्या 48412 / 2024 - 14-Feb-2025\n(अपलोड ऑन 15-02-2025 17:08:35)",
    "विनोद @नसमुल्ला VS. छत्तीसगढ़ राज्य - दा.अ. सं 1931/2019 - डायरी संख्या 15269 / 2018 - 14-Feb-2025\n(अपलोड ऑन 14-02-2025 18:39:18)",
    "सहकार महर्षि भाउसाहब थोराट सहकारी सखार करखाना लिमिटेड। VS. थिसेन क्रुप इंडस्ट्रीज इंडिया p.ltd - सि.अ. सं 3194/2014 - डायरी संख्या 9325 / 2012 - 14-Feb-2025\n(अपलोड ऑन 14-02-2025 17:49:15)",
    "महाराष्ट्र राज्य सड़क परिवहन निगम VS. महादेव कृष्ण नाइक - सि.अ. सं 13834/2024 - डायरी संख्या 20185 / 2019 - 14-Feb-2025\n(अपलोड ऑन 14-02-2025 16:57:02)",
    "पूजा फेरो मिश्र धातु p.ltd। VS. गोवा और ओआरएस की स्थिति। - सि.अ. सं 2027-2028/2012 - डायरी संख्या 1038 / 2012 - 14-Feb-2025\n(अपलोड ऑन 14-02-2025 16:56:32)",
    "मेसर्स एबीसीआई इन्फ्रास्ट्रक्चर प्राइवेट लिमिटेड VS. भारत संघ - सि.अ. सं 2546/2025 - डायरी संख्या 45506 / 2023 - 14-Feb-2025\n(अपलोड ऑन 14-02-2025 16:34:12)",
    "एम/एस बी एन पद्मनाभैया और बेटे VS. आर एन नाडिगर - सि.अ. सं 2550/2025 - डायरी संख्या 9642 / 2022 - 14-Feb-2025\n(अपलोड ऑन 14-02-2025 15:17:36)",
    "रमेश मिश्रीमल जैन VS. अविनाश विश्वनाथ पटने - सि.अ. सं 2549/2025 - डायरी संख्या 8427 / 2020 - 14-Feb-2025\n(अपलोड ऑन 14-02-2025 15:17:01)",
    "कमलकिशोर श्रीगोपाल टपारिया VS. इंडिया एनार जेन प्राइवेट लिमिटेड - दा.अ. सं 758-761/2025 - डायरी संख्या 8968 / 2020 - 13-Feb-2025\n(अपलोड ऑन 17-02-2025 10:33:34)",
    "पी. राममोहन राव VS. के. श्रीनिवास - वि.अनु.या. (सि.) सं 4036-4038/2024 - डायरी संख्या 4916 / 2024 - 13-Feb-2025\n(अपलोड ऑन 13-02-2025 18:27:53)",
    "सीएमजे फाउंडेशन VS. मेघालय राज्य - सि.अ. सं 9694/2024 - डायरी संख्या 11990 / 2021 - 13-Feb-2025\n(अपलोड ऑन 13-02-2025 18:17:52)",
    "भारत संघ VS. कन्हैय्या प्रसाद - दा.अ. सं 728/2025 - डायरी संख्या 22780 / 2024 - 13-Feb-2025\n(अपलोड ऑन 13-02-2025 17:53:34)",
    "विनोद कुमार VS. राज्य (दिल्ली केंद्र शासित प्रदेश की सरकार) - दा.अ. सं 2482/2014 - डायरी संख्या 36987 / 2013 - 13-Feb-2025\n(अपलोड ऑन 13-02-2025 17:30:49)",
    "के. कृष्णमूर्ति VS. आयकर के उपायुक्त - सि.अ. सं 2411/2025 - डायरी संख्या 42199 / 2022 - 13-Feb-2025\n(अपलोड ऑन 13-02-2025 17:07:32)",
    "एम/एस. टॉमरॉलैंड लिमिटेड VS. आवास और शहरी विकास निगम लिमिटेड - सि.अ. सं 2531/2025 - डायरी संख्या 34669 / 2016 - 13-Feb-2025\n(अपलोड ऑन 13-02-2025 13:57:23)",
    "एम/एस टेक्नो प्रिंट VS. छत्तीसगढ़ पाठ्यपुस्तक निगम - सि.अ. सं 2362/2025 - डायरी संख्या 18007 / 2023 - 12-Feb-2025\n(अपलोड ऑन 18-02-2025 09:26:53)",
    "धर्मवीर सिंह VS. श्री राजीव महर्षि - सि.अ. सं 2375/2025 - डायरी संख्या 35572 / 2018 - 12-Feb-2025\n(अपलोड ऑन 15-02-2025 16:35:02)",
    "सुमन मिश्रा VS. उत्तर प्रदेश की स्थिति - दा.अ. सं 731/2025 - डायरी संख्या 53643 / 2023 - 12-Feb-2025\n(अपलोड ऑन 12-02-2025 17:28:47)",
    "जय किशन VS. उत्तर प्रदेश की स्थिति - दा.अ. सं 727/2025 - डायरी संख्या 23042 / 2024 - 12-Feb-2025\n(अपलोड ऑन 12-02-2025 17:17:52)",
    "डॉ. अमरगौड़ा एल पाटिल VS. भारत संघ - सि.अ. सं 301-303/2025 - डायरी संख्या 37721 / 2024 - 12-Feb-2025\n(अपलोड ऑन 12-02-2025 17:15:18)"
  ],
  orders: [
    "विपुल यशवंतराव मोदी VS. राजन गुलाबराव वंजारी - वि.अनु.या. (सि.) सं 29510/2024 - डायरी संख्या 56144 / 2024 - 17-Feb-2025\n(अपलोड ऑन 18-02-2025 13:01:00)",
    "भारतीय समुद्री विश्वविद्यालय VS. g.kulanchiyappan - वि.अनु.या. (सि.) सं 4147-4154/2025 - डायरी संख्या 4594 / 2025 - 17-Feb-2025\n(अपलोड ऑन 18-02-2025 13:00:55)",
    "मुनिराजू @मुनि राजप्पा VS. के. शशीकुमार - - डायरी संख्या 53810 / 2024 - 17-Feb-2025\n(अपलोड ऑन 18-02-2025 13:00:50)",
    "अशोक पेपर मिल्स लिमिटेड का प्रबंधन। VS. बिहार की स्थिति - - डायरी संख्या 50941 / 2024 - 17-Feb-2025\n(अपलोड ऑन 18-02-2025 13:00:44)",
    "सेवा नंद VS. राजस्थान राज्य - - डायरी संख्या 5892 / 2025 - 14-Feb-2025\n(अपलोड ऑन 18-02-2025 11:16:48)"
  ],
  notices: [
    "दिनांक 18.02.2025 (मंगलवार) को कोर्ट संख्या 8 एवं 15 में परिवर्तन के संबंध में सूचना",
    "18.02.2025 को प्रसारित सूची में शामिल समीक्षा याचिकाओं को हटाने के संबंध में सूचना",
    "दिनांक 18.02.2025 को माननीय न्यायालय के समक्ष मौखिक उल्लेखित मामलों की सूची",
    "18.02.2025 को प्रसारित सूची में शामिल समीक्षा याचिकाओं को हटाने के संबंध में सूचना।",
    "मंगलवार (18.02.2025) को कोर्ट संख्या 5 एवं 15 में परिवर्तन संबंधी सूचना",
    "कोर्ट संख्या 8 को रद्द करने और एकल न्यायाधीश बेंच/चैंबर मामलों को 18.02.2025 (मंगलवार) को सूचीबद्ध करने के संबंध में नोटिस।"
  ]
}

export function UpdatesTabs() {
  const [activeTab, setActiveTab] = useState<keyof typeof TAB_CONTENT>('updates')

  const formatJudgmentContent = (content: string) => {
    const [mainText, uploadInfo] = content.split('\n')
    const dateMatch = mainText.match(/(\d{2}-Feb-2025)/)
    if (dateMatch) {
      const [before, after] = mainText.split(dateMatch[0])
      return (
        <span className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-[#993333] shrink-0" />
          {before}
          <span className="text-[#993333] font-medium">{dateMatch[0]}</span>
          {after}
        </span>
      )
    }
    return (
      <span className="flex items-center gap-2">
        <FileText className="w-4 h-4 text-[#993333] shrink-0" />
        {mainText}
      </span>
    )
  }

  const formatUpdateContent = (content: { text: string, url: string }) => (
    <a 
      href={content.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-[#993333] transition-colors"
    >
      <FileText className="w-4 h-4 text-[#993333] shrink-0" />
      <span>{content.text}</span>
    </a>
  )

  const formatNoticeContent = (content: string) => (
    <span className="flex items-center gap-2">
      <Circle className="w-2 h-2 fill-[#993333] stroke-[#993333] shrink-0" />
      <span>{content}</span>
    </span>
  )

  return (
    <div>
      {/* Mobile Tabs */}
      <div className="flex overflow-x-auto -mx-4 sm:mx-0 px-4 sm:hidden">
        <div className="flex gap-2 pb-4">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-md font-medium transition-colors flex items-center gap-2 text-sm ${
                activeTab === tab.id
                  ? 'bg-[#993333] text-white'
                  : 'border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Tabs */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 rounded-md font-medium transition-colors flex items-center justify-center gap-2 ${
              activeTab === tab.id
                ? 'bg-[#993333] text-white'
                : 'border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {tab.icon}
            <span className="text-sm">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-3 h-[300px] sm:h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-300 pr-2 sm:pr-4">
        {TAB_CONTENT[activeTab].map((content, i) => (
          <UpdateItem
            key={i}
            label={
              activeTab === 'updates' 
                ? "लिस्टिंग नोटिस" 
                : activeTab === 'orders'
                ? "आदेश"
                : activeTab === 'judgments'
                ? "निर्णय"
                : ""
            }
            content={
              activeTab === 'judgments' || activeTab === 'orders'
                ? formatJudgmentContent(content)
                : activeTab === 'updates'
                ? formatUpdateContent(content as { text: string, url: string })
                : activeTab === 'notices'
                ? formatNoticeContent(content)
                : `► ${typeof content === 'string' ? content : content.text}`
            }
            date={typeof content === 'string' 
              ? content.split('\n')[1]?.replace('(अपलोड ऑन ', '').replace(')', '') || ''
              : ''}
            hideBadge={activeTab === 'notices'}
            className="text-sm sm:text-base"
          />
        ))}
      </div>
    </div>
  )
}
