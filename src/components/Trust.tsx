export default function Trust() {
  const stats = [
    { value: "₹10Cr+", label: "Revenue Generated" },
    { value: "500+",   label: "Leads Delivered" },
    { value: "4x",     label: "Average ROAS" },
    { value: "98%",    label: "Client Retention" },
  ];

  return (
    <section className="bg-[#0C0C0B] border-y border-[#252523]">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        <p className="text-center text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#888880] mb-8 md:mb-10">
          Trusted by fast-growing brands across India
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-8">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-3xl md:text-5xl font-extrabold orange-gradient-text mb-2">
                {s.value}
              </span>
              <span className="text-[#888880] text-sm font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
