"use client";

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 2rem",
          background: "var(--nav-bg)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border)",
          transition: "background 0.4s",
        }}
      >
        {/* Logo */}
        <span
          className="gradient-text"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "1.3rem",
            letterSpacing: "-0.5px",
          }}
        >
          Masuma Aktar.
        </span>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            listStyle: "none",
          }}
          className="hidden md:flex"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  color: "var(--text2)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text2)")
                }
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button
            onClick={toggleTheme}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "50px",
              padding: "0.4rem 0.8rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "var(--text2)",
              fontSize: "0.85rem",
              fontFamily: "'DM Sans', sans-serif",
              transition: "all 0.2s",
            }}
            aria-label="Toggle theme"
          >
            <span>{theme === "dark" ? "☀️" : "🌙"}</span>
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>

          {/* Hamburger */}
          <button
            className="flex md:hidden flex-col gap-[5px] cursor-pointer bg-transparent border-0 p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "var(--text2)",
                borderRadius: "2px",
                transition: "all 0.3s",
                transform: menuOpen
                  ? "rotate(45deg) translate(5px, 5px)"
                  : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "var(--text2)",
                borderRadius: "2px",
                transition: "all 0.3s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "var(--text2)",
                borderRadius: "2px",
                transition: "all 0.3s",
                transform: menuOpen
                  ? "rotate(-45deg) translate(5px, -5px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "var(--bg)",
            padding: "6rem 2rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--text)",
                textDecoration: "none",
                fontSize: "1.8rem",
                fontFamily: "'DM Serif Display', serif",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "1rem",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
