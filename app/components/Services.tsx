"use client";

import { useScrollReveal } from "./useScrollReveal";

const services = [
  {
    icon: "📘",
    title: "Facebook Marketing & Advertising",
    desc: "Full Facebook page setup, logo & cover design, Meta Business Manager configuration, and high-performing ad campaigns built for lead generation and sales.",
    tags: ["Page Setup", "Meta Business Manager", "Facebook Ads", "Lead Gen"],
  },
  {
    icon: "🎯",
    title: "Google Ads (SEM)",
    desc: "Search Engine Marketing campaigns targeted at high-intent audiences. Keyword research, ad copywriting, bidding strategy, and ongoing optimisation for maximum ROI.",
    tags: ["Search Campaigns", "Keyword Research", "Ad Copy", "Bid Strategy"],
  },
  {
    icon: "🔍",
    title: "SEO – Local & YouTube",
    desc: "Local SEO to help businesses rank in their area, plus YouTube channel creation and video SEO to grow organic reach and channel authority.",
    tags: ["Local SEO", "YouTube SEO", "Keyword Research", "Channel Setup"],
  },
  {
    icon: "🖥️",
    title: "Landing Page Design",
    desc: "Conversion-focused landing pages built specifically for marketing campaigns — clean, fast, and designed to turn visitors into leads or customers.",
    tags: ["Lead Gen Pages", "Conversion Focus", "Campaign Ready", "Mobile Friendly"],
  },
  {
    icon: "📡",
    title: "Meta Pixel & Conversion API",
    desc: "Accurate conversion tracking setup using Meta Pixel and Conversion API, ensuring your ad platform gets the data it needs to optimise performance.",
    tags: ["Meta Pixel", "Conversion API", "Event Tracking", "GTM"],
  },
  {
    icon: "📱",
    title: "Social Media Management",
    desc: "Managing multiple social media platforms with consistent content, engagement strategies, and data-backed decisions to grow brand visibility.",
    tags: ["Content Strategy", "Scheduling", "Engagement", "Analytics"],
  },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section id="skills" ref={ref} style={{ background: "var(--bg2)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem" }}>
        <div className="reveal" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent)", fontWeight: 600, marginBottom: "1rem" }}>What I Do</div>
        <h2 className="reveal reveal-delay-1" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.15, letterSpacing: "-1px", marginBottom: "1.5rem" }}>My marketing toolkit.</h2>
        <p className="reveal reveal-delay-2" style={{ color: "var(--text2)", fontSize: "1.05rem", maxWidth: "500px", lineHeight: 1.7, fontWeight: 300 }}>
          From ad creation to conversion tracking — everything a business needs to grow online.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "4rem" }}>
          {services.map((s, i) => (
            <div key={s.title} className={`reveal reveal-delay-${i % 3}`}
              style={{ background: "var(--card-bg)", backdropFilter: "blur(12px)", border: "1px solid var(--border)", borderRadius: "20px", padding: "2rem", transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s", cursor: "default" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = "rgba(255,107,107,0.25)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(255,107,107,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <span style={{ fontSize: "2.2rem", marginBottom: "1.2rem", display: "block" }}>{s.icon}</span>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.25rem", marginBottom: "0.8rem" }}>{s.title}</h3>
              <p style={{ color: "var(--text2)", fontSize: "0.9rem", lineHeight: 1.7, fontWeight: 300 }}>{s.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1.2rem" }}>
                {s.tags.map(t => (
                  <span key={t} style={{ fontSize: "0.72rem", padding: "0.25rem 0.65rem", borderRadius: "50px", border: "1px solid var(--border)", color: "var(--text3)", fontWeight: 500 }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
