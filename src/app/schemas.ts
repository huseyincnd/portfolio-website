export const businessSchema = {
	"@context": "https://schema.org",
	"@type": "WebDesignCompany",
	"name": "Hüseyin Cüneydioğlu - Web Tasarım",
	"alternateName": "HC Web Tasarım",
	"description": "Modern web tasarım, kurumsal website yapımı ve e-ticaret çözümleri. Uygun fiyatlı, profesyonel ve SEO uyumlu web sitesi yapımı. 5 yıllık tecrübe ve 50+ başarılı proje ile hizmetinizdeyiz.",
	"@id": "https://cuneydiogluhuseyin.online",
	"url": "https://cuneydiogluhuseyin.online",
	"telephone": "+905306720570",
	"email": "cuneydiogluhuseyin1@gmail.com",
	"logo": "https://cuneydiogluhuseyin.online/logo.png",
	"image": "https://cuneydiogluhuseyin.online/logo.png",
	"priceRange": "₺₺",
	"address": {
		"@type": "PostalAddress",
		"streetAddress": "Yeni Mahalle",
		"addressLocality": "Şahinbey",
		"addressRegion": "Gaziantep",
		"postalCode": "27000",
		"addressCountry": "TR"
	},
	"geo": {
		"@type": "GeoCoordinates",
		"latitude": 37.0662,
		"longitude": 37.3833
	},
	"areaServed": {
		"@type": "Country",
		"name": "Turkey"
	},
	"sameAs": [
		"https://www.instagram.com/cuneydiogluhuseyin/",
		"https://www.linkedin.com/in/cuneydiogluhuseyin/",
		"https://github.com/cuneydiogluhuseyin"
	]
};

// Ayrı bir Organization schema'sı oluşturalım
export const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"name": "Hüseyin Cüneydioğlu Web Tasarım",
	"url": "https://cuneydiogluhuseyin.online",
	"logo": "/logo.png",
	"aggregateRating": {
		"@type": "AggregateRating",
		"ratingValue": "5",
		"ratingCount": "50",
		"bestRating": "5",
		"worstRating": "1"
	}
};

// Service schema'sı oluşturalım
export const serviceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	"serviceType": "Web Design",
	"provider": {
		"@type": "Organization",
		"name": "Hüseyin Cüneydioğlu Web Tasarım"
	},
	"review": {
		"@type": "Review",
		"reviewRating": {
			"@type": "Rating",
			"ratingValue": "5",
			"bestRating": "5",
			"worstRating": "1"
		},
		"author": {
			"@type": "Person",
			"name": "Ahmet Yılmaz"
		},
		"reviewBody": "Hüseyin Bey ile çalışmak çok keyifliydi. Kliniğimiz için hazırladığı web sitesi beklentilerimizin üzerinde oldu."
	},
	"hasOfferCatalog": {
		"@type": "OfferCatalog",
		"name": "Web Tasarım Hizmetleri",
		"itemListElement": [
			{
				"@type": "Offer",
				"itemOffered": {
					"@type": "Service",
					"name": "Başlangıç Paketi",
					"description": "Kişisel ve küçük işletmeler için web sitesi",
					"price": "4500",
					"priceCurrency": "TRY"
				}
			},
			{
				"@type": "Offer",
				"itemOffered": {
					"@type": "Service",
					"name": "Profesyonel Paket",
					"description": "Orta ölçekli işletmeler için web çözümleri",
					"price": "7500",
					"priceCurrency": "TRY"
				}
			},
			{
				"@type": "Offer",
				"itemOffered": {
					"@type": "Service",
					"name": "Kurumsal Paket",
					"description": "Büyük işletmeler için kapsamlı web çözümleri",
					"price": "12500",
					"priceCurrency": "TRY"
				}
			}
		]
	}
};

export const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	"mainEntity": [
		{
			"@type": "Question",
			"name": "Web sitesi yaptırmanın maliyeti nedir?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "Web sitesi maliyetleri 4.500₺'den başlamaktadır. Paketlerimiz ihtiyacınıza göre özelleştirilebilir ve taksit imkanı sunulmaktadır."
			}
		},
		{
			"@type": "Question",
			"name": "Web sitesi ne kadar sürede hazır olur?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "Standart web siteleri 5-7 iş günü içerisinde teslim edilmektedir. E-ticaret siteleri için bu süre projenin kapsamına göre değişebilir."
			}
		}
	]
};

export const schemas = [businessSchema, organizationSchema, serviceSchema, faqSchema];