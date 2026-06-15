import type { MetadataRoute } from "next";
import { getAllPortfolioItems } from "@/lib/portfolio";

const baseUrl = "https://www.illustrex.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/portfolio", "/services", "/about", "/contact", "/thank-you"];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const portfolioEntries = getAllPortfolioItems().map((item) => ({
    url: `${baseUrl}/portfolio/${item.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...portfolioEntries];
}
