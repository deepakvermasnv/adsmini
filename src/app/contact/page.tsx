"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: <MessageCircle className="w-5 h-5" />,
    label: "WhatsApp",
    value: "+91 99999 99999",
    href: "https://wa.me/919999999999",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "hello@adsmini.in",
    href: "mailto:hello@adsmini.in",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+91 99999 99999",
    href: "tel:+919999999999",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "India (Remote-First)",
    href: "#",
  },
];

const services = [
  "Performance Marketing",
  "SEO Services",
  "Social Media Management",
  "Funnels & Websites",
  "Automation & Retargeting",
  "Other",
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production, connect to a form API / email service
    setSent(true);
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080807] pt-[72px]">

        {/* ── Page Header ── */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent" />
          <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-orange-500/8 blur-[100px]" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500 mb-5 block">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Let's Grow Your<br />
              <span className="orange-gradient-text">Business Together</span>
            </h1>
            <p className="text-lg text-[#888880] max-w-xl mx-auto leading-relaxed">
              Tell us about your business and goals. We'll get back to you within 24 hours with a clear plan of action.
            </p>
          </div>
        </section>

        {/* ── Main Content ── */}
        <section className="pb-24 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">

            {/* ── Left: Contact Info ── */}
            <div className="md:col-span-2 flex flex-col gap-8">
              <div>
                <h2 className="text-white font-bold text-xl mb-2">Contact Information</h2>
                <p className="text-[#888880] text-sm leading-relaxed">
                  Reach out via any channel below. We're quick to respond on WhatsApp.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {contactInfo.map((c, i) => (
                  <Link
                    key={i}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#111110] border border-[#252523] hover:border-orange-500/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0 group-hover:bg-orange-500/15 transition-colors">
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-[#888880] text-xs font-medium">{c.label}</p>
                      <p className="text-white text-sm font-semibold">{c.value}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/5 to-transparent border border-orange-500/10 mt-2">
                <h3 className="text-white font-bold mb-2 text-sm">Grow with AdsMini</h3>
                <p className="text-[#888880] text-xs leading-relaxed">
                  Join hundreds of brands that trust us with their performance marketing and digital growth.
                </p>
              </div>
            </div>

            {/* ── Right: Form ── */}
            <div className="md:col-span-3">
              <div className="bg-[#111110] border border-[#252523] rounded-2xl p-8">
                {sent ? (
                  <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
                    <div className="w-16 h-16 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-3xl">
                      ✅
                    </div>
                    <h3 className="text-white text-xl font-bold">Message Sent!</h3>
                    <p className="text-[#888880] text-sm max-w-xs leading-relaxed">
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                      className="text-orange-400 text-sm hover:underline underline-offset-4"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <h2 className="text-white font-bold text-xl mb-2">Send Us a Message</h2>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[#888880] text-xs font-semibold uppercase tracking-wider">Full Name *</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Rahul Sharma"
                          className="bg-[#0C0C0B] border border-[#252523] text-white placeholder-[#555] rounded-lg px-4 py-3 text-sm outline-none focus:border-orange-500/50 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[#888880] text-xs font-semibold uppercase tracking-wider">Email Address *</label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="rahul@company.com"
                          className="bg-[#0C0C0B] border border-[#252523] text-white placeholder-[#555] rounded-lg px-4 py-3 text-sm outline-none focus:border-orange-500/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[#888880] text-xs font-semibold uppercase tracking-wider">Phone / WhatsApp</label>
                        <input
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="bg-[#0C0C0B] border border-[#252523] text-white placeholder-[#555] rounded-lg px-4 py-3 text-sm outline-none focus:border-orange-500/50 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[#888880] text-xs font-semibold uppercase tracking-wider">Service Interested In</label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="bg-[#0C0C0B] border border-[#252523] text-white rounded-lg px-4 py-3 text-sm outline-none focus:border-orange-500/50 transition-colors appearance-none"
                        >
                          <option value="" disabled>Select a service...</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#888880] text-xs font-semibold uppercase tracking-wider">Your Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your business, goals, and current challenges..."
                        className="bg-[#0C0C0B] border border-[#252523] text-white placeholder-[#555] rounded-lg px-4 py-3 text-sm outline-none focus:border-orange-500/50 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      id="contact-submit"
                      className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl transition-all duration-200 orange-glow text-base"
                    >
                      Send Message →
                    </button>

                    <p className="text-[#555] text-xs text-center">
                      By sending this form, you agree to be contacted by our team. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
