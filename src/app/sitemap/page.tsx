import { blogPosts } from "@/data/blog-posts";
import Link from "next/link";
import { FileText, Package, Phone, Info, MessageSquare, Folder } from "lucide-react";

export const metadata = {
	title: 'Site Haritası | Web Tasarım ve Yazılım Hizmetleri',
	description: 'Web tasarım ve yazılım hizmetleri site haritası. Tüm sayfalar ve blog yazıları.',
	alternates: {
		canonical: 'https://cuneydiogluhuseyin.online/sitemap'
	}
};

export default function SitemapPage() {
	return (
		<div className="min-h-screen py-12">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl font-bold mb-8">Site Haritası</h1>
				
				{/* Main Pages */}
				<div className="mb-12">
					<h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
						<Folder className="w-5 h-5" />
						Ana Sayfalar
					</h2>
					<ul className="space-y-2">
						<li>
							<Link href="/" className="text-blue-400 hover:underline">Ana Sayfa</Link>
						</li>
						<li>
							<Link href="/packages" className="text-blue-400 hover:underline flex items-center gap-2">
								<Package className="w-4 h-4" />
								Paketler
							</Link>
						</li>
						<li>
							<Link href="/about" className="text-blue-400 hover:underline flex items-center gap-2">
								<Info className="w-4 h-4" />
								Hakkımda
							</Link>
						</li>
						<li>
							<Link href="/contact" className="text-blue-400 hover:underline flex items-center gap-2">
								<Phone className="w-4 h-4" />
								İletişim
							</Link>
						</li>
						<li>
							<Link href="/faq" className="text-blue-400 hover:underline flex items-center gap-2">
								<MessageSquare className="w-4 h-4" />
								SSS
							</Link>
						</li>
					</ul>
				</div>

				{/* Blog Posts */}
				<div>
					<h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
						<FileText className="w-5 h-5" />
						Blog Yazıları
					</h2>
					<ul className="space-y-2">
						{blogPosts.map((post) => (
							<li key={post.slug}>
								<Link 
									href={`/blog/${post.slug}`}
									className="text-blue-400 hover:underline"
								>
									{post.title}
								</Link>
								<span className="text-sm text-gray-400 ml-2">({post.date})</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}