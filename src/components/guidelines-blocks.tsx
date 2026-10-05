import Image from "next/image";
import Link from "next/link";
import type { GuidelineBlock } from "@/lib/design-guidelines";

// Renders the two bits of inline markup the guidelines data uses:
// **bold** and [label](/href).
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="text-ink">
              {part.slice(2, -2)}
            </strong>
          );
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          return (
            <Link key={i} href={link[2]} className="link-az">
              {link[1]}
            </Link>
          );
        }
        return part;
      })}
    </>
  );
}

function Check() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-3 w-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
      </svg>
    </span>
  );
}

// Two-column "at a glance" spec table: label on the left, value on the right.
export function SpecTable({ rows }: { rows: [string, string][] }) {
  return (
    <div className="mt-6 max-w-3xl overflow-hidden rounded-xl border border-hairline">
      <table className="w-full text-left text-sm">
        <tbody className="divide-y divide-hairline">
          {rows.map(([label, value]) => (
            <tr key={label}>
              <th scope="row" className="w-2/5 bg-surface px-4 py-3 align-top font-semibold text-ink-soft">
                {label}
              </th>
              <td className="px-4 py-3 align-top font-bold tabular-nums text-ink">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 max-w-3xl space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 leading-relaxed text-ink-soft">
          <Check />
          <span>
            <RichText text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Blocks({ blocks }: { blocks: GuidelineBlock[] }) {
  return (
    <div className="mt-5 space-y-5 leading-relaxed text-muted-soft">
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "p":
            return (
              <p key={i} className="max-w-3xl">
                <RichText text={block.text} />
              </p>
            );
          case "list":
            return (
              <ul key={i} className="max-w-3xl space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>
                      <RichText text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "table":
            return (
              <div key={i} className="max-w-3xl overflow-x-auto rounded-xl border border-hairline">
                <table className="w-full text-left text-sm">
                  <thead className="bg-surface text-ink">
                    <tr>
                      {block.head.map((cell) => (
                        <th key={cell} scope="col" className="px-4 py-3 font-bold">
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    {block.rows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, j) =>
                          j === 0 ? (
                            <th key={j} scope="row" className="px-4 py-3 align-top font-semibold text-ink-soft">
                              {cell}
                            </th>
                          ) : (
                            <td
                              key={j}
                              className={`px-4 py-3 align-top ${
                                block.numeric ? "whitespace-nowrap font-bold tabular-nums text-brand" : ""
                              }`}
                            >
                              {cell}
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "image":
            // The file-type graphic is the one exception to "no grey boxes": its
            // icons are white, so they only read on the grey panel.
            return block.onSurface ? (
              <div key={i} className="max-w-3xl rounded-2xl bg-surface px-6 py-8">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={block.width}
                  height={block.height}
                  className={`mx-auto h-auto w-full ${block.maxW ?? "max-w-2xl"}`}
                />
              </div>
            ) : (
              <Image
                key={i}
                src={block.src}
                alt={block.alt}
                width={block.width}
                height={block.height}
                className={`h-auto w-full ${block.maxW ?? "max-w-2xl"}`}
                sizes="(max-width: 768px) 100vw, 672px"
              />
            );
        }
      })}
    </div>
  );
}
