import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import Home from '@/features/home'
import { generateStaticParams } from './layout'

const HomePage = () => {
  generateStaticParams()
  return <Home />
}

export default HomePage

export async function generateMetadata({ params }: TLayoutProps) {
  const { locale } = await params
  const messages = (await import(`../../../messages/${locale}.json`)).default
  return {
    title: messages.pages.home.title
  }
}
