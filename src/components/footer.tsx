export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-porcelain py-10">
      <div className="section-shell">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="text-lg font-black text-ink">mhoooo</span>
            <p className="mt-1 text-sm font-medium text-ink/50">
              AI products with Second Brain inside.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#services"
              className="text-sm font-medium text-ink/58 transition-colors hover:text-ink"
            >
              Products
            </a>
            <a
              href="#showcase"
              className="text-sm font-medium text-ink/58 transition-colors hover:text-ink"
            >
              Showcase
            </a>
            <a
              href="#learn"
              className="text-sm font-medium text-ink/58 transition-colors hover:text-ink"
            >
              Learn
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-ink/58 transition-colors hover:text-ink"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-ink/58 transition-colors hover:text-ink"
            >
              Contact
            </a>
          </div>

          <p className="text-sm font-medium text-ink/42">
            &copy; {new Date().getFullYear()} mhoooo. Bangkok, Thailand.
          </p>
        </div>
      </div>
    </footer>
  );
}
