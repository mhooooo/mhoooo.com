export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="text-lg font-bold gradient-text">mhoooo</span>
            <p className="mt-1 text-sm text-zinc-600">Your AI department.</p>
          </div>

          <div className="flex gap-8">
            <a
              href="#services"
              className="text-sm text-zinc-500 transition-colors hover:text-white"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm text-zinc-500 transition-colors hover:text-white"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm text-zinc-500 transition-colors hover:text-white"
            >
              Contact
            </a>
          </div>

          <p className="text-sm text-zinc-700">
            &copy; {new Date().getFullYear()} mhoooo. Bangkok, Thailand.
          </p>
        </div>
      </div>
    </footer>
  );
}
