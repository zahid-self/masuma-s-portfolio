"use client";

const items = [
  "SEO Optimization",
  "Google Ads",
  "Social Media Marketing",
  "Content Strategy",
  "Email Marketing",
  "Analytics & Reporting",
  "Brand Building",
  "Meta Ads",
  "Conversion Optimization",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
        padding: "1.2rem 0",
        background: "var(--bg2)",
      }}
    >
      <div
        className="marquee-track"
        style={{ display: "flex", gap: "3rem", width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              whiteSpace: "nowrap",
              color: "var(--text3)",
              fontSize: "0.85rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {item}
            <span style={{ color: "var(--accent)", fontSize: "0.7rem" }}>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
