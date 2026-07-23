import Image from "next/image";
import Link from "next/link";
import { contactInfo } from "@/lib/nav";
import { CircleArrow } from "./circle-arrow";

const quickLinks = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/materials" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/about/careers" },
  { label: "Contact us", href: "/contact" },
];

const securityLinks = [
  { label: "Accessibility Policy", href: "/accessibility-policy" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95C20.6 8.69 22 10.5 22 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9V9Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer>
      {/* CTA band */}
      <section className="relative overflow-hidden bg-ink">
        <Image
          src="/images/chatgpt-image-may-22-2026-01_11_15-pm-2.png"
          alt=""
          fill
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="container-az relative flex flex-col items-center gap-6 py-20 text-center text-white">
          <h2 className="max-w-3xl text-3xl font-extrabold sm:text-4xl">
            Ready to Transform Your Production?
          </h2>
          <p className="max-w-2xl text-white/80">
            Whether you&apos;re prototyping or scaling up for full production, our team is here to
            help you make it happen—faster, smarter, and with precision. Let&apos;s bring your ideas
            to life.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2.5 rounded-md bg-brand px-7 py-3 font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            Request A Quote
            <CircleArrow tone="onRed" />
          </Link>
        </div>
      </section>

      {/* Main footer */}
      <div className="bg-black text-white/70">
        <div className="container-az grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Image
                src="/images/Azoth-Red-PNG-Logo-1-White.png"
                alt="Azoth 3D"
                width={44}
                height={45}
                className="h-10 w-auto"
              />
              <span className="text-lg font-extrabold">AZOTH</span>
            </div>
            <p className="text-sm">
              Precision-driven additive manufacturing solutions for every industry.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <span>Follow Us :</span>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <FooterColumn title="Quick Links" links={quickLinks} />
          <FooterColumn title="Security" links={securityLinks} />

          <div className="space-y-3">
            <h3 className="font-semibold text-white">Contact</h3>
            <a href={contactInfo.emailHref} className="block text-sm transition-colors hover:text-brand">
              {contactInfo.email}
            </a>
            <a href={contactInfo.phoneHref} className="block text-sm transition-colors hover:text-brand">
              {contactInfo.phone}
            </a>
            <a
              href={contactInfo.mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm leading-relaxed transition-colors hover:text-brand"
            >
              {contactInfo.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-az py-5 text-center text-sm text-white/60">
            @2026 - All Rights Reserved by{" "}
            <Link href="/" className="font-bold text-white hover:text-brand">
              AZOTH3D
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-white">{title}</h3>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm transition-colors hover:text-brand">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
