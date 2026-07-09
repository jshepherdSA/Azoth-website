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
    title: "Additive Manufacturing Technician",
    meta: ["Full Time", "Ann Arbor, MI 48108", "Production", "Reports to: Colin Lilley, Production Manager"],
    pdf: "/docs/azoth-additive-manufacturing_-additive-techncian-compressed.pdf",
    blocks: [
      { kind: "h", text: "About Azoth" },
      {
        kind: "p",
        text: "Azoth is building the future of metal manufacturing — using metal 3D printing to produce small, complex metal parts that were previously impossible or impractical to make. Our customers span automotive, defense, luxury goods, and medical industries, and they come to us because we can do things no one else can.",
      },
      {
        kind: "p",
        text: "We’re a small, ambitious team in Ann Arbor, MI — and we’re growing fast. If you want to work somewhere your contributions matter on day one, where the technology is genuinely cutting-edge, and where the ceiling is high for people who want to grow — this is the place.",
      },
      { kind: "h", text: "Role Summary" },
      {
        kind: "p",
        text: "The Additive Manufacturing Technician is primarily responsible for loading jobs into 3D printers, post-processing parts, and ensuring parts are manufactured to customer specifications and shipped on time. This role spans both metal and polymer 3D printing and plays a crucial role in ensuring customers get the right part at the right time.",
      },
      { kind: "h", text: "Responsibilities & Duties" },
      { kind: "sub", text: "Printing & Production" },
      {
        kind: "ul",
        items: [
          "Load jobs into 3D printers and keep equipment operational",
          "Clean printers and maintain production readiness",
          "De-powder parts in the binder jetting process",
          "Mix powders for the printing process",
          "Utilize slicing software to create programs for 3D printed parts",
          "Operate auxiliary equipment and perform machine maintenance",
          "Unload and load compressed gas utilizing forklift",
        ],
      },
      { kind: "sub", text: "Post-Processing & Quality" },
      {
        kind: "ul",
        items: [
          "Post-process parts: shot-blasting, polishing, depowdering, sintering prep, machining, thread inserts, tapping, dyeing, and assembly",
          "Operate quality control and metrology equipment to verify parts meet specifications",
          "Print work orders and manage parts through final shipment",
          "Ensure shop and equipment cleanliness",
        ],
      },
      { kind: "h", text: "Qualifications" },
      { kind: "sub", text: "Required" },
      {
        kind: "ul",
        items: [
          "Ability to work with hands and think mechanically",
          "Attention to detail",
          "Willingness to learn and manage time independently",
          "Able to be on feet most of the day",
          "Authorized to work in the U.S. (ITAR/EAR applies)",
        ],
      },
      { kind: "sub", text: "Preferred" },
      {
        kind: "ul",
        items: [
          "Prior manufacturing experience",
          "3D printing experience",
          "CAD experience",
          "Eagerness to develop a career in additive manufacturing",
        ],
      },
      { kind: "h", text: "What Success Looks Like" },
      {
        kind: "ul",
        items: [
          "Parts are produced to spec and shipped on time, every time.",
          "Equipment is kept clean, operational, and ready for production.",
          "Work orders are tracked accurately from job start to customer shipment.",
          "You are actively learning and expanding your capabilities across technologies.",
        ],
      },
      { kind: "h", text: "Why Azoth?" },
      {
        kind: "ul",
        items: [
          "Healthcare & retirement savings",
          "Competitive compensation",
          "Health, Dental, Vision & Wellness",
          "Training on industry-leading 3D printing equipment",
          "Career growth into engineering, design & production roles",
          "Collaborative, high-energy team culture",
        ],
      },
      { kind: "h", text: "Growth Path" },
      {
        kind: "p",
        text: "Over time, the technician is expected to develop competency across all 3D printers, post-processing technologies, and metrology equipment. Opportunities to advance into engineering, design, and production management exist for driven team members.",
      },
      { kind: "h", text: "Team" },
      {
        kind: "ul",
        items: [
          "Reports to: Colin Lilley (Production Manager)",
          "Works closely with Applications Engineer",
          "Works closely with Production Manager",
        ],
      },
    ],
  },
  {
    title: "Quality Engineer",
    meta: ["Full Time", "Ann Arbor, MI 48108", "Quality Engineering", "Reports to: General Manager"],
    pdf: "/docs/azoth-additive-manufacturing-quality-engineerrev2-compressed.pdf",
    blocks: [
      { kind: "h", text: "About Azoth" },
      {
        kind: "p",
        text: "Metal parts are everywhere. Most people don’t think about how they’re made. We’re changing that.",
      },
      {
        kind: "p",
        text: "Azoth is building the future of metal manufacturing — using sinter-based additive manufacturing to produce small, complex metal parts that were previously impossible or impractical to make. Our customers span automotive, defense, luxury goods, and medical industries.",
      },
      {
        kind: "p",
        text: "We’re a small, ambitious team in Ann Arbor, MI — growing fast. If you want work that matters on day one, technology that’s genuinely cutting-edge, and a ceiling as high as your ambition — this is the place.",
      },
      { kind: "h", text: "Role Summary" },
      {
        kind: "p",
        text: "This is a core quality role with real ownership — not a checkbox function. You will lead implementation and maintenance of Azoth’s ISO 13485 and ISO 9001 quality systems, own the inspection lab, drive IQ/OQ/PQ validation processes, and build the quality infrastructure that enables Azoth to serve medical device, defense, and automotive customers at the highest level. You’ll work across every department and report directly to the General Manager.",
      },
      { kind: "h", text: "Core Responsibilities" },
      { kind: "sub", text: "Quality Systems" },
      {
        kind: "ul",
        items: [
          "Lead implementation and maintenance of ISO 13485 for medical device manufacturing",
          "Maintain ISO 9001:2015 accreditation",
          "Own document control system (EtQ) — specs, SOPs, process flows",
          "Lead internal process audits and support external audits",
          "Ensure all process and product changes are fully documented and compliant",
        ],
      },
      { kind: "sub", text: "Validation (IQ / OQ / PQ)" },
      {
        kind: "ul",
        items: [
          "Plan and execute Installation, Operational, and Performance Qualification protocols for new equipment and processes",
          "Prepare and maintain validation documentation, test reports, and compliance records",
          "Review OEM specifications and lead validations with cross-functional teams",
          "Ensure re-validation is triggered and executed on process changes",
        ],
      },
      { kind: "sub", text: "Inspection & Metrology" },
      {
        kind: "ul",
        items: [
          "Manage Azoth’s inspection lab and train team members on measurement strategy",
          "Perform MSA including precision studies and gage R&R",
          "Support in-process and final inspection of metal AM parts",
          "Interpret GD&T, engineering drawings, and customer specifications",
          "Apply SPC methods to monitor and control process quality",
        ],
      },
      { kind: "sub", text: "NPI & Continuous Improvement" },
      {
        kind: "ul",
        items: [
          "Lead APQP/PPAP for new product introduction",
          "Drive root cause analysis and corrective/preventive actions (CAPA)",
          "Facilitate cross-functional teams to resolve quality escapes and customer concerns",
          "Apply lean tools (5S, Kaizen) to continuously improve quality systems",
          "Support supplier qualification and incoming material quality",
        ],
      },
      { kind: "h", text: "Qualifications" },
      { kind: "sub", text: "Required" },
      {
        kind: "ul",
        items: [
          "Bachelor’s in Mechanical, Industrial, Materials Engineering, or equivalent",
          "2–5 years managing ISO 13485 or IATF 16949 quality systems",
          "Hands-on IQ/OQ/PQ validation experience",
          "Medical device manufacturing experience",
          "Strong GD&T and measurement system knowledge",
          "Authorized to work in the U.S. (ITAR/EAR applies)",
        ],
      },
      { kind: "sub", text: "Preferred" },
      {
        kind: "ul",
        items: [
          "IATF 16949 or ISO 13485 certified auditor",
          "Experience in additive manufacturing or sinter-based processes",
          "Six Sigma Green or Black Belt",
          "Familiarity with AS9100 (aerospace/defense)",
          "Experience with NDT methods",
          "Proficiency with SAP, EtQ, or equivalent QMS software",
        ],
      },
      { kind: "h", text: "What Success Looks Like" },
      {
        kind: "ul",
        items: [
          "ISO 13485 is implemented, maintained, and audit-ready at all times.",
          "IQ/OQ/PQ protocols are executed on schedule with zero compliance gaps.",
          "The inspection lab runs efficiently and the team is trained and confident.",
          "Quality issues are caught early, root-caused fast, and closed for good.",
          "Customers in medical, defense, and automotive trust Azoth’s quality — because you built the system behind it.",
        ],
      },
      { kind: "h", text: "Why Azoth?" },
      {
        kind: "ul",
        items: [
          "Healthcare & retirement savings",
          "Competitive compensation",
          "Health, Dental, Vision & Wellness",
          "Lead-role in a growing quality system with real ownership",
          "Work at the frontier of additive manufacturing + medical/defense",
          "Collaborative, high-energy team culture",
        ],
      },
      { kind: "h", text: "Key Standards" },
      {
        kind: "ul",
        items: [
          "ISO 13485 (Medical Device QMS)",
          "ISO 9001:2015",
          "IATF 16949",
          "AS9100",
          "IQ / OQ / PQ Validation",
          "APQP / PPAP",
          "GD&T / MSA / SPC",
        ],
      },
      { kind: "h", text: "Key Metrics" },
      {
        kind: "ul",
        items: [
          "Zero lapsed audits or certifications",
          "Corrective actions closed on time",
          "First article inspection pass rate",
          "Customer escapes — target zero",
          "Inspection lab uptime and calibration compliance",
        ],
      },
    ],
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
