import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { CircleArrow } from "@/components/circle-arrow";

export const metadata: Metadata = {
  title: "CNC",
  description:
    "In-house 5-axis CNC machining at Azoth — precise machining of complex, additively manufactured metal components into finished, production-ready parts.",
  // Unlisted page: reachable by direct URL only. Keep it out of search engines
  // and off the sitemap / nav. (This is not access control — anyone with the URL
  // can still view it.)
  robots: { index: false, follow: false },
};

// Production benefits of 5-axis machining, shown as a numbered capability grid
// (condensed from the source copy).
const benefits = [
  {
    title: "Fewer Setups",
    body: "A 5-axis machine can access multiple sides of a component within a single setup — no repeatedly removing, rotating and repositioning it. Fewer setups mean fewer opportunities for positioning error.",
  },
  {
    title: "Greater Precision",
    body: "Minimizing the number of setups keeps consistent relationships between critical features and supports the tight tolerances demanding applications require.",
  },
  {
    title: "Machine Complex Features & Geometries",
    body: "Approaching a component from multiple angles reaches features that are difficult to hit with conventional 3-axis machining — while preserving the advantages of additive design.",
  },
  {
    title: "Improved Efficiency",
    body: "Combining multiple operations into fewer setups shortens the path from printed component to finished part — a process built around speed, repeatability and production readiness.",
  },
  {
    title: "Consistency From Part to Part",
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
const certs = ["ISO 9001", "ISO 13485", "ITAR Registered", "Made in USA", "AIAG Member"];

// The vertically integrated path, straight from the source copy.
const pillars = ["Additive Manufacturing", "Machining", "Heat Treatment", "Finishing", "Quality"];

// Real industries served, linking to their pages. Descriptors are grounded in
// each industry page's own content.
const industries = [
  {
    letter: "A",
    name: "Automotive",
    href: "/industries/automotive",
    body: "Safety-critical, cosmetic, and tooling components with full PPAP documentation.",
  },
  {
    letter: "M",
    name: "Medical",
    href: "/industries/medical",
    body: "Feature-dense components produced under ISO 13485-certified processes.",
  },
  {
    letter: "D",
    name: "Defense",
    href: "/industries/defense-industry",
    body: "ITAR-registered production of mission-critical hardware.",
  },
  {
    letter: "C",
    name: "Consumer Electronics",
    href: "/industries/consumer-electronics",
    body: "Miniaturized, complex metal parts with fine features and tight tolerances.",
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

// Decorative 5-axis motion diagram for the hero. Original tripod + rotary table +
// tool block, with the two rotary axes moved onto their linear axes: A rotates
// about X, B about Y.
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

      {/* A — rotation about the X axis (X points down-left, screen angle ~158.2°) */}
      <g transform="rotate(158.2 145 290)">
        <path d="M145 270 A 8 20 0 0 0 145 310" stroke="#d71921" strokeWidth="1.6" strokeDasharray="3 4" />
        <path d="M145 310 A 8 20 0 0 0 145 270" stroke="#d71921" strokeWidth="2" markerEnd="url(#ah-r)" />
      </g>

      {/* B — rotation about the Y axis (Y points down-right, screen angle ~12.5°) */}
      <g transform="rotate(12.5 305 284)">
        <path d="M305 264 A 8 20 0 0 0 305 304" stroke="#d71921" strokeWidth="1.6" strokeDasharray="3 4" />
        <path d="M305 304 A 8 20 0 0 0 305 264" stroke="#d71921" strokeWidth="2" markerEnd="url(#ah-r)" />
      </g>

      {/* labels */}
      <text x="226" y="84" fill="#fff" fontSize="16" fontWeight="700">Z</text>
      <text x="54" y="332" fill="#fff" fontSize="16" fontWeight="700">X</text>
      <text x="402" y="304" fill="#fff" fontSize="16" fontWeight="700">Y</text>
      <text x="118" y="306" fill="#d71921" fontSize="14" fontWeight="700">A</text>
      <text x="322" y="302" fill="#d71921" fontSize="14" fontWeight="700">B</text>
    </svg>
  );
}

export default function CncPage() {
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
              manufacturing can&apos;t achieve alone — but creating the part is only the first step.
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
            <div className="w-full max-w-md">
              <AxisDiagram />
              <p className="mt-2 text-center text-xs font-medium uppercase tracking-wider text-white/40">
                5-Axis Simultaneous Motion
              </p>
            </div>
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

      {/* What Is 5-Axis CNC Machining? — dual dark cards */}
      <section className="bg-white py-20">
        <div className="container-az">
          <div className="max-w-3xl">
            <Eyebrow>The Technology</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              What Is 5-Axis CNC Machining?
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              Traditional 3-axis machining moves a cutting tool along three linear directions. A
              5-axis machine adds two rotational axes — the difference between reaching a few faces of
              a part and reaching nearly all of them in one setup.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* 3-Axis */}
            <div className="rounded-2xl bg-ink p-8 text-white">
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
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                Two More Axes
              </p>
              <h3 className="mt-2 text-2xl font-extrabold">5-Axis Machining</h3>
              <p className="mt-4 leading-relaxed text-white/80">
                Adds two rotational axes, allowing the cutting tool and workpiece to move in multiple
                directions — accessing more sides and angles of a component without repeatedly
                removing, repositioning and resetting the part.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-md bg-white/15 px-3 py-1.5 font-mono text-sm text-white">
                X · Y · Z · A · B
              </div>
            </div>
          </div>

          <p className="mt-8 max-w-3xl leading-relaxed text-muted-soft">
            For complex components, that added flexibility can make a significant difference in how
            efficiently and accurately a finished part can be produced.
          </p>
        </div>
      </section>

      {/* Why 5-Axis Machining Matters — numbered capability grid */}
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

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-hairline bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-extrabold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-bold text-ink">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-soft">{benefit.body}</p>
              </div>
            ))}

            {/* Geometry callout occupies the final grid cell */}
            <div className="rounded-2xl bg-ink p-6 text-white">
              <h3 className="text-lg font-bold">Ideal for parts with</h3>
              <ul className="mt-3 space-y-2">
                {geometries.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-white/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additive + Precision Machining Under One Roof — dark band */}
      <section className="bg-ink py-20 text-white">
        <div className="container-az">
          <div className="max-w-3xl">
            <Eyebrow>Vertically Integrated</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Additive Manufacturing + Precision Machining Under One Roof
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-white/70">
              <p>
                The real advantage of Azoth&apos;s 5-axis capabilities goes beyond the machine itself.
                Azoth brings additive manufacturing, machining, heat treatment, finishing and quality
                capabilities together within a vertically integrated operation — so machining is part
                of the manufacturing strategy from the beginning, not an afterthought.
              </p>
              <p>
                The result is a streamlined path from digital design to additively manufactured
                component to finished, inspected, production-ready part. For automotive, medical,
                defense and other demanding applications, that combination delivers the complexity of
                additive manufacturing with the precision and process control real-world production
                requires.
              </p>
            </div>
          </div>

          {/* Integrated process flow */}
          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3">
            {pillars.map((pillar, i) => (
              <div key={pillar} className="flex items-center gap-3">
                <span className="rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white">
                  {pillar}
                </span>
                {i < pillars.length - 1 && (
                  <span className="text-brand" aria-hidden>
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precision Parts for Demanding Sectors — industry cards */}
      <section className="bg-white py-20">
        <div className="container-az">
          <div className="max-w-3xl">
            <Eyebrow>Industries</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Precision Parts for Demanding Sectors
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              The same 5-axis capability that produces intricate parts scales into repeatable,
              documented production for regulated industries.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="group flex flex-col rounded-2xl border border-hairline bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-brand font-bold text-brand">
                  {industry.letter}
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{industry.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-soft">{industry.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Learn More
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden>
                    <path
                      d="M6 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-brand py-16 text-white">
        <div className="container-az flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Bring Us the Parts Others Say Are Too Complex
            </h2>
            <p className="mt-4 leading-relaxed text-white/85">
              When your application requires complex geometry, tight-tolerance features and a
              production process built for repeatability, Azoth can help determine the right
              combination of additive manufacturing and 5-axis CNC machining. Ready to manufacture
              your next component?
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2.5 rounded-md bg-white px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-white/90"
            >
              Request A Quote
              <CircleArrow tone="solid" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-md border border-white/40 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
