import Image from "next/image";
import Link from "next/link";

type Crumb = { label: string; href?: string };

export function PageBanner({
  title,
  breadcrumbs,
}: {
  title: string;
  breadcrumbs: Crumb[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Banner image — shown at full height (never cropped top/bottom), centered.
          When the viewport is wider than the image, white shows on the sides. */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <Image
          src="/images/breadcrumb-banner-new.png"
          alt=""
          width={1440}
          height={300}
          priority
          className="h-full w-auto max-w-none opacity-70"
        />
      </div>
      {/* Dark overlay spans the full width so the white sides are tinted consistently. */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/80 via-ink/45 to-ink/20" />
      <div className="container-az py-16 sm:py-20">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">{title}</h1>
        <nav aria-label="Breadcrumb" className="mt-4">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/40">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-brand">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
