"use client";

import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Hüseyin Cüneydioğlu",
  description: "Web projeleri, yazılım danışmanlığı veya iş birliği fırsatları için benimle iletişime geçin. İstanbul'da freelance web geliştirici ve UI/UX tasarımcı hizmetleri.",
  keywords: ["İletişim", "Web Geliştirici İletişim", "Freelance Web Developer", "İstanbul Web Tasarım", "UI/UX Danışmanlık", "Web Proje Teklifi"],
  alternates: {
    canonical: "https://cuneydiogluhuseyin.online/contact",
  },
  openGraph: {
    title: "İletişim | Hüseyin Cüneydioğlu",
    description: "Web projeleri ve iş birliği fırsatları için benimle iletişime geçin.",
    url: "https://cuneydiogluhuseyin.online/contact",
    type: "website"
  }
};

// Form şeması
const contactSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  subject: z.string().min(5, "Konu en az 5 karakter olmalıdır"),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır"),
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitStatus(null);

    try {
      // Form doğrulama
      contactSchema.parse(formData);
      setIsSubmitting(true);

      // API'ye gönderme
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            newErrors[err.path[0]] = err.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20 relative bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950">
      {/* Background Patterns */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,149,255,0.1),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,255,240,0.05),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,149,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,149,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block animate-fade-in">
            <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 text-sm font-medium">
              İletişim
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-6 animate-fade-in-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Benimle İletişime Geçin
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 animate-fade-in-up delay-100">
            Projeleriniz için benimle iletişime geçebilirsiniz
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
              <h2 className="text-2xl font-semibold text-gray-100">İletişim Bilgileri</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">E-posta</p>
                    <a href="mailto:info@huseyincuneydioglu.com" className="text-gray-200 hover:text-blue-400 transition-colors">
                      cuneydiogluhuseyin1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Telefon</p>
                    <a href="tel:+905306720570" className="text-gray-200 hover:text-blue-400 transition-colors">
                      +90 530 672 05 70
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Konum</p>
                    <p className="text-gray-200">
                      Hatay, Türkiye
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-gray-100 mb-6">Sosyal Medya</h2>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/huseyincnd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/50 transition-all group"
                >
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-gray-300 group-hover:text-blue-400">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/hüseyin-cuneydioğlu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/50 transition-all group"
                >
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="text-gray-300 group-hover:text-blue-400">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  İsim
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.name ? "border-red-500" : "border-white/10"
                  } focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none text-gray-100`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.email ? "border-red-500" : "border-white/10"
                  } focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none text-gray-100`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.subject ? "border-red-500" : "border-white/10"
                  } focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none text-gray-100`}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.message ? "border-red-500" : "border-white/10"
                  } focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none text-gray-100`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Gönderiliyor...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Gönder</span>
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-500 text-center">Mesajınız başarıyla gönderildi!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500 text-center">Bir hata oluştu. Lütfen tekrar deneyin.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 