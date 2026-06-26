import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { PageBanner } from "@/components/page-banner";
import { CircleArrow } from "@/components/circle-arrow";
import { IndustriesSection } from "@/components/industries-section";

export const metadata: Metadata = {
  title: "Materials",
  description:
    "Azoth works with traditional and experimental metals — 316L, 17-4PH, copper, Mar M247, D2 tool steel, titanium — plus 40+ polymers across FDM, SLS, SLA/DLP, and HP Multi Jet Fusion.",
};

const metals = [
  { name: "316L Stainless Steel", pdf: "/docs/azoth-data-sheet-316l.pdf" },
  { name: "17-4PH Stainless Steel", pdf: "/docs/azoth_material-data-sheet_17-4ph.pdf" },
  { name: "Copper", pdf: null },
  { name: "Mar M247", pdf: "/docs/azoth_material-data-sheet_mar247.pdf" },
  { name: "D2 Tool Steel", pdf: null },
  { name: "Titanium (Ti-6Al-4V)", pdf: "/docs/azoth_material-data-sheet_ti64.pdf" },
];

const platforms = [
  { name: "Desktop Metal Platform", items: ["316L Stainless Steel", "17-4PH Stainless Steel"] },
  { name: "XJET Platform", items: ["316L Stainless Steel"] },
  {
    name: "Digital Metal Platform",
    items: [
      "316L Stainless Steel",
      "17-4PH Stainless Steel",
      "Copper",
      "Mar M247",
      "D2 Tool Steel",
      "Titanium (limited campaigns)",
    ],
  },
];

const polymerTech = [
  "Plastic Fused Deposition Modeling (FDM)",
  "Selective Laser Sintering",
  "Stereolithography & Digital Light Processing (SLA)",
  "HP Multi-Jet Fusion",
  "Material Jetting",
];

const polymers = [
  "Onyx™", "HSHT Fiberglass", "Tough PLA", "PLA", "ABS", "sPro11B", "mProPP", "Clear", "Pro-Resin (Grey)",
  "Smooth TPU 95A", "Fiberglass", "PETG", "TPU 95A", "sPro6 MF", "sPro11 CF", "mProTPU", "Draft (Grey)", "Rigid 10k (White)",
  "Carbon Fiber", "Nylon", "PVA", "PC", "sPro6 NE", "sPro12W (Nylon 12 White)", "Biomed (Amber/Clear)", "Durable (Cloudy Clear)",
  "Aramid Fiber (Kevlar®)", "Precise PLA", "CPE", "PP", "sPro6 FR", "sProTPU", "Black Resin", "High Temp (Orange)",
];

function DownloadIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 3v9m0 0 3.5-3.5M10 12 6.5 8.5M4 15.5h12" />
    </svg>
  );
}

export default function MaterialsPage() {
  return (
    <>
      <PageBanner title="Materials" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Materials" }]} />

      {/* Metals */}
      <section className="bg-white py-20">
        <div className="container-az">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>Metals</Eyebrow>
              <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">Metals</h2>
              <p className="mt-4 leading-relaxed text-muted-soft">
                Azoth has the ability to work with many traditional and experimental materials used
                in the manufacturing of small, complex parts. Our team of metallurgical experts has
                mastered the use of materials in the 3D binder jet printing process and works with all
                types of materials, including but not limited to:
              </p>
              <Link
                href="/quote"
                className="mt-6 inline-flex items-center gap-2.5 rounded-md bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-hover"
              >
                Request A Quote
                <CircleArrow tone="onRed" />
              </Link>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-surface shadow-md ring-1 ring-hairline">
              <Image
                src="/images/materials-for-metal-3d-printing-.png"
                alt="Metal 3D-printed parts"
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Metal data sheets */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metals.map((metal) => (
              <div
                key={metal.name}
                className="flex items-center justify-between gap-4 rounded-xl border border-hairline bg-white p-5 shadow-sm"
              >
                <span className="font-bold text-ink">{metal.name}</span>
                {metal.pdf ? (
                  <a
                    href={metal.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
                  >
                    <DownloadIcon /> Data Sheet
                  </a>
                ) : (
                  <span className="shrink-0 text-sm text-muted">On request</span>
                )}
              </div>
            ))}
          </div>

          {/* Platform availability */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {platforms.map((platform) => (
              <div key={platform.name} className="rounded-2xl bg-surface p-6 ring-1 ring-hairline">
                <h3 className="font-bold text-ink">{platform.name}</h3>
                <ul className="mt-4 space-y-2">
                  {platform.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-soft">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Polymers */}
      <section className="bg-surface py-20">
        <div className="container-az">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-hairline lg:order-2">
              <Image
                src="/images/azoth-part-nest-fixture-edited.png"
                alt="Polymer 3D-printed parts nest"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="lg:order-1">
              <Eyebrow>Polymers</Eyebrow>
              <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">40+ Polymers In-House</h2>
              <p className="mt-4 leading-relaxed text-muted-soft">
                Azoth is a vendor-neutral supplier with five of the seven core polymer additive (3D)
                printing technologies in-house, offering more than 40 different polymers. We utilize:
              </p>
              <ul className="mt-4 space-y-2">
                {polymerTech.map((tech) => (
                  <li key={tech} className="flex items-center gap-2 font-medium text-ink-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Materials We Use */}
          <div className="mt-14">
            <h3 className="text-2xl font-extrabold text-ink">Materials We Use</h3>
            <ul className="mt-6 columns-2 gap-x-8 sm:columns-3 lg:columns-4 [&>li]:break-inside-avoid">
              {polymers.map((p) => (
                <li key={p} className="mb-3 flex items-center gap-2 text-muted-soft">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <IndustriesSection />
    </>
  );
}
