// Texas economy talking points — single source of truth.
//
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️  ATTRIBUTION IS MANDATORY. Every surface that renders any of these figures
//     MUST visibly cite `TEXAS_ECONOMY_SOURCE` (the Texas Office of the Governor)
//     — e.g. a footnote/caption under the stat band. Do not display these numbers
//     uncredited anywhere on the site.
// ─────────────────────────────────────────────────────────────────────────────
//
// Figures as provided by the Texas Office of the Governor. Keep this list the
// single place these stats live so a wording/number change updates every page at
// once. The `value`/`suffix`/`prefix` fields on headline stats line up with the
// <CountUp> component (src/components/count-up.tsx) for animated stat tiles.
// Note: <CountUp> renders `{value}{suffix}` today — add `prefix` support there (or
// render statically) if you want the "$" on the GDP tile to animate.

export const TEXAS_ECONOMY_SOURCE = {
  name: "Texas Office of the Governor",
  // Canonical site for the Office of the Governor's Economic Development division.
  // Confirm/swap for the exact source page (e.g. the "Texas Economy" fact sheet)
  // before publishing.
  url: "https://gov.texas.gov",
} as const;

/** Short attribution line to render beneath any stat block. */
export const TEXAS_ECONOMY_CITATION = `Source: ${TEXAS_ECONOMY_SOURCE.name}`;

// ── Headline figures — numeric hooks, ideal for <CountUp> stat tiles ──────────
export type TexasHeadlineStat = {
  /** Numeric value for animated counters. */
  value: number;
  /** Rendered before the number, e.g. "$". */
  prefix?: string;
  /** Rendered after the number, e.g. "T", "%", "M+", "+". */
  suffix?: string;
  /** Short label shown under the number. */
  label: string;
  /** Optional supporting context / full-sentence phrasing. */
  detail?: string;
};

export const texasHeadlineStats: TexasHeadlineStat[] = [
  {
    value: 2.9,
    prefix: "$",
    suffix: "T",
    label: "Texas GDP",
    detail:
      "8th-largest economy in the world — larger than Russia, Canada, and Italy.",
  },
  { value: 57, label: "Fortune 500 HQs", detail: "The most of any state." },
  { value: 9.4, suffix: "%", label: "of U.S. GDP" },
  { value: 20, suffix: "%", label: "of all U.S. exports" },
  {
    value: 346,
    suffix: "+",
    label: "corporate HQs relocated",
    detail: "Attracted since 2015.",
  },
  {
    value: 3.5,
    suffix: "M+",
    label: "startups & small businesses",
  },
];

// ── Rankings & awards — "#1 / best / most" claims, many with a running streak ──
export type TexasRanking = {
  title: string;
  /** e.g. "22 years running", "2026 winner". */
  streak?: string;
};

export const texasRankings: TexasRanking[] = [
  { title: "Best State for Business — as named by CEOs", streak: "22 years running" },
  { title: "Best Business Climate in the U.S." },
  {
    title: "Governor's Cup — most business location & expansion projects",
    streak: "14 years running",
  },
  {
    title: "Prosperity Cup — top state for attracting business investment",
    streak: "2026 winner",
  },
  { title: "Top exporting state in the U.S.", streak: "24 years running" },
  { title: "Top semiconductor-exporting state", streak: "15 years running" },
  { title: "Top tech-exporting state", streak: "13 years running" },
  {
    title: "#1 state for foreign direct investment — and a top global destination",
    streak: "20 years running",
  },
];

// ── Supporting facts — phrased lines without a single headline number ─────────
export const texasFacts: string[] = [
  "The Texas economy grew faster than the U.S. as a whole in 2025.",
  "Home to 1 in 10 of all publicly traded companies in the U.S.",
  "The top exporting state to 95 countries.",
  "500+ Texas businesses rank among the 5,000 fastest-growing in the U.S.",
];
