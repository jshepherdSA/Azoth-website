"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  target: number;
  /** Animation length in ms. */
  duration?: number;
  /** Appended after the number, e.g. "M+" or "+". */
  suffix?: string;
  className?: string;
};

// Counts from 0 up to `target` once the element scrolls into view (which, in the
// hero, is immediately on page load). Uses an easeOut curve so it starts fast and
// settles on the final number.
export function CountUp({ target, duration = 1300, suffix = "", className }: CountUpProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const run = () => {
      if (started.current) return;
      started.current = true;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setValue(target);
        return;
      }

      let raf = 0;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        setValue(Math.round(eased * target));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      // Safety net: guarantee we land exactly on the target after the duration,
      // even if rAF throttles or stops one frame short of p = 1.
      const done = setTimeout(() => setValue(target), duration + 60);
      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(done);
      };
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
