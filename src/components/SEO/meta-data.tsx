import { baseUrl, seoConfig } from '@/utils/seo.config'
import { Metadata } from 'next'

type MetadataProps = {
  locale: 'en' | 'ar'
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  path?: string
  noIndex?: boolean
}

export function generateMetadata({
  locale,
  title,
  description,
  keywords,
  ogImage,
  path = '',
  noIndex = false
}: MetadataProps): Metadata {
  const config = seoConfig[locale]
  const pageTitle = title ? `${title} | ${config.title}` : config.title
  const pageDescription = description || config.description
  const pageKeywords = keywords || config.keywords
  const pageOgImage = ogImage || config.ogImage
  const url = `${baseUrl}/${locale}${path}`

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    authors: [{ name: 'HUB71' }],
    creator: 'HUB71',
    publisher: 'HUB71',
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en${path}`,
        ar: `${baseUrl}/ar${path}`
      }
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: url,
      siteName: 'HUB71',
      images: [
        {
          url: pageOgImage,
          width: 1200,
          height: 630,
          alt: pageTitle
        }
      ],
      locale: locale === 'ar' ? 'ar_AE' : 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageOgImage],
      creator: config.twitterHandle
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code'
    }
  }
}
