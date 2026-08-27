"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import {
  subscribeConsent,
  getConsent,
  getServerConsentAccepted,
  isConsentForceOpen,
  getServerForceOpen,
  setConsent,
} from "@/lib/consent";

// First-visit cookie consent bar. The choice drives whether analytics/marketing
// tags load (see AnalyticsGate) and is persisted to localStorage so the banner
// stays hidden once a choice is made, unless the user reopens it via the footer
// "Cookie settings" link, which sets the transient force-open flag.
export function CookieConsent() {
  const choice = useSyncExternalStore(subscribeConsent, getConsent, getServerConsentAccepted);
  const forceOpen = useSyncExternalStore(subscribeConsent, isConsentForceOpen, getServerForceOpen);

  // Show when no choice has been made yet, or when the user reopened settings.
  if (choice !== null && !forceOpen) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink text-white shadow-2xl"
    >
      <div className="container-az flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-sm leading-relaxed text-white/80">
          We use cookies to operate this site, analyze traffic, and improve your experience.
          Analytics and marketing cookies load only if you accept. See our{" "}
          <Link
            href="/cookie-policy"
            className="font-semibold text-brand underline underline-offset-2 transition-colors hover:text-brand-hover"
          >
            Cookie Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => setConsent("declined")}
            className="rounded-md border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
