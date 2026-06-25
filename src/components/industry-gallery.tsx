"use client";

import { useRef } from "react";
import Image from "next/image";

export type GalleryPhoto = { src: string; alt: string };

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

// Horizontal photo gallery with red prev/next arrows (matches the original industry
// pages). The track scrolls one card-width per click.
export function IndustryGallery({ photos }: { photos: GalleryPhoto[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 20 : 280;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((p) => (
          <div
            key={p.src}
            className="relative aspect-square w-[230px] shrink-0 overflow-hidden rounded-2xl bg-surface ring-1 ring-hairline sm:w-[260px]"
          >
            <Image src={p.src} alt={p.alt} fill className="object-cover" sizes="260px" />
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Previous photos"
          className="flex h-11 w-11 items-center justify-center rounded-md bg-brand text-white transition-colors hover:bg-brand-hover"
        >
          <Arrow dir="left" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Next photos"
          className="flex h-11 w-11 items-center justify-center rounded-md bg-brand text-white transition-colors hover:bg-brand-hover"
        >
          <Arrow dir="right" />
        </button>
      </div>
    </div>
  );
}
