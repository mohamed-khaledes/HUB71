import { Amiri, Chivo } from 'next/font/google'
import type { Metadata } from 'next'
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
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#0066FF' />
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
