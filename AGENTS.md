<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Design rules

## No floating grey boxes

Never place a standalone widget, component, image, embed (e.g. a form/iframe), or logo
inside a grey (`bg-surface`) box, card, or panel that floats arbitrarily on the page.
Render these elements **directly on the page background** (white) — let the image/form/icon
sit on its own, with no `bg-surface` / `bg-white shadow-md ring-1` wrapper around it.

- ✅ Float the image/form/logo directly (`object-contain`/`object-cover`, or the embed as-is).
- ❌ Don't wrap a lone element in a rounded grey/white card with a ring or shadow just to "frame" it.
- Grouped, repeating content cards (a grid of feature tiles, blog cards, etc.) may use a
  white card with a thin hairline border — that's a deliberate component, not a lone element
  dropped into a grey box.
- Alternating full-width section backgrounds (`bg-white` / `bg-surface`) are fine; this rule
  is about wrapping *individual* elements in their own floating box.

## Images on grey vs white

**Assume every product/diagram image has a white background** (white pixels at its edges).
A white-edged image must never sit on grey — its edges would show as a hard box.

- **Floating images** — anything shown at natural size or with `object-contain` (the whole
  image is visible) — must sit on a **white** (`bg-white`) section. If the surrounding
  section is `bg-surface`, switch that section to `bg-white`; never float a `object-contain`/
  natural-size image on grey.
- **Cropped images** — anything with `object-cover` (the image is cropped to fill a box) —
  must have an **outline** (`ring-1 ring-hairline`) so the crop edge reads as deliberate.
  These may live on any section background.
- Full-bleed decorative **section backgrounds** (`fill … -z-10 opacity-*` hero/banner images)
  are neither floating tiles nor framed images — leave them as-is (no outline).
