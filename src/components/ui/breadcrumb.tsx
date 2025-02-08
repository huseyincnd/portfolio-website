"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumb() {
	const pathname = usePathname();
	const paths = pathname.split('/').filter(Boolean);

	// Generate breadcrumb schema
	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{
				"@type": "ListItem",
				"position": 1,
				"name": "Ana Sayfa",
				"item": "https://cuneydiogluhuseyin.online"
			},
			...paths.map((path, index) => ({
				"@type": "ListItem",
				"position": index + 2,
				"name": path.charAt(0).toUpperCase() + path.slice(1),
				"item": `https://cuneydiogluhuseyin.online/${paths.slice(0, index + 1).join('/')}`
			}))
		]
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>
			<nav className="flex items-center space-x-2 text-sm text-gray-400 max-w-7xl mx-auto py-2">
				<Link href="/" className="hover:text-blue-400 transition-colors">
					<Home className="w-4 h-4" />
				</Link>
				{paths.map((path, index) => (
					<div key={path} className="flex items-center">
						<ChevronRight className="w-4 h-4 mx-2" />
						<Link
							href={`/${paths.slice(0, index + 1).join('/')}`}
							className="hover:text-blue-400 transition-colors"
						>
							{path.charAt(0).toUpperCase() + path.slice(1)}
						</Link>
					</div>
				))}
			</nav>
		</>
	);
}