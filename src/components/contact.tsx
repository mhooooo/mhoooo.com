export function Contact() {
  return (
    <section id="contact" className="bg-ink py-20 text-porcelain md:py-28">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="eyebrow text-[#f0bf7a]">Start small</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              Send one workflow you want to stop doing by hand.
            </h2>
            <p className="mt-5 text-lg leading-8 text-porcelain/70">
              A good first message is simple: what comes in, what you do with
              it, what output you need, and where a human must approve.
            </p>
          </div>

          <div className="rounded-lg border border-porcelain/12 bg-porcelain/[0.045] p-6">
            <div className="grid gap-4">
              <div className="rounded-md bg-porcelain p-4 text-ink">
                <p className="text-sm font-black">Example</p>
                <p className="mt-2 leading-7 text-ink/68">
                  &ldquo;When someone DMs my shop on Instagram, ask what they
                  want, collect phone and budget, then draft the reply for my
                  staff.&rdquo;
                </p>
              </div>
              <a
                href="mailto:hello@mhoooo.com?subject=One workflow for mhoooo&body=What comes in:%0AWhat we do now:%0AWhat output we need:%0AWhat needs human approval:%0A"
                className="rounded-md bg-porcelain px-6 py-3 text-center text-sm font-black text-ink transition-colors hover:bg-[#f0bf7a]"
              >
                Email the workflow
              </a>
              <p className="text-sm leading-6 text-porcelain/55">
                Fastwork listing and demo links will point here once the first
                FB/IG responder recording is ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
