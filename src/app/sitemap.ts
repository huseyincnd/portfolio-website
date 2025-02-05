import { MetadataRoute } from 'next'
import { blogPosts } from "@/data/blog-posts"

// Blog post'larını getiren fonksiyon
async function getBlogPosts() {
  // Bu kısmı blog post'larınızın nasıl saklandığına göre güncellemeniz gerekebilir
  // Örnek olarak bir dizi dönüyoruz
  return [
    { slug: 'ilk-blog-yazisi', lastModified: new Date() },
    { slug: 'ikinci-blog-yazisi', lastModified: new Date() }
  ]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://cuneydiogluhuseyin.online'
  
  // Ana sayfalar için sitemap girişleri
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  // Blog post'ları için sitemap girişleri
  const blogPostEntries = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }))

  // Hizmet sayfaları için sitemap girişleri
  const servicePages = [
    'web-tasarim',
    'e-ticaret',
    'kurumsal-web-sitesi',
    'seo-hizmetleri',
    'web-yazilim',
    'mobil-uyumlu-tasarim'
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85
  }))

  return [...staticPages, ...blogPostEntries, ...servicePages]
} 