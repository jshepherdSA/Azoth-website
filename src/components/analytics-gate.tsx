"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import { subscribeConsent, getConsent, getServerConsentNull } from "@/lib/consent";

const GTM_ID = "GTM-PK3GHFV";
const GA_ID = "G-47EPDXSS7P";
const GOOGLE_ADS_ID = "AW-458787946";

// Loads all analytics/marketing tags: Google Tag Manager and the Google tag
// (which serves both Google Analytics 4 and Google Ads), but ONLY after the
// visitor has accepted cookies. Until then (and on decline) nothing here
// renders, so no tag script, cookie, or network call fires. Consent is read
// reactively, so accepting in the banner mounts these immediately without a
// reload.
//
// The Trade Desk Universal Pixel and the LinkedIn Insight tag are not loaded
// here: they are fired by the Tag Manager container, so they are still held
// back until consent. Do not add the Trade Desk pixel in code as well, or every
// visit is counted twice.
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
      {/* Google tag (gtag.js). Google allows one Google tag per page, so the
          library is loaded once and Google Ads is added as a second `config` on
          it, next to Google Analytics, instead of as a second script. */}
      <Script
        id="ga-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');gtag('config','${GOOGLE_ADS_ID}');`,
        }}
      />
    </>
  );
}
