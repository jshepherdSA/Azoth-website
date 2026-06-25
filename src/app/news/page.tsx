import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { PageBanner } from "@/components/page-banner";
import { blogPosts } from "@/lib/blog";
import { contactInfo } from "@/lib/nav";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "The latest news, announcements, webinars, and milestones from Azoth — production additive manufacturing.",
};

const newsPosts = blogPosts.filter((post) => post.category === "News & Updates");

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`h-5 w-5 ${className}`} aria-hidden>
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

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-hairline transition-shadow hover:shadow-lg"
              >
                {/* Card header — LinkedIn style */}
                <div className="flex items-center gap-3 border-b border-hairline p-4">
                  <Image
                    src="/images/news-logo.svg"
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full"
                  />
                  <div className="leading-tight">
                    <div className="font-bold text-ink">Azoth3D</div>
                    <div className="text-xs text-muted">{post.date}</div>
                  </div>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on LinkedIn"
                    className="ml-auto text-[#0A66C2] transition-opacity hover:opacity-70"
                  >
                    <LinkedInIcon />
                  </a>
                </div>

                {/* Media */}
                <Link href={`/azoth-blog/${post.slug}`} className="group relative block aspect-video overflow-hidden bg-surface">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-ink via-[#2a0002] to-brand-dark">
                      <Image src="/images/news-logo.svg" alt="" width={56} height={56} className="h-14 w-14 rounded-full" />
                      <span className="text-sm font-bold uppercase tracking-wider text-white/80">
                        Azoth News
                      </span>
                    </div>
                  )}
                </Link>

                {/* Body */}
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="font-bold leading-snug text-ink">
                    <Link href={`/azoth-blog/${post.slug}`} className="transition-colors hover:text-brand">
                      {post.title}
                    </Link>
                  </h3>
                  {post.excerpt && (
                    <p className="line-clamp-3 text-sm leading-relaxed text-muted-soft">{post.excerpt}</p>
                  )}
                  <Link
                    href={`/azoth-blog/${post.slug}`}
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
                  >
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
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
