export function About() {
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[400px] rounded-full bg-accent-cyan/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Photo placeholder */}
          <div className="gradient-border flex aspect-square items-center justify-center md:aspect-[4/5]">
            <div className="flex flex-col items-center gap-4 text-zinc-600">
              <svg
                className="h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0"
                />
              </svg>
              <span className="text-sm">Photo coming soon</span>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent-cyan">
              The Founder
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Tanyawit &ldquo;Moo&rdquo; Nilnavarat
            </h2>
            <p className="mt-2 text-lg text-zinc-500">มู ทำให้</p>

            <div className="mt-8 space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Bangkok-born, US-educated. BBA from University of Washington
                with a minor in Data Analysis. Spent a decade in the US before
                coming home to build.
              </p>
              <p>
                I believe one person plus AI can deliver what used to take a
                team of ten. I&apos;m proving it with mhoooo — and then building
                the same capability for your business.
              </p>
              <p>
                I don&apos;t sell advice. I don&apos;t hand you a PDF and
                disappear. I build systems that work, I maintain them, and I
                pick up the phone when something breaks.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["AI Systems", "Business Strategy", "Thai Market", "Full-Stack"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-4 py-1.5 text-sm text-zinc-500"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
