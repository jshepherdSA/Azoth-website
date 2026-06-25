"use client";

import { useState } from "react";

const inputClass =
  "mt-1.5 w-full rounded-md border border-black/15 bg-white px-4 py-3 text-sm text-ink-soft outline-none transition-colors placeholder:text-muted focus:border-brand focus:ring-2 focus:ring-brand/20";

export function CareersForm() {
  const [submitted, setSubmitted] = useState(false);

  // No backend is wired up yet — this captures the submission client-side and
  // shows a confirmation. Replace with a route handler / form action when ready.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-black/10 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-7 w-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-bold text-ink">Thanks for your interest!</h3>
        <p className="mt-2 text-muted-soft">
          We&apos;ve received your application and will be in touch if there&apos;s a fit.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-ink-soft">
          Name <span className="text-brand">*</span>
          <input name="name" type="text" required autoComplete="name" className={inputClass} />
        </label>
        <label className="block text-sm font-semibold text-ink-soft">
          Email <span className="text-brand">*</span>
          <input name="email" type="email" required autoComplete="email" className={inputClass} />
        </label>
      </div>

      <label className="block text-sm font-semibold text-ink-soft">
        Phone <span className="text-brand">*</span>
        <input name="phone" type="tel" required autoComplete="tel" className={inputClass} />
      </label>

      <label className="block text-sm font-semibold text-ink-soft">
        Upload Resume
        <input
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className="mt-1.5 w-full rounded-md border border-dashed border-black/20 bg-surface px-4 py-3 text-sm text-muted-soft file:mr-4 file:rounded-md file:border-0 file:bg-ink file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-brand"
        />
      </label>

      <label className="block text-sm font-semibold text-ink-soft">
        Why do you think you&apos;re a good fit for our team?
        <textarea name="message" rows={4} className={inputClass} />
      </label>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-md bg-brand px-7 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        Submit
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.7 7.3a1 1 0 0 0-1.4 1.4L8.58 10 7.3 11.3a1 1 0 1 0 1.4 1.4l2-2a1 1 0 0 0 0-1.4l-2-2Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
}
