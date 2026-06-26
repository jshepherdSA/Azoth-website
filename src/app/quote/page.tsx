import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { PageBanner } from "@/components/page-banner";

export const metadata: Metadata = {
  title: "Request A Quote",
  description:
    "Upload your CAD files and project details to request a quote from Azoth. We typically provide quotes within 24 hours.",
};

export default function QuotePage() {
  return (
    <>
      <PageBanner
        title="Request A Quote"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Request A Quote" }]}
      />

      <section className="bg-white py-20">
        <div className="container-az">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Get Started</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">Request A Quote</h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              Upload your CAD and any supporting documents, choose your preferred process, material,
              and quantities, and add any extra notes. If you&apos;d like Azoth to recommend the best
              material or process, use the form below. Azoth typically provides quotes{" "}
              <strong className="text-ink">within 24 hours</strong>—the more project details you
              share, the better.
            </p>
          </div>

          {/* Helper boxes */}
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-hairline bg-surface p-6">
              <h3 className="font-bold text-ink">General Questions</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-soft">
                Have a question we haven&apos;t answered on this website? Send our team a message.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
              >
                Contact Us
              </Link>
            </div>
            <div className="rounded-2xl border border-hairline bg-surface p-6">
              <h3 className="font-bold text-ink">Smart Quote</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-soft">
                Curious what a Smart Quote looks like? Explore our digital-inventory approach with
                TOMO®.
              </p>
              <Link
                href="/tomo"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
              >
                Read More
                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden>
                  <path
                    d="M6 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quote form (RFQ embed) — centered single-column, adaptive width/height */}
          <div className="mx-auto mt-10 w-full max-w-2xl">
            <iframe
              src="https://rfq.digital-quote.com/rfq/index.html?supplier_id=830357ef-57dc-4f70-a097-10c63d4b36ec"
              title="Request a Quote"
              className="h-[1580px] w-full border-0 sm:h-[1480px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
