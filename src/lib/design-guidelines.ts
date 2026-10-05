// Design Guidelines hub: the one list that the sidebar, the sitemap, the hub
// cards and every guidelines page read from, plus the page content itself.
//
// Content rules for this file:
// - Only facts supplied by Azoth (client meetings or pages already on the site)
//   are published. Never add a number, spec, material, size limit or capability
//   that Azoth has not given.
// - `// TODO(Ronnie):` marks a fact Azoth still needs to supply. Nothing is
//   rendered for it until the fact is filled in.
// - `// DRAFT: Ronnie to review` marks copy that was drafted for this page and
//   has not been approved yet. It sits directly above the drafted entry.
// - Text supports two bits of inline markup: **bold** and [label](/href).
//
// Every TODO and DRAFT below is also listed, by tab, in
// _reference/design-guidelines-open-questions.md.

import { cncMetals } from "@/lib/materials";

export const SITE_URL = "https://azoth3d.com";

// The CNC capability page (/capabilities/cnc) is still unlisted. While this is
// false, the 5-Axis CNC Machining guidelines tab stays unpublished and nothing
// on the guidelines pages links to /capabilities/cnc. Set it to true to publish
// the tab and turn those links on.
export const CNC_LIVE = false;

// Sidebar groups, in the order of Azoth's vertically integrated workflow.
export const guidelineGroups = [
  "Start Here",
  "Additive Manufacturing",
  "Machining",
  "Heat Treatment",
  "Finishing",
  "Quality",
] as const;

export type GuidelineGroup = (typeof guidelineGroups)[number];

export type GuidelineTab = {
  slug: string;
  group: GuidelineGroup;
  // Sidebar label. The page H1 is "[title] Design Guidelines".
  title: string;
  // Unpublished tabs are still built, but they are left out of the sidebar, the
  // hub and the sitemap, and they are set to noindex.
  published: boolean;
  seoTitle: string;
  seoDescription: string;
  // One line shown on the hub card.
  summary: string;
  // The matching capability page, linked from the top of the guidelines page.
  capability?: { href: string; label: string };
};

export const guidelineTabs: GuidelineTab[] = [
  {
    slug: "file-preparation",
    group: "Start Here",
    title: "File Preparation",
    published: true,
    seoTitle: "File Preparation Design Guidelines | Azoth",
    seoDescription:
      "How to prepare CAD files for Azoth: accepted file types (.sldprt, .f3d, .step, .stp, .stl), STL resolution, single-body parts and what to send with your file.",
    // DRAFT: Ronnie to review
    summary: "Accepted CAD file types, STL resolution and what to send with your part.",
  },
  {
    slug: "binder-jetting",
    group: "Additive Manufacturing",
    title: "Binder Jetting",
    published: true,
    seoTitle: "Binder Jetting Design Guidelines | Azoth",
    seoDescription:
      "Binder jetting design guidelines from Azoth: 5 to 75 mm ideal part size, 0.30 mm minimum walls, 0.20 mm minimum holes, aspect ratios, text and exit holes.",
    // DRAFT: Ronnie to review
    summary: "Part size, wall thickness, holes, aspect ratios, text and exit holes for metal binder jetting.",
    capability: { href: "/capabilities/binder-jetting", label: "Binder Jetting" },
  },
  {
    slug: "lmm",
    group: "Additive Manufacturing",
    title: "LMM",
    published: true,
    seoTitle: "LMM Design Guidelines | Azoth",
    seoDescription:
      "LMM design guidelines from Azoth: parts 20 mm and smaller, walls down to 50 μm, tolerances to ±0.05 mm, Ra 2 μm surface finish, support free in four metals.",
    // DRAFT: Ronnie to review
    summary: "Part size, wall thickness, tolerances and surface finish for Lithography Metal Manufacturing.",
    capability: {
      href: "/capabilities/lithography-metal-manufacturing",
      label: "Lithography Metal Manufacturing",
    },
  },
  {
    slug: "polymer-printing",
    group: "Additive Manufacturing",
    title: "Polymer Printing",
    // The client asked to hold this tab until later.
    published: false,
    seoTitle: "Polymer Printing Design Guidelines | Azoth",
    seoDescription:
      "Polymer printing design guidelines from Azoth for FDM, SLA, DLP, SLS and HP Multi Jet Fusion parts: accepted files, materials and what to send with your part.",
    // DRAFT: Ronnie to review
    summary: "File and material guidance for FDM, SLA, DLP, SLS and HP Multi Jet Fusion parts.",
    capability: { href: "/capabilities/polymer-printing", label: "Polymer Printing" },
  },
  {
    slug: "cnc-machining",
    group: "Machining",
    title: "5-Axis CNC Machining",
    published: CNC_LIVE,
    seoTitle: "5-Axis CNC Machining Design Guidelines | Azoth",
    seoDescription:
      "5-axis CNC machining design guidelines from Azoth: ±.005 in. general tolerance, tighter when called out, internal corner radii, walls, holes and threads.",
    // DRAFT: Ronnie to review
    summary: "Tolerances, materials and design rules for 5-axis CNC machined parts.",
    capability: CNC_LIVE ? { href: "/capabilities/cnc", label: "5-Axis CNC Machining" } : undefined,
  },
  {
    slug: "heat-treatment",
    group: "Heat Treatment",
    title: "Heat Treatment",
    published: true,
    seoTitle: "Heat Treatment Design Guidelines | Azoth",
    seoDescription:
      "Heat treatment design guidelines from Azoth: solutioning, aging, annealing and HIP, 17-4PH conditions H900, H1075 and H1150, and what to call out on drawings.",
    // DRAFT: Ronnie to review
    summary: "Solutioning, aging, annealing and HIP, plus 17-4PH conditions and drawing callouts.",
    capability: { href: "/capabilities/post-processing", label: "Finishing" },
  },
  {
    slug: "powder-coating-cerakote",
    group: "Finishing",
    title: "Powder Coating & Cerakote",
    published: true,
    seoTitle: "Powder Coating & Cerakote Design Guidelines | Azoth",
    seoDescription:
      "Powder coating and Cerakote design guidelines from Azoth: how coating thickness, masking, hang points, sharp edges and fine detail affect coated metal parts.",
    // DRAFT: Ronnie to review
    summary: "Coating thickness, masking, hang points and fine detail on coated parts.",
    capability: { href: "/capabilities/post-processing", label: "Finishing" },
  },
  {
    slug: "plating",
    group: "Finishing",
    title: "Plating",
    published: true,
    seoTitle: "Plating Design Guidelines | Azoth",
    seoDescription:
      "Plating design guidelines from Azoth: chrome and gold plating for metal parts, with guidance on plating thickness, masking, contact points and deep recesses.",
    // DRAFT: Ronnie to review
    summary: "Chrome and gold plating: thickness, masking, contact points and recesses.",
    capability: { href: "/capabilities/post-processing", label: "Finishing" },
  },
  {
    slug: "pvd-coatings",
    group: "Finishing",
    title: "PVD Coatings",
    published: true,
    seoTitle: "PVD Coatings Design Guidelines | Azoth",
    seoDescription:
      "PVD coating design guidelines from Azoth: black, gold, gray and more, with guidance on line of sight, surface finish under the coating, masking and fixturing.",
    // DRAFT: Ronnie to review
    summary: "PVD colors, line of sight, surface finish under the coating and masking.",
    capability: { href: "/capabilities/post-processing", label: "Finishing" },
  },
  {
    slug: "passivation",
    group: "Finishing",
    title: "Passivation",
    published: true,
    seoTitle: "Passivation Design Guidelines | Azoth",
    seoDescription:
      "Passivation design guidelines from Azoth for stainless steel parts such as 316L and 17-4PH: process order, blind holes, crevices and drawing callouts.",
    // DRAFT: Ronnie to review
    summary: "Passivation for stainless steel parts: process order, drainage and drawing callouts.",
    capability: { href: "/capabilities/post-processing", label: "Finishing" },
  },
  {
    slug: "polishing",
    group: "Finishing",
    title: "Polishing",
    published: true,
    seoTitle: "Polishing Design Guidelines | Azoth",
    seoDescription:
      "Polishing design guidelines from Azoth: how mass polishing affects edges, fine detail, recesses and tolerances on metal parts, and what to mark on your drawing.",
    // DRAFT: Ronnie to review
    summary: "How mass polishing affects edges, fine detail, recesses and tolerances.",
    capability: { href: "/capabilities/post-processing", label: "Finishing" },
  },
  {
    slug: "quality-inspection",
    group: "Quality",
    title: "Quality & Inspection",
    published: true,
    seoTitle: "Quality & Inspection Design Guidelines | Azoth",
    seoDescription:
      "Quality and inspection guidelines from Azoth: blue light scanning, Keyence vision, CMM, hard gaging, certificates of inspection, PPAP, ISO 9001 and ISO 13485.",
    // DRAFT: Ronnie to review
    summary: "Inspection methods, inspection frequency, documentation and what to put on your drawing.",
    capability: { href: "/capabilities/quality", label: "Quality" },
  },
];

export const publishedTabs = guidelineTabs.filter((tab) => tab.published);

export function getTab(slug: string) {
  return guidelineTabs.find((tab) => tab.slug === slug);
}

export function tabHref(tab: Pick<GuidelineTab, "slug">) {
  return `/design-guidelines/${tab.slug}`;
}

export function tabHeading(tab: Pick<GuidelineTab, "title">) {
  return `${tab.title} Design Guidelines`;
}

export type GuidelineGroupList = { name: GuidelineGroup; tabs: GuidelineTab[] }[];

// Published tabs grouped for the sidebar and the hub. Empty groups are dropped.
export function publishedGroups(): GuidelineGroupList {
  return guidelineGroups
    .map((name) => ({ name, tabs: publishedTabs.filter((tab) => tab.group === name) }))
    .filter((group) => group.tabs.length > 0);
}

// Published tabs in the workflow groups that come after this tab's group.
export function nextSteps(tab: GuidelineTab): GuidelineGroupList {
  const position = guidelineGroups.indexOf(tab.group);
  return publishedGroups().filter((group) => guidelineGroups.indexOf(group.name) > position);
}

// Hub intro paragraph.
// TODO(Ronnie): Approve or rewrite this first-draft hub intro paragraph.
export const hubIntro =
  "Azoth is vertically integrated and delivers finished, end-use parts. These guidelines follow that workflow, from file preparation through additive manufacturing, heat treatment, finishing and inspection. Start with file preparation, then open the guide for each process your part will go through.";

// ---------------------------------------------------------------------------
// Page content
// ---------------------------------------------------------------------------

export type GuidelineBlock =
  | { kind: "p"; text: string }
  | { kind: "list"; items: string[] }
  // `numeric` shows the value column in bold red, for tables of numbers.
  | { kind: "table"; head: string[]; rows: string[][]; numeric?: boolean }
  | {
      kind: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      // Tailwind max-width class for the rendered image.
      maxW?: string;
      // The file-type graphic has white icons, so it is the one image that sits
      // on a grey panel. Every other diagram sits directly on white.
      onSurface?: boolean;
    };

export type GuidelineSection = { title: string; toc?: string; blocks: GuidelineBlock[] };

export type GuidelineRule = { id: string; title: string; blocks: GuidelineBlock[] };

// One entry per slot of the page template, in template order. A slot with
// nothing real in it yet is simply left out.
export type GuidelineContent = {
  intro: string[];
  glance?: { title: string; rows: [string, string][] };
  sizing?: GuidelineSection;
  materials?: GuidelineSection;
  send?: GuidelineSection;
  rules?: { title: string; rules: GuidelineRule[] };
  expect?: GuidelineSection;
  checklist?: { title: string; items: string[] };
};

const FILE_PREP_LINK = "[File Preparation](/design-guidelines/file-preparation)";

// ===== File Preparation (file-preparation) =====
const filePreparation: GuidelineContent = {
  intro: [
    // DRAFT: Ronnie to review
    "Start here before sending a part to any Azoth process. This page covers the CAD file types we accept, STL resolution and the information to include with your file.",
  ],
  glance: {
    title: "Accepted CAD File Types",
    rows: [
      ["SolidWorks native file", ".sldprt"],
      ["Autodesk Fusion 360 native file", ".f3d"],
      ["STEP file, a universal CAD format", ".step, .stp"],
      ["STL file, accepted across all additive manufacturing", ".stl"],
    ],
  },
  send: {
    title: "What to Send Us: CAD Files and Drawings",
    blocks: [
      {
        kind: "image",
        src: "/images/dg1.png",
        alt: "Accepted file types: .sldprt, .f3d, .step, .stp, .stl",
        width: 860,
        height: 183,
        maxW: "max-w-2xl",
        onSurface: true,
      },
      {
        kind: "p",
        text: "All of Azoth's manufacturing processes start with a digital model. Native files from SolidWorks (.SLDPRT) and Autodesk Fusion 360 (.F3D) are best so that no details get lost in translation. Likewise, a STEP file is a universal format compatible with all CAD software and is ideal to submit (.STP or .STEP).",
      },
      // Facts from the FAQs page ("What information is needed for a quote?") and
      // the Binder Jetting and LMM capability pages.
      // DRAFT: Ronnie to review
      {
        kind: "p",
        text: "Along with the CAD file, send the material, quantities, application, tolerances and finishing requirements. Include a 2D drawing or blueprint if one is available.",
      },
      // TODO(Ronnie): Drawings: is a 2D drawing required or optional, does that change by process, and what must it show (tolerances, datums, finish callouts, revision)?
      // TODO(Ronnie): PDF requirement: does Azoth require a PDF copy of the drawing, and is anything else needed as a PDF?
    ],
  },
  rules: {
    title: "File Preparation Rules",
    // TODO(Ronnie): What not to send: list the file types or content Azoth does not want to receive. This rule is left off the page until the list is confirmed.
    rules: [
      {
        id: "stl-resolution",
        title: "STL Resolution",
        blocks: [
          {
            kind: "p",
            text: "If CAD files are not available, an STL file is accepted across all additive manufacturing. An STL is a tessellated model that approximates the original design. Too low a resolution will look faceted and jagged; too high won't increase quality and makes the file size unwieldy.",
          },
          {
            kind: "image",
            src: "/images/dg2.png",
            alt: "STL resolution comparison, a smooth high-resolution sphere versus a faceted low-resolution sphere",
            width: 450,
            height: 208,
            maxW: "max-w-md",
          },
        ],
      },
      {
        id: "single-part-body-files",
        title: "Single-Part Body Files",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Send each part as its own file with one solid body. A file that holds several bodies or a full assembly makes it unclear which geometry should be reviewed and built.",
          },
          // TODO(Ronnie): Single-part body files: confirm the rule (one solid body per file?) and how customers should send assemblies or orders with several parts.
        ],
      },
      {
        id: "critical-features",
        title: "Critical Features",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Mark the features that matter most to fit and function, with their tolerances, on the drawing. That lets our engineers plan the process and the inspection around them.",
          },
          // TODO(Ronnie): Critical features: is there a preferred way to mark them (balloons, a notes table, a specific symbol)?
        ],
      },
    ],
  },
  checklist: {
    title: "File Preparation Pre-Flight Checklist",
    // DRAFT: Ronnie to review
    items: [
      "The file is a .sldprt, .f3d, .step, .stp or .stl",
      "A native SolidWorks or Fusion 360 file, or a STEP file, is used where one is available",
      "Any STL is exported at a resolution that looks smooth without making the file unwieldy",
      "Each file holds one part as a single solid body",
      "Material, quantities, application, tolerances and finishing requirements are included",
      "Critical features and their tolerances are marked on the drawing",
    ],
  },
};

// ===== Binder Jetting (binder-jetting) =====
// TODO(Ronnie): Confirm that every spec on this page is a binder jetting spec. The numbers and images were moved from the old Design Guidelines page, which never named the process.
const binderJetting: GuidelineContent = {
  intro: [
    "Binder jetting is the ideal metal 3D printing process for manufacturing very detailed, small, complex metal components.",
    // DRAFT: Ronnie to review
    "Use these guidelines to size walls, holes, channels, text and exit holes so your part prints, depowders and sinters reliably.",
  ],
  glance: {
    title: "Binder Jetting Specs at a Glance",
    rows: [
      ["Optimal part size", "5mm to 75mm"],
      ["Recommended maximum", "150mm in the longest dimension, larger parts considered case by case"],
      ["Minimum wall thickness", "0.30mm"],
      ["Minimum hole diameter", "0.20mm"],
      ["Minimum inaccessible internal channel", "3mm diameter"],
      ["Materials", "17-4PH, 316L, pure copper, Mar M247, D2 tool steel"],
      // TODO(Ronnie): Binder jetting tolerances (general, and the tightest achievable) for the at a glance table and the finished parts section.
      // TODO(Ronnie): Binder jetting surface finish (as-sintered Ra) for the at a glance table and the finished parts section.
    ],
  },
  sizing: {
    title: "Binder Jetting Part Size",
    blocks: [
      {
        kind: "p",
        text: "Small and complex parts are Azoth's specialty. As a rule of thumb, **5mm to 75mm** is optimal (about the size of your fist or smaller). We recommend not exceeding **150mm** in the longest dimension, though larger components are considered case by case.",
      },
      {
        kind: "image",
        src: "/images/dg3.png",
        alt: "Binder jetting ideal part size diagram, maximum part size is about the size of a fist",
        width: 900,
        height: 130,
        maxW: "max-w-4xl",
      },
      // TODO(Ronnie): Is there a hard minimum part size and a hard maximum (build envelope) for binder jetting, beyond the 5mm to 75mm rule of thumb?
    ],
  },
  materials: {
    title: "Binder Jetting Materials",
    blocks: [
      {
        kind: "list",
        items: [
          "17-4PH Stainless Steel",
          "316L Stainless Steel",
          "Pure Copper",
          "Mar M247",
          "D2 Tool Steel",
        ],
      },
      { kind: "p", text: "Data sheets are available on the [Materials](/materials) page." },
      // TODO(Ronnie): The Materials page also lists Titanium (Ti-6Al-4V) under Binder Jetting, but the Binder Jetting page does not. Which list is right?
    ],
  },
  send: {
    title: "What to Send Us for Binder Jetting",
    blocks: [
      // Facts from the Binder Jetting capability page (Workflow).
      // DRAFT: Ronnie to review
      {
        kind: "p",
        text: `Send your CAD file and a blueprint if one is available. An engineer with binder jetting expertise will evaluate your part, and Azoth will provide DFAM when needed. See ${FILE_PREP_LINK} for accepted file types.`,
      },
      // TODO(Ronnie): Is a drawing required for binder jetted parts, and what should it call out?
    ],
  },
  rules: {
    title: "Binder Jetting Design Rules",
    rules: [
      {
        id: "wall-thickness",
        title: "Binder Jetting Wall Thickness",
        blocks: [
          {
            kind: "p",
            text: "Minimum wall thickness should be no less than **0.30mm** on any cross-section of any part feature. This also applies to minimum distances between walls. Requirements may vary depending on size and feature shape.",
          },
          {
            kind: "image",
            src: "/images/dg4.png",
            alt: "Binder jetting minimum wall thickness diagram",
            width: 450,
            height: 208,
          },
        ],
      },
      {
        id: "hole-size-and-internal-channels",
        title: "Hole Size & Internal Channels",
        blocks: [
          {
            kind: "p",
            text: "The minimum hole size achievable is **0.20mm** in diameter. Inaccessible internal channels should be no less than **3mm** in diameter. These values depend on depth, surrounding geometry, and accessibility of the feature.",
          },
          {
            kind: "image",
            src: "/images/dg5.png",
            alt: "Binder jetting hole size and internal channels diagram",
            width: 450,
            height: 208,
          },
        ],
      },
      {
        id: "edges-and-corners",
        title: "Edges & Corners",
        blocks: [
          {
            kind: "p",
            text: "Sharp edges are prone to chipping prior to sintering and likely to propagate cracks. Adding fillets and chamfers to all sharp edges and corners minimizes risk without adding any additional cost or lead time.",
          },
          {
            kind: "image",
            src: "/images/dg6.png",
            alt: "Binder jetting edges and corners diagram",
            width: 450,
            height: 208,
          },
        ],
      },
      {
        id: "aspect-ratio",
        title: "Aspect Ratio",
        blocks: [
          {
            kind: "p",
            text: "An aspect ratio is the proportion of a feature's dimensions, the larger one dimension is versus another, the larger the aspect ratio. The maximum recommended ratio depends on the feature type:",
          },
          {
            kind: "table",
            numeric: true,
            head: ["Feature", "Maximum Recommended Ratio"],
            rows: [
              ["Height-to-Wall Thickness", "≤ 8:1"],
              ["Slot Depth-to-Width (< 2mm width)", "≤ 4:1"],
              ["Slot Depth-to-Width (> 2mm width)", "≤ 8:1"],
              ["Hole Depth-to-Diameter (< 2mm dia.)", "4:1"],
              ["Hole Depth-to-Diameter (> 2mm dia.)", "8:1"],
            ],
          },
          {
            kind: "p",
            text: "Features exceeding the recommended ratio are likely to fail, more prone to fracture, hard to depowder, and susceptible to warping during sintering. Enclosed walls, supports, gussets, and ribs can minimize risk.",
          },
          {
            kind: "image",
            src: "/images/dg7.png",
            alt: "Binder jetting aspect ratio diagram",
            width: 450,
            height: 208,
          },
        ],
      },
      {
        id: "text-and-surface-texture",
        title: "Text & Surface Texture",
        blocks: [
          {
            kind: "p",
            text: "Part numbers, logos, and patterns can be easily implemented at no additional cost. Surface textures can also be added for a unique look or improved functionality.",
          },
          {
            kind: "p",
            text: "**Debossed text:** spacing at least 0.3mm apart at all cross-sections, embedded a minimum of 0.4mm for legibility. Letters with free-standing posts (e.g. “A”) must follow the 8:1 aspect-ratio criterion.",
          },
          {
            kind: "p",
            text: "**Embossed text:** spacing at least 0.3mm apart at all cross-sections, following the 8:1 design ratio for lettering height.",
          },
          { kind: "p", text: "**Best fonts:** Arial Rounded MT Bold, Arial Black, Calibri." },
          {
            kind: "image",
            src: "/images/dg8.png",
            alt: "Binder jetting text and surface texture diagram",
            width: 450,
            height: 208,
          },
        ],
      },
      {
        id: "exit-holes",
        title: "Exit Holes",
        blocks: [
          {
            kind: "p",
            text: "Exit holes provide an opening for excess powder to escape during depowdering. Without them, interior channels can only reach so deep before powder removal becomes challenging, risking craters on walls, eroded threads, and rounded corners.",
          },
          {
            kind: "image",
            src: "/images/dg9.png",
            alt: "Binder jetting exit holes diagram",
            width: 450,
            height: 208,
          },
        ],
      },
    ],
  },
  expect: {
    title: "What to Expect from Binder Jetted Parts",
    blocks: [
      // Facts from the Binder Jetting and Quality capability pages and client notes.
      // DRAFT: Ronnie to review
      {
        kind: "list",
        items: [
          "Sintering creates a fully dense metal component, ready for its end-use application or further post-processing.",
          "Every additive part is measured, and every part ships with a certificate of inspection.",
          "Azoth operates to industry material standards like MPIF 35 and ASTM B883.",
        ],
      },
    ],
  },
  checklist: {
    title: "Binder Jetting Pre-Flight Checklist",
    // DRAFT: Ronnie to review
    items: [
      "The part is within 150mm in its longest dimension (5mm to 75mm is optimal)",
      "Walls, and the gaps between walls, are at least 0.30mm",
      "Holes are at least 0.20mm in diameter, and inaccessible internal channels are at least 3mm",
      "Sharp edges and corners have fillets or chamfers",
      "Walls, slots and holes stay within the recommended aspect ratios",
      "Text is spaced at least 0.3mm apart, and debossed text is at least 0.4mm deep",
      "Internal channels and cavities have exit holes for powder removal",
      `The CAD file is an accepted type (see ${FILE_PREP_LINK})`,
    ],
  },
};

// ===== LMM (lmm) =====
const lmm: GuidelineContent = {
  intro: [
    "LMM technology enables the production of high-precision small and micro metal components.",
    // DRAFT: Ronnie to review
    "These guidelines cover the part size, wall thickness, tolerances and surface finish to design around for Lithography Metal Manufacturing (LMM).",
  ],
  glance: {
    title: "LMM Specs at a Glance",
    rows: [
      ["Best-fit part size", "About 20 mm or smaller in length, width and height"],
      ["Minimum wall thickness", "Down to 50 μm"],
      ["Tolerances", "To ±0.05 mm (±0.5%)"],
      ["Surface finish", "Ra 2 μm without post-processing"],
      ["Supports", "Support free"],
      ["Materials", "316L, 17-4PH, Ti-6Al-4V, pure copper"],
    ],
  },
  sizing: {
    title: "LMM Part Size",
    blocks: [
      {
        kind: "p",
        text: "This technology is best suited for applications about the size of a dime or smaller (**20 mm**) in length, width, and height.",
      },
      // TODO(Ronnie): LMM minimum and maximum part size (build envelope). The site only gives the 20 mm rule of thumb.
    ],
  },
  materials: {
    title: "LMM Materials",
    blocks: [
      {
        kind: "list",
        items: ["316L Stainless Steel", "17-4PH Stainless Steel", "Ti-6Al-4V", "Pure Copper"],
      },
      { kind: "p", text: "Data sheets are available on the [Materials](/materials) page." },
    ],
  },
  send: {
    title: "What to Send Us for LMM",
    blocks: [
      // Facts from the LMM capability page ("How Do I Get Started?").
      // DRAFT: Ronnie to review
      {
        kind: "p",
        text: `Send a STEP file and/or a 2D drawing, plus quantities for development and production volumes, and tell us any technical details we should know about. See ${FILE_PREP_LINK} for accepted file types.`,
      },
    ],
  },
  rules: {
    title: "LMM Design Rules",
    // TODO(Ronnie): LMM design rules beyond wall thickness: minimum hole size, minimum feature and text size, aspect ratios and internal channels.
    // TODO(Ronnie): Do the binder jetting rules for edges and corners, aspect ratio and exit holes also apply to LMM parts?
    rules: [
      {
        id: "wall-thickness",
        title: "LMM Wall Thickness",
        blocks: [
          { kind: "p", text: "LMM can produce walls down to **50 μm**." },
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Walls this thin are easiest to hold when they are short and tied into the surrounding geometry, so tell us where a thin wall is critical to function.",
          },
        ],
      },
      {
        id: "support-free-printing",
        title: "Support-Free Printing",
        blocks: [
          { kind: "p", text: "LMM parts print support free." },
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "There are no support structures to design in or remove, which gives more freedom for overhangs and fine features than metal printing processes that need supports.",
          },
        ],
      },
    ],
  },
  expect: {
    title: "LMM Tolerances and Surface Finish",
    blocks: [
      // Facts from the LMM capability page and client notes.
      // DRAFT: Ronnie to review
      {
        kind: "list",
        items: [
          "A very smooth surface, with an Ra of **2 μm** without post-processing.",
          "Tolerances up to **±0.05 mm (±0.5%)**.",
          "Every additive part is measured, and every part ships with a certificate of inspection.",
        ],
      },
      // TODO(Ronnie): The LMM page says tolerances "up to" ±0.05 mm (±0.5%). Confirm the wording: is that the standard tolerance or the best achievable?
    ],
  },
  checklist: {
    title: "LMM Pre-Flight Checklist",
    // DRAFT: Ronnie to review
    items: [
      "The part is about 20 mm or smaller in length, width and height",
      "No wall is thinner than 50 μm",
      "The material is 316L, 17-4PH, Ti-6Al-4V or pure copper",
      "Any tolerance tighter than ±0.05 mm (±0.5%) is flagged for review",
      "A STEP file and/or 2D drawing is ready, with development and production quantities",
    ],
  },
};

// ===== Polymer Printing (polymer-printing) =====
// Unpublished: the client asked to hold this tab until later.
// TODO(Ronnie): Polymer design rules for each technology (FDM, SLA / DLP, SLS / HP Multi Jet Fusion): minimum wall thickness, hole size, tolerances and build size.
// TODO(Ronnie): Confirm when the Polymer Printing guidelines should be published.
const polymerPrinting: GuidelineContent = {
  intro: [
    "Azoth's team of experts can assist with a wide array of plastic additive (3D) manufacturing technologies.",
  ],
  glance: {
    title: "Polymer Printing at a Glance",
    rows: [
      ["Technologies", "FDM, SLA, DLP, SLS, HP Multi Jet Fusion"],
      ["Reinforcement fibers", "Glass, carbon and Kevlar, among others"],
      ["Color", "Full-color FDM"],
    ],
  },
  materials: {
    title: "Polymer Printing Materials",
    blocks: [
      {
        kind: "p",
        text: "Polymer materials are listed by printing process on the [Materials](/materials) page.",
      },
    ],
  },
  send: {
    title: "What to Send Us for Polymer Printing",
    blocks: [
      // DRAFT: Ronnie to review
      {
        kind: "p",
        text: `An STL file is accepted across all additive manufacturing if CAD files are not available. See ${FILE_PREP_LINK} for accepted file types and STL resolution.`,
      },
    ],
  },
};

// ===== 5-Axis CNC Machining (cnc-machining) =====
// Unpublished while CNC_LIVE is false.
// TODO(Ronnie): Confirm the tightest CNC tolerance. Our meeting notes say down to the tenths (0.0001"), but the CNC capability page currently shows ±0.0005".
// TODO(Ronnie): CNC minimum and maximum part size (work envelope).
// TODO(Ronnie): CNC surface finish (as-machined Ra).
const cncMachining: GuidelineContent = {
  intro: [
    // DRAFT: Ronnie to review
    "Azoth runs 5-axis CNC machining in an A/C configuration. These guidelines cover tolerances, materials and the features to design around.",
  ],
  glance: {
    title: "5-Axis CNC Machining Specs at a Glance",
    rows: [
      ["Machine configuration", "5-axis, A/C configuration"],
      ["General tolerance", "±.005\" unless otherwise specified"],
      ["Tighter tolerances", "Down to the tenths (0.0001\") when required and called out on the print"],
      ["Materials", cncMetals.map((group) => group.name).join(", ")],
    ],
  },
  // Read from the CNC Metals data on the Materials page so the two stay in sync.
  materials: {
    title: "CNC Machining Materials",
    blocks: [
      {
        kind: "table",
        head: ["Group", "Materials"],
        rows: cncMetals.map((group) => [group.name, group.items.join(", ")]),
      },
      { kind: "p", text: "The same list is shown on the [Materials](/materials) page." },
      // TODO(Ronnie): Confirm the CNC materials lists, and name the one composite that still needs to be added.
    ],
  },
  send: {
    title: "What to Send Us for CNC Machining",
    blocks: [
      { kind: "p", text: "Any tolerance tighter than the general **±.005\"** needs to be called out on the print." },
      // DRAFT: Ronnie to review
      {
        kind: "p",
        text: `Send a CAD file with a print that shows tolerances, threads and critical features. See ${FILE_PREP_LINK} for accepted file types.`,
      },
      // TODO(Ronnie): CNC drawing requirements: is a print always required, and what must it include?
    ],
  },
  rules: {
    title: "CNC Machining Design Rules",
    rules: [
      {
        id: "internal-corner-radii",
        title: "Internal Corner Radii",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "A rotating cutter leaves a radius in every internal corner, so a perfectly sharp internal corner cannot be machined. Design internal corners with a radius, and make it as large as the part allows so a more rigid tool can be used.",
          },
          // TODO(Ronnie): Minimum internal corner radius, and the recommended radius relative to pocket depth.
        ],
      },
      {
        id: "wall-thickness",
        title: "Wall Thickness",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Thin walls flex and vibrate under cutting forces, which makes tolerances and surface finish harder to hold. Keep walls as thick as the design allows, and expect taller walls to need more thickness.",
          },
          // TODO(Ronnie): Minimum machined wall thickness, by material if it differs.
        ],
      },
      {
        id: "hole-depth",
        title: "Hole Depth",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Deep, narrow holes are limited by tool length and by how well chips can clear. The deeper a hole is relative to its diameter, the harder it is to hold size and straightness.",
          },
          // TODO(Ronnie): Maximum hole depth relative to diameter, and the minimum hole diameter.
        ],
      },
      {
        id: "threads-and-tapping",
        title: "Threads and Tapping",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Call out the thread size, class and depth for every threaded hole on the print. Blind threaded holes need extra unthreaded depth at the bottom for the tool.",
          },
          // TODO(Ronnie): Thread sizes Azoth can cut (inch and metric), and the minimum and maximum thread depth.
        ],
      },
      {
        id: "countersinks",
        title: "Countersinks",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Call out the countersink angle and major diameter on the print, matched to the fastener that will sit in it.",
          },
          // TODO(Ronnie): Countersink angles and sizes Azoth can cut.
        ],
      },
      {
        id: "tool-access",
        title: "Features the Tool Cannot Reach",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "A cutter needs a clear path to every surface it machines. 5-axis machining reaches more faces in a single setup, but undercuts, deep narrow pockets and internal features with no line of sight can still be out of reach.",
          },
          // TODO(Ronnie): Tool reach limits: maximum pocket depth, and whether undercuts are possible.
        ],
      },
    ],
  },
  expect: {
    title: "CNC Machining Tolerances and Inspection",
    blocks: [
      {
        kind: "list",
        items: [
          "General tolerance is **±.005\"** unless otherwise specified.",
          "Tighter tolerances, down to the tenths (**0.0001\"**), are held when required and called out on the print.",
          "Inspection depends on the program or customer: sampling, every part, the first and last part of the day, or CMM.",
        ],
      },
    ],
  },
  checklist: {
    title: "CNC Machining Pre-Flight Checklist",
    // DRAFT: Ronnie to review
    items: [
      "Internal corners have a radius",
      "Thin walls and deep, narrow holes have been reviewed",
      "Threads are called out with size, class and depth",
      "Countersinks are called out with angle and major diameter",
      "A tool can reach every machined surface",
      "Any tolerance tighter than ±.005\" is called out on the print",
    ],
  },
};

// ===== Heat Treatment (heat-treatment) =====
// TODO(Ronnie): Heat treatment size limits (furnace and HIP envelope), and which processes run in-house.
const heatTreatment: GuidelineContent = {
  intro: [
    // DRAFT: Ronnie to review
    "Azoth offers in-house heat treatment as part of its vertically integrated workflow. This page covers the processes available, the 17-4PH conditions offered and what to call out on your drawing.",
  ],
  glance: {
    title: "Heat Treatment at a Glance",
    rows: [
      ["Processes", "Solutioning, aging, annealing, HIP (hot isostatic pressing)"],
      ["17-4PH conditions", "H900, H1075, H1150"],
      ["Other alloys", "Many more conditions, depending on the alloy"],
    ],
  },
  materials: {
    title: "Heat Treatment Processes and 17-4PH Conditions",
    toc: "Processes and Conditions",
    blocks: [
      // DRAFT: Ronnie to review
      {
        kind: "table",
        head: ["Process", "What It Does"],
        rows: [
          ["Solutioning", "Heats the alloy so its alloying elements dissolve evenly into the metal, which prepares it for aging."],
          ["Aging", "Holds the part at a lower temperature to raise strength and hardness."],
          ["Annealing", "Softens the material and relieves internal stress."],
          ["HIP (hot isostatic pressing)", "Applies high temperature and gas pressure together to close internal porosity."],
        ],
      },
      {
        kind: "p",
        text: "For 17-4PH stainless steel, heat treatments include **H900**, **H1075** and **H1150**, with many more available depending on the alloy.",
      },
      // DRAFT: Ronnie to review
      {
        kind: "p",
        text: "Each 17-4PH condition is named for its aging temperature in degrees Fahrenheit. Lower temperatures such as H900 give the highest strength and hardness, while higher temperatures such as H1150 trade some strength for toughness.",
      },
      // TODO(Ronnie): Hardness or mechanical property targets for H900, H1075 and H1150.
      // TODO(Ronnie): The full list of alloys Azoth heat treats and the conditions offered for each.
    ],
  },
  send: {
    title: "What to Send Us for Heat Treatment",
    blocks: [
      // DRAFT: Ronnie to review
      {
        kind: "list",
        items: [
          "The alloy and the condition you need, for example 17-4PH in condition H900",
          "Any hardness or mechanical property requirement the part must meet",
          "The features that must hold their tolerance after heat treatment",
        ],
      },
      // TODO(Ronnie): What heat treatment documentation ships with parts (hardness results, furnace charts, certs)?
    ],
  },
  rules: {
    title: "Designing Parts for Heat Treatment",
    rules: [
      {
        id: "distortion-and-wall-thickness",
        title: "Distortion and Wall Thickness",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Parts can move slightly during heat treatment as internal stresses relax. Thin walls, long unsupported features and sudden changes in section thickness are the most likely to distort, so keep sections as uniform as the design allows.",
          },
        ],
      },
      {
        id: "tight-tolerance-features",
        title: "Tight-Tolerance Features",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Heat treatment can shift dimensions by a small amount. Flag the features that must hold a tight tolerance so the order of operations can be planned around them.",
          },
          // TODO(Ronnie): Typical dimensional change from heat treatment, and any allowance customers should design in.
        ],
      },
      {
        id: "hot-isostatic-pressing",
        title: "Hot Isostatic Pressing (HIP)",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "HIP closes porosity inside the part, which improves density and fatigue performance. It does not close pores that are open to the surface.",
          },
        ],
      },
    ],
  },
  checklist: {
    title: "Heat Treatment Pre-Flight Checklist",
    // DRAFT: Ronnie to review
    items: [
      "The alloy and required condition are called out on the drawing",
      "Hardness or mechanical property requirements are stated",
      "Features that must hold tolerance after heat treatment are flagged",
      "Thin walls and sudden changes in section thickness have been reviewed for distortion",
    ],
  },
};

// ===== Powder Coating & Cerakote (powder-coating-cerakote) =====
// The client asked to combine powder coating and Cerakote in one tab.
// TODO(Ronnie): Size limits: the largest and smallest part Azoth can powder coat or Cerakote.
// TODO(Ronnie): Color options for powder coating and for Cerakote.
const powderCoatingCerakote: GuidelineContent = {
  intro: [
    // DRAFT: Ronnie to review
    "Powder coating and Cerakote give finished metal parts color, durability and corrosion resistance. This page covers how coating thickness, masking and hang points affect your design.",
  ],
  glance: {
    title: "Powder Coating and Cerakote at a Glance",
    rows: [
      ["Coatings", "Powder coating, Cerakote"],
      ["Used for", "Performance, durability, corrosion resistance and visual finish"],
      ["Multiple finishes", "Cerakote can be combined with other finishes on a single part, such as high polish"],
    ],
  },
  send: {
    title: "What to Send Us for Powder Coating and Cerakote",
    blocks: [
      // DRAFT: Ronnie to review
      {
        kind: "list",
        items: [
          "The coating (powder coating or Cerakote) and the color for each part",
          "The surfaces to coat and the surfaces to mask",
          "The cosmetic surfaces that must stay free of hang marks",
        ],
      },
    ],
  },
  rules: {
    title: "Powder Coating and Cerakote Design Rules",
    rules: [
      {
        id: "coating-thickness",
        title: "Coating Thickness and Tolerances",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Both coatings add material to every coated surface, so allow for that on tight fits, threads and mating faces. Powder coating builds a thicker film than Cerakote, which makes Cerakote the better choice where tolerances are close or detail is fine.",
          },
          // TODO(Ronnie): Coating thickness for powder coating and for Cerakote.
        ],
      },
      {
        id: "masking",
        title: "Masking",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Threads, press fits, mating faces and electrical contact points are usually masked so they stay bare. Mark every surface that must stay uncoated on your drawing.",
          },
          // TODO(Ronnie): Masking: what Azoth can and cannot mask (threads, holes, partial faces), and how masked areas should be shown.
        ],
      },
      {
        id: "hang-points",
        title: "Hang Points",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Parts are hung or fixtured while they are coated and cured, which leaves a small uncoated mark at each contact point. A hole or a non-cosmetic surface is the best place for one, so tell us which surfaces must stay free of marks.",
          },
          // TODO(Ronnie): Hang points: how parts are hung, how big the mark is, and whether a hang hole is required.
        ],
      },
      {
        id: "edges-recesses-and-fine-detail",
        title: "Sharp Edges, Recesses and Fine Detail",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Coatings thin out over sharp edges and are harder to apply evenly deep inside narrow recesses. A thick coating can also soften or fill small text, textures and holes, so break sharp edges and keep fine detail off powder coated surfaces where you can.",
          },
        ],
      },
    ],
  },
  checklist: {
    title: "Powder Coating and Cerakote Pre-Flight Checklist",
    // DRAFT: Ronnie to review
    items: [
      "The coating type and color are called out on the drawing",
      "Masked surfaces, threads and holes are marked",
      "Tight fits and threads allow for coating thickness",
      "A hang point is identified on a hole or a non-cosmetic surface",
      "Sharp edges are broken, and fine detail is kept off powder coated surfaces",
    ],
  },
};

// ===== Plating (plating) =====
// TODO(Ronnie): Size limits: the largest and smallest part Azoth can plate.
// TODO(Ronnie): Color and finish options for chrome plating and gold plating (for example bright or satin).
const plating: GuidelineContent = {
  intro: [
    // DRAFT: Ronnie to review
    "Azoth offers chrome plating and gold plating for finished metal parts. This page covers how plating thickness, masking and contact points affect your design.",
  ],
  glance: {
    title: "Plating at a Glance",
    rows: [
      ["Plating types", "Chrome plating, gold plating"],
      ["Used for", "Performance, durability, corrosion resistance and visual finish"],
    ],
  },
  send: {
    title: "What to Send Us for Plating",
    blocks: [
      // DRAFT: Ronnie to review
      {
        kind: "list",
        items: [
          "The plating type (chrome or gold) for each part",
          "The surfaces to plate and the surfaces to mask",
          "The cosmetic surfaces that must stay free of contact marks",
        ],
      },
    ],
  },
  rules: {
    title: "Plating Design Rules",
    rules: [
      {
        id: "plating-thickness",
        title: "Plating Thickness and Tolerances",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Plating adds material to every plated surface. Allow for it on tight fits, threads and mating faces, or mark those surfaces to be masked.",
          },
          // TODO(Ronnie): Coating thickness for chrome plating and for gold plating.
        ],
      },
      {
        id: "edges-recesses-and-blind-holes",
        title: "Edges, Recesses and Blind Holes",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Plating does not build evenly. It grows faster on sharp outside edges and corners and thinner inside deep recesses and blind holes, so rounding outside edges and avoiding deep, narrow recesses on plated surfaces gives a more even finish.",
          },
        ],
      },
      {
        id: "masking",
        title: "Masking",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Surfaces that must stay unplated need to be masked. Mark them clearly on your drawing.",
          },
          // TODO(Ronnie): Masking: what Azoth can and cannot mask for plating, and how masked areas should be shown.
        ],
      },
      {
        id: "contact-points",
        title: "Contact Points",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Parts have to be held and electrically connected while they are plated, which can leave a small mark at each contact point. Tell us which surfaces are cosmetic so contact points can be placed elsewhere.",
          },
          // TODO(Ronnie): Hang points: are parts rack plated or barrel plated, and where do contact marks usually end up?
        ],
      },
      {
        id: "surface-finish-before-plating",
        title: "Surface Finish Before Plating",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Plating follows the surface underneath and does not hide scratches or texture. For a bright, reflective plated finish, the part usually needs to be polished first.",
          },
        ],
      },
    ],
  },
  checklist: {
    title: "Plating Pre-Flight Checklist",
    // DRAFT: Ronnie to review
    items: [
      "The plating type is called out on the drawing",
      "Masked surfaces are marked",
      "Tight fits and threads allow for plating thickness",
      "Outside edges on plated surfaces are rounded",
      "Cosmetic surfaces are identified so contact points can avoid them",
    ],
  },
};

// ===== PVD Coatings (pvd-coatings) =====
// TODO(Ronnie): Size limits: the largest and smallest part Azoth can PVD coat.
// TODO(Ronnie): Color options: the full list of PVD colors behind "black, gold, gray and more".
const pvdCoatings: GuidelineContent = {
  intro: [
    // DRAFT: Ronnie to review
    "PVD (physical vapor deposition) coatings add a thin, durable, colored film to finished metal parts. Azoth offers PVD coatings in black, gold, gray and more.",
  ],
  glance: {
    title: "PVD Coatings at a Glance",
    rows: [
      ["Colors", "Black, gold, gray and more"],
      ["Used for", "Performance, durability, corrosion resistance and visual finish"],
    ],
  },
  send: {
    title: "What to Send Us for PVD Coatings",
    blocks: [
      // DRAFT: Ronnie to review
      {
        kind: "list",
        items: [
          "The PVD color for each part",
          "The surface finish you want under the coating, such as polished or textured",
          "The surfaces to mask, and the cosmetic surfaces that must stay free of fixture marks",
        ],
      },
    ],
  },
  rules: {
    title: "PVD Coating Design Rules",
    rules: [
      {
        id: "coating-thickness",
        title: "Coating Thickness and Tolerances",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "A PVD coating is very thin, so it changes part dimensions far less than powder coating or paint. Flag any fit that is tight enough for a thin film to matter.",
          },
          // TODO(Ronnie): Coating thickness for PVD coatings.
        ],
      },
      {
        id: "line-of-sight",
        title: "Line of Sight",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "PVD coats the surfaces that are exposed inside the coating chamber. Deep recesses, blind holes and internal channels receive little or no coating, so keep coated surfaces open and accessible.",
          },
        ],
      },
      {
        id: "surface-finish-under-the-coating",
        title: "Surface Finish Under the Coating",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Because the film is so thin, it takes on the finish of the surface underneath. A polished surface stays glossy, a textured surface stays textured, and scratches remain visible.",
          },
        ],
      },
      {
        id: "masking-and-fixture-points",
        title: "Masking and Fixture Points",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Parts are held on fixtures in the chamber, and each contact point is left uncoated. Mark any surface that must stay bare, and tell us which surfaces are cosmetic so fixture points can be placed elsewhere.",
          },
          // TODO(Ronnie): Masking: what Azoth can and cannot mask for PVD, and how masked areas should be shown.
          // TODO(Ronnie): Hang points: how parts are fixtured for PVD and where the uncoated contact marks end up.
        ],
      },
    ],
  },
  checklist: {
    title: "PVD Coatings Pre-Flight Checklist",
    // DRAFT: Ronnie to review
    items: [
      "The PVD color is called out on the drawing",
      "Coated surfaces are open and accessible, not inside deep recesses or internal channels",
      "The finish under the coating (polished or textured) is specified",
      "Masked surfaces are marked",
      "Cosmetic surfaces are identified so fixture points can avoid them",
    ],
  },
};

// ===== Passivation (passivation) =====
// The client asked to keep passivation as its own tab.
// TODO(Ronnie): Which passivation standard and method does Azoth run (for example nitric or citric), and which standards can it certify to?
// TODO(Ronnie): Coating thickness: confirm passivation needs no dimensional allowance.
// TODO(Ronnie): Masking: can surfaces be kept out of the passivation bath, and how should they be shown?
// TODO(Ronnie): Hang points: how are parts racked or basketed for passivation, and does it leave marks?
// TODO(Ronnie): Size limits: the largest and smallest part Azoth can passivate.
// TODO(Ronnie): Color options: confirm there are none (passivation does not color the part).
const passivation: GuidelineContent = {
  intro: [
    // DRAFT: Ronnie to review
    "Passivation is a chemical treatment that improves the corrosion resistance of stainless steel parts. It is a surface treatment, not a coating.",
  ],
  materials: {
    title: "Passivation for Stainless Steel",
    toc: "Materials",
    blocks: [
      // DRAFT: Ronnie to review
      {
        kind: "p",
        text: "Passivation is used on stainless steels. Azoth's stainless steel materials include 316L and 17-4PH.",
      },
      // TODO(Ronnie): Which alloys does Azoth passivate, and are any excluded?
    ],
  },
  send: {
    title: "What to Send Us for Passivation",
    blocks: [
      // DRAFT: Ronnie to review
      {
        kind: "list",
        items: [
          "A passivation callout on the drawing",
          "The passivation standard the part must meet, if your program requires one",
          "Any surfaces that must not be treated",
        ],
      },
    ],
  },
  rules: {
    title: "Passivation Design Rules",
    rules: [
      {
        id: "dimensions-and-appearance",
        title: "Dimensions and Appearance",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Passivation removes free iron from the surface and helps the protective oxide layer form. It adds no coating, so it normally needs no dimensional allowance and does not change the color of the part.",
          },
        ],
      },
      {
        id: "blind-holes-crevices-and-internal-channels",
        title: "Blind Holes, Crevices and Internal Channels",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Parts are immersed in a chemical solution and then rinsed. Tight crevices, blind holes and enclosed channels can trap solution, so give those features a way to drain and rinse.",
          },
        ],
      },
      {
        id: "process-order",
        title: "Process Order",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Passivation is normally one of the last steps, after machining, heat treatment and polishing, because those steps can leave contamination on the surface. Tell us about any work planned on the part after it leaves Azoth, since later machining or welding can undo the treatment.",
          },
        ],
      },
    ],
  },
  checklist: {
    title: "Passivation Pre-Flight Checklist",
    // DRAFT: Ronnie to review
    items: [
      "The part material is a stainless steel",
      "Passivation is called out on the drawing, with the required standard if there is one",
      "Blind holes, crevices and internal channels can drain and rinse",
      "Any work planned on the part after passivation has been shared with Azoth",
    ],
  },
};

// ===== Polishing (polishing) =====
// TODO(Ronnie): Surface finish: the finishes available (for example satin or high polish) and the Ra each one reaches.
// TODO(Ronnie): Coating thickness does not apply to polishing. How much material does polishing remove, and what allowance should customers design in?
// TODO(Ronnie): Masking: can surfaces be protected from polishing, and how should they be shown?
// TODO(Ronnie): Hang points: are parts fixtured for polishing, and does it leave marks?
// TODO(Ronnie): Size limits: the largest and smallest part Azoth can polish.
// TODO(Ronnie): Color options do not apply to polishing. Is hand polishing offered as well as mass polishing?
const polishing: GuidelineContent = {
  intro: [
    // DRAFT: Ronnie to review
    "Azoth offers in-house mass polishing and finishing, up to a high polish. This page covers how polishing affects edges, fine detail and tolerances.",
  ],
  glance: {
    title: "Polishing at a Glance",
    rows: [
      ["Process", "Mass polishing and finishing, in-house"],
      ["Finish", "High polish"],
      ["Multiple finishes", "High polish can be combined with textures and Cerakote on a single part"],
    ],
  },
  send: {
    title: "What to Send Us for Polishing",
    blocks: [
      // DRAFT: Ronnie to review
      {
        kind: "list",
        items: [
          "The finish you need on each surface, such as high polish",
          "The edges, text and textures that must stay crisp",
          "The tight-tolerance surfaces that polishing must not change",
        ],
      },
    ],
  },
  rules: {
    title: "Polishing Design Rules",
    rules: [
      {
        id: "edges-and-fine-detail",
        title: "Edges and Fine Detail",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Mass polishing finishes many parts at once in abrasive media. The media rounds sharp outside edges slightly and can soften small text and texture, so mark any edge or detail that must stay crisp.",
          },
        ],
      },
      {
        id: "recesses-holes-and-internal-channels",
        title: "Recesses, Holes and Internal Channels",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Media has to reach a surface to polish it. Deep recesses, small holes, narrow slots and internal channels polish less than open outer surfaces, and small openings can trap media.",
          },
        ],
      },
      {
        id: "material-removal-and-tolerances",
        title: "Material Removal and Tolerances",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Polishing removes a small amount of material. Flag tight-tolerance surfaces so they can be protected or the polishing step can be planned around them.",
          },
        ],
      },
      {
        id: "mixed-finishes",
        title: "Mixed Finishes on One Part",
        blocks: [
          // The first sentence is from the Azoth Showcase (parts with multiple finishes).
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Azoth can combine finishes on a single part, such as a high polish next to a textured or Cerakote surface. Mark which surfaces get which finish on your drawing.",
          },
        ],
      },
    ],
  },
  checklist: {
    title: "Polishing Pre-Flight Checklist",
    // DRAFT: Ronnie to review
    items: [
      "The required finish is called out for each surface",
      "Edges and details that must stay crisp are marked",
      "Tight-tolerance surfaces are flagged",
      "Deep recesses, small holes and internal channels are not specified as polished surfaces",
      "Surfaces with different finishes are clearly separated on the drawing",
    ],
  },
};

// ===== Quality & Inspection (quality-inspection) =====
// TODO(Ronnie): What does the certificate of inspection include (dimensions measured, sample size, material certs)?
// TODO(Ronnie): Which PPAP levels does Azoth support?
// TODO(Ronnie): Measurement capability: the accuracy of the blue light scanner, Keyence system and CMM.
const qualityInspection: GuidelineContent = {
  intro: [
    "Every part manufactured by Azoth is accompanied by a certificate of inspection verifying that your parts are produced to the agreed-upon expectations.",
    // DRAFT: Ronnie to review
    "This page explains how parts are inspected and what to put on your drawing so inspection is focused on what matters to your application.",
  ],
  glance: {
    title: "Quality and Inspection at a Glance",
    rows: [
      ["Inspection methods", "Blue light scanning, Keyence vision / visual inspection, CMM inspection, hard gaging"],
      ["Documentation", "Certificate of inspection with every part, PPAP"],
      ["Certifications", "ISO 9001 and ISO 13485"],
      ["Additive parts", "Every part is measured"],
      ["CNC machined parts", "Inspection depends on the program or customer"],
    ],
  },
  send: {
    title: "What to Send Us for Inspection",
    blocks: [
      // DRAFT: Ronnie to review
      {
        kind: "list",
        items: [
          "A drawing that identifies the critical features and their tolerances",
          "The inspection level your program requires, such as sampling or every part",
          "The documentation you need with your parts, such as PPAP",
        ],
      },
      // Fact from the FAQs page ("Do you provide inspection and certification?").
      {
        kind: "p",
        text: "Azoth provides inspection reports and material certs, and supports PPAP and IQ/OQ/PQ.",
      },
      // TODO(Ronnie): Drawing standard for inspection: does Azoth expect GD&T to a specific standard (for example ASME Y14.5)?
    ],
  },
  rules: {
    title: "Designing Parts for Inspection",
    rules: [
      {
        id: "critical-features",
        title: "Critical Features",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Identify the dimensions that control fit and function. Inspection time is best spent on those features, and calling them out avoids measuring dimensions that do not matter.",
          },
        ],
      },
      {
        id: "datums-and-measurable-features",
        title: "Datums and Measurable Features",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Choose datums on stable, accessible surfaces so the part can be held and measured the same way every time. Features that a probe, gage or camera cannot reach are hard to verify.",
          },
        ],
      },
      {
        id: "tolerances",
        title: "Tolerances",
        blocks: [
          // DRAFT: Ronnie to review
          {
            kind: "p",
            text: "Apply tight tolerances only where the function of the part needs them. A tolerance tighter than the standard for the process has to be called out on the drawing.",
          },
        ],
      },
    ],
  },
  expect: {
    title: "How Azoth Inspects Finished Parts",
    toc: "How Parts Are Inspected",
    blocks: [
      // The four methods are from client notes. The descriptions are drafted.
      // DRAFT: Ronnie to review
      {
        kind: "table",
        head: ["Method", "What It Checks"],
        rows: [
          ["Blue light scanning", "A 3D scan of the part surface, compared against the CAD model."],
          ["Keyence vision / visual inspection", "Optical measurement of edges, profiles and small features, plus visual checks of surface and finish."],
          ["CMM inspection", "Probe measurement of individual dimensions and geometric tolerances."],
          ["Hard gaging", "Dedicated gages for fast, repeatable checks of critical features in production."],
        ],
      },
      // Facts from client notes and the Quality capability page.
      {
        kind: "list",
        items: [
          "**Additive parts:** every part is measured.",
          "**CNC machined parts:** inspection depends on the program or customer, and can be sampling, every part, the first and last part of the day, or CMM.",
          "**Documentation:** every part ships with a certificate of inspection, and Azoth supports PPAP.",
          "**Certifications:** ISO 9001 and ISO 13485.",
        ],
      },
      // TODO(Ronnie): Default sampling plan for CNC programs when the customer does not specify one.
    ],
  },
  checklist: {
    title: "Quality and Inspection Pre-Flight Checklist",
    // DRAFT: Ronnie to review
    items: [
      "Critical features and their tolerances are identified on the drawing",
      "Datums are on stable, accessible surfaces",
      "Any tolerance tighter than the process standard is called out",
      "The required inspection level is stated",
      "Required documentation, such as PPAP, is listed",
    ],
  },
};

export const guidelineContent: Record<string, GuidelineContent> = {
  "file-preparation": filePreparation,
  "binder-jetting": binderJetting,
  lmm,
  "polymer-printing": polymerPrinting,
  "cnc-machining": cncMachining,
  "heat-treatment": heatTreatment,
  "powder-coating-cerakote": powderCoatingCerakote,
  plating,
  "pvd-coatings": pvdCoatings,
  passivation,
  polishing,
  "quality-inspection": qualityInspection,
};
