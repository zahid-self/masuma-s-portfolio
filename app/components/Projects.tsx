"use client";

import { useScrollReveal } from "./useScrollReveal";

interface Project {
  emoji: string;
  colorClass: string;
  label: string;
  title: string;
  desc: string;
  results: { num: string; label: string }[];
}

const projects: Project[] = [
  {
    emoji: "🛍️",
    colorClass: "c1",
    label: "E-commerce · SEO + Paid Ads",
    title: "Fashion Brand Launch Campaign",
    desc: "Launched a full-funnel digital campaign for a local clothing brand — from SEO-optimized product pages to Meta ad creatives targeting style-conscious millennials.",
    results: [
      { num: "+340%", label: "Organic Traffic" },
      { num: "3.8×", label: "ROAS" },
      { num: "2.1k", label: "Followers Gained" },
    ],
  },
  {
    emoji: "🎓",
    colorClass: "c2",
    label: "EdTech · Email + Content",
    title: "Online Course Lead Generation",
    desc: "Built a complete inbound funnel for an online course creator — lead magnets, email nurture sequences, and blog content targeting long-tail keywords.",
    results: [
      { num: "580+", label: "Leads Generated" },
      { num: "42%", label: "Email Open Rate" },
      { num: "68%", label: "Cost Reduction" },
    ],
  },
  {
    emoji: "🍕",
    colorClass: "c3",
    label: "F&B · Social Media",
    title: "Restaurant Social Media Growth",
    desc: "Managed Instagram and Facebook for a local restaurant. Created content calendars, Reels, and ran targeted local campaigns to drive foot traffic.",
    results: [
      { num: "+200%", label: "Instagram Reach" },
      { num: "4.5×", label: "Engagement" },
      { num: "+35%", label: "Reservations" },
    ],
  },
  {
    emoji: "💻",
    colorClass: "c4",
    label: "SaaS · Google Ads",
    title: "B2B SaaS PPC Campaign",
    desc: "Set up and managed a Google Search campaign for a B2B software product targeting decision-makers, with tailored landing pages and conversion tracking.",
    results: [
      { num: "4.2%", label: "Click-Through Rate" },
      { num: "-28%", label: "Cost Per Lead" },
      { num: "9/10", label: "Quality Score" },
    ],
  },
];

const thumbBg: Record<string, string> = {
  c1: "linear-gradient(135deg, rgba(255,107,107,0.13), rgba(255,217,61,0.13))",
  c2: "linear-gradient(135deg, rgba(107,203,255,0.13), rgba(155,127,255,0.13))",
  c3: "linear-gradient(135deg, rgba(255,154,92,0.13), rgba(255,107,107,0.13))",
  c4: "linear-gradient(135deg, rgba(107,255,157,0.13), rgba(107,203,255,0.13))",
};

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section
      id="projects"
      ref={ref}
      style={{ position: "relative", zIndex: 1 }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem" }}
      >
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
          My Work
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
          Projects that prove it.
        </h2>

        <p
          className="reveal reveal-delay-2"
          style={{
            color: "var(--text2)",
            fontSize: "1.05rem",
            maxWidth: "500px",
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          Real campaigns, real results. Here&apos;s what I&apos;ve built while
          learning the craft.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            marginTop: "4rem",
          }}
        >
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`reveal reveal-delay-${i % 3}`}
              style={{
                background: "var(--card-bg)",
                backdropFilter: "blur(12px)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                overflow: "hidden",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "var(--shadow)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Thumbnail */}
              <div
                style={{
                  height: "200px",
                  background: thumbBg[p.colorClass],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "4rem",
                }}
              >
                {p.emoji}
              </div>

              {/* Body */}
              <div style={{ padding: "1.8rem" }}>
                <div
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--accent)",
                    fontWeight: 600,
                    marginBottom: "0.6rem",
                  }}
                >
                  {p.label}
                </div>
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "1.3rem",
                    marginBottom: "0.8rem",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    color: "var(--text2)",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {p.desc}
                </p>

                {/* Results */}
                <div
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    marginTop: "1.2rem",
                    paddingTop: "1.2rem",
                    borderTop: "1px solid var(--border)",
                    flexWrap: "wrap",
                  }}
                >
                  {p.results.map((r) => (
                    <div key={r.label}>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "1.1rem",
                          color: "var(--accent)",
                        }}
                      >
                        {r.num}
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--text3)",
                        }}
                      >
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
