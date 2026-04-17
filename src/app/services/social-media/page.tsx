import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import { Instagram, Users, Sparkles, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Social Media Management | AdsMini",
  description: "Build a community and grow your brand on Instagram, LinkedIn, and Facebook with our strategic social media management services.",
};

const socialFaqs = [
  {
    question: "Do you handle content creation?",
    answer: "Yes, we handle everything from content strategy to graphic design, reel editing, and caption writing. You just have to approve the monthly content calendar."
  },
  {
    question: "Will you respond to comments and DMs?",
    answer: "Our standard SMM packages include community management where we monitor and engage with your audience to build brand loyalty."
  },
  {
    question: "Do you offer influencer marketing?",
    answer: "Yes, we can help identify and collaborate with influencers that align with your brand values to expand your reach organically."
  }
];

export default function SocialMediaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Social Media Management",
    "serviceType": "SMM",
    "provider": {
      "@type": "LocalBusiness",
      "name": "AdsMini"
    },
    "description": "Professional social media management to build brand equity and engagement."
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="bg-[#080807] pt-[72px]">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-6 block">Brand Presence</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Build a Brand That<br />
              <span className="orange-gradient-text">People Actually Follow</span>
            </h1>
            <p className="text-[#888880] text-lg max-w-2xl leading-relaxed">
              Don't just post; engage. We help you build a vibrant community that trusts your expertise and loves your brand's personality.
            </p>
          </div>
        </section>

        <section className="py-24 border-y border-[#252523]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="p-8 rounded-2xl bg-[#111110] border border-[#252523]">
                <Sparkles className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-white font-bold text-xl mb-4">Content Creation</h3>
                <p className="text-[#888880] text-sm leading-relaxed">High-quality reels, posts, and stories designed to grab attention and drive engagement on every platform.</p>
              </div>
              <div className="p-8 rounded-2xl bg-[#111110] border border-[#252523]">
                <Users className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-white font-bold text-xl mb-4">Community Growth</h3>
                <p className="text-[#888880] text-sm leading-relaxed">We don't just chase followers; we build fans. Strategic engagement to turn casual scrollers into brand advocates.</p>
              </div>
              <div className="p-8 rounded-2xl bg-[#111110] border border-[#252523]">
                <Instagram className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-white font-bold text-xl mb-4">Platform Strategy</h3>
                <p className="text-[#888880] text-sm leading-relaxed">Tailored strategies for Instagram, LinkedIn, and Facebook to ensure your brand's voice is consistent yet optimized for each app.</p>
              </div>
            </div>
          </div>
        </section>

        <div id="service-faq">
          <Faq items={socialFaqs} />
        </div>
        <Cta />
      </main>
      <Footer />
    </>
  );
}
