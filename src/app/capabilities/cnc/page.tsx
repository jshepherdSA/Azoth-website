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

// Production benefits of 5-axis machining, shown as a numbered capability grid
// (condensed from the source copy).
const benefits = [
  {
    title: "Fewer Setups",
    icon: "/images/prototyping-production.svg",
    body: "A 5-axis machine can access multiple sides of a component within a single setup, no repeatedly removing, rotating and repositioning it. Fewer setups mean fewer opportunities for positioning error.",
  },
  {
    title: "Greater Precision",
    icon: "/images/superior-level-of-quality-control.svg",
    body: "Minimizing the number of setups keeps consistent relationships between critical features and supports the tight tolerances demanding applications require.",
  },
  {
    title: "Machine Complex Features & Geometries",
    icon: "/images/complete-design-freedom-flexibility.svg",
    body: "Approaching a component from multiple angles reaches features that are difficult to hit with conventional 3-axis machining, while preserving the advantages of additive design.",
  },
  {
    title: "Improved Efficiency",
    icon: "/images/rapid-speed-of-service-production.svg",
    body: "Combining multiple operations into fewer setups shortens the path from printed component to finished part, a process built around speed, repeatability and production readiness.",
  },
  {
    title: "Consistency From Part to Part",
    icon: "/images/world-class-3d-manufacturing-experts.svg",
    body: "Azoth is production-focused, not a prototyping shop. 5-axis machining creates a controlled, repeatable process for machining critical features across production quantities.",
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

// Real Azoth certifications (shared across the site).
const certs = ["ISO 9001", "ISO 13485", "ITAR Registered", "Made in USA", "CMMC Lvl 2"];

// The vertically integrated path, straight from the source copy.
const pillars = ["Additive Manufacturing", "Machining", "Heat Treatment", "Finishing", "Quality"];

// Chevron-ribbon edge gradient: 6 stops from deep maroon (first segment) to brand
// red (last), so each segment's edge is the matching slice of one continuous
// gradient across the whole ribbon.
const edgeStops = ["#600004", "#78050a", "#900a10", "#a70f15", "#bf141b", "#d71921"];

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
        Proto <span className="text-brand">→</span> Prod
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
  icon,
  title,
  back,
  className = "",
}: {
  icon: string;
  title: string;
  back: ReactNode;
  className?: string;
}) {
  return (
    <div tabIndex={0} className={`group [perspective:1200px] focus:outline-none ${className}`}>
      <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
        {/* Front (header) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl border border-hairline bg-white px-5 text-center shadow-md [backface-visibility:hidden]">
          <Image src={icon} alt="" width={64} height={64} className="h-14 w-14" />
          <h3 className="text-base font-bold leading-snug text-ink">{title}</h3>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
            Learn More
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden>
              <path
                d="M6 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        {/* Back (content) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-dark to-black px-5 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h3 className="text-sm font-bold">{title}</h3>
          {back}
        </div>
      </div>
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
  // Flip tiles: the five benefits plus the geometry callout, each with a header
  // (front) and content (back).
  const tiles: { icon: string; title: string; back: ReactNode }[] = [
    ...benefits.map((b) => ({
      icon: b.icon,
      title: b.title,
      back: <p className="text-xs leading-snug text-white/85">{b.body}</p>,
    })),
    {
      icon: "/images/endless-customization-possibilities.svg",
      title: "Ideal for Parts With",
      back: (
        <ul className="space-y-1 text-left">
          {geometries.map((g) => (
            <li key={g} className="flex items-start gap-1.5 text-[11px] leading-snug text-white/85">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-white/70" />
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
          <div className="flex justify-center lg:justify-end">
            <PlaceholderGraphic className="aspect-[4/3] w-full max-w-md" label="Placeholder image" />
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
              Why 5-Axis Machining Matters for Additive Manufacturing
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              Azoth specializes in producing small, complex, end-use components where precision,
              repeatability and production scalability matter. 5-axis machining complements additive
              manufacturing by turning complex printed components into finished, production-ready
              parts.
            </p>
          </div>

          {/* Mobile / tablet: central image + stacked flip cards */}
          <div className="mt-10 lg:hidden">
            <PlaceholderGraphic
              dark={false}
              className="mx-auto aspect-video w-full max-w-sm"
              label="Placeholder image"
            />
            <p className="mt-6 text-center text-sm font-medium text-muted">Hover a card to learn more.</p>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              {tiles.map((t) => (
                <BenefitCard key={t.title} icon={t.icon} title={t.title} back={t.back} className="h-44" />
              ))}
            </div>
          </div>

          {/* Desktop: landscape flip cards floating around a central placeholder image */}
          <div className="mt-14 hidden items-center justify-between lg:flex">
            <div className="flex w-[28%] flex-col gap-7">
              <BenefitCard {...tiles[0]} className="h-48 translate-x-3" />
              <BenefitCard {...tiles[1]} className="mt-6 h-48 -translate-x-2" />
              <BenefitCard {...tiles[2]} className="h-48 translate-x-2" />
            </div>
            <PlaceholderGraphic
              dark={false}
              className="aspect-[4/3] w-[40%] shrink-0 self-center"
              label="Placeholder image"
            />
            <div className="flex w-[28%] flex-col gap-7">
              <BenefitCard {...tiles[3]} className="mt-12 h-48 -translate-x-3" />
              <BenefitCard {...tiles[4]} className="h-48 translate-x-2" />
              <BenefitCard {...tiles[5]} className="mt-6 h-48 -translate-x-2" />
            </div>
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
              <div className="mt-5 space-y-4 leading-relaxed text-white/70">
                <p>
                  The real advantage of Azoth&apos;s 5-axis capabilities goes beyond the machine
                  itself. Azoth brings additive manufacturing, machining, heat treatment, finishing
                  and quality capabilities together within a vertically integrated operation, so
                  machining is part of the manufacturing strategy from the beginning, not an
                  afterthought.
                </p>
                <p>
                  The result is a streamlined path from digital design to additively manufactured
                  component to finished, inspected, production-ready part. For automotive, medical,
                  defense and other demanding applications, that combination delivers the complexity
                  of additive manufacturing with the precision and process control real-world
                  production requires.
                </p>
              </div>
            </div>

            <PlaceholderGraphic className="aspect-[4/3] w-full" label="Placeholder image" />
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
