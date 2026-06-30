"use client";

import { useEffect, useState } from "react";

const INDUSTRIES = [
  "Automotive",
  "Medical",
  "Defense",
  "Consumer Electronics",
  "Aerospace",
  "Other",
];

function DownloadIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 3v9m0 0 3.5-3.5M10 12 6.5 8.5M4 15.5h12" />
    </svg>
  );
}

// A data-sheet / white-paper download that is gated behind a short lead form.
// Clicking the trigger opens a modal asking for name, email, company, and
// industry; submitting starts the download. The collected fields are available
// in `onLead` if/when this is wired to a backend (JotForm, email, CRM, etc.).
export function GatedDownload({
  href,
  label = "Data Sheet",
  title,
}: {
  href: string;
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lead fields are captured here; wire to a backend to deliver them.
    // const data = Object.fromEntries(new FormData(e.currentTarget));
    window.open(href, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

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
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={title ?? "Download form"}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute inset-0 bg-ink/60"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-full max-w-md rounded-2xl bg-white p-7 shadow-xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 text-muted transition-colors hover:text-ink"
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>

            <h3 className="text-xl font-extrabold text-ink">Download {title ?? "Data Sheet"}</h3>
            <p className="mt-1 text-sm text-muted-soft">
              Tell us a bit about you and we&apos;ll start your download.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {[
                { name: "name", label: "Name", type: "text", autoComplete: "name" },
                { name: "email", label: "Email", type: "email", autoComplete: "email" },
                { name: "company", label: "Company", type: "text", autoComplete: "organization" },
              ].map((f) => (
                <div key={f.name}>
                  <label htmlFor={`gd-${f.name}`} className="mb-1.5 block text-sm font-semibold text-ink">
                    {f.label}
                  </label>
                  <input
                    id={`gd-${f.name}`}
                    name={f.name}
                    type={f.type}
                    autoComplete={f.autoComplete}
                    required
                    className="w-full rounded-md border border-hairline px-3.5 py-2.5 text-ink outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="gd-industry" className="mb-1.5 block text-sm font-semibold text-ink">
                  Industry
                </label>
                <select
                  id="gd-industry"
                  name="industry"
                  required
                  defaultValue=""
                  className="w-full rounded-md border border-hairline bg-white px-3.5 py-2.5 text-ink outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                >
                  <option value="" disabled>
                    Select your industry…
                  </option>
                  {INDUSTRIES.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-7 py-3 font-semibold text-white transition-colors hover:bg-brand-hover"
              >
                <DownloadIcon /> Download
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
