"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Slide = { src: string; alt: string };

// Shows one hero image at a time and auto-advances on an interval, crossfading
// between slides. Dots let the user jump to a specific slide (which also resets
// the auto-advance timer).
export function IndustriesCarousel({ slides, interval = 3500 }: { slides: Slide[]; interval?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    return () => clearInterval(id);
  }, [slides.length, interval, index]);

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white ring-1 ring-hairline">
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={i === 0}
          className={`object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dots */}
      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show ${slide.alt}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-brand" : "w-2 bg-white/80 ring-1 ring-black/10 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
