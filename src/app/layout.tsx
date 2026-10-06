import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnalyticsGate } from "@/components/analytics-gate";
import { CookieConsent } from "@/components/cookie-consent";
import { SITE_URL } from "@/lib/site";

// Self-hosted Manrope variable font shipped from the reference assets.
const manrope = localFont({
  src: "./fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
});

export const metadata: Metadata = {
  // Base for every relative URL in metadata (canonical tags, social images).
  metadataBase: new URL(SITE_URL),
  // "./" resolves against each page's own path, so every page gets a canonical
  // tag pointing at itself on the www host. Pages can still set their own.
  alternates: { canonical: "./" },
  title: {
    default: "Azoth 3D | Production Additive Manufacturing",
    template: "%s | Azoth 3D",
  },
  description:
    "From rapid prototyping to high-volume part production, Azoth's additive manufacturing solutions deliver unmatched precision, repeatability, and speed in metal and polymer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full`}>
      {/* Discovery reference for the site's llms.txt (served at /llms.txt). */}
      <link rel="alternate" type="text/plain" title="llms.txt" href="/llms.txt" />
      <body className="flex min-h-full flex-col bg-white text-ink-soft">
        {/* Analytics & marketing tags (GTM, GA4, Trade Desk), loaded only after
            cookie consent is accepted. */}
        <AnalyticsGate />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
