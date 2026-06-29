import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBanner } from "@/components/page-banner";
import { CircleArrow } from "@/components/circle-arrow";
import { IndustryGallery, type GalleryPhoto } from "@/components/industry-gallery";

export const metadata: Metadata = {
  title: "Automotive",
  description:
    "Azoth is incorporated with 15+ Tier-One automotive suppliers and OEMs, delivering safety-critical, cosmetic, tooling, and prototyping parts with full PPAP documentation.",
};

const intro =
  "We serve a diverse range of industries where precision, performance, and speed matter most. From automotive and aerospace to medical, defense, and energy—we deliver tailored additive manufacturing solutions that meet industry-specific standards and accelerate time to market.";

const galleryPhotos: GalleryPhoto[] = [
  { src: "/images/automotive-3.png", alt: "Checkered patterned metal automotive component" },
  { src: "/images/automotive-4.jpg", alt: "American Made commemorative medallion" },
  { src: "/images/automotive-5.png", alt: "Jurassic Park collectible coin" },
  { src: "/images/automotive-new-1.png", alt: "Jeep Wrangler" },
  { src: "/images/automotive-6.png", alt: "Vintage pickup truck model" },
  { src: "/images/automotive-new-2.png", alt: "Vintage pickup truck" },
];

// Bold phrases are marked with **double asterisks** in the source copy.
const safety = [
  "**3D printing is ready to take the driver’s seat -** Not just for cosmetic garnishes but groundbreaking safety-critical and functional components.",
  "Collaborating seamlessly with esteemed designers, we supply and integrate additive manufacturing principles into the design process, **ensuring optimal functionality and efficiency** while pushing the boundaries of what's possible.",
  "Our quality assurance encompasses mechanical qualification processes that **guarantee the reliability of our parts**. Committed to industry-leading validation benchmarks, **we proudly hold OEM certifications**, signifying our dedication to meeting and exceeding the stringent requirements of the automotive industry.",
];

const cosmetic = [
  "Dive into a new world of refinement with our cosmetic components, where the artistry of 3D printing comes to life. We craft components with unique and intricate textures, **offering a visual and tactile experience like never before**.",
  "Our skilled team meets and **exceeds the industry standards** with high-polish capabilities, ensuring a flawless finish that captivates the eye. Moreover, our team's expertise extends to producing parts with diverse finishes on selective surfaces, providing a **bespoke touch to every design**.",
  "Setting a gold standard for visual inspections, we take pride in our **OEM-approved master models**, affirming our commitment to excellence in both form and function.",
  "Align with Azoth as your premier supplier for exceptional and unparalleled parts, where our expertise in 3D printing and finishes sets a **new benchmark in automotive design**.",
];

const tooling = [
  "**In the vehicle and on the factory floor** – Azoth breaks the constraints of conventional manufacturing methods to redefine tooling. With the ability to create **more efficient tools faster**, eliminate the long lead times and expansive inventory.",
  "In the realm of prototyping, Azoth accelerates your time to market by enabling designers to **rapidly iterate**, bringing your final design to life with **unprecedented speed and precision**. Our metal 3D printed prototypes boast high fidelity and functionality, providing an **authentic preview** of your production automotive parts.",
];

const ppapIntro = [
  "As a leading force in the industry, Azoth is your premier partner in delivering excellence to automotive. With a profound expertise in Production Part Approval Process (PPAP) and Advanced Product Quality Planning (APQP), we redefine reliability. Our professionals ensure that every product fulfills industry standards and meets your automotive needs.",
  "For those unfamiliar with PPAP, rest assured—we will guide you through the process seamlessly. PPAP, a standardized quality assurance framework, encompasses documentation, inspection, and testing procedures. We develop PPAP packages compliant with customer requirements including, but not limited to:",
];

const ppapItems = [
  "Part Submission Warrant (PSW)",
  "Control Plan",
  "PFMEA",
  "Appearance Approval Report, if applicable",
];

const ppapOutro =
  "From initial submission to final approval, we ensure reliability and compliance. Elevate your expectations; choose Azoth for a future of quality excellence.";

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

function StarBullet() {
  return (
    <span className="mt-0.5 shrink-0 text-brand">
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
        <path d="M8 0l1.6 4.9H15l-4.3 3.1 1.6 5L8 9.9l-4.3 3.1 1.6-5L1 4.9h5.4z" />
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

export default function AutomotivePage() {
  return (
    <>
      <PageBanner
        title="Automotive"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Automotive" }]}
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

      {/* Safety Critical and Functional */}
      <section className="bg-white py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <Image
            src="/images/safety-critical-img-new.png"
            alt="Safety-critical automotive components"
            width={564}
            height={425}
            className="h-auto w-full rounded-2xl"
          />
          <div>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
              Safety Critical and Functional
            </h2>
            <BulletList items={safety} />
            <Link
              href="/quote"
              className="mt-8 inline-flex items-center gap-2.5 rounded-md bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Request A Quote
              <CircleArrow tone="onRed" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cosmetic */}
      <section className="bg-white py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Cosmetic</h2>
            <BulletList items={cosmetic} />
          </div>
          <Image
            src="/images/automative-cosmetic.png"
            alt="Cosmetic automotive components — shift knobs and interior trim"
            width={2385}
            height={2385}
            className="h-auto w-full"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Tooling and Prototyping */}
      <section className="bg-white py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <Image
            src="/images/tool-and-prototyping-1-scaled.png"
            alt="Tooling and prototyping design sketches of automotive parts"
            width={2560}
            height={1460}
            className="h-auto w-full"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
          <div>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Tooling and Prototyping</h2>
            <BulletList items={tooling} />
          </div>
        </div>
      </section>

      {/* Production Part Approval Process (PPAP) */}
      <section className="bg-white py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
              Production Part Approval Process (PPAP)
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-soft">
              {ppapIntro.map((p) => (
                <p key={p} className="flex gap-3">
                  <TriBullet />
                  <span>{p}</span>
                </p>
              ))}
            </div>
            <ul className="mt-5 space-y-3 pl-8">
              {ppapItems.map((item) => (
                <li key={item} className="flex items-start gap-3 font-medium text-ink-soft">
                  <StarBullet />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 flex gap-3 leading-relaxed text-muted-soft">
              <TriBullet />
              <span>{ppapOutro}</span>
            </p>
          </div>
          <Image
            src="/images/ppap-scaled.png"
            alt="Production automotive parts with PPAP documentation"
            width={2560}
            height={2304}
            className="h-auto w-full"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
        </div>
      </section>
    </>
  );
}
