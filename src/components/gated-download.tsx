"use client";

import { useEffect, useRef, useState } from "react";
import { JotformEmbed } from "@/components/jotform-embed";

// JotForm used for gated downloads. On a completed submission JotForm posts a
// message to the parent window, `{action:"submission-completed", formID:...}`, 
// which we listen for to auto-start the specific document's download.
const FORM_ID = "262165085294057";

function DownloadIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 3v9m0 0 3.5-3.5M10 12 6.5 8.5M4 15.5h12" />
    </svg>
  );
}

// A data-sheet / white-paper download gated behind the JotForm. Clicking the
// trigger opens a modal that embeds the form; once it's submitted, `href` (the
// PDF) downloads automatically, with a manual fallback link in case the browser
// blocks the programmatic download.
export function GatedDownload({
  href,
  label = "Data Sheet",
  title,
}: {
  href?: string;
  label?: string;
  title?: string;
}) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const downloaded = useRef(false);

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

  // Watch for the JotForm "submission-completed" message, then download the file.
  useEffect(() => {
    if (!open) return;
    const onMessage = (e: MessageEvent) => {
      if (typeof e.origin !== "string" || !e.origin.endsWith(".jotform.com")) return;
      const d = e.data;
      const done =
        (d && typeof d === "object" && d.action === "submission-completed") ||
        (typeof d === "string" && d.startsWith("submission-completed"));
      if (!done) return;

      setSubmitted(true);
      if (href && !downloaded.current) {
        downloaded.current = true;
        const a = document.createElement("a");
        a.href = href;
        a.download = ""; // force a download (same-origin PDF) rather than navigation
        a.rel = "noopener";
        document.body.appendChild(a);
        a.click();
        a.remove();
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [open, href]);

  const openModal = () => {
    setSubmitted(false);
    downloaded.current = false;
    setOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
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
              Complete the short form and your download will begin automatically.
            </p>

            <div className="mt-4">
              <JotformEmbed formId={FORM_ID} title={`Download form, ${title ?? label}`} />
            </div>

            {submitted && href && (
              <p className="mt-4 rounded-lg bg-surface px-4 py-3 text-sm text-ink-soft">
                Your download should begin automatically. If it doesn&apos;t,{" "}
                <a
                  href={href}
                  download
                  className="font-semibold text-brand underline underline-offset-2 hover:text-brand-hover"
                >
                  download it here
                </a>
                .
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
