import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Search, Tag, Sparkles, ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Web Tasarım Blog | Güncel Web Teknolojileri ve SEO Makaleleri 2025",
  description: "Web tasarım, SEO, dijital pazarlama ve e-ticaret hakkında güncel makaleler. Next.js, React ve modern web teknolojileri üzerine uzman içerikler. Web sitenizi geliştirmek için profesyonel ipuçları.",
  keywords: [
    "web tasarım blog",
    "web tasarım",
    "web teknolojileri",
    "SEO makaleleri",
    "dijital pazarlama",
    "e-ticaret rehberi",
    "Next.js eğitim",
    "React öğreticiler",
    "web site optimizasyonu",
    "modern web geliştirme",
    "web tasarım trendleri 2025",
    "mobil tasarım ipuçları",
    "web güvenliği",
    "performans optimizasyonu",
    "kullanıcı deneyimi",
    "web site bakımı",
    "mersin web tasarım blog",
    "mersin web tasarım",
  ],
  alternates: {
    canonical: "https://cuneydiogluhuseyin.online/blog"
  },
  openGraph: {
    title: "Web Tasarım Blog | Güncel Teknoloji Makaleleri",
    description: "Web tasarım, SEO ve dijital pazarlama hakkında uzman makaleler. Modern web teknolojileri ve profesyonel ipuçları.",
    url: "https://cuneydiogluhuseyin.online/blog",
    type: "website",
    images: [
      {
        url: "https://cuneydiogluhuseyin.online/blog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Tasarım ve SEO Blog"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Tasarım Blog | Teknoloji ve SEO Makaleleri",
    description: "Web tasarım ve dijital pazarlama hakkında güncel içerikler. Profesyonel ipuçları ve uzman tavsiyeleri.",
    images: ["https://cuneydiogluhuseyin.online/blog-og-image.jpg"]
  }
};

const categories = [
  "Tümü",
  "Web Geliştirme",
  "UI/UX Tasarım",
  "Programlama",
  "Teknoloji"
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#030014] overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#000066,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_-200px,#000066,transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,149,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,149,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
        {/* Animated Circles */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Blog</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-500 to-cyan-500 animate-gradient">
            Yazılarım
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Web geliştirme, tasarım ve teknoloji üzerine deneyimlerimi paylaşıyorum
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Yazılarda ara..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none text-gray-300 placeholder-gray-500"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-gray-300 hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-400 transition-all"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-blue-500/90 text-white text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <div
                        key={tag}
                        className="flex items-center gap-1 px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs"
                      >
                        <Tag className="w-3 h-3" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <div className="mt-6 flex items-center gap-2 text-blue-400 group-hover:text-blue-500 transition-colors">
                    <span className="text-sm font-medium">Devamını Oku</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 