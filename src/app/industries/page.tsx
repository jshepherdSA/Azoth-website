import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { PageBanner } from "@/components/page-banner";
import { CircleArrow } from "@/components/circle-arrow";
import { IndustriesSection } from "@/components/industries-section";
import { IndustriesCarousel } from "@/components/industries-carousel";
import { CountUp } from "@/components/count-up";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Azoth's on-demand additive manufacturing serves automotive, medical, defense, and consumer electronics — small, complex, high-quality parts produced without high inventory.",
};

const stats = [
  { target: 20, suffix: "M+", label: "Parts Shipped" },
  { target: 500, suffix: "+", label: "Clients Served" },
];

const heroSlides = [
  { src: "/images/cadillac-celestiq-new.png", alt: "Automotive component" },
  { src: "/images/medical-27.png", alt: "Medical component" },
  { src: "/images/industries-tab-consumer-electronics-new.png", alt: "Consumer electronics component" },
  { src: "/images/defense-new-1.png", alt: "Defense component" },
];

const capabilities: { label: string; image: string; href: string }[] = [
  { label: "Binder Jetting", image: "/images/capabilities-binder-jetting.png", href: "/capabilities/binder-jetting" },
  { label: "LMM", image: "/images/capabilities-lmm-scaled-e1779467021505.jpg", href: "/capabilities/lithography-metal-manufacturing" },
  { label: "Polymer Printing", image: "/images/capabilities-polymer-printing.jpg", href: "/capabilities/polymer-printing" },
  { label: "Finishing", image: "/images/past-processing.png", href: "/capabilities/post-processing" },
  { label: "Quality", image: "/images/azoth-quality.png", href: "/capabilities/quality" },
];

export default function IndustriesPage() {
  return (
    <>
      <PageBanner title="Industries" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]} />

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Built For Production</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              On-Demand Manufacturing for Every Industry
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              Azoth&apos;s disruptive on-demand additive (3D) manufacturing technology has been
              utilized in a wide range of industries that desire small, complex, and quality parts.
              Our technology gives manufacturers the design freedom to produce innovative,
              high-quality, lightweight, customizable parts on demand—without the need to carry high
              levels of inventory.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-hairline bg-surface px-6 py-8 text-center sm:py-10"
                >
                  <CountUp
                    target={stat.target}
                    suffix={stat.suffix}
                    className="block text-5xl font-extrabold leading-none text-brand sm:text-6xl lg:text-7xl"
                  />
                  <div className="mt-3 text-sm font-semibold uppercase tracking-wide text-ink-soft sm:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/quote"
              className="mt-8 inline-flex items-center gap-2.5 rounded-md bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Request A Quote
              <CircleArrow tone="onRed" />
            </Link>
          </div>
          <IndustriesCarousel slides={heroSlides} />
        </div>
      </section>

      {/* Industry tabs */}
      <IndustriesSection />

      {/* Our Capabilities */}
      <section className="bg-surface py-20">
        <div className="container-az">
          <div className="max-w-2xl">
            <Eyebrow>Our Capabilities</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              One Partner, End-to-End
            </h2>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {capabilities.map((cap) => (
              <Link
                key={cap.label}
                href={cap.href}
                className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-ink ring-1 ring-hairline sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <Image
                  src={cap.image}
                  alt={cap.label}
                  fill
                  className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-6">
                  <h3 className="text-xl font-bold text-white">{cap.label}</h3>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-colors group-hover:bg-brand-hover">
                    <svg viewBox="0 0 18 18" className="h-4 w-4" aria-hidden>
                      <path
                        d="M6.5 4 11.5 9 6.5 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
