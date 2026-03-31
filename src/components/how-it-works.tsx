const steps = [
  {
    number: "01",
    title: "Audit",
    description:
      "We map your business processes, find the bottlenecks, and identify where AI creates the most impact. Free, no commitment.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We design and deploy custom AI systems tailored to your business. Not off-the-shelf — built for how you actually work.",
  },
  {
    number: "03",
    title: "Maintain",
    description:
      "We don't disappear after delivery. Ongoing monitoring, optimization, and support. Your AI gets smarter over time.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[500px] w-[400px] rounded-full bg-accent-purple/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-cyan">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            From zero to AI-powered in{" "}
            <span className="gradient-text">weeks, not months</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute top-8 left-full hidden h-px w-full bg-gradient-to-r from-accent-purple/30 to-transparent md:block" />
              )}
              <div className="gradient-text text-5xl font-bold">
                {step.number}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-zinc-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
