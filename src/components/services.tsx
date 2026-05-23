const services = [
  {
    label: "01",
    title: "Lead response systems",
    description:
      "Capture Facebook, Instagram, LINE, email, or form leads, ask the right qualifying questions, and prepare a clean handoff for the owner or sales team.",
    proof: "First Fastwork demo target",
  },
  {
    label: "02",
    title: "Operations copilots",
    description:
      "Turn messy chats, spreadsheets, files, and emails into tasks, status, follow-ups, and decisions that the business can actually use.",
    proof: "GranMonte import OS proof case",
  },
  {
    label: "03",
    title: "Business dashboards",
    description:
      "Show the owner what is blocked, what changed, what needs approval, and what the next useful action is. No decorative vanity panels.",
    proof: "Airship OS direction",
  },
  {
    label: "04",
    title: "Demo and content machines",
    description:
      "Record product demos, convert real workflows into explainers, and publish evidence that makes the service easier to sell.",
    proof: "mhoooo.com proof engine",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-porcelain py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="eyebrow text-rust">What we build</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              Useful systems before beautiful dashboards.
            </h2>
          </div>
          <p className="text-lg leading-8 text-ink/66">
            The first question is not &ldquo;what can AI do?&rdquo; It is
            &ldquo;which customer workflow is wasting time or losing money?&rdquo;
            Then we build that one
            workflow, record it, and only install it if the demo is convincing.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-line bg-paper p-6 shadow-sm transition-colors hover:border-ink/30"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-sm font-bold text-rust">
                  {service.label}
                </span>
                <span className="rounded-sm border border-ink/10 px-2 py-1 text-xs font-bold text-ink/55">
                  {service.proof}
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-black">{service.title}</h3>
              <p className="mt-3 leading-7 text-ink/66">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
