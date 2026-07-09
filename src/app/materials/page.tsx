import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBanner } from "@/components/page-banner";
import { CircleArrow } from "@/components/circle-arrow";
import { IndustriesSection } from "@/components/industries-section";
import { GatedDownload } from "@/components/gated-download";

export const metadata: Metadata = {
  title: "Materials",
  description:
    "Azoth works with traditional and experimental metals — 316L, 17-4PH, copper, Mar M247, D2 tool steel, titanium — plus 40+ polymers across FDM, SLS, SLA/DLP, and HP Multi Jet Fusion.",
};

const metals = [
  { name: "316L Stainless Steel", pdf: "/docs/azoth-data-sheet-316l.pdf" },
  { name: "17-4PH Stainless Steel", pdf: "/docs/azoth_material-data-sheet_17-4ph.pdf" },
  { name: "Titanium (Ti-6Al-4V)", pdf: "/docs/azoth_material-data-sheet_ti64.pdf" },
  { name: "Mar M247", pdf: "/docs/azoth_material-data-sheet_mar247.pdf" },
  { name: "D2 Tool Steel", pdf: null },
  { name: "Copper", pdf: null },
];

const processes = [
  {
    name: "LMM",
    items: ["316L Stainless Steel", "17-4PH Stainless Steel", "Ti-6Al-4V", "Pure Copper"],
  },
  {
    name: "Binder Jetting",
    items: [
      "316L Stainless Steel",
      "17-4PH Stainless Steel",
      "Copper",
      "Mar M247",
      "D2 Tool Steel",
      "Titanium (Ti-6Al-4V)",
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

// The polymer list is grouped into four columns (matching the original layout):
// 9, 9, 8, 8 items left-to-right.
const polymerColumns = [
  polymers.slice(0, 9),
  polymers.slice(9, 18),
  polymers.slice(18, 26),
  polymers.slice(26),
];

export default function MaterialsPage() {
  return (
    <>
      <PageBanner title="Materials" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Materials" }]} />

      {/* Metals */}
      <section className="bg-white py-20">
        <div className="container-az">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Metals</h2>
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
            <div className="flex justify-center">
              <Image
                src="/images/materials-for-metal-3d-printing-.png"
                alt="Metal 3D-printed parts"
                width={1243}
                height={562}
                className="h-auto w-full object-contain"
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
                  <GatedDownload href={metal.pdf} title={`${metal.name} Data Sheet`} />
                ) : (
                  <span className="shrink-0 text-sm text-muted">On request</span>
                )}
              </div>
            ))}
          </div>

          {/* Materials by process */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {processes.map((proc) => (
              <div key={proc.name} className="rounded-2xl bg-surface p-6 ring-1 ring-hairline">
                <h3 className="font-bold text-ink">{proc.name}</h3>
                <ul className="mt-4 space-y-2">
                  {proc.items.map((item) => (
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
            <div>
              <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Polymers</h2>
              <p className="mt-4 leading-relaxed text-muted-soft">
                Azoth is a vendor-neutral supplier with five of the seven core polymer additive (3D)
                printing technologies in-house. Azoth can offer more than 40 different polymers that
                can be used in manufacturing. We utilize:
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
            <div className="flex justify-center">
              <Image
                src="/images/azoth-part-nest-fixture-edited.png"
                alt="Polymer 3D-printed part nest fixture"
                width={2500}
                height={1653}
                className="h-auto w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Materials We Use — four bordered columns */}
          <div className="mt-14">
            <h3 className="text-2xl font-extrabold text-ink">Materials We Use</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {polymerColumns.map((col, i) => (
                <div key={i} className="rounded-2xl border border-hairline bg-white p-6">
                  <ul className="space-y-3">
                    {col.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-muted-soft">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <IndustriesSection />
    </>
  );
}
