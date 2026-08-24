import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { PageBanner } from "@/components/page-banner";
import { CircleArrow } from "@/components/circle-arrow";
import { IndustriesSection } from "@/components/industries-section";

export const metadata: Metadata = {
  title: "CNC",
  description:
    "In-house 5-axis CNC machining at Azoth — precise machining of complex, additively manufactured metal components into finished, production-ready parts.",
  // Unlisted page: reachable by direct URL only. Keep it out of search engines
  // and off the sitemap / nav. (This is not access control — anyone with the URL
  // can still view it.)
  robots: { index: false, follow: false },
};

// The five production benefits of 5-axis machining, shown as flashcards that flip
// on hover/focus to reveal the supporting detail (matching the other capability
// pages). "Machine Complex Features & Geometries" is broken out into its own
// section below because it carries a bulleted list.
const benefits = [
  {
    title: "Fewer Setups",
    icon: "/images/prototyping-production.svg",
    body: "Complex parts traditionally may need to be removed, rotated and repositioned several times to machine different features. A 5-axis machine can access multiple sides of the component within a single setup. Fewer setups mean fewer opportunities for positioning error while helping streamline the overall manufacturing process.",
  },
  {
    title: "Greater Precision",
    icon: "/images/superior-level-of-quality-control.svg",
    body: "Every time a component is removed and repositioned, another variable is introduced into the machining process. By minimizing the number of setups required, 5-axis machining helps maintain consistent relationships between critical features and supports the tight tolerances required for demanding applications.",
  },
  {
    title: "Improved Efficiency",
    icon: "/images/rapid-speed-of-service-production.svg",
    body: "Reducing manual repositioning and combining multiple machining operations into fewer setups can shorten the path from printed component to finished part. For customers, that means a more efficient manufacturing process designed around speed, repeatability and production readiness.",
  },
  {
    title: "Consistency From Part to Part",
    icon: "/images/world-class-3d-manufacturing-experts.svg",
    body: "Azoth is a production-focused manufacturer, not simply a prototyping shop. When a component moves into serial production, repeatability becomes just as important as producing the first successful part. 5-axis machining helps create a controlled, repeatable process for machining critical features across production quantities.",
  },
];

// Part characteristics where the multi-angle access of 5-axis machining is most valuable.
const geometries = [
  "Complex contours and surfaces",
  "Angled features",
  "Deep pockets and cavities",
  "Precision holes and interfaces",
  "Features located on multiple sides of a component",
  "Geometries that are difficult to reach with conventional 3-axis machining",
];

export default function CncPage() {
  return (
    <>
      <PageBanner
        title="CNC"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Capabilities", href: "/capabilities" },
          { label: "CNC" },
        ]}
      />

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-hairline">
            <Image
              src="/images/binder-jetting-industrial-automation-machining-close-up.png"
              alt="5-axis CNC machining of a metal component"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <Eyebrow>5-Axis CNC Machining</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Precision for Complex, Production-Ready Parts
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              Additive manufacturing makes it possible to produce complex geometries that are
              difficult or sometimes impossible to achieve with traditional manufacturing alone. But
              for many production applications, creating the part is only the first step. Critical
              surfaces, holes, interfaces and other features may still require precise machining to
              meet final dimensional and performance requirements.
            </p>
            <p className="mt-4 text-lg font-bold leading-snug text-ink">
              That&apos;s where Azoth&apos;s in-house 5-axis CNC machining capabilities make a
              difference.
            </p>
            <Link
              href="/quote"
              className="mt-6 inline-flex items-center gap-2.5 rounded-md bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Request A Quote
              <CircleArrow tone="onRed" />
            </Link>
          </div>
        </div>
      </section>

      {/* What Is 5-Axis CNC Machining? */}
      <section className="bg-surface py-20">
        <div className="container-az max-w-3xl">
          <Eyebrow>The Technology</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            What Is 5-Axis CNC Machining?
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-soft">
            <p>
              Traditional 3-axis CNC machining moves a cutting tool along three directions: X, Y and
              Z. A 5-axis CNC machine adds two rotational axes, allowing the cutting tool and
              workpiece to move in multiple directions during the machining process.
            </p>
            <p>
              This gives the machine access to more sides and angles of a component without
              repeatedly removing, repositioning and resetting the part.
            </p>
            <p>
              For complex components, that added flexibility can make a significant difference in how
              efficiently and accurately a finished part can be produced.
            </p>
          </div>
        </div>
      </section>

      {/* Why 5-Axis Machining Matters for Additive Manufacturing */}
      <section className="bg-white py-20">
        <div className="container-az">
          <div className="max-w-3xl">
            <Eyebrow>Why It Matters</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Why 5-Axis Machining Matters for Additive Manufacturing
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              Azoth specializes in producing small, complex, end-use components where precision,
              repeatability and production scalability matter. 5-axis machining complements additive
              manufacturing by giving our team another tool for turning complex printed components
              into finished, production-ready parts.
            </p>
          </div>

          <p className="mt-8 text-sm font-medium text-muted">Hover over a card to learn more.</p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                tabIndex={0}
                className="group h-72 rounded-2xl [perspective:1200px] focus:outline-none"
              >
                <div className="relative h-full w-full rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 rounded-2xl border border-hairline bg-white px-6 text-center shadow-sm [backface-visibility:hidden]">
                    <Image src={benefit.icon} alt="" width={70} height={70} className="h-16 w-16" />
                    <h3 className="text-lg font-bold text-ink">{benefit.title}</h3>
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
                  {/* Back */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-dark to-black px-6 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h3 className="text-base font-bold">{benefit.title}</h3>
                    <p className="text-sm leading-relaxed text-white/85">{benefit.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Complex Features & Geometries */}
      <section className="bg-surface py-20">
        <div className="container-az grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <Eyebrow>Complex Geometry</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Machine Complex Features and Geometries
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              The ability to approach a component from multiple angles makes 5-axis machining
              particularly valuable for parts with:
            </p>
            <p className="mt-4 leading-relaxed text-muted-soft">
              For the complex components Azoth manufactures, this flexibility allows engineers to
              preserve the advantages of additive design while achieving the precision required on
              critical machined features.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {geometries.map((item) => (
              <li key={item} className="flex items-start gap-3 leading-relaxed text-ink-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Additive Manufacturing + Precision Machining Under One Roof */}
      <section className="bg-white py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Vertically Integrated</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Additive Manufacturing + Precision Machining Under One Roof
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-soft">
              <p>
                The real advantage of Azoth&apos;s 5-axis capabilities goes beyond the machine
                itself.
              </p>
              <p>
                Azoth brings additive manufacturing, machining, heat treatment, finishing and quality
                capabilities together within a vertically integrated manufacturing operation. Instead
                of treating post-processing as an afterthought, machining can be considered as part of
                the complete manufacturing strategy from the beginning.
              </p>
              <p>
                The result is a streamlined path from digital design to additively manufactured
                component to finished, inspected, production-ready part.
              </p>
              <p>
                For automotive, medical, defense and other demanding applications, that combination
                helps Azoth deliver the complexity of additive manufacturing with the precision and
                process control required for real-world production.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-hairline">
            <Image
              src="/images/post-processing-main-picture-v2-min.png"
              alt="Finished, precision-machined metal parts produced by Azoth"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-ink py-20 text-white">
        <div className="container-az max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Bring Us the Parts Others Say Are Too Complex
          </h2>
          <p className="mt-4 leading-relaxed text-white/80">
            When your application requires complex geometry, tight-tolerance features and a production
            process built for repeatability, Azoth can help determine the right combination of
            additive manufacturing and 5-axis CNC machining.
          </p>
          <p className="mt-4 leading-relaxed text-white/80">
            Ready to manufacture your next component?
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2.5 rounded-md bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Request A Quote
              <CircleArrow tone="onRed" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-md border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Talk to an Azoth Expert
            </Link>
          </div>
        </div>
      </section>

      <IndustriesSection />
    </>
  );
}
