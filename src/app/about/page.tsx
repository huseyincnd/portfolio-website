import { CodeBracketIcon, AcademicCapIcon, RocketLaunchIcon, BeakerIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import type { Metadata } from "next";

const skills = {
  languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
  frameworks: ["React", "Next.js", "Tailwind CSS"],
  tools: ["Git", "VS Code", "Figma"],
  learning: ["Node.js", "Express.js", "MongoDB"]
};

export const metadata: Metadata = {
  title: "Hakkımda | Hüseyin Cüneydioğlu",
  description: "10+ yıllık yazılım geliştirme deneyimim, teknik yeteneklerim ve profesyonel geçmişim hakkında detaylı bilgi. Full stack web geliştirme, UI/UX tasarımı ve modern web teknolojileri konularındaki uzmanlığım.",
  keywords: ["Hüseyin Cüneydioğlu Kimdir", "Web Geliştirici Özgeçmiş", "Yazılım Mühendisi Deneyim", "Full Stack Developer CV", "React Geliştirici"],
  alternates: {
    canonical: "https://cuneydiogluhuseyin.online/about",
  },
  openGraph: {
    title: "Hakkımda | Hüseyin Cüneydioğlu",
    description: "10+ yıllık yazılım geliştirme deneyimim ve profesyonel geçmişim hakkında detaylı bilgi.",
    url: "https://cuneydiogluhuseyin.online/about",
    type: "profile"
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 relative bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950">
      {/* Background Patterns */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,149,255,0.1),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,255,240,0.05),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,149,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,149,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Hakkımda
            </span>
          </h1>
          <p className="text-lg text-gray-400 dark:text-gray-300">
            Yeni mezun bir yazılım mühendisi olarak, modern web teknolojilerine tutkulu ve sürekli öğrenmeye açık bir geliştiriciyim.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Education Section */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 shadow-xl shadow-blue-500/5 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <AcademicCapIcon className="h-6 w-6 text-blue-500 mr-2" />
                <h2 className="text-2xl font-semibold">Eğitim</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Yazılım Mühendisliği
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Malatya Turgut Özal Üniversitesi, 2024
                  </p>
                  <p className="text-sm text-blue-500 dark:text-blue-400 font-medium mt-1">
                    GPA: 3.10/4.00
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    • Temel yazılım mühendisliği prensipleri, veri yapıları ve algoritmalar üzerine kapsamlı eğitim
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 shadow-xl shadow-blue-500/5 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <BriefcaseIcon className="h-6 w-6 text-blue-500 mr-2" />
                <h2 className="text-2xl font-semibold">Deneyim</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Stajyer Web Geliştirici
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Global Aviation Services GmbH, Almanya
                  </p>
                  <p className="text-sm text-blue-500 dark:text-blue-400 font-medium mt-1">
                    4 Ay Staj
                  </p>
                  <div className="mt-2 space-y-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      • Web geliştirme projelerinde aktif rol
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      • Uluslararası ekip deneyimi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills Section */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 shadow-xl shadow-blue-500/5 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <CodeBracketIcon className="h-6 w-6 text-blue-500 mr-2" />
                <h2 className="text-2xl font-semibold">Teknik Yetenekler</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Teknolojiler
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.concat(skills.frameworks).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Career Goals Section */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 shadow-xl shadow-blue-500/5 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <RocketLaunchIcon className="h-6 w-6 text-blue-500 mr-2" />
                <h2 className="text-2xl font-semibold">Kariyer Hedefleri</h2>
              </div>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p>
                  • Modern web teknolojilerinde uzmanlaşma ve kullanıcı deneyimi odaklı web uygulamaları geliştirme
                </p>
                <p>
                  • Full-stack web geliştirme yeteneklerini geliştirme
                </p>
                <p>
                  • Açık kaynak projelere katkıda bulunma
                </p>
              </div>
            </div>

            {/* Currently Learning Section */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 shadow-xl shadow-blue-500/5 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <BeakerIcon className="h-6 w-6 text-blue-500 mr-2" />
                <h2 className="text-2xl font-semibold">Öğrenme Sürecinde</h2>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {skills.learning.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Sürekli öğrenme ve kendimi geliştirme konusunda istekliyim. Şu anda backend teknolojilerine odaklanıyor ve full-stack yeteneklerimi geliştiriyorum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 