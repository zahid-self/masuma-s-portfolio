"use client";

import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactDetails = [
  { icon: "📧", label: "Email", value: "aria.noor.marketing@gmail.com" },
  {
    icon: "📍",
    label: "Location",
    value: "Dhaka, Bangladesh · Open to Remote",
  },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/arianoor" },
  { icon: "🕐", label: "Availability", value: "Immediately Available" },
];

export default function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputStyle: React.CSSProperties = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "12px",
    padding: "0.85rem 1.1rem",
    color: "var(--text)",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        background: "var(--bg2)",
        position: "relative",
        zIndex: 1,
      }}
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
          Get In Touch
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
          Let&apos;s build something great.
        </h2>

        <p
          className="reveal reveal-delay-2"
          style={{
            color: "var(--text2)",
            fontSize: "1.05rem",
            maxWidth: "500px",
            lineHeight: 1.7,
            fontWeight: 300,
            marginBottom: "4rem",
          }}
        >
          I&apos;m actively looking for my first full-time role or freelance
          projects. If you need a hungry marketer ready to hustle — let&apos;s
          talk.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "4rem",
          }}
        >
          {/* Contact info */}
          <div className="reveal">
            {contactDetails.map((d, i) => (
              <div
                key={d.label}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  marginBottom: i < contactDetails.length - 1 ? "1.5rem" : 0,
                  paddingBottom:
                    i < contactDetails.length - 1 ? "1.5rem" : 0,
                  borderBottom:
                    i < contactDetails.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(255,107,107,0.1)",
                    border: "1px solid rgba(255,107,107,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    flexShrink: 0,
                  }}
                >
                  {d.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {d.label}
                  </div>
                  <div style={{ fontWeight: 500 }}>{d.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-1">
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text2)",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "var(--accent)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "var(--border)")
                    }
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text2)",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "var(--accent)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "var(--border)")
                    }
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text2)",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Job opportunity, project, collaboration..."
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--accent)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border)")
                  }
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text2)",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the role or project..."
                  rows={5}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--accent)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border)")
                  }
                />
              </div>

              <button
                type="submit"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  width: "fit-content",
                  background: submitted
                    ? "linear-gradient(135deg,#6bff9d,#6bcbff)"
                    : "var(--grad)",
                  color: "#fff",
                  padding: "0.9rem 2rem",
                  borderRadius: "50px",
                  border: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  boxShadow: "0 8px 32px rgba(255,107,107,0.35)",
                  transition: "transform 0.2s, box-shadow 0.2s, background 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {submitted ? "✓ Message Sent!" : "Send Message ✉"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
