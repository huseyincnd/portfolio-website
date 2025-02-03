import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((post) => post.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen py-20 relative bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950">
      {/* Background Patterns */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,149,255,0.1),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,255,240,0.05),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,149,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,149,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Tüm Yazılar</span>
        </Link>

        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <div className="inline-block animate-fade-in">
              <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-6 animate-fade-in-up">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                {post.title}
              </span>
            </h1>

            {/* Meta Info */}
            <div className="flex items-center justify-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl mb-12">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </header>

          {/* Author */}
          <div className="flex items-center gap-4 mb-12 p-6 rounded-2xl bg-white/5 border border-white/10">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <h3 className="font-medium text-gray-200">{post.author.name}</h3>
              <p className="text-sm text-gray-400">{post.author.title}</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-blue max-w-none">
            {/* Introduction */}
            <p className="lead">{post.content.introduction}</p>

            {/* Sections */}
            {post.content.sections.map((section, index) => (
              <section key={index} className="mt-12">
                <h2>{section.title}</h2>
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
                {section.code && (
                  <pre className="relative">
                    <div className="absolute top-2 right-2 text-xs text-gray-500">
                      {section.code.language}
                    </div>
                    <code className={`language-${section.code.language}`}>
                      {section.code.code}
                    </code>
                  </pre>
                )}
              </section>
            ))}

            {/* Conclusion */}
            <section className="mt-12">
              <h2>Sonuç</h2>
              <p>{post.content.conclusion}</p>
            </section>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm"
                >
                  <Tag className="w-3 h-3" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 