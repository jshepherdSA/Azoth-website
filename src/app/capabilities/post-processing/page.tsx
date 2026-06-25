import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { PageBanner } from "@/components/page-banner";
import { CircleArrow } from "@/components/circle-arrow";

export const metadata: Metadata = {
  title: "Finishing",
  description:
    "From cradle to grave, Azoth is vertically integrated and delivers finished end-use parts on demand — in-house machining, heat treatment, polishing, coatings, and plating.",
};

type Service = {
  title: string;
  image: string;
  alt: string;
  body: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Machining",
    image: "/images/untitled-design-8.png",
    alt: "Five-axis machined metal component",
    body: (
      <p className="mt-4 leading-relaxed text-muted-soft">
        Azoth provides in-house complex five-axis machining capabilities, allowing us to deliver
        precision finishing, tight-tolerance features, and advanced secondary operations for
        additively manufactured metal components.
      </p>
    ),
  },
  {
    title: "Heat Treatment",
    image: "/images/untitled-design-10.png",
    alt: "Heat-treated metal parts",
    body: (
      <>
        <p className="mt-4 leading-relaxed text-muted-soft">Heat treatments include:</p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {["H800", "H900", "H1075", "H1150", "Many more, alloy-dependent"].map((h) => (
            <li key={h} className="flex items-center gap-2 font-medium text-ink-soft">
              <span className="h-2 w-2 rounded-full bg-brand" />
              {h}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "Coatings & Plating",
    image: "/images/untitled-design-9.png",
    alt: "Coated and plated metal parts",
    body: (
      <>
        <p className="mt-4 leading-relaxed text-muted-soft">
          Azoth offers a range of coatings and plating options to support performance, durability,
          corrosion resistance, and visual finish requirements.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {[
            "PVD coatings",
            "Black, gold, gray & more",
            "Cerakote",
            "Chrome plating",
            "Gold plating",
            "Passivation",
          ].map((c) => (
            <li key={c} className="flex items-center gap-2 font-medium text-ink-soft">
              <span className="h-2 w-2 rounded-full bg-brand" />
              {c}
            </li>
          ))}
        </ul>
      </>
    ),
  },
];

const polishingChips = ["REM Isotropic Finishing", "Vibratory Finishing", "Hand Finishing"];

export default function FinishingPage() {
  return (
    <>
      <PageBanner
        title="Finishing"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Capabilities", href: "/capabilities" },
          { label: "Finishing" },
        ]}
      />

      {/* Post Processing intro */}
      <section className="bg-white py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface shadow-md ring-1 ring-hairline">
            <Image
              src="/images/post-processing-main-picture-v2-min.jpg"
              alt="Polished metal component"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <Eyebrow>Post Processing</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Finished End-Use Parts, On Demand
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              From cradle to grave, Azoth is vertically integrated and can deliver finished end-use
              parts on demand. Azoth offers in-house heat treatment, light machining work, and mass
              polishing and finishing.
            </p>
            <Link
              href="/quote"
              className="mt-6 inline-flex items-center gap-2.5 rounded-md bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Request A Quote
              <CircleArrow tone="onRed" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service detail sections (alternating) */}
      {services.map((service, i) => (
        <section key={service.title} className={i % 2 === 0 ? "bg-surface py-20" : "bg-white py-20"}>
          <div className="container-az grid items-center gap-12 lg:grid-cols-2">
            <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-hairline ${i % 2 === 0 ? "" : "lg:order-2"}`}>
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className={i % 2 === 0 ? "" : "lg:order-1"}>
              <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">{service.title}</h2>
              {service.body}
            </div>
          </div>
        </section>
      ))}

      {/* Polishing */}
      <section className="bg-white py-20">
        <div className="container-az">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Polishing</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Quality & Specification, Every Time
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              Azoth utilizes the latest in metal finishing technology to ensure our customers get
              their desired parts to quality and specifications. Polishing capabilities include REM
              Isotropic finishing, vibratory finishing, and hand finishing if and when needed.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {polishingChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-hairline bg-surface px-5 py-2 text-sm font-semibold text-ink-soft"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
