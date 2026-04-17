import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import { Search, Globe, Link2, Layout } from "lucide-react";

export const metadata: Metadata = {
  title: "Premium SEO Services | AdsMini",
  description: "Boost your organic rankings and drive sustainable traffic with our data-driven SEO strategies including On-Page, Technical, and Content SEO.",
};

const seoFaqs = [
  {
    question: "How long does it take for SEO to show results?",
    answer: "SEO is a long-term strategy. Typically, you'll start seeing significant movement in keyword rankings within 3-6 months, with consistent traffic growth following after."
  },
  {
    question: "Do you offer backlink building?",
    answer: "Yes, we focus on high-quality, relevant link building through digital PR and outreach, ensuring your site gains authority safely without risk of penalties."
  },
  {
    question: "Do you provide technical SEO audits?",
    answer: "Absolutely. Every SEO engagement begins with a deep technical audit covering site speed, indexability, schema markup, and Core Web Vitals."
  }
];

export default function SeoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Services",
    "serviceType": "Search Engine Optimization",
    "provider": {
      "@type": "LocalBusiness",
      "name": "AdsMini"
    },
    "description": "Comprehensive SEO solutions to dominate search results and grow organically."
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="bg-[#080807] pt-[72px]">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-6 block">Organic Growth</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Dominate Search with<br />
              <span className="orange-gradient-text">Premium SEO Services</span>
            </h1>
            <p className="text-[#888880] text-lg max-w-2xl leading-relaxed">
              Ranking on Page 1 isn't luck; it's a science. We optimize every aspect of your digital presence to ensure Google loves your brand as much as your customers do.
            </p>
          </div>
        </section>

        <section className="py-24 border-y border-[#252523]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="p-8 rounded-2xl bg-[#111110] border border-[#252523]">
                <Layout className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-white font-bold text-xl mb-4">Technical SEO</h3>
                <p className="text-[#888880] text-sm leading-relaxed">We fix the foundation. From site speed to mobile optimization, we ensure search engines can crawl and index your site perfectly.</p>
              </div>
              <div className="p-8 rounded-2xl bg-[#111110] border border-[#252523]">
                <Globe className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-white font-bold text-xl mb-4">Content Strategy</h3>
                <p className="text-[#888880] text-sm leading-relaxed">Keywords that convert. We create content that answers user intent and establishes your brand as an industry authority.</p>
              </div>
              <div className="p-8 rounded-2xl bg-[#111110] border border-[#252523]">
                <Link2 className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-white font-bold text-xl mb-4">Authority Building</h3>
                <p className="text-[#888880] text-sm leading-relaxed">Earn the trust of the internet. Our outreach and PR strategies help you gain high-authority backlinks that stick.</p>
              </div>
            </div>
          </div>
        </section>

        <div id="service-faq">
          <Faq items={seoFaqs} />
        </div>
        <Cta />
      </main>
      <Footer />
    </>
  );
}
