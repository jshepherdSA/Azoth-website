import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBanner } from "@/components/page-banner";
import { CircleArrow } from "@/components/circle-arrow";
import { type GalleryPhoto } from "@/components/industry-gallery";

export const metadata: Metadata = {
  title: "Medical",
  description:
    "Production-scale metal additive manufacturing for medical — ISO 13485-certified processes, fully qualified materials, and vertically integrated capabilities, all delivered in the USA.",
};

const intro =
  "We serve a diverse range of industries where precision, performance, and speed matter most. From automotive and aerospace to medical, defense, and energy—we deliver tailored additive manufacturing solutions that meet industry-specific standards and accelerate time to market.";

const galleryPhotos: GalleryPhoto[] = [
  { src: "/images/medical-new-1.png", alt: "Spinal implant component" },
  { src: "/images/medical-new-2.png", alt: "Medical device component" },
  { src: "/images/medical-new-3.png", alt: "Surgical instrument" },
  { src: "/images/medical-new-4.png", alt: "Medical-grade metal part" },
  { src: "/images/medical-new-5.png", alt: "Orthopedic component" },
  { src: "/images/medical-new-6.png", alt: "Precision medical component" },
];

const advanced = [
  "The medical industry demands precision, reliability, and full regulatory compliance. From surgical tools to implants and complex device components, manufacturers must deliver high-performance parts while accelerating development timelines.",
  "Azoth is a production-scale metal additive manufacturing partner, providing fully qualified materials, ISO 13485-certified processes, and vertically integrated capabilities—all delivered in the USA.",
];

// Bold phrases are marked with **double asterisks** in the source copy.
const capabilities = [
  "**Surgical Precision & Tight Tolerances** - Azoth manufactures components with exceptional accuracy and repeatability, meeting the stringent tolerances required for medical devices and surgical applications.",
  "**Superior Surface Finish** - Unlike many additive technologies, Azoth delivers parts with market-ready surface finishes and minimal post-processing—reducing time, cost, and variability.",
  "**Micro-Scale & Complex Geometries** - NPJ technology enables production of extremely small, intricate parts with resolutions of +/- 25 microns—ideal for surgical tools, dental components, and micro devices.",
  "**Scalable from Prototype to Production** - From early-stage prototyping to high-volume production, Azoth uses consistent equipment and validated processes—eliminating the need for requalification as programs scale.",
  "**End-to-End Manufacturing Integration** - Beyond printing, Azoth provides post-processing, finishing, machining, and inspection—delivering fully finished, end-use components.",
  "**Full Lifecycle Partnership** - From Design for Additive Manufacturing (DfAM) through production, Azoth acts as a strategic partner—supporting innovation, optimization, and long-term manufacturing success.",
];

const applications = [
  "Surgical instrumentation and robotic end-effectors",
  "Patient-specific implants and components",
  "Diagnostic and therapeutic device parts",
  "R&D tooling, fixtures, and custom equipment",
  "Rapid prototyping and design iteration",
];

const quality = [
  "ISO 13485:2016 and ISO 9001:2015 certified",
  "Full material traceability",
  "ISO 10993-compliant materials",
  "PPAP, IQ / OQ / PQ experience",
];

type Spec = { title: string; items: string[] };
const specsLeft: Spec[] = [
  { title: "Materials", items: ["Ti64", "316L Stainless", "17-4PH Stainless"] },
  { title: "Performance", items: ["4–15 day lead times", "+/- 0.5% or .005″ tolerances", "2–4 µm Ra surface finish"] },
];

/** Renders copy with **bold** phrases as emphasized spans. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-ink">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function TriBullet() {
  return (
    <span className="mt-2 shrink-0 text-ink">
      <svg viewBox="0 0 10 10" className="h-2.5 w-2.5" aria-hidden>
        <path d="M2 1l5 4-5 4z" fill="currentColor" />
      </svg>
    </span>
  );
}

function CrownBullet() {
  return (
    <span className="mt-0.5 shrink-0 text-brand">
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
        <path d="M2 12.5h12L13 5l-3 2.6L8 3.2 6 7.6 3 5z" />
      </svg>
    </span>
  );
}

function SpecBlock({ spec }: { spec: Spec }) {
  return (
    <div>
      <h3 className="text-2xl font-extrabold text-ink sm:text-3xl">{spec.title}</h3>
      <ul className="mt-4 space-y-3">
        {spec.items.map((item) => (
          <li key={item} className="flex items-start gap-3 font-medium text-ink-soft">
            <CrownBullet />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MedicalPage() {
  return (
    <>
      <PageBanner
        title="Medical"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Medical" }]}
      />

      {/* Intro + parts gallery */}
      <section className="bg-white py-16">
        <div className="container-az">
          <p className="mx-auto max-w-4xl text-center text-lg leading-relaxed text-muted-soft">
            {intro}
          </p>
          {/* Six product photos in a single row */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {galleryPhotos.map((p) => (
              <div
                key={p.src}
                className="relative aspect-square overflow-hidden rounded-2xl bg-surface ring-1 ring-hairline"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Additive Manufacturing for Medical Innovation */}
      <section className="bg-white py-20">
        <div className="container-az">
          <h2 className="mx-auto max-w-6xl text-balance text-center text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-ink via-brand-dark to-brand bg-clip-text text-transparent">
              Advanced Additive Manufacturing for Medical Innovation
            </span>
          </h2>
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <Image
              src="/images/medical-27.png"
              alt="Medical-grade additively manufactured components"
              width={2000}
              height={1200}
              className="h-auto w-full rounded-2xl"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div>
              {advanced.map((p) => (
                <p key={p} className="mb-4 leading-relaxed text-muted-soft">
                  {p}
                </p>
              ))}
              <Link
                href="/quote"
                className="mt-2 inline-flex items-center gap-2.5 rounded-md bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-hover"
              >
                Request A Quote
                <CircleArrow tone="onRed" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities for Medical Manufacturing */}
      <section className="bg-white py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
              Key Capabilities for Medical Manufacturing
            </h2>
            <ul className="mt-8 space-y-4">
              {capabilities.map((c) => (
                <li key={c} className="flex gap-3 leading-relaxed text-muted-soft">
                  <TriBullet />
                  <span>
                    <Rich text={c} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <Image
              src="/images/medical-new-3.png"
              alt="Surgical instrument produced with metal additive manufacturing"
              fill
              className="object-contain"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Applications in Medical Manufacturing */}
      <section className="bg-white py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-md lg:order-1">
            <Image
              src="/images/medical-new-2.png"
              alt="Medical device component"
              fill
              className="object-contain"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:order-2">
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
              Applications in Medical Manufacturing
            </h2>
            <ul className="mt-8 space-y-3">
              {applications.map((a) => (
                <li key={a} className="flex gap-3 leading-relaxed text-muted-soft">
                  <TriBullet />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Medical-Grade Quality */}
      <section className="bg-white py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Medical-Grade Quality</h2>
            <ul className="mt-8 space-y-3">
              {quality.map((q) => (
                <li key={q} className="flex gap-3 leading-relaxed text-muted-soft">
                  <TriBullet />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 leading-relaxed text-muted-soft">
              Every part is inspected and delivered with a Certificate of Inspection to ensure full
              compliance.
            </p>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <Image
              src="/images/medical-new-1.png"
              alt="Spinal implant component"
              fill
              className="object-contain"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Specs — Materials / Performance */}
      <section className="bg-white py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <Image
              src="/images/medical-new-5.png"
              alt="Orthopedic metal component"
              fill
              className="object-contain"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-10">
            {specsLeft.map((s) => (
              <SpecBlock key={s.title} spec={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
