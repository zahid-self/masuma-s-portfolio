"use client";

import { useScrollReveal } from "./useScrollReveal";

const skills = [
  { name: "SEO & Content Strategy", pct: 88 },
  { name: "Paid Advertising (PPC)", pct: 82 },
  { name: "Social Media Marketing", pct: 90 },
  { name: "Email Marketing", pct: 78 },
  { name: "Analytics & Reporting", pct: 85 },
];

const certs = [
  "Google Analytics 4 Certified",
  "Meta Blueprint (Facebook & Instagram Ads)",
  "HubSpot Inbound Marketing Certified",
  "Google Ads Search & Display Certified",
  "Semrush Content Marketing Certified",
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref} style={{ position: "relative", zIndex: 1 }}>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem" }}
      >
        {/* Section label */}
        <div
          className="reveal"
          style={{
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--accent)",
            fontWeight: 600,
            marginBottom: "1rem",
          }}
        >
          About Me
        </div>

        <h2
          className="reveal reveal-delay-1"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            lineHeight: 1.15,
            letterSpacing: "-1px",
            marginBottom: "1.5rem",
          }}
        >
          Fuelled by curiosity,
          <br />
          driven by results.
        </h2>

        {/* Two-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "4rem",
            alignItems: "start",
            marginTop: "4rem",
          }}
        >
          {/* Text */}
          <div className="reveal reveal-delay-2">
            {[
              <>
                I fell in love with digital marketing because it sits at the
                intersection of{" "}
                <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                  creativity and data
                </strong>
                . Every campaign tells a story, and every metric tells you how
                well that story landed.
              </>,
              <>
                I&apos;ve recently completed intensive training in digital
                marketing, earning certifications in Google Analytics, Meta
                Blueprint, and HubSpot. I&apos;ve applied those skills on real
                projects — helping small businesses grow their online presence
                and driving measurable results.
              </>,
              <>
                I&apos;m now eager to join a team where I can keep learning,
                contribute meaningfully, and eventually lead campaigns that make
                a real impact.
              </>,
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text2)",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                  fontWeight: 300,
                }}
              >
                {text}
              </p>
            ))}

            <ul style={{ listStyle: "none" }}>
              {certs.map((c) => (
                <li
                  key={c}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                    color: "var(--text2)",
                    fontSize: "0.95rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      color: "var(--accent)",
                      fontSize: "0.9rem",
                      flexShrink: 0,
                      marginTop: "0.1rem",
                    }}
                  >
                    →
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Skill bars */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {skills.map((s, i) => (
              <div
                key={s.name}
                className={`reveal reveal-delay-${Math.min(i + 1, 3)}`}
                style={{
                  background: "var(--card-bg)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(255,107,107,0.3)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border)")
                }
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.8rem",
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>
                    {s.name}
                  </span>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--accent)",
                      fontWeight: 600,
                    }}
                  >
                    {s.pct}%
                  </span>
                </div>
                <div
                  style={{
                    height: "4px",
                    background: "var(--bg3)",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${s.pct}%`,
                      borderRadius: "4px",
                      background: "var(--grad)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
