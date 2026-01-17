import { baseUrl } from '@/utils/seo.config'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/']
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  }
}
