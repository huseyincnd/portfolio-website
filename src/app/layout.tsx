import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://cuneydiogluhuseyin.online'),
  title: {
    default: 'Hüseyin Cüneydioğlu | Web Developer',
    template: '%s | Hüseyin Cüneydioğlu'
  },
  description: 'Web geliştirme ve UI/UX tasarımı konusunda tutkulu bir yazılım mühendisi. Modern ve kullanıcı dostu web uygulamaları geliştiriyorum.',
  keywords: ['web developer', 'frontend developer', 'react developer', 'nextjs', 'typescript', 'web tasarım'],
  authors: [{ name: 'Hüseyin Cüneydioğlu' }],
  creator: 'Hüseyin Cüneydioğlu',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://cuneydiogluhuseyin.online',
    title: 'Hüseyin Cüneydioğlu | Web Developer',
    description: 'Web geliştirme ve UI/UX tasarımı konusunda tutkulu bir yazılım mühendisi.',
    siteName: 'Hüseyin Cüneydioğlu'
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
    google: 'google-site-verification-code', // Google Search Console'dan alınacak
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hüseyin Cüneydioğlu",
              jobTitle: "Full Stack Web Developer",
              url: "https://cuneydiogluhuseyin.online",
              sameAs: [
                "https://github.com/huseyincnd",
                "https://linkedin.com/in/huseyincnd"
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "İstanbul",
                addressCountry: "TR"
              },
              description: "Web geliştirme ve UI/UX tasarımı konusunda uzmanlaşmış full stack developer."
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 min-h-screen`}>
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
      </body>
    </html>
  );
}
