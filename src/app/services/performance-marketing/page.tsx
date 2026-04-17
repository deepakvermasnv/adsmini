import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import { BarChart3, Target, MousePointer2, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Performance Marketing Services | AdsMini",
  description: "Scale your business with data-driven performance marketing. We specialize in Meta Ads, Google Ads, and ROAS-focused campaigns for high-growth brands.",
  openGraph: {
    title: "Performance Marketing Services | AdsMini",
    description: "Data-driven advertising that delivers predictable ROI.",
  },
};

const serviceFaqs = [
  {
    question: "Which platforms do you use for performance marketing?",
    answer: "We primarily use Meta (Facebook & Instagram), Google (Search, Display, YouTube), and LinkedIn. The choice depends on where your target audience is most active and likely to convert."
  },
  {
    question: "How do you track ROAS?",
    answer: "We implement advanced tracking using GTM, Meta Pixel, and server-side API (CAPI) to ensure accurate attribution and data-driven decision making."
  },
  {
    question: "What is your minimum budget requirement?",
    answer: "While we work with various scales, we typically recommend a minimum monthly ad spend of ₹50,000 to allow for effective testing and optimization."
  }
];

export default function PerformanceMarketingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Performance Marketing",
    "serviceType": "Digital Advertising",
    "provider": {
      "@type": "LocalBusiness",
      "name": "AdsMini",
      "url": "https://adsmini.in"
    },
    "description": "Premium performance marketing services focused on ROI and scale.",
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Performance Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Meta Ads Management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Ads Management"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="bg-[#080807] pt-[72px]">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-6 block">Service Details</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Scale Your Brand with<br />
              <span className="orange-gradient-text">Performance Marketing</span>
            </h1>
            <p className="text-[#888880] text-lg max-w-2xl leading-relaxed">
              We don't just run ads; we build profit engines. Using advanced data analytics and creative excellence, we turn every rupee spent into predictable revenue.
            </p>
          </div>
        </section>

        {/* Features / Benefits */}
        <section className="py-24 border-y border-[#252523]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="p-8 rounded-2xl bg-[#111110] border border-[#252523]">
                <Target className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-white font-bold text-xl mb-4">Precision Targeting</h3>
                <p className="text-[#888880] text-sm leading-relaxed">Reach your ideal customers exactly where they hang out. We use demographic, behavioral, and interest-based profiling.</p>
              </div>
              <div className="p-8 rounded-2xl bg-[#111110] border border-[#252523]">
                <BarChart3 className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-white font-bold text-xl mb-4">Data-Driven Growth</h3>
                <p className="text-[#888880] text-sm leading-relaxed">No guesswork. Every campaign is backed by hard data and rigorous A/B testing to ensure maximum ROAS.</p>
              </div>
              <div className="p-8 rounded-2xl bg-[#111110] border border-[#252523]">
                <MousePointer2 className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-white font-bold text-xl mb-4">Creative Excellence</h3>
                <p className="text-[#888880] text-sm leading-relaxed">Thumb-stopping creatives that convert. We blend art and science to create ads that people actually want to click.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Explanation */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Our Approach to Scaling</h2>
            <div className="space-y-12 text-left">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 font-bold flex-shrink-0 mt-1">1</div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Audit & Strategy</h4>
                  <p className="text-[#888880] leading-relaxed">We analyze your current funnels, pixel data, and competitors to identify the quickest wins for your brand.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 font-bold flex-shrink-0 mt-1">2</div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Launch & Cold Outreach</h4>
                  <p className="text-[#888880] leading-relaxed">Testing high-intent audiences and broad targeting to find the winning combinations of copy and creative.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 font-bold flex-shrink-0 mt-1">3</div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Scale & Retarget</h4>
                  <p className="text-[#888880] leading-relaxed">Increasing budgets on winners while building airtight retargeting sequences to capture every possible lead.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Specific FAQ */}
        <div id="service-faq" className="bg-[#0C0C0B] border-t border-[#252523]">
          <Faq />
        </div>

        <Cta />
      </main>
      <Footer />
    </>
  );
}
