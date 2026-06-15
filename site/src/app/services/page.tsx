import Link from "next/link";
import { Section } from "@/components/layout/section";

const services = [
  {
    title: "Brand Identity Systems",
    detail: "Naming support, visual direction, logo systems, and brand guides for digital-first businesses.",
  },
  {
    title: "Campaign Creative",
    detail: "Modular campaign assets for social, paid media, and launch communication across channels.",
  },
  {
    title: "Content Production",
    detail: "High-volume visual production with repeatable templates and quality controls.",
  },
];

export const metadata = {
  title: "Services",
  description: "Creative services offered by Illustrex.",
};

export default function ServicesPage() {
  return (
    <Section className="py-12 sm:py-16" title="Services" kicker="What we do">
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="card">
            <h3 className="text-2xl">{service.title}</h3>
            <p className="mt-3 text-sm text-[color:var(--color-muted)]">{service.detail}</p>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <Link className="button-primary" href="/contact">
          Discuss your requirement
        </Link>
      </div>
    </Section>
  );
}
