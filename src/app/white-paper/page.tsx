import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { PageBanner } from "@/components/page-banner";
import { CircleArrow } from "@/components/circle-arrow";

export const metadata: Metadata = {
  title: "White Papers",
  description:
    "Download Azoth white papers and case studies on metal binder jetting, material jetting, laser powder bed fusion, and production additive manufacturing.",
};

const whitePapers = [
  {
    title: "Metal Binder Jetting Of Automotive Components",
    cover: "/images/figure-different-jeep-transfer-cases-and-shift-knob-emblems.jpg",
    pdf: "/docs/metal-binder-jetting-of-automotive-components.pdf",
    excerpt:
      "In this work, Metal Binder Jetting is presented as a fabrication process for automotive components for vehicle interiors…",
  },
  {
    title: "Metal Binder Jetting & Metal Material Jetting As Complementary Technologies: A User's Perspective",
    cover: "/images/azoth-sintering.jpg",
    pdf: "/docs/mbj-and-mmj-as-complementary-technologies.pdf",
    excerpt:
      "Metal Binder Jetting and Metal Material Jetting are two Additive Manufacturing techniques included under the metal AM umbrella…",
  },
  {
    title: "Case Study: Metal Binder Jetting For Fluid Matter Exchanger",
    cover: "/images/case-study-metal-binder-jetting-for-fluid-matter-exchanger.jpg",
    pdf: "/docs/case-study-fluid-matter-exchanger.pdf",
    excerpt:
      "A fluid matter exchanger is a device designed to efficiently transfer heat or mass between two fluid streams, typically…",
  },
  {
    title: "Metal Binder Jetting Vs. Laser Powder Bed Fusion",
    cover: "/images/metal-binder-jetting-vs.-laser-powder-bed-fusion.jpg",
    pdf: "/docs/metal-binder-jetting-vs-laser-powder-bed-fusion.pdf",
    excerpt:
      "The metal binder jetting process is a two-step process where the components are printed and densified in separate steps…",
  },
];

function DownloadIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 3v9m0 0 3.5-3.5M10 12 6.5 8.5M4 15.5h12" />
    </svg>
  );
}

export default function WhitePaperPage() {
  return (
    <>
      <PageBanner
        title="White Papers"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "White Papers" }]}
      />

      {/* White paper cards */}
      <section className="bg-white py-20">
        <div className="container-az">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Research & Insights</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">White Papers</h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              In-depth technical papers and case studies on metal additive manufacturing—download and
              explore.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whitePapers.map((paper) => (
              <article
                key={paper.title}
                className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-hairline transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <Image
                    src={paper.cover}
                    alt={paper.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="text-base font-bold leading-snug text-ink">{paper.title}</h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-muted-soft">{paper.excerpt}</p>
                  <a
                    href={paper.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
                  >
                    <DownloadIcon /> Download
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2.5 rounded-md bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Upload Your Parts
              <CircleArrow tone="onRed" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
