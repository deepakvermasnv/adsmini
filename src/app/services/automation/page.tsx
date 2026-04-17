import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import { Cpu, Mail, MessageSquare, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing Automation & Retargeting | AdsMini",
  description: "Automate your lead nurturing and maximize ROI with advanced WhatsApp and Email marketing automation flows.",
};

const automationFaqs = [
  {
    question: "Do you provide the automation software?",
    answer: "We work with top-tier tools like GoHighLevel, Zapier, and Interakt. We'll help you set up the right tools for your specific workflow."
  },
  {
    question: "Can you automate WhatsApp marketing?",
    answer: "Yes, we specialize in official WhatsApp API integrations for automated lead verification, abandoned cart recovery, and customer support."
  },
  {
    question: "How does automation improve ROAS?",
    answer: "By nurturing leads that didn't convert immediately, we increase the overall conversion rate of your traffic, effectively lowering your blended CAC."
  }
];

export default function AutomationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Automation & Retargeting",
    "serviceType": "Marketing Automation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "AdsMini"
    },
    "description": "Smart automation workflows to nurture leads and scale your revenue automatically."
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="bg-[#080807] pt-[72px]">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-6 block">Efficiency & Scale</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Scale Your Sales on<br />
              <span className="orange-gradient-text">Complete Autopilot</span>
            </h1>
            <p className="text-[#888880] text-lg max-w-2xl leading-relaxed">
              Stop losing leads to slow response times. We build smart automation systems that nurture your prospects 24/7, so you can focus on closing deals.
            </p>
          </div>
        </section>

        <section className="py-24 border-y border-[#252523]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="p-8 rounded-2xl bg-[#111110] border border-[#252523]">
                <MessageSquare className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-white font-bold text-xl mb-4">WhatsApp Automation</h3>
                <p className="text-[#888880] text-sm leading-relaxed">Official API integrations to send automated updates, verify leads, and engage with users where they are most active.</p>
              </div>
              <div className="p-8 rounded-2xl bg-[#111110] border border-[#252523]">
                <Mail className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-white font-bold text-xl mb-4">Email Nurturing</h3>
                <p className="text-[#888880] text-sm leading-relaxed">Strategic email sequences that build trust over time and bring cold leads back into your sales funnel automatically.</p>
              </div>
              <div className="p-8 rounded-2xl bg-[#111110] border border-[#252523]">
                <Cpu className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-white font-bold text-xl mb-4">CRM Integration</h3>
                <p className="text-[#888880] text-sm leading-relaxed">Seamlessly connect your ads to your sales team with automated lead routing and instant notifications.</p>
              </div>
            </div>
          </div>
        </section>

        <div id="service-faq">
          <Faq items={automationFaqs} />
        </div>
        <Cta />
      </main>
      <Footer />
    </>
  );
}
