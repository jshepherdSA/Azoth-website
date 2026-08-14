"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import { TradeDeskPixel } from "@/components/tradedesk-pixel";
import { subscribeConsent, getConsent, getServerConsentNull } from "@/lib/consent";

const GTM_ID = "GTM-PK3GHFV";
const GA_ID = "G-47EPDXSS7P";

// Loads all analytics/marketing tags — Google Tag Manager, Google Analytics 4,
// and the Trade Desk Universal Pixel — but ONLY after the visitor has accepted
// cookies. Until then (and on decline) nothing here renders, so no tag script,
// cookie, or network call fires. Consent is read reactively, so accepting in the
// banner mounts these immediately without a reload.
export function AnalyticsGate() {
  const consent = useSyncExternalStore(subscribeConsent, getConsent, getServerConsentNull);

  if (consent !== "accepted") return null;

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
      {/* Google Analytics (gtag.js) */}
      <Script
        id="ga-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
        }}
      />
      {/* The Trade Desk Universal Pixel */}
      <TradeDeskPixel />
    </>
  );
}
