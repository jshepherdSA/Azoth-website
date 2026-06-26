import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { PageBanner } from "@/components/page-banner";
import { NewsList } from "@/components/news-feed";
import { contactInfo } from "@/lib/nav";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "The latest news, announcements, webinars, and milestones from Azoth — production additive manufacturing.",
};

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95C20.6 8.69 22 10.5 22 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9V9Z" />
    </svg>
  );
}

export default function NewsPage() {
  return (
    <>
      <PageBanner title="News" breadcrumbs={[{ label: "Home", href: "/" }, { label: "News" }]} />

      <section className="bg-white py-20">
        <div className="container-az">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <Eyebrow>News & Updates</Eyebrow>
              <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
                The Latest from Azoth
              </h2>
              <p className="mt-4 leading-relaxed text-muted-soft">
                Announcements, webinars, podcasts, and milestones from our additive manufacturing
                team. Follow along on LinkedIn for the latest.
              </p>
            </div>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2.5 rounded-md bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              <LinkedInIcon />
              Follow on LinkedIn
            </a>
          </div>

          <div className="mt-12">
            <NewsList />
          </div>
        </div>
      </section>
    </>
  );
}
