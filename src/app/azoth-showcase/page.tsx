import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { PageBanner } from "@/components/page-banner";
import { ShowcaseGrid } from "@/components/showcase-grid";

export const metadata: Metadata = {
  title: "Azoth Showcase",
  description:
    "A showcase of production parts Azoth has manufactured across automotive, medical, defense, luxury goods, and industrial applications using metal additive manufacturing.",
};

export default function ShowcasePage() {
  return (
    <>
      <PageBanner
        title="Azoth Showcase"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Azoth Showcase" }]}
      />

      <section className="bg-white py-20">
        <div className="container-az">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Work</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Production Parts Across Every Industry
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              A sampling of the small, complex, end-use components Azoth produces—filter by industry
              to explore parts in automotive, medical, defense, luxury goods, and more.
            </p>
          </div>

          <div className="mt-12">
            <ShowcaseGrid />
          </div>
        </div>
      </section>
    </>
  );
}
