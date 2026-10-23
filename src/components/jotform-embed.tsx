"use client";

import { useEffect } from "react";

const ORIGIN = "https://form.jotform.com";
const HANDLER_SRC = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";

type JotformWindow = Window & {
  jotformEmbedHandler?: (selector: string, origin: string) => void;
};

/**
 * True when `e` is JotForm telling the page that `formId` was submitted. JotForm
 * posts `{action:"submission-completed", formID:...}` (older embeds post a
 * string starting "submission-completed") to the parent window.
 */
export function isJotformSubmission(e: MessageEvent, formId: string) {
  if (typeof e.origin !== "string" || !e.origin.endsWith(".jotform.com")) return false;
  const d = e.data;
  if (typeof d === "string") return d.startsWith("submission-completed");
  if (!d || typeof d !== "object" || d.action !== "submission-completed") return false;
  return d.formID === undefined || String(d.formID) === formId;
}

/**
 * Embeds a JotForm form as a responsive iframe that auto-resizes to its content.
 * With `thankYouHref`, a completed submission sends the visitor to that page, a
 * real address that ad and analytics tools can count as a conversion. It is a
 * full page load so every tag sees it, not only the ones that follow in-app
 * navigation.
 */
export function JotformEmbed({
  formId,
  title,
  thankYouHref,
}: {
  formId: string;
  title: string;
  thankYouHref?: string;
}) {
  useEffect(() => {
    if (!thankYouHref) return;
    const onMessage = (e: MessageEvent) => {
      if (isJotformSubmission(e, formId)) window.location.assign(thankYouHref);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [formId, thankYouHref]);

  useEffect(() => {
    const init = () => {
      const w = window as JotformWindow;
      w.jotformEmbedHandler?.(`iframe[id='JotFormIFrame-${formId}']`, ORIGIN);
    };

    const existing = document.querySelector<HTMLScriptElement>("script[data-jotform-handler]");
    if (existing) {
      init();
      return;
    }
    const script = document.createElement("script");
    script.src = HANDLER_SRC;
    script.async = true;
    script.dataset.jotformHandler = "true";
    script.addEventListener("load", init);
    document.body.appendChild(script);
  }, [formId]);

  return (
    <iframe
      id={`JotFormIFrame-${formId}`}
      title={title}
      src={`${ORIGIN}/${formId}`}
      allow="geolocation; microphone; camera; fullscreen"
      scrolling="no"
      className="w-full border-0"
      style={{ minWidth: "100%", height: 700 }}
    />
  );
}
