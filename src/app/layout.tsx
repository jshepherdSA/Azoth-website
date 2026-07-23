import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TradeDeskPixel } from "@/components/tradedesk-pixel";
import { CookieConsent } from "@/components/cookie-consent";

const GTM_ID = "GTM-PK3GHFV";

// Self-hosted Manrope variable font shipped from the reference assets.
const manrope = localFont({
  src: "./fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
});

export const metadata: Metadata = {
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* Google Tag Manager */}
        <Script
          id="gtm-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* The Trade Desk Universal Pixel */}
        <TradeDeskPixel />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
