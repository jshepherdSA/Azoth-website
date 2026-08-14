"use client";

import { openConsentSettings } from "@/lib/consent";

// Footer link that reopens the cookie consent banner so a visitor can change a
// previously made choice.
export function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={openConsentSettings}
      className="text-left text-sm transition-colors hover:text-brand"
    >
      Cookie settings
    </button>
  );
}
