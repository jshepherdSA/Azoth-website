import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { Certifications } from "@/components/certifications";
import { IndustriesSection } from "@/components/industries-section";
import { FaqAccordion } from "@/components/faq-accordion";

const capabilities = [
  { label: "Binder Jetting", icon: "/images/binder-jetting-icon.svg", href: "/capabilities/binder-jetting" },
  { label: "LMM", icon: "/images/nano-particle-jetting-icon.svg", href: "/capabilities/lithography-metal-manufacturing" },
  { label: "Polymer Printing", icon: "/images/polymer-printing-icon.svg", href: "/capabilities/polymer-printing" },
  { label: "Finishing", icon: "/images/post-processing-icon.svg", href: "/capabilities/post-processing" },
];

const newsPosts = [
  {
    title: "Azoth Finishes for Metal 3D Printed Parts",
    href: "/azoth-blog/azoth-finishes-for-metal-3d-printed-parts",
    image: "/images/image-scaled.png",
    date: "June 2, 2026",
  },
  {
    title: "Plastic 3D Printing: Technology Overview",
    href: "/azoth-blog/plastic-3d-printing-technology-overview",
    image: "/images/ultimakers-1-1.jpg",
    date: "April 1, 2024",
  },
  {
    title: "Understanding Stainless Steels: 316-L and 17-4PH",
    href: "/azoth-blog/understanding-stainless-steels-316-l-and-17-4ph",
    image: "/images/single_part-scaled-1.jpg",
    date: "March 20, 2024",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image
          src="/images/home-page-hero-image-under-300kb-1.webp"
          alt=""
          fill
          priority
          className="-z-10 object-cover object-center opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
        <div className="container-az flex min-h-[560px] flex-col justify-center py-24">
          <div className="max-w-2xl">
            <Eyebrow>Production Additive Manufacturing</Eyebrow>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Scalable. Precise. Production-Ready.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              From rapid prototyping to high-volume part production, our additive manufacturing
              solutions deliver unmatched precision, repeatability, and speed. Whether it&apos;s
              metal or polymer, we help you go from design to delivery—faster and smarter.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <Certifications />

      {/* Capabilities */}
      <section className="bg-surface py-16">
        <div className="container-az grid grid-cols-2 gap-4 lg:grid-cols-4">
          {capabilities.map((cap) => (
            <Link
              key={cap.label}
              href={cap.href}
              className="group flex flex-col items-center gap-5 rounded-xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-ink transition-colors group-hover:bg-brand">
                <Image src={cap.icon} alt="" width={42} height={42} className="h-10 w-10" />
              </span>
              <span className="font-semibold text-ink transition-colors group-hover:text-brand">
                {cap.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Industries */}
      <IndustriesSection />

      {/* FAQ */}
      <section className="bg-surface py-20">
        <div className="container-az grid items-start gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>FAQs</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-muted-soft">
              Here are some of the most common questions we receive from our current and prospective
              clients.
            </p>
            <div className="relative mt-8 hidden aspect-[3/2] overflow-hidden rounded-2xl lg:block">
              <Image
                src="/images/faq.jpg"
                alt="Azoth additive manufacturing facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="lg:pt-14">
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="bg-white py-20">
        <div className="container-az">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>AZOTH Production Additive Manufacturing</Eyebrow>
              <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">News &amp; Updates</h2>
            </div>
            <Link
              href="/news"
              className="rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              View More
            </Link>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {newsPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group flex flex-col overflow-hidden rounded-2xl ring-1 ring-black/5 transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="text-sm text-muted">{post.date}</span>
                  <h3 className="text-lg font-bold leading-snug text-ink transition-colors group-hover:text-brand">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
