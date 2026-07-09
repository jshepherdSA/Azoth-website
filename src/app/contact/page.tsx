import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow } from "@/components/eyebrow";
import { PageBanner } from "@/components/page-banner";
import { JotformEmbed } from "@/components/jotform-embed";
import { contactInfo } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Azoth — production additive manufacturing in Ann Arbor, Michigan. Call 734-669-3797, email info@azoth3d.com, or send us a message.",
};

function UsFlag({ className = "" }: { className?: string }) {
  const stripe = 40 / 13;
  return (
    <svg viewBox="0 0 60 40" className={className} role="img" aria-label="American flag">
      <defs>
        <clipPath id="usFlagRound">
          <rect width="60" height="40" rx="4" />
        </clipPath>
      </defs>
      <g clipPath="url(#usFlagRound)">
        {Array.from({ length: 13 }).map((_, i) => (
          <rect
            key={i}
            x="0"
            y={stripe * i}
            width="60"
            height={stripe}
            fill={i % 2 === 0 ? "#B22234" : "#ffffff"}
          />
        ))}
        <rect x="0" y="0" width="26" height={stripe * 7} fill="#3C3B6E" />
        {Array.from({ length: 5 }).map((_, r) =>
          Array.from({ length: 5 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={3.5 + c * 4.8} cy={3 + r * 3.9} r="0.85" fill="#ffffff" />
          )),
        )}
      </g>
      <rect x="0.5" y="0.5" width="59" height="39" rx="4" fill="none" stroke="rgba(0,0,0,0.1)" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.5C3 14 10 21 18.5 21a2 2 0 0 0 2-1.7l.3-2a1.5 1.5 0 0 0-1-1.6l-2.6-.9a1.5 1.5 0 0 0-1.6.4l-.8.9a12 12 0 0 1-4.7-4.7l.9-.8a1.5 1.5 0 0 0 .4-1.6l-.9-2.6a1.5 1.5 0 0 0-1.6-1l-2 .3A2 2 0 0 0 3 5.5Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

const contactCards = [
  { icon: <PhoneIcon />, label: "Call Us", value: contactInfo.phone, href: contactInfo.phoneHref },
  { icon: <MailIcon />, label: "Email Us", value: contactInfo.email, href: contactInfo.emailHref },
  {
    icon: <PinIcon />,
    label: "Visit Us",
    value: contactInfo.address.join(", "),
    href: contactInfo.mapHref,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />

      {/* Form */}
      <section className="bg-white py-20">
        <div className="container-az max-w-3xl">
          <div className="text-center">
            <Eyebrow>Get In Touch</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">Contact Us</h2>
            <p className="mt-4 leading-relaxed text-muted-soft">
              We&apos;re here to help—share your thoughts or inquiries with us, and we&apos;ll get
              back to you soon!
            </p>
          </div>
          <div className="mt-10">
            <JotformEmbed formId="261764600000039" title="Contact Azoth" />
          </div>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="bg-surface py-16">
        <div className="container-az grid gap-6 md:grid-cols-3">
          {contactCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-start gap-4 rounded-2xl border border-hairline bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                {card.icon}
              </span>
              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-muted">{card.label}</div>
                <div className="mt-1 font-bold text-ink transition-colors group-hover:text-brand">
                  {card.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Shipping map */}
      <section className="bg-white py-20">
        <div className="container-az">
          <div className="mx-auto flex max-w-3xl items-center justify-center gap-4 text-center">
            <UsFlag className="h-9 w-auto shrink-0 drop-shadow-sm sm:h-12" />
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-ink via-brand-dark to-brand bg-clip-text text-transparent">
                Made in the USA
              </span>
            </h2>
          </div>
          <div className="relative mx-auto mt-10 aspect-[4/3] max-w-4xl">
            <Image
              src="/images/contact-shipping.png"
              alt="Map of the United States showing Azoth shipping destinations"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>
        </div>
      </section>
    </>
  );
}
