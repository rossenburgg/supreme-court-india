
import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';

const locales = ['en', 'hi'];

export default getRequestConfig(async () => {
  const headersList = headers();
  const locale = headersList.get('x-next-intl-locale') || 'hi';

  if (!locales.includes(locale as any)) {
    return { locale: 'hi', messages: (await import('./src/messages/hi.json')).default };
  }

  return {
    messages: (await import(`./src/messages/${locale}.json`)).default,
    locale: locale
  };
});
