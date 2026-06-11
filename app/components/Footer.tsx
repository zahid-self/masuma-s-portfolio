"use client";

const socials = [
  { label: "🌐", title: "Website", href: "https://sites.google.com/view/masuma-aktar/home" },
  { label: "📧", title: "Email", href: "mailto:masumaaktardm@gmail.com" },
  { label: "📞", title: "Phone", href: "tel:+8801318608667" },
];

export default function Footer() {
  return (
    <footer style={{ position: "relative", zIndex: 1, borderTop: "1px solid var(--border)", background: "var(--bg)", padding: "3rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
        <span className="gradient-text" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.2rem" }}>Masuma Aktar.</span>
        <span style={{ color: "var(--text3)", fontSize: "0.85rem" }}>© 2025 Masuma Aktar · Digital Marketer · Brahmanbaria, Bangladesh</span>
        <div style={{ display: "flex", gap: "1rem" }}>
          {socials.map(s => (
            <a key={s.title} href={s.href} title={s.title}
              style={{ width: "40px", height: "40px", borderRadius: "10px", background: "var(--surface)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: "1rem", color: "var(--text2)", transition: "border-color 0.2s, color 0.2s, background 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.background = "rgba(255,107,107,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "var(--surface)"; }}
            >{s.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
