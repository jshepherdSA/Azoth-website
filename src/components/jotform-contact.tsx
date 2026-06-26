"use client";

import { useEffect } from "react";

// JotForm form ID from https://form.jotform.com/jsform/261764600000039
const FORM_ID = "261764600000039";
const ORIGIN = "https://form.jotform.com";
const HANDLER_SRC = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";

type JotformWindow = Window & {
  jotformEmbedHandler?: (selector: string, origin: string) => void;
};

export function JotformContact() {
  useEffect(() => {
    const init = () => {
      const w = window as JotformWindow;
      w.jotformEmbedHandler?.(`iframe[id='JotFormIFrame-${FORM_ID}']`, ORIGIN);
    };

    // The embed handler auto-resizes the iframe to fit the form's content.
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
  }, []);

  return (
    <iframe
      id={`JotFormIFrame-${FORM_ID}`}
      title="Contact Azoth"
      src={`${ORIGIN}/${FORM_ID}`}
      allow="geolocation; microphone; camera; fullscreen"
      scrolling="no"
      className="w-full border-0"
      style={{ minWidth: "100%", height: 700 }}
    />
  );
}
