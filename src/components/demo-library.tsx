const demos = [
  {
    status: "Recording next",
    title: "FB/IG lead responder",
    scenario: "A local business gets comments and DMs from new customers.",
    system:
      "The agent qualifies the lead, drafts the reply, and prepares owner handoff without posting free-form messages automatically.",
    evidence: "Fastwork sales demo",
  },
  {
    status: "Active proof",
    title: "GranMonte import operating room",
    scenario: "Thai wine import work needs account follow-up, compliance state, and launch blockers in one place.",
    system:
      "The system turns records and meetings into validation events, forecasts, follow-ups, and next actions.",
    evidence: "Up proof case",
  },
  {
    status: "Build proof",
    title: "Airship OS mission board",
    scenario: "A company needs a business operating system that shows missions, blockers, approvals, and real work state.",
    system:
      "The product turns operations into a playable control surface where every mission is tied to customer evidence.",
    evidence: "Product direction",
  },
  {
    status: "Internal proof",
    title: "JARVIS knowledge workflow",
    scenario: "Moo saves a reel, link, or note and wants it turned into reusable project intelligence.",
    system:
      "The system captures the source, extracts the mechanism, connects it to active work, and creates a seed or task.",
    evidence: "Second Brain runtime",
  },
];

export function DemoLibrary() {
  return (
    <section id="demos" className="bg-ink py-20 text-porcelain md:py-28">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow text-[#f0bf7a]">Demo library</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              Show the work. Then sell the install.
            </h2>
            <p className="mt-6 text-lg leading-8 text-porcelain/68">
              Every service offer needs a screen recording that shows the raw
              input, the system action, the human approval boundary, and the
              useful output. This is the antidote to generic AI marketing.
            </p>
          </div>

          <div className="grid gap-3">
            {demos.map((demo) => (
              <article
                key={demo.title}
                className="rounded-lg border border-porcelain/12 bg-porcelain/[0.045] p-5"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-black">{demo.title}</h3>
                  <span className="w-fit rounded-sm border border-porcelain/16 px-2.5 py-1 text-xs font-bold text-[#f0bf7a]">
                    {demo.status}
                  </span>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div>
                    <p className="text-xs font-bold text-porcelain/44">
                      Scenario
                    </p>
                    <p className="mt-2 text-sm leading-6 text-porcelain/76">
                      {demo.scenario}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-porcelain/44">
                      System
                    </p>
                    <p className="mt-2 text-sm leading-6 text-porcelain/76">
                      {demo.system}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-porcelain/44">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-6 text-porcelain/76">
                      {demo.evidence}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
