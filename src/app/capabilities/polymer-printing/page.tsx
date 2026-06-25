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

// The original displays these as compact cards (maroon value tile + title +
// chevron) that link into the quote flow. Source descriptions are available.
const technologies = [
  { title: "Fused Deposition Modeling (FDM) Printing", icon: "/images/reduce-inventory-costs.svg" },
  { title: "Full-Color FDM Printing Capabilities", icon: "/images/rapid-speed-of-service-production.svg" },
  { title: "Bound Metal Deposition (BMD) Printing", icon: "/images/prototyping-production.svg" },
  { title: "Selective Laser Sintering (SLS)", icon: "/images/superior-level-of-quality-control.svg" },
  { title: "High-Quality Reinforcement Fibers", icon: "/images/endless-customization-possibilities.svg" },
  { title: "Stereolithography (SLA) Printing", icon: "/images/complete-design-freedom-flexibility.svg" },
  { title: "Digital Light Processing (DLP) 3D Printing", icon: "/images/complete-design-freedom-flexibility.svg" },
  { title: "HP Multi-Jet Fusion 3D Printing", icon: "/images/complete-design-freedom-flexibility.svg" },
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

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <Link
                key={tech.title}
                href="/quote"
                className="group relative flex items-center gap-5 rounded-2xl border border-hairline bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <Image src={tech.icon} alt="" width={70} height={70} className="h-14 w-14 shrink-0" />
                <h3 className="font-bold leading-snug text-ink">{tech.title}</h3>
                <span className="ml-auto shrink-0 text-muted transition-colors group-hover:text-brand">
                  <svg viewBox="0 0 16 16" fill="none" className="h-5 w-5" aria-hidden>
                    <path
                      d="M6 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
