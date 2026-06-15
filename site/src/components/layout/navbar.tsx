import Link from "next/link";

const navItems = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-[color:var(--color-line)] bg-[color:var(--color-cream)]/90 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg">
          ILLUSTREX
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[color:var(--color-muted)] transition hover:text-[color:var(--color-ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
