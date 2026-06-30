import type { Metadata } from "next";
import Image from "next/image";
import { PageBanner } from "@/components/page-banner";
import { YouTubeEmbed } from "@/components/youtube-embed";
import { IndustriesSection } from "@/components/industries-section";

export const metadata: Metadata = {
  title: "TOMO®",
  description:
    "TOMO® — Take One, Make One. Eliminate supply chain disruptions by converting physical inventory into digital inventory manufactured on demand.",
};

const benefits = [
  {
    title: "Reduce Inventory Costs",
    icon: "/images/reduce-inventory-costs.svg",
    body: "Don't predict market demand and then order inventory which may become obsolete. With Azoth, you are able to make on-demand, allowing you to order when needed and change designs when needed—without carrying hundreds of thousands of dollars in part inventory.",
  },
  {
    title: "Rapid Speed Of Service & Production",
    icon: "/images/rapid-speed-of-service-production.svg",
    body: "Leveraging our additive manufacturing technology, Azoth is able to manufacture polymers in two to five days and precision metal components within seven to fifteen days.",
  },
  {
    title: "Prototyping & Production",
    icon: "/images/prototyping-production.svg",
    body: "Azoth can drastically cut your product development time and expense. Upload your latest designs and specs and we can produce a prototype part within 10–15 days. Since we use the same machine for manufacturing, part production can begin immediately. No more expensive molds, tooling, or minimum part orders.",
  },
  {
    title: "Zero Inventory Obsolescence",
    icon: "/images/zero-inventory-obsolescence.svg",
    body: "Azoth operates to industry material standards like MPIF 35 and ASTM B883 while maintaining a robust ISO 9001:2015 Quality Management System. Azoth has an internal metallography lab and testing equipment integrated into providing a Certificate of Inspection for EVERY PART.",
  },
  {
    title: "Superior Level Of Quality Control",
    icon: "/images/superior-level-of-quality-control.svg",
    body: "From specific serial numbers, names, logos, and QR codes, Azoth is able to offer endless mass customization possibilities for its clients or their end-users without additional cost or production time. End-users can utilize our online system and simply add a custom design to any production part.",
  },
  {
    title: "World Class 3D Manufacturing Experts",
    icon: "/images/world-class-3d-manufacturing-experts.svg",
    body: "No longer do you have to worry about typical design issues from subtractive or traditional manufacturing—such as draft angles for molds, tooling life, machinability, or whether parts can be reached during production. Azoth can assist in lightweighting your structures and suggest alternative materials and designs for your small, complex parts.",
  },
];

export default function TomoPage() {
  return (
    <>
      <PageBanner title="TOMO®" breadcrumbs={[{ label: "Home", href: "/" }, { label: "TOMO®" }]} />

      {/* Hero — bordered TOMO card on the left, intro copy on the right */}
      <section className="bg-white py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <div className="rounded-3xl border border-hairline px-8 py-16 text-center sm:px-12">
            <h2 className="text-5xl font-extrabold tracking-tight text-ink sm:text-6xl">
              TOMO<span className="align-super text-2xl text-brand">®</span>
            </h2>
            <p className="mt-4 text-xl font-bold text-ink sm:text-2xl">Take One, Make One</p>
          </div>
          <div className="space-y-5 leading-relaxed text-muted-soft">
            <p>
              Eliminate supply chain disruptions by converting physical inventory into digital
              inventory manufactured on demand.
            </p>
            <p>
              Digital inventory is a comprehensive supply chain management solution that ensures the
              highest standards of quality, while significantly reducing the costs, stress, and
              uncertainty commonly found in traditional manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* TOMO video */}
      <section className="bg-white pb-20">
        <div className="container-az">
          <div className="mx-auto max-w-4xl">
            <YouTubeEmbed id="fkiMJUXJjfA" title="TOMO — Take One, Make One" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-surface py-20">
        <div className="container-az">
          <h2 className="text-center text-3xl font-extrabold text-ink sm:text-4xl">
            Benefits Of TOMO®
          </h2>
          <p className="mt-4 text-center text-sm font-medium text-muted">
            Hover over a card to learn more.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    <h3 className="text-base font-bold uppercase leading-snug tracking-wide text-ink">
                      {benefit.title}
                    </h3>
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
                    <h3 className="text-base font-bold leading-snug">{benefit.title}</h3>
                    <p className="text-sm leading-relaxed text-white/85">{benefit.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustriesSection />
    </>
  );
}
