import { ThankYou, thankYouMetadata } from "@/components/thank-you";

// Conversion page for the contact form (see JotformEmbed `thankYouHref`).
export const metadata = thankYouMetadata("Thank You for Contacting Us");

export default function ContactThankYouPage() {
  return (
    <ThankYou
      crumbs={[{ label: "Contact Us", href: "/contact" }]}
      heading="We Received Your Message"
      primary={{ label: "Back to Home", href: "/" }}
      secondary={{ label: "Explore our capabilities", href: "/capabilities" }}
    >
      <p>Thanks for contacting Azoth. A member of our team will be in touch.</p>
    </ThankYou>
  );
}
