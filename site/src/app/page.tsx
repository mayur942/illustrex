import Link from "next/link";

export default function Home() {
  return (
    <div className="home-frame">
      <div className="home-grain" aria-hidden="true" />

      <header className="home-nav">
        <nav className="home-nav-inner">
          <Link href="/portfolio" className="home-nav-link">
            SHARE
          </Link>
          <Link href="/portfolio" className="home-nav-link">
            WORK
          </Link>
          <span className="home-nav-mark" aria-hidden="true">
            x
          </span>
          <Link href="/contact" className="home-quote-btn">
            GET A QUOTE
          </Link>
          <Link href="/contact" className="home-nav-link">
            CONTACT
          </Link>
        </nav>
      </header>

      <main className="home-hero">
        <div className="home-logo-wrap">
          <h1 className="home-logo-title">
            ILLUSTRE
            <span className="home-logo-x">X</span>
          </h1>
          <p className="home-logo-sub">CREATIVE PRODUCTION</p>
        </div>

        <section className="home-copy" aria-label="hero copy">
          <h2 className="home-headline">AI ENABLED CREATIVE PRODUCTION</h2>

          <div className="home-lines">
            <p>STUDIO AI ASSISTED HUMAN CRAFTED</p>
            <p>SCALABLE AVAILABLE AROUND THE</p>
            <p>CLOCK BEST PRICES BEST TURNAROUNDS</p>
          </div>
        </section>

        <div className="home-arrow" aria-hidden="true">
          ▼
        </div>
      </main>
    </div>
  );
}
