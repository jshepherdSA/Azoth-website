// Single source of truth for News & Updates — LinkedIn post embeds, newest first.
// Both the /news page and the homepage News section read from here: the homepage
// shows the most recent few (via a limit) and /news shows them all. They render as
// uniform-sized tiles. When this list is empty, both show a "coming soon" state.
export type NewsItem = {
  embedUrl: string;
};

const EMBED_BASE = "https://www.linkedin.com/embed/feed/update/";

export const newsItems: NewsItem[] = [
  "urn:li:share:7469750672398204928",
  "urn:li:share:7424856383176577024",
  "urn:li:share:7422307910338228224",
  "urn:li:share:7421941600160849920",
  "urn:li:share:7386759016779137025",
  "urn:li:share:7381748424817184768",
  "urn:li:share:7366512743194980353",
  "urn:li:ugcPost:7364315937237286912",
  "urn:li:share:7361424071735025664",
  "urn:li:ugcPost:7358906985230000128",
  "urn:li:share:7354158153174765569",
  "urn:li:share:7351662477786419200",
  "urn:li:ugcPost:7349076802255863809",
  "urn:li:share:7346563884918423584",
].map((urn) => ({ embedUrl: `${EMBED_BASE}${urn}` }));
