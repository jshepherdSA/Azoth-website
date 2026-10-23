"use client";

import { useEffect } from "react";

const RFQ_ORIGIN = "https://rfq.digital-quote.com";
const SUPPLIER_ID = "830357ef-57dc-4f70-a097-10c63d4b36ec";

/**
 * The Digital Quote request-for-quote form. After a successful submission the
 * tool posts `{type:"rfq_submit_success"}` to the parent page; we answer by
 * sending the visitor to the quote thank-you page, a real address that ad and
 * analytics tools can count as a conversion. It is a full page load so every
 * tag sees it. (The tool also accepts a `redirect_url` parameter, but that
 * navigates the top window from inside the frame, which browsers can block.)
 */
export function RfqEmbed({ thankYouHref }: { thankYouHref: string }) {
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== RFQ_ORIGIN) return;
      if (e.data && typeof e.data === "object" && e.data.type === "rfq_submit_success") {
        window.location.assign(thankYouHref);
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [thankYouHref]);

  return (
    <iframe
      src={`${RFQ_ORIGIN}/rfq/index.html?supplier_id=${SUPPLIER_ID}`}
      title="Request a Quote"
      className="h-[1580px] w-full border-0 sm:h-[1480px]"
    />
  );
}
