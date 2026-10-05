import { GuidelinesBanner } from "@/components/guidelines-banner";
import { GuidelinesSidebar } from "@/components/guidelines-sidebar";
import { guidelineTabs, publishedGroups, tabHeading } from "@/lib/design-guidelines";

// Shared shell for the Design Guidelines hub and every guidelines tab: the page
// banner, a sticky left sidebar listing the published tabs, and the page
// content on the right.
export default function DesignGuidelinesLayout({ children }: { children: React.ReactNode }) {
  // Only plain slug/title pairs are handed to the client components, so the
  // page content in the data file stays out of the browser bundle.
  const groups = publishedGroups().map((group) => ({
    name: group.name,
    tabs: group.tabs.map((tab) => ({ slug: tab.slug, title: tab.title })),
  }));
  const bannerTabs = guidelineTabs.map((tab) => ({
    slug: tab.slug,
    title: tab.title,
    heading: tabHeading(tab),
  }));

  return (
    <>
      <GuidelinesBanner tabs={bannerTabs} />

      <section className="bg-white py-12 lg:py-16">
        <div className="container-az lg:grid lg:grid-cols-[232px_minmax(0,1fr)] lg:gap-12">
          <GuidelinesSidebar groups={groups} />
          <div className="mt-8 min-w-0 lg:mt-0">{children}</div>
        </div>
      </section>
    </>
  );
}
