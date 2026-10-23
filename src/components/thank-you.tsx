import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { PageBanner } from "@/components/page-banner";
import { CircleArrow } from "@/components/circle-arrow";

// Thank-you pages are where each form lands after a successful submission, so
// ad and analytics tools can count a conversion by page address. They are kept
// out of search results and the sitemap.
export function thankYouMetadata(title: string): Metadata {
  return { title, robots: { index: false, follow: false } };
}

type Action = { label: string; href: string };

export function ThankYou({
  crumbs,
  heading,
  children,
  primary,
  secondary,
}: {
  crumbs: { label: string; href?: string }[];
  heading: string;
  children: ReactNode;
  primary: Action;
  secondary?: Action;
}) {
  return (
    <>
      <PageBanner title="Thank You" breadcrumbs={[{ label: "Home", href: "/" }, ...crumbs, { label: "Thank You" }]} />

      <section className="bg-white py-20">
        <div className="container-az max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">{heading}</h2>
          <div className="mt-4 leading-relaxed text-muted-soft">{children}</div>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={primary.href}
              className="inline-flex items-center gap-2.5 rounded-md bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              {primary.label}
              <CircleArrow tone="onRed" />
            </Link>
            {secondary && (
              <Link href={secondary.href} className="link-az">
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
