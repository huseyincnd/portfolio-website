import { Github, Linkedin, Mail, ExternalLink, Code2, Rocket, Wrench, Brain, Briefcase, Star, Download, Trophy, Users, CheckCircle2, Target, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";

const skills = {
  languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Python"],
  frameworks: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express.js"],
  tools: ["Git", "VS Code", "Figma", "Docker", "AWS"],
  learning: ["MongoDB", "GraphQL", "React Native", "Web3"]
};

const experiences = [
  {
    title: "Stajyer Web Geliştirici",
    company: "Global Aviation Services GmbH",
    location: "Almanya",
    duration: "4 Ay",
    type: "Staj",
    description: [
      "Modern web teknolojileri ile full-stack geliştirme",
      "Uluslararası ekip deneyimi",
      "Agile/Scrum metodolojileri",
      "Code review ve pair programming pratikleri"
    ]
  }
];

const achievements = [
  {
    icon: Trophy,
    title: "50+ Başarılı Proje",
    description: "Farklı sektörlerde tamamlanmış projeler"
  },
  {
    icon: Users,
    title: "100% Müşteri Memnuniyeti",
    description: "Müşteri odaklı yaklaşım ve kaliteli hizmet"
  },
  {
    icon: Target,
    title: "Sürekli Gelişim",
    description: "Güncel teknolojiler ve best practice'ler"
  }
];

const projects = [
  {
    title: "Diş Kliniği Web Sitesi",
    description: "Modern tasarım ve randevu sistemi",
    link: "https://site-theta-navy.vercel.app",
    tech: ["Next.js", "React", "Tailwind CSS"]
  },
  {
    title: "Lojistik Firma Web Sitesi",
    description: "Çok dilli kurumsal web sitesi",
    link: "https://sealive-logistics-web.vercel.app",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Hukuk Bürosu Web Sitesi",
    description: "Profesyonel ve modern tasarım",
    link: "https://law-firm-website-iota.vercel.app",
    tech: ["Next.js", "React", "Tailwind CSS"]
  }
];

export const metadata: Metadata = {
  title: "Hakkımda | Full Stack Web Geliştirici Hüseyin Cüneydioğlu",
  description: "5+ yıllık web geliştirme deneyimi, 50+ başarılı proje ve modern teknoloji stack'i. Next.js, React, TypeScript ve UI/UX tasarımı konularında uzman Full Stack Developer.",
  keywords: [
    "Full Stack Developer",
    "web geliştirici",
    "freelance yazılımcı",
    "Next.js uzmanı",
    "React geliştirici",
    "TypeScript uzmanı",
    "UI/UX tasarımcı",
    "web tasarım portfolyo",
    "yazılım danışmanı",
    "teknoloji stack",
    "modern web teknolojileri",
    "yazılım projeleri",
    "başarılı web projeleri",
    "web geliştirme deneyimi",
    "profesyonel web geliştirici"
  ],
  alternates: {
    canonical: "https://cuneydiogluhuseyin.online/about"
  },
  openGraph: {
    title: "Full Stack Web Geliştirici Hüseyin Cüneydioğlu",
    description: "5+ yıllık web geliştirme deneyimi ve modern teknoloji stack'i ile profesyonel web çözümleri.",
    url: "https://cuneydiogluhuseyin.online/about",
    type: "profile",
    images: [
      {
        url: "https://cuneydiogluhuseyin.online/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hüseyin Cüneydioğlu - Full Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Stack Web Geliştirici Hüseyin Cüneydioğlu",
    description: "5+ yıllık web geliştirme deneyimi ve modern teknoloji stack'i.",
    images: ["https://cuneydiogluhuseyin.online/about-og-image.jpg"]
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#030014] overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center pt-20 md:pt-0 mb-4">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#000066,transparent)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_-100px,#000066,transparent)] pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content - Text */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                  <Code2 className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">Full Stack Developer</span>
                </div>

                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                      Hüseyin Cüneydioğlu
                    </span>
                  </h1>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    Modern web teknolojileri ve kullanıcı deneyimi odaklı çözümler üreten tutkulu bir 
                    <span className="text-blue-400"> Full Stack Developer</span>. Her projede en iyi pratikleri ve güncel teknolojileri kullanarak müşterilerimin dijital başarısına katkıda bulunuyorum.
                  </p>
                </div>

                <div className="flex flex-wrap gap-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 group"
                  >
                    <span>İletişime Geç</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <div className="flex flex-wrap md:flex-nowrap items-center gap-4">
                    <a
                      href="https://github.com/huseyincnd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all group border border-white/10 hover:border-blue-500/50 w-full md:w-auto"
                    >
                      <Github className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                      <span className="text-gray-400 group-hover:text-blue-400 whitespace-nowrap">GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/hüseyin-cuneydioğlu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all group border border-white/10 hover:border-blue-500/50 w-full md:w-auto"
                    >
                      <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                      <span className="text-gray-400 group-hover:text-blue-400 whitespace-nowrap">LinkedIn</span>
                    </a>
                    <a
                      href="mailto:cuneydiogluhuseyin1@gmail.com"
                      className="inline-flex items-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all group border border-white/10 hover:border-blue-500/50 w-full md:w-auto"
                    >
                      <Mail className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                      <span className="text-gray-400 group-hover:text-blue-400 whitespace-nowrap">E-posta</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Content - Image */}
              <div className="relative order-first lg:order-last">
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse blur-2xl opacity-30" />
                  <div className="absolute inset-0 rounded-full border-2 border-blue-500/20" />
                  <Image
                    src="/profile.jpg"
                    alt="Hüseyin Cüneydioğlu"
                    width={256}
                    height={256}
                    className="rounded-full border-4 border-white/10 relative z-10"
                  />
                  <div className="absolute -bottom-4 -right-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl">
                    <CheckCircle2 className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="relative mt-4 py-12 bg-gradient-to-b from-transparent to-blue-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-blue-500/50 transition-all relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <achievement.icon className="w-10 h-10 text-blue-500 mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                    <p className="text-gray-400">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#000066,transparent)]" />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Languages */}
            <div className="group">
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-blue-500/50 transition-all relative h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000066] to-transparent opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl" />
                <Code2 className="w-8 h-8 text-blue-500 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">Programlama Dilleri</h3>
                <div className="space-y-2">
                  {skills.languages.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-gray-300 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Frameworks */}
            <div className="group">
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-blue-500/50 transition-all relative h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000066] to-transparent opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl" />
                <Rocket className="w-8 h-8 text-blue-500 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">Framework & Kütüphaneler</h3>
                <div className="space-y-2">
                  {skills.frameworks.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-gray-300 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="group">
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-blue-500/50 transition-all relative h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000066] to-transparent opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl" />
                <Wrench className="w-8 h-8 text-blue-500 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">Araçlar & Teknolojiler</h3>
                <div className="space-y-2">
                  {skills.tools.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-gray-300 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Learning */}
            <div className="group">
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-blue-500/50 transition-all relative h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000066] to-transparent opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl" />
                <Brain className="w-8 h-8 text-blue-500 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">Öğrenme Sürecinde</h3>
                <div className="space-y-2">
                  {skills.learning.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-gray-300 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_200px,#000066,transparent)]" />
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-blue-500" />
              Deneyim
            </h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-blue-500/50 transition-all relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#000066] to-transparent opacity-0 group-hover:opacity-10 transition-opacity" />
                    
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                        <p className="text-blue-400 text-lg">{exp.company}</p>
                        <p className="text-gray-500">{exp.location}</p>
                      </div>
                      <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                        {exp.duration}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {exp.description.map((desc, i) => (
                        <p key={i} className="text-gray-400 flex items-start gap-3">
                          <span className="text-blue-500 mt-1">•</span>
                          {desc}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-3xl" />
            <div className="relative p-12 rounded-2xl border border-blue-500/20 backdrop-blur-sm text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Projenizi Hayata Geçirmeye Hazır mısınız?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Modern web teknolojileri ve kullanıcı deneyimi odaklı yaklaşımımla projenizi bir üst seviyeye taşıyalım.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:opacity-90 transition-all duration-300 group"
              >
                <span>Hemen İletişime Geçin</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 