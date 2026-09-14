import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { PageBanner } from "@/components/page-banner";
import { CircleArrow } from "@/components/circle-arrow";

export const metadata: Metadata = {
  title: "Polymer Printing",
  description:
    "Azoth's experts cover a wide array of plastic additive manufacturing technologies, FDM, SLS, SLA, DLP, HP Multi Jet Fusion, reinforcement fibers, and more.",
};

// Static photo cards, one per technology family. Each `entries` item keeps its
// original technology name as a subheading and its original description; an
// entry with no body renders as a plain capability line.
// Photos are placeholder picks pending client confirmation.
// To add the pending 4th card, append one entry here: the desktop row switches
// from 3 across to 4 across on its own (see `lgColsClass` below).
const technologies: {
  title: string;
  image: string;
  entries: { label: string; body?: string }[];
}[] = [
  {
    title: "FDM",
    image: "/images/polymer-fdm-part-nest-fixture.jpg",
    entries: [
      {
        label: "Fused Deposition Modeling (FDM) Printing",
        body: "Fused deposition modeling, or FDM 3D printing, is a method of additive manufacturing where layers of material are fused together in a pattern to create an object. The material is melted just past its glass transition temperature, then extruded next to or on top of previous extrusions, building an object layer by layer.",
      },
      {
        label: "High-Quality Reinforcement Fibers",
        body: "Reinforcement fibers are either natural fibers (animal, mineral, or cellulose) or synthetic fibers such as glass, carbon, polymers, and kevlar, designed to increase rigidity, strength, and the part's impact resistance.",
      },
      { label: "Full-color FDM" },
    ],
  },
  {
    title: "SLA / DLP",
    image: "/images/polymer-sla-medical-robotic-housing.jpg",
    entries: [
      {
        label: "Stereolithography (SLA) Printing",
        body: "Stereolithography, or SLA printing, is a form of 3D printing used to create models, prototypes, patterns, and production parts layer by layer using a photochemical process in which light causes chemical monomers and oligomers to cross-link into polymers. Those polymers then make up the body of a three-dimensional solid.",
      },
      {
        label: "Digital Light Processing (DLP) 3D Printing",
        body: "A DLP 3D printer is used in an additive manufacturing process where objects are created using a digital light projector (DLP) as the light source for curing photo-reactive polymers.",
      },
    ],
  },
  {
    title: "SLS / HP Multi Jet Fusion",
    image: "/images/polymer-generative-support-bracket.jpg",
    entries: [
      {
        label: "Selective Laser Sintering (SLS)",
        body: "SLS (Selective Laser Sintering) is an additive manufacturing method. It creates parts by sintering fine polymer powder particles to fuse them together locally. Your plastic part is created layer by layer, according to your 3D model.",
      },
      {
        label: "HP Multi-Jet Fusion 3D Printing",
        body: "Unlike other 3D printing technologies, HP Multi Jet Fusion prints each layer of new material and agents on top of a previous layer that is still molten, so both layers fuse completely, delivering strong, detailed, and functional 3D-printed parts.",
      },
    ],
  },
];

// Complete, fixed class names (never interpolated) so Tailwind always emits them.
const lgColsClass = technologies.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

export default function PolymerPrintingPage() {
  return (
    <>
      <PageBanner
        title="Polymer Printing"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Capabilities", href: "/capabilities" },
          { label: "Polymer Printing" },
        ]}
      />

      {/* Intro: photo fills the left half, content sits on white at the right,
          with a slightly diagonal divider between them. */}
      <section className="relative bg-white">
        {/* Phone / tablet: photo stacks above the content */}
        <div className="relative h-72 w-full lg:hidden">
          <Image
            src="/images/azoth-air-nozzle.jpg"
            alt="Polymer 3D-printed air nozzle"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Desktop: photo bleeds to the left edge, its right side cut on a slight
            diagonal so the divider leans rather than sitting perfectly vertical. */}
        <div
          className="absolute inset-y-0 left-0 hidden w-1/2 lg:block"
          style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 0 100%)" }}
        >
          <Image
            src="/images/azoth-air-nozzle.jpg"
            alt="Polymer 3D-printed air nozzle"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>

        {/* On landscape/desktop the hero fills the rest of the first screen
            (447px = the sticky header + page banner above it, constant from
            1024px up), so the next band never peeks above the fold. Both bands
            use the same height so the diagonal keeps one angle across the
            horizontal divider. min-h is a floor for short screens. */}
        <div className="container-az relative flex items-center py-16 lg:h-[calc(100vh-447px)] lg:min-h-[26rem] lg:py-24">
          <div className="lg:ml-auto lg:w-1/2 lg:pl-12">
            <Eyebrow>Plastic Additive Manufacturing</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">Polymer Printing</h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              Azoth&apos;s team of experts can assist with a wide array of plastic additive (3D)
              manufacturing technologies. Whether it is producing at your plant or at our technology
              center in Ann Arbor, Michigan, Azoth will work with your engineers to employ the latest
              in plastic additive technology.
            </p>
            <Link
              href="/materials"
              className="mt-6 inline-flex items-center gap-2.5 rounded-md bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              View Materials
              <CircleArrow tone="onRed" />
            </Link>
          </div>
        </div>
      </section>

      {/* Second band: mirrors the hero so the two together read as four
          quadrants, split by the continuing diagonal and the horizontal rule
          below the hero. Content left, photo right. */}
      <section className="relative border-t border-hairline bg-white">
        {/* Desktop: photo bleeds to the right edge. Its left edge picks up where
            the hero's diagonal ended (46% of the viewport) and carries on at the
            same angle down to 42%. */}
        <div
          className="absolute inset-y-0 right-0 hidden w-[58%] lg:block"
          style={{ clipPath: "polygon(7% 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          <Image
            src="/images/polymer-generative-support-bracket-2.jpg"
            alt="Polymer 3D-printed generative support bracket"
            fill
            className="object-cover"
            sizes="58vw"
          />
        </div>

        <div className="container-az relative flex items-center py-16 lg:h-[calc(100vh-447px)] lg:min-h-[26rem] lg:py-24">
          <div className="lg:w-1/2 lg:max-w-sm">
            <Eyebrow>Our Polymer Technologies</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Core Polymer Technologies In-House
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              From prototyping to production, Azoth selects the optimal polymer process for your
              application, across extrusion, powder-bed, and resin technologies.
            </p>
          </div>
        </div>

        {/* Phone / tablet: photo drops below the heading */}
        <div className="relative h-72 w-full lg:hidden">
          <Image
            src="/images/polymer-generative-support-bracket-2.jpg"
            alt="Polymer 3D-printed generative support bracket"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Technology cards */}
      <section className="bg-surface py-20">
        <div className="container-az">
          <div className={`grid items-stretch gap-6 sm:grid-cols-2 ${lgColsClass}`}>
            {technologies.map((tech) => (
              <div
                key={tech.title}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-white shadow-sm"
              >
                {/* Fixed-height photo area keeps the photos and titles level across
                    the row; the parts are shown whole rather than cropped. */}
                <div className="flex h-56 items-center justify-center bg-white p-5">
                  <Image
                    src={tech.image}
                    alt={tech.title}
                    width={1200}
                    height={800}
                    className="h-full w-auto max-w-full object-contain"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                  />
                </div>
                <div className="flex flex-1 flex-col border-t border-hairline p-6">
                  <h3 className="text-lg font-bold leading-snug text-ink">{tech.title}</h3>
                  <div className="mt-4 space-y-4">
                    {tech.entries.map((entry) => (
                      <div key={entry.label}>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-brand">
                          {entry.label}
                        </h4>
                        {entry.body ? (
                          <p className="mt-1.5 text-sm leading-relaxed text-muted-soft">
                            {entry.body}
                          </p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
