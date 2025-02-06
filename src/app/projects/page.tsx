import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Calendar, ArrowRight, Globe, Smartphone, Zap, Search } from "lucide-react";
import type { Metadata } from "next";

type TechStack = "Next.js" | "React" | "TypeScript" | "Tailwind CSS" | "Responsive Design" | "SEO" | "Animation";

interface Technology {
  icon: string;
  color: string;
}

const technologies: Record<TechStack, Technology> = {
  "Next.js": {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "hover:text-black dark:hover:text-white"
  },
  "React": {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "hover:text-blue-500"
  },
  "TypeScript": {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "hover:text-blue-600"
  },
  "Tailwind CSS": {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    color: "hover:text-cyan-500"
  },
  "Responsive Design": {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "hover:text-orange-500"
  },
  "SEO": {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    color: "hover:text-blue-500"
  },
  "Animation": {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "hover:text-blue-400"
  }
};

interface Project {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string[];
  features: {
    icon: any; // LucideIcon type
    text: string;
  }[];
  images: {
    hero: string;
    services: string;
    mobile: string;
  };
  tags: TechStack[];
  links: {
    demo: string;
    github: string;
  };
  date: string;
}

const projects: Project[] = [
  {
    title: "Klinik Web Sitesi",
    subtitle: "Sağlık Sektörü",
    description: "Modern ve profesyonel bir diş kliniği web sitesi. Responsive tasarım, hasta randevu sistemi ve hizmet tanıtımları içerir.",
    longDescription: [
      "• Özel tasarlanmış randevu sistemi",
      "• Detaylı hizmet sayfaları ve açıklamaları",
      "• SEO optimizasyonu ve hızlı sayfa yüklemeleri",
      "• Tamamen responsive tasarım",
    ],
    features: [
      { icon: Globe, text: "Modern web teknolojileri" },
      { icon: Smartphone, text: "Mobil öncelikli tasarım" },
      { icon: Zap, text: "Yüksek performans" },
      { icon: Search, text: "SEO optimizasyonu" },
    ],
    images: {
      hero: "/projects/dental-hero.png",
      services: "/projects/dental-services.png",
      mobile: "/projects/dental-mobile.png",
    },
    tags: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
    links: {
      demo: "https://site-theta-navy.vercel.app",
      github: "https://github.com/huseyincnd/site",
    },
    date: "2024",
  },
  {
    title: "Lojistik Şirketi Web Sitesi",
    subtitle: "Lojistik Sektörü",
    description: "Uluslararası bir lojistik şirketi için modern ve kullanıcı dostu web sitesi. Hizmet portföyü ve şirket tanıtımı içerir.",
    longDescription: [
      "• Dinamik hizmet portföyü yönetimi",
      "• Çoklu dil desteği altyapısı",
      "• İnteraktif animasyonlar ve geçişler",
      "• Modern ve kurumsal tasarım",
    ],
    features: [
      { icon: Globe, text: "Çoklu dil desteği" },
      { icon: Smartphone, text: "Responsive tasarım" },
      { icon: Zap, text: "Hızlı yükleme" },
      { icon: Search, text: "Kolay navigasyon" },
    ],
    images: {
      hero: "/projects/sealive-hero.png",
      services: "/projects/sealive-services.png",
      mobile: "/projects/sealive-mobile.png",
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Animation"],
    links: {
      demo: "https://sealive-logistics-web.vercel.app",
      github: "https://github.com/huseyincnd/sealive-logistics-web",
    },
    date: "2024",
  },
  {
    title: "Hukuk Bürosu Web Sitesi",
    subtitle: "Hukuk Sektörü",
    description: "Profesyonel bir hukuk bürosu için kurumsal web sitesi. Hizmet alanları, avukat profilleri ve iletişim bilgileri içerir.",
    longDescription: [
      "• Profesyonel avukat profil sayfaları",
      "• Detaylı hizmet alanları açıklamaları",
      "• Blog ve haber bölümü",
      "• Kolay iletişim formu entegrasyonu",
    ],
    features: [
      { icon: Globe, text: "Kurumsal tasarım" },
      { icon: Smartphone, text: "Mobil uyumlu" },
      { icon: Zap, text: "Optimize edilmiş" },
      { icon: Search, text: "SEO dostu" },
    ],
    images: {
      hero: "/projects/law-firm-website-hero.png",
      services: "/projects/law-firm-website-services.png",
      mobile: "/projects/law-firm-website-mobile.png",
    },
    tags: ["Next.js", "React", "Tailwind CSS", "SEO"],
    links: {
      demo: "https://law-firm-website-iota.vercel.app",
      github: "https://github.com/huseyincnd/law-firm-website",
    },
    date: "2024",
  }
];

export const metadata: Metadata = {
  title: "Web Tasarım Portföy | Başarılı Web Projeleri ve Referanslar 2024",
  description: "50+ başarılı web projesi ve referanslar. E-ticaret, kurumsal web sitesi, özel yazılım projeleri. Next.js, React ve modern teknolojilerle geliştirilen profesyonel çözümler. Sektöre özel web tasarım örnekleri.",
  keywords: [
    "web tasarım portföy",
    "başarılı web projeleri",
    "web tasarım referanslar",
    "e-ticaret projeleri",
    "kurumsal web siteleri",
    "özel yazılım projeleri",
    "modern web tasarım",
    "Next.js projeleri",
    "React referanslar",
    "responsive web tasarım",
    "SEO uyumlu projeler",
    "mobil uyumlu web sitesi",
    "profesyonel web çözümleri",
    "web tasarım örnekleri",
    "başarı hikayeleri",
    "sektörel web tasarım",
    "hatay web tasarım örnekleri",
    "2024 web projeleri"
  ],
  alternates: {
    canonical: "https://cuneydiogluhuseyin.online/projects"
  },
  openGraph: {
    title: "Modern Web Tasarım Portföy | 50+ Başarılı Proje",
    description: "E-ticaret, kurumsal web sitesi ve özel yazılım projeleri. Modern teknolojilerle geliştirilen profesyonel web çözümleri ve başarı hikayeleri.",
    url: "https://cuneydiogluhuseyin.online/projects",
    type: "website",
    images: [
      {
        url: "https://cuneydiogluhuseyin.online/projects-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Tasarım Portföy ve Referanslar"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Web Tasarım Portföy | Başarılı Projeler",
    description: "50+ başarılı web projesi ve profesyonel referanslar. Sektöre özel web tasarım çözümleri.",
    images: ["https://cuneydiogluhuseyin.online/projects-og-image.jpg"]
  }
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 relative bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950">
      {/* Background Patterns */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,149,255,0.1),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,255,240,0.05),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,149,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,149,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative w-full overflow-x-hidden">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block animate-fade-in">
              <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 text-sm font-medium">
                Portfolio
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-6 animate-fade-in-up">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                Projelerim
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 animate-fade-in-up delay-100">
              Modern web teknolojileri kullanarak geliştirdiğim projeler
            </p>
          </div>

          {/* Projects Grid */}
          <div className="max-w-7xl mx-auto space-y-40">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="relative w-full"
              >
                <div className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center group`}
                >
                  {/* Project Images */}
                  <div className="w-full md:w-3/5 relative">
                    <div className="relative group/image">
                      {/* Main Image */}
                      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover/image:scale-[1.02]">
                        <Image
                          src={project.images.hero}
                          alt={project.title}
                          fill
                          quality={90}
                          sizes="(max-width: 768px) 100vw, 60vw"
                          priority={index === 0}
                          className="object-cover object-top transition-transform duration-700 group-hover/image:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Mobile Preview */}
                      <div className={`absolute -bottom-6 ${
                        index % 2 === 0 ? 'left-0' : 'right-0'
                      } w-32 md:w-44 h-56 md:h-72 rounded-xl overflow-hidden border-[6px] border-white/90 dark:border-gray-800/90 shadow-2xl opacity-0 group-hover/image:opacity-100 transition-all duration-500`}>
                        <div className="relative w-full h-full bg-white dark:bg-gray-800">
                          <Image
                            src={project.images.mobile}
                            alt={`${project.title} mobile view`}
                            fill
                            quality={90}
                            sizes="(max-width: 768px) 30vw, 20vw"
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Services Preview */}
                      <div className={`absolute -top-8 ${
                        index % 2 === 0 ? 'left-0' : 'right-0'
                      } w-64 md:w-80 h-40 md:h-48 rounded-xl overflow-hidden border-[6px] border-white/90 dark:border-gray-800/90 shadow-2xl opacity-0 group-hover/image:opacity-100 transition-all duration-500`}>
                        <div className="relative w-full h-full bg-white dark:bg-gray-800">
                          <Image
                            src={project.images.services}
                            alt={`${project.title} services`}
                            fill
                            quality={90}
                            sizes="(max-width: 768px) 40vw, 30vw"
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="w-full md:w-2/5 space-y-6">
                    <div className="flex items-center gap-2 text-sm text-blue-500 dark:text-blue-400">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-blue-500 dark:text-blue-400 mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {project.features?.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <feature.icon className="w-4 h-4 text-blue-500" />
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Extended Description */}
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      {project.longDescription.map((item, i) => (
                        <p key={i} className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 mt-1 text-blue-500" />
                          <span>{item}</span>
                        </p>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <div
                          key={tag}
                          className="group/tech flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors cursor-default"
                        >
                          {technologies[tag] && (
                            <Image
                              src={technologies[tag].icon}
                              alt={tag}
                              width={16}
                              height={16}
                              className={`opacity-75 group-hover/tech:opacity-100 transition-opacity ${technologies[tag].color}`}
                            />
                          )}
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4">
                      <Link
                        href={project.links.demo}
                        target="_blank"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Canlı Demo</span>
                      </Link>
                      <Link
                        href={project.links.github}
                        target="_blank"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25 hover:-translate-y-0.5"
                      >
                        <Github className="w-4 h-4" />
                        <span>Kaynak Kod</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 