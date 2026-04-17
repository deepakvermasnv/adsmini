import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-[#080807] pt-[84px] md:pt-[72px] pb-12 md:pb-0">

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#F5F4EF 1px, transparent 1px), linear-gradient(90deg, #F5F4EF 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial orange glow — background */}
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-orange-500/5 blur-[80px] md:blur-[120px]" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="text-center lg:text-left animate-fade-up">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 border border-orange-500/30 bg-orange-500/5 text-orange-400 text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-full mb-6 md:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              Performance Marketing Agency
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] md:leading-[1.1] text-white mb-6">
              Turn Ad Spend Into<br />
              <span className="orange-gradient-text">Predictable Revenue</span>
            </h1>

            {/* Sub */}
            <p className="text-base md:text-xl text-[#888880] max-w-xl mx-auto lg:mx-0 mb-10 md:mb-12 leading-relaxed">
              We build data-driven lead generation systems that scale your business profitably — more qualified leads, lower CAC, higher ROAS.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/contact"
                id="hero-primary-cta"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 orange-glow"
              >
                Book Free Consultation
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
              <Link
                href="#cases"
                id="hero-secondary-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#252523] hover:border-orange-500/40 bg-[#111110] hover:bg-[#191917] text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200"
              >
                View Case Studies
              </Link>
            </div>

            {/* Social proof strip */}
            <div className="mt-12 flex flex-wrap items-center justify-start gap-8 sm:gap-12">
              {[
                { val: "₹10Cr+", label: "Revenue" },
                { val: "500+",   label: "Leads" },
                { val: "4x",     label: "ROAS" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-extrabold orange-gradient-text">{s.val}</span>
                  <span className="text-xs text-[#888880] mt-1 font-medium uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="relative animate-fade-in hidden lg:block">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-orange-500/20 blur-[80px] rounded-full scale-75 translate-x-10 translate-y-10 -z-10" />
            
            <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl skew-x-1 skew-y-1 rotate-2 hover:rotate-0 hover:skew-x-0 hover:skew-y-0 transition-all duration-700">
               <Image 
                src="/hero_marketing_visual_1776164545322.png" 
                alt="AdsMini Performance Marketing" 
                width={800} 
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#080807]/40 to-transparent" />
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-orange-500/20 rounded-full animate-pulse" />
            <div className="absolute -bottom-10 -left-10 p-6 rounded-2xl bg-[#111110] border border-[#252523] shadow-xl text-left max-w-xs animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="text-orange-400 font-bold text-2xl mb-1">+240%</div>
                <div className="text-[#888880] text-xs font-semibold uppercase tracking-wider">Avg. Client Growth</div>
            </div>
          </div>

        </div>
      </div>

      {/* Static decorative markers */}
      <div className="pointer-events-none absolute bottom-16 left-12 h-24 w-[1px] bg-orange-500/20 hidden lg:block" />
      <div className="pointer-events-none absolute bottom-16 left-12 w-24 h-[1px] bg-orange-500/20 hidden lg:block" />

    </section>
  );
}
