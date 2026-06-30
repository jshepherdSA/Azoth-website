import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBanner } from "@/components/page-banner";
import { CircleArrow } from "@/components/circle-arrow";

export const metadata: Metadata = {
  title: "Finishing",
  description:
    "From cradle to grave, Azoth is vertically integrated and delivers finished end-use parts on demand — in-house machining, heat treatment, polishing, coatings, and plating.",
};

type Service = {
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
  body: React.ReactNode;
  cta?: boolean;
};

const services: Service[] = [
  {
    title: "Post Processing",
    subtitle: "Finished End-Use Parts, On Demand",
    image: "/images/post-processing-main-picture-v2-min.jpg",
    alt: "Polished metal component",
    cta: true,
    body: (
      <p className="mt-4 leading-relaxed text-muted-soft">
        From cradle to grave, Azoth is vertically integrated and can deliver finished end-use
        parts on demand. Azoth offers in-house heat treatment, light machining work, and mass
        polishing and finishing.
      </p>
    ),
  },
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
          {["H900", "H1075", "H1150", "Many more, alloy-dependent"].map((h) => (
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

      {/* Service sections — content left, photo right, alternating backgrounds */}
      {services.map((service, i) => (
        <section key={service.title} className={i % 2 === 0 ? "bg-white py-20" : "bg-surface py-20"}>
          <div className="container-az grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">{service.title}</h2>
              {service.subtitle && (
                <p className="mt-2 text-xl font-semibold text-muted-soft sm:text-2xl">
                  {service.subtitle}
                </p>
              )}
              {service.body}
              {service.cta && (
                <Link
                  href="/quote"
                  className="mt-6 inline-flex items-center gap-2.5 rounded-md bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-hover"
                >
                  Request A Quote
                  <CircleArrow tone="onRed" />
                </Link>
              )}
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-hairline">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={i === 0}
              />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
