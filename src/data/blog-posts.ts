export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  tags: string[];
  content: {
    introduction: string;
    sections: {
      title: string;
      content: string[];
      code?: {
        language: string;
        code: string;
      };
    }[];
    conclusion: string;
  };
  author: {
    name: string;
    avatar: string;
    title: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    title: "Modern Web Geliştirme: Next.js ve React'in Gücü",
    excerpt: "Modern web geliştirme dünyasında Next.js ve React'in sunduğu avantajlar ve en iyi pratikler.",
    category: "Web Geliştirme",
    date: "15 Mart 2024",
    readTime: "5 dk",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    slug: "modern-web-development",
    tags: ["Next.js", "React", "Web Development"],
    content: {
      introduction: "Modern web geliştirme dünyası sürekli evrim geçiriyor ve bu değişime ayak uydurmak için doğru araçları kullanmak çok önemli. Next.js ve React, web uygulamaları geliştirmek için güçlü bir kombinasyon sunuyor. Bu yazıda, bu teknolojilerin sunduğu avantajları ve en iyi pratikleri inceleyeceğiz.",
      sections: [
        {
          title: "Next.js'in Sunduğu Avantajlar",
          content: [
            "Next.js, React uygulamaları geliştirmek için optimize edilmiş bir framework'tür. Sunduğu başlıca avantajlar şunlardır:",
            "• Hibrit Statik ve Sunucu Tarafı Render (SSR)",
            "• Otomatik Kod Bölümleme",
            "• Yerleşik Image Optimizasyonu",
            "• API Route Desteği",
            "• Sıfır Konfigürasyon ile Typescript Desteği"
          ]
        },
        {
          title: "React Server Components",
          content: [
            "React Server Components (RSC), modern web uygulamalarında performans ve kullanıcı deneyimini optimize etmek için güçlü bir araçtır. RSC ile:",
            "• Daha Küçük Bundle Boyutları",
            "• Daha Hızlı İlk Sayfa Yüklemesi",
            "• SEO Dostu Yapı",
            "• Gelişmiş Güvenlik"
          ],
          code: {
            language: "tsx",
            code: `// Server Component Örneği
export default async function BlogPost() {
  const post = await fetchBlogPost();
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
  );
}`
          }
        },
        {
          title: "Modern Geliştirme Pratikleri",
          content: [
            "Modern web geliştirmede başarılı olmak için bazı temel pratikleri uygulamak önemlidir:",
            "1. Komponent Tabanlı Geliştirme",
            "2. State Yönetimi",
            "3. Performance Optimizasyonu",
            "4. TypeScript Kullanımı",
            "5. Test Driven Development"
          ]
        }
      ],
      conclusion: "Next.js ve React, modern web uygulamaları geliştirmek için güçlü araçlar sunuyor. Bu teknolojileri doğru şekilde kullanarak, performanslı, ölçeklenebilir ve kullanıcı dostu web uygulamaları geliştirebilirsiniz."
    },
    author: {
      name: "Hüseyin Cuneydioğlu",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop",
      title: "Full Stack Developer"
    }
  },
  {
    title: "UI/UX Tasarımında Son Trendler",
    excerpt: "2024 yılında öne çıkan kullanıcı arayüzü ve deneyimi tasarım trendleri ve uygulamaları.",
    category: "UI/UX Tasarım",
    date: "10 Mart 2024",
    readTime: "4 dk",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    slug: "ui-ux-trends",
    tags: ["UI", "UX", "Design"],
    content: {
      introduction: "Kullanıcı arayüzü (UI) ve kullanıcı deneyimi (UX) tasarımı, dijital ürünlerin başarısında kritik bir rol oynuyor. 2024 yılında öne çıkan tasarım trendleri, kullanıcı odaklı ve yenilikçi yaklaşımları bir araya getiriyor.",
      sections: [
        {
          title: "Minimalist ve İşlevsel Tasarım",
          content: [
            "Modern UI tasarımında minimalizm ve işlevsellik ön planda:",
            "• Temiz ve Sade Arayüzler",
            "• Beyaz Alan Kullanımı",
            "• Tipografi Odaklı Tasarım",
            "• Kolay Navigasyon",
            "• Tutarlı Tasarım Dili"
          ]
        },
        {
          title: "Micro-interactions ve Animasyonlar",
          content: [
            "Kullanıcı deneyimini zenginleştiren micro-interactions ve animasyonlar:",
            "• Geri Bildirim Animasyonları",
            "• Sayfa Geçiş Efektleri",
            "• Scroll-Triggered Animasyonlar",
            "• Hover Efektleri",
            "• Loading States"
          ],
          code: {
            language: "css",
            code: `/* Modern Hover Efekti */
.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}`
          }
        },
        {
          title: "Erişilebilirlik ve Kapsayıcı Tasarım",
          content: [
            "Modern web tasarımında erişilebilirlik artık bir tercih değil, zorunluluk:",
            "1. WCAG Standartlarına Uyum",
            "2. Renk Kontrastı",
            "3. Klavye Navigasyonu",
            "4. Screen Reader Uyumluluğu",
            "5. Responsive Tasarım"
          ]
        }
      ],
      conclusion: "UI/UX tasarımındaki modern trendler, kullanıcı odaklı ve kapsayıcı bir yaklaşımı benimsiyor. Başarılı bir dijital ürün için bu trendleri takip etmek ve uygulamak önemli."
    },
    author: {
      name: "Hüseyin Cuneydioğlu",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop",
      title: "Full Stack Developer"
    }
  },
  {
    title: "TypeScript ile Güvenli Kod Yazımı",
    excerpt: "TypeScript kullanarak daha güvenli ve sürdürülebilir kod yazmanın yöntemleri.",
    category: "Programlama",
    date: "5 Mart 2024",
    readTime: "6 dk",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
    slug: "typescript-safety",
    tags: ["TypeScript", "JavaScript", "Programming"],
    content: {
      introduction: "TypeScript, JavaScript'e tip güvenliği ekleyerek daha güvenli ve sürdürülebilir kod yazmamızı sağlayan güçlü bir programlama dilidir. Bu yazıda, TypeScript'in sunduğu güvenlik özelliklerini ve en iyi pratikleri inceleyeceğiz.",
      sections: [
        {
          title: "Tip Güvenliği ve Interface'ler",
          content: [
            "TypeScript'in en güçlü özelliklerinden biri tip sistemidir:",
            "• Statik Tip Kontrolü",
            "• Interface ve Type Tanımlamaları",
            "• Jenerik Tipler",
            "• Union ve Intersection Types",
            "• Type Inference"
          ],
          code: {
            language: "typescript",
            code: `// Interface Örneği
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// Generic Type Örneği
function getFirstItem<T>(arr: T[]): T | undefined {
  return arr[0];
}`
          }
        },
        {
          title: "TypeScript ile Error Handling",
          content: [
            "Hata yönetimi TypeScript ile daha güvenli:",
            "• Custom Error Types",
            "• Error Boundaries",
            "• Type Guards",
            "• Null Checking",
            "• Optional Chaining"
          ]
        },
        {
          title: "Best Practices ve Pattern'ler",
          content: [
            "TypeScript ile temiz kod yazma pratikleri:",
            "1. Strict Mode Kullanımı",
            "2. Immutable Data Patterns",
            "3. Dependency Injection",
            "4. Factory Pattern",
            "5. Repository Pattern"
          ]
        }
      ],
      conclusion: "TypeScript, modern web geliştirmede tip güvenliği ve kod kalitesi açısından vazgeçilmez bir araç haline geldi. Doğru pratiklerle kullanıldığında, daha güvenli ve sürdürülebilir uygulamalar geliştirmenize olanak sağlar."
    },
    author: {
      name: "Hüseyin Cuneydioğlu",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop",
      title: "Full Stack Developer"
    }
  }
]; 