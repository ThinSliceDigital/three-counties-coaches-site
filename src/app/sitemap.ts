import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const routes = [
    "",
    "/tours",
    "/tours/5-day-scotland",
    "/tours/7-day-scotland-lake-district",
    "/tours/10-day-uk-highlights",
    "/tours/10-day-european-group-tour",
    "/airport-transfers",
    "/golf-transport",
    "/schools",
    "/fleet",
    "/locations",
    "/locations/gloucestershire",
    "/locations/worcestershire",
    "/locations/herefordshire",
    "/quote",
    "/contact",
    "/privacy-terms",
    "/faq",
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
