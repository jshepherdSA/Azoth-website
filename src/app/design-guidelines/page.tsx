import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBanner } from "@/components/page-banner";
import { CircleArrow } from "@/components/circle-arrow";

export const metadata: Metadata = {
  title: "Design Guidelines",
  description:
    "Design for additive manufacturing guidelines from Azoth — file prep, ideal part size, wall thickness, hole sizes, aspect ratios, text, and exit holes for metal binder jetting.",
};

const sections = [
  {
    id: "preparing-your-file",
    title: "Preparing Your File",
    image: "/images/dg1.png",
    body: (
      <div className="space-y-4">
        <p>
          All of Azoth&apos;s manufacturing processes start with a digital model. Native files from
          SolidWorks (.SLDPRT) and Autodesk Fusion 360 (.F3D) are best so that no details get lost in
          translation. Likewise, a STEP file is a universal format compatible with all CAD software
          and is ideal to submit (.STP or .STEP).
        </p>
        <p>
          If CAD files are not available, an STL file is accepted across all additive manufacturing.
          An STL is a tessellated model that approximates the original design. Too low a resolution
          will look faceted and jagged; too high won&apos;t increase quality and makes the file size
          unwieldy.
        </p>
      </div>
    ),
  },
  {
    id: "ideal-part-size",
    title: "Ideal Part Size",
    image: "/images/dg3.png",
    body: (
      <p>
        Small and complex parts are Azoth&apos;s specialty. As a rule of thumb,{" "}
        <strong className="text-ink">5mm to 75mm</strong> is optimal (about the size of your fist or
        smaller). We recommend not exceeding <strong className="text-ink">150mm</strong> in the
        longest dimension—though larger components are considered case by case.
      </p>
    ),
  },
  {
    id: "minimum-wall-thickness",
    title: "Minimum Wall Thickness",
    image: "/images/dg4.png",
    body: (
      <p>
        Minimum wall thickness should be no less than{" "}
        <strong className="text-ink">0.30mm</strong> on any cross-section of any part feature. This
        also applies to minimum distances between walls. Requirements may vary depending on size and
        feature shape.
      </p>
    ),
  },
  {
    id: "hole-size-and-internal-channels",
    title: "Hole Size & Internal Channels",
    image: "/images/dg5.png",
    body: (
      <p>
        The minimum hole size achievable is <strong className="text-ink">0.20mm</strong> in diameter.
        Inaccessible internal channels should be no less than{" "}
        <strong className="text-ink">3mm</strong> in diameter. These values depend on depth,
        surrounding geometry, and accessibility of the feature.
      </p>
    ),
  },
  {
    id: "edges-and-corners",
    title: "Edges & Corners",
    image: "/images/dg6.png",
    body: (
      <p>
        Sharp edges are prone to chipping prior to sintering and likely to propagate cracks. Adding
        fillets and chamfers to all sharp edges and corners minimizes risk without adding any
        additional cost or lead time.
      </p>
    ),
  },
  {
    id: "aspect-ratio",
    title: "Aspect Ratio",
    image: "/images/dg7.png",
    body: (
      <div className="space-y-4">
        <p>
          An aspect ratio is the proportion of a feature&apos;s dimensions—the larger one dimension
          is versus another, the larger the aspect ratio. The maximum recommended ratio depends on
          the feature type:
        </p>
        <ul className="space-y-2">
          {[
            ["Height-to-Wall Thickness", "≤ 8:1"],
            ["Slot Depth-to-Width (< 2mm width)", "≤ 4:1"],
            ["Slot Depth-to-Width (> 2mm width)", "≤ 8:1"],
            ["Hole Depth-to-Diameter (< 2mm dia.)", "4:1"],
            ["Hole Depth-to-Diameter (> 2mm dia.)", "8:1"],
          ].map(([label, ratio]) => (
            <li key={label} className="flex items-center justify-between gap-4 rounded-md bg-surface px-4 py-2.5 text-sm">
              <span className="text-ink-soft">{label}</span>
              <span className="font-bold text-brand">{ratio}</span>
            </li>
          ))}
        </ul>
        <p>
          Features exceeding the recommended ratio are likely to fail—more prone to fracture, hard to
          depowder, and susceptible to warping during sintering. Enclosed walls, supports, gussets,
          and ribs can minimize risk.
        </p>
      </div>
    ),
  },
  {
    id: "text-and-surface-texture",
    title: "Text & Surface Texture",
    image: "/images/dg8.png",
    body: (
      <div className="space-y-4">
        <p>
          Part numbers, logos, and patterns can be easily implemented at no additional cost. Surface
          textures can also be added for a unique look or improved functionality.
        </p>
        <p>
          <strong className="text-ink">Debossed text:</strong> spacing at least 0.3mm apart at all
          cross-sections, embedded a minimum of 0.4mm for legibility. Letters with free-standing posts
          (e.g. &ldquo;A&rdquo;) must follow the 8:1 aspect-ratio criterion.
        </p>
        <p>
          <strong className="text-ink">Embossed text:</strong> spacing at least 0.3mm apart at all
          cross-sections, following the 8:1 design ratio for lettering height.
        </p>
        <p>
          <strong className="text-ink">Best fonts:</strong> Arial Rounded MT Bold, Arial Black,
          Calibri.
        </p>
      </div>
    ),
  },
  {
    id: "exit-holes",
    title: "Exit Holes",
    image: "/images/dg9.png",
    body: (
      <p>
        Exit holes provide an opening for excess powder to escape during depowdering. Without them,
        interior channels can only reach so deep before powder removal becomes challenging—risking
        craters on walls, eroded threads, and rounded corners.
      </p>
    ),
  },
];

export default function DesignGuidelinesPage() {
  return (
    <>
      <PageBanner
        title="Design Guidelines"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Design Guidelines" }]}
      />

      <section className="bg-white py-20">
        <div className="container-az">
          {/* Coming soon callout */}
          <div className="rounded-2xl border border-hairline bg-surface p-6 text-center sm:p-8">
            <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
              Coming Soon — Our Comprehensive Guide
            </h2>
            <p className="mt-2 text-muted-soft">
              A preview of Azoth&apos;s design-for-additive-manufacturing guidelines. Use the basics
              below to prepare your parts for production.
            </p>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[220px_1fr]">
            {/* TOC */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">On this page</p>
              <nav className="mt-4">
                <ol className="space-y-1">
                  {sections.map((section, i) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="flex gap-2 rounded-md px-3 py-2 text-sm text-muted-soft transition-colors hover:bg-surface hover:text-brand"
                      >
                        <span className="font-bold text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* Sections */}
            <div className="space-y-16">
              {sections.map((section, i) => (
                <article key={section.id} id={section.id} className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <h3 className="text-2xl font-extrabold text-ink">{section.title}</h3>
                  </div>
                  <div className="mt-6 grid items-start gap-8 md:grid-cols-[1fr_300px]">
                    <div className="leading-relaxed text-muted-soft">{section.body}</div>
                    <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface ring-1 ring-hairline">
                      <Image
                        src={section.image}
                        alt={`${section.title} diagram`}
                        fill
                        className="object-contain p-4"
                        sizes="300px"
                      />
                    </div>
                  </div>
                </article>
              ))}

              {/* CTA */}
              <div className="rounded-2xl bg-ink p-8 text-center text-white sm:p-10">
                <h3 className="text-2xl font-extrabold">Still Have Questions?</h3>
                <p className="mx-auto mt-2 max-w-xl text-white/80">
                  Contact us today and our Applications Engineering team will get back to you as soon
                  as possible.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-2.5 rounded-md bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-hover"
                  >
                    Upload Your Parts
                    <CircleArrow tone="onRed" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-md border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
