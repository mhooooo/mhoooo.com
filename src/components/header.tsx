"use client";

import { useState } from "react";

const navLinks = [
  { href: "#services", label: "Products" },
  { href: "#demos", label: "Demos" },
  { href: "#how-it-works", label: "Method" },
  { href: "#why-mhoooo", label: "Possibilities" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-ink/10 bg-porcelain/88 backdrop-blur-xl">
      <nav className="section-shell flex items-center justify-between py-4">
        <a href="#" className="flex flex-col leading-none text-ink">
          <span className="text-xl font-black">mhoooo</span>
          <span className="mt-1 text-[0.68rem] font-semibold text-rust">
            Second Brain systems
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/65 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-ink px-5 py-2 text-sm font-bold text-porcelain transition-colors hover:bg-rust"
          >
            Start one workflow
          </a>
        </div>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-ink transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-ink transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-ink transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-ink/10 bg-porcelain md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-medium text-ink/70 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-md bg-ink px-5 py-2.5 text-center text-sm font-bold text-porcelain"
            >
              Start one workflow
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
