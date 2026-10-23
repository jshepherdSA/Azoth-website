import { ThankYou, thankYouMetadata } from "@/components/thank-you";

// Conversion page for the gated downloads (see GatedDownload). The download
// starts on the page the visitor came from; `?file=` only powers the fallback
// link, and is accepted only for a PDF in /docs so the page can't be pointed
// anywhere else.
export const metadata = thankYouMetadata("Thank You for Downloading");

const DOC_PATH = /^\/docs\/[\w. -]+\.pdf$/;

export default async function DownloadThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { file } = await searchParams;
  const doc = typeof file === "string" && DOC_PATH.test(file) && !file.includes("..") ? file : null;

  return (
    <ThankYou
      crumbs={[]}
      heading="Thanks for Your Interest"
      primary={{ label: "Back to Home", href: "/" }}
      secondary={{ label: "Browse white papers", href: "/white-paper" }}
    >
      {doc ? (
        <p>
          Your download should begin automatically. If it didn&apos;t,{" "}
          <a href={doc} download className="link-az">
            download it here
          </a>
          .
        </p>
      ) : (
        <p>Thanks for downloading from Azoth.</p>
      )}
    </ThankYou>
  );
}
