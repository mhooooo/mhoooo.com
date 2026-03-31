export function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-cyan">
            Let&apos;s Talk
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Ready to add AI to{" "}
            <span className="gradient-text">your business</span>?
          </h2>
          <p className="mt-4 text-zinc-400">
            Start with a free consultation. We&apos;ll audit your business,
            identify quick wins, and show you exactly what AI can do — no
            commitment.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-8 md:grid-cols-2">
          {/* Email */}
          <a
            href="mailto:hello@mhoooo.com"
            className="gradient-border flex flex-col items-center gap-4 p-8 transition-transform hover:-translate-y-1"
          >
            <svg
              className="h-8 w-8 text-accent-purple"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <div className="text-center">
              <p className="font-semibold">Email Us</p>
              <p className="mt-1 text-sm text-accent-cyan">hello@mhoooo.com</p>
            </div>
          </a>

          {/* LINE */}
          <a
            href="#"
            className="gradient-border flex flex-col items-center gap-4 p-8 transition-transform hover:-translate-y-1"
          >
            <svg
              className="h-8 w-8 text-accent-cyan"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            <div className="text-center">
              <p className="font-semibold">LINE</p>
              <p className="mt-1 text-sm text-zinc-500">Coming soon</p>
            </div>
          </a>
        </div>

        {/* Bottom CTA */}
        <p className="mt-12 text-center text-sm text-zinc-600">
          Free consultation &middot; No commitment &middot; We&apos;ll tell you
          honestly if AI can help
        </p>
      </div>
    </section>
  );
}
