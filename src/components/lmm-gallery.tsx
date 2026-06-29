"use client";

import { useState } from "react";
import Image from "next/image";

type Img = { src: string; alt: string };

const BLADE: Img = { src: "/images/llm-slide-one.png", alt: "LMM-printed surgical blade component" };
const CYL: Img = { src: "/images/llm-slide-first-card.png", alt: "LMM-printed cylindrical metal component" };
const RING: Img = { src: "/images/llm-slide-sec-card.png", alt: "LMM-printed textured ring component" };
const TWEEZERS: Img = {
  src: "/images/chip-2-incus_shooting_dec23-118-1024x721.jpg",
  alt: "Hand holding a micro SD card tray with tweezers",
};

type Slide = { tallLeft: Img; stackTop: Img; stackBottom: Img; tallRight: Img };

// Two sets of photos (matches the original Splide gallery), navigable with arrows.
const slides: Slide[] = [
  { tallLeft: BLADE, stackTop: CYL, stackBottom: RING, tallRight: TWEEZERS },
  { tallLeft: TWEEZERS, stackTop: RING, stackBottom: CYL, tallRight: BLADE },
];

function Cell({ img, className = "" }: { img: Img; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-white ring-1 ring-hairline ${className}`}>
      <Image src={img.src} alt={img.alt} fill className="object-contain p-4" sizes="(max-width:640px) 100vw, 33vw" />
    </div>
  );
}

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-5 w-5" aria-hidden>
      <path
        d={dir === "left" ? "M10 4 6 8l4 4" : "M6 4l4 4-4 4"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LmmGallery() {
  const n = slides.length;
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  return (
    <div>
      <div className="grid gap-4 sm:h-[440px] sm:grid-cols-3">
        <Cell img={slide.tallLeft} className="aspect-square sm:aspect-auto sm:h-full" />
        <div className="grid gap-4 sm:grid-rows-2">
          <Cell img={slide.stackTop} className="aspect-[2/1] sm:aspect-auto sm:h-full" />
          <Cell img={slide.stackBottom} className="aspect-[2/1] sm:aspect-auto sm:h-full" />
        </div>
        <Cell img={slide.tallRight} className="aspect-square sm:aspect-auto sm:h-full" />
      </div>

      <div className="mt-6 flex items-center justify-end gap-4">
        <button
          type="button"
          onClick={() => setIndex((i) => (i - 1 + n) % n)}
          aria-label="Previous photos"
          className="flex h-11 w-11 items-center justify-center rounded-md bg-brand text-white transition-colors hover:bg-brand-hover"
        >
          <Arrow dir="left" />
        </button>
        <span className="text-lg font-bold text-ink">
          {index + 1} / {n}
        </span>
        <button
          type="button"
          onClick={() => setIndex((i) => (i + 1) % n)}
          aria-label="Next photos"
          className="flex h-11 w-11 items-center justify-center rounded-md bg-brand text-white transition-colors hover:bg-brand-hover"
        >
          <Arrow dir="right" />
        </button>
      </div>
    </div>
  );
}
