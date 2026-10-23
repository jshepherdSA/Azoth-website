import { ThankYou, thankYouMetadata } from "@/components/thank-you";

// Conversion page for the quote form (see RfqEmbed `thankYouHref`).
export const metadata = thankYouMetadata("Thank You for Your Quote Request");

export default function QuoteThankYouPage() {
  return (
    <ThankYou
      crumbs={[{ label: "Request A Quote", href: "/quote" }]}
      heading="We Received Your Quote Request"
      primary={{ label: "Back to Home", href: "/" }}
      secondary={{ label: "Explore our capabilities", href: "/capabilities" }}
    >
      <p>Thanks for your request. Our team will review your files and follow up with a quote.</p>
    </ThankYou>
  );
}
