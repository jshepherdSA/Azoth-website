// Shared cookie-consent store. The user's choice is persisted to localStorage
// and read reactively (via useSyncExternalStore) by both the consent banner and
// the analytics gate, so a single Accept/Decline drives whether GTM, GA, and the
// Trade Desk pixel load. No analytics tag loads until consent === "accepted".
export type ConsentChoice = "accepted" | "declined";

const STORAGE_KEY = "azoth-cookie-consent";
const listeners = new Set<() => void>();

// Transient "reopen the banner" flag (not persisted), driven by the footer's
// "Cookie settings" link so a user can change a decision they've already made.
let forceOpen = false;

function emit() {
  listeners.forEach((l) => l());
}

export function subscribeConsent(onChange: () => void) {
  listeners.add(onChange);
  // Reflect a choice made in another tab.
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) onChange();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onStorage);
  };
}

export function getConsent(): ConsentChoice | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "accepted" || v === "declined" ? v : null;
  } catch {
    return null; // storage blocked (e.g. private mode), treat as no choice
  }
}

// SSR snapshot for the analytics gate: report "no consent" so no tag is ever
// server-rendered; the client re-reads localStorage after hydration and only
// then loads tags if the stored choice is "accepted".
export function getServerConsentNull(): ConsentChoice | null {
  return null;
}

// SSR snapshot for the banner: report an existing choice so the banner stays
// hidden in the server markup (no flash for returning visitors); the client
// reveals it after hydration only when there's genuinely no choice yet.
export function getServerConsentAccepted(): ConsentChoice | null {
  return "accepted";
}

export function isConsentForceOpen(): boolean {
  return forceOpen;
}

export function getServerForceOpen(): boolean {
  return false;
}

export function setConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    /* ignore write failures (e.g. private mode) */
  }
  forceOpen = false;
  emit();
}

// Reopen the banner so the user can revisit their decision.
export function openConsentSettings() {
  forceOpen = true;
  emit();
}
