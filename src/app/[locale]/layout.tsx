import type { Metadata } from 'next'
import {
  Amiri,
  Cairo,
  Chivo,
  Geist,
  Geist_Mono,
  Host_Grotesk,
  JetBrains_Mono,
  Montserrat,
  Outfit,
  Poppins,
  Roboto,
  Ubuntu
} from 'next/font/google'
import '../globals.css'
import { locales } from '@/i18n/i18n'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { Suspense } from 'react'
import { LoadingPage } from '@/components/ui/loading'
import { QueryProvider } from '@/providers/query-provider'
import Header from '@/components/layouts/header'
import Footer from '@/components/layouts/footer'
import ScrollToTopBtn from '@/components/shared/scroll-to-top'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})
const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin-ext']
})
const outfit = Outfit({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin-ext']
})
const montserrat = Montserrat({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin-ext']
})

const grotesk = Host_Grotesk({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin-ext']
})
const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin-ext']
})
const jetBrains_mono = JetBrains_Mono({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin-ext']
})

const chivo = Chivo({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin-ext']
})
const amiri = Amiri({
  weight: ['400', '700'],
  subsets: ['arabic']
})
export const metadata: Metadata = {
  title: 'HUB71',
  description: 'Traingle Assignment'
}
export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}
export default async function RootLayout({ children, params }: TLayoutProps) {
  const { locale } = await params
  if (!locales.includes(locale as any)) notFound()
  const messages = (await import(`../../../messages/${locale}.json`))?.default
  return (
    <html lang={locale} dir={locale == 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const theme = localStorage.getItem('theme');
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              }
            `
          }}
        />
      </head>
      <body className={(locale == 'ar' ? amiri.className : chivo.className) + ' overflow-x-clip'}>
        <Suspense fallback={<LoadingPage />}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <QueryProvider>
              <Header />
              <div className='min-h-screen bg-background'>{children}</div>
              <Footer />
              <ScrollToTopBtn />
            </QueryProvider>
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
  )
}
