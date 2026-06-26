// Navigation model extracted from the Bricks header/footer templates.

export type NavChild = { label: string; href: string };
export type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Capabilities",
    href: "/capabilities",
    children: [
      { label: "Binder Jetting", href: "/capabilities/binder-jetting" },
      { label: "Polymer Printing", href: "/capabilities/polymer-printing" },
      { label: "Finishing", href: "/capabilities/post-processing" },
      { label: "Quality", href: "/capabilities/quality" },
      { label: "LMM", href: "/capabilities/lithography-metal-manufacturing" },
    ],
  },
  { label: "Azoth Showcase", href: "/azoth-showcase" },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Automotive", href: "/industries/automotive" },
      { label: "Medical", href: "/industries/medical" },
      { label: "Defense", href: "/industries/defense-industry" },
      { label: "Consumer Electronics", href: "/industries/consumer-electronics" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Materials", href: "/materials" },
      { label: "TOMO®", href: "/tomo" },
      { label: "FAQs", href: "/faqs" },
      { label: "Blogs", href: "/azoth-blog" },
      { label: "Design Guidelines", href: "/design-guidelines" },
      { label: "White Papers", href: "/white-paper" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "News & Updates", href: "/news" },
      { label: "Careers", href: "/about/careers" },
    ],
  },
  {
    label: "Contact Us",
    children: [
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/about/careers" },
      { label: "Request a Quote", href: "/quote" },
    ],
  },
];

export const contactInfo = {
  phone: "734-669-3797",
  phoneHref: "tel:+17346693797",
  email: "info@azoth3d.com",
  emailHref: "mailto:info@azoth3d.com",
  linkedin: "https://www.linkedin.com/company/azoth-3d",
  address: ["1099 Highland Drive", "Ann Arbor, Michigan 48108"],
  mapHref: "https://goo.gl/maps/PwtEoLbtqA3s6Tyw6",
};
