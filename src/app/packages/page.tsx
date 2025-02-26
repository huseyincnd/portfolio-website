"use client";

import { useEffect } from "react";
import { packagesSchema } from './metadata';
import { Check, Star, ArrowRight, Shield, Clock, Zap, Sparkles, Users, Award } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Başlangıç Paketi",
    price: "4.500₺",
    description: "Kişisel ve küçük işletmeler için ideal başlangıç paketi",
    features: [
      "5 Sayfa İçerik",
      "Mobil Uyumlu Tasarım",
      "SEO Optimizasyonu",
      "Ücretsiz SSL",
      "Domain ve Hosting (6 Ay)",
      "7/24 Destek",
      "WhatsApp Entegrasyonu",
      "Google Analytics"
    ],
    benefits: [
      {
        icon: Shield,
        title: "Güvenli Altyapı",
        description: "SSL sertifikası ile güvenli bağlantı"
      },
      {
        icon: Clock,
        title: "Hızlı Teslimat",
        description: "7 gün içinde teslim"
      },
      {
        icon: Zap,
        title: "Yüksek Performans",
        description: "Optimize edilmiş kod yapısı"
      }
    ],
    isPopular: false,
  },
  {
    name: "Profesyonel Paket",
    price: "7.500₺",
    description: "Orta ölçekli işletmeler ve e-ticaret siteleri için profesyonel çözüm",
    features: [
      "10 Sayfa İçerik",
      "E-ticaret Altyapısı",
      "Ödeme Sistemi",
      "Stok Yönetimi",
      "SEO Optimizasyonu",
      "Ücretsiz SSL",
      "Domain ve Hosting (1 Yıl)",
      "7/24 VIP Destek",
      "Sosyal Medya Entegrasyonu",
      "Google Ads Desteği"
    ],
    benefits: [
      {
        icon: Shield,
        title: "Premium Güvenlik",
        description: "Gelişmiş güvenlik önlemleri"
      },
      {
        icon: Clock,
        title: "Öncelikli Teslimat",
        description: "5 gün içinde teslim"
      },
      {
        icon: Zap,
        title: "Maksimum Performans",
        description: "İleri düzey optimizasyon"
      }
    ],
    isPopular: true,
  },
  {
    name: "Kurumsal Paket",
    price: "12.500₺",
    description: "Büyük işletmeler ve kurumsal firmalar için özel çözüm",
    features: [
      "Sınırsız Sayfa",
      "Özel Tasarım",
      "İleri SEO Paketi",
      "Çoklu Dil Desteği",
      "İleri Analitik",
      "Ücretsiz SSL",
      "Domain ve Hosting (1 Yıl)",
      "7/24 Öncelikli Destek",
      "Pazarlama Danışmanlığı",
      "Özel Entegrasyonlar"
    ],
    benefits: [
      {
        icon: Shield,
        title: "Kurumsal Güvenlik",
        description: "En üst düzey güvenlik"
      },
      {
        icon: Clock,
        title: "VIP Teslimat",
        description: "Öncelikli geliştirme"
      },
      {
        icon: Zap,
        title: "Ultra Performans",
        description: "En iyi performans optimizasyonu"
      }
    ],
    isPopular: false,
  },
];

export default function PackagesPage() {
  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Teslim süresi ne kadar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Seçtiğiniz pakete ve projenin kapsamına göre 5-10 iş günü içerisinde siteniz tamamlanmaktadır. Acil projeler için öncelikli geliştirme seçeneği mevcuttur."
        }
      },
      {
        "@type": "Question",
        "name": "Paketlere hosting dahil mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, tüm paketlere belirtilen süre boyunca ücretsiz hosting hizmeti dahildir. Süre sonunda uygun fiyatlarla hosting hizmetinizi uzatabilirsiniz."
        }
      }
    ]
  };

  // Add schemas to head

  useEffect(() => {
    const schemas = [packagesSchema, faqSchema];
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <div className="min-h-screen pt-5 pb-16 bg-[#030014] overflow-hidden">
      {/* Hero Section with Enhanced Background */}
      <div className="relative">
        <div className="absolute inset-0">
          {/* Modern Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]" />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-cyan-600/10" />
          {/* Animated Circles */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />
        </div>

        <div className="relative container mx-auto px-4 pt-2 pb-32">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                  Web Sitesi Paketleri
                </span>
              </div>
              
              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="block text-white mb-4">Profesyonel</span>
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text animate-gradient">
                  Web Sitesi Çözümleri
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                İhtiyacınıza en uygun paketi seçin, modern ve profesyonel web sitenize hemen kavuşun.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
                >
                  <span>Hemen Başlayalım</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <span>Örnek Projeler</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 pt-16 border-t border-white/10">
                <div className="relative group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <div className="relative">
                    <div className="text-3xl font-bold text-white mb-2">50+</div>
                    <div className="text-sm text-gray-400">Tamamlanan Proje</div>
                  </div>
                </div>
                <div className="relative group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <div className="relative">
                    <div className="text-3xl font-bold text-white mb-2">100%</div>
                    <div className="text-sm text-gray-400">Müşteri Memnuniyeti</div>
                  </div>
                </div>
                <div className="relative group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <div className="relative">
                    <div className="text-3xl font-bold text-white mb-2">7/24</div>
                    <div className="text-sm text-gray-400">Destek</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Packages Grid with Enhanced Design */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl backdrop-blur-sm border group ${
                pkg.isPopular
                  ? "bg-gradient-to-b from-blue-600/20 to-cyan-600/20 border-blue-500/50"
                  : "bg-white/5 border-white/10"
              } hover:transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10`}
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 blur-lg opacity-50" />
                    <span className="relative px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-full">
                      En Çok Tercih Edilen
                    </span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8 relative">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {pkg.name}
                </h3>
                <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  {pkg.price}
                </div>
                <p className="text-gray-400">{pkg.description}</p>
              </div>

              {/* Benefits with Enhanced Design */}
              <div className="grid grid-cols-1 gap-4 mb-8">
                {pkg.benefits.map((benefit, bIndex) => (
                  <div key={bIndex} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                      <benefit.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gray-400">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Features List with Enhanced Design */}
              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3 group/feature">
                    <div className="p-1 rounded-full bg-blue-500/10 group-hover/feature:bg-blue-500/20 transition-colors">
                      <Check className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-gray-300 group-hover/feature:text-white transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Enhanced CTA Button */}
              <Link
                href="/contact"
                className={`group flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl text-white transition-all duration-300 ${
                  pkg.isPopular
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/25"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                <span>Hemen Başlayalım</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced FAQ Section */}
      <div className="container mx-auto px-4 mt-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Sıkça Sorulan Sorular</span>
            </div>
            <h2 className="text-3xl font-bold text-white">Size Nasıl Yardımcı Olabiliriz?</h2>
          </div>
          
          <div className="grid gap-6">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-left hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">Teslim süresi ne kadar?</h3>
              <p className="text-gray-400">
                Seçtiğiniz pakete ve projenin kapsamına göre 5-10 iş günü içerisinde siteniz tamamlanmaktadır. 
                Acil projeler için öncelikli geliştirme seçeneği mevcuttur.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-left hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">Paketlere hosting dahil mi?</h3>
              <p className="text-gray-400">
                Evet, tüm paketlere belirtilen süre boyunca ücretsiz hosting hizmeti dahildir. 
                Süre sonunda uygun fiyatlarla hosting hizmetinizi uzatabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="container mx-auto px-4 mt-24">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-3xl" />
          <div className="relative p-12 rounded-2xl border border-blue-500/20 backdrop-blur-sm text-center">
            <Award className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Projenizi Hayata Geçirmeye Hazır mısınız?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Hemen iletişime geçin, ihtiyaçlarınızı konuşalım ve size özel bir teklif hazırlayalım.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:opacity-90 transition-all duration-300 group"
            >
              <span>Ücretsiz Teklif Al</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 