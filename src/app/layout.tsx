import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hüseyin Cuneydioğlu | Portfolio",
  description: "Web Developer & UI/UX Designer Portfolio - Hüseyin Cuneydioğlu'nun kişisel web sitesi",
  keywords: ["Web Developer", "Frontend Developer", "UI/UX Designer", "Portfolio", "Hüseyin Cuneydioğlu"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth dark">
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 min-h-screen`}>
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
      </body>
    </html>
  );
}
