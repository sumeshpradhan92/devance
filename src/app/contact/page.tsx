"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// ── Supabase client ──────────────────────────────────────────────────────
// Add these to your .env.local:
//   NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
//   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// ── Types ────────────────────────────────────────────────────────────────
type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};
type FieldErrors = Partial<Record<keyof FormState, string>>;

// ── Validation ───────────────────────────────────────────────────────────
function validate(form: FormState): FieldErrors {
  const e: FieldErrors = {};
  if (!form.name.trim()) e.name = "Your name is required.";
  if (!form.email.trim()) e.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    e.email = "Enter a valid email address.";
  if (!form.message.trim()) e.message = "Please describe your project.";
  else if (form.message.trim().length < 20)
    e.message = "Add a few more details (at least 20 characters).";
  return e;
}

// ── Component ────────────────────────────────────────────────────────────
export default function ContactClient() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", service: "", budget: "", message: "",
  });
  const [errors, setErrors]   = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    if (touched[name as keyof FormState]) {
      const ve = validate(updated);
      setErrors((prev) => ({ ...prev, [name]: ve[name as keyof FormState] }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target as { name: keyof FormState };
    setTouched((prev) => ({ ...prev, [name]: true }));
    const ve = validate(form);
    setErrors((prev) => ({ ...prev, [name]: ve[name as keyof FormState] }));
  };

  const handleSubmit = async () => {
    // Touch everything and validate fully
    setTouched({ name: true, email: true, phone: true, service: true, budget: true, message: true });
    const ve = validate(form);
    setErrors(ve);
    if (Object.keys(ve).length > 0) return;

    setLoading(true);
    setServerError(null);

    try {
      const { error } = await supabase.from("contact_submissions").insert([{
        name:         form.name.trim(),
        email:        form.email.trim().toLowerCase(),
        phone:        form.phone.trim() || null,
        service:      form.service     || null,
        budget:       form.budget      || null,
        message:      form.message.trim(),
        submitted_at: new Date().toISOString(),
      }]);
      if (error) throw error;
      setSubmitted(true);
    } catch (err: unknown) {
      console.error(err);
      setServerError(
        "Something went wrong. Please try again or email us directly at hello@devance.in"
      );
    } finally {
      setLoading(false);
    }
  };

  // ── Style helpers ────────────────────────────────────────────────────
  const inputBase: React.CSSProperties = {
    width: "100%", padding: "13px 16px", borderRadius: "6px",
   fontSize: "15px",
    color: "var(--ink)", background: "var(--white)", outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const iStyle = (f: keyof FormState): React.CSSProperties => ({
    ...inputBase,
    border: errors[f] && touched[f] ? "1.5px solid #E53E3E" : "1px solid rgba(44,24,16,0.18)",
    boxShadow: errors[f] && touched[f] ? "0 0 0 3px rgba(229,62,62,0.08)" : "none",
  });

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: "13px", fontWeight: 600,
    color: "var(--ink)", marginBottom: "7px", letterSpacing: "0.2px",
  };

  const errMsg = (f: keyof FormState) =>
    errors[f] && touched[f]
      ? <p style={{ fontSize: "12px", color: "#C53030", marginTop: "5px" }}>⚠ {errors[f]}</p>
      : null;

  // ── Render ───────────────────────────────────────────────────────────
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          padding: "140px 0 80px",
          background: "linear-gradient(160deg, var(--cream-dark) 0%, var(--cream) 100%)",
          position: "relative", overflow: "hidden",
        }}
      >
        <div className="dot-grid" style={{ position: "absolute", inset: 0 }} />
        <div className="container" style={{ position: "relative" }}>
          <p className="font-deva" style={{ color: "var(--saffron)", fontSize: "14px", letterSpacing: "3px", marginBottom: "16px" }}>
            संपर्क करें
          </p>
          <h1 className="font-display"
            style={{ fontSize: "clamp(38px, 6vw, 68px)", fontWeight: 900, color: "var(--ink)", lineHeight: 1.1, marginBottom: "20px" }}
          >
            Let&apos;s Build Something
            <br />
            <span style={{ color: "var(--saffron)" }}>Extraordinary Together.</span>
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "var(--ink-light)", maxWidth: "500px" }}>
            Tell us about your project. We&apos;ll get back to you with a custom proposal within 24 hours.
          </p>
        </div>
      </section>

      {/* ── BODY ── */}
      <section style={{ padding: "80px 0 100px", background: "var(--cream)" }}>
        <div className="container">
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "64px", alignItems: "flex-start" }}
            className="contact-grid"
          >
            {/* Left — Info */}
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
                {[
                  { icon: "📍", title: "Remote",  lines: ["Bhawanipatna, Kalahandi", "Odisha – 766001, India"], link: null },
                  { icon: "✉️", title: "Email",        lines: ["hello@devance.online"],              link: "mailto:hello@devance.online" },
                  { icon: "💬", title: "WhatsApp",     lines: ["Chat for quick responses"],      link: "https://wa.me/91801873310" },
                ].map((item) => (
                  <div key={item.title} className="card"
                    style={{ padding: "22px", display: "flex", gap: "14px", alignItems: "flex-start" }}
                  >
                    <div style={{ fontSize: "26px", lineHeight: 1, marginTop: "2px" }}>{item.icon}</div>
                    <div>
                      <div style={{ fontWeight: 600, color: "var(--ink)", marginBottom: "4px", fontSize: "15px" }}>{item.title}</div>
                      {item.lines.map((line) =>
                        item.link
                          ? <a key={line} href={item.link} style={{ display: "block", fontSize: "14px", color: "var(--saffron)", textDecoration: "none" }}>{line}</a>
                          : <div key={line} style={{ fontSize: "14px", color: "var(--ink-light)" }}>{line}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ padding: "28px", background: "var(--ink)", borderRadius: "8px" }}>
                <p className="font-deva" style={{ color: "var(--terracotta)", fontSize: "13px", letterSpacing: "2px", marginBottom: "10px" }}>हम क्यों?</p>
                <h3 className="font-display" style={{ fontSize: "20px", fontWeight: 700, color: "var(--cream)", marginBottom: "16px" }}>Why choose Devance?</h3>
                {["Response within 24 hours", "Free consultation call", "Fixed price, no surprises", "Local insight, global quality"].map((point) => (
                  <div key={point} style={{ display: "flex", gap: "10px", marginBottom: "10px", fontSize: "14px", color: "rgba(250,246,239,0.75)" }}>
                    <span style={{ color: "var(--saffron)" }}>◈</span>{point}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form / Success */}
            <div>
              {submitted ? (
                <div style={{ padding: "60px 48px", background: "var(--white)", borderRadius: "12px", border: "1px solid rgba(200,75,31,0.2)", textAlign: "center" }}>
                  <div style={{ fontSize: "64px", marginBottom: "20px" }}>🎉</div>
                  <h2 className="font-display" style={{ fontSize: "30px", fontWeight: 700, color: "var(--ink)", marginBottom: "14px" }}>
                    Message Received!
                  </h2>
                  <p style={{ fontSize: "16px", lineHeight: "1.7", color: "var(--ink-light)" }}>
                    Thank you, <strong>{form.name.split(" ")[0]}</strong>! We&apos;ll review your details
                    and reach you at <span style={{ color: "var(--saffron)" }}>{form.email}</span> within 24 hours.
                  </p>
                  <p className="font-deva" style={{ color: "var(--saffron)", fontSize: "16px", marginTop: "20px" }}>धन्यवाद 🙏</p>
                </div>
              ) : (
                <div style={{ background: "var(--white)", borderRadius: "12px", border: "1px solid rgba(44,24,16,0.1)", padding: "44px", boxShadow: "0 4px 32px rgba(44,24,16,0.06)" }}>
                  <h2 className="font-display" style={{ fontSize: "24px", fontWeight: 700, color: "var(--ink)", marginBottom: "6px" }}>
                    Tell Us About Your Project
                  </h2>
                  <p style={{ fontSize: "14px", color: "var(--ink-light)", marginBottom: "28px" }}>
                    Fields marked <span style={{ color: "var(--saffron)" }}>*</span> are required.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                    {/* Row 1: Name + Email */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                      <div>
                        <label style={labelStyle}>Full Name <span style={{ color: "var(--saffron)" }}>*</span></label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} onBlur={handleBlur}
                          placeholder="Sumesh Pradhan" style={iStyle("name")} />
                        {errMsg("name")}
                      </div>
                      <div>
                        <label style={labelStyle}>Email Address <span style={{ color: "var(--saffron)" }}>*</span></label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} onBlur={handleBlur}
                          placeholder="hello@yourcompany.com" style={iStyle("email")} />
                        {errMsg("email")}
                      </div>
                    </div>

                    {/* Row 2: Phone + Service */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                      <div>
                        <label style={labelStyle}>Phone Number</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} onBlur={handleBlur}
                          placeholder="+91 98765 43210" style={iStyle("phone")} />
                      </div>
                      <div>
                        <label style={labelStyle}>Service Needed</label>
                        <select name="service" value={form.service} onChange={handleChange} onBlur={handleBlur}
                          style={{ ...iStyle("service"), cursor: "pointer" }}>
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
                      <select name="budget" value={form.budget} onChange={handleChange} onBlur={handleBlur}
                        style={{ ...iStyle("budget"), cursor: "pointer" }}>
                        <option value="">Select budget range</option>
                        <option value="under-15k">Under ₹15,000</option>
                        <option value="15k-50k">₹15,000 – ₹50,000</option>
                        <option value="50k-1l">₹50,000 – ₹1,00,000</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label style={labelStyle}>Project Details <span style={{ color: "var(--saffron)" }}>*</span></label>
                      <textarea name="message" value={form.message} onChange={handleChange} onBlur={handleBlur}
                        placeholder="Describe your project, goals, timeline, or any questions..." rows={5}
                        style={{ ...iStyle("message"), resize: "vertical" }} />
                      {errMsg("message")}
                    </div>

                    {/* Server error */}
                    {serverError && (
                      <div style={{
                        padding: "14px 18px", background: "rgba(229,62,62,0.06)",
                        border: "1px solid rgba(229,62,62,0.25)", borderRadius: "6px",
                        fontSize: "14px", color: "#C53030", lineHeight: "1.6",
                      }}>
                        {serverError}
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      style={{
                        width: "100%", padding: "15px",
                        background: loading ? "var(--ink-light)" : "var(--saffron)",
                        color: "white", border: "none", borderRadius: "6px",
                         fontWeight: 700, fontSize: "16px",
                        cursor: loading ? "not-allowed" : "pointer", transition: "all 0.3s",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                      }}
                    >
                      {loading ? (
                        <>
                          <span style={{
                            width: "18px", height: "18px",
                            border: "2px solid rgba(255,255,255,0.35)", borderTopColor: "white",
                            borderRadius: "50%", animation: "spin 0.7s linear infinite", display: "inline-block",
                          }} />
                          Sending...
                        </>
                      ) : "Send Message →"}
                    </button>

                    <p style={{ fontSize: "12px", color: "var(--ink-light)", textAlign: "center" }}>
                      We respond within 2–4 hours · Mon–Sat · 9 am–7 pm IST
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
          @media (max-width: 500px)  { .form-row      { grid-template-columns: 1fr !important; } }
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
      </section>

      {/* ── LOCATION BAND ── */}
      <section style={{ padding: "60px 0", background: "var(--ink)", textAlign: "center" }}>
        <div className="container">
          <p className="font-deva" style={{ color: "var(--terracotta)", fontSize: "14px", letterSpacing: "3px", marginBottom: "8px" }}>हमारा ठिकाना</p>
          <h2 className="font-display" style={{ fontSize: "28px", fontWeight: 700, color: "var(--cream)", marginBottom: "8px" }}>
            Proudly Based in Bhawanipatna
          </h2>
          <p style={{ color: "rgba(250,246,239,0.55)", fontSize: "15px" }}>
            Kalahandi, Odisha, India – 766001 &nbsp;•&nbsp; Serving clients across India
          </p>
        </div>
      </section>
    </>
  );
}