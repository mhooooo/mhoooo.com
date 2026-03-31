export function Hero() {
  return (
    <section className="relative grid-bg overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-accent-purple/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-20 left-1/3 h-[400px] w-[600px] rounded-full bg-accent-cyan/8 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Now accepting clients in Thailand
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Your{" "}
          <span className="gradient-text">AI Department</span>
          <span className="text-zinc-500">.</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl">
          We build, deploy, and maintain AI systems that actually run your
          business. One partner. Full tech team. A fraction of the cost.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90"
          >
            Book a Free Consultation
          </a>
          <a
            href="#how-it-works"
            className="rounded-full border border-white/10 px-8 py-3.5 text-base text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
          >
            See How It Works
          </a>
        </div>

        {/* Social proof hint */}
        <p className="mt-16 text-sm text-zinc-600">
          Trusted by Thai entrepreneurs &middot; Starting at ฿25,000/month
        </p>
      </div>
    </section>
  );
}
