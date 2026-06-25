// Renders sanitized long-form policy HTML extracted from the WordPress export.
// Content is first-party (from our own export), styled via the `.legal-content`
// class in globals.css.
export function LegalContent({ html }: { html: string }) {
  return <div className="legal-content" dangerouslySetInnerHTML={{ __html: html }} />;
}
