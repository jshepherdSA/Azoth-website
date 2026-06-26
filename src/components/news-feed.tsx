import { newsItems } from "@/lib/news";

function LinkedInIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95C20.6 8.69 22 10.5 22 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9V9Z" />
    </svg>
  );
}

function NewsComingSoon() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center rounded-2xl border border-hairline bg-surface px-6 py-16 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0A66C2] text-white">
        <LinkedInIcon />
      </span>
      <p className="mt-5 text-xl font-bold text-ink">News &amp; updates coming soon</p>
      <p className="mt-2 text-muted-soft">
        Our latest news, announcements, and updates will appear here.
      </p>
    </div>
  );
}

/**
 * Renders the shared News & Updates feed as uniform LinkedIn-embed tiles. Pass
 * `limit` (e.g. 3 on the homepage) to show only the most recent items; omit it to
 * show all. Each tile is the same size regardless of the post's natural height.
 */
export function NewsList({ limit }: { limit?: number }) {
  const items = limit ? newsItems.slice(0, limit) : newsItems;
  if (items.length === 0) return <NewsComingSoon />;

  return (
    <div className="grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.embedUrl}
          className="h-[640px] w-full max-w-[504px] overflow-hidden rounded-2xl bg-white ring-1 ring-hairline"
        >
          <iframe
            src={item.embedUrl}
            title="Azoth on LinkedIn"
            loading="lazy"
            allowFullScreen
            className="h-full w-full border-0"
          />
        </div>
      ))}
    </div>
  );
}
