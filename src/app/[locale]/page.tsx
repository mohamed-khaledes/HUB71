import Home from '@/features/home'
import { generateStaticParams } from './layout'
import { generateMetadata as generateSEOMetadata } from '@/components/SEO/meta-data'
import { StructuredData } from '@/components/SEO/structured-data'

const HomePage = async ({ params }: TLayoutProps) => {
  generateStaticParams()
  const { locale } = await params
  return (
    <>
      <StructuredData locale={locale as 'en' | 'ar'} type='Organization' />
      <Home />
    </>
  )
}

export default HomePage

export async function generateMetadata({ params }: TLayoutProps) {
  const { locale } = await params
  const messages = (await import(`../../../messages/${locale}.json`)).default
  return generateSEOMetadata({
    locale: locale as 'en' | 'ar',
    title: messages.pages.home.title,
    description: messages.pages.home.description,
    path: '/'
  })
}
