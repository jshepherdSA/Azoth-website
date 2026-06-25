"use client";

import { useState } from "react";

const inputClass =
  "mt-1.5 w-full rounded-md border border-hairline bg-white px-4 py-3 text-sm text-ink-soft outline-none transition-colors placeholder:text-muted focus:border-brand focus:ring-2 focus:ring-brand/20";

// No backend yet — captures the message client-side and confirms. Wire to a
// route handler / email service when ready.
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-hairline bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-7 w-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-bold text-ink">Thanks for reaching out!</h3>
        <p className="mt-2 text-muted-soft">We&apos;ve received your message and will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5 rounded-2xl border border-hairline bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-ink-soft">
          Name <span className="text-brand">*</span>
          <input name="name" type="text" required autoComplete="name" placeholder="Jonnie Dawson" className={inputClass} />
        </label>
        <label className="block text-sm font-semibold text-ink-soft">
          Email <span className="text-brand">*</span>
          <input name="email" type="email" required autoComplete="email" placeholder="hello@jonnie.com" className={inputClass} />
        </label>
      </div>

      <label className="block text-sm font-semibold text-ink-soft">
        Phone <span className="text-brand">*</span>
        <input name="phone" type="tel" required autoComplete="tel" placeholder="+1 234 567 890" className={inputClass} />
      </label>

      <label className="block text-sm font-semibold text-ink-soft">
        Message <span className="text-brand">*</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="I'd love to learn more about your services"
          className={inputClass}
        />
      </label>

      <button
        type="submit"
        className="rounded-md bg-brand px-7 py-3 font-semibold text-white transition-colors hover:bg-brand-hover"
      >
        Submit
      </button>
    </form>
  );
}
