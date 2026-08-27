import type { MetadataRoute } from "next";

const BASE_URL = "https://azoth3d.com";

// AI/LLM crawlers we explicitly welcome (they're allowed to train on / cite the
// site). Listed by name so the intent is unambiguous even though "*" already
// permits them, this is the opposite of the common "block AI bots" config.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
