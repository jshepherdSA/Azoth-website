"use client";

import { useState } from "react";

type Faq = { q: string; a: string };

const faqs: Faq[] = [
  {
    q: "What does Azoth manufacture?",
    a: "Azoth produces small, complex, end-use metal components for high-performance applications across automotive, medical, defense, and industrial markets.",
  },
  {
    q: "What manufacturing technologies do you use?",
    a: "We leverage binder jetting, lithography-based metal AM, MJF, SLS, FDM, CNC machining, and MIM to select the optimal process for performance, cost, and scale.",
  },
  {
    q: "What materials do you support?",
    a: "We primarily manufacture in 17-4PH stainless steel, 316L stainless steel, and titanium (Ti-6Al-4V), with additional materials available depending on application.",
  },
  {
    q: "What types of parts are best suited for Azoth?",
    a: "Parts with complex geometries, internal features, lightweight structures, and production scalability needs.",
  },
  {
    q: "Are you a prototyping shop or production manufacturer?",
    a: "Azoth is a production-focused manufacturer delivering repeatable, high-volume parts with validated processes.",
  },
];

export function FaqAccordion() {
  // All items start collapsed (-1 = none open).
  const [open, setOpen] = useState(-1);

  return (
    <div className="divide-y divide-black/10 border-y border-black/10">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-ink">{faq.q}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg transition-colors ${
                  isOpen ? "bg-brand text-white" : "bg-surface text-ink"
                }`}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div className={`grid transition-all duration-200 ${isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="leading-relaxed text-muted-soft">{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
