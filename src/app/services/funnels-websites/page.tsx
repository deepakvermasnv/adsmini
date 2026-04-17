import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import { Zap, Monitor, Rocket, MousePointer2 } from "lucide-react";

export const metadata: Metadata = {
  title: "High-Converting Funnels & Websites | AdsMini",
  description: "Get landing pages and sales funnels that actually convert. We design high-performance websites optimized for lead generation and sales.",
};

const funnelFaqs = [
  {
    question: "Do you build full websites or just landing pages?",
    answer: "We do both. From high-converting single-page sales funnels to full-scale corporate websites, we ensure every page is built to drive action."
  },
  {
    question: "Which platforms do you use for building?",
    answer: "We specialize in React/Next.js for custom needs, and Framer, Webflow, or Shopify for more agile marketing needs."
  },
  {
    question: "Is copywriting included in the design?",
    answer: "Yes, our funnel development service includes high-converting direct-response copywriting as standard."
  }
];

export default function FunnelsWebsitesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Funnels & Websites",
    "serviceType": "Web Development",
    "provider": {
      "@type": "LocalBusiness",
      "name": "AdsMini"
    },
    "description": "Conversion-optimized funnels and websites to maximize your ad spend ROI."
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="bg-[#080807] pt-[72px]">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-6 block">Conversion Assets</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Turn Clicks Into<br />
              <span className="orange-gradient-text">Customers Faster</span>
            </h1>
            <p className="text-[#888880] text-lg max-w-2xl leading-relaxed">
              A pretty website is useless if it doesn't convert. We build high-performance funnels that guide your visitors from curiosity to checkout with zero friction.
            </p>
          </div>
        </section>

        <section className="py-24 border-y border-[#252523]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="p-8 rounded-2xl bg-[#111110] border border-[#252523]">
                <Monitor className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-white font-bold text-xl mb-4">High-Perf UX</h3>
                <p className="text-[#888880] text-sm leading-relaxed">Lightning-fast load speeds and intuitive layouts that keep users engaged and reduce bounce rates significantly.</p>
              </div>
              <div className="p-8 rounded-2xl bg-[#111110] border border-[#252523]">
                <Zap className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-white font-bold text-xl mb-4">Sales Funnels</h3>
                <p className="text-[#888880] text-sm leading-relaxed">Strategic funnel mapping to upsell, cross-sell, and maximize the lifetime value of every customer you acquire.</p>
              </div>
              <div className="p-8 rounded-2xl bg-[#111110] border border-[#252523]">
                <MousePointer2 className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-white font-bold text-xl mb-4">CRO Focused</h3>
                <p className="text-[#888880] text-sm leading-relaxed">Continuous A/B testing of headlines, buttons, and forms to squeeze every bit of profit from your traffic.</p>
              </div>
            </div>
          </div>
        </section>

        <div id="service-faq">
          <Faq items={funnelFaqs} />
        </div>
        <Cta />
      </main>
      <Footer />
    </>
  );
}
