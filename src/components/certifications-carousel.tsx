"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const certifications = [
  { src: "/images/mpif.svg", alt: "MPIF", w: 64, h: 67 },
  { src: "/images/iso-9001.png", alt: "ISO 9001", w: 200, h: 200 },
  { src: "/images/iso-13485.png", alt: "ISO 13485", w: 200, h: 200 },
  { src: "/images/aiag.svg", alt: "AIAG", w: 150, h: 40 },
  { src: "/images/made-in-usa.svg", alt: "Made in USA", w: 77, h: 59 },
  { src: "/images/itar.svg", alt: "ITAR Registered", w: 138, h: 57 },
];

const VISIBLE = 4;
const STEP_MS = 2500;
const TRANSITION_MS = 600;

export function CertificationsCarousel() {
  const n = certifications.length;
  // Duplicate the set so the leftward slide loops seamlessly.
  const slides = [...certifications, ...certifications];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => i + 1), STEP_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (index === n) {
      // After a full set has scrolled by, snap back invisibly (cells n..2n-1
      // are identical to 0..n-1, so the reset is not visible).
      const t = setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, TRANSITION_MS);
      return () => clearTimeout(t);
    }
    if (!animate) {
      const r = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(r);
    }
  }, [index, animate, n]);

  return (
    <section className="border-y border-black/5 bg-white py-10">
      <div className="container-az overflow-hidden">
        <div
          className="flex"
          style={{
            width: `${(slides.length / VISIBLE) * 100}%`,
            transform: `translateX(-${index * (100 / slides.length)}%)`,
            transition: animate ? `transform ${TRANSITION_MS}ms ease` : "none",
          }}
        >
          {slides.map((cert, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center justify-center px-3"
              style={{ width: `${100 / slides.length}%` }}
            >
              <div className="flex h-20 w-full items-center justify-center">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  width={cert.w}
                  height={cert.h}
                  className="max-h-20 w-auto max-w-[180px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
