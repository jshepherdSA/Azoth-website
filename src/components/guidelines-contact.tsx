import Link from "next/link";
import { CircleArrow } from "@/components/circle-arrow";

// The "Still Have Questions?" contact block that closes every guidelines page.
export function GuidelinesContact({ as: Heading = "h3" }: { as?: "h2" | "h3" }) {
  return (
    <div className="mt-12 rounded-2xl bg-surface p-8 text-center sm:p-10">
      <Heading className="text-2xl font-extrabold text-ink">Still Have Questions?</Heading>
      <p className="mx-auto mt-2 max-w-xl text-muted-soft">
        Contact us today and our Applications Engineering team will get back to you as soon as
        possible.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link
          href="/quote"
          className="inline-flex items-center gap-2.5 rounded-md bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-hover"
        >
          Request A Quote
          <CircleArrow tone="onRed" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-md border border-hairline bg-white px-7 py-3.5 font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
