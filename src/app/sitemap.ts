
import type { MetadataRoute } from "next";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.SITE_URL;

  // Do not publish a sitemap with a placeholder domain.
  if (!siteUrl) {
    return [];
  }

  const baseUrl = siteUrl.replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/careers",
    "/contact",
  ];

  const staticPages: MetadataRoute.Sitemap =
    staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.8,
    }));

  const servicePages: MetadataRoute.Sitemap =
    services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticPages, ...servicePages];
}