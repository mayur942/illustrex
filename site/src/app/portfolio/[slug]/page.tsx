import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { Section } from "@/components/layout/section";
import { getAllPortfolioItems, getPortfolioBySlug } from "@/lib/portfolio";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPortfolioItems().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);

  if (!item) {
    return { title: "Project not found" };
  }

  return {
    title: item.title,
    description: item.summary,
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);

  if (!item) {
    notFound();
  }

  const { content } = await compileMDX({
    source: item.content,
  });

  return (
    <Section className="py-12 sm:py-16">
      <article className="card">
        <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)]">{item.category}</p>
        <h1 className="mt-2 text-4xl">{item.title}</h1>
        <p className="mt-3 text-[color:var(--color-muted)]">{item.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.services.map((service) => (
            <span key={service} className="rounded-full border border-[color:var(--color-line)] px-3 py-1 text-xs text-[color:var(--color-muted)]">
              {service}
            </span>
          ))}
        </div>

        <div className="prose-case mt-8">{content}</div>
      </article>
    </Section>
  );
}
