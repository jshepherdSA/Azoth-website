import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { PageBanner } from "@/components/page-banner";
import { BlogGrid } from "@/components/blog-grid";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Insights, technical guides, and updates from Azoth on metal additive manufacturing, materials, design for AM, and digital inventory.",
};

export default function BlogPage() {
  return (
    <>
      <PageBanner title="Blogs" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blogs" }]} />

      <section className="bg-white py-20">
        <div className="container-az">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Insights</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              The Azoth Blog
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              Technical guides, materials deep-dives, design tips, and the latest from our additive
              manufacturing team.
            </p>
          </div>

          <div className="mt-12">
            <BlogGrid />
          </div>
        </div>
      </section>
    </>
  );
}
