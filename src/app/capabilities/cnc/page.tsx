import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { CircleArrow } from "@/components/circle-arrow";
import { IndustriesSection } from "@/components/industries-section";
import { GuidelinesLinks } from "@/components/guidelines-links";
import { SITE_URL } from "@/lib/site";

const description =
  "U.S. precision CNC machining services for complex production parts. Additive + 5-axis CNC, finishing and inspection under one roof for medical and defense OEMs.";

export const metadata: Metadata = {
  title: "Precision CNC Machining Services for Complex Parts",
  description,
  // Unlisted page: reachable by direct URL only. Keep it out of search engines
  // and off the sitemap / nav. (This is not access control, anyone with the URL
  // can still view it.)
  robots: { index: false, follow: false },
};

// Structured data for search engines: what the service is, who provides it and
// where, and that it is sold to businesses rather than individuals. Update `url`
// if the page's address ever changes.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Precision 5-Axis CNC Machining Services",
  serviceType: "Precision CNC machining",
  description,
  url: `${SITE_URL}/capabilities/cnc`,
  provider: {
    "@type": "Organization",
    name: "Azoth",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ann Arbor",
      addressRegion: "MI",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "Country", name: "United States" },
  audience: {
    "@type": "BusinessAudience",
    name: "Medical, defense and consumer electronics manufacturers",
  },
};

// The four machining capability tiles (title only, two each side of the image).
const benefits = [
  { title: "Fewer Setups and Improved Efficiency" },
  { title: "Multiple Sides Machined in One Setup" },
  { title: "Ideal for Parts with Complex Geometry" },
  { title: "Near-Net Shapes for Precise Post-Machining" },
];

// Part characteristics where the multi-angle access of 5-axis machining is most valuable.
const geometries = ["Angled features", "Multiple faces", "Compound geometry", "Deep pockets"];

// Real Azoth certifications (shared across the site).
const certs = ["ISO 9001", "ISO 13485", "ITAR Registered", "Made in USA", "CMMC Lvl 2"];

// The vertically integrated path (machining through quality). Each stage heads a
// chevron in the ribbon and, beneath it, a column of common in-house options.
// The Machining column lists materials; the full list lives on /materials.
const stages = [
  {
    name: "Machining",
    options: ["Stainless steels", "Alloy steels", "Titaniums", "Nickel-based alloys", "Composites"],
  },
  {
    name: "Heat Treatment",
    options: ["Solutioning", "Annealing", "HIP (hot isostatic pressing)", "Aging"],
  },
  {
    name: "Finishing",
    options: [
      "Cerakote / Powder coat",
      "PVD (thin metal coating)",
      "Polish",
      "Plating",
      "Passivation",
    ],
  },
  {
    name: "Quality",
    options: [
      "Blue light scanning",
      "Keyence vision / visual inspection",
      "CMM inspection",
      "Hard gaging",
    ],
  },
];

// The options as table rows, one cell per stage (shorter columns leave blanks).
const optionRows = Array.from(
  { length: Math.max(...stages.map((stage) => stage.options.length)) },
  (_, row) => stages.map((stage) => stage.options[row] ?? ""),
);


// Placeholder application copy, one short sentence per industry (condensed from
// the earlier placeholder bullets). Replace with real copy.
const defenseSummary =
  "ITAR-compliant U.S. production of complex, mission-critical parts in high-strength alloys, with full traceability and inspection documentation.";

const medicalSummary =
  "Surgical instruments, end-effectors and small implantable components with tight-tolerance interfaces, in fully documented, repeatable production runs.";

const consumerSummary =
  "Miniaturized housings, frames, hinges and mounts with fine multi-finish cosmetic surfaces, at high volume with part-to-part consistency.";

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
        <span className="text-brand">±</span>0.005&quot;
      </>
    ),
    caption: "General tolerance when unspecified",
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

// Static capability tile: a title, with optional supporting content below it.
function BenefitCard({
  title,
  back,
  className = "",
}: {
  title: string;
  back?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border border-hairline bg-white px-5 py-6 text-center shadow-md ${className}`}
    >
      <h3 className="text-base font-bold leading-snug text-ink lg:text-lg xl:text-xl">{title}</h3>
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
  // Machining tiles: fill their grid row on phones and tablets; on desktop the
  // two tiles in a column share that column's height equally.
  const tileClass = "h-full lg:h-auto lg:min-h-0 lg:flex-1";
  // Link from each industry tile to that industry's page.
  const industryLinkClass =
    "link-az mt-4 inline-block";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="container-az grid items-center gap-12 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <Eyebrow>5-Axis CNC Machining Services</Eyebrow>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl">
              Precision CNC Machining for Small, Complex Parts
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
              alt="Line drawing of 5-axis CNC machining on a rotary table"
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
      <section className="bg-white pb-20 pt-12">
        <div className="container-az space-y-12">
          {/* Defense */}
          <div className="relative rounded-3xl bg-[#26262e] px-8 py-8 text-white sm:px-12 sm:py-10 lg:flex lg:min-h-[20rem] lg:items-center lg:px-14 lg:py-8">
            <div className="grid w-full items-center gap-10 lg:grid-cols-2">
              <div className="relative h-52 w-full">
                <Image
                  src="/images/defense-heat-exchanger.png"
                  alt="Copper heat exchanger cores with internal lattice structures"
                  width={893}
                  height={338}
                  className="absolute -bottom-2.5 -left-[74px] h-[66%] w-auto max-w-none rotate-[26deg] object-contain"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
                {/* Blisk in front, lower right, both spilling slightly past the box. */}
                <Image
                  src="/images/defense-blisk.png"
                  alt="Machined Inconel 718 blisk"
                  width={679}
                  height={574}
                  className="absolute right-14 -top-12 h-[115%] w-auto max-w-none object-contain drop-shadow-2xl"
                  sizes="(max-width: 1024px) 45vw, 22vw"
                />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold sm:text-4xl">Defense Applications</h2>
                <p className="mt-5 leading-relaxed text-white/70">{defenseSummary}</p>
                <Link href="/industries/defense-industry" className={industryLinkClass}>
                  Explore defense manufacturing
                </Link>
              </div>
            </div>
          </div>

          {/* Medical */}
          <div className="relative rounded-3xl bg-[#26262e] px-8 py-8 text-white sm:px-12 sm:py-10 lg:flex lg:min-h-[20rem] lg:items-center lg:px-14 lg:py-8">
            <div className="relative z-10 max-w-md lg:max-w-[26rem] xl:ml-[98px] xl:max-w-md">
              <h2 className="text-3xl font-extrabold sm:text-4xl">Medical Applications</h2>
              <p className="mt-5 leading-relaxed text-white/70">{medicalSummary}</p>
              <Link href="/industries/medical" className={industryLinkClass}>
                Explore medical manufacturing
              </Link>
            </div>
            {/* da Vinci in the box's top-right corner, turned clockwise about that
                corner. The artwork is cut off along the image's own top and right
                edges (the arms run out of frame), so the image is pushed just past
                the corner and this wrapper clips it to the box's top and right
                edges, rounded corner included, while leaving the bottom open for
                the needles to hang out of the box. overflow-x-clip stops the part
                pushed past the right edge from widening the page. */}
            <div
              className="pointer-events-none absolute inset-0 hidden overflow-x-clip lg:block"
              style={{ clipPath: "inset(0 0 -200px 0 round 1.5rem 1.5rem 0 0)" }}
            >
              <Image
                src="/images/davinci1nobackground.png"
                alt="Robotic surgical system instrument arms"
                width={1455}
                height={1386}
                className="absolute -right-[60px] top-0 h-auto w-[46%] max-w-[30rem] origin-top-right rotate-[13deg]"
                sizes="(max-width: 1023px) 0px, 30rem"
              />
            </div>
          </div>

          {/* Consumer electronics */}
          <div className="relative rounded-3xl bg-[#26262e] px-8 py-8 text-white sm:px-12 sm:py-10 lg:flex lg:min-h-[20rem] lg:items-center lg:px-14 lg:py-6">
            <div className="relative z-10 lg:ml-auto lg:max-w-[26rem] xl:max-w-md">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Consumer Electronics Applications
              </h2>
              <p className="mt-5 leading-relaxed text-white/70">{consumerSummary}</p>
              <Link href="/industries/consumer-electronics" className={industryLinkClass}>
                Explore consumer electronics manufacturing
              </Link>
            </div>
            {/* Glasses sit on top of the box, sized off the box height so they
                just clear its top and bottom edges at any breakpoint. */}
            <Image
              src="/images/Ray-Ban_Stories.png"
              alt="Smart glasses"
              width={1672}
              height={941}
              className="pointer-events-none absolute left-10 top-1/2 hidden h-[76%] w-auto max-w-none xl:h-[92%] -translate-y-[38%] -rotate-[20deg] object-contain drop-shadow-2xl lg:block"
              sizes="(max-width: 1023px) 0px, 45vw"
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
              parts. Our U.S.-based team runs production machining in-house in Ann Arbor, Michigan,
              for medical, defense and consumer electronics manufacturers.
            </p>
          </div>

          {/* One set of tiles and one photo for every screen size, so each
              heading appears in the page once. Phones and tablets: the part,
              then the tiles in a grid. Desktop: two tiles, the part, two tiles;
              the photo sets the row height and each pair of tiles is pinned to
              the part's own top and bottom edges (the cutout has 5.62% of clear
              space above and below it), so the two tiles together stand exactly
              as tall as the part. */}
          <div className="mt-10 lg:flex lg:items-center lg:gap-10">
            <Image
              src="/images/single-part-cutout.png"
              alt="Additively manufactured metal bracket with lattice infill"
              width={1337}
              height={1014}
              className="mx-auto h-auto w-full max-w-md lg:order-2 lg:mx-0 lg:w-[44%] lg:max-w-none lg:shrink-0"
              sizes="(max-width: 1023px) 90vw, 44vw"
            />
            <div className="mt-6 lg:relative lg:order-1 lg:mt-0 lg:w-[28%] lg:self-stretch">
              <div className="grid gap-5 sm:grid-cols-2 lg:absolute lg:inset-x-0 lg:bottom-[5.62%] lg:top-[5.62%] lg:flex lg:flex-col lg:gap-6">
                <BenefitCard title={benefits[0].title} className={tileClass} />
                <BenefitCard title={benefits[1].title} className={tileClass} />
              </div>
            </div>
            <div className="mt-5 lg:relative lg:order-3 lg:mt-0 lg:w-[28%] lg:self-stretch">
              <div className="grid gap-5 sm:grid-cols-2 lg:absolute lg:inset-x-0 lg:bottom-[5.62%] lg:top-[5.62%] lg:flex lg:flex-col lg:gap-6">
                <BenefitCard title={benefits[2].title} className={tileClass} />
                <BenefitCard title={benefits[3].title} className={tileClass} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal for Parts With, a short strip under the capability tiles */}
      <section className="bg-brand py-10 text-white">
        <div className="container-az flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
          <h2 className="shrink-0 text-xl font-extrabold sm:text-2xl">Ideal for Parts With</h2>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {geometries.map((g) => (
              <li key={g} className="flex items-center gap-2 font-medium">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                {g}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Additive + Precision Machining Under One Roof, dark band */}
      <section className="bg-ink py-20 text-white">
        <div className="container-az">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>Vertically Integrated</Eyebrow>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Additive Manufacturing + Precision CNC Machining Under One Roof
              </h2>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-white/10">
              <Image
                src="/images/cnc-stock.png"
                alt="5-axis CNC machine cutting a metal part under flood coolant"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Integrated process flow, a connected chevron ribbon: black segments
              with red chevron edges. Each segment is a red chevron (bg-brand) with
              a black chevron inset inside it (padding = the red edge); segments
              overlap so the shared edge reads as one red divider. The chevrons
              are also the column headers of the options table below, so the two
              share one scroll container and the same column geometry. */}
          <div className="mt-14 overflow-x-auto">
            <div className="min-w-[720px]">
              <div className="flex" aria-hidden>
                {stages.map((stage, i) => {
                  const clip =
                    i === 0
                      ? "polygon(0 0, calc(100% - 26px) 0, 100% 50%, calc(100% - 26px) 100%, 0 100%)"
                      : "polygon(26px 50%, 0 0, calc(100% - 26px) 0, 100% 50%, calc(100% - 26px) 100%, 0 100%)";
                  return (
                    <div
                      key={stage.name}
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
                        {stage.name}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Common options under each stage, in equal-width columns. The
                  chevrons overlap by 26px, so chevron i is centred
                  (26 / 2n) * (n - 1 - 2i) px to the right of column i; each cell
                  pads one side by twice that so its text sits centred under the
                  chevron label. The real headers are kept for screen readers. */}
              <table className="mt-3 w-full table-fixed border-collapse text-center">
                <thead className="sr-only">
                  <tr>
                    {stages.map((stage) => (
                      <th key={stage.name} scope="col">
                        {stage.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {optionRows.map((row, r) => (
                    <tr key={r}>
                      {row.map((cell, i) => {
                        const shift = (26 / (2 * stages.length)) * (stages.length - 1 - 2 * i);
                        return (
                          <td
                            key={stages[i].name}
                            className="border-b border-white/10 py-3 leading-relaxed text-white/70"
                            style={{
                              paddingLeft: 8 + Math.max(0, 2 * shift),
                              paddingRight: 8 + Math.max(0, -2 * shift),
                            }}
                          >
                            {cell}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/50">
            A sample of common options. See the{" "}
            <Link
              href="/materials"
              className="link-az"
            >
              full materials list
            </Link>
            , our{" "}
            <Link
              href="/capabilities/post-processing"
              className="link-az"
            >
              finishing and post-processing
            </Link>{" "}
            services and our{" "}
            <Link
              href="/capabilities/quality"
              className="link-az"
            >
              in-house quality inspection
            </Link>
            .
          </p>
          {/* Renders nothing until CNC_LIVE is true in src/lib/design-guidelines.ts. */}
          <GuidelinesLinks slugs={["cnc-machining"]} className="mt-2 text-sm text-white/50" />
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
              production process built for repeatability, Azoth&apos;s engineers can help determine
              the right combination of additive manufacturing and 5-axis CNC machining. Ready to
              manufacture your next component?
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

      {/* 3-axis and 5-axis machining, dual dark cards */}
      <section className="bg-white py-20">
        <div className="container-az">
          <div className="max-w-3xl">
            <Eyebrow>The Technology</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              3-Axis and 5-Axis CNC Machining
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

      {/* Industries, shared section used across the site */}
      <IndustriesSection />
    </>
  );
}
