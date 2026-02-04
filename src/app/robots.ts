import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/", "/_next/", "/admin/"],
			},
			{
				userAgent: "Googlebot",
				allow: "/",
				disallow: ["/api/", "/_next/", "/admin/"],
			},
		],
		sitemap: "https://dailydoseofcontent.de/sitemap.xml",
		host: "https://dailydoseofcontent.de",
	};
}
