import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

export default function robots(): MetadataRoute.Robots {
  return siteConfig.domain
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: `${siteConfig.domain}/sitemap.xml` }
    : { rules: { userAgent: "*", disallow: "/" } };
}
