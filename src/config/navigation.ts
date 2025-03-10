export const menuItems = {
  home: {
    hi: 'मुख्य पृष्ठ',
    en: 'Home',
    href: '/'
  },
  about: {
    hi: 'हमारे बारे में',
    en: 'About Us',
    href: '/about',
    items: {
      history: {
        hi: 'इतिहास',
        en: 'History',
        href: '/about/history'
      }
    }
  }
} as const;
