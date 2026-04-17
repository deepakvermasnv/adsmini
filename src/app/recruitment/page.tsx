import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers at AdsMini | Join Our Team",
  description: "Explore exciting career opportunities at AdsMini — India's performance-first digital marketing agency. We're hiring SEO, content, ads specialists and more.",
};

const openings = [
  {
    title: "SEO Executive",
    type: "Full-Time",
    location: "Remote / Hybrid",
    department: "SEO Services",
    exp: "1–3 Years",
    description:
      "Research keywords, optimize on-page content, build backlinks, and track rankings. You'll work directly on client campaigns across industries.",
    skills: ["On-Page SEO", "Link Building", "Google Search Console", "Ahrefs / SEMrush"],
  },
  {
    title: "Content Writer",
    type: "Full-Time",
    location: "Remote",
    department: "Content & Social",
    exp: "1–2 Years",
    description:
      "Write compelling blogs, ad copies, landing page content, and social media posts for our clients. Strong command of Hindi & English preferred.",
    skills: ["Blog Writing", "Ad Copywriting", "SEO Writing", "Research"],
  },
  {
    title: "Social Media Manager",
    type: "Full-Time",
    location: "Remote / On-Site",
    department: "Social Media",
    exp: "1–3 Years",
    description:
      "Plan, create, and schedule content across Instagram, Facebook, and LinkedIn. Analyze performance and grow client accounts organically.",
    skills: ["Instagram Growth", "Content Calendar", "Canva / Figma", "Analytics"],
  },
  {
    title: "Facebook & Instagram Ads Specialist",
    type: "Full-Time",
    location: "Remote",
    department: "Performance Marketing",
    exp: "2–4 Years",
    description:
      "Set up, manage, and optimize Meta ad campaigns for lead generation and e-commerce clients. Own ROAS targets and scale winning campaigns.",
    skills: ["Meta Ads Manager", "Audience Research", "Creative Testing", "Pixel & Events"],
  },
  {
    title: "Google Ads Specialist",
    type: "Full-Time",
    location: "Remote",
    department: "Performance Marketing",
    exp: "2–4 Years",
    description:
      "Run Search, Display, and YouTube campaigns for diverse clients. Manage bids, keywords, and ad copies to maximize conversions at target CPA.",
    skills: ["Google Ads", "Keyword Research", "Smart Bidding", "Conversion Tracking"],
  },
  {
    title: "Graphic Designer",
    type: "Full-Time / Freelance",
    location: "Remote",
    department: "Creative",
    exp: "1–3 Years",
    description:
      "Create scroll-stopping ad creatives, social media graphics, and brand collateral. A strong portfolio of digital marketing creatives is a must.",
    skills: ["Photoshop", "Illustrator", "Canva", "Motion Graphics (Bonus)"],
  },
  {
    title: "Video Editor",
    type: "Full-Time / Freelance",
    location: "Remote",
    department: "Creative",
    exp: "1–2 Years",
    description:
      "Edit short-form videos for Instagram Reels, YouTube Shorts, and ad campaigns. Fast turnaround, clean cuts, and good storytelling required.",
    skills: ["Premiere Pro / CapCut", "After Effects", "Reels Editing", "Color Grading"],
  },
  {
    title: "Performance Marketing Intern",
    type: "Internship (3 Months)",
    location: "Remote",
    department: "Performance Marketing",
    exp: "Fresher / 0–1 Year",
    description:
      "Learn and assist in running paid ad campaigns on Meta and Google. Great opportunity for freshers looking to start a career in digital marketing.",
    skills: ["Eagerness to Learn", "Excel/Sheets", "Basic Ads Knowledge", "Communication"],
  },
];

const typeColor: Record<string, string> = {
  "Full-Time": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Full-Time / Freelance": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Internship (3 Months)": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Remote: "bg-violet-500/10 text-violet-400 border-violet-500/20",
};

export default function RecruitmentPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080807] pt-[72px]">

        {/* ── Hero Banner ── */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent" />
          <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
          {/* Corner markers */}
          <div className="pointer-events-none absolute top-10 left-10 w-12 h-[1px] bg-orange-500/40" />
          <div className="pointer-events-none absolute top-10 left-10 h-12 w-[1px] bg-orange-500/40" />
          <div className="pointer-events-none absolute top-10 right-10 w-12 h-[1px] bg-orange-500/40" />
          <div className="pointer-events-none absolute top-10 right-10 h-12 w-[1px] bg-orange-500/40" />

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500 mb-5 block">
              Careers at AdsMini
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Build the Future of<br />
              <span className="orange-gradient-text">Digital Marketing</span>
            </h1>
            <p className="text-lg text-[#888880] max-w-2xl mx-auto mb-8 leading-relaxed">
              AdsMini is a fast-growing performance marketing agency helping brands scale across India. We're a team of data-obsessed marketers, creatives, and growth hackers. If you love results, you'll love it here.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#888880]">
              {["Remote-First", "Fast Growth", "Learning Culture", "Result-Driven"].map(tag => (
                <span key={tag} className="border border-[#252523] bg-[#111110] px-4 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why AdsMini ── */}
        <section className="border-y border-[#252523] bg-[#0C0C0B] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: "🚀", title: "Fast-Paced Growth", desc: "Work on real campaigns with real budgets from day one." },
                { icon: "🏠", title: "Remote Flexibility", desc: "Work from anywhere in India. Output matters, not location." },
                { icon: "📈", title: "Learn & Earn", desc: "Monthly performance bonuses and paid learning certifications." },
                { icon: "🤝", title: "Team Culture", desc: "A close-knit, collaborative team that celebrates every win." },
              ].map((b, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-3">
                  <span className="text-3xl">{b.icon}</span>
                  <h3 className="text-white font-bold text-sm">{b.title}</h3>
                  <p className="text-[#888880] text-xs leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Job Openings ── */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500 mb-4 block">
              Open Positions
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              {openings.length} Roles Currently Open
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {openings.map((job, i) => (
              <div
                key={i}
                className="group bg-[#111110] border border-[#252523] hover:border-orange-500/30 rounded-2xl p-7 transition-all duration-300 hover:shadow-[0_16px_48px_rgba(249,115,22,0.08)] flex flex-col gap-5"
              >
                {/* Top row */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-white font-bold text-lg">{job.title}</h3>
                    <p className="text-[#888880] text-xs mt-0.5">{job.department} · {job.exp}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${typeColor[job.type] ?? "bg-white/5 text-white border-white/10"}`}>
                      {job.type}
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-violet-500/10 text-violet-400 border-violet-500/20">
                      {job.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#aaa] text-sm leading-relaxed">{job.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {job.skills.map(s => (
                    <span key={s} className="text-xs bg-[#0C0C0B] border border-[#252523] text-[#888880] px-3 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Apply */}
                <Link
                  href={`mailto:careers@adsmini.in?subject=Application for ${encodeURIComponent(job.title)}`}
                  className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors group-hover:underline underline-offset-4 mt-auto"
                >
                  Apply for this role →
                </Link>
              </div>
            ))}
          </div>

          {/* No suitable role */}
          <div className="mt-12 p-8 rounded-2xl border border-dashed border-[#252523] text-center">
            <p className="text-[#888880] text-sm mb-3">Don't see a role that fits? We're always looking for talented people.</p>
            <Link
              href="mailto:careers@adsmini.in?subject=Open Application"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all orange-glow"
            >
              Send Open Application →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
