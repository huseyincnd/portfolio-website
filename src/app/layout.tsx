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
    default: 'Web Tasarım ve Yazılım Hizmetleri | Hüseyin Cüneydioğlu',
  },
  description: 'Modern web tasarım, kurumsal website yapımı ve e-ticaret çözümleri. Uygun fiyatlı, profesyonel ve SEO uyumlu web sitesi yapımı. Anahtar teslim web tasarım hizmetleri.',
  keywords: [
    'web tasarım',
    'website yapımı',
    'web sitesi fiyatları',
    'kurumsal web tasarım',
    'e-ticaret sitesi',
    'anahtar teslim web sitesi',
    'profesyonel web tasarım',
    'uygun fiyatlı web sitesi',
    'seo uyumlu web tasarım',
    'mobil uyumlu web sitesi',
    'wordpress web tasarım',
    'özel web yazılım',
    'web tasarım fiyatları',
    'web sitesi yaptırmak',
    'web tasarım şirketi',
    'web tasarım ajansı',
    'freelance web tasarım',
    'web sitesi tasarımı',
    'responsive web tasarım',
    'modern web tasarım',
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
    'başarılı web siteleri'
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
    title: 'Web Tasarım ve Yazılım Hizmetleri | Hüseyin Cüneydioğlu',
    description: 'Modern web tasarım, kurumsal website yapımı ve e-ticaret çözümleri. Uygun fiyatlı, profesyonel ve SEO uyumlu web sitesi yapımı.',
    siteName: 'Hüseyin Cüneydioğlu - Web Tasarım',
    images: [
      {
        url: 'https://cuneydiogluhuseyin.online/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Tasarım ve Yazılım Hizmetleri',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Tasarım ve Yazılım Hizmetleri | Hüseyin Cüneydioğlu',
    description: 'Modern web tasarım, kurumsal website yapımı ve e-ticaret çözümleri. Uygun fiyatlı, profesyonel ve SEO uyumlu web sitesi yapımı.',
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
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#00aaff'
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
              "description": "Modern web tasarım, kurumsal website yapımı ve e-ticaret çözümleri. Uygun fiyatlı, profesyonel ve SEO uyumlu web sitesi yapımı.",
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
              "priceRange": "₺₺",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://github.com/huseyincnd",
                "https://linkedin.com/in/huseyincnd"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "ratingCount": "50",
                "bestRating": "5",
                "worstRating": "1"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Tasarım Hizmetleri",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Kurumsal Web Sitesi",
                      "description": "Profesyonel ve modern kurumsal web sitesi tasarımı",
                      "price": "4500",
                      "priceCurrency": "TRY"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E-Ticaret Sitesi",
                      "description": "Özel e-ticaret web sitesi tasarımı ve geliştirme",
                      "price": "7500",
                      "priceCurrency": "TRY"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Kurumsal Paket",
                      "description": "Tam kapsamlı kurumsal web çözümleri",
                      "price": "12500",
                      "priceCurrency": "TRY"
                    }
                  }
                ]
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Hatay"
                },
                {
                  "@type": "City",
                  "name": "Almanya"
                },
                {
                  "@type": "City",
                  "name": "Bursa"
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
                  "name": "Antalya"
                },
                {
                  "@type": "City",
                  "name": "Kahramanmaraş"
                },
                {
                  "@type": "City",
                  "name": "Osmaniye"
                },
                {
                  "@type": "City",
                  "name": "Şanlıurfa"
                },
                {
                  "@type": "City",
                  "name": "Diyarbakır"
                },
                {
                  "@type": "City",
                  "name": "Malatya"
                }
              ],
              "knowsAbout": [
                "Web Tasarım",
                "Web Geliştirme",
                "E-ticaret Sistemleri",
                "SEO Optimizasyonu",
                "Responsive Tasarım",
                "UI/UX Tasarım"
              ]
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
