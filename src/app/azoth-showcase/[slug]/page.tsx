import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CircleArrow } from "@/components/circle-arrow";
import { showcaseItems } from "@/lib/showcase";

type Params = { slug: string };

export function generateStaticParams() {
  return showcaseItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = showcaseItems.find((i) => i.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} — Showcase`,
    description: item.desc || `${item.title} — a production part by Azoth in ${item.material}.`,
    openGraph: { images: [item.image] },
  };
}

function Chevron() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden>
      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function ShowcaseItemPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const item = showcaseItems.find((i) => i.slug === slug);
  if (!item) notFound();

  const sameCategory = showcaseItems.filter((i) => i.slug !== slug && i.category === item.category);
  const others = showcaseItems.filter((i) => i.slug !== slug && i.category !== item.category);
  const related = [...sameCategory, ...others].slice(0, 4);

  const specs = [
    { label: "Industry", value: item.industry },
    { label: "Material", value: item.material },
  ].filter((s) => s.value);

  return (
    <>
      {/* Breadcrumb header */}
      <section className="relative isolate overflow-hidden bg-ink">
        <Image
          src="/images/breadcrumb-banner-new.png"
          alt=""
          fill
          className="-z-10 object-cover object-center opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/60" />
        <div className="container-az py-10 sm:py-12">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              <li>
                <Link href="/" className="transition-colors hover:text-brand">
                  Home
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li>
                <Link href="/azoth-showcase" className="transition-colors hover:text-brand">
                  Azoth Showcase
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li className="text-white">{item.title}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Product detail */}
      <section className="bg-white py-16">
        <div className="container-az grid items-start gap-12 lg:grid-cols-2">
          {/* Hero image */}
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface shadow-md ring-1 ring-hairline lg:sticky lg:top-28">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <span className="absolute left-5 top-5 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
              {item.category}
            </span>
          </div>

          {/* Details */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">
              Azoth Showcase
            </span>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
              {item.title}
            </h1>
            {item.desc && (
              <p className="mt-5 text-lg leading-relaxed text-muted-soft">{item.desc}</p>
            )}

            {specs.length > 0 && (
              <dl className="mt-8 divide-y divide-hairline border-y border-hairline">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex items-center justify-between gap-4 py-4">
                    <dt className="text-sm font-semibold uppercase tracking-wide text-muted">
                      {spec.label}
                    </dt>
                    <dd className="font-semibold text-ink">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2.5 rounded-md bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-hover"
              >
                Request A Quote
                <CircleArrow tone="onRed" />
              </Link>
              <Link
                href="/azoth-showcase"
                className="inline-flex items-center gap-2 rounded-md border border-hairline px-7 py-3.5 font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
              >
                <span className="rotate-180">
                  <Chevron />
                </span>
                Back to Showcase
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* More from the showcase */}
      {related.length > 0 && (
        <section className="bg-surface py-16">
          <div className="container-az">
            <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">More from the Showcase</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/azoth-showcase/${rel.slug}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-hairline transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-square overflow-hidden bg-surface">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold text-white">
                      {rel.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold leading-snug text-ink transition-colors group-hover:text-brand">
                      {rel.title}
                    </h3>
                    {rel.material && <p className="mt-1 text-sm text-muted">{rel.material}</p>}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
