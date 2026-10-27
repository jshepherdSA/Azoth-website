import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { contactInfo } from "@/lib/nav";

// Structured data (schema.org JSON-LD): hidden facts for search engines, built
// only from details already published on the site. Render with <JsonLd />.

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

const address = {
  "@type": "PostalAddress",
  streetAddress: "1099 Highland Drive",
  addressLocality: "Ann Arbor",
  addressRegion: "MI",
  postalCode: "48108",
  addressCountry: "US",
};

const telephone = "+1-734-669-3797";

const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

/** The company, on every page (root layout). Founding year is from the About page. */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Azoth",
  alternateName: "Azoth 3D",
  url: `${SITE_URL}/`,
  logo: abs("/apple-icon.png"),
  email: contactInfo.email,
  telephone,
  address,
  foundingDate: "2017",
  sameAs: [contactInfo.linkedin],
};

/** The site's name, on the home page. */
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Azoth 3D",
  url: `${SITE_URL}/`,
  publisher: { "@id": ORGANIZATION_ID },
};

/** The Ann Arbor location, on the contact page. No hours or map coordinates: the site doesn't state them. */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/contact#location`,
  name: "Azoth",
  url: `${SITE_URL}/contact`,
  image: abs("/images/og-default.jpg"),
  email: contactInfo.email,
  telephone,
  address,
  parentOrganization: { "@id": ORGANIZATION_ID },
};

/** A service page. `description` is the page's own meta description. */
export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: abs(path),
    provider: { "@id": ORGANIZATION_ID },
  };
}

/** Breadcrumbs as shown in a page banner. The last crumb (the current page) has no link. */
export function breadcrumbJsonLd(crumbs: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      ...(crumb.href ? { item: abs(crumb.href) } : {}),
    })),
  };
}

/** "June 2, 2026" -> "2026-06-02" (dates as stored on blog posts). */
export function isoDate(date: string) {
  const d = new Date(`${date} 12:00 UTC`);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10);
}

/** A blog post. */
export function articleJsonLd(post: { slug: string; title: string; date: string; image: string | null }) {
  const url = `${SITE_URL}/azoth-blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    url,
    mainEntityOfPage: url,
    datePublished: isoDate(post.date),
    image: abs(post.image ?? "/images/og-default.jpg"),
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
  };
}

// Link previews (LinkedIn, Slack, email). Pages that set their own openGraph
// replace the root layout's entirely, so they spread this in first.
export const defaultShareImage = {
  url: "/images/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Azoth production additive manufacturing",
};

export const baseOpenGraph: NonNullable<Metadata["openGraph"]> = {
  type: "website",
  siteName: "Azoth 3D",
  locale: "en_US",
  images: [defaultShareImage],
};
