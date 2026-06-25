"use client";

import { useState } from "react";

export type AccordionItem = { title: string; body: React.ReactNode };

export function Accordion({
  items,
  defaultOpen = -1,
}: {
  items: AccordionItem[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="divide-y divide-black/10 border-y border-black/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-bold text-ink">{item.title}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl leading-none transition-colors ${
                  isOpen ? "bg-brand text-white" : "bg-surface text-ink"
                }`}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div className={`grid transition-all duration-200 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden leading-relaxed text-muted-soft">{item.body}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
