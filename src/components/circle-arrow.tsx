// Azoth's signature CTA element: a small circular arrow.
// `onRed`  — sits inside a scarlet button (translucent white circle, white chevron).
// `solid`  — standalone scarlet circle with white chevron (on light/photo surfaces).

export function CircleArrow({
  tone = "onRed",
  className = "",
}: {
  tone?: "onRed" | "solid";
  className?: string;
}) {
  const circle = tone === "solid" ? "#d71921" : "rgba(255,255,255,0.22)";
  return (
    <svg viewBox="0 0 18 18" className={`h-[18px] w-[18px] ${className}`} aria-hidden>
      <circle cx="9" cy="9" r="9" fill={circle} />
      <path
        d="M7.5 5.25 11.25 9 7.5 12.75"
        fill="none"
        stroke="#fff"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
