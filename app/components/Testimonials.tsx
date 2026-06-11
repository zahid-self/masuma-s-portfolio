"use client";

import { useScrollReveal } from "./useScrollReveal";

const testimonials = [
  {
    text: "Masuma set up our entire Meta Business Manager from scratch and ran our first Facebook Ads campaign. The leads started coming in within days. Very professional and detail-oriented.",
    emoji: "👨‍💼",
    name: "A. Rahman",
    role: "Small Business Owner, Dhaka",
  },
  {
    text: "She built our landing page and connected it with Meta Pixel tracking. Everything worked perfectly and we could finally see exactly which ads were converting. Highly recommended.",
    emoji: "👩‍💻",
    name: "Nadia Islam",
    role: "E-commerce Entrepreneur",
  },
  {
    text: "Masuma optimised our YouTube channel with proper SEO — titles, descriptions, tags — and our videos started ranking organically. Great communicator and quick to deliver.",
    emoji: "🎬",
    name: "Karim Hossain",
    role: "Content Creator, Bangladesh",
  },
];

export default function Testimonials() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} style={{ background: "var(--bg2)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem" }}>
        <div className="reveal" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent)", fontWeight: 600, marginBottom: "1rem" }}>Kind Words</div>
        <h2 className="reveal reveal-delay-1" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.15, letterSpacing: "-1px", marginBottom: "4rem" }}>
          What clients say.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {testimonials.map((t, i) => (
            <div key={t.name} className={`reveal reveal-delay-${i}`}
              style={{ background: "var(--card-bg)", backdropFilter: "blur(12px)", border: "1px solid var(--border)", borderRadius: "20px", padding: "2rem" }}>
              <div style={{ color: "var(--accent2)", fontSize: "0.9rem", letterSpacing: "0.15em", marginBottom: "1.2rem" }}>★★★★★</div>
              <p style={{ color: "var(--text2)", fontSize: "0.95rem", lineHeight: 1.8, fontWeight: 300, fontStyle: "italic", marginBottom: "1.5rem" }}>&ldquo;{t.text}&rdquo;</p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", background: "var(--bg3)", border: "1px solid var(--border)" }}>{t.emoji}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{t.name}</div>
                  <div style={{ color: "var(--text3)", fontSize: "0.8rem" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
