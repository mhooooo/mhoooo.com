import Image from "next/image";

export function About() {
  return (
    <section id="about" className="bg-porcelain py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-line bg-ink">
            <Image
              src="/founder-avatar.jpg"
              alt="Tanyawit Moo Nilnavarat"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="eyebrow text-rust">Founder-led</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              Tanyawit &ldquo;Moo&rdquo; Nilnavarat
            </h2>
            <p className="mt-2 text-lg font-bold text-harbor">มู ทำให้</p>

            <div className="mt-8 space-y-4 text-lg leading-8 text-ink/68">
              <p>
                Bangkok-born, US-educated. BBA from University of Washington
                with a minor in Data Analysis. Spent a decade in the US before
                coming home to build.
              </p>
              <p>
                I believe one person plus AI can deliver what used to take a
                team of ten. I&apos;m proving it with mhoooo and then building
                the same capability for your business.
              </p>
              <p>
                I don&apos;t sell advice. I don&apos;t hand you a PDF and
                disappear. I build systems that work, I maintain them, and I
                pick up the phone when something breaks.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["AI systems", "Thai SMEs", "Automation", "Demo-first"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-ink/12 px-3 py-1.5 text-sm font-bold text-ink/58"
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
