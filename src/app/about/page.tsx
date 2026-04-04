import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us – Devance | Meet Sumesh Kumar Pradhan",
  description:
    "Learn about Devance, a digital web development agency founded by Sumesh Kumar Pradhan in Bhawanipatna, Kalahandi, Odisha. Our story, mission, and values.",
};

const values = [
  {
    icon: "🌿",
    title: "Rooted in Culture",
    desc: "We draw inspiration from Kalahandi's rich heritage — weaving the beauty of our land into every digital canvas we create.",
  },
  {
    icon: "⚡",
    title: "Obsessed with Performance",
    desc: "Speed is not a feature — it's a foundation. Every project leaves our studio blazing fast and production-ready.",
  },
  {
    icon: "🤝",
    title: "Honest Collaboration",
    desc: "We work with you, not just for you. Transparent timelines, clear communication, and no surprises.",
  },
  {
    icon: "🎨",
    title: "Design That Tells Stories",
    desc: "We believe great design is more than looks — it's a narrative that connects your brand to your audience emotionally.",
  },
];

const team = [
  {
    name: "Sumesh Kumar Pradhan",
    role: "Founder & Lead Developer",
    bio: "A self-taught developer from Bhawanipatna with a passion for building the web and bringing digital transformation to Kalahandi. Sumesh leads every project with a hands-on approach — from strategy to deployment.",
    skills: ["Next.js", "React", "TypeScript", "Supabase", "UI/UX", "SEO"],
    emoji: "👨‍💻",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          padding: "140px 0 80px",
          background: "linear-gradient(160deg, var(--ink) 0%, #3d1f12 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(200,75,31,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-80px",
            top: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            border: "100px solid rgba(200,75,31,0.08)",
          }}
        />
        <div className="container" style={{ position: "relative" }}>
          <p className="font-deva" style={{ color: "var(--terracotta)", fontSize: "14px", letterSpacing: "3px", marginBottom: "16px" }}>
            हमारी कहानी
          </p>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(40px, 6vw, 70px)",
              fontWeight: 900,
              color: "var(--cream)",
              lineHeight: 1.1,
              maxWidth: "700px",
              marginBottom: "24px",
            }}
          >
            Building the Digital Future
            <br />
            <span style={{ color: "var(--saffron)" }}>from Bhawanipatna.</span>
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "rgba(250,246,239,0.7)", maxWidth: "560px" }}>
            We are Devance — a small but mighty digital agency from the heart of Kalahandi, 
            Odisha. We believe that great web experiences shouldn&apos;t be exclusive to 
            metro cities.
          </p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section style={{ padding: "100px 0", background: "var(--cream)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
            }}
            className="two-col"
          >
            {/* Story visual */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4/5",
                  background: "linear-gradient(135deg, var(--cream-dark), var(--terracotta)22)",
                  borderRadius: "12px",
                  border: "1px solid rgba(200,75,31,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    fontSize: "180px",
                    opacity: 0.08,
                    fontFamily: "serif",
                    position: "absolute",
                    bottom: "-20px",
                    right: "-10px",
                  }}
                >
                  ॐ
                </div>
                <div style={{ textAlign: "center", padding: "40px" }}>
                  <div style={{ fontSize: "80px", marginBottom: "24px" }}>👨‍💻</div>
                  <div className="font-display" style={{ fontSize: "28px", fontWeight: 700, color: "var(--ink)" }}>
                    Sumesh Kumar Pradhan
                  </div>
                  <div style={{ color: "var(--saffron)", fontWeight: 600, marginTop: "8px" }}>
                    Founder & Lead Developer
                  </div>
                  <div className="font-deva" style={{ color: "var(--ink-light)", fontSize: "13px", marginTop: "8px" }}>
                    भवानीपटना, कलाहांडी
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  left: "-20px",
                  background: "var(--saffron)",
                  color: "white",
                  padding: "16px 24px",
                  borderRadius: "8px",
                  boxShadow: "0 8px 32px rgba(200,75,31,0.35)",
                }}
              >
                <div className="font-display" style={{ fontSize: "28px", fontWeight: 900 }}>3+</div>
                <div style={{ fontSize: "12px", opacity: 0.9 }}>Years of Excellence</div>
              </div>
            </div>

            {/* Story text */}
            <div>
              <p className="section-label">Our Origin Story</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>
                Started with a Dream,
                <br />Fuelled by Passion.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {[
                  "Devance was born in Bhawanipatna, Kalahandi — a region known for its vibrant culture, deep forests, and resilient people. Founder Sumesh Kumar Pradhan, a self-taught developer, saw that local businesses in Odisha were underserved when it came to quality digital presence.",
                  "With nothing but a laptop, a burning curiosity, and the rich creative heritage of Kalahandi behind him, Sumesh started building websites that blended modern technology with cultural authenticity.",
                  "Today, Devance has grown into a full-service digital agency — delivering Next.js applications, e-commerce platforms, and brand websites to clients across India. But our heart remains in Bhawanipatna.",
                ].map((para, i) => (
                  <p key={i} style={{ fontSize: "16px", lineHeight: "1.8", color: "var(--ink-light)" }}>
                    {para}
                  </p>
                ))}
              </div>
              <div style={{ marginTop: "36px", display: "flex", gap: "16px" }}>
                <Link href="/contact" className="btn-primary">Work With Us →</Link>
                <Link href="/portfolio" className="btn-outline">See Our Work</Link>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; gap: 40px !important; } }
        `}</style>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: "100px 0", background: "var(--cream-dark)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p className="section-label">What Drives Us</p>
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle" style={{ margin: "16px auto 0" }}>
              Four principles that guide every project we take on.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            {values.map((v) => (
              <div
                key={v.title}
                className="card"
                style={{ padding: "36px 28px", background: "var(--white)" }}
              >
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>{v.icon}</div>
                <h3 className="font-display" style={{ fontSize: "20px", fontWeight: 700, color: "var(--ink)", marginBottom: "12px" }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.7", color: "var(--ink-light)" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER PROFILE ── */}
      <section style={{ padding: "100px 0", background: "var(--cream)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p className="section-label">The Team</p>
            <h2 className="section-title">Meet the Founder</h2>
          </div>

          {team.map((member) => (
            <div
              key={member.name}
              className="card"
              style={{
                maxWidth: "780px",
                margin: "0 auto",
                padding: "48px",
                display: "flex",
                gap: "40px",
                alignItems: "flex-start",
              }}
              id="founder-card"
            >
              <div
                style={{
                  minWidth: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--saffron), var(--terracotta))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "48px",
                }}
              >
                {member.emoji}
              </div>
              <div style={{ flex: 1 }}>
                <h3 className="font-display" style={{ fontSize: "28px", fontWeight: 700, color: "var(--ink)", marginBottom: "4px" }}>
                  {member.name}
                </h3>
                <div style={{ color: "var(--saffron)", fontWeight: 600, marginBottom: "16px" }}>
                  {member.role}
                </div>
                <p style={{ fontSize: "15px", lineHeight: "1.8", color: "var(--ink-light)", marginBottom: "24px" }}>
                  {member.bio}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: "4px 14px",
                        background: "rgba(200,75,31,0.08)",
                        border: "1px solid rgba(200,75,31,0.2)",
                        borderRadius: "100px",
                        fontSize: "13px",
                        color: "var(--saffron)",
                        fontWeight: 500,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 600px) {
            #founder-card { flex-direction: column !important; align-items: center !important; text-align: center !important; padding: 32px !important; }
          }
        `}</style>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: "80px 0",
          background: "var(--saffron)",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2
            className="font-display"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "white", marginBottom: "16px" }}
          >
            Let&apos;s Build Something Amazing
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "17px", marginBottom: "36px" }}>
            From Kalahandi to the world — your next chapter starts here.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "white",
              color: "var(--saffron)",
              padding: "16px 36px",
              borderRadius: "4px",
              fontWeight: 700,
              fontSize: "16px",
              textDecoration: "none",
            }}
          >
            Start a Project →
          </Link>
        </div>
      </section>
    </>
  );
}