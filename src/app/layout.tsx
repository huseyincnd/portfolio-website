import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { WhatsAppButton } from "@/components/whatsapp-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://cuneydiogluhuseyin.online'),
  title: {
    template: '%s | Profesyonel Web Tasarım ve Yazılım Hizmetleri',
    default: 'Web Tasarım ve Yazılım Hizmetleri 2025 | Hüseyin Cüneydioğlu',
  },
  description: 'Modern web tasarım ve yazılım hizmetleri. 5+ yıl tecrübe ve 50+ başarılı proje. Next.js, React ve modern teknolojilerle kurumsal web sitesi, e-ticaret ve özel yazılım çözümleri. SEO uyumlu ve mobil öncelikli tasarım.',
  keywords: [
    // Ana Hizmetler
    'web tasarım 2024',
    'web sitesi yapımı',
    'e-ticaret sitesi kurulumu',
    'kurumsal web tasarım',
    'özel yazılım geliştirme',
    
    // Teknoloji Stack
    'Next.js web tasarım',
    'React web geliştirme',
    'modern web teknolojileri',
    'mobil uyumlu tasarım',
    'SEO optimizasyonu',
    
    // Sektörel
    'kurumsal firma web sitesi',
    'e-ticaret çözümleri',
    'kişisel web sitesi',
    'blog sitesi tasarımı',
    'landing page tasarımı',
    
    // Lokasyon
    'hatay web tasarım',
    'antakya web tasarım',
    'iskenderun web tasarım',
    'mersin web tasarım',
    'adana web tasarım',
    'gaziantep web tasarım',
    'akdeniz bölgesi web tasarım',
    'kurumsal firma web sitesi',
    'kişisel web sitesi tasarımı',
    'doktor web sitesi tasarımı',
    'avukat web sitesi tasarımı',
    'restoran web sitesi tasarımı',
    'otel web sitesi tasarımı',
    'emlak web sitesi tasarımı',
    'inşaat firması web sitesi',
    'e-ticaret sitesi kurulumu',
    'online satış sitesi',
    'e-ticaret yazılımı',
    'sanal mağaza kurulumu',
    'b2b e-ticaret sitesi',
    'opencart e-ticaret',
    'woocommerce e-ticaret',
    'next.js web tasarım',
    'react web geliştirme',
    'typescript web yazılım',
    'tailwind css tasarım',
    'hızlı web sitesi yapımı',
    'ssl sertifikalı web sitesi',
    'güvenli e-ticaret sitesi',
    'web sitesi yenileme',
    'web sitesi bakım hizmeti',
    'web sitesi güncelleme',
    'web sitesi revize',
    'seo danışmanlığı',
    'dijital pazarlama hizmetleri',
    'ucuz web sitesi',
    'ekonomik web tasarım',
    'uygun fiyatlı e-ticaret sitesi',
    'hesaplı web sitesi',
    'web sitesi fiyat teklifi',
    'web tasarım kampanya',
    'mobil uyumlu tasarım',
    'responsive tasarım',
    'hızlı açılan web sitesi',
    'seo uyumlu tasarım',
    'modern web sitesi',
    'özel yazılım geliştirme',
    'web sitesi bakım hizmeti',
    'hosting hizmeti',
    'domain hizmeti',
    'ssl sertifikası',
    'web sitesi yedekleme',
    'teknik destek hizmeti',
    'blog sitesi tasarımı',
    'içerik yönetim sistemi',
    'wordpress blog sitesi',
    'kurumsal blog tasarımı',
    'web tasarım örnekleri',
    'web tasarım portföy',
    'web tasarım referanslar',
    'başarılı web siteleri',
    // Özellikler
    'hızlı web sitesi',
    'güvenli e-ticaret',
    '7/24 teknik destek',
    'ücretsiz SSL sertifikası',
    'ücretsiz domain hosting'
  ],
  authors: [{ 
    name: 'Hüseyin Cüneydioğlu',
    url: 'https://cuneydiogluhuseyin.online'
  }],
  creator: 'Hüseyin Cüneydioğlu',
  publisher: 'Hüseyin Cüneydioğlu',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://cuneydiogluhuseyin.online',
    languages: {
      'tr-TR': 'https://cuneydiogluhuseyin.online',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://cuneydiogluhuseyin.online',
    title: 'Modern Web Tasarım ve Yazılım Hizmetleri 2024 | Hüseyin Cüneydioğlu',
    description: '5+ yıl tecrübe ve 50+ başarılı proje. Next.js ve React ile modern web çözümleri. E-ticaret, kurumsal web sitesi ve özel yazılım projeleri.',
    siteName: 'Hüseyin Cüneydioğlu - Web Tasarım',
    images: [
      {
        url: 'https://cuneydiogluhuseyin.online/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Modern Web Tasarım ve Yazılım Hizmetleri',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Tasarım ve Yazılım Hizmetleri 2024 | Hüseyin Cüneydioğlu',
    description: '5+ yıl tecrübe ve 50+ başarılı proje. Modern web teknolojileri ile profesyonel çözümler.',
    images: ['https://cuneydiogluhuseyin.online/og-image.jpg'],
    creator: '@huseyincnd',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification=kVyrVt4NxxKzB1eBtmmzVqcXK0dMfBHPabvh1glf88w',
    yandex: 'yandex-verification-code',
  },
  category: 'technology',
  classification: 'Web Design & Development',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96' },
      { url: '/web-app-manifest-192x192.png', sizes: '192x192' },
      { url: '/web-app-manifest-512x512.png', sizes: '512x512' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest'
      }
    ]
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth dark">
      <head>
        {/* Google Analytics 4 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-43H2T33JTB`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-43H2T33JTB', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Hüseyin Cüneydioğlu - Web Tasarım",
              "image": "https://cuneydiogluhuseyin.online/logo.png",
              "description": "Modern web tasarım, kurumsal website yapımı ve e-ticaret çözümleri. Uygun fiyatlı, profesyonel ve SEO uyumlu web sitesi yapımı. 5 yıllık tecrübe ve 50+ başarılı proje ile hizmetinizdeyiz.",
              "@id": "https://cuneydiogluhuseyin.online",
              "url": "https://cuneydiogluhuseyin.online",
              "telephone": "+905306720570",
              "email": "cuneydiogluhuseyin1@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hatay",
                "addressRegion": "Hatay",
                "addressCountry": "TR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 36.2023,
                "longitude": 36.1613
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Hatay"
                },
                {
                  "@type": "City",
                  "name": "İstanbul"
                },
                {
                  "@type": "City",
                  "name": "Ankara"
                },
                {
                  "@type": "City",
                  "name": "İzmir"
                },
                {
                  "@type": "City",
                  "name": "Adana"
                },
                {
                  "@type": "City",
                  "name": "Mersin"
                },
                {
                  "@type": "City",
                  "name": "Gaziantep"
                }
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "priceRange": "₺₺",
              "sameAs": [
                "https://github.com/huseyincnd",
                "https://linkedin.com/in/huseyincnd"
              ],
              "knowsAbout": [
                "Web Tasarım",
                "Web Geliştirme",
                "E-ticaret Sistemleri",
                "SEO Optimizasyonu",
                "Responsive Tasarım",
                "UI/UX Tasarım",
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS"
              ],
              "keywords": "web tasarım, web sitesi yapımı, kurumsal web tasarım, e-ticaret sitesi, SEO uyumlu web tasarım, mobil uyumlu web sitesi, profesyonel web tasarım, uygun fiyatlı web sitesi",
              "slogan": "Modern ve Profesyonel Web Çözümleri",
              "foundingDate": "2019",
              "award": "50+ Başarılı Proje",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Tasarım Hizmetleri",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Başlangıç Paketi",
                      "description": "Kişisel ve küçük işletmeler için web sitesi",
                      "price": "4500",
                      "priceCurrency": "TRY",
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.8",
                        "ratingCount": "15",
                        "bestRating": "5",
                        "worstRating": "1"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Profesyonel Paket",
                      "description": "Orta ölçekli işletmeler için web çözümleri",
                      "price": "7500",
                      "priceCurrency": "TRY",
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "ratingCount": "22",
                        "bestRating": "5",
                        "worstRating": "1"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Kurumsal Paket",
                      "description": "Büyük işletmeler için kapsamlı web çözümleri",
                      "price": "12500",
                      "priceCurrency": "TRY",
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "5.0",
                        "ratingCount": "13",
                        "bestRating": "5",
                        "worstRating": "1"
                      }
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 min-h-screen`}>
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
