import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { PageBanner } from "@/components/page-banner";
import { CircleArrow } from "@/components/circle-arrow";
import { IndustriesSection } from "@/components/industries-section";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Metal and polymer additive manufacturing at production scale — binder jetting, lithography metal manufacturing, polymer printing, finishing, and ISO-certified quality.",
};

const capabilities = [
  {
    title: "Binder Jetting",
    href: "/capabilities/binder-jetting",
    image: "/images/binder-jetting-industrial-automation-machining-close-up.png",
    blurb: "High-throughput metal AM for small, complex, production-volume parts.",
  },
  {
    title: "Lithography Metal Manufacturing",
    href: "/capabilities/lithography-metal-manufacturing",
    image: "/images/holding-chip-incus.png",
    blurb: "Ultra-fine feature detail and surface finish in dense metal components.",
  },
  {
    title: "Polymer Printing",
    href: "/capabilities/polymer-printing",
    image: "/images/azoth-part-nest-fixture-1024x677-new.png",
    blurb: "5 of 7 core polymer technologies in-house, prototyping to production.",
  },
  {
    title: "Finishing",
    href: "/capabilities/post-processing",
    image: "/images/post-processing.png",
    blurb: "In-house post-processing for production-ready surface and tolerance.",
  },
];

const quality = {
  title: "Quality",
  href: "/capabilities/quality",
  blurb:
    "ISO 9001:2015 and ISO 13485:2016 certified quality systems, with full traceability and PPAP documentation.",
};

function CardArrow() {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-colors group-hover:bg-brand-hover">
      <svg viewBox="0 0 18 18" className="h-4 w-4" aria-hidden>
        <path
          d="M6.5 4 11.5 9 6.5 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function StopwatchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="14" r="8" />
      <path d="M12 14V9.3" />
      <path d="M9 2.5h6" />
      <path d="M12 2.5V6" />
      <path d="m18.6 7.4 1.6-1.6" />
    </svg>
  );
}

export default function CapabilitiesPage() {
  return (
    <>
      <PageBanner
        title="Capabilities"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Capabilities" }]}
      />

      {/* Capability grid */}
      <section className="bg-white py-20">
        <div className="container-az">
          <div className="max-w-3xl">
            <Eyebrow>Our Capabilities</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              End-to-End Additive Manufacturing
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              From metal binder jetting to polymer printing and finishing—Azoth delivers
              production-grade parts under one roof, backed by certified quality systems.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {capabilities.map((cap) => (
              <Link
                key={cap.href}
                href={cap.href}
                className="group relative aspect-[5/2] overflow-hidden rounded-2xl bg-ink ring-1 ring-hairline"
              >
                <Image
                  src={cap.image}
                  alt={cap.title}
                  fill
                  className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white sm:text-2xl">{cap.title}</h3>
                    <p className="mt-1 max-w-md text-sm text-white/75">{cap.blurb}</p>
                  </div>
                  <CardArrow />
                </div>
              </Link>
            ))}

            {/* Quality — light card variant (ISO seal) */}
            <Link
              href={quality.href}
              className="group relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl border border-hairline bg-white p-8 transition-shadow hover:shadow-lg sm:flex-row sm:items-center lg:col-span-2"
            >
              <div className="max-w-xl">
                <h3 className="text-xl font-bold text-ink sm:text-2xl">{quality.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-soft">{quality.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-2 font-semibold text-brand">
                  Learn More
                  <CircleArrow tone="solid" />
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-4">
                <Image
                  src="/images/iso-9001.png"
                  alt="ISO 9001:2015 Certified Company"
                  width={280}
                  height={280}
                  className="h-24 w-auto object-contain sm:h-28"
                />
                <Image
                  src="/images/iso-13485.png"
                  alt="ISO 13485:2016 Certified Company"
                  width={280}
                  height={280}
                  className="h-24 w-auto object-contain sm:h-28"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Proof band — "5 days" */}
      <section className="relative isolate overflow-hidden bg-ink">
        <Image
          src="/images/production-part-banner.png"
          alt=""
          fill
          className="-z-10 object-cover object-center opacity-65"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
        <div className="container-az flex flex-col items-start gap-6 py-20 text-white">
          <h2 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Production parts in as fast as{" "}
            <span className="whitespace-nowrap text-brand">
              <StopwatchIcon className="mr-2 inline-block h-[0.82em] w-[0.82em] align-[-0.05em]" />
              5 days
            </span>
          </h2>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2.5 rounded-md bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            Request A Quote
            <CircleArrow tone="onRed" />
          </Link>
        </div>
      </section>

      <IndustriesSection />
    </>
  );
}
