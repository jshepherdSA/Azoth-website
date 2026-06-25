import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { PageBanner } from "@/components/page-banner";
import { CircleArrow } from "@/components/circle-arrow";
import { IndustriesSection } from "@/components/industries-section";

export const metadata: Metadata = {
  title: "Lithography Metal Manufacturing",
  description:
    "LMM enables high-precision small and micro metal components with an Ra of 2 μm and tolerances to ±0.05 mm — in 316L, 17-4PH, Ti-6Al-4V, and copper.",
};

const gallery = [
  { src: "/images/llm-slide-one.png", alt: "LMM-printed metal blade component" },
  { src: "/images/llm-slide-first-card.png", alt: "LMM-printed cylindrical metal component" },
  { src: "/images/llm-slide-sec-card.png", alt: "LMM-printed precision metal component" },
];

const materials = ["316L Stainless Steel", "17-4PH Stainless Steel", "Ti-6Al-4V", "Pure Copper"];

const highlights = [
  "Highest accuracy and surface quality",
  "Biocompatible and safe for medical-use materials",
  "Suitable for both single-piece production and mass manufacturing",
];

const production = [
  { label: "High Volumes", value: "Thousands of parts per day" },
  { label: "Support Free", value: "Down to 50µm walls" },
  { label: "USA-Based", value: "Azoth enables automated serial production in the USA" },
  { label: "Reshoring", value: "Reshore MIM and micro-machined level parts on 7–15 day lead times" },
  { label: "Adaptable", value: "Adaptable material system" },
  { label: "Fast", value: "Development to production in the same month" },
];

const steps = [
  {
    n: 1,
    title: "Upload your application",
    detail: "STEP file and/or 2D drawing, plus quantities for development and production volumes.",
  },
  { n: 2, title: "Share technical details", detail: "Tell us any technical details we should know about." },
  {
    n: 3,
    title: "Get a proposal",
    detail: "An expert from Azoth will be in touch with a quote or next-steps proposal.",
  },
];

function Check() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-3 w-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
      </svg>
    </span>
  );
}

export default function LmmPage() {
  return (
    <>
      <PageBanner
        title="Lithography Metal Manufacturing"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Capabilities", href: "/capabilities" },
          { label: "Lithography Metal Manufacturing" },
        ]}
      />

      {/* Parts gallery */}
      <section className="bg-white py-16">
        <div className="container-az">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Precision Metal AM</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
              Small, Complex, Production-Ready Metal Parts
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {gallery.map((g) => (
              <div
                key={g.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface ring-1 ring-hairline"
              >
                <Image src={g.src} alt={g.alt} fill className="object-cover" sizes="(max-width:640px) 100vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Offered */}
      <section className="bg-surface py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Materials Offered</h2>
            <ul className="mt-6 space-y-3">
              {materials.map((m) => (
                <li key={m} className="flex items-center gap-3 text-lg font-medium text-ink-soft">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[5/2] overflow-hidden rounded-2xl bg-white shadow-md">
            <Image
              src="/images/material-offered.png"
              alt="Metal powder material samples"
              fill
              className="object-contain p-6"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Why LMM Printing? */}
      <section className="bg-white py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface shadow-md">
            <Image
              src="/images/azoth-image-web-remove-logo.jpg"
              alt="Azoth lithography metal manufacturing printer"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <Eyebrow>Why LMM Printing?</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Unparalleled Precision & Surface Quality
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              LMM technology enables the production of high-precision small and micro metal
              components. Used in the manufacturing of intricate components, lithography offers
              unparalleled precision and surface quality in metal AM.
            </p>
            <p className="mt-4 leading-relaxed text-muted-soft">
              This technology is best suited for applications about the size of a dime or smaller
              (20&nbsp;mm) in length, width, and height. We can achieve a very smooth surface with an
              Ra of 2&nbsp;μm without post-processing, as well as tolerances up to ±0.05&nbsp;mm
              (±0.5%).
            </p>
            <p className="mt-6 font-bold text-ink">Highlights:</p>
            <ul className="mt-3 space-y-2.5">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-muted-soft">
                  <Check />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How Does LMM Technology Work? */}
      <section className="bg-surface py-20">
        <div className="container-az">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
              How Does LMM Technology Work?
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              A light source selectively cures the photoreactive binder within the feedstock, layer
              by layer, embedding the metal powder to form the desired 3D structure. This stage
              results in the creation of a so-called green part.
            </p>
          </div>
          <div className="mt-12 overflow-x-auto">
            <div className="min-w-[760px] rounded-2xl bg-white p-8 shadow-sm ring-1 ring-hairline">
              <Image
                src="/images/effects.png"
                alt="LMM process: design, print, green part, debinding, sintering, finished part"
                width={1320}
                height={100}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Launching Your Production Application */}
      <section className="bg-white py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface shadow-md">
            <Image
              src="/images/launching-production.png"
              alt="LMM production parts"
              fill
              className="object-contain p-6"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
              Launching Your Production Application
            </h2>
            <ul className="mt-6 space-y-4">
              {production.map((p) => (
                <li key={p.label} className="flex items-start gap-3">
                  <Check />
                  <span className="text-muted-soft">
                    <span className="font-semibold text-ink">{p.label}:</span> {p.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How Do I Get Started? */}
      <section className="bg-surface py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">How Do I Get Started?</h2>
            <ol className="mt-8 space-y-6">
              {steps.map((step) => (
                <li key={step.n} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-bold text-ink">{step.title}</h3>
                    <p className="mt-1 text-muted-soft">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              href="/quote"
              className="mt-8 inline-flex items-center gap-2.5 rounded-md bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Upload Your Parts
              <CircleArrow tone="onRed" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-hairline">
            <Image
              src="/images/bolt-screw.png"
              alt="LMM-printed precision metal parts"
              fill
              className="object-contain p-6"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <IndustriesSection />
    </>
  );
}
