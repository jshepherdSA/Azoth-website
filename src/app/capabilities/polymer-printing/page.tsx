import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { PageBanner } from "@/components/page-banner";
import { CircleArrow } from "@/components/circle-arrow";

export const metadata: Metadata = {
  title: "Polymer Printing",
  description:
    "Azoth's experts cover a wide array of plastic additive manufacturing technologies — FDM, SLS, SLA, DLP, HP Multi Jet Fusion, reinforcement fibers, and more.",
};

// Each polymer technology is a card (maroon value icon + title) that flips like a
// flashcard on hover/focus to reveal its description. Icons + copy from the source.
const technologies = [
  {
    title: "Fused Deposition Modeling (FDM) Printing",
    icon: "/images/reduce-inventory-costs.svg",
    body: "Fused deposition modeling, or FDM 3D printing, is a method of additive manufacturing where layers of material are fused together in a pattern to create an object. The material is melted just past its glass transition temperature, then extruded next to or on top of previous extrusions, building an object layer by layer.",
  },
  {
    title: "Full-Color FDM Printing Capabilities",
    icon: "/images/rapid-speed-of-service-production.svg",
    body: "Azoth is able to manufacture precision metal parts within 7-15 days. Binder jetting is much faster than other additive technologies and does not require tooling like traditional manufacturing. This enables speed to market to outpace machining, casting, and metal-injection-molding.",
  },
  {
    title: "Bound Metal Deposition (BMD) Printing",
    icon: "/images/prototyping-production.svg",
    body: "Bound Metal Deposition (BMD) is an extrusion-based metal additive manufacturing process where metal components are constructed by extrusion of a powder-filled thermoplastic media. The Studio System leverages BMD to deliver an office-friendly metal 3D printing solution.",
  },
  {
    title: "Selective Laser Sintering (SLS)",
    icon: "/images/superior-level-of-quality-control.svg",
    body: "SLS (Selective Laser Sintering) is an additive manufacturing method. It creates parts by sintering fine polymer powder particles to fuse them together locally. Your plastic part is created layer by layer, according to your 3D model.",
  },
  {
    title: "High-Quality Reinforcement Fibers",
    icon: "/images/endless-customization-possibilities.svg",
    body: "Reinforcement fibers are either natural fibers (animal, mineral, or cellulose) or synthetic fibers such as glass, carbon, polymers, and kevlar—designed to increase rigidity, strength, and the part's impact resistance.",
  },
  {
    title: "Stereolithography (SLA) Printing",
    icon: "/images/complete-design-freedom-flexibility.svg",
    body: "Stereolithography, or SLA printing, is a form of 3D printing used to create models, prototypes, patterns, and production parts layer by layer using a photochemical process in which light causes chemical monomers and oligomers to cross-link into polymers. Those polymers then make up the body of a three-dimensional solid.",
  },
  {
    title: "Digital Light Processing (DLP) 3D Printing",
    icon: "/images/complete-design-freedom-flexibility.svg",
    body: "A DLP 3D printer is used in an additive manufacturing process where objects are created using a digital light projector (DLP) as the light source for curing photo-reactive polymers.",
  },
  {
    title: "HP Multi-Jet Fusion 3D Printing",
    icon: "/images/complete-design-freedom-flexibility.svg",
    body: "Unlike other 3D printing technologies, HP Multi Jet Fusion prints each layer of new material and agents on top of a previous layer that is still molten—so both layers fuse completely, delivering strong, detailed, and functional 3D-printed parts.",
  },
];

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

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface shadow-md ring-1 ring-hairline">
            <Image
              src="/images/azoth-air-nozzle.jpg"
              alt="Polymer 3D-printed air nozzle"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
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

      {/* Technologies */}
      <section className="bg-surface py-20">
        <div className="container-az">
          <div className="max-w-3xl">
            <Eyebrow>Our Polymer Technologies</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              5 of 7 Core Polymer Technologies In-House
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              From prototyping to production, Azoth selects the optimal polymer process for your
              application—across extrusion, powder-bed, and resin technologies.
            </p>
          </div>

          <p className="mt-8 text-sm font-medium text-muted">
            Hover over a card to learn more.
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <div
                key={tech.title}
                tabIndex={0}
                className="group h-80 rounded-2xl [perspective:1200px] focus:outline-none"
              >
                <div className="relative h-full w-full rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 rounded-2xl border border-hairline bg-white px-6 text-center shadow-sm [backface-visibility:hidden]">
                    <Image src={tech.icon} alt="" width={70} height={70} className="h-16 w-16" />
                    <h3 className="text-lg font-bold leading-snug text-ink">{tech.title}</h3>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                      Learn More
                      <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden>
                        <path
                          d="M6 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-dark to-black px-6 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h3 className="text-base font-bold leading-snug">{tech.title}</h3>
                    <p className="text-sm leading-relaxed text-white/85">{tech.body}</p>
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
