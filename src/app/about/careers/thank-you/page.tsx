import { ThankYou, thankYouMetadata } from "@/components/thank-you";

// Conversion page for the careers application (see JotformEmbed `thankYouHref`).
export const metadata = thankYouMetadata("Thank You for Applying");

export default function CareersThankYouPage() {
  return (
    <ThankYou
      crumbs={[
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/about/careers" },
      ]}
      heading="We Received Your Application"
      primary={{ label: "Back to Careers", href: "/about/careers" }}
      secondary={{ label: "Learn more about Azoth", href: "/about" }}
    >
      <p>Thanks for your interest in joining Azoth. Our team will review your application.</p>
    </ThankYou>
  );
}
