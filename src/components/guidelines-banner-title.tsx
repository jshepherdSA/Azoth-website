"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

// The H1 and breadcrumb inside the Design Guidelines banner. The banner sits in
// the shared layout, so this reads the active tab from the route. That keeps one
// H1 per page: the hub title on the hub and "[Process] Design Guidelines" on a
// tab.
export function GuidelinesBannerTitle({
  tabs,
}: {
  tabs: { slug: string; title: string; heading: string }[];
}) {
  const segment = useSelectedLayoutSegment();
  const tab = tabs.find((t) => t.slug === segment);

  const crumbs: { label: string; href?: string }[] = tab
    ? [
        { label: "Home", href: "/" },
        { label: "Design Guidelines", href: "/design-guidelines" },
        { label: tab.title },
      ]
    : [{ label: "Home", href: "/" }, { label: "Design Guidelines" }];

  return (
    <div className="relative lg:max-w-[56%]">
      <h1 className="text-balance text-4xl font-extrabold text-ink sm:text-5xl">
        {tab ? tab.heading : "Design Guidelines"}
      </h1>
      <nav aria-label="Breadcrumb" className="mt-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-soft">
          {crumbs.map((crumb, i) => (
            <li key={crumb.label} className="flex items-center gap-2">
              {i > 0 && <span className="text-ink/30">/</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="transition-colors hover:text-brand">
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-semibold text-ink">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
