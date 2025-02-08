import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',
          '/api/',
          '*/admin/*',
          '*/dashboard/*'
        ]
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1
      },
      {
        userAgent: 'Googlebot-Image',
        allow: [
          '/*.jpg$',
          '/*.jpeg$',
          '/*.gif$',
          '/*.png$',
          '/*.webp$'
        ]
      }
    ],
    sitemap: 'https://cuneydiogluhuseyin.online/sitemap.xml',
    host: 'https://cuneydiogluhuseyin.online'
  }
}