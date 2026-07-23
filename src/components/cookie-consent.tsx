"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";

// First-visit cookie consent bar. The user's choice is persisted to localStorage
// so the banner never reappears once accepted or declined. We read that choice
// through `useSyncExternalStore`: the server snapshot reports a stored choice
// (banner hidden) to keep hydration stable, then the client re-reads localStorage
// after hydration and reveals the banner only when no choice has been made yet.
const STORAGE_KEY = "azoth-cookie-consent";

const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) onChange();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onStorage);
  };
}

function getChoice(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null; // localStorage blocked — show the banner (choice won't persist)
  }
}

// During SSR/hydration, report a stored choice so the banner stays hidden and the
// markup matches; the client swaps to the real value immediately after hydration.
function getServerChoice(): string | null {
  return "accepted";
}

function setChoice(choice: "accepted" | "declined") {
  try {
    localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    /* ignore write failures (e.g. private mode) */
  }
  listeners.forEach((l) => l());
}

export function CookieConsent() {
  const choice = useSyncExternalStore(subscribe, getChoice, getServerChoice);

  if (choice !== null) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink text-white shadow-2xl"
    >
      <div className="container-az flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-sm leading-relaxed text-white/80">
          We use cookies to operate this site, analyze traffic, and improve your experience. See our{" "}
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
            onClick={() => setChoice("declined")}
            className="rounded-md border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => setChoice("accepted")}
            className="rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
