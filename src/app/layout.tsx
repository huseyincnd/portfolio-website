import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Footer } from "@/components/layout/footer";
import { schemas } from './schemas';



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://cuneydiogluhuseyin.online'),
  title: {
    template: '%s | En İyi Web Tasarım ve Yazılım Hizmetleri',
    default: '2025 Web Tasarım ve Yazılım Hizmetleri | #1 Web Tasarım Şirketi',
  },
  description: 'Modern web tasarım ve yazılım hizmetleri. 5+ yıl tecrübe, 50+ başarılı proje ve %100 müşteri memnuniyeti. Next.js, React ve modern teknolojilerle kurumsal web sitesi, e-ticaret ve özel yazılım çözümleri. SEO uyumlu, mobil öncelikli ve yüksek performanslı web siteleri.',
  keywords: [
    // Ana Hizmetler
    'en iyi web tasarım şirketi',
    'profesyonel web tasarım ajansı',
    'web tasarım fiyatları 2025',
    'kurumsal web sitesi yapan firmalar',
    'e-ticaret sitesi kurulum fiyatları',
    'web tasarım danışmanlığı',
    'seo danışmanlık hizmetleri',
    'web site bakım hizmetleri',
    'web tasarım hatay',
    'hatay web tasarım şirketleri',
    'web tasarım 2025',
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
    title: 'Modern Web Tasarım ve Yazılım Hizmetleri 2025 | Hüseyin Cüneydioğlu',
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
    title: 'Web Tasarım ve Yazılım Hizmetleri 2025 | Hüseyin Cüneydioğlu',
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
          __html: JSON.stringify(schemas)
          }}
        />
        </head>
        <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 min-h-screen flex flex-col`}>
          <Navbar />
          <div className="flex-grow w-full">
          <main className="w-full mt-16">{children}</main>
          </div>
          <Footer />
          <WhatsAppButton />
        </body>
    </html>
  );
}

