"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { mainNav, contactInfo, type NavItem } from "@/lib/nav";
import { CircleArrow } from "./circle-arrow";

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={`h-4 w-4 ${className}`} aria-hidden>
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`h-4 w-4 ${className}`} aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95C20.6 8.69 22 10.5 22 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9V9Z" />
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

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} className={`h-4 w-4 ${className}`} aria-hidden>
      <circle cx="9" cy="9" r="6" />
      <path strokeLinecap="round" d="m18 18-4.5-4.5" />
    </svg>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50">
      {/* Top banner — black→red gradient, logo + contact (180% the bottom height) */}
      <div className="bg-gradient-to-r from-black to-brand text-white">
        <div className="container-az flex h-20 items-center justify-between lg:h-[130px]">
          <Link href="/" aria-label="Azoth home">
            <Image
              src="/images/Azoth-Red-PNG-Logo-1-White.png"
              alt="Azoth"
              width={70}
              height={70}
              className="h-14 w-auto lg:h-16"
              priority
            />
          </Link>

          <div className="hidden items-center gap-8 text-lg font-bold lg:flex">
            <a href={contactInfo.phoneHref} className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
              <PhoneIcon /> {contactInfo.phone}
            </a>
            <a href={contactInfo.emailHref} className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
              <MailIcon /> {contactInfo.email}
            </a>
            <div className="flex items-center gap-3">
              <span>Follow Us :</span>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white hover:text-brand"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom banner — white nav (keeps current height) */}
      <div className="border-b border-hairline bg-white">
        <div className="container-az flex h-[72px] items-center gap-6">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="text-ink xl:hidden"
            aria-label="Open menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-7 w-7">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 xl:flex">
            {mainNav.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3">
            {/* Search bar */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="hidden items-center gap-2 rounded-md border border-hairline bg-surface px-3 py-2 md:flex"
            >
              <SearchIcon className="text-muted" />
              <input
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="w-28 bg-transparent text-sm text-ink-soft outline-none placeholder:text-muted"
              />
            </form>

            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Request a Quote
              <CircleArrow tone="onRed" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-ink text-white shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <span className="text-lg font-extrabold">AZOTH</span>
              <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-7 w-7">
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-6 py-4">
              {mainNav.map((item) => (
                <div key={item.label} className="border-b border-white/10">
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setOpenSection(openSection === item.label ? null : item.label)}
                        className="flex w-full items-center justify-between py-3 text-left font-semibold"
                      >
                        {item.label}
                        <Chevron className={openSection === item.label ? "rotate-180" : ""} />
                      </button>
                      {openSection === item.label && (
                        <div className="pb-2">
                          {item.href && (
                            <Link
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2 pl-3 text-sm text-white/70 hover:text-brand"
                            >
                              Overview
                            </Link>
                          )}
                          {item.children.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2 pl-3 text-sm text-white/70 hover:text-brand"
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href ?? "#"}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 font-semibold"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/quote"
                onClick={() => setMobileOpen(false)}
                className="mt-5 flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 font-semibold"
              >
                Request a Quote
                <CircleArrow tone="onRed" />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function DesktopNavItem({ item }: { item: NavItem }) {
  if (!item.children) {
    return (
      <Link
        href={item.href ?? "#"}
        className="rounded-md px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-brand"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-soft transition-colors group-hover:text-brand"
      >
        {item.label}
        <Chevron className="transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 min-w-56 translate-y-1 rounded-lg border border-black/5 bg-white p-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {item.href && (
          <Link
            href={item.href}
            className="block rounded-md px-3 py-2 text-sm font-semibold text-ink-soft hover:bg-surface hover:text-brand"
          >
            {item.label} Overview
          </Link>
        )}
        {item.children.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="block rounded-md px-3 py-2 text-sm text-ink-soft/80 hover:bg-surface hover:text-brand"
          >
            {c.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
