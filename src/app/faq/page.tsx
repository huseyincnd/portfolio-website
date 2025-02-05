"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle, Search } from "lucide-react";

// FAQ kategorileri ve soruları
const faqCategories = [
  {
    title: "Genel Sorular",
    questions: [
      {
        q: "Web sitesi yaptırmanın maliyeti nedir?",
        a: "Web sitesi maliyeti, projenin kapsamına göre değişiklik gösterir. Başlangıç paketimiz 4.500₺'den başlamakta olup, profesyonel paketler için 7.500₺, kurumsal paketler için 12.500₺'den başlayan fiyatlarımız bulunmaktadır. Her proje için özel fiyat teklifi sunuyoruz."
      },
      {
        q: "Bir web sitesinin yapılma süresi ne kadardır?",
        a: "Standart bir web sitesi 5-10 iş günü içerisinde tamamlanabilir. E-ticaret siteleri ve daha kapsamlı projeler için bu süre 15-20 iş gününe kadar uzayabilir. Projenin karmaşıklığı ve istenen özelliklere göre süre değişiklik gösterebilir."
      },
      {
        q: "Web sitesi yaptırmak işimi nasıl etkiler?",
        a: "Profesyonel bir web sitesi işinizi birçok yönden olumlu etkiler: Marka bilinirliğinizi artırır, 7/24 müşteri erişimi sağlar, pazarlama maliyetlerinizi düşürür, müşteri güveni oluşturur ve rekabet avantajı sağlar. Günümüzde web sitesi, işletmelerin dijital kartviziti haline gelmiştir."
      },
      {
        q: "Daha önce hiç web sitesi yaptırmadım, nereden başlamalıyım?",
        a: "Endişelenmeyin, size her adımda yardımcı olacağız. Öncelikle ücretsiz bir görüşme yapalım, ihtiyaçlarınızı anlayalım ve size en uygun çözümü birlikte belirleyelim. Tüm süreç boyunca sizinle açık iletişim kurarak ilerleyeceğiz."
      },
      {
        q: "Web sitem hazır olduğunda nasıl kullanacağım?",
        a: "Size özel hazırladığımız kullanım kılavuzu ve video eğitimlerle sitenizi nasıl yöneteceğinizi adım adım öğretiyoruz. Ayrıca ilk ay boyunca ücretsiz destek sağlıyoruz. Herhangi bir sorunuz olduğunda 7/24 yanınızdayız."
      },
      {
        q: "Referanslarınızı görebilir miyim?",
        a: "Elbette! Portföy sayfamızda tamamladığımız projeleri inceleyebilirsiniz. Ayrıca talep etmeniz halinde mevcut müşterilerimizle iletişime geçmenizi sağlayabiliriz. Müşteri memnuniyeti bizim için çok önemli."
      },
      {
        q: "Projem yarıda kalma riski var mı?",
        a: "Hayır, 5 yıllık tecrübemiz ve 50+ başarılı projemizle bugüne kadar hiçbir projemiz yarıda kalmadı."
      }
    ]
  },
  {
    title: "Güven ve Güvenlik",
    questions: [
      {
        q: "Sitemi kendim güncelleyebilecek miyim?",
        a: "Kesinlikle evet! Size çok kolay kullanılan bir yönetim paneli sunuyoruz. Teknik bilgi gerektirmeden içeriklerinizi, resimlerinizi ve bilgilerinizi güncelleyebilirsiniz. Panel kullanımını size detaylıca öğreteceğiz."
      },
      {
        q: "Ya bir sorun çıkarsa? Yardım alabilecek miyim?",
        a: "Elbette! 7/24 destek sağlıyoruz. WhatsApp, telefon veya e-posta ile bize ulaşabilirsiniz. Acil durumlarda maksimum 1 saat içinde müdahale ediyoruz. Asla yalnız bırakmıyoruz."
      },
      {
        q: "Sitem güvenli olacak mı?",
        a: "Kesinlikle! En üst düzey güvenlik önlemleri alıyoruz. SSL sertifikası, güvenlik duvarı ve düzenli yedekleme ile sitenizi koruyoruz. Ayrıca düzenli güvenlik taramaları yapıyoruz."
      },
      {
        q: "Ödemelerimi güvenle alabilecek miyim?",
        a: "Evet, en güvenilir ödeme altyapılarını kullanıyoruz. Banka entegrasyonları ve sanal POS sistemleri ile ödemelerinizi %100 güvenli şekilde alabilirsiniz."
      },
      {
        q: "Verilerim güvende olacak mı?",
        a: "Kesinlikle! KVKK uyumlu çalışıyor ve verilerinizi en üst düzeyde koruyoruz. Düzenli yedeklemeler yapıyor ve sadece sizin erişebileceğiniz güvenli bir ortamda saklıyoruz."
      }
    ]
  },
  {
    title: "Yaygın Endişeler",
    questions: [
      {
        q: "Web sitesi için çok geç kalmış olabilir miyim?",
        a: "Asla! Her gün yüzlerce işletme dijitale geçiş yapıyor. Doğru strateji ile rakiplerinizi kısa sürede yakalayabilirsiniz. Size özel dijital pazarlama stratejisi ile hızlı sonuçlar alabilirsiniz."
      },
      {
        q: "Rakiplerim çok güçlü, ben nasıl öne çıkabilirim?",
        a: "Özgün tasarım ve doğru SEO stratejisi ile sizi öne çıkaracağız. Rakip analizi yapıyor ve sizin güçlü yönlerinizi vurgulayan bir strateji geliştiriyoruz. Küçük işletmeleri büyük rakipleriyle rekabet edebilir hale getiriyoruz."
      },
      {
        q: "Ya istediğim gibi olmazsa?",
        a: "Süreç boyunca sizinle sürekli iletişim halinde oluyoruz. Her aşamada onayınızı alıyor ve isteklerinize göre revizyonlar yapıyoruz. Siz tamamen memnun kalana kadar çalışmaya devam ediyoruz."
      },
      {
        q: "Teknik konulardan hiç anlamıyorum, bu sorun olur mu?",
        a: "Kesinlikle hayır! Biz teknik detaylarla ilgileniyoruz, siz sadece işinize odaklanın. Her şeyi sizin anlayacağınız dilde açıklıyor ve tüm süreçleri sizin için yönetiyoruz."
      }
    ]
  },
  {
    title: "Hizmet ve Destek",
    questions: [
      {
        q: "Hangi sektörlere hizmet veriyorsunuz?",
        a: "Her sektöre özel çözümler sunuyoruz: Kurumsal firmalar, e-ticaret siteleri, restoranlar, oteller, klinikler, okullar, dernekler ve daha fazlası. Her sektörün kendine özel ihtiyaçlarını anlıyor ve ona göre çözümler geliştiriyoruz."
      },
      {
        q: "Sürekli destek alabilecek miyim?",
        a: "Evet! Proje tamamlandıktan sonra da yanınızdayız. Aylık bakım paketlerimizle sitenizin güncel ve güvenli kalmasını sağlıyoruz. İstediğiniz zaman bize ulaşabilirsiniz."
      },
      {
        q: "Eğitim ve dokümantasyon sağlıyor musunuz?",
        a: "Evet, size özel hazırlanmış kullanım kılavuzu ve video eğitimler sunuyoruz. Ayrıca birebir eğitim veriyor ve tüm sorularınızı yanıtlıyoruz."
      },
      {
        q: "Acil durumlarda ne kadar sürede dönüş yapıyorsunuz?",
        a: "Acil durumlarda maksimum 1 saat içinde müdahale ediyoruz. Normal talepleriniz için 24 saat içinde çözüm sunuyoruz. WhatsApp destek hattımız 7/24 aktif."
      }
    ]
  },
  {
    title: "Ödeme ve Fiyatlandırma",
    questions: [
      {
        q: "Gizli maliyetler var mı?",
        a: "Kesinlikle hayır! Tüm maliyetleri baştan netleştiriyor ve sözleşmede belirtiyoruz. Proje sürecinde ekstra maliyet çıkmaz. Domain ve hosting gibi yıllık ödemeler konusunda da sizi bilgilendiriyoruz."
      },
      {
        q: "Taksit imkanı var mı?",
        a: "Evet! Uzun vadeli projeler için özel ödeme planları sunuyoruz. Kredi kartına taksit imkanımız da mevcut. Size en uygun ödeme planını birlikte belirleyebiliriz."
      },
      {
        q: "Fiyatlarınız neden bu kadar uygun?",
        a: "Verimli çalışma sistemimiz ve teknolojiyi etkin kullanmamız sayesinde maliyetlerimizi düşük tutuyoruz. Kaliteden ödün vermeden, uygun fiyatlarla profesyonel hizmet sunuyoruz."
      },
      {
        q: "Yıllık ne kadar ödeme yapmam gerekiyor?",
        a: "Domain ve hosting için yıllık ortalama 1.000-1.500₺ arası bir ödeme yeterli. SSL sertifikası ve temel bakım hizmetleri buna dahil. İsteğe bağlı olarak ek hizmetler alabilirsiniz."
      }
    ]
  },
  {
    title: "Teknik Sorular",
    questions: [
      {
        q: "Web sitem mobil uyumlu olacak mı?",
        a: "Evet, tüm web sitelerimiz responsive (mobil uyumlu) olarak tasarlanmaktadır. Mobil cihazlarda mükemmel görüntü ve kullanıcı deneyimi sağlamak için özel optimizasyonlar yapıyoruz."
      },
      {
        q: "SEO uyumlu web sitesi ne demek?",
        a: "SEO uyumlu web sitesi, arama motorlarında üst sıralarda yer alabilmek için optimize edilmiş sitedir. Temiz kod yapısı, hızlı yükleme süresi, mobil uyumluluk, meta etiketleri ve içerik optimizasyonu gibi SEO kriterlerini göz önünde bulundurarak geliştirme yapıyoruz."
      },
      {
        q: "Hosting ve domain hizmeti veriyor musunuz?",
        a: "Evet, tüm paketlerimizde belirli süre ücretsiz hosting ve domain hizmeti sunuyoruz. Süre sonunda uygun fiyatlarla bu hizmetleri uzatabilirsiniz."
      }
    ]
  },
  {
    title: "E-ticaret Soruları",
    questions: [
      {
        q: "E-ticaret sitesi açmak zor mu?",
        a: "Hayır, biz tüm zorlu kısımları hallediyoruz. Siz sadece ürünlerinizi ekleyin ve satışa odaklanın. Panel kullanımı çok kolay ve size tam eğitim veriyoruz."
      },
      {
        q: "Ürünlerimi nasıl yöneteceğim?",
        a: "Çok kolay bir panel sunuyoruz. Ürün ekleme, fiyat güncelleme, stok takibi gibi işlemleri kolayca yapabilirsiniz. Excel ile toplu ürün girişi de yapabilirsiniz."
      },
      {
        q: "Kargo ve ödeme işlemleri nasıl olacak?",
        a: "Tüm kargo firmaları ve ödeme sistemleriyle entegrasyon sağlıyoruz. Siparişler otomatik olarak kargoya yönlendirilir ve ödemeler hesabınıza geçer."
      },
      {
        q: "Satışlarım artmazsa ne olacak?",
        a: "Dijital pazarlama desteği sunuyoruz. Google Ads, sosyal medya reklamları ve SEO ile satışlarınızı artırmanıza yardımcı oluyoruz. Başarınız için sürekli destek veriyoruz."
      }
    ]
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("Genel Sorular");
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const toggleQuestion = (question: string) => {
    setOpenQuestions(prev =>
      prev.includes(question)
        ? prev.filter(q => q !== question)
        : [...prev, question]
    );
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
           q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#030014] overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#000066,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_-200px,#000066,transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,149,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,149,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <MessageCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">SSS</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-500 to-cyan-500">
            Sık Sorulan Sorular
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Web tasarım ve geliştirme hizmetlerimiz hakkında sık sorulan soruları ve cevaplarını burada bulabilirsiniz
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Soru ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none text-gray-300 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Categories and Questions */}
        <div className="max-w-3xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            {faqCategories.map((category) => (
              <button
                key={category.title}
                onClick={() => setActiveCategory(category.title)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeCategory === category.title
                    ? "bg-blue-500 text-white"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Questions Accordion */}
          <div className="space-y-4">
            {(searchQuery ? filteredCategories : faqCategories).map((category) => (
              <div
                key={category.title}
                className={searchQuery || activeCategory === category.title ? "block" : "hidden"}
              >
                {category.questions.map(({ q, a }) => (
                  <div
                    key={q}
                    className="bg-white/5 border border-white/10 rounded-xl overflow-hidden mb-4"
                  >
                    <button
                      onClick={() => toggleQuestion(q)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left"
                    >
                      <span className="text-white font-medium">{q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          openQuestions.includes(q) ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openQuestions.includes(q) && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-400">{a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Başka sorularınız mı var? Bizimle iletişime geçin.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:opacity-90 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>İletişime Geç</span>
          </a>
        </div>
      </div>
    </div>
  );
} 