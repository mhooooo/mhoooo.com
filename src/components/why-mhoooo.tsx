const differentiators = [
  {
    title: "Thai-First",
    description:
      "Founded in Bangkok. We understand Thai business culture, LINE commerce, and how SMEs actually operate — because we are one.",
  },
  {
    title: "Founder-Led",
    description:
      "You work directly with the founder, not a junior consultant. One point of contact. Full accountability.",
  },
  {
    title: "฿25K/month",
    description:
      "Less than hiring one junior developer. You get an entire AI department — automation, content, analytics, agents.",
  },
  {
    title: "Results or We Fix It",
    description:
      "If it doesn't save you time or make you money, we haven't done our job. We iterate until it works.",
  },
];

export function WhyMhoooo() {
  return (
    <section id="why-mhoooo" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-cyan">
            Why mhoooo
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Not a consultancy.{" "}
            <span className="gradient-text">A partner.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            We succeed only when you succeed. That&apos;s not a tagline — it&apos;s how
            we structure every engagement.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item.title} className="flex gap-4 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20">
                <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison callout */}
        <div className="mt-16 gradient-border p-8 text-center glow">
          <p className="text-lg text-zinc-300">
            Traditional consultancy: <span className="line-through text-zinc-600">฿200K+/month</span>
          </p>
          <p className="text-lg text-zinc-300">
            In-house dev team: <span className="line-through text-zinc-600">฿150K+/month</span>
          </p>
          <p className="mt-4 text-2xl font-bold">
            mhoooo: <span className="gradient-text">฿25,000/month</span>
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            One partner. Full AI department. Real results.
          </p>
        </div>
      </div>
    </section>
  );
}
