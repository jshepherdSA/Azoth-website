import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow } from "@/components/eyebrow";
import { PageBanner } from "@/components/page-banner";
import { Certifications } from "@/components/certifications";
import { IndustriesSection } from "@/components/industries-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2018, Azoth transforms supply chains with metal additive manufacturing, high-end finishing, and digital inventory—delivering production-quality parts on demand.",
};

const story = [
  {
    heading: "Our Mission",
    body: "Azoth exists to eliminate downtime and inventory waste by producing production-quality parts on demand. Using advanced metal additive manufacturing and digital inventory solutions, we enable manufacturers to access the right parts exactly when and where they need them.",
  },
  {
    heading: "Our Story",
    body: "Founded in 2018, Azoth was created to transform supply chains with speed, flexibility, and precision. By combining cutting-edge metal additive manufacturing, high-end finishing, and program management, we help manufacturers shift from costly inventory systems to agile, digital ones. Our solutions empower companies to adopt a just-in-time production model, reducing waste, lowering costs, and minimizing downtime. With a focus on innovation and quality, Azoth bridges the gap between traditional manufacturing and the digital future. We don't just deliver parts—we deliver transformation.",
  },
  {
    heading: "Our Vision",
    body: "Advance critical industries and strengthen national security by delivering small, complex, mission-critical metal components at production scale—leveraging advanced additive manufacturing to enable resilient, on-demand supply chains across defense, medical, and consumer electronics.",
  },
];

// NOTE: the source Bricks "counter" widgets were disabled globally on the live
// site, so real figures were never in the export. "2018" is verified from the
// company story; the other three are placeholders pending real numbers.
const stats = [
  { value: "2018", label: "Founded" },
  { value: "15+", label: "Customers Served" },
  { value: "50+", label: "Parts Shipped" },
  { value: "5 Days", label: "Fastest Lead Time" },
];

const team = [
  { name: "Scott Burk", title: "Chief Executive Officer", image: "/images/scott-burk.png" },
  { name: "Cody Cochran", title: "General Manager & Co-Founder", image: "/images/cody-cochran.png" },
  { name: "Jay Mullick", title: "Chairman", image: "/images/jay-mullick.png" },
];

const teamContactHref = "mailto:info@azoth3d.com?subject=Hello!";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

      {/* Mission / Story / Vision */}
      <section className="bg-white py-20">
        <div className="container-az grid items-start gap-12 lg:grid-cols-2">
          <div className="relative aspect-[5/6] overflow-hidden rounded-2xl bg-surface lg:sticky lg:top-28">
            <Image
              src="/images/our-mission-story-scaled.png"
              alt="Azoth additive manufacturing components and facility"
              fill
              className="object-cover"
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

      {/* Meet Our Team */}
      <section className="bg-surface py-20">
        <div className="container-az">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">Meet Our Team</h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              Azoth&apos;s team of experts in metallurgy, additive (3D), and production technology is
              redefining traditional manufacturing with innovative materials and processes. Choosing
              Azoth means choosing engineers dedicated to delivering the highest quality parts with
              maximum efficiency.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-bold text-ink">{member.name}</h3>
                    <p className="text-sm text-muted">{member.title}</p>
                  </div>
                  <a
                    href={teamContactHref}
                    aria-label={`Email ${member.name}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-ink transition-colors hover:bg-brand hover:text-white"
                  >
                    <MailIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Certifications />

      <IndustriesSection />
    </>
  );
}
