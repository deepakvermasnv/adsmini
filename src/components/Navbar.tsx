"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { 
    href: "/#services", 
    label: "Services",
    subItems: [
      { href: "/services/performance-marketing", label: "Performance Marketing" },
      { href: "/services/seo",                  label: "SEO Services" },
      { href: "/services/social-media",         label: "Social Media" },
      { href: "/services/funnels-websites",     label: "Funnels & Websites" },
      { href: "/services/automation",           label: "Automation & Retargeting" },
    ]
  },
  { href: "/#cases",       label: "Case Studies" },
  { href: "/#process",     label: "Process" },
  { href: "/#testimonials",label: "Testimonials" },
  { href: "/recruitment",  label: "Recruitment" },
  { href: "/contact",      label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center px-2 sm:px-4 pt-2 sm:pt-4 transition-all duration-300 pointer-events-none">
      <nav 
        className={`w-full max-w-7xl flex items-center justify-between px-4 sm:px-6 h-[56px] sm:h-[64px] rounded-xl sm:rounded-2xl border transition-all duration-500 pointer-events-auto
          ${scrolled 
            ? "border-white/10 bg-[#080807]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] h-[68px]" 
            : "border-transparent bg-transparent"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image 
              src="/logo.png" 
              alt="AdsMini Logo" 
              width={100} 
              height={32} 
              className="h-7 w-auto relative z-10 brightness-[1.2] invert"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <div 
              key={l.label} 
              className="relative group/parent"
              onMouseEnter={() => l.subItems && setActiveDropdown(l.label)}
              onMouseLeave={() => l.subItems && setActiveDropdown(null)}
            >
              <Link 
                href={l.href} 
                className={`relative px-4 py-2 text-sm font-semibold flex items-center gap-1 transition-all duration-300
                  ${activeDropdown === l.label ? "text-orange-400" : "text-white/70 hover:text-white"}`}
              >
                <span className="relative z-10">{l.label}</span>
                {l.subItems && <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === l.label ? "rotate-180" : ""}`} />}
                <span className={`absolute bottom-1 left-4 right-4 h-[2px] bg-orange-500 transition-transform duration-300 origin-left ${activeDropdown === l.label ? "scale-x-100" : "scale-x-0 group-hover/parent:scale-x-100"}`} />
              </Link>

              {/* Dropdown Menu */}
              {l.subItems && (
                <div 
                  className={`absolute top-[full] left-0 pt-4 transition-all duration-300 ${activeDropdown === l.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"}`}
                >
                  <div className="w-64 bg-[#111110] border border-[#252523] rounded-xl overflow-hidden shadow-2xl">
                    <div className="p-2 space-y-1">
                      {l.subItems.map(sub => (
                        <Link 
                          key={sub.label} 
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-[#888880] hover:text-white hover:bg-orange-500/10 rounded-lg transition-all"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            id="nav-cta"
            className="relative overflow-hidden group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-sm font-bold px-6 py-2.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(253,169,75,0.4)] hover:-translate-y-0.5"
          >
            <span className="relative z-10">Book Consultation</span>
            <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="lg:hidden text-white/80 hover:text-white p-2 transition-colors" 
          onClick={() => setOpen(p => !p)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Brand visual accent */}
        <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-[#080807] pointer-events-auto flex flex-col pt-20 px-6 h-screen overflow-y-auto">
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-500/10 blur-[100px] -z-10" />
          
          <div className="flex flex-col gap-6">
            {links.map((l, i) => (
              <div key={l.label} className="w-full border-b border-white/5 pb-4">
                <div className="flex items-center justify-between group">
                  <Link 
                    href={l.href} 
                    onClick={() => {
                      if(!l.subItems) setOpen(false);
                      else setActiveDropdown(activeDropdown === l.label ? null : l.label);
                    }} 
                    className={`text-2xl font-bold transition-all duration-300 ${activeDropdown === l.label || (l.subItems && activeDropdown === l.label) ? "text-orange-500" : "text-white/80"}`}
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {l.label}
                  </Link>
                  {l.subItems && (
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === l.label ? null : l.label)}
                      className="p-2 rounded-lg bg-white/5 text-white/50"
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === l.label ? "rotate-180 text-orange-500" : ""}`} />
                    </button>
                  )}
                </div>

                {/* Mobile Sub-menu */}
                {l.subItems && (
                  <div 
                    className={`flex flex-col gap-4 mt-6 ml-4 overflow-hidden transition-all duration-500 ${activeDropdown === l.label ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    {l.subItems.map(sub => (
                      <Link 
                        key={sub.label} 
                        href={sub.href} 
                        onClick={() => setOpen(false)}
                        className="text-lg font-medium text-[#888880] hover:text-white transition-colors flex items-center gap-3"
                      >
                        <span className="w-1.5 h-[1px] bg-orange-500/50" />
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 pb-10">
            <Link 
              href="/contact" 
              onClick={() => setOpen(false)} 
              className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold py-5 rounded-2xl shadow-[0_10px_40px_rgba(253,169,75,0.2)]"
            >
              Book Consultation <ArrowUpRight className="w-5 h-5" />
            </Link>
            
            <div className="mt-10 pt-10 border-t border-white/5 text-center">
              <p className="text-[#555] text-xs uppercase tracking-widest font-semibold">AdsMini Agency</p>
            </div>
          </div>
          
          <button 
            onClick={() => setOpen(false)} 
            className="absolute top-6 right-6 p-4 rounded-xl bg-white/5 text-white/50 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
