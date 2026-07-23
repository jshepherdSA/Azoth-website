import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { LegalContent } from "@/components/legal-content";
import { accessibilityStatementHtml } from "@/lib/legal/accessibility-statement";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Azoth3D's commitment to digital accessibility — our accessibility practices, goal of substantial conformance with WCAG 2.2 Level AA, and how to request assistance or report a barrier.",
};

export default function AccessibilityPage() {
  return (
    <>
      <PageBanner
        title="Accessibility Statement"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Accessibility Statement" }]}
      />

      <section className="bg-white py-20">
        <div className="container-az max-w-3xl">
          <LegalContent html={accessibilityStatementHtml} />
        </div>
      </section>
    </>
  );
}
