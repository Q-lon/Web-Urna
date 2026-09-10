import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.domain) return [];
  const routes = ["", "/urnas", "/como-funciona", "/preguntas-frecuentes", "/contacto", ...products.map((p) => `/urnas/${p.slug}`)];
  return routes.map((route) => ({ url: `${siteConfig.domain}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : .7 }));
}
