// The one canonical origin for the site.
//
// The live site answers on www: the bare domain (azoth3d.com) redirects to it.
// Every absolute URL the site publishes has to use this value, so search
// engines are never handed an address that redirects: the sitemap, robots.txt,
// canonical tags and structured data all read it from here.
export const SITE_URL = "https://www.azoth3d.com";
