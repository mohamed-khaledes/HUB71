import { baseUrl } from '@/utils/seo.config'

type StructuredDataProps = {
  locale: 'en' | 'ar'
  type?: 'Organization' | 'Event' | 'WebPage'
  data?: any
}

export function StructuredData({ locale, type = 'Organization', data }: StructuredDataProps) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HUB71',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      locale === 'en'
        ? "Abu Dhabi's leading tech ecosystem supporting startups"
        : 'النظام التقني الرائد في أبوظبي الذي يدعم الشركات الناشئة',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+971-xxx-xxxx',
      contactType: 'Customer Service',
      areaServed: 'AE',
      availableLanguage: ['English', 'Arabic']
    },
    sameAs: [
      'https://www.facebook.com/HUB71',
      'https://twitter.com/HUB71',
      'https://www.linkedin.com/company/hub71',
      'https://www.instagram.com/hub71'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Al Khatem Tower',
      addressLocality: 'Abu Dhabi',
      addressCountry: 'AE'
    }
  }

  const eventSchema = data
    ? {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: data.name,
        startDate: data.startDate,
        endDate: data.endDate,
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: {
          '@type': 'Place',
          name: 'HUB71',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Al Khatem Tower',
            addressLocality: 'Abu Dhabi',
            addressCountry: 'AE'
          }
        },
        description: data.description,
        organizer: {
          '@type': 'Organization',
          name: 'HUB71',
          url: baseUrl
        }
      }
    : null

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: data?.title || 'HUB71',
    description: data?.description,
    url: data?.url || baseUrl,
    inLanguage: locale === 'ar' ? 'ar' : 'en'
  }

  let schema: any = organizationSchema
  if (type === 'Event' && eventSchema) {
    schema = eventSchema
  } else if (type === 'WebPage') {
    schema = webPageSchema
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
