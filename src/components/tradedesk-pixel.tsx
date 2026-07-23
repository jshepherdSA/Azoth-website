"use client";

import Script from "next/script";

// The Trade Desk Universal Pixel. `up_loader.1.1.0.js` defines the globals
// `ttd_dom_ready` and `TTDUniversalPixelApi`; the init call must run *after* the
// loader has executed, so we fire it from the Script's `onLoad` (a bare inline
// <Script> would race the loader and hit an undefined `ttd_dom_ready`).
declare global {
  interface Window {
    ttd_dom_ready?: (callback: () => void) => void;
    TTDUniversalPixelApi?: new () => {
      init: (advertiserId: string, pixelIds: string[], endpoint: string) => void;
    };
  }
}

export function TradeDeskPixel() {
  return (
    <Script
      id="tradedesk-universal-pixel"
      src="https://js.adsrvr.org/up_loader.1.1.0.js"
      strategy="afterInteractive"
      onLoad={() => {
        window.ttd_dom_ready?.(function () {
          if (typeof window.TTDUniversalPixelApi === "function") {
            const universalPixelApi = new window.TTDUniversalPixelApi();
            universalPixelApi.init(
              "rxoh5ti",
              ["choalra"],
              "https://insight.adsrvr.org/track/up",
            );
          }
        });
      }}
    />
  );
}
