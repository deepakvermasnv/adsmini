const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder",
    company: "GrowFast D2C",
    text: "AdsMini completely transformed our paid ads. Our Meta ROAS went from 1.8x to 4.2x in just 60 days. They don't just run ads — they build systems.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "CMO",
    company: "TechSaas India",
    text: "We were struggling with organic growth for over a year. AdsMini's SEO + content strategy tripled our traffic in 6 months. Highly recommend their team.",
    rating: 5,
  },
  {
    name: "Vikram Patel",
    role: "Director",
    company: "PropEdge Realty",
    text: "500+ qualified leads per month from Facebook and Google combined. The WhatsApp retargeting automation they built is a game changer for our business.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-28 bg-[#080807] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#252523] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500 mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Clients Who{" "}
            <span className="orange-gradient-text">Scaled With Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl bg-[#111110] border border-[#252523] hover:border-orange-500/25 transition-all duration-300 flex flex-col gap-6"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#ccc] text-sm leading-relaxed flex-1">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#252523]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-[#888880] text-xs">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
