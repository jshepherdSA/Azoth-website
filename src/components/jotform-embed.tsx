"use client";

import { useEffect } from "react";

const ORIGIN = "https://form.jotform.com";
const HANDLER_SRC = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";

type JotformWindow = Window & {
  jotformEmbedHandler?: (selector: string, origin: string) => void;
};

/** Embeds a JotForm form as a responsive iframe that auto-resizes to its content. */
export function JotformEmbed({ formId, title }: { formId: string; title: string }) {
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
