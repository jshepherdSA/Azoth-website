import type { NextConfig } from "next";

// ---------------------------------------------------------------------------
// Redirects from the old WordPress site
//
// The site moved from WordPress to Next.js in July 2026 and several kinds of
// page changed address. Without these, every old link (in Google, on other
// sites, in bookmarks) lands on "not found". All of them are permanent.
//
// The lists come from the WordPress export and from the web archive's history
// of the domain. Old addresses end in a slash; Next.js strips that first, so
// the sources below are written without it.
// ---------------------------------------------------------------------------

// Blog posts used to live at the site root (/post-name/). They are now at
// /azoth-blog/post-name, with the same names.
const OLD_POST_SLUGS = [
  "3d-scanning-for-inspection",
  "5-reasons-to-choose-binder-jetting-for-metal-parts",
  "advanced-part-making",
  "azoth-featured-by-ultmaker-driving-the-transformation-of-physical-to-digital-inventory-with-additive-manufacturing",
  "azoth-finishes-for-metal-3d-printed-parts",
  "azoth-joins-ultmaker-on-talking-additive-podcast",
  "azoth-produces-first-metal-3d-printed-part-via-binder-jetting-on-a-production-vehicle-for-general-motors",
  "create-a-digital-inventory",
  "custom-gage-covers",
  "custom-holders",
  "custom-nozzles",
  "ewie-group-launches-additive-manufacturing-brand-azoth-3d",
  "extreme-isf-rem-polishing-system",
  "five-reasons-to-select-metal-binder-jetting-with-azoth",
  "gripper-fingers",
  "implementing-on-site-printing",
  "jig-fixture-design",
  "key-applications-for-polymer-additive-manufacturing",
  "metal-binder-jetting-vs-metal-injection-molding",
  "metal-injection-molding-vs-binder-jetting-metal-3d-printing",
  "plastic-3d-printing-technology-overview",
  "printing-metal-machine-spare-parts",
  "replacing-metal-with-polymers",
  "reverse-engineering-of-a-gear",
  "safety-applications",
  "spare-parts-on-demand",
  "stainless-steel-material-options-for-binder-jetting-additive-manufacturing-bjam",
  "strategies-for-material-efficient-designs",
  "surface-finishes",
  "the-advantages-of-metal-3d-printing-why-choose-azoth-3d",
  "understanding-stainless-steels-316-l-and-17-4ph",
  "utilizing-thread-inserts",
  "webinar-5-reasons-to-select-binder-jetting",
  "webinar-additive-manufacturing-versus-metal-injection-molding-how-to-choose",
  "what-is-a-digital-inventory-and-why-you-need-one",
  "what-is-a-sintering-in-a-binder-jetting-3d-printing-process",
  "what-is-metal-binder-jetting",
  "what-really-is-metal-material-jetting",
  "world-class-sintering-technology",
];

// Old PDF links (/wp-content/uploads/...). Job descriptions, the binder jetting
// one-pager and the copper data sheet go straight to the file. The white papers
// and the other material data sheets sit behind the download form on the new
// site, so their old links go to the page that offers them.
const OLD_DOCUMENTS: [string, string][] = [
  ["/wp-content/uploads/2026/03/azoth-additive-manufacturing_polishing-technician-compressed.pdf", "/docs/azoth-additive-manufacturing_polishing-technician-compressed.pdf"],
  ["/wp-content/uploads/2026/03/azoth-additive-manufacturing-quality-engineerrev2-compressed.pdf", "/docs/azoth-additive-manufacturing-quality-engineerrev2-compressed.pdf"],
  ["/wp-content/uploads/2026/03/azoth-additive-manufacturing_-additive-techncian-compressed.pdf", "/docs/azoth-additive-manufacturing_-additive-techncian-compressed.pdf"],
  ["/wp-content/uploads/2026/03/metal-binder-jetting-of-automotive-components.pdf", "/white-paper"],
  ["/wp-content/uploads/2026/03/mbj-and-mmj-as-complementary-technologies.pdf", "/white-paper"],
  ["/wp-content/uploads/2026/03/case-study-fluid-matter-exchanger.pdf", "/white-paper"],
  ["/wp-content/uploads/2026/03/metal-binder-jetting-vs-laser-powder-bed-fusion.pdf", "/white-paper"],
  ["/wp-content/uploads/2026/03/azoth-binder-jetting-one-page.pdf", "/docs/azoth-binder-jetting-one-page.pdf"],
  ["/wp-content/uploads/2026/04/1_dm-cu-material-data-sheet.pdf", "/docs/1_dm-cu-material-data-sheet.pdf"],
  ["/wp-content/uploads/2026/04/azoth_material-data-sheet_ti64.pdf", "/materials"],
  ["/wp-content/uploads/2026/04/azoth_material-data-sheet_mar247.pdf", "/materials"],
  ["/wp-content/uploads/2026/04/azoth_material-data-sheet_17-4ph.pdf", "/materials"],
  ["/wp-content/uploads/2026/04/6_dim0108_data-sheet-316l.pdf.pdf", "/materials"],
];

const permanent = (source: string, destination: string) => ({ source, destination, permanent: true });

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Blog posts: /post-name -> /azoth-blog/post-name
      ...OLD_POST_SLUGS.map((slug) => permanent(`/${slug}`, `/azoth-blog/${slug}`)),

      // Showcase: /showcase/part-name -> /azoth-showcase/part-name
      permanent("/showcase", "/azoth-showcase"),
      permanent("/showcase/:slug", "/azoth-showcase/:slug"),
      permanent("/showcase-tag/:tag", "/azoth-showcase"),
      permanent("/azoth-showcase/page/:page", "/azoth-showcase"),

      // White papers each had a page; one page now lists them all.
      permanent("/white-paper/:slug", "/white-paper"),

      // Blog archives and feeds
      permanent("/blog", "/azoth-blog"),
      permanent("/category/:path*", "/azoth-blog"),
      permanent("/author/:path*", "/azoth-blog"),
      permanent("/azoth-blog/page/:page", "/azoth-blog"),
      permanent("/feed", "/azoth-blog"),

      // Pages from the older site structure (2021 to 2023) that search engines
      // and other sites still link to.
      permanent("/about-us", "/about"),
      permanent("/about/team", "/about"),
      permanent("/3d-metal-printing-via-binder-jetting", "/capabilities/binder-jetting"),
      permanent("/capabilities/engineering", "/capabilities"),
      permanent("/capabilities/nano-particle-jetting", "/capabilities"),
      permanent("/industries/:slug(aerospace|energy|industrial|luxury-goods)", "/industries"),
      permanent("/resources", "/azoth-blog"),
      permanent("/resources/faqs", "/faqs"),
      permanent("/resources/examples", "/azoth-showcase"),
      permanent("/resources/knowledge-center", "/azoth-blog"),
      permanent("/resources/video", "/azoth-blog"),
      permanent("/resources/materials/:path*", "/materials"),

      // Old PDF links
      ...OLD_DOCUMENTS.map(([source, destination]) => permanent(source, destination)),
    ];
  },
};

export default nextConfig;
