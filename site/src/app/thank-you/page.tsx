import Link from "next/link";
import { Section } from "@/components/layout/section";

export const metadata = {
  title: "Thank You",
  description: "Inquiry submitted.",
};

export default function ThankYouPage() {
  return (
    <Section className="py-16 sm:py-24">
      <div className="card max-w-xl">
        <h1 className="text-4xl">Thanks for reaching out.</h1>
        <p className="mt-3 text-[color:var(--color-muted)]">
          Your inquiry has been received. We will get back to you shortly.
        </p>
        <div className="mt-6">
          <Link href="/portfolio" className="button-secondary">
            Back to portfolio
          </Link>
        </div>
      </div>
    </Section>
  );
}
