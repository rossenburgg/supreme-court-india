export const MENU_TRANSLATIONS = {
  'मुख्य पृष्ठ': {
    en: 'Home'
  },
  'हमारे बारे में': {
    en: 'About Us',
    items: {
      'History': { hi: 'इतिहास', en: 'History' },
      'Constitution': { hi: 'संविधान', en: 'Constitution' },
      'Jurisdiction': { hi: 'अधिकार क्षेत्र', en: 'Jurisdiction' },
      'Calendar': { hi: 'कैलेंडर', en: 'Calendar' },
      'Organization Chart': { hi: 'संगठन चार्ट', en: 'Organization Chart' },
      'Registry Officers': { hi: 'रजिस्ट्री अधिकारी', en: 'Registry Officers' },
      'Contact Us': { hi: 'संपर्क करें', en: 'Contact Us' }
    }
  },
  'न्यायाधीश': {
    en: 'Judges',
    items: {
      'Current Chief Justice': { hi: 'वर्तमान मुख्य न्यायाधीश', en: 'Current Chief Justice' },
      'Current Judges': { hi: 'वर्तमान न्यायाधीश', en: 'Current Judges' },
      'Former Chief Justices': { hi: 'पूर्व मुख्य न्यायाधीश', en: 'Former Chief Justices' },
      'Former Judges': { hi: 'पूर्व न्यायाधीश', en: 'Former Judges' }
    }
  },
  'कॉलेजियम के निर्णय': {
    en: 'Collegium Resolutions',
    items: {
      'Recent Resolutions': { hi: 'हाल के प्रस्ताव', en: 'Recent Resolutions' },
      'Archive': { hi: 'पुरालेख', en: 'Archive' }
    }
  },
  'सेवाएं': {
    en: 'Services',
    items: {
      'Publications': { hi: 'प्रकाशन', en: 'Publications' },
      'Photo Gallery': { hi: 'फोटो गैलरी', en: 'Photo Gallery' },
      'Video Gallery': { hi: 'वीडियो गैलरी', en: 'Video Gallery' },
      'Downloads': { hi: 'डाउनलोड', en: 'Downloads' }
    }
  },
  'ई-सेवाएं': {
    en: 'e-Services',
    items: {
      'e-Filing': { hi: 'ई-फाइलिंग', en: 'e-Filing' },
      'e-Payment': { hi: 'ई-पेमेंट', en: 'e-Payment' },
      'Virtual Court': { hi: 'वर्चुअल कोर्ट', en: 'Virtual Court' },
      'Causelist': { hi: 'कॉजलिस्ट', en: 'Causelist' }
    }
  },
  'अधिवक्तागण': {
    en: 'Advocates',
    items: {
      'AOR Rules': { hi: 'एओआर नियम', en: 'AOR Rules' },
      'Bar Association': { hi: 'बार एसोसिएशन', en: 'Bar Association' },
      'Practice Rules': { hi: 'प्रैक्टिस नियम', en: 'Practice Rules' }
    }
  },
  'कोर्ट फाइलिंग': {
    en: 'Court Filings',
    items: {
      'Filing Counter': { hi: 'फाइलिंग काउंटर', en: 'Filing Counter' },
      'Filing Rules': { hi: 'फाइलिंग नियम', en: 'Filing Rules' },
      'Fee Calculator': { hi: 'फीस कैलकुलेटर', en: 'Fee Calculator' }
    }
  },
  'सूचनाएं': {
    en: 'Notices',
    items: {
      'Court Notices': { hi: 'कोर्ट नोटिस', en: 'Court Notices' },
      'Press Releases': { hi: 'प्रेस विज्ञप्ति', en: 'Press Releases' },
      'Tenders': { hi: 'निविदाएं', en: 'Tenders' }
    }
  },
  'समाचार एवं घटनाएं': {
    en: 'News & Events',
    items: {
      'Latest News': { hi: 'ताज़ा खबर', en: 'Latest News' },
      'Events': { hi: 'कार्यक्रम', en: 'Events' },
      'Announcements': { hi: 'घोषणाएं', en: 'Announcements' }
    }
  }
} as const

export type Language = 'hi' | 'en'
