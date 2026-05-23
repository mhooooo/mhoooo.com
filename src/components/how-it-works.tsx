const steps = [
  {
    number: "01",
    title: "Pick one workflow",
    description:
      "Bring one repetitive customer or operations task. We map the input, decision, approval boundary, and output.",
  },
  {
    number: "02",
    title: "Build the demo",
    description:
      "We create a working prototype and record the screen so you can see the workflow before paying for a full install.",
  },
  {
    number: "03",
    title: "Install and maintain",
    description:
      "If the demo proves useful, we connect real accounts, add guardrails, train the operator, and keep the system running.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="soft-grid bg-[#dfe9d8] py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <p className="eyebrow text-work-green">Method</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              A boring path from idea to useful system.
            </h2>
          </div>
          <p className="text-lg leading-8 text-ink/68">
            The demo sprint protects the customer from buying theory and
            protects us from building software nobody uses.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative rounded-lg bg-porcelain p-6">
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute left-full top-10 hidden h-px w-4 bg-ink/25 md:block" />
              )}
              <div className="font-mono text-sm font-black text-rust">
                {step.number}
              </div>
              <h3 className="mt-8 text-2xl font-black">{step.title}</h3>
              <p className="mt-3 leading-7 text-ink/66">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
