import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBanner } from "@/components/page-banner";
import { CircleArrow } from "@/components/circle-arrow";
import { IndustryGallery, type GalleryPhoto } from "@/components/industry-gallery";

export const metadata: Metadata = {
  title: "Defense",
  description:
    "U.S.-based, ITAR-registered production-scale metal additive manufacturing for defense — mission-critical components, fully qualified materials, and end-to-end integration under one roof.",
};

const intro =
  "We serve a diverse range of industries where precision, performance, and speed matter most. From automotive and aerospace to medical, defense, and energy—we deliver tailored additive manufacturing solutions that meet industry-specific standards and accelerate time to market.";

const galleryPhotos: GalleryPhoto[] = Array.from({ length: 13 }, (_, i) => ({
  src: `/images/defense-new-${i + 1}.png`,
  alt: `Defense component produced with metal additive manufacturing (${i + 1})`,
}));

const advanced = [
  "Defense manufacturing demands precision, reliability, and secure, domestic production. Components must perform in extreme environments while meeting strict compliance and traceability requirements.",
  "Azoth is a U.S.-based, ITAR-registered manufacturing partner specializing in production-scale metal additive manufacturing. With fully qualified materials, vertically integrated capabilities, and advanced quality systems, Azoth supports defense programs from rapid prototyping through full-rate production.",
];

// Bold phrases are marked with **double asterisks** in the source copy.
const capabilities = [
  "**Mission-Critical Precision** - High-performance components with tight tolerances and repeatable quality for demanding defense applications.",
  "**Complex Geometry & Lightweighting** - Enable advanced internal structures, part consolidation, and weight reduction not possible with traditional manufacturing.",
  "**Rapid Development to Production** - Accelerate timelines with digital manufacturing—moving seamlessly from prototype to production without tooling delays.",
  "**Secure, U.S.-Based Manufacturing** - ITAR-compliant production with fully domestic manufacturing—ensuring supply chain control and security.",
  "**End-to-End Integration** - Additive manufacturing, MIM, CNC machining, finishing, and inspection—all under one roof.",
];

const applications = [
  "Military vehicles and ground systems",
  "Aerospace and aviation components",
  "Naval and maritime systems",
  "Firearms and weapon system components",
  "Communication, RF, and electronic systems",
  "Unmanned aerial vehicles (UAVs)",
  "Surveillance and reconnaissance systems",
  "Missile and munitions components",
];

const consumerItems = [
  "Triggers, internal components, and slide systems",
  "Frames, grips, and optic mounts",
  "Sights, mag releases, and slide locks",
];

type Spec = { title: string; items: string[]; twoCol?: boolean };
const specsLeft: Spec[] = [
  {
    title: "Materials",
    items: ["Ti64", "17-4PH Stainless", "316L Stainless", "Inconel 625/718", "Mar M 247", "4140 Steel", "D2 Tool Steel", "Copper"],
    twoCol: true,
  },
  {
    title: "Performance",
    items: [
      "7–15 day lead times",
      "+/- 0.5% or .005″ tolerances",
      "2–4 µm Ra surface finish",
      "Materials certified to MPIF 35, ASTM B883, ISO 22068",
    ],
  },
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
      <ul className={`mt-4 gap-x-8 gap-y-3 ${spec.twoCol ? "grid sm:grid-cols-2" : "space-y-3"}`}>
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

export default function DefensePage() {
  return (
    <>
      <PageBanner
        title="Defense"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Defense" }]}
      />

      {/* Intro + parts gallery */}
      <section className="bg-white py-16">
        <div className="container-az">
          <p className="mx-auto max-w-4xl text-center text-lg leading-relaxed text-muted-soft">
            {intro}
          </p>
          <div className="mt-10">
            <IndustryGallery photos={galleryPhotos} />
          </div>
        </div>
      </section>

      {/* Advanced Additive Manufacturing for Defense Applications */}
      <section className="bg-surface py-20">
        <div className="container-az">
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-extrabold text-ink sm:text-4xl">
            Advanced Additive Manufacturing for Defense Applications
          </h2>
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <Image
              src="/images/untitled-design-1-1.png"
              alt="Defense-grade additively manufactured components"
              width={1000}
              height={1000}
              className="mx-auto h-auto w-full max-w-md rounded-2xl"
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

      {/* Key Capabilities for Defense Manufacturing */}
      <section className="bg-white py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
              Key Capabilities for Defense Manufacturing
            </h2>
            <ul className="mt-8 space-y-6">
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
          <Image
            src="/images/1_edited.png"
            alt="Mission-critical defense component"
            width={500}
            height={500}
            className="mx-auto h-auto w-full max-w-md"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Applications in Defense */}
      <section className="bg-surface py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <Image
            src="/images/defense-new-3.png"
            alt="Defense system component"
            width={500}
            height={500}
            className="mx-auto h-auto w-full max-w-md lg:order-1"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
          <div className="lg:order-2">
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Applications in Defense</h2>
            <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
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

      {/* Consumer Defense Capabilities */}
      <section className="bg-white py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
              Consumer Defense Capabilities
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              Azoth supports precision manufacturing for consumer defense applications, delivering
              high-performance firearm components with advanced customization.
            </p>
            <ul className="mt-6 space-y-4">
              {consumerItems.map((c) => (
                <li key={c} className="flex gap-3 leading-relaxed text-muted-soft">
                  <TriBullet />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-muted-soft">
              <Rich text="Additive manufacturing enables **custom geometries, weight optimization, and enhanced durability**, while advanced coatings and finishes provide both performance and differentiated aesthetics." />
            </p>
          </div>
          <Image
            src="/images/defense-new-4.png"
            alt="Consumer defense firearm component"
            width={500}
            height={500}
            className="mx-auto h-auto w-full max-w-md"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Specs — Materials / Performance */}
      <section className="bg-surface py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <Image
            src="/images/defense-new-7.png"
            alt="Production defense component"
            width={500}
            height={500}
            className="mx-auto h-auto w-full max-w-md"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
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
