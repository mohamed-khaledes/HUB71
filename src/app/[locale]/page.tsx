import Home from '@/features/home'
import { generateStaticParams } from './layout'
import { generateMetadata as generateSEOMetadata } from '@/components/SEO/meta-data'

const HomePage = () => {
  generateStaticParams()
  return <Home />
}

export default HomePage

export async function generateMetadata({ params }: TLayoutProps) {
  const { locale } = await params
  const messages = (await import(`../../../messages/${locale}.json`)).default
  return generateSEOMetadata({
    locale: locale,
    title: messages.pages.home.title,
    description: messages.pages.home.description,
    path: '/'
  })
}
