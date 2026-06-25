"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { showcaseItems, showcaseCategories } from "@/lib/showcase";

export function ShowcaseGrid() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? showcaseItems : showcaseItems.filter((item) => item.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-1 border-b border-hairline sm:gap-2">
        {showcaseCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`-mb-px border-b-2 px-4 py-3 text-sm font-semibold transition-colors ${
              active === category
                ? "border-brand text-brand"
                : "border-transparent text-muted hover:text-ink-soft"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted">
        Showing {filtered.length} {filtered.length === 1 ? "part" : "parts"}
      </p>

      {/* Cards */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, i) => (
          <Link
            key={`${item.slug}-${i}`}
            href={`/azoth-showcase/${item.slug}`}
            className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-hairline transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-square overflow-hidden bg-surface">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {item.category && (
                <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                  {item.category}
                </span>
              )}
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-brand">
                {item.title}
              </h3>
              {item.desc && (
                <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-soft">
                  {item.desc}
                </p>
              )}
              {item.material && (
                <p className="mt-3 text-sm">
                  <span className="font-semibold uppercase tracking-wide text-ink-soft">Material:</span>{" "}
                  <span className="text-muted-soft">{item.material}</span>
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
