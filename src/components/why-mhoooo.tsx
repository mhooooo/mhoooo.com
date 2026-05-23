const differentiators = [
  {
    title: "Demo-first",
    description:
      "We record a working flow before asking you to commit to a larger install.",
  },
  {
    title: "Approval-safe",
    description:
      "Customer-facing messages and risky actions stay behind explicit human approval.",
  },
  {
    title: "Maintained",
    description:
      "The work does not end at handoff. Logs, fixes, and iteration are part of the system.",
  },
  {
    title: "Built from real work",
    description:
      "GranMonte, Airship OS, and JARVIS Hub are operating proof sources, not pitch-deck examples.",
  },
];

export function WhyMhoooo() {
  return (
    <section id="why-mhoooo" className="bg-paper py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="eyebrow text-harbor">Proof rules</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              What makes this different from AI consulting noise.
            </h2>
          </div>
          <p className="text-lg leading-8 text-ink/66">
            The output has to survive contact with a customer, a staff member,
            and a busy owner. Pretty is useful only after the workflow works.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item.title} className="flex gap-4 rounded-lg border border-line bg-porcelain p-6">
              <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-rust" />
              <div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-2 leading-7 text-ink/66">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-ink p-6 text-porcelain md:p-8">
          <p className="max-w-3xl text-2xl font-black leading-snug">
            The public site should become a living demo shelf: every Fastwork
            post, product offer, and case study points back to a real recording.
          </p>
          <p className="mt-5 max-w-3xl leading-7 text-porcelain/68">
            That is how mhoooo.com stops looking like generic AI web design and
            starts acting like proof infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}
