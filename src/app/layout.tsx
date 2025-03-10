import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/ui/header'
import { Footer } from '@/components/ui/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <div className="min-h-screen flex flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}

export const metadata = {
  title: 'भारत का सर्वोच्च न्यायालय | Supreme Court of India',
  description: 'यतो धर्मस्ततो जय: | Where there is Dharma, there is Victory',
}