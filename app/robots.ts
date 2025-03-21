import { MetadataRoute } from 'next'

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/private/', '/api/'],
      },
    ],
    sitemap: 'https://oikosconsultants.com/sitemap.xml',
    host: 'https://oikosconsultants.com',
  }
} 