const services = [
  {
    icon: "🤖",
    title: "AI Automation",
    description:
      "Automate customer service, LINE responses, inventory, scheduling — any repetitive task eating your time. Your AI works 24/7.",
  },
  {
    icon: "📊",
    title: "Business Intelligence",
    description:
      "Turn your messy data into clear decisions. Sales dashboards, competitor monitoring, financial analysis — all automated.",
  },
  {
    icon: "📱",
    title: "Content & Marketing",
    description:
      "AI-powered social media, SEO content, ad copy, and email campaigns. Consistent output without hiring a marketing team.",
  },
  {
    icon: "⚡",
    title: "Custom AI Agents",
    description:
      "Purpose-built AI agents for your specific business. Not generic chatbots — intelligent systems that understand your workflow.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-cyan">
            What We Build
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            AI that works for{" "}
            <span className="gradient-text">your business</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Not another chatbot. Not a strategy deck. Working systems that save
            you time and make you money.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="gradient-border p-8 transition-transform hover:-translate-y-1"
            >
              <span className="text-3xl">{service.icon}</span>
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
