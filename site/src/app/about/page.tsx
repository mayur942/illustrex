import { Section } from "@/components/layout/section";

export const metadata = {
  title: "About",
  description: "Illustrex is a lean creative production studio.",
};

export default function AboutPage() {
  return (
    <Section className="py-12 sm:py-16" title="About Illustrex" kicker="Studio profile">
      <div className="card max-w-3xl">
        <p className="leading-7 text-[color:var(--color-muted)]">
          Illustrex is a creative production studio focused on practical, high-quality visual communication.
          We partner with founders and marketing teams who need reliable creative output without heavy overhead.
        </p>
        <p className="mt-4 leading-7 text-[color:var(--color-muted)]">
          Our approach balances creative clarity with production discipline: clear briefs, transparent progress,
          and assets built for real campaign use.
        </p>
      </div>
    </Section>
  );
}
