import { GuidelinesBannerTitle } from "@/components/guidelines-banner-title";
import { GuidelinesBlueprint } from "@/components/guidelines-blueprint";

// Banner for the Design Guidelines hub and tabs. Unlike the photo banner on the
// rest of the site, this one is styled as a drawing sheet: red graph paper and
// an oversized, cropped technical drawing in red on white, with the heading in
// black.
export function GuidelinesBanner({
  tabs,
}: {
  tabs: { slug: string; title: string; heading: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-hairline bg-white">
      {/* Graph paper, full width. */}
      <div aria-hidden className="bg-blueprint-grid absolute inset-0 -z-30" />
      {/* The drawing. On phones and tablets it fills the banner behind the
          heading, dimmed. On desktop it takes the right two thirds and fades in
          from the left, so it runs out from under the heading. The width cap
          (1052px = the full 1160-unit canvas at banner height) keeps the scale
          the same on very wide screens, so nothing gets cropped off the top. */}
      <GuidelinesBlueprint className="pointer-events-none absolute inset-y-0 right-0 -z-20 h-full w-full opacity-35 md:opacity-50 lg:w-[68%] lg:max-w-[1052px] lg:opacity-100 lg:[mask-image:linear-gradient(to_right,transparent,black_38%)]" />
      {/* White wash from the left so the heading stays crisp over the grid. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-white/85 via-white/60 to-white/25 lg:from-white lg:from-15% lg:via-white/50 lg:via-40% lg:to-transparent lg:to-65%"
      />
      {/* One fixed height from desktop up, so the banner (and the drawing in it)
          stays the same size whether the title takes one line or two. */}
      <div className="container-az relative flex min-h-[15rem] flex-col justify-center py-12 lg:min-h-[17rem]">
        <GuidelinesBannerTitle tabs={tabs} />
      </div>
    </section>
  );
}
