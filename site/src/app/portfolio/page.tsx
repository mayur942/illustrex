import Link from "next/link";
import { Section } from "@/components/layout/section";
import { getAllPortfolioItems } from "@/lib/portfolio";

export const metadata = {
  title: "Portfolio",
  description: "Selected work from Illustrex across branding, campaign, and social production.",
};

export default function PortfolioPage() {
  const items = getAllPortfolioItems();

  return (
    <Section className="py-12 sm:py-16" title="Portfolio" kicker="Selected case studies">
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Link key={item.slug} href={`/portfolio/${item.slug}`} className="card transition hover:translate-y-[-2px]">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)]">{item.category}</p>
              <p className="text-xs text-[color:var(--color-muted)]">{item.year}</p>
            </div>
            <h3 className="mt-3 text-2xl">{item.title}</h3>
            <p className="mt-3 text-sm text-[color:var(--color-muted)]">{item.summary}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
