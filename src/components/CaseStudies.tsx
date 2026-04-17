export default function CaseStudies() {
  const cases = [
    {
      tag: "Performance Marketing",
      client: "D2C E-commerce Brand",
      metric: "4.2x",
      label: "Return on Ad Spend",
      description: "Restructured Meta Ads account, implemented creative testing framework, and scaled daily spend 5x while improving ROAS.",
      accent: "orange",
    },
    {
      tag: "SEO + Content",
      client: "B2B SaaS Startup",
      metric: "+350%",
      label: "Organic Traffic",
      description: "Built a full SEO strategy — on-page fixes, link building, and technical audit — that tripled organic leads in 6 months.",
      accent: "amber",
    },
    {
      tag: "Lead Generation",
      client: "Real Estate Agency",
      metric: "500+",
      label: "Qualified Leads / Month",
      description: "Built end-to-end Facebook & Google funnel with WhatsApp automation that delivers qualified leads daily on autopilot.",
      accent: "orange",
    },
  ];

  return (
    <section id="cases" className="py-16 md:py-28 bg-[#080807] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#252523] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500 mb-4 block">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Real Campaigns,{" "}
              <span className="orange-gradient-text">Real Results</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <div
              key={i}
              className="group p-7 rounded-2xl bg-[#111110] border border-[#252523] hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(249,115,22,0.08)] flex flex-col"
            >
              {/* Tag */}
              <span className="inline-block text-xs font-semibold text-orange-400 border border-orange-500/20 bg-orange-500/5 px-3 py-1 rounded-full mb-6">
                {item.tag}
              </span>

              {/* Client */}
              <p className="text-[#888880] text-xs font-medium mb-3 uppercase tracking-wider">{item.client}</p>

              {/* Metric */}
              <div className="text-5xl font-extrabold orange-gradient-text mb-1">{item.metric}</div>
              <div className="text-sm text-[#888880] font-medium uppercase tracking-wider mb-6">{item.label}</div>

              <p className="text-[#aaa] text-sm leading-relaxed mb-6 flex-1">{item.description}</p>

              {/* SVG sparkline */}
              <div className="w-full h-20 rounded-xl bg-[#0C0C0B] border border-[#252523] overflow-hidden relative group-hover:border-orange-500/20 transition-colors">
                <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id={`grad-${i}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#F97316" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,50 C30,40 60,15 100,20 S160,10 200,5"
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0,50 C30,40 60,15 100,20 S160,10 200,5 L200,60 L0,60 Z"
                    fill={`url(#grad-${i})`}
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
