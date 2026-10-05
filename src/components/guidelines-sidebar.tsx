"use client";

import Link from "next/link";
import { useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";

type SidebarGroup = { name: string; tabs: { slug: string; title: string }[] };

// Left sidebar for the Design Guidelines pages. Every entry is a real link to
// its own page. On desktop it is a sticky column; on phones and tablets it
// collapses into a "Guidelines" menu at the top of the content.
// The sticky offset (227px) is the site header's desktop height (203px) plus a
// 24px gap, so the sidebar parks just below the header instead of under it.
export function GuidelinesSidebar({ groups }: { groups: SidebarGroup[] }) {
  const segment = useSelectedLayoutSegment();
  const [open, setOpen] = useState(false);
  const current = groups.flatMap((group) => group.tabs).find((tab) => tab.slug === segment);

  const linkClass = (active: boolean) =>
    `block rounded-md px-3 py-1.5 text-sm transition-colors ${
      active
        ? "bg-surface font-bold text-brand"
        : "font-medium text-ink-soft hover:bg-surface hover:text-brand"
    }`;

  return (
    <nav
      aria-label="Design guidelines"
      className="lg:sticky lg:top-[227px] lg:max-h-[calc(100vh-251px)] lg:self-start lg:overflow-y-auto"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="guidelines-menu"
        className="flex w-full items-center justify-between gap-4 rounded-md border border-hairline bg-white px-4 py-3 text-left lg:hidden"
      >
        <span>
          <span className="block text-xs font-semibold uppercase tracking-wider text-brand">
            Guidelines
          </span>
          <span className="mt-0.5 block font-bold text-ink">
            {current?.title ?? "All Guidelines"}
          </span>
        </span>
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className={`h-4 w-4 shrink-0 text-ink transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        id="guidelines-menu"
        className={`${open ? "block" : "hidden"} mt-3 border-b border-hairline pb-4 lg:mt-0 lg:block lg:border-0 lg:pb-0`}
      >
        <Link
          href="/design-guidelines"
          onClick={() => setOpen(false)}
          aria-current={segment === null ? "page" : undefined}
          className={linkClass(segment === null)}
        >
          All Guidelines
        </Link>
        {groups.map((group) => (
          <div key={group.name} className="mt-4">
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-soft">
              {group.name}
            </p>
            <ul className="mt-1.5 space-y-0.5">
              {group.tabs.map((tab) => {
                const active = tab.slug === segment;
                return (
                  <li key={tab.slug}>
                    <Link
                      href={`/design-guidelines/${tab.slug}`}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={linkClass(active)}
                    >
                      {tab.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
