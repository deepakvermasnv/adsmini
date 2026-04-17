"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const defaultFaqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive suite of performance marketing services, including Meta Ads (Facebook & Instagram), Google Ads (Search, Display, YouTube), LinkedIn Ads, Lead Generation Strategy, Funnel Optimization, and Creative Strategy. Our goal is to provide a full-stack solution to scale your business profitably."
  },
  {
    question: "How long does it take to see results?",
    answer: "While some results can be seen within the first 14-30 days as we optimize targeting and creatives, true scaling typically happens after 60-90 days of consistent data gathering and testing. We focus on long-term sustainability, not just short-term spikes."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have extensive experience in B2B SaaS, E-commerce, Real Estate, EdTech, and Fintech. Our data-driven methodology is industry-agnostic, but we excel where customer acquisition costs and lead quality are the primary metrics of success."
  },
  {
    question: "Do you guarantee results?",
    answer: "No ethical agency can guarantee specific sales numbers because market conditions, product-market fit, and sales team performance vary. However, we guarantee our processes: we use data-proven strategies, high-performing creatives, and constant optimization to give you the highest probability of success."
  },
  {
    question: "How do we get started?",
    answer: "The first step is to book a free consultation call. During this call, we'll audit your current marketing efforts, identify growth opportunities, and see if we're a good fit for each other. If we are, we'll draft a custom strategy and proposal for your business."
  }
];

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq({ items }: { items?: FaqItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const displayFaqs = items || defaultFaqs;

  return (
    <section id="faq" className="bg-[#080807] py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500 mb-4 block">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked <span className="orange-gradient-text">Questions</span>
          </h2>
          <p className="mt-4 text-[#888880] text-lg max-w-2xl mx-auto">
            Everything you need to know about our services and process.
          </p>
        </div>

        <div className="space-y-4">
          {displayFaqs.map((faq, index) => (
            <div 
              key={index}
              className={`group rounded-2xl border transition-all duration-300 ${
                activeIndex === index 
                ? "border-orange-500/30 bg-[#111110] shadow-[0_0_40px_rgba(253,169,75,0.05)]" 
                : "border-[#252523] bg-transparent hover:border-[#333]"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className={`text-lg font-semibold transition-colors duration-300 ${
                  activeIndex === index ? "text-white" : "text-[#888880] group-hover:text-white"
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 p-1 rounded-full border transition-all duration-300 ${
                  activeIndex === index 
                  ? "bg-orange-500 border-orange-500 text-white rotate-180" 
                  : "bg-transparent border-[#252523] text-[#888880]"
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-[#888880] text-base leading-relaxed border-t border-[#252523] pt-6 mx-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <p className="text-[#888880] mb-6">Still have questions?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 text-white font-bold hover:text-orange-400 transition-colors"
          >
            Chat with our growth specialists →
          </a>
        </div>
      </div>
    </section>
  );
}
