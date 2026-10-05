import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CircleArrow } from "@/components/circle-arrow";
import { Blocks, Checklist, RichText, SpecTable } from "@/components/guidelines-blocks";
import { GuidelinesContact } from "@/components/guidelines-contact";
import {
  SITE_URL,
  getTab,
  guidelineContent,
  guidelineTabs,
  nextSteps,
  tabHref,
} from "@/lib/design-guidelines";

type Params = { slug: string };

// Only the tabs in the data file exist; anything else is a 404.
export const dynamicParams = false;

// Unpublished tabs are built as well. They are hidden from the sidebar, the hub
// and the sitemap, and set to noindex below.
export function generateStaticParams() {
  return guidelineTabs.map((tab) => ({ slug: tab.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tab = getTab(slug);
  if (!tab) return {};
  return {
    // The data file holds the full title, so the site-wide template is skipped.
    title: { absolute: tab.seoTitle },
    description: tab.seoDescription,
    alternates: { canonical: `${SITE_URL}${tabHref(tab)}` },
    ...(tab.published ? {} : { robots: { index: false, follow: false } }),
  };
}

const h2Class = "text-2xl font-extrabold text-ink sm:text-3xl";
// Jump targets stop just below the sticky site header, which is 153px tall on
// phones and tablets and 203px tall on desktop.
const anchorClass = "scroll-mt-[169px] lg:scroll-mt-[227px]";
const sectionClass = `mt-14 ${anchorClass}`;

export default async function GuidelinePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const tab = getTab(slug);
  const content = guidelineContent[slug];
  if (!tab || !content) notFound();

  const steps = nextSteps(tab).flatMap((group) => group.tabs);

  // Table of contents: one entry per template section that has content.
  const toc = [
    content.glance && { id: "at-a-glance", label: "At a Glance" },
    content.sizing && { id: "part-size", label: content.sizing.toc ?? "Part Size" },
    content.materials && { id: "materials", label: content.materials.toc ?? "Materials" },
    content.send && { id: "what-to-send-us", label: content.send.toc ?? "What to Send Us" },
    content.rules && { id: "design-rules", label: "Design Rules" },
    content.expect && { id: "what-to-expect", label: content.expect.toc ?? "What to Expect" },
    content.checklist && { id: "pre-flight-checklist", label: "Pre-Flight Checklist" },
    steps.length > 0 && { id: "next-steps", label: "Next Steps" },
  ].filter((entry): entry is { id: string; label: string } => Boolean(entry));

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Design Guidelines", item: `${SITE_URL}/design-guidelines` },
      { "@type": "ListItem", position: 3, name: tab.title, item: `${SITE_URL}${tabHref(tab)}` },
    ],
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Intro. The H1 is in the banner above (see layout.tsx). */}
      <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted-soft">
        {content.intro.map((paragraph) => (
          <p key={paragraph}>
            <RichText text={paragraph} />
          </p>
        ))}
      </div>
      {tab.capability && (
        <p className="mt-4">
          <Link href={tab.capability.href} className="link-az">
            Learn more about {tab.capability.label} at Azoth
          </Link>
        </p>
      )}

      {/* Table of contents */}
      <nav aria-label="On this page" className="mt-8 border-y border-hairline py-5">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">On This Page</p>
        <ol className="mt-3 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2 xl:grid-cols-4">
          {toc.map((entry, i) => (
            <li key={entry.id}>
              <a
                href={`#${entry.id}`}
                className="flex gap-2 font-medium text-ink-soft transition-colors hover:text-brand"
              >
                <span className="font-bold tabular-nums text-ink/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {entry.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {content.glance && (
        <section id="at-a-glance" className={sectionClass}>
          <h2 className={h2Class}>{content.glance.title}</h2>
          <SpecTable rows={content.glance.rows} />
        </section>
      )}

      {content.sizing && (
        <section id="part-size" className={sectionClass}>
          <h2 className={h2Class}>{content.sizing.title}</h2>
          <Blocks blocks={content.sizing.blocks} />
        </section>
      )}

      {content.materials && (
        <section id="materials" className={sectionClass}>
          <h2 className={h2Class}>{content.materials.title}</h2>
          <Blocks blocks={content.materials.blocks} />
        </section>
      )}

      {content.send && (
        <section id="what-to-send-us" className={sectionClass}>
          <h2 className={h2Class}>{content.send.title}</h2>
          <Blocks blocks={content.send.blocks} />
        </section>
      )}

      {content.rules && (
        <section id="design-rules" className={sectionClass}>
          <h2 className={h2Class}>{content.rules.title}</h2>
          <div className="mt-8 space-y-10">
            {content.rules.rules.map((rule) => (
              <div key={rule.id} id={rule.id} className={anchorClass}>
                <h3 className="text-xl font-bold text-ink">{rule.title}</h3>
                <Blocks blocks={rule.blocks} />
              </div>
            ))}
          </div>
        </section>
      )}

      {content.expect && (
        <section id="what-to-expect" className={sectionClass}>
          <h2 className={h2Class}>{content.expect.title}</h2>
          <Blocks blocks={content.expect.blocks} />
        </section>
      )}

      {content.checklist && (
        <section id="pre-flight-checklist" className={sectionClass}>
          <h2 className={h2Class}>{content.checklist.title}</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted-soft">
            Review this list before you send your part.
          </p>
          <Checklist items={content.checklist.items} />
        </section>
      )}

      {/* Next steps: the published tabs that come later in the workflow. */}
      {steps.length > 0 && (
        <section id="next-steps" className={sectionClass}>
          <h2 className={h2Class}>Next Steps in the Azoth Workflow</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted-soft">
            {`The steps that can follow ${tab.title} in Azoth's vertically integrated workflow.`}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {steps.map((step) => (
              <Link
                key={step.slug}
                href={tabHref(step)}
                className="group flex items-center justify-between gap-4 rounded-xl border border-hairline bg-white p-5 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span>
                  <span className="block font-bold text-ink transition-colors group-hover:text-brand">
                    {step.title}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted-soft">Design Guidelines</span>
                </span>
                <CircleArrow tone="solid" className="shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      )}

      <GuidelinesContact as={steps.length > 0 ? "h3" : "h2"} />
    </article>
  );
}
