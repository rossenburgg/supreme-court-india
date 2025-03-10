'use client'
import { createContext, useContext, ReactNode } from 'react'
import { useRouter, usePathname } from '@/navigation'
import { useLocale } from 'next-intl'

type LanguageContextType = {
  language: 'en' | 'hi'
  setLanguage: (lang: 'en' | 'hi') => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const setLanguage = (newLocale: 'en' | 'hi') => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <LanguageContext.Provider value={{ language: locale as 'en' | 'hi', setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
