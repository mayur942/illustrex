export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-line)] py-8">
      <div className="container-shell flex flex-col gap-2 text-sm text-[color:var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Illustrex Creative Production Pvt Ltd</p>
        <p>Portfolio holding site • Built with Next.js</p>
      </div>
    </footer>
  );
}
