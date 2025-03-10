import { useLocale } from 'next-intl'

export function useLanguageUtils() {
  const locale = useLocale()
  
  return {
    language: locale,
    isHindi: locale === 'hi',
    isEnglish: locale === 'en'
  }
}
