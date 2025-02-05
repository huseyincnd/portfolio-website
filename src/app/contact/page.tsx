"use client";

import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, Loader2, MessageSquare, Sparkles, Github, Linkedin } from "lucide-react";

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
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">İletişim</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-500 to-cyan-500 animate-gradient">
            Benimle İletişime Geçin
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Projeleriniz için benimle iletişime geçebilirsiniz
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-8 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-blue-400" />
                İletişim Bilgileri
              </h2>
              
              <div className="space-y-6">
                <div className="group flex items-center gap-6 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">E-posta</p>
                    <a 
                      href="mailto:cuneydiogluhuseyin1@gmail.com" 
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      cuneydiogluhuseyin1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-center gap-6 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Telefon</p>
                    <a 
                      href="tel:+905306720570" 
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      +90 530 672 05 70
                    </a>
                  </div>
                </div>

                <div className="group flex items-center gap-6 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Konum</p>
                    <p className="text-white">
                      Hatay, Türkiye
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-blue-400" />
                Sosyal Medya
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/huseyincnd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/50 transition-all"
                >
                  <Github className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  <span className="text-gray-300 group-hover:text-blue-400 transition-colors">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/hüseyin-cuneydioğlu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/50 transition-all"
                >
                  <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  <span className="text-gray-300 group-hover:text-blue-400 transition-colors">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-blue-400" />
              Mesaj Gönder
            </h2>

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
                  } focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none text-gray-100 resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Gönderiliyor...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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