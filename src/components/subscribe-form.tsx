"use client";

import { useState } from "react";

// No backend yet — captures the email client-side and confirms. Wire to a
// route handler / email service when ready.
export function SubscribeForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="text-sm font-semibold text-white">
        Thanks for subscribing — we&apos;ll be in touch with new white papers.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="flex w-full flex-col gap-3 sm:flex-row"
    >
      <label className="sr-only" htmlFor="subscribe-email">
        Email address
      </label>
      <input
        id="subscribe-email"
        type="email"
        required
        placeholder="Email address"
        className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/60 focus:border-white focus:bg-white/15 sm:max-w-xs"
      />
      <button
        type="submit"
        className="shrink-0 rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-white/90"
      >
        Subscribe
      </button>
    </form>
  );
}
