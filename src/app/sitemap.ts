import { baseUrl } from '@/utils/seo.config'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/sessions', '/about', '/contact']
  const locales = ['en', 'ar']

  const urls: MetadataRoute.Sitemap = []

  locales.forEach(locale => {
    routes.forEach(route => {
      urls.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            ar: `${baseUrl}/ar${route}`
          }
        }
      })
    })
  })

  return urls
}
