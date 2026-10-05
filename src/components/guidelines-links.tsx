import { Fragment } from "react";
import Link from "next/link";
import { getTab, tabHeading, tabHref, type GuidelineTab } from "@/lib/design-guidelines";

// Text link(s) from a capability page to its matching design guidelines.
// Unpublished tabs are skipped, so a link shows up on its own once that tab's
// `published` flag (or CNC_LIVE) is switched on in src/lib/design-guidelines.ts.
export function GuidelinesLinks({ slugs, className = "" }: { slugs: string[]; className?: string }) {
  const tabs = slugs
    .map(getTab)
    .filter((tab): tab is GuidelineTab => tab !== undefined && tab.published);
  if (tabs.length === 0) return null;

  if (tabs.length === 1) {
    return (
      <p className={className}>
        Designing a part for this process? Read the{" "}
        <Link href={tabHref(tabs[0])} className="link-az">
          {tabHeading(tabs[0])}
        </Link>
        .
      </p>
    );
  }

  return (
    <p className={className}>
      Design guidelines:{" "}
      {tabs.map((tab, i) => (
        <Fragment key={tab.slug}>
          {i > 0 && ", "}
          <Link href={tabHref(tab)} className="link-az">
            {tab.title}
          </Link>
        </Fragment>
      ))}
    </p>
  );
}
