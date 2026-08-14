import type { MetadataRoute } from "next";
import { showcaseItems } from "@/lib/showcase";
import { blogPostsFull } from "@/lib/blog-posts";

const BASE_URL = "https://azoth3d.com";

// Concrete (non-dynamic) routes, mirroring the app/ page tree. Dynamic detail
// pages (/azoth-blog/[slug], /azoth-showcase/[slug]) are appended below from the
// same data that drives their generateStaticParams, so the sitemap can't drift
// from what actually renders.
const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/careers", priority: 0.6, changeFrequency: "monthly" },
  { path: "/capabilities", priority: 0.8, changeFrequency: "monthly" },
  { path: "/capabilities/binder-jetting", priority: 0.7, changeFrequency: "monthly" },
  { path: "/capabilities/lithography-metal-manufacturing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/capabilities/polymer-printing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/capabilities/post-processing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/capabilities/quality", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
  { path: "/industries/automotive", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/consumer-electronics", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/defense-industry", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/medical", priority: 0.7, changeFrequency: "monthly" },
  { path: "/materials", priority: 0.7, changeFrequency: "monthly" },
  { path: "/tomo", priority: 0.6, changeFrequency: "monthly" },
  { path: "/white-paper", priority: 0.7, changeFrequency: "monthly" },
  { path: "/azoth-blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/azoth-showcase", priority: 0.8, changeFrequency: "weekly" },
  { path: "/news", priority: 0.6, changeFrequency: "weekly" },
  { path: "/faqs", priority: 0.5, changeFrequency: "monthly" },
  { path: "/design-guidelines", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/quote", priority: 0.8, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" },
  { path: "/accessibility-policy", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const showcaseEntries: MetadataRoute.Sitemap = showcaseItems.map((item) => ({
    url: `${BASE_URL}/azoth-showcase/${item.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPostsFull.map((post) => ({
    url: `${BASE_URL}/azoth-blog/${post.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...showcaseEntries, ...blogEntries];
}
