import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hüseyin Cüneydioğlu | Full Stack Web Developer",
  description: "Web geliştirme ve UI/UX tasarımı konusunda uzmanlaşmış bir yazılım mühendisi. Modern teknolojiler kullanarak kullanıcı dostu web uygulamaları geliştiriyorum.",
  keywords: ["Full Stack Developer", "Web Geliştirici", "Frontend Developer", "React Uzmanı", "Next.js Developer", "UI/UX Tasarımcı", "İstanbul"],
  alternates: {
    canonical: "https://cuneydiogluhuseyin.online",
  },
  openGraph: {
    title: "Hüseyin Cüneydioğlu | Full Stack Web Developer",
    description: "Web geliştirme ve UI/UX tasarımı konusunda uzmanlaşmış bir yazılım mühendisi.",
    url: "https://cuneydiogluhuseyin.online",
    siteName: "Hüseyin Cüneydioğlu",
    locale: "tr_TR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hüseyin Cüneydioğlu | Full Stack Web Developer",
    description: "Web geliştirme ve UI/UX tasarımı konusunda uzmanlaşmış bir yazılım mühendisi."
  },
};

export default function Home() {
  const techStack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "UI/UX Design"];

  return (
    <div className="hero-section">
      <div className="neon-grid" />
      <div className="neon-circle circle-1" />
      <div className="neon-circle circle-2" />
      <div className="neon-circle circle-3" />
      
      <div className="content-area">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="glass-card max-w-4xl w-full mx-auto text-center space-y-10">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-[#00fff2]/20">
              <span className="w-2 h-2 rounded-full bg-[#00fff2] animate-pulse" />
              <span className="text-sm font-medium text-[#00fff2]">
                <span className="mr-2">⚡</span>
                Online & Ready
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="neon-title glitch" data-text="Merhaba, Ben Hüseyin">
                Merhaba, Ben{" "}
                <span className="relative inline-block">
                  Hüseyin
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00fff2]/20 via-[#b400ff]/20 to-[#ff00c8]/20 blur-2xl -z-10" />
                </span>
              </h1>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#00fff2] to-transparent opacity-50" />
            </div>

            {/* Description */}
            <div className="relative">
              <p className="description-text max-w-2xl mx-auto">
                Web geliştirme ve UI/UX tasarımı konusunda tutkulu bir yazılım
                mühendisi olarak, modern ve kullanıcı dostu web uygulamaları
                geliştiriyorum. Her projede en iyi kullanıcı deneyimini sunmayı
                hedefliyorum.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="relative">
              <div className="flex flex-wrap justify-center gap-4 py-6">
                {techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="tech-tag group transition-all duration-300 hover:scale-110"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
              <Link href="/projects" className="neon-button group relative">
                <span className="relative z-10 flex items-center gap-2">
                  <span>Projelerimi Gör</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              <Link href="/contact" className="neon-button neon-button-alt group relative">
                <span className="relative z-10 flex items-center gap-2">
                  <span>İletişime Geç</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
