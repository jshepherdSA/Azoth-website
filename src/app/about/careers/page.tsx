import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { PageBanner } from "@/components/page-banner";
import { JobOpenings, type Opening } from "@/components/job-openings";
import { CareersForm } from "@/components/careers-form";

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
  { title: "Curiosity", subtitle: "Problem solver", icon: "bulb" },
  { title: "Forward Thinker", subtitle: "Self Starter", icon: "rocket" },
  { title: "Highly Motivated", subtitle: "Driven", icon: "bolt" },
  { title: "Team Member", subtitle: "Supports the team towards our goals", icon: "team" },
] as const;

function QualityIcon({ name }: { name: (typeof qualities)[number]["icon"] }) {
  const common = { className: "h-7 w-7", fill: "none", stroke: "currentColor", strokeWidth: 1.8 } as const;
  switch (name) {
    case "bulb":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6m-5 3h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.2 1 2.5h6c0-1.3.3-1.8 1-2.5A6 6 0 0 0 12 3Z" />
        </svg>
      );
    case "rocket":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 19c-1 1-1 3-1 3s2 0 3-1 1-2 1-2m6.5-12.5a6 6 0 0 1 3 .5s.5 4-3 7.5c-1.4 1.4-3.3 2.5-4.8 3.2L7 17l-2.2-1.7c.7-1.5 1.8-3.4 3.2-4.8C11.5 7 15.5 7.5 15.5 7.5ZM14 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
        </svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
        </svg>
      );
    case "team":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20a5 5 0 0 0-10 0M9 8a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm-7 12a4 4 0 0 1 5-3.9M22 20a4 4 0 0 0-5-3.9M5.5 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm13 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        </svg>
      );
  }
}

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
      <section className="bg-surface py-20">
        <div className="container-az">
          <h2 className="text-center text-3xl font-extrabold text-ink sm:text-4xl">
            Azoth Team Qualities
          </h2>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-5 lg:grid-cols-4">
            {qualities.map((q) => (
              <div
                key={q.title}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
                  <QualityIcon name={q.icon} />
                </span>
                <h3 className="font-bold text-ink">{q.title}</h3>
                <p className="text-sm text-muted">{q.subtitle}</p>
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
            <CareersForm />
          </div>
        </div>
      </section>
    </>
  );
}
