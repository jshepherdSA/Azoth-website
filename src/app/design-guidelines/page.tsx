import type { Metadata } from "next";
import Link from "next/link";
import { CircleArrow } from "@/components/circle-arrow";
import { GuidelinesContact } from "@/components/guidelines-contact";
import { SITE_URL, hubIntro, publishedGroups, tabHeading, tabHref } from "@/lib/design-guidelines";

export const metadata: Metadata = {
  title: "Design Guidelines",
  description:
    "Design guidelines from Azoth for binder jetting, LMM, heat treatment, finishing and inspection: file preparation, part size, wall thickness and tolerances.",
  alternates: { canonical: `${SITE_URL}/design-guidelines` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Design Guidelines", item: `${SITE_URL}/design-guidelines` },
  ],
};

// Hub: an intro plus a card for every published tab, grouped like the sidebar.
// The banner (with the H1) and the sidebar come from layout.tsx.
export default function DesignGuidelinesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <p className="max-w-3xl text-lg leading-relaxed text-muted-soft">{hubIntro}</p>

      {publishedGroups().map((group) => (
        <section key={group.name} className="mt-12">
          <h2 className="text-2xl font-extrabold text-ink">{group.name}</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {group.tabs.map((tab) => (
              <Link
                key={tab.slug}
                href={tabHref(tab)}
                className="group flex flex-col rounded-2xl border border-hairline bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-brand">
                  {tabHeading(tab)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-soft">{tab.summary}</p>
                <span className="link-az mt-4 inline-flex items-center gap-2 text-sm">
                  View Guidelines
                  <CircleArrow tone="solid" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <GuidelinesContact as="h2" />
    </>
  );
}
