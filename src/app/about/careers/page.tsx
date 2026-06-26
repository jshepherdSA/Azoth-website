import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow } from "@/components/eyebrow";
import { PageBanner } from "@/components/page-banner";
import { JobOpenings, type Opening } from "@/components/job-openings";
import { JotformEmbed } from "@/components/jotform-embed";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Azoth — a growing team of creative, technically proficient professionals revolutionizing manufacturing through metal additive manufacturing.",
};

const openings: Opening[] = [
  {
    title: "3D Printed Metal Polisher",
    summary:
      "We seek an individual who is excited about making parts SHINE and who wants to be part of a winning team. This role is focused around polishing parts. People that find satisfaction in making that perfect mirror finish are the people we are looking for. We work with small, detailed stainless steel parts which don't ship out the door without your meticulous attention to detail and craftsman touch.",
    pdf: "/docs/azoth-additive-manufacturing_polishing-technician-compressed.pdf",
  },
  {
    title: "Additive Manufacturing Technician",
    summary:
      "The additive manufacturing technician role is focused on sinter-based metal 3D printing technologies. The Lab Technician will be primarily responsible for operating the 3D printing and related process equipment, inspection of the printed parts and overall process quality assurance, and support of Research and Development activities. Azoth is seeking an ambitious individual eager to be a part of a growing team. The potential to take on roles in engineering, design, and production exist with time.",
    pdf: "/docs/azoth-additive-manufacturing_-additive-techncian-compressed.pdf",
  },
  {
    title: "Quality Engineer",
    summary:
      "We seek an individual who is excited about manufacturing, wants to be part of a winning team, and takes pride in their work. The Quality Engineer is responsible for leading and implementing the ISO 13485 Quality Management system, maintenance of ISO 9001:2015 accreditation, adhering to IATF 16949 procedures, and Quality Engineering Changes at the Ann Arbor, MI facility. Other responsibilities include managing Azoth's inspection lab, new product introduction, continuous improvement, process metrics assessments, and supplier development and qualification. This is a core role for Azoth's growth which provides ample opportunity for advancement.",
    pdf: "/docs/azoth-additive-manufacturing-quality-engineerrev2-compressed.pdf",
  },
];

const qualities = [
  { title: "Curiosity", subtitle: "Problem solver", icon: "/images/curiosity-icon.svg" },
  { title: "Forward Thinker", subtitle: "Self Starter", icon: "/images/forward-thinker-icon.svg" },
  { title: "Highly Motivated", subtitle: "Driven", icon: "/images/highly-motivated-icon.svg" },
  { title: "Team Member", subtitle: "Supports the team towards our goals", icon: "/images/team-member-icon.svg" },
];

export default function CareersPage() {
  return (
    <>
      <PageBanner title="Careers" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]} />

      {/* Current Openings */}
      <section className="bg-white py-20">
        <div className="container-az max-w-4xl">
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Current Openings</h2>
          <div className="mt-8">
            <JobOpenings openings={openings} />
          </div>
        </div>
      </section>

      {/* Azoth Team Qualities */}
      <section className="bg-white py-20">
        <div className="container-az">
          <h2 className="text-center text-3xl font-extrabold text-ink sm:text-4xl">
            Azoth Team Qualities
          </h2>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qualities.map((q) => (
              <div
                key={q.title}
                className="flex flex-col items-start gap-6 rounded-2xl border border-hairline bg-white p-7 shadow-sm"
              >
                <Image src={q.icon} alt="" width={56} height={56} className="h-12 w-12" />
                <div>
                  <h3 className="text-xl font-bold text-brand-dark">{q.title}</h3>
                  <p className="mt-1 text-muted-soft">{q.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application */}
      <section className="bg-white py-20">
        <div className="container-az max-w-3xl">
          <div className="text-center">
            <Eyebrow>Join the team</Eyebrow>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-soft">
              Azoth is a growing organization that is always looking for creative, technically
              proficient, team-oriented professionals. If you want to be part of a team dedicated to
              revolutionizing manufacturing, please provide us with your information and upload your
              resume.
            </p>
          </div>
          <div className="mt-10">
            <JotformEmbed formId="261765239187064" title="Azoth careers application" />
          </div>
        </div>
      </section>
    </>
  );
}
