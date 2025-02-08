"use client";

import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, MessageCircle, ArrowRight } from 'lucide-react';

export function Footer() {
	// Schema.org markup for LocalBusiness
	const localBusinessSchema = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "Hüseyin Cüneydioğlu Web Tasarım",
		"image": "https://cuneydiogluhuseyin.online/logo.png",
		"description": "Modern web tasarım ve yazılım çözümleri ile işinizi dijitale taşıyın.",
		"url": "https://cuneydiogluhuseyin.online",
		"telephone": "+905306720570",
		"email": "cuneydiogluhuseyin1@gmail.com",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Hatay",
			"addressRegion": "Hatay",
			"addressCountry": "TR"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": "36.2023",
			"longitude": "36.1613"
		},
		"openingHours": "Mo-Su 09:00-18:00",
		"priceRange": "₺₺"
	};

	return (
		<footer className="w-full bg-[#030014] border-t border-white/10">
			{/* Schema Markup */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
			/>
			
			<div className="max-w-7xl mx-auto px-4 py-12">
				{/* Footer Grid */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="space-y-4">
						<Link href="/" className="block">
							<h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
								Hüseyin Cüneydioğlu
							</h3>
						</Link>
						<p className="text-sm text-gray-400">
							5+ yıl tecrübe ve 50+ başarılı proje ile modern web tasarım ve yazılım çözümleri sunuyoruz.
						</p>
						<div className="flex gap-4">
							<a
								href="https://github.com/huseyincnd"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-blue-400 transition-colors"
								aria-label="GitHub Profilim"
							>
								<Github className="w-5 h-5" />
							</a>
							<a
								href="https://linkedin.com/in/huseyincnd"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-blue-400 transition-colors"
								aria-label="LinkedIn Profilim"
							>
								<Linkedin className="w-5 h-5" />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-white">Sayfalar</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">Hakkımda</Link>
							</li>
							<li>
								<Link href="/projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projeler</Link>
							</li>
							<li>
								<Link href="/packages" className="text-gray-400 hover:text-blue-400 transition-colors">Paketler</Link>
							</li>
							<li>
								<Link href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</Link>
							</li>
							<li>
								<Link href="/faq" className="text-gray-400 hover:text-blue-400 transition-colors">SSS</Link>
							</li>
							<li>
								<Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">İletişim</Link>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-white">Hizmetler</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/packages" className="text-gray-400 hover:text-blue-400 transition-colors">
									Web Tasarım Paketleri
								</Link>
							</li>
							<li>
								<Link href="/packages#e-commerce" className="text-gray-400 hover:text-blue-400 transition-colors">
									E-ticaret Çözümleri
								</Link>
							</li>
							<li>
								<Link href="/packages#seo" className="text-gray-400 hover:text-blue-400 transition-colors">
									SEO Optimizasyonu
								</Link>
							</li>
							<li>
								<Link href="/packages#development" className="text-gray-400 hover:text-blue-400 transition-colors">
									Özel Web Yazılım
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-white">İletişim</h3>
						<div className="space-y-3">
							<a 
								href="mailto:cuneydiogluhuseyin1@gmail.com" 
								className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
								title="E-posta Gönder"
							>
								<Mail className="w-4 h-4" />
								<span>cuneydiogluhuseyin1@gmail.com</span>
							</a>
							<a 
								href="tel:+905306720570" 
								className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
								title="Telefon Et"
							>
								<Phone className="w-4 h-4" />
								<span>+90 530 672 05 70</span>
							</a>
							<div className="flex items-center gap-2 text-gray-400">
								<MapPin className="w-4 h-4" />
								<span>Hatay, Türkiye</span>
							</div>
							<a
								href="https://wa.me/905306720570"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors mt-2"
							>
								<MessageCircle className="w-4 h-4" />
								<span>WhatsApp&apos;tan Yaz</span>
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
					<p>© {new Date().getFullYear()} Hüseyin Cüneydioğlu. Tüm hakları saklıdır.</p>
					<p className="mt-2">
						Web Tasarım ve Yazılım Hizmetleri | Next.js & React Uzmanı
					</p>
				</div>
			</div>
		</footer>
	);
}