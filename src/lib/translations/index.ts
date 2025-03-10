export const MENU_TRANSLATIONS = {
  'मुख्य पृष्ठ': {
    en: 'Home',
  },
  'परिचय': {
    en: 'About Us',
    items: {
      'history': {  // Make sure this key is lowercase
        en: 'History',
        hi: 'इतिहास',
        href: '/about/history'  // Add explicit href
      },
      // ...other about us items
    }
  },
  // ...other menu items
} as const
