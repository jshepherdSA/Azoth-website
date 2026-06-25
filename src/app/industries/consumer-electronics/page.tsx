import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBanner } from "@/components/page-banner";
import { CircleArrow } from "@/components/circle-arrow";
import { IndustryGallery, type GalleryPhoto } from "@/components/industry-gallery";

export const metadata: Metadata = {
  title: "Consumer Electronics",
  description:
    "Azoth is a digital manufacturing partner for consumer electronics — miniaturized, complex metal components with fine features, tight tolerances, and rapid iteration to production.",
};

const intro =
  "We serve a diverse range of industries where precision, performance, and speed matter most. From automotive and aerospace to medical, defense, and energy—we deliver tailored additive manufacturing solutions that meet industry-specific standards and accelerate time to market.";

const galleryPhotos: GalleryPhoto[] = [
  { src: "/images/watch-6.png", alt: "Exploded view of a smartwatch assembly" },
  { src: "/images/watch-3.png", alt: "Smartwatch case components" },
  { src: "/images/watch-4.png", alt: "Wearable device housing" },
  { src: "/images/watch-5.png", alt: "Precision watch components" },
  { src: "/images/watch-2.png", alt: "Metal watch case" },
  { src: "/images/watch-1.png", alt: "Smartwatch component" },
];

const advanced = [
  "The consumer electronics industry demands constant innovation—driven by shorter product lifecycles, evolving user expectations, and increasing pressure to deliver smaller, smarter, and more integrated devices.",
  "From wearable technology and smart home devices to mobile hardware and semiconductor-adjacent components, manufacturers must balance speed, precision, and scalability at every stage of development.",
  "Azoth partners with consumer electronics companies as a digital manufacturing partner, enabling rapid iteration, complex part production, and flexible manufacturing strategies—helping teams accelerate development timelines, reduce costs, and bring differentiated products to market faster.",
];

const capabilitiesIntro =
  "Using technologies like binder jetting and lithography-based metal additive manufacturing, Azoth produces precision metal parts with fine features, tight tolerances, and high repeatability—ideal for compact, performance-critical devices.";

// Bold lead phrase marked with **double asterisks**.
const capabilities = [
  "**Miniaturized, Complex Components** - Azoth specializes in geometries that are difficult or impossible to machine or mold—such as internal channels, lattice structures, and intricate housings. These are essential for wearables, connectors, thermal components, and micro-mechanisms where space is limited and performance is critical.",
  "**Rapid Iteration to Production** - Electronics companies operate on aggressive product development cycles. Azoth enables fast design iteration and validation, then seamlessly transitions those same designs into serial production—eliminating the need to retool or redesign for manufacturability.",
  "**Thermal and Structural Performance** - Metal additive manufacturing allows for optimized heat dissipation—integrated heat sinks, thermal spreaders—and high-strength parts in compact form factors, key for smartphones, AR/VR systems, and power electronics.",
  "**Supply Chain Flexibility & Digital Inventory** - Azoth's model supports on-demand manufacturing and localized production, reducing reliance on overseas tooling and long lead times. Especially valuable for product launches, service parts, and managing demand variability.",
  "**Production-Grade Quality Systems** - With experience across automotive, medical, and defense sectors, Azoth brings rigorous quality control, traceability, and process validation—helping electronics OEMs confidently deploy additively manufactured metal parts in end-use applications.",
  "**Addressing Key Manufacturing Challenges** - Azoth directly addresses the core pressures of consumer electronics manufacturing: accelerating time to market, enabling design complexity and miniaturization, reducing tooling costs for low-volume production, and increasing supply chain agility through domestic, on-demand manufacturing.",
];

const cncIntro =
  "For many consumer electronics components—particularly where complexity, scale, and cost intersect—Azoth's additive approach outperforms traditional CNC machining:";

const cnc = [
  "**Complexity without cost penalty:** Internal geometries, undercuts, and fine lattice structures are produced in a single build—eliminating multi-axis machining setups, custom fixturing, and secondary operations.",
  "**Reduced material waste:** Unlike subtractive machining that removes material from billet, Azoth's processes use only the material needed—improving efficiency, especially for high-cost alloys.",
  "**Scalable economics at volume:** For small, intricate parts, additive manufacturing can outperform machining on cost by eliminating setup time, tool wear, and cycle-time constraints.",
  "**Part consolidation:** Multiple machined components can often be combined into a single printed part, reducing assembly, tolerance stack-up, and supply chain complexity.",
  "**Faster time to production:** No tooling or complex process development required—programs move directly from design to production, critical in fast-moving electronics markets.",
];

const applications = [
  { title: "Rapid Prototyping & Design Iteration", icon: "/images/reduce-inventory-costs.svg" },
  { title: "Enclosures, Housings & Structural Components", icon: "/images/rapid-speed-of-service-production.svg" },
  { title: "Precision Components for Consumer Devices", icon: "/images/prototyping-production.svg" },
  { title: "Thermal Components & Heat Management", icon: "/images/zero-inventory-obsolescence.svg" },
  { title: "Jigs, Fixtures & Manufacturing Tooling", icon: "/images/superior-level-of-quality-control.svg" },
  { title: "Bridge & Low-Volume Production", icon: "/images/world-class-3d-manufacturing-experts.svg" },
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-muted-soft">
          <TriBullet />
          <span>
            <Rich text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function ConsumerElectronicsPage() {
  return (
    <>
      <PageBanner
        title="Consumer Electronics"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Consumer Electronics" }]}
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

      {/* Advanced Additive Manufacturing for Consumer Electronics Innovation */}
      <section className="bg-surface py-20">
        <div className="container-az">
          <h2 className="mx-auto max-w-4xl text-center text-3xl font-extrabold text-ink sm:text-4xl">
            Advanced Additive Manufacturing for Consumer Electronics Innovation
          </h2>
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <Image
              src="/images/industries-tab-consumer-electronics-edited-768x768.png"
              alt="Exploded view of a smartwatch built with metal additive manufacturing"
              width={768}
              height={768}
              className="mx-auto h-auto w-full max-w-md"
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

      {/* Key Capabilities for Consumer Electronics */}
      <section className="bg-white py-20">
        <div className="container-az grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
              Key Capabilities for Consumer Electronics
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">{capabilitiesIntro}</p>
            <BulletList items={capabilities} />
          </div>
          <Image
            src="/images/watch-6.png"
            alt="Exploded smartwatch assembly"
            width={750}
            height={750}
            className="mx-auto h-auto w-full max-w-md lg:sticky lg:top-28"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* A Compelling Alternative to CNC Machining */}
      <section className="bg-surface py-20">
        <div className="container-az grid items-start gap-12 lg:grid-cols-2">
          <Image
            src="/images/watch-3.png"
            alt="Precision watch case components"
            width={750}
            height={750}
            className="mx-auto h-auto w-full max-w-md lg:order-1 lg:sticky lg:top-28"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
          <div className="lg:order-2">
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
              A Compelling Alternative to CNC Machining
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">{cncIntro}</p>
            <BulletList items={cnc} />
          </div>
        </div>
      </section>

      {/* Applications in Consumer Electronics */}
      <section className="bg-white py-20">
        <div className="container-az">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
              Applications in Consumer Electronics
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              Azoth delivers across the full product development and production lifecycle:
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((app) => (
              <div
                key={app.title}
                className="group relative flex flex-col items-center gap-5 rounded-2xl border border-hairline bg-white px-8 py-10 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <Image src={app.icon} alt="" width={70} height={70} className="h-14 w-14" />
                <h3 className="text-sm font-bold uppercase tracking-wide text-ink">{app.title}</h3>
                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-muted transition-colors group-hover:text-brand">
                  <svg viewBox="0 0 16 16" fill="none" className="h-5 w-5" aria-hidden>
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
