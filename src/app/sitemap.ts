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
  
  // Blog post'ları için sitemap girişleri
  const blogPostEntries = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(), // Eğer post'larda lastModified veya date bilgisi varsa onu kullanabilirsiniz
    changeFrequency: 'never' as const,
    priority: 0.7
  }))
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // Blog post'larını ekle
    ...blogPostEntries
  ]
} 