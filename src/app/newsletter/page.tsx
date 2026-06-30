import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { JotformEmbed } from "@/components/jotform-embed";

export const metadata: Metadata = {
  title: "Newsletter Signup",
  description:
    "Subscribe to the Azoth newsletter for new research, case studies, white papers, and additive manufacturing updates delivered to your inbox.",
};

export default function NewsletterPage() {
  return (
    <>
      <PageBanner
        title="Newsletter Signup"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Newsletter Signup" }]}
      />

      <section className="bg-white py-20">
        <div className="container-az">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Stay in the Loop</h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              Subscribe to get new research, case studies, white papers, and Azoth updates delivered
              to your inbox.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-xl">
            <JotformEmbed formId="261804661258056" title="Newsletter signup" />
          </div>
        </div>
      </section>
    </>
  );
}
