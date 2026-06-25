import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { LegalContent } from "@/components/legal-content";
import { accessibilityPolicyHtml } from "@/lib/legal/accessibility";

export const metadata: Metadata = {
  title: "Accessibility Policy",
  description:
    "Azoth 3D is committed to ensuring digital accessibility for all users and aims to conform to WCAG 2.1 Level AA standards.",
};

export default function AccessibilityPolicyPage() {
  return (
    <>
      <PageBanner
        title="Accessibility Policy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Accessibility Policy" }]}
      />

      <section className="bg-white py-20">
        <div className="container-az max-w-3xl">
          <LegalContent html={accessibilityPolicyHtml} />
        </div>
      </section>
    </>
  );
}
