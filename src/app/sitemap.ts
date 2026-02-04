import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://dailydoseofcontent.de";

	// Hauptseiten mit hoher Priorität
	const mainPages = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 1.0,
		},
		{
			url: `${baseUrl}/service`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/referenzen`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/ueber-uns`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/kontakt`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/faq`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.7,
		},
	];

	// Rechtliche Seiten mit niedriger Priorität (aber indexierbar für Vertrauen)
	const legalPages = [
		{
			url: `${baseUrl}/impressum`,
			lastModified: new Date(),
			changeFrequency: "yearly" as const,
			priority: 0.3,
		},
		{
			url: `${baseUrl}/datenschutz`,
			lastModified: new Date(),
			changeFrequency: "yearly" as const,
			priority: 0.3,
		},
		{
			url: `${baseUrl}/agb`,
			lastModified: new Date(),
			changeFrequency: "yearly" as const,
			priority: 0.3,
		},
	];

	return [...mainPages, ...legalPages];
}
