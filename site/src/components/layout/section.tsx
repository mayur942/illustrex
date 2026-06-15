type SectionProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  kicker?: string;
};

export function Section({ children, className = "", title, kicker }: SectionProps) {
  return (
    <section className={`container-shell ${className}`}>
      {(kicker || title) && (
        <div className="mb-6">
          {kicker ? (
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              {kicker}
            </p>
          ) : null}
          {title ? <h2 className="text-3xl">{title}</h2> : null}
        </div>
      )}
      {children}
    </section>
  );
}
