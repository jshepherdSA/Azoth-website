import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { CircleArrow } from "@/components/circle-arrow";
import { IndustriesSection } from "@/components/industries-section";

export const metadata: Metadata = {
  title: "CNC",
  description:
    "In-house 5-axis CNC machining at Azoth, precise machining of complex, additively manufactured metal components into finished, production-ready parts.",
  // Unlisted page: reachable by direct URL only. Keep it out of search engines
  // and off the sitemap / nav. (This is not access control, anyone with the URL
  // can still view it.)
  robots: { index: false, follow: false },
};

// Production benefits of 5-axis machining, shown as short-bullet capability cards.
const benefits = [
  {
    title: "Fewer Setups, Improved Efficiency",
    icon: "/images/prototyping-production.svg",
    points: [
      "Multiple sides machined in a single setup",
      "Fewer setups, fewer positioning errors",
    ],
  },
  {
    title: "Machining for Additive Manufacturing",
    icon: "/images/world-class-3d-manufacturing-experts.svg",
    points: [
      "We machine the parts we print, in house",
      "Printed components finished to print tolerance",
    ],
  },
  {
    title: "Greater Precision",
    icon: "/images/superior-level-of-quality-control.svg",
    points: [
      "Consistent relationships between critical features",
      "Holds the tight tolerances demanding parts require",
    ],
  },
  {
    title: "Machine Complex Features & Geometries",
    icon: "/images/complete-design-freedom-flexibility.svg",
    points: [
      "Multi-angle access to hard-to-reach features",
      "Preserves the advantages of additive design",
    ],
  },
];

// Part characteristics where the multi-angle access of 5-axis machining is most valuable.
const geometries = [
  "Complex contours and surfaces",
  "Angled features",
  "Deep pockets and cavities",
  "Precision holes and interfaces",
  "Features on multiple sides of a component",
  "Geometries hard to reach with 3-axis machining",
];

// Pentagon vertices for the five machining tiles, centred on the image and
// rotated so one point lands at bottom centre. Angles 126/54/198/342/270 deg,
// with left = 50% + cos(a)*36 and top = 50% - sin(a)*37.5 (a wider-than-tall
// ellipse so the points fit the container). Order: upper-left, upper-right,
// lower-left, lower-right, bottom.
const pentagonPoints = [
  { left: "28.8%", top: "19.7%" },
  { left: "71.2%", top: "19.7%" },
  { left: "15.8%", top: "61.6%" },
  { left: "84.2%", top: "61.6%" },
  { left: "50%", top: "87.5%" },
];

// Real Azoth certifications (shared across the site).
const certs = ["ISO 9001", "ISO 13485", "ITAR Registered", "Made in USA", "CMMC Lvl 2"];

// The vertically integrated path (machining through quality).
const pillars = ["Machining", "Heat Treatment", "Finishing", "Quality"];

const integrationPoints = [
  "The biggest advantage of Azoth's capabilities is our vertical integration",
  "Get your parts manufactured, machined, treated, and coated in one place",
  "No more dealing with shipping your parts from facility to facility",
  "Any part. Any need. One order.",
];

// A sample of common in-house options. The full materials list lives on /materials.
const optionColumns = ["Materials", "Heat treatments", "Finishing"];
const optionRows = [
  ["Stainless steels", "Solutioning", "Cerakote"],
  ["Alloy steels", "Annealing", "Powder coat"],
  ["Titaniums", "HIP (hot isostatic pressing)", "PVD (thin metal coating)"],
  ["Nickel-based alloys", "and more", "Polish"],
  ["Composites", "", "Plating"],
];

// Placeholder application bullets, replace with real copy.
const medicalPoints = [
  "Surgical instruments and end-effectors",
  "Small, feature-dense implantable components",
  "Tight-tolerance interfaces and mating features",
  "Fully documented, repeatable production runs",
];

const defensePoints = [
  "Mission-critical components and assemblies",
  "ITAR-compliant, U.S.-based production",
  "Complex geometries in high-strength alloys",
  "Full traceability and inspection documentation",
];

const consumerPoints = [
  "Miniaturized housings, frames and enclosures",
  "Fine cosmetic surfaces and multi-finish detailing",
  "Precision hinges, mounts and interface features",
  "High-volume production with part-to-part consistency",
];

// Chevron-ribbon edge gradient: one stop per segment boundary (deep maroon on the
// first segment to brand red on the last), so each segment's edge is the matching
// slice of one continuous gradient across the whole ribbon.
const edgeStops = ["#600004", "#7e060b", "#9c0d13", "#b9131a", "#d71921"];

// Four-fact banner (from the 5-axis mockup). NOTE: these figures come from the
// mockup, not the source copy, confirm they are accurate for Azoth before launch.
const facts: { value: ReactNode; caption: string }[] = [
  {
    value: (
      <>
        <span className="text-brand">±</span>0.0005&quot;
      </>
    ),
    caption: "Achievable tolerance on critical features",
  },
  {
    value: (
      <>
        <span className="text-brand">1</span> Setup
      </>
    ),
    caption: "Complex parts machined complete without re-fixturing",
  },
  {
    value: (
      <>
        100<span className="text-brand">%</span>
      </>
    ),
    caption: "In-house CMM & GD&T verification",
  },
  {
    value: (
      <>
        Prototype <span className="text-brand">→</span> Production
      </>
    ),
    caption: "From first article through validated production",
  },
];

function CheckMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
      <path
        d="M5 12.5l4 4 10-10"
        stroke="#d71921"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Image placeholder for slots awaiting real graphics/photography. `dark` (default)
// styles it for dark sections; pass dark={false} on light (bg-surface) sections.
function PlaceholderGraphic({
  className = "",
  label = "Placeholder graphic",
  dark = true,
}: {
  className?: string;
  label?: string;
  dark?: boolean;
}) {
  const box = dark ? "border-white/20 bg-white/5" : "border-ink/20 bg-ink/[0.04]";
  const fg = dark ? "text-white/40" : "text-ink/40";
  return (
    <div className={`flex items-center justify-center rounded-xl border border-dashed ${box} ${className}`}>
      <div className={`flex flex-col items-center gap-2 ${fg}`}>
        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden>
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8.5" cy="9.5" r="1.5" fill="currentColor" />
          <path
            d="M4 17l5-5 4 4 3-3 4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-xs font-medium uppercase tracking-wider">{label}</span>
      </div>
    </div>
  );
}

// Hover/focus flip card matching the site's other flip tiles: header (icon +
// title) on the front, content on the back.
function BenefitCard({
  title,
  back,
  className = "",
}: {
  title: string;
  back: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border border-hairline bg-white px-5 py-6 text-center shadow-md ${className}`}
    >
      <h3 className="text-base font-bold leading-snug text-ink">{title}</h3>
      {back}
    </div>
  );
}

// Decorative 5-axis motion diagram for the hero. Tripod + rotary table + tool
// block, in the standard A-C configuration: A rotates about X, C about the
// vertical Z (the rotary table).
function AxisDiagram() {
  return (
    <svg viewBox="0 0 440 360" fill="none" aria-hidden className="h-auto w-full max-w-md">
      <defs>
        <marker id="ah-w" markerWidth="9" markerHeight="9" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="#ffffff" />
        </marker>
        <marker id="ah-r" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="#d71921" />
        </marker>
      </defs>
      {/* rotary table */}
      <ellipse cx="215" cy="264" rx="168" ry="54" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />
      {/* linear axes from origin */}
      <line x1="215" y1="264" x2="215" y2="86" stroke="#ffffff" strokeWidth="2" markerEnd="url(#ah-w)" />
      <line x1="215" y1="264" x2="70" y2="322" stroke="#ffffff" strokeWidth="2" markerEnd="url(#ah-w)" />
      <line x1="215" y1="264" x2="396" y2="304" stroke="#ffffff" strokeWidth="2" markerEnd="url(#ah-w)" />
      {/* tool block */}
      <rect x="200" y="96" width="30" height="22" rx="2" fill="#d71921" />

      {/* A, rotation about the X axis (X points down-left, screen angle ~158.2°) */}
      <g transform="rotate(158.2 145 290)">
        <path d="M145 270 A 8 20 0 0 0 145 310" stroke="#d71921" strokeWidth="1.6" strokeDasharray="3 4" />
        <path d="M145 310 A 8 20 0 0 0 145 270" stroke="#d71921" strokeWidth="2" markerEnd="url(#ah-r)" />
      </g>

      {/* C, rotation about the vertical Z axis (horizontal ring wrapping Z) */}
      <path d="M185 150 A 30 9 0 0 0 245 150" stroke="#d71921" strokeWidth="1.6" strokeDasharray="3 4" />
      <path d="M185 150 A 30 9 0 0 1 245 150" stroke="#d71921" strokeWidth="2" markerEnd="url(#ah-r)" />

      {/* labels */}
      <text x="226" y="84" fill="#fff" fontSize="16" fontWeight="700">Z</text>
      <text x="54" y="332" fill="#fff" fontSize="16" fontWeight="700">X</text>
      <text x="402" y="304" fill="#fff" fontSize="16" fontWeight="700">Y</text>
      <text x="118" y="306" fill="#d71921" fontSize="14" fontWeight="700">A</text>
      <text x="252" y="146" fill="#d71921" fontSize="14" fontWeight="700">C</text>
    </svg>
  );
}

// Simple 3-axis diagram (linear X/Y/Z only, no rotary axes) for the 3-Axis tile.
function AxisDiagramSimple() {
  return (
    <svg viewBox="0 0 440 360" fill="none" aria-hidden className="h-auto w-full max-w-md">
      <defs>
        <marker id="ah3-w" markerWidth="9" markerHeight="9" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="#ffffff" />
        </marker>
      </defs>
      {/* linear axes from origin */}
      <line x1="215" y1="264" x2="215" y2="86" stroke="#ffffff" strokeWidth="2" markerEnd="url(#ah3-w)" />
      <line x1="215" y1="264" x2="70" y2="322" stroke="#ffffff" strokeWidth="2" markerEnd="url(#ah3-w)" />
      <line x1="215" y1="264" x2="396" y2="304" stroke="#ffffff" strokeWidth="2" markerEnd="url(#ah3-w)" />
      {/* tool block */}
      <rect x="200" y="96" width="30" height="22" rx="2" fill="#d71921" />
      {/* labels */}
      <text x="226" y="84" fill="#fff" fontSize="16" fontWeight="700">Z</text>
      <text x="54" y="332" fill="#fff" fontSize="16" fontWeight="700">X</text>
      <text x="402" y="304" fill="#fff" fontSize="16" fontWeight="700">Y</text>
    </svg>
  );
}

export default function CncPage() {
  // Capability tiles: the four benefits plus the geometry callout, each a title
  // over one or two short bullets.
  const tiles: { icon: string; title: string; back: ReactNode }[] = [
    ...benefits.map((b) => ({
      icon: b.icon,
      title: b.title,
      back: (
        <ul className="space-y-1 text-left">
          {b.points.map((p) => (
            <li key={p} className="flex items-start gap-1.5 text-xs leading-snug text-muted-soft">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      ),
    })),
    {
      icon: "/images/endless-customization-possibilities.svg",
      title: "Ideal for Parts With",
      back: (
        <ul className="space-y-1 text-left">
          {geometries.map((g) => (
            <li key={g} className="flex items-start gap-1.5 text-[11px] leading-snug text-muted-soft">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-brand" />
              <span>{g}</span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="container-az grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <Eyebrow>Precision CNC Machining</Eyebrow>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl">
              5-Axis CNC Machining for Small, Complex Parts
            </h1>
            <p className="mt-6 max-w-xl leading-relaxed text-white/70">
              Additive manufacturing makes it possible to produce complex geometries that traditional
              manufacturing can&apos;t achieve alone, but creating the part is only the first step.
              Azoth&apos;s in-house 5-axis CNC machining turns complex printed components into
              finished, production-ready parts.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2.5 rounded-md bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-hover"
              >
                Request A Quote
                <CircleArrow tone="onRed" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-md border border-white/25 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Talk to an Azoth Expert
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:-mr-12 lg:justify-end xl:-mr-24">
            <Image
              src="/images/white-rotary-outline.png"
              alt="5-axis rotary machining motion outline"
              width={1774}
              height={887}
              className="h-auto w-full max-w-xl lg:max-w-none"
              priority
            />
          </div>
        </div>
      </section>

      {/* Certification strip */}
      <section className="border-t border-white/10 bg-ink">
        <div className="container-az flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-6">
          {certs.map((cert) => (
            <div key={cert} className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-white/20">
                <CheckMark />
              </span>
              <span className="text-sm font-semibold text-white/80">{cert}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Applications: three dark boxes floating on white, spaced apart */}
      <section className="bg-white pb-28 pt-16">
        <div className="container-az space-y-28">
          {/* Defense */}
          <div className="relative rounded-3xl bg-[#26262e] px-8 py-10 text-white sm:px-12 sm:py-12 lg:px-16 lg:py-14">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <PlaceholderGraphic className="aspect-[4/3] w-full" label="Placeholder image" />
              <div>
                <Eyebrow>Defense</Eyebrow>
                <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Defense Applications</h2>
                <ul className="mt-6 space-y-4">
                  {defensePoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 leading-relaxed text-white/70">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Medical */}
          <div className="relative rounded-3xl bg-[#26262e] px-8 py-10 text-white sm:px-12 sm:py-12 lg:min-h-[28rem] lg:px-16 lg:py-16">
            <div className="relative z-10 max-w-md">
              <Eyebrow>Medical</Eyebrow>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Medical Applications</h2>
              <ul className="mt-6 space-y-4">
                {medicalPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 leading-relaxed text-white/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* da Vinci anchored to the box's top-right corner, its own top-right
                radius matching the box so that corner stays cropped, with the
                extra height spilling past the bottom edge only. */}
            <Image
              src="/images/davinci1nobackground.png"
              alt="da Vinci surgical system"
              width={1455}
              height={1386}
              className="pointer-events-none absolute right-0 top-0 hidden h-auto w-[46%] max-w-[34rem] rounded-tr-3xl lg:block"
              sizes="(max-width: 1024px) 0px, 34rem"
              priority
            />
          </div>

          {/* Consumer electronics */}
          <div className="relative rounded-3xl bg-[#26262e] px-8 py-10 text-white sm:px-12 sm:py-12 lg:px-16 lg:py-9">
            <div className="relative z-10 lg:ml-auto lg:max-w-md">
              <Eyebrow>Consumer Electronics</Eyebrow>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Consumer Electronics Applications
              </h2>
              <ul className="mt-6 space-y-4">
                {consumerPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 leading-relaxed text-white/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Glasses sit on top of the box, sized off the box height so they
                just clear its top and bottom edges at any breakpoint. */}
            <Image
              src="/images/Ray-Ban_Stories.png"
              alt="Ray-Ban Stories smart glasses"
              width={1672}
              height={941}
              className="pointer-events-none absolute left-12 top-1/2 hidden h-full w-auto max-w-none -translate-y-[38%] -rotate-[20deg] object-contain drop-shadow-2xl lg:block"
              sizes="(max-width: 1024px) 0px, 45vw"
            />
          </div>
        </div>
      </section>

      {/* Four-fact banner */}
      <section className="bg-ink py-14 text-white">
        <div className="container-az grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.caption}>
              <div className="text-3xl font-extrabold sm:text-4xl">{fact.value}</div>
              <p className="mt-2 max-w-[15rem] text-sm leading-snug text-white/60">{fact.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why 5-Axis Machining Matters, flip cards floating around a central image */}
      <section className="bg-surface py-20">
        <div className="container-az">
          <div className="max-w-3xl">
            <Eyebrow>Machining Capability</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              5-Axis Manufacturing with Azoth
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              Azoth specializes in producing small, complex, end-use components where precision,
              repeatability and production scalability matter. 5-axis machining complements additive
              manufacturing by turning complex printed components into finished, production-ready
              parts.
            </p>
          </div>

          {/* Mobile / tablet: central image + stacked cards */}
          <div className="mt-10 lg:hidden">
            <Image
              src="/images/single-part-cutout.png"
              alt="Additively manufactured metal bracket with lattice infill"
              width={1337}
              height={1014}
              className="mx-auto h-auto w-full max-w-md"
              sizes="(max-width: 1024px) 90vw, 28rem"
            />
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {tiles.map((t) => (
                <BenefitCard key={t.title} title={t.title} back={t.back} className="h-full" />
              ))}
            </div>
          </div>

          {/* Desktop: the five tiles sit on the points of a pentagon centred on
              the image, rotated so one vertex lands at bottom centre. */}
          <div className="relative mt-14 hidden h-[900px] lg:block">
            <Image
              src="/images/single-part-cutout.png"
              alt="Additively manufactured metal bracket with lattice infill"
              width={1337}
              height={1014}
              className="absolute left-1/2 top-1/2 h-auto w-[38%] max-w-none -translate-x-1/2 -translate-y-1/2"
              sizes="(max-width: 1024px) 100vw, 38vw"
            />
            {tiles.map((tile, i) => (
              <div
                key={tile.title}
                className="absolute w-[22%] -translate-x-1/2 -translate-y-1/2"
                style={pentagonPoints[i]}
              >
                <BenefitCard title={tile.title} back={tile.back} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additive + Precision Machining Under One Roof, dark band */}
      <section className="bg-ink py-20 text-white">
        <div className="container-az">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>Vertically Integrated</Eyebrow>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Additive Manufacturing + Precision Machining Under One Roof
              </h2>
              <ul className="mt-5 space-y-4">
                {integrationPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 leading-relaxed text-white/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-white/10">
              <Image
                src="/images/azoth-cnc-machine1.png"
                alt="Azoth 5-axis CNC machine cutting a metal part on a tilting rotary table"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Integrated process flow, a connected chevron ribbon: black segments
              with red chevron edges. Each segment is a red chevron (bg-brand) with
              a black chevron inset inside it (padding = the red edge); segments
              overlap so the shared edge reads as one red divider. */}
          <div className="mt-14 overflow-x-auto">
            <div className="flex min-w-[720px]">
              {pillars.map((pillar, i) => {
                const clip =
                  i === 0
                    ? "polygon(0 0, calc(100% - 26px) 0, 100% 50%, calc(100% - 26px) 100%, 0 100%)"
                    : "polygon(26px 50%, 0 0, calc(100% - 26px) 0, 100% 50%, calc(100% - 26px) 100%, 0 100%)";
                return (
                  <div
                    key={pillar}
                    className={`h-16 flex-1 p-[3px] ${i > 0 ? "-ml-[26px]" : ""}`}
                    style={{
                      clipPath: clip,
                      background: `linear-gradient(90deg, ${edgeStops[i]}, ${edgeStops[i + 1]})`,
                    }}
                  >
                    <div
                      className="flex h-full w-full items-center justify-center bg-ink px-6 text-center text-sm font-bold leading-tight text-white sm:text-base"
                      style={{ clipPath: clip }}
                    >
                      {pillar}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Common options table. The full materials list stays on /materials. */}
          <div className="mt-14">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr>
                    {optionColumns.map((col) => (
                      <th
                        key={col}
                        scope="col"
                        className="border-b border-white/20 pb-3 pr-6 text-sm font-bold uppercase tracking-wider text-white"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {optionRows.map((row) => (
                    <tr key={row.join("|")}>
                      {row.map((cell, i) => (
                        <td
                          key={optionColumns[i]}
                          className="border-b border-white/10 py-3 pr-6 leading-relaxed text-white/70"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-white/50">
              A sample of common options. See the{" "}
              <Link
                href="/materials"
                className="font-semibold text-brand underline underline-offset-2 transition-colors hover:text-brand-hover"
              >
                full materials list
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* What Is 5-Axis CNC Machining?, dual dark cards */}
      <section className="bg-white py-20">
        <div className="container-az">
          <div className="max-w-3xl">
            <Eyebrow>The Technology</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              What Is 5-Axis CNC Machining?
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              Traditional 3-axis machining moves a cutting tool along three linear directions. A
              5-axis machine adds two rotational axes, the difference between reaching a few faces of
              a part and reaching nearly all of them in one setup.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* 3-Axis */}
            <div className="rounded-2xl bg-ink p-8 text-white">
              <div className="mx-auto mb-6 w-full max-w-sm">
                <AxisDiagramSimple />
                <p className="mt-1 text-center text-xs font-medium uppercase tracking-wider text-white/40">
                  3-Axis Linear Motion
                </p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                The Baseline
              </p>
              <h3 className="mt-2 text-2xl font-extrabold">3-Axis Machining</h3>
              <p className="mt-4 leading-relaxed text-white/70">
                Moves a cutting tool along three linear directions: X, Y and Z.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Larger parts due to bigger work envelopes",
                  "Reduce complexity, get parts faster",
                  "Quicker lead times",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 leading-relaxed text-white/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 font-mono text-sm text-white/80">
                X · Y · Z
              </div>
            </div>
            {/* 5-Axis */}
            <div className="rounded-2xl bg-gradient-to-br from-brand-dark to-black p-8 text-white ring-1 ring-brand/40">
              <div className="mx-auto mb-6 w-full max-w-sm">
                <AxisDiagram />
                <p className="mt-1 text-center text-xs font-medium uppercase tracking-wider text-white/40">
                  5-Axis Simultaneous Motion
                </p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                Two More Axes
              </p>
              <h3 className="mt-2 text-2xl font-extrabold">5-Axis Machining</h3>
              <p className="mt-4 leading-relaxed text-white/80">
                Adds two rotational axes, allowing the cutting tool and workpiece to move in multiple
                directions, accessing more sides and angles of a component without repeatedly
                removing, repositioning and resetting the part.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-md bg-white/15 px-3 py-1.5 font-mono text-sm text-white">
                X · Y · Z · A · C
              </div>
            </div>
          </div>

          <p className="mt-8 max-w-3xl leading-relaxed text-muted-soft">
            For complex components, that added flexibility can make a significant difference in how
            efficiently and accurately a finished part can be produced.
          </p>
        </div>
      </section>

      {/* Closing CTA banner */}
      <section className="bg-brand py-10 text-white">
        <div className="container-az flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-xl font-extrabold sm:text-2xl">
              Bring Us the Parts Others Say Are Too Complex
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              When your application requires complex geometry, tight-tolerance features and a
              production process built for repeatability, Azoth can help determine the right
              combination of additive manufacturing and 5-axis CNC machining. Ready to manufacture
              your next component?
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2.5 rounded-md bg-white px-6 py-3 font-semibold text-ink transition-colors hover:bg-white/90"
            >
              Request A Quote
              <CircleArrow tone="solid" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-md border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Industries, shared section used across the site */}
      <IndustriesSection />
    </>
  );
}
