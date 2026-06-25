import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { PageBanner } from "@/components/page-banner";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about Azoth's production additive manufacturing — technologies, materials, lead times, quality systems, quoting, and confidentiality.",
};

const faqs = [
  {
    q: "What does Azoth manufacture?",
    a: "Azoth produces small, complex, end-use metal components for high-performance applications across automotive, medical, defense, and industrial markets.",
  },
  {
    q: "What manufacturing technologies do you use?",
    a: "We leverage binder jetting, lithography-based metal AM, MJF, SLS, FDM, CNC machining, and MIM to select the optimal process for performance, cost, and scale.",
  },
  {
    q: "What materials do you support?",
    a: "We primarily manufacture in 17-4PH stainless steel, 316L stainless steel, and titanium (Ti-6Al-4V), with additional materials available depending on application.",
  },
  {
    q: "What types of parts are best suited for Azoth?",
    a: "Parts with complex geometries, internal features, lightweight structures, and production scalability needs.",
  },
  {
    q: "Are you a prototyping shop or production manufacturer?",
    a: "Azoth is a production-focused manufacturer delivering repeatable, high-volume parts with validated processes.",
  },
  {
    q: "What production volumes can you support?",
    a: "From low-volume runs to thousands of parts per month, with over 50 parts in serial production.",
  },
  {
    q: "What are your typical lead times?",
    a: "Typical lead times are ~10 days, with expedited options as fast as 7 days.",
  },
  {
    q: "Can you scale from prototype to production?",
    a: "Yes, we specialize in transitioning programs from development into full-scale production.",
  },
  {
    q: "Do you offer DfAM support?",
    a: "Yes, including part consolidation, weight reduction, cost optimization, and manufacturability improvements.",
  },
  {
    q: "Can you match or beat machined part performance?",
    a: "In many cases, yes—while reducing part count and total system cost.",
  },
  {
    q: "How do you ensure dimensional accuracy?",
    a: "Through process control, in-process monitoring, and secondary operations like machining and finishing.",
  },
  {
    q: "What quality systems do you follow?",
    a: "We operate under ISO 13485 and align with MPIF and ASTM standards.",
  },
  {
    q: "How do you ensure material consistency?",
    a: "Using validated material systems, controlled processes, and full lot traceability.",
  },
  {
    q: "Do you provide inspection and certification?",
    a: "Yes, including inspection reports, material certs, and support for PPAP, IQ/OQ/PQ.",
  },
  {
    q: "Why choose Azoth?",
    a: "We focus on production manufacturing with deep expertise across the full process chain—not just prototyping.",
  },
  {
    q: "How do you ensure supply chain stability?",
    a: "Through vertical integration and control of materials, processes, and planning.",
  },
  {
    q: "Is your manufacturing US-based?",
    a: "Yes, providing supply chain security and reduced lead times.",
  },
  {
    q: "How do I get a quote?",
    a: "Submit CAD files and requirements through our website or contact our team directly.",
  },
  {
    q: "What information is needed for a quote?",
    a: "CAD file, material, quantities, application, tolerances, and finishing requirements.",
  },
  {
    q: "Do you handle confidential designs?",
    a: "Yes, we operate under NDAs and applicable compliance frameworks.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FaqsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageBanner title="FAQs" breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQs" }]} />

      <section className="bg-white py-20">
        <div className="container-az max-w-3xl">
          <div className="text-center">
            <Eyebrow>FAQs</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              Here are some of the most common questions we receive from our current and prospective
              clients.
            </p>
          </div>

          <div className="mt-12 divide-y divide-hairline border-y border-hairline">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface text-lg leading-none text-ink transition-all duration-200 group-open:rotate-45 group-open:bg-brand group-open:text-white">
                    +
                  </span>
                </summary>
                <p className="pb-5 leading-relaxed text-muted-soft">{faq.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-surface p-8 text-center">
            <h3 className="text-xl font-bold text-ink">Still have questions?</h3>
            <p className="mt-2 text-muted-soft">
              Our team is happy to help—reach out and we&apos;ll get back to you quickly.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center rounded-md bg-brand px-7 py-3 font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
