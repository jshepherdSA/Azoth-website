import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { PageBanner } from "@/components/page-banner";
import { CircleArrow } from "@/components/circle-arrow";
import { YouTubeEmbed } from "@/components/youtube-embed";
import { Accordion, type AccordionItem } from "@/components/accordion";
import { IndustriesSection } from "@/components/industries-section";

export const metadata: Metadata = {
  title: "Binder Jetting",
  description:
    "Azoth is one of the first companies to offer metal binder jetting for production — high-quality, complex metal parts in 17-4PH, 316L, copper, Mar M247, and D2 tool steel.",
};

const materials = [
  "17-4PH Stainless Steel",
  "316L Stainless Steel",
  "Pure Copper",
  "Mar M247",
  "D2 Tool Steel",
];

const specs: AccordionItem[] = [
  {
    title: "Materials",
    body: (
      <ul className="grid gap-2 sm:grid-cols-2">
        {materials.map((m) => (
          <li key={m} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {m}
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Specifications",
    body: <p>Azoth can work with your engineers to your exact blueprint and quality standards.</p>,
  },
  {
    title: "Platforms",
    body: (
      <p>
        Azoth is vendor neutral, vertically integrated, and selects the best technology for your
        application. Azoth utilizes printing technology from Digital Metal, Desktop Metal, Elnik and
        more to produce quality parts second to none.
      </p>
    ),
  },
  {
    title: "Workflow",
    body: (
      <p>
        Upload your CAD file and blueprint (if available) to our Request Quote platform. An engineer
        with binder jetting expertise will evaluate your product and provide a quote within 24hrs.
        Typical lead time is 7–15 days and Azoth will provide DFAM when needed.
      </p>
    ),
  },
];

// "Why Azoth Binder Jetting?" — six benefit tiles (maroon value icon + title) that
// flip like a flashcard on hover/focus to reveal the supporting paragraph.
const whyCards = [
  {
    title: "Reduce Inventory Costs",
    icon: "/images/reduce-inventory-costs.svg",
    body: "Don't predict market demand and then order inventory which may become obsolete. With Azoth, you are able to make on-demand, allowing you to order when needed and change designs when needed—without carrying hundreds of thousands of dollars in part inventory.",
  },
  {
    title: "Rapid Speed of Service & Production",
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

export default function BinderJettingPage() {
  return (
    <>
      <PageBanner
        title="Binder Jetting"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Capabilities", href: "/capabilities" },
          { label: "Binder Jetting" },
        ]}
      />

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <YouTubeEmbed id="K53Aeq1czQM" title="Azoth — Production 3D Printing Is Here" />
          <div>
            <Eyebrow>Metal Binder Jetting</Eyebrow>
            <p className="mt-3 text-xl font-bold leading-snug text-ink sm:text-2xl">
              Azoth is one of the very first companies to offer metal binder jetting for production
              and is the trusted leader for high-quality, complex metal parts.
            </p>
            <p className="mt-4 leading-relaxed text-muted-soft">
              Azoth has certified production applications throughout the automotive, defense,
              electronics, and medical industries.
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
        <div className="container-az mt-12">
          <p className="leading-relaxed text-muted-soft">
            Binder jetting is the ideal metal 3D printing process for manufacturing very detailed,
            small, complex metal components. Binder jetting utilizes a binding agent which is
            selectively deposited in the shape of the part at each layer of printing. The parts then
            undergo an operation called sintering which creates a fully dense metal component ready
            for its end-use application or further post-processing. Azoth&apos;s production binder
            jetting platform delivers repeatable, high-volume output with the design freedom of
            additive manufacturing—skipping the tooling costs and long lead times of traditional
            processes while holding tight tolerances and superior surface quality across every part.
          </p>
        </div>
      </section>

      {/* Spec block */}
      <section className="bg-surface py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">Process & Specifications</h2>
            <p className="mt-3 text-muted-soft">
              Materials, platforms, and workflow for production-grade metal binder jetting.
            </p>
            <div className="mt-6">
              <Accordion items={specs} />
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-hairline">
            <Image
              src="/images/binder-jetting.jpg"
              alt="Binder jetting metal parts"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Why Azoth Binder Jetting? */}
      <section className="bg-white py-20">
        <div className="container-az">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <YouTubeEmbed
              id="_ls2pz7jUVc"
              title="Metal Binder Jetting Process and Applications with Azoth 3D"
            />
            <div>
              <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
                Why Azoth Binder Jetting?
              </h2>
              <p className="mt-4 leading-relaxed text-muted-soft">
                Azoth&apos;s binder jetting platform allows customers to rapidly develop new designs
                and then enter serial production on the exact same equipment. With Azoth you speak to
                engineers with extensive binder jetting expertise who know how to Design, Develop, and
                Deliver the parts you need. This technology allows customers to skip the tooling costs
                and lead times of traditional manufacturing while delivering design freedom and
                scalability.
              </p>
            </div>
          </div>

          <p className="mt-10 text-sm font-medium text-muted">
            Hover over a card to learn more.
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((card) => (
              <div
                key={card.title}
                tabIndex={0}
                className="group h-72 rounded-2xl [perspective:1200px] focus:outline-none"
              >
                <div className="relative h-full w-full rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 rounded-2xl border border-hairline bg-white px-6 text-center shadow-sm [backface-visibility:hidden]">
                    <Image src={card.icon} alt="" width={70} height={70} className="h-16 w-16" />
                    <h3 className="text-lg font-bold text-ink">{card.title}</h3>
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
                    <h3 className="text-base font-bold">{card.title}</h3>
                    <p className="text-sm leading-relaxed text-white/85">{card.body}</p>
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
