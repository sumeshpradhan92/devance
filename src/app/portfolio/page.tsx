import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio – Devance | Web Projects from Bhawanipatna, Odisha",
  description:
    "Explore Devance's portfolio of web design, development, and e-commerce projects built for clients across Odisha and India. Modern, fast, and results-driven.",
};

const projects = [
  {
    id: 1,
    title: "KalahandiCrafts",
    category: "E-Commerce",
    tags: ["Next.js", "Supabase", "Razorpay"],
    description:
      "A full-stack e-commerce platform for handcrafted Kalahandi products — connecting local artisans to customers across India. Built with Next.js 14, Supabase, and Razorpay payment integration.",
    color: "#C84B1F",
    bg: "rgba(200,75,31,0.06)",
    year: "2024",
    outcome: "3x increase in online orders",
  },
  {
    id: 2,
    title: "NayakFoods",
    category: "Brand Website",
    tags: ["Next.js", "Tailwind", "SEO"],
    description:
      "A modern brand website for a Bhawanipatna-based food business. Focused on storytelling, local SEO, and a rich visual identity that reflects Odia food culture.",
    color: "#E8A87C",
    bg: "rgba(232,168,124,0.1)",
    year: "2024",
    outcome: "Top 3 Google rankings locally",
  },
  {
    id: 3,
    title: "OdishaTrails",
    category: "Travel Portal",
    tags: ["React", "TypeScript", "API"],
    description:
      "An interactive travel portal showcasing hidden gems across Odisha — Kalahandi, Koraput, and beyond. Features dynamic itinerary builders and local guide directories.",
    color: "#2D5016",
    bg: "rgba(45,80,22,0.06)",
    year: "2023",
    outcome: "Featured in local media",
  },
  {
    id: 4,
    title: "LegalBharat",
    category: "SaaS Platform",
    tags: ["Next.js", "PostgreSQL", "Auth"],
    description:
      "A legal document management platform built for small law firms in tier-2 Indian cities. Secure, fast, and fully accessible on mobile.",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.06)",
    year: "2024",
    outcome: "200+ users in first month",
  },
  {
    id: 5,
    title: "AyurGram",
    category: "Health & Wellness",
    tags: ["Next.js", "Supabase", "UI/UX"],
    description:
      "A wellness booking platform connecting users to Ayurvedic practitioners across Odisha. Clean, calming design paired with powerful booking infrastructure.",
    color: "#D4A853",
    bg: "rgba(212,168,83,0.08)",
    year: "2023",
    outcome: "4.9★ client rating",
  },
  {
    id: 6,
    title: "StartupBridge",
    category: "Corporate Website",
    tags: ["React", "Framer Motion", "CMS"],
    description:
      "A sleek corporate website for a Bhubaneswar-based startup ecosystem builder. Features animated case studies, investor pitch sections, and integrated blog.",
    color: "#1E40AF",
    bg: "rgba(30,64,175,0.06)",
    year: "2023",
    outcome: "Attracted 5 new investors",
  },
];

const filters = ["All", "E-Commerce", "Brand Website", "SaaS Platform", "Travel Portal", "Health & Wellness", "Corporate Website"];

export default function PortfolioPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          padding: "140px 0 80px",
          background: "linear-gradient(160deg, var(--cream) 0%, var(--cream-dark) 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="dot-grid"
          style={{ position: "absolute", inset: 0 }}
        />
        <div className="container" style={{ position: "relative" }}>
          <p className="font-deva" style={{ color: "var(--saffron)", fontSize: "14px", letterSpacing: "3px", marginBottom: "16px" }}>
            हमारा काम
          </p>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(38px, 6vw, 68px)",
              fontWeight: 900,
              color: "var(--ink)",
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            Projects That
            <br />
            <span style={{ color: "var(--saffron)" }}>Speak for Themselves.</span>
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "var(--ink-light)", maxWidth: "520px" }}>
            A curated selection of our web design, development, and digital 
            product work — built with care for clients across Odisha and India.
          </p>
        </div>
      </section>

      {/* ── PROJECTS GRID ── */}
      <section style={{ padding: "80px 0 100px", background: "var(--cream)" }}>
        <div className="container">

          {/* Filter bar */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "48px",
            }}
          >
            {filters.map((f) => (
              <span
                key={f}
                style={{
                  padding: "6px 18px",
                  borderRadius: "100px",
                  fontSize: "13px",
                  fontWeight: f === "All" ? 600 : 400,
                  background: f === "All" ? "var(--saffron)" : "transparent",
                  color: f === "All" ? "white" : "var(--ink-light)",
                  border: "1px solid",
                  borderColor: f === "All" ? "var(--saffron)" : "rgba(44,24,16,0.15)",
                  cursor: "pointer",
                }}
              >
                {f}
              </span>
            ))}
          </div>

          {/* Projects */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "28px" }}>
            {projects.map((project) => (
              <article
                key={project.id}
                className="card"
                style={{ overflow: "hidden" }}
              >
                {/* Project visual */}
                <div
                  style={{
                    height: "220px",
                    background: project.bg,
                    borderBottom: `3px solid ${project.color}22`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Year badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      fontSize: "12px",
                      color: project.color,
                      fontWeight: 600,
                      letterSpacing: "1px",
                    }}
                  >
                    {project.year}
                  </div>

                  {/* Category badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      background: project.color,
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "100px",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {project.category}
                  </div>

                  {/* Big letter watermark */}
                  <span
                    className="font-display"
                    style={{
                      fontSize: "120px",
                      fontWeight: 900,
                      color: project.color,
                      opacity: 0.12,
                      userSelect: "none",
                    }}
                  >
                    {project.title[0]}
                  </span>

                  {/* Outcome pill */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "16px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "rgba(255,255,255,0.9)",
                      border: `1px solid ${project.color}30`,
                      borderRadius: "100px",
                      padding: "4px 16px",
                      fontSize: "12px",
                      color: project.color,
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    ↑ {project.outcome}
                  </div>
                </div>

                {/* Project info */}
                <div style={{ padding: "28px" }}>
                  <h2
                    className="font-display"
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "var(--ink)",
                      marginBottom: "10px",
                    }}
                  >
                    {project.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.7",
                      color: "var(--ink-light)",
                      marginBottom: "20px",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: "3px 10px",
                          background: `${project.color}12`,
                          color: project.color,
                          borderRadius: "4px",
                          fontSize: "11px",
                          fontWeight: 600,
                          letterSpacing: "0.5px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: project.color,
                      cursor: "pointer",
                    }}
                  >
                    View Case Study →
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section style={{ padding: "72px 0", background: "var(--ink)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "32px",
              textAlign: "center",
            }}
            className="stats-grid"
          >
            {[
              { value: "30+", label: "Projects Delivered" },
              { value: "6+", label: "Industries Served" },
              { value: "15+", label: "Happy Clients" },
              { value: "100%", label: "On-Time Delivery" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="font-display"
                  style={{ fontSize: "48px", fontWeight: 900, color: "var(--saffron)", marginBottom: "8px", lineHeight: 1 }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: "14px", color: "rgba(250,246,239,0.55)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 600px) {
            .stats-grid { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "80px 0", background: "var(--cream)", textAlign: "center" }}>
        <div className="container">
          <p className="font-deva" style={{ color: "var(--saffron)", fontSize: "14px", letterSpacing: "3px", marginBottom: "12px" }}>
            अगली परियोजना
          </p>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            Your Project Could Be Next.
          </h2>
          <p style={{ fontSize: "17px", color: "var(--ink-light)", margin: "0 auto 36px", maxWidth: "460px" }}>
            We&apos;d love to learn about your vision and see how we can bring it to life.
          </p>
          <Link href="/contact" className="btn-primary">
            Let&apos;s Start Building →
          </Link>
        </div>
      </section>
    </>
  );
}