"use client";

import { useScrollReveal } from "./useScrollReveal";

interface Service {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
}

const services: Service[] = [
  {
    icon: "🔍",
    title: "Search Engine Optimization",
    desc: "Technical SEO audits, keyword research, on-page optimization, and link-building strategies that get your site ranking on page one.",
    tags: ["Keyword Research", "On-page SEO", "Technical Audit", "Backlinks"],
  },
  {
    icon: "📣",
    title: "Paid Advertising",
    desc: "Data-driven PPC campaigns on Google and Meta that maximize ROAS. I set up, optimize, and scale ads that convert.",
    tags: ["Google Ads", "Meta Ads", "A/B Testing", "Retargeting"],
  },
  {
    icon: "📱",
    title: "Social Media Marketing",
    desc: "Strategic content calendars, community management, and growth hacking across Instagram, LinkedIn, TikTok, and beyond.",
    tags: ["Content Calendar", "Engagement", "Reels & TikTok", "Analytics"],
  },
  {
    icon: "✍️",
    title: "Content Marketing",
    desc: "Blog posts, landing pages, email sequences, and ad copy that tells your brand story and drives action at every funnel stage.",
    tags: ["Copywriting", "Blog Strategy", "Email Flows", "Lead Magnets"],
  },
  {
    icon: "📊",
    title: "Analytics & Reporting",
    desc: "GA4, Google Tag Manager, and custom dashboards that turn raw data into clear insights and actionable decisions.",
    tags: ["GA4", "GTM", "Looker Studio", "KPIs"],
  },
  {
    icon: "📧",
    title: "Email Marketing",
    desc: "Automated drip campaigns and newsletters that nurture leads, retain customers, and drive repeat revenue.",
    tags: ["Mailchimp", "Klaviyo", "Automation", "Segmentation"],
  },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section
      id="skills"
      ref={ref}
      style={{ background: "var(--bg2)", position: "relative", zIndex: 1 }}
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
          What I Do
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
          My marketing superpowers.
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
          A full toolkit to grow your brand&apos;s visibility, engagement, and
          revenue across every digital channel.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginTop: "4rem",
          }}
        >
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${i % 3}`}
              style={{
                background: "var(--card-bg)",
                backdropFilter: "blur(12px)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = "rgba(255,107,107,0.25)";
                e.currentTarget.style.boxShadow =
                  "0 20px 60px rgba(255,107,107,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span style={{ fontSize: "2.2rem", marginBottom: "1.2rem", display: "block" }}>
                {s.icon}
              </span>
              <h3
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "1.25rem",
                  marginBottom: "0.8rem",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  color: "var(--text2)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                {s.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginTop: "1.2rem",
                }}
              >
                {s.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.72rem",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "50px",
                      border: "1px solid var(--border)",
                      color: "var(--text3)",
                      fontWeight: 500,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
