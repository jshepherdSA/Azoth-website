// Diagonal "Award Winning" corner ribbon.
//
// The rotated band lives inside a FIXED-SIZE corner clip box (not the card
// itself), so the ribbon's geometry, and therefore the full visibility of the
// text, is independent of the card's width. That keeps the label from being
// clipped at any breakpoint. The band is sized so its centered text sits well
// inside the corner triangle while its tails run past the edges and get hidden.
export function AwardRibbon({ size = "md" }: { size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-24 w-24" : "h-28 w-28";
  const band =
    size === "sm"
      ? "top-[26px] -right-9 w-[152px] py-0.5 text-[9px]"
      : "top-[32px] -right-10 w-[176px] py-1 text-[10px]";

  return (
    <div className={`pointer-events-none absolute right-0 top-0 z-10 overflow-hidden ${box}`}>
      <span
        className={`absolute block rotate-45 bg-gradient-to-r from-amber-300 to-yellow-500 text-center font-bold uppercase tracking-wider text-amber-950 shadow-md ${band}`}
      >
        Award Winning
      </span>
    </div>
  );
}
