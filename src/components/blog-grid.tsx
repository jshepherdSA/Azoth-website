"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, blogCategories } from "@/lib/blog";

export function BlogGrid() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = blogPosts.filter(
      (post) =>
        (active === "All" || post.category === active) &&
        (q === "" || post.title.toLowerCase().includes(q)),
    );
    // blogPosts is stored newest-first; reverse for oldest.
    if (sort === "oldest") list = [...list].reverse();
    return list;
  }, [active, query, sort]);

  return (
    <div>
      {/* Search + sort */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            aria-hidden
          >
            <circle cx="9" cy="9" r="6" />
            <path strokeLinecap="round" d="m18 18-4.5-4.5" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles"
            aria-label="Search articles"
            className="w-full rounded-md border border-hairline bg-white py-2.5 pl-9 pr-4 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>
        <label className="flex items-center gap-2 text-sm text-muted-soft">
          Sort by
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "newest" | "oldest")}
            className="rounded-md border border-hairline bg-white px-3 py-2 text-sm font-medium text-ink-soft outline-none focus:border-brand"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </label>
      </div>

      {/* Category tabs — centered, spanning the full width */}
      <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-1 border-b border-hairline sm:justify-between">
        {blogCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`-mb-px border-b-2 px-1 py-4 text-base font-semibold transition-colors sm:text-lg ${
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
        Showing {filtered.length} {filtered.length === 1 ? "article" : "articles"}
      </p>

      {/* Cards */}
      <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/azoth-blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-hairline transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-surface">
              {post.image ? (
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-ink via-[#2a0002] to-brand-dark p-6 text-center">
                  <span className="text-lg font-bold text-white/90">{post.category}</span>
                </div>
              )}
              <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                {post.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-2 p-6">
              <span className="text-sm text-muted">{post.date}</span>
              <h3 className="text-lg font-bold leading-snug text-ink transition-colors group-hover:text-brand">
                {post.title}
              </h3>
              {post.excerpt && (
                <p className="line-clamp-2 text-sm leading-relaxed text-muted-soft">{post.excerpt}</p>
              )}
              <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Read More
                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden>
                  <path
                    d="M6 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-muted">No articles match your search.</p>
      )}
    </div>
  );
}
