import type { Metadata } from "next";
import Image from "next/image";
import { PageBanner } from "@/components/page-banner";
import { CertificationsCarousel } from "@/components/certifications-carousel";
import { Accordion, type AccordionItem } from "@/components/accordion";
import { YouTubeEmbed } from "@/components/youtube-embed";

export const metadata: Metadata = {
  title: "Quality",
  description:
    "Azoth delivers production-capable additive manufacturing to the strictest standards — ISO 9001 & ISO 13485 certified, PPAP-proven, with a certificate of inspection on every part.",
};

const specialties: AccordionItem[] = [
  {
    title: "Production Part Approval Process (PPAP)",
    body: (
      <p>
        Azoth is one of the few additive (3D) manufacturers familiar with the intense PPAP process
        desired by automotive makers and suppliers. Azoth is the first binder jet additive (3D)
        manufacturer to have its parts pass a rigorous PPAP process and be utilized in vehicles for
        General Motors.
      </p>
    ),
  },
  {
    title: "Inspection Capabilities",
    body: (
      <p>
        Every part manufactured by Azoth is accompanied by a certificate of inspection verifying that
        your parts are produced to the agreed-upon expectations. Azoth has a full metallurgy lab, the
        latest in optical scanning technology, and extensive hard-gaging processes to ensure your
        parts are to quality specifications.
      </p>
    ),
  },
  {
    title: "Tolerances & Quality Standards",
    body: (
      <p>
        Azoth operates to MPIF 35, ASTM B883, NIST 800-171, and ISO 22068 material standards. Azoth
        adheres to ISO 9001 quality standards and multiple ASTM, MPIF, and ISO testing standards.
      </p>
    ),
  },
];

export default function QualityPage() {
  return (
    <>
      <PageBanner
        title="Quality"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Capabilities", href: "/capabilities" },
          { label: "Quality" },
        ]}
      />

      <CertificationsCarousel />

      {/* Quality intro */}
      <section className="bg-white py-20">
        <div className="container-az grid items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center">
            <Image
              src="/images/capabilities-quality.png"
              alt="ISO 9001:2015 Certified Company"
              width={648}
              height={280}
              className="h-auto w-full max-w-md object-contain"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Quality</h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              Azoth provides production-capable additive (3D) manufacturing that adheres to the
              strictest quality standards in each of the industries it serves.{" "}
              <span className="font-bold text-brand">
                Azoth is ISO 9001 &amp; ISO 13485:2015 certified
              </span>
              , and manufactured parts are accompanied by a certificate of inspection verifying that
              parts have been produced based upon expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Skills & Specialties */}
      <section className="bg-white py-20">
        <div className="container-az grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Skills &amp; Specialties</h2>
            <div className="mt-10">
              <Accordion items={specialties} />
            </div>
          </div>
          <YouTubeEmbed id="KfhWyELuwCc" title="Azoth — Quality & Certifications" />
        </div>
      </section>
    </>
  );
}
