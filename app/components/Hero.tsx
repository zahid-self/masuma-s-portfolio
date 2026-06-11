"use client";

import Image from "next/image";

const stats = [
  { num: "2+", label: "Years Experience" },
  { num: "4+", label: "Core Specializations" },
  { num: "100%", label: "Result Focused" },
];

const heroTags = [
  { label: "Facebook Ads", variant: "warm" },
  { label: "Google Ads", variant: "default" },
  { label: "SEO", variant: "yellow" },
  { label: "Landing Pages", variant: "default" },
  { label: "Meta Pixel", variant: "warm" },
  { label: "Social Media", variant: "default" },
] as const;

type TagVariant = "warm" | "yellow" | "default";

const tagStyles: Record<TagVariant, React.CSSProperties> = {
  warm: {
    background: "rgba(255,107,107,0.1)",
    border: "1px solid rgba(255,107,107,0.2)",
    color: "var(--accent)",
  },
  yellow: {
    background: "rgba(255,217,61,0.1)",
    border: "1px solid rgba(255,217,61,0.2)",
    color: "var(--accent2)",
  },
  default: {
    background: "rgba(107,203,255,0.1)",
    border: "1px solid rgba(107,203,255,0.2)",
    color: "var(--accent3)",
  },
};

export default function Hero() {
  return (
    <section style={{ position: "relative", zIndex: 1 }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "8rem 2rem 4rem",
          display: "flex",
          alignItems: "center",
          gap: "4rem",
          flexWrap: "wrap",
        }}
      >
        {/* Left content */}
        <div style={{ flex: 1, minWidth: "280px" }}>
          <div
            className="animate-fade-up"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255,107,107,0.1)",
              border: "1px solid rgba(255,107,107,0.3)",
              borderRadius: "50px",
              padding: "0.4rem 1rem",
              fontSize: "0.8rem",
              color: "var(--accent)",
              fontWeight: 500,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", animation: "pulse 2s infinite" }} />
            Available for hire
          </div>

          <h1
            className="animate-fade-up-1"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-2px",
              marginBottom: "1.5rem",
            }}
          >
            I grow brands
            <br />
            with <em className="gradient-text" style={{ fontStyle: "italic" }}>data-driven</em>
            <br />
            <em className="gradient-text" style={{ fontStyle: "italic" }}>marketing.</em>
          </h1>

          <p
            className="animate-fade-up-2"
            style={{ fontSize: "1.1rem", color: "var(--text2)", maxWidth: "540px", lineHeight: 1.75, marginBottom: "3rem", fontWeight: 300 }}
          >
            I&apos;m <strong style={{ color: "var(--text)", fontWeight: 600 }}>Masuma Aktar</strong> — a results-driven digital marketer with 2+ years of experience in Facebook Ads, Google Ads, SEO, and landing page design. I help businesses attract targeted audiences and increase sales.
          </p>

          <div className="animate-fade-up-3" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--grad)", color: "#fff", padding: "0.9rem 2rem", borderRadius: "50px", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", boxShadow: "0 8px 32px rgba(255,107,107,0.35)", transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(255,107,107,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(255,107,107,0.35)"; }}
            >✉ Let&apos;s Work Together</a>
            <a href="#projects" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", border: "1px solid var(--border)", color: "var(--text)", padding: "0.9rem 2rem", borderRadius: "50px", textDecoration: "none", fontWeight: 500, fontSize: "0.95rem", transition: "border-color 0.2s, background 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--text2)"; e.currentTarget.style.background = "var(--surface)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "transparent"; }}
            >See My Work →</a>
          </div>

          <div className="animate-fade-up-4" style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", marginTop: "4rem" }}>
            {stats.map(s => (
              <div key={s.label}>
                <div className="gradient-text" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2.2rem", lineHeight: 1 }}>{s.num}</div>
                <div style={{ color: "var(--text3)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "0.3rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero card */}
        <div className="animate-fade-up-2" style={{ flex: "0 0 auto", width: "min(340px, 100%)", display: "flex", justifyContent: "center" }}>
          <div style={{ background: "var(--card-bg)", backdropFilter: "blur(20px)", border: "1px solid var(--border)", borderRadius: "24px", width: "100%", boxShadow: "var(--shadow)", position: "relative", overflow: "hidden" }}>
            {/* Top gradient bar */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "var(--grad)", zIndex: 2 }} />

            {/* Large photo */}
            <div style={{ position: "relative", width: "100%", height: "320px", overflow: "hidden" }}>
              <Image
                src="/masuma.jpg"
                alt="Masuma Aktar"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
              {/* Gradient fade at bottom */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to top, var(--bg2), transparent)" }} />
              {/* Open badge overlaid on photo */}
              <div style={{ position: "absolute", bottom: "1rem", left: "1rem", display: "flex", alignItems: "center", gap: "0.6rem", background: "rgba(0,0,0,0.55)", backdropFilter: "blur(10px)", border: "1px solid rgba(107,255,157,0.35)", borderRadius: "50px", padding: "0.45rem 1rem", fontSize: "0.8rem", fontWeight: 500, color: "#6bff9d" }}>
                <span style={{ animation: "pulse 2s infinite" }}>●</span>
                Open to opportunities
              </div>
            </div>

            {/* Card body */}
            <div style={{ padding: "1.5rem 2rem 2rem" }}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.4rem", marginBottom: "0.2rem" }}>Masuma Aktar</div>
              <div style={{ color: "var(--text2)", fontSize: "0.9rem", marginBottom: "1.2rem" }}>Digital Marketing Specialist</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {heroTags.map(t => (
                  <span key={t.label} style={{ ...tagStyles[t.variant], fontSize: "0.75rem", padding: "0.3rem 0.8rem", borderRadius: "50px", fontWeight: 500 }}>{t.label}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}