"use client";

import { useScrollReveal } from "./useScrollReveal";

const skills = [
  { name: "Facebook Ads & Meta Marketing", pct: 92 },
  { name: "Google Ads (SEM)", pct: 85 },
  { name: "SEO (Local & YouTube)", pct: 88 },
  { name: "Landing Page Design", pct: 83 },
  { name: "Conversion Tracking (Pixel & API)", pct: 87 },
];

const certs = [
  "Facebook Ads Setup & Campaign Management",
  "Meta Pixel & Conversion API Implementation",
  "Google Ads Search Engine Marketing (SEM)",
  "Local SEO & YouTube Video SEO",
  "Landing Page Design (Lead Generation Focused)",
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref} style={{ position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem" }}>
        <div className="reveal" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent)", fontWeight: 600, marginBottom: "1rem" }}>About Me</div>
        <h2 className="reveal reveal-delay-1" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.15, letterSpacing: "-1px", marginBottom: "1.5rem" }}>
          Fuelled by results,<br />driven by data.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem", alignItems: "start", marginTop: "4rem" }}>
          <div className="reveal reveal-delay-2">
            {[
              <>I am a <strong style={{ color: "var(--text)", fontWeight: 600 }}>results-driven Business Growth Digital Marketer</strong> with over 2 years of experience in the digital marketing industry, based in Ashuganj, Brahmanbaria, Bangladesh.</>,
              <>I specialise in <strong style={{ color: "var(--text)", fontWeight: 600 }}>Facebook Ads, Google Ads, SEO, Conversion Tracking, and Landing Page Design</strong>. I help businesses grow their online presence, attract targeted audiences, and generate high-quality leads.</>,
              <>My approach is performance-focused and data-driven. I&apos;ve worked with real clients and self-directed projects, managing everything from Meta Business Manager setup to full campaign execution and optimisation.</>,
            ].map((text, i) => (
              <p key={i} style={{ fontSize: "1.05rem", color: "var(--text2)", lineHeight: 1.8, marginBottom: "1.5rem", fontWeight: 300 }}>{text}</p>
            ))}
            <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent)", fontWeight: 600, marginBottom: "1rem", marginTop: "0.5rem" }}>Core Competencies</div>
            <ul style={{ listStyle: "none" }}>
              {certs.map(c => (
                <li key={c} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", color: "var(--text2)", fontSize: "0.95rem", marginBottom: "1rem" }}>
                  <span style={{ color: "var(--accent)", fontSize: "0.9rem", flexShrink: 0, marginTop: "0.1rem" }}>→</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {skills.map((s, i) => (
              <div key={s.name} className={`reveal reveal-delay-${Math.min(i + 1, 3)}`}
                style={{ background: "var(--card-bg)", backdropFilter: "blur(12px)", border: "1px solid var(--border)", borderRadius: "16px", padding: "1.5rem", transition: "border-color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,107,107,0.3)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
                  <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>{s.name}</span>
                  <span style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 600 }}>{s.pct}%</span>
                </div>
                <div style={{ height: "4px", background: "var(--bg3)", borderRadius: "4px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${s.pct}%`, borderRadius: "4px", background: "var(--grad)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
