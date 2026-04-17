export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      description: "We deep-dive into your business, market, and competitors to understand your ideal customer profile.",
    },
    {
      num: "02",
      title: "Strategy",
      description: "We craft a custom growth plan — channels, messaging, budgets, and KPIs — aligned to your goals.",
    },
    {
      num: "03",
      title: "Execution",
      description: "We launch campaigns, build assets, and set up automations with rapid testing to find what converts.",
    },
    {
      num: "04",
      title: "Scale",
      description: "We double down on winning strategies and scale budgets profitably while continuously optimizing.",
    },
  ];

  return (
    <section id="process" className="py-28 bg-[#0C0C0B] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#252523] to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#252523] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500 mb-4 block">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            From Zero to{" "}
            <span className="orange-gradient-text">Predictable Growth</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[28px] left-16 right-16 h-px bg-gradient-to-r from-orange-500/60 via-amber-400/40 to-transparent" />

          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Number circle */}
              <div className="w-14 h-14 rounded-full bg-[#111110] border border-[#252523] flex items-center justify-center mb-6 relative z-10">
                <span className="text-sm font-bold orange-gradient-text">{step.num}</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
              <p className="text-[#888880] text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
