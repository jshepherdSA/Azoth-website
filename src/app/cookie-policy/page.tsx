import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { LegalContent } from "@/components/legal-content";
import { cookiePolicyHtml } from "@/lib/legal/cookies";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Azoth3D uses cookies and similar technologies on azoth3d.com, the choices available to you, and how to manage your cookie preferences.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageBanner
        title="Cookie Policy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]}
      />

      <section className="bg-white py-20">
        <div className="container-az max-w-3xl">
          <LegalContent html={cookiePolicyHtml} />
        </div>
      </section>
    </>
  );
}
