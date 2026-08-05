"use client";

import { useEffect, useState } from "react";
import { JotformEmbed } from "@/components/jotform-embed";

// JotForm used for gated downloads. Submissions (and any download delivery /
// notifications) are handled by JotForm itself.
const FORM_ID = "262165085294057";

function DownloadIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 3v9m0 0 3.5-3.5M10 12 6.5 8.5M4 15.5h12" />
    </svg>
  );
}

// A data-sheet / white-paper download gated behind a form. Clicking the trigger
// opens a modal that embeds the JotForm above; JotForm collects the lead.
// `href` is kept for the call sites but is not auto-triggered — delivery is
// handled by the JotForm (thank-you page / email).
export function GatedDownload({
  label = "Data Sheet",
  title,
}: {
  href?: string;
  label?: string;
  title?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
      >
        <DownloadIcon /> {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={title ?? "Download form"}
        >
          <button
            type="button"
            aria-label="Close"
            className="fixed inset-0 bg-ink/60"
            onClick={() => setOpen(false)}
          />
          <div className="relative my-auto w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl sm:p-7">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 text-muted transition-colors hover:text-ink"
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>

            <h3 className="pr-8 text-xl font-extrabold text-ink">Download {title ?? "Data Sheet"}</h3>
            <p className="mt-1 text-sm text-muted-soft">
              Complete the short form and we&apos;ll get your download to you.
            </p>

            <div className="mt-4">
              <JotformEmbed formId={FORM_ID} title={`Download form — ${title ?? label}`} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
