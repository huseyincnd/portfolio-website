import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Tasarım Paketleri ve Fiyatları 2025 | En Uygun Web Sitesi Fiyatları",
  description: "2025 güncel web tasarım fiyatları ve paketleri. 4.500₺'den başlayan fiyatlarla profesyonel web sitesi. E-ticaret, kurumsal web sitesi ve özel tasarım paketleri. Domain, SSL ve hosting hediye!",
  keywords: [
    "web tasarım fiyatları 2025",
    "web sitesi fiyatları",
    "e-ticaret paketi fiyatları",
    "kurumsal web sitesi paketleri",
    "uygun fiyatlı web tasarım",
    "web sitesi yaptırma fiyatları",
    "profesyonel web tasarım",
    "e-ticaret sitesi kurulum",
    "web tasarım kampanya",
    "web sitesi teklif",
    "domain hosting paketi",
    "ssl sertifikası dahil",
    "mobil uyumlu tasarım",
    "seo optimizasyonu",
    "7/24 teknik destek",
    "ücretsiz domain",
    "ücretsiz hosting",
    "ücretsiz ssl",
    "taksitli web tasarım",
    "hatay web tasarım fiyatları",
    "en ucuz web sitesi",
    "kaliteli web tasarım",
    "ekonomik web sitesi",
    "web sitesi maliyeti"
  ],
  alternates: {
    canonical: "https://cuneydiogluhuseyin.online/packages"
  },
  openGraph: {
    title: "Web Tasarım Paketleri ve Fiyatları 2025 | Profesyonel Web Sitesi",
    description: "2025 güncel web tasarım fiyatları. Başlangıç paketi 4.500₺'den başlayan fiyatlarla. Domain, hosting ve SSL hediye! Hemen teklif alın.",
    url: "https://cuneydiogluhuseyin.online/packages",
    type: "website",
    images: [
      {
        url: "https://cuneydiogluhuseyin.online/packages-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Tasarım Paketleri 2025"
      }
    ]
  }
};

// Add Product Schema for packages
export const packagesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Product",
      "name": "Başlangıç Web Tasarım Paketi",
      "description": "Kişisel ve küçük işletmeler için web sitesi paketi. Modern tasarım, mobil uyumlu yapı, 5 sayfa içerik.",
      "offers": {
        "@type": "Offer",
        "price": "4500",
        "priceCurrency": "TRY",
        "availability": "https://schema.org/InStock"
      },
      "brand": {
        "@type": "Brand",
        "name": "Hüseyin Cüneydioğlu Web Tasarım"
      }
    },
    {
      "@type": "Product",
      "name": "Profesyonel Web Tasarım Paketi",
      "description": "Kurumsal firmalar için profesyonel web sitesi paketi. Modern tasarım, blog sistemi, detaylı SEO.",
      "offers": {
        "@type": "Offer",
        "price": "7500",
        "priceCurrency": "TRY",
        "availability": "https://schema.org/InStock"
      },
      "brand": {
        "@type": "Brand",
        "name": "Hüseyin Cüneydioğlu Web Tasarım"
      }
    },
    {
      "@type": "Product",
      "name": "E-ticaret Web Tasarım Paketi",
      "description": "Kapsamlı e-ticaret sitesi paketi. Sınırsız ürün, ödeme sistemi entegrasyonu, gelişmiş SEO.",
      "offers": {
        "@type": "Offer",
        "price": "12500",
        "priceCurrency": "TRY",
        "availability": "https://schema.org/InStock"
      },
      "brand": {
        "@type": "Brand",
        "name": "Hüseyin Cüneydioğlu Web Tasarım"
      }
    }
  ]
};