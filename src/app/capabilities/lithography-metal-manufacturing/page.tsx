import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { PageBanner } from "@/components/page-banner";
import { CircleArrow } from "@/components/circle-arrow";
import { IndustriesSection } from "@/components/industries-section";
import { LmmGallery } from "@/components/lmm-gallery";

export const metadata: Metadata = {
  title: "Lithography Metal Manufacturing",
  description:
    "LMM enables high-precision small and micro metal components with an Ra of 2 μm and tolerances to ±0.05 mm — in 316L, 17-4PH, Ti-6Al-4V, and copper.",
};

const materials = ["316L Stainless Steel", "17-4PH Stainless Steel", "Ti-6Al-4V", "Pure Copper"];

const highlights = [
  "Highest accuracy and surface quality",
  "Biocompatible and safe for medical-use materials",
  "Suitable for both single-piece production and mass manufacturing",
];

// Reproduces the original "Launching Your Production Application" content exactly,
// including its bold headings with (and without) bulleted sub-items.
const production: { heading: string; items: string[] }[] = [
  { heading: "High Volumes", items: ["Thousands of parts per day"] },
  { heading: "High Volumes", items: ["Support free", "Down to 50um walls"] },
  { heading: "Azoth enables automated serial production in the USA", items: [] },
  { heading: "Reshore MIM and Micro Machined level parts on 7-15 day lead times", items: [] },
  { heading: "Adaptable material system", items: ["Development to production in the same month"] },
];

// Four parts shown in the "How Do I Get Started?" grid (zoom on hover).
const startImages = [
  { src: "/images/chakra.png", alt: "LMM-printed gear" },
  { src: "/images/chip-2-incus_shooting_dec23-118-1024x721.jpg", alt: "Hand holding a micro SD card tray with tweezers" },
  { src: "/images/bolt-screw.png", alt: "LMM-printed bolt and screw" },
  { src: "/images/incus.png", alt: "LMM-printed Incus precision components" },
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

      {/* Hero parts gallery */}
      <section className="bg-white py-12">
        <div className="container-az">
          <LmmGallery />
        </div>
      </section>

      {/* Materials Offered */}
      <section className="bg-white py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Materials Offered</h2>
            <ul className="mt-6 space-y-5">
              {materials.map((m) => (
                <li key={m} className="flex items-center gap-3 text-lg font-medium text-ink-soft">
                  <Image src="/images/step-icon.svg" alt="" width={26} height={26} className="h-6 w-6 shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/material-offered.png"
              alt="Metal powder material samples"
              width={675}
              height={267}
              className="h-auto w-full max-w-xl object-contain"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Why LMM Printing? */}
      <section className="bg-white py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-hairline">
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
      <section className="bg-white py-20">
        <div className="container-az">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
                How Does LMM Technology Work?
              </h2>
              <p className="mt-4 leading-relaxed text-muted-soft">
                A light source selectively cures the photoreactive binder within the feedstock, layer
                by layer, embedding the metal powder to form the desired 3D structure. This stage
                results in the creation of a so-called green part.
              </p>
            </div>
            <Image
              src="/images/lmm-tech-image_edited-scaled-1.png"
              alt="LMM process diagram — DLP engine, lens, light, feedstock, building platform, and green part"
              width={480}
              height={380}
              className="mx-auto h-auto w-full max-w-md"
            />
          </div>
          <div className="mt-14 overflow-x-auto">
            <div className="min-w-[760px]">
              <Image
                src="/images/effects.png"
                alt="LMM process steps: design, print, green part, debinding, sintering, finished part"
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
          <div className="flex justify-center">
            <Image
              src="/images/launching-production.png"
              alt="LMM production parts"
              width={564}
              height={425}
              className="h-auto w-full max-w-md object-contain"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
              Launching Your Production Application
            </h2>
            <div className="mt-6 space-y-5">
              {production.map((group, i) => (
                <div key={i}>
                  <p className="font-bold text-ink">{group.heading}</p>
                  {group.items.length > 0 && (
                    <ul className="mt-2 space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-muted-soft">
                          <span className="text-ink">
                            <svg viewBox="0 0 10 10" className="h-2.5 w-2.5" aria-hidden>
                              <path d="M2 1l5 4-5 4z" fill="currentColor" />
                            </svg>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
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
          <div className="grid grid-cols-2 gap-4">
            {startImages.map((img) => (
              <div
                key={img.src}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-white ring-1 ring-hairline"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width:1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustriesSection />
    </>
  );
}
