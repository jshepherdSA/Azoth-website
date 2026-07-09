"use client";

import { useState } from "react";

/** A block of job-description content, rendered in order inside the accordion. */
export type JobBlock =
  | { kind: "h"; text: string }
  | { kind: "sub"; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] };

export type Opening = {
  title: string;
  /** Short facts shown under the title (employment type, location, etc.). */
  meta: string[];
  blocks: JobBlock[];
  pdf: string;
};

function Blocks({ blocks }: { blocks: JobBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        if (block.kind === "h") {
          return (
            <h4 key={i} className="pt-2 text-base font-extrabold text-ink">
              {block.text}
            </h4>
          );
        }
        if (block.kind === "sub") {
          return (
            <p key={i} className="font-bold text-ink-soft">
              {block.text}
            </p>
          );
        }
        if (block.kind === "p") {
          return (
            <p key={i} className="leading-relaxed text-muted-soft">
              {block.text}
            </p>
          );
        }
        return (
          <ul key={i} className="space-y-2">
            {block.items.map((item, j) => (
              <li key={j} className="flex gap-2.5 leading-relaxed text-muted-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}

export function JobOpenings({ openings }: { openings: Opening[] }) {
  // Closed by default (like every accordion on the site); -1 = none open.
  const [open, setOpen] = useState(-1);

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
                <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
                  {job.meta.map((m, mi) => (
                    <li key={mi} className="flex items-center gap-2">
                      {mi > 0 && <span aria-hidden>•</span>}
                      {m}
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  <Blocks blocks={job.blocks} />
                </div>

                <a
                  href={job.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  Download Description (PDF)
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
