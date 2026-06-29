import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPostsFull } from "@/lib/blog-posts";

type Params = { slug: string };

export function generateStaticParams() {
  return blogPostsFull.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsFull.find((p) => p.slug === slug);
  if (!post) return {};
  const description = post.body
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);
  return {
    title: post.title,
    description,
    openGraph: post.image ? { images: [post.image] } : undefined,
  };
}

function Chevron() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden>
      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = blogPostsFull.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPostsFull.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Post header */}
      <section className="relative isolate overflow-hidden bg-ink">
        <Image
          src="/images/breadcrumb-banner-new.png"
          alt=""
          fill
          priority
          className="-z-10 object-cover object-center opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/35" />
        <div className="container-az max-w-3xl py-16 sm:py-20">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              <li>
                <Link href="/" className="transition-colors hover:text-brand">
                  Home
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li>
                <Link href="/azoth-blog" className="transition-colors hover:text-brand">
                  Blog
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li className="text-white">{post.title}</li>
            </ol>
          </nav>
          <span className="mt-6 inline-block rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/70">
            <span>{post.date}</span>
            <span className="text-white/30">•</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-16">
        <div className="container-az max-w-3xl">
          {post.image && (
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl bg-surface shadow-md ring-1 ring-hairline">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}

          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.body }} />

          <div className="mt-12 border-t border-hairline pt-8">
            <Link
              href="/azoth-blog"
              className="inline-flex items-center gap-1.5 font-semibold text-brand transition-colors hover:text-brand-hover"
            >
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 rotate-180" aria-hidden>
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to all articles
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog */}
      <section className="bg-surface py-16">
        <div className="container-az">
          <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">Recent Blog</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/azoth-blog/${item.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-hairline transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-ink via-[#2a0002] to-brand-dark p-6 text-center">
                      <span className="font-bold text-white/90">{item.category}</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <span className="text-sm text-muted">{item.date}</span>
                  <h3 className="text-lg font-bold leading-snug text-ink transition-colors group-hover:text-brand">
                    {item.title}
                  </h3>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-brand">
                    Read More
                    <Chevron />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
