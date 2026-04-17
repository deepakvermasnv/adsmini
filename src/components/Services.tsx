import Link from "next/link";
import { BarChart2, Search, Share2, Globe, Zap, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Performance Marketing",
    href: "/services/performance-marketing",
    color: "from-orange-500/20 to-orange-500/5",
    borderHover: "hover:border-orange-500/40",
    services: ["Facebook Ads", "Google Ads", "Instagram Ads"],
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "SEO Services",
    href: "/services/seo",
    color: "from-amber-500/20 to-amber-500/5",
    borderHover: "hover:border-amber-500/40",
    services: ["On-Page SEO", "Off-Page SEO", "Technical SEO"],
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Social Media",
    href: "/services/social-media",
    color: "from-orange-400/20 to-orange-400/5",
    borderHover: "hover:border-orange-400/40",
    services: ["Social Media Management", "Content Strategy", "Instagram Growth"],
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Funnels & Websites",
    href: "/services/funnels-websites",
    color: "from-amber-400/20 to-amber-400/5",
    borderHover: "hover:border-amber-400/40",
    services: ["Landing Page Design", "Sales Funnel Development", "Conversion Optimization"],
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Automation & Retargeting",
    href: "/services/automation",
    color: "from-orange-500/20 to-orange-500/5",
    borderHover: "hover:border-orange-500/40",
    services: ["Email Marketing", "WhatsApp Marketing", "Marketing Automation"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-28 bg-[#080807] relative">
      {/* Faint top border line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#252523] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500 mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Full-Stack Marketing<br />
            <span className="orange-gradient-text">Services That Deliver</span>
          </h2>
          <p className="text-[#888880] text-lg leading-relaxed">
            From paid ads to SEO to automation — we cover every channel needed to grow your business predictably.
          </p>
        </div>

        {/* Services Grid — 3 on top, 2 centered below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {categories.slice(0, 3).map((cat, i) => (
            <ServiceCard key={i} cat={cat} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-[66.666%] mx-auto">
          {categories.slice(3).map((cat, i) => (
            <ServiceCard key={i} cat={cat} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ cat }: { cat: typeof categories[0] }) {
  return (
    <Link
      href={cat.href}
      className={`group relative p-7 rounded-2xl bg-gradient-to-b ${cat.color} border border-[#252523] ${cat.borderHover} transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(249,115,22,0.08)] block`}
    >
      {/* Icon */}
      <div className="flex items-center justify-between mb-5">
        <div className="w-12 h-12 rounded-xl bg-[#080807] border border-[#252523] flex items-center justify-center text-orange-400 group-hover:border-orange-500/40 transition-colors">
          {cat.icon}
        </div>
        <ArrowRight className="w-5 h-5 text-[#333] group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
      </div>

      {/* Title */}
      <h3 className="text-white font-bold text-lg mb-4">{cat.title}</h3>

      {/* Sub-services */}
      <ul className="space-y-2.5">
        {cat.services.map((s, j) => (
          <li key={j} className="flex items-center gap-2.5 text-[#888880] text-sm group-hover:text-[#aaa] transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
            {s}
          </li>
        ))}
      </ul>

      {/* Bottom accent line — appears on hover */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] rounded-b-2xl bg-gradient-to-r from-orange-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
}
