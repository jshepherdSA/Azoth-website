"use client";

import { useState } from "react";

export type Opening = {
  title: string;
  summary: string;
  pdf: string;
};

export function JobOpenings({ openings }: { openings: Opening[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-black/10 border-y border-black/10">
      {openings.map((job, i) => {
        const isOpen = open === i;
        return (
          <div key={job.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-bold text-ink">{job.title}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl leading-none transition-colors ${
                  isOpen ? "bg-brand text-white" : "bg-surface text-ink"
                }`}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div className={`grid transition-all duration-200 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="leading-relaxed text-muted-soft">{job.summary}</p>
                <a
                  href={job.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  View Full Description Here
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                    <path d="M11 3a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 1 0 1.414 1.414L15 6.414V9a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-5Z" />
                    <path d="M5 5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a1 1 0 1 0-2 0v3H5V7h3a1 1 0 0 0 0-2H5Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
