"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    // Replace with your actual form submission logic (Supabase, API route, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    border: "1px solid rgba(44,24,16,0.15)",
    borderRadius: "6px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "15px",
    color: "var(--ink)",
    background: "var(--white)",
    outline: "none",
    transition: "border-color 0.2s",
    marginBottom: "0",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--ink)",
    marginBottom: "8px",
    letterSpacing: "0.3px",
  };

  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          padding: "140px 0 80px",
          background: "linear-gradient(160deg, var(--cream-dark) 0%, var(--cream) 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="dot-grid" style={{ position: "absolute", inset: 0 }} />
        <div className="container" style={{ position: "relative" }}>
          <p className="font-deva" style={{ color: "var(--saffron)", fontSize: "14px", letterSpacing: "3px", marginBottom: "16px" }}>
            संपर्क करें
          </p>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(38px, 6vw, 68px)",
              fontWeight: 900,
              color: "var(--ink)",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Let&apos;s Build Something
            <br />
            <span style={{ color: "var(--saffron)" }}>Extraordinary Together.</span>
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "var(--ink-light)", maxWidth: "500px" }}>
            Tell us about your project. We&apos;ll get back to you with a 
            custom proposal within 24 hours.
          </p>
        </div>
      </section>

      {/* ── CONTACT BODY ── */}
      <section style={{ padding: "80px 0 100px", background: "var(--cream)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.6fr",
              gap: "64px",
              alignItems: "flex-start",
            }}
            className="contact-grid"
          >
            {/* Left — Info */}
            <div>
              {/* Contact cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "48px" }}>
                {[
                  {
                    icon: "📍",
                    title: "Remote, Based in",
                    lines: ["", "Odisha – 766001, India"],
                  },
                  {
                    icon: "✉️",
                    title: "Email",
                    lines: ["hello@devance.in"],
                    link: "mailto:hello@devance.in",
                  },
                  {
                    icon: "💬",
                    title: "WhatsApp",
                    lines: ["Quick responses guaranteed"],
                    link: "https://wa.me/91XXXXXXXXXX",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="card"
                    style={{ padding: "24px", display: "flex", gap: "16px", alignItems: "flex-start" }}
                  >
                    <div style={{ fontSize: "28px" }}>{item.icon}</div>
                    <div>
                      <div style={{ fontWeight: 600, color: "var(--ink)", marginBottom: "4px" }}>
                        {item.title}
                      </div>
                      {item.lines.map((line) =>
                        item.link ? (
                          <a key={line} href={item.link} style={{ display: "block", fontSize: "14px", color: "var(--saffron)", textDecoration: "none" }}>
                            {line}
                          </a>
                        ) : (
                          <div key={line} style={{ fontSize: "14px", color: "var(--ink-light)" }}>{line}</div>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Why work with us */}
              <div
                style={{
                  padding: "28px",
                  background: "var(--ink)",
                  borderRadius: "8px",
                  color: "var(--cream)",
                }}
              >
                <p className="font-deva" style={{ color: "var(--terracotta)", fontSize: "13px", letterSpacing: "2px", marginBottom: "12px" }}>
                  हम क्यों?
                </p>
                <h3 className="font-display" style={{ fontSize: "20px", fontWeight: 700, marginBottom: "16px" }}>
                  Why choose Devance?
                </h3>
                {[
                  "Response within 24 hours",
                  "Free consultation call",
                  "Fixed price, no surprises",
                  "Local insight, global quality",
                ].map((point) => (
                  <div key={point} style={{ display: "flex", gap: "10px", marginBottom: "10px", fontSize: "14px", color: "rgba(250,246,239,0.75)" }}>
                    <span style={{ color: "var(--saffron)" }}>◈</span>
                    {point}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div>
              {submitted ? (
                <div
                  style={{
                    padding: "60px 48px",
                    background: "var(--white)",
                    borderRadius: "12px",
                    border: "1px solid rgba(200,75,31,0.2)",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "64px", marginBottom: "24px" }}>🎉</div>
                  <h2 className="font-display" style={{ fontSize: "32px", fontWeight: 700, color: "var(--ink)", marginBottom: "16px" }}>
                    Message Received!
                  </h2>
                  <p style={{ fontSize: "16px", lineHeight: "1.7", color: "var(--ink-light)", marginBottom: "8px" }}>
                    Thank you for reaching out. We&apos;ll review your project details 
                    and get back to you within 24 hours.
                  </p>
                  <p className="font-deva" style={{ color: "var(--saffron)", fontSize: "14px", marginTop: "16px" }}>
                    धन्यवाद 🙏
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    background: "var(--white)",
                    borderRadius: "12px",
                    border: "1px solid rgba(44,24,16,0.1)",
                    padding: "48px",
                    boxShadow: "0 4px 32px rgba(44,24,16,0.06)",
                  }}
                >
                  <h2 className="font-display" style={{ fontSize: "24px", fontWeight: 700, color: "var(--ink)", marginBottom: "8px" }}>
                    Tell Us About Your Project
                  </h2>
                  <p style={{ fontSize: "14px", color: "var(--ink-light)", marginBottom: "32px" }}>
                    Fill in the details below and we&apos;ll craft a custom proposal for you.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {/* Name + Email row */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                      <div>
                        <label style={labelStyle}>Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Sumesh Pradhan"
                          style={inputStyle}
                          required
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="hello@yourcompany.com"
                          style={inputStyle}
                          required
                        />
                      </div>
                    </div>

                    {/* Phone + Service row */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                      <div>
                        <label style={labelStyle}>Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Service Needed *</label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          style={{ ...inputStyle, cursor: "pointer" }}
                          required
                        >
                          <option value="">Select a service</option>
                          <option value="web-design">Web Design</option>
                          <option value="web-development">Web Development</option>
                          <option value="ecommerce">E-Commerce</option>
                          <option value="seo">SEO Optimisation</option>
                          <option value="uiux">UI/UX Consulting</option>
                          <option value="maintenance">Website Maintenance</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label style={labelStyle}>Approximate Budget</label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: "pointer" }}
                      >
                        <option value="">Select budget range</option>
                        <option value="under-15k">Under ₹15,000</option>
                        <option value="15k-50k">₹15,000 – ₹50,000</option>
                        <option value="50k-1l">₹50,000 – ₹1,00,000</option>
                        <option value="1l-plus">₹1,00,000+</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label style={labelStyle}>Tell Us About Your Project *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Describe your project, goals, timeline, or any questions you have..."
                        rows={5}
                        style={{ ...inputStyle, resize: "vertical" }}
                        required
                      />
                    </div>

                    {/* Submit */}
                    <button
                      onClick={handleSubmit}
                      disabled={loading || !form.name || !form.email || !form.message}
                      style={{
                        width: "100%",
                        padding: "16px",
                        background: loading ? "var(--ink-light)" : "var(--saffron)",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                        cursor: loading ? "not-allowed" : "pointer",
                        transition: "all 0.3s",
                        letterSpacing: "0.3px",
                      }}
                    >
                      {loading ? "Sending..." : "Send Message →"}
                    </button>

                    <p style={{ fontSize: "12px", color: "var(--ink-light)", textAlign: "center" }}>
                      We typically respond within 2–4 hours during business hours (Mon–Sat, 9am–7pm IST)
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .contact-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 500px) {
            .form-row { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── MAP-STYLE LOCATION BAND ── */}
      <section
        style={{
          padding: "60px 0",
          background: "var(--ink)",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p className="font-deva" style={{ color: "var(--terracotta)", fontSize: "14px", letterSpacing: "3px", marginBottom: "8px" }}>
            हमारा ठिकाना
          </p>
          <h2 className="font-display" style={{ fontSize: "28px", fontWeight: 700, color: "var(--cream)", marginBottom: "8px" }}>
            Currently working remotely with clients across India, <br />
            with a home base in Bhawanipatna, Odisha.
          </h2>
          <p style={{ color: "rgba(250,246,239,0.55)", fontSize: "15px" }}>
            Kalahandi, Odisha, India – 766001 &nbsp;•&nbsp; Serving clients across India
          </p>
        </div>
      </section>
    </>
  );
}