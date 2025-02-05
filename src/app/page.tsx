import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Code, Globe, Smartphone, Zap, Clock, Shield, Settings, ArrowRight, Monitor, Sparkles, Star, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Profesyonel Web Tasarım ve Yazılım Hizmetleri | Hüseyin Cüneydioğlu",
  description: "Modern, SEO uyumlu ve mobil öncelikli web tasarım hizmetleri. E-ticaret, kurumsal web sitesi ve özel yazılım çözümleri. 5+ yıl deneyim, 50+ başarılı proje ve %100 müşteri memnuniyeti.",
  keywords: [
    "web tasarım hizmetleri",
    "profesyonel web sitesi",
    "e-ticaret sitesi yapımı",
    "kurumsal web tasarım",
    "mobil uyumlu web sitesi",
    "SEO uyumlu web tasarım",
    "özel yazılım geliştirme",
    "web sitesi fiyatları",
    "Next.js web geliştirme",
    "React web tasarım",
    "modern web teknolojileri",
    "hızlı web sitesi",
    "güvenli e-ticaret",
    "responsive tasarım",
    "web sitesi bakım"
  ],
  alternates: {
    canonical: "https://cuneydiogluhuseyin.online"
  },
  openGraph: {
    title: "Profesyonel Web Tasarım ve Yazılım Hizmetleri | Hüseyin Cüneydioğlu",
    description: "Modern ve SEO uyumlu web tasarım çözümleri. 5+ yıl deneyim ve 50+ başarılı proje ile işinizi dijitale taşıyoruz.",
    url: "https://cuneydiogluhuseyin.online",
    type: "website",
    images: [
      {
        url: "https://cuneydiogluhuseyin.online/home-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Tasarım ve Yazılım Hizmetleri"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Profesyonel Web Tasarım ve Yazılım Hizmetleri",
    description: "Modern ve SEO uyumlu web tasarım çözümleri. İşinizi dijitale taşıyoruz.",
    images: ["https://cuneydiogluhuseyin.online/home-og-image.jpg"]
  },
  verification: {
    google: "google-site-verification=kVyrVt4NxxKzB1eBtmmzVqcXK0dMfBHPabvh1glf88w"
  }
};

const features = [
  {
    icon: Globe,
    title: "Modern Tasarım",
    description: "En son web teknolojileri ile modern ve etkileyici tasarımlar",
  },
  {
    icon: Smartphone,
    title: "Mobil Uyumlu",
    description: "Tüm cihazlarda mükemmel görünen responsive tasarım",
  },
  {
    icon: Zap,
    title: "Yüksek Performans",
    description: "Hızlı yükleme süreleri ve optimize edilmiş performans",
  },
  {
    icon: Shield,
    title: "Güvenli Altyapı",
    description: "SSL sertifikası ve güvenlik önlemleri ile korumalı",
  },
  {
    icon: Settings,
    title: "Kolay Yönetim",
    description: "Kullanıcı dostu yönetim paneli ile kolay içerik kontrolü",
  },
  {
    icon: Clock,
    title: "Hızlı Teslimat",
    description: "5-7 iş günü içerisinde siteniz hazır",
  },
];

const packages = [
  {
    name: "Başlangıç Paketi",
    price: "4.500 ₺",
    features: [
      "Modern ve Profesyonel Tasarım",
      "Mobil Uyumlu Yapı",
      "5 Sayfa İçerik",
      "İletişim Formu",
      "SSL Sertifikası",
      "6 Ay Ücretsiz Hosting",
      "Temel SEO Optimizasyonu",
    ],
    isPopular: false,
  },
  {
    name: "Profesyonel Paket",
    price: "7.500 ₺",
    features: [
      "Modern ve Profesyonel Tasarım",
      "Mobil Uyumlu Yapı",
      "10 Sayfa İçerik",
      "İletişim Formu",
      "Blog Sistemi",
      "SSL Sertifikası",
      "6 Ay Ücretsiz Hosting",
      "Detaylı SEO Optimizasyonu",
      "Sosyal Medya Entegrasyonu",
      "Google Analytics Kurulumu",
    ],
    isPopular: true,
  },
  {
    name: "Kurumsal Paket",
    price: "12.500 ₺",
    features: [
      "Premium Tasarım",
      "Mobil Uyumlu Yapı",
      "Sınırsız Sayfa",
      "Gelişmiş İletişim Sistemi",
      "Blog ve Haber Sistemi",
      "SSL Sertifikası",
      "12 Ay Ücretsiz Hosting",
      "Kapsamlı SEO Optimizasyonu",
      "Sosyal Medya Entegrasyonu",
      "Google Analytics & Search Console",
      "Çoklu Dil Desteği",
      "Online Ödeme Altyapısı",
    ],
    isPopular: false,
  },
];

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    role: "Diş Hekimi",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
    content: "Hüseyin Bey ile çalışmak çok keyifliydi. Kliniğimiz için hazırladığı web sitesi beklentilerimizin üzerinde oldu. Profesyonel yaklaşımı ve hızlı iletişimi için teşekkür ederim.",
  },
  {
    name: "Ayşe Kaya",
    role: "Avukat",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
    content: "Hukuk büromuz için hazırlanan web sitesi tam istediğimiz gibi oldu. Modern tasarımı ve kullanım kolaylığı ile çok memnun kaldık.",
  },
  {
    name: "Mehmet Demir",
    role: "Lojistik Firma Sahibi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    content: "Şirketimizin web sitesini yenileme sürecinde gösterdiği profesyonel yaklaşım ve sonuçta ortaya çıkan muhteşem tasarım için teşekkürler.",
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-24 min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000015_0%,#001133_100%)]">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(0,100,255,0.1)_20px,rgba(0,100,255,0.1)_40px)]" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_20px,rgba(0,200,255,0.1)_20px,rgba(0,200,255,0.1)_40px)]" />
          </div>
          {/* Animated Circles */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-sm font-medium text-blue-400">
                  Web Sitesi Çözümleri
              </span>
            </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="block text-white mb-2">Modern ve Profesyonel</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 animate-gradient">
                  Web Sitesi Tasarımı
              </span>
            </h1>

              <p className="text-xl text-gray-300 max-w-xl">
                İşletmeniz için özel tasarlanmış, yüksek performanslı ve etkileyici web siteleri. 
                <span className="text-blue-400 font-semibold"> 5 gün </span> 
                içinde siteniz hazır!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
                >
                  <span>Hemen Teklif Al</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              <Link 
                href="/projects"
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <span>Örnek Çalışmalar</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-lg group-hover:bg-blue-500/20 transition-all duration-300" />
                  <div className="relative">
                    <div className="text-3xl font-bold text-white">50+</div>
                    <div className="text-sm text-gray-400">Tamamlanan Proje</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-cyan-500/10 blur-xl rounded-lg group-hover:bg-cyan-500/20 transition-all duration-300" />
                  <div className="relative">
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-sm text-gray-400">Müşteri Memnuniyeti</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-lg group-hover:bg-blue-500/20 transition-all duration-300" />
                  <div className="relative">
                    <div className="text-3xl font-bold text-white">7/24</div>
                    <div className="text-sm text-gray-400">Destek</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Preview */}
            <div className="relative w-full lg:block">
              <div className="relative max-w-[700px] mx-auto lg:mx-0">
                {/* Browser Window */}
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 p-4 border-b border-white/10">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="flex-1 px-4 py-1 bg-white/5 rounded-full text-sm text-gray-400 text-center">
                      www.yourwebsite.com
                    </div>
                  </div>
                  {/* Browser Content */}
                  <div className="p-6">
                    <Image
                      src="/projects/modern-website-preview.png"
                      alt="Modern Website Preview"
                      width={700}
                      height={467}
                      className="rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 p-4 bg-blue-500/10 backdrop-blur-sm rounded-xl border border-blue-500/20 shadow-lg animate-float">
                  <Monitor className="w-6 h-6 text-blue-400" />
                </div>
                <div className="absolute -bottom-6 -left-6 p-4 bg-cyan-500/10 backdrop-blur-sm rounded-xl border border-cyan-500/20 shadow-lg animate-float delay-100">
                  <Sparkles className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-[#000015] to-[#001133] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent,rgba(0,100,255,0.1))]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Özellikler</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Neden Beni Tercih Etmelisiniz?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Modern teknolojiler ve en iyi pratiklerle web sitenizi oluşturuyorum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#001133] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent,rgba(0,100,255,0.1))]" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
              <Star className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Referanslar</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Müşteri Yorumları
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Müşterilerimizin deneyimleri ve görüşleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  {testimonial.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Summary Section */}
      <section className="py-20 bg-[#001133] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent,rgba(0,100,255,0.1))]" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Paketler</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Web Sitesi Paketleri
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              İhtiyacınıza en uygun paketi seçin. Başlangıç paketinde 6 ay, diğer paketlerde 1 yıl domain, SSL sertifikası ücretsiz!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Başlangıç Paketi */}
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all group">
              <div className="text-center">
                <div className="text-sm text-blue-400 mb-1">Kişisel & Küçük İşletmeler İçin</div>
                <h3 className="text-xl font-semibold mb-2">Başlangıç Paketi</h3>
                <div className="text-3xl font-bold text-blue-500 mb-4">4.500₺</div>
                <ul className="text-sm text-gray-400 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" />
                    <span>Modern Tasarım</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" />
                    <span>5 Sayfa İçerik</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" />
                    <span>SEO Optimizasyonu</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" />
                    <span>7/24 Destek</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Profesyonel Paket */}
            <div className="relative bg-gradient-to-b from-blue-600 to-cyan-600 rounded-2xl p-6 transform hover:-translate-y-1 transition-all">
              <div className="absolute top-0 right-6">
                <div className="bg-white/10 px-3 py-1 rounded-b-lg backdrop-blur-sm">
                  <span className="text-sm font-medium">Popüler</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-white/80 mb-1">Orta Ölçekli İşletmeler İçin</div>
                <h3 className="text-xl font-semibold mb-2">Profesyonel Paket</h3>
                <div className="text-3xl font-bold mb-4">7.500₺</div>
                <ul className="text-sm space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>10 Sayfa İçerik</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Blog Sistemi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Detaylı SEO</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Öncelikli Destek</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Kurumsal Paket */}
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all group">
              <div className="text-center">
                <div className="text-sm text-blue-400 mb-1">Büyük İşletmeler İçin</div>
                <h3 className="text-xl font-semibold mb-2">Kurumsal Paket</h3>
                <div className="text-3xl font-bold text-blue-500 mb-4">12.500₺</div>
                <ul className="text-sm text-gray-400 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" />
                    <span>Sınırsız Sayfa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" />
                    <span>Çoklu Dil Desteği</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" />
                    <span>Kapsamlı SEO</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" />
                    <span>VIP Destek</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              Başlangıç paketinde 6 ay, diğer paketlerde 1 yıl domain, SSL sertifikası ücretsiz!
            </p>
            
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:opacity-90 transition-all group"
            >
              <span>Tüm Paket Detaylarını İncele</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-90" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.1)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1)_75%,transparent_75%,transparent)] bg-[length:100px_100px] animate-[move-bg-45deg_3s_linear_infinite]" />
        
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Projenizi Hayata Geçirmeye Hazır mısınız?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Hemen iletişime geçin, ihtiyaçlarınızı konuşalım ve size özel bir teklif hazırlayalım.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-black/25 hover:-translate-y-1"
          >
            <span>Ücretsiz Teklif Al</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
