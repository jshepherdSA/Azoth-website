import type { Metadata } from "next";
import Image from "next/image";
import { PageBanner } from "@/components/page-banner";
import { CertificationsCarousel } from "@/components/certifications-carousel";
import { IndustriesSection } from "@/components/industries-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2017, Azoth transforms supply chains with metal additive manufacturing, high-end finishing, and digital inventory—delivering production-quality parts on demand.",
};

const story = [
  {
    heading: "Our Mission",
    body: "Advance critical industries and strengthen national security by delivering small, complex, mission-critical metal components at production scale—leveraging advanced additive manufacturing to enable resilient, on-demand supply chains across defense, medical, and consumer electronics.",
  },
  {
    heading: "Our Story",
    body: "Founded in 2017, Azoth was created to transform supply chains with speed, flexibility, and precision. By combining cutting-edge metal additive manufacturing, high-end finishing, and program management, we help manufacturers shift from costly inventory systems to agile, digital ones. Our solutions empower companies to adopt a just-in-time production model, reducing waste, lowering costs, and minimizing downtime. With a focus on innovation and quality, Azoth bridges the gap between traditional manufacturing and the digital future. We don't just deliver parts—we deliver transformation.",
  },
];

const stats = [
  { value: "2017", label: "Founded" },
  { value: "500+", label: "Customers Served" },
  { value: "1M+", label: "Parts Shipped" },
  { value: "5 Days", label: "Fastest Lead Time" },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

      {/* Mission / Story / Vision */}
      <section className="bg-white py-20">
        <div className="container-az grid items-start gap-12 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28">
            <Image
              src="/images/our-mission-story-scaled.png"
              alt="Azoth additive manufacturing components and facility"
              width={2560}
              height={2473}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-10">
            {story.map((block) => (
              <div key={block.heading}>
                <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">{block.heading}</h2>
                <p className="mt-4 leading-relaxed text-muted-soft">{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative isolate overflow-hidden bg-ink py-16">
        <Image
          src="/images/about-counter-banner-scaled.png"
          alt=""
          fill
          className="-z-10 object-cover object-center opacity-55"
          sizes="100vw"
        />
        <div className="container-az grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-white/95 px-6 py-8 text-center shadow-lg backdrop-blur"
            >
              <div className="text-4xl font-extrabold text-brand">{stat.value}</div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-wide text-ink-soft">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CertificationsCarousel />

      <IndustriesSection />
    </>
  );
}
