import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { CertificationsCarousel } from "@/components/certifications-carousel";
import { IndustriesSection } from "@/components/industries-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { CircleArrow } from "@/components/circle-arrow";

const capabilities = [
  { label: "Binder Jetting", icon: "/images/binder-jetting-icon.svg", href: "/capabilities/binder-jetting" },
  { label: "LMM", icon: "/images/nano-particle-jetting-icon.svg", href: "/capabilities/lithography-metal-manufacturing" },
  { label: "Polymer Printing", icon: "/images/polymer-printing-icon.svg", href: "/capabilities/polymer-printing" },
  { label: "Finishing", icon: "/images/post-processing-icon.svg", href: "/capabilities/post-processing" },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95C20.6 8.69 22 10.5 22 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9V9Z" />
    </svg>
  );
}

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
          className="-z-10 object-cover object-center opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/50 to-ink/15" />
        <div className="container-az flex min-h-[560px] flex-col justify-center py-24">
          <div className="max-w-2xl">
            <span className="text-base font-bold uppercase tracking-wider text-brand">
              Production Additive Manufacturing
            </span>
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
              className="mt-8 inline-flex items-center gap-2.5 rounded-md bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Talk to an Expert
              <CircleArrow tone="onRed" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications carousel */}
      <CertificationsCarousel />

      {/* Capabilities */}
      <section className="bg-surface py-16">
        <div className="container-az grid grid-cols-2 gap-4 lg:grid-cols-4">
          {capabilities.map((cap) => (
            <Link
              key={cap.label}
              href={cap.href}
              className="group relative flex min-h-[128px] flex-col justify-between gap-6 overflow-hidden rounded-xl bg-gradient-to-t from-black to-brand-dark p-5 text-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <Image src={cap.icon} alt="" width={44} height={44} className="h-11 w-11" />
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 text-white transition-colors group-hover:bg-white group-hover:text-brand-dark">
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
              <span className="text-xl font-bold">{cap.label}</span>
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
        <div className="container-az text-center">
          <Eyebrow>AZOTH Production Additive Manufacturing</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">News &amp; Updates</h2>

          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center rounded-2xl border border-hairline bg-surface px-6 py-16">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0A66C2] text-white">
              <LinkedInIcon />
            </span>
            <p className="mt-5 text-xl font-bold text-ink">LinkedIn feed coming soon</p>
            <p className="mt-2 text-muted-soft">
              Our latest news, announcements, and updates from LinkedIn will appear here.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/news"
              className="inline-flex items-center gap-2.5 rounded-md bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              View More
              <CircleArrow tone="onRed" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
