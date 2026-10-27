import type { BlogPostFull } from "@/lib/blog-posts";

// Groups blog posts by topic so each post can point readers (and search
// engines) to related posts and to the matching service page.

type Topic = "materials" | "binder-jetting" | "polymer" | "finishing";

// Checked in order; the first match wins. Matched against the post's address.
const TOPIC_RULES: [Topic, RegExp][] = [
  ["finishing", /finish|polish/],
  ["polymer", /polymer|plastic/],
  ["materials", /stainless/],
  ["binder-jetting", /binder-jetting|sintering|injection-molding/],
];

export function topicOf(slug: string): Topic | null {
  return TOPIC_RULES.find(([, re]) => re.test(slug))?.[0] ?? null;
}

/** Three posts for "Recent Blog": same topic first, then same category, then the rest in site order. */
export function relatedPosts(post: BlogPostFull, all: BlogPostFull[], count = 3) {
  const others = all.filter((p) => p.slug !== post.slug);
  const topic = topicOf(post.slug);
  const sameTopic = topic ? others.filter((p) => topicOf(p.slug) === topic) : [];
  const sameCategory = others.filter((p) => p.category === post.category && !sameTopic.includes(p));
  const rest = others.filter((p) => !sameTopic.includes(p) && !sameCategory.includes(p));
  return [...sameTopic, ...sameCategory, ...rest].slice(0, count);
}

const SERVICE_LINKS: Record<Topic | "default", { href: string; label: string }> = {
  "binder-jetting": { href: "/capabilities/binder-jetting", label: "Learn about our metal binder jetting services" },
  polymer: { href: "/capabilities/polymer-printing", label: "Learn about our polymer 3D printing services" },
  materials: { href: "/materials", label: "Learn about the materials we work with" },
  finishing: { href: "/capabilities/post-processing", label: "Learn about our finishing services" },
  default: { href: "/capabilities", label: "Learn about our additive manufacturing capabilities" },
};

/** The service page each post points to at the end of the article. */
export function serviceLinkFor(slug: string) {
  return SERVICE_LINKS[topicOf(slug) ?? "default"];
}

// Existing words in a post's text that become links (first occurrence only, one
// link per destination, skipped when the post already links there).
const IN_TEXT_LINKS: { slugs: string[]; phrase: RegExp; href: string }[] = [
  {
    slugs: [
      "what-is-metal-binder-jetting",
      "5-reasons-to-choose-binder-jetting-for-metal-parts",
      "five-reasons-to-select-metal-binder-jetting-with-azoth",
      "metal-binder-jetting-vs-metal-injection-molding",
      "what-is-a-sintering-in-a-binder-jetting-3d-printing-process",
      "stainless-steel-material-options-for-binder-jetting-additive-manufacturing-bjam",
    ],
    phrase: /binder jetting/i,
    href: "/capabilities/binder-jetting",
  },
  {
    slugs: [
      "understanding-stainless-steels-316-l-and-17-4ph",
      "stainless-steel-material-options-for-binder-jetting-additive-manufacturing-bjam",
    ],
    phrase: /17-4\s?PH|316-?L/i,
    href: "/materials",
  },
  {
    slugs: ["plastic-3d-printing-technology-overview", "key-applications-for-polymer-additive-manufacturing"],
    phrase: /\b(?:FDM|SLA|SLS)\b/,
    href: "/capabilities/polymer-printing",
  },
];

/** Links the first match of `phrase` in body text, skipping tags, existing links and headings. */
function linkFirst(html: string, phrase: RegExp, href: string) {
  if (html.includes(`href="${href}"`)) return html;
  const parts = html.split(/(<[^>]+>)/);
  let skipDepth = 0;
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part.startsWith("<")) {
      if (/^<(a|h[1-6])[\s>]/i.test(part)) skipDepth++;
      else if (/^<\/(a|h[1-6])>/i.test(part)) skipDepth = Math.max(0, skipDepth - 1);
      continue;
    }
    if (skipDepth > 0) continue;
    const m = part.match(phrase);
    if (m && m.index !== undefined) {
      parts[i] = `${part.slice(0, m.index)}<a href="${href}">${m[0]}</a>${part.slice(m.index + m[0].length)}`;
      return parts.join("");
    }
  }
  return html;
}

/**
 * The post body with search-friendly structure, without changing any wording:
 * - a paragraph that is only a short bold title (no ending punctuation) becomes
 *   a real heading, styled to look exactly like the bold line it replaces;
 * - chosen existing words link to the matching service or materials page.
 */
export function enhanceBody(slug: string, body: string) {
  let html = body.replace(
    /<p>\s*<strong>([^<]{1,60}?[^.!?:<\s])<\/strong>\s*<\/p>/g,
    '<h2 class="blog-bold-heading">$1</h2>',
  );
  for (const rule of IN_TEXT_LINKS) {
    if (rule.slugs.includes(slug)) html = linkFirst(html, rule.phrase, rule.href);
  }
  return html;
}
