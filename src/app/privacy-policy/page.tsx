import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { LegalContent } from "@/components/legal-content";
import { privacyPolicyHtml } from "@/lib/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Azoth collects, uses, maintains, and discloses information collected from users of azoth3d.com.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner
        title="Privacy Policy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />

      <section className="bg-white py-20">
        <div className="container-az max-w-3xl">
          <LegalContent html={privacyPolicyHtml} />
        </div>
      </section>
    </>
  );
}
