import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Devance – Digital Web Development Agency | Bhawanipatna, Odisha",
  description:
    "Devance builds high-performance websites and web applications for Indian businesses. Based in Bhawanipatna, Kalahandi, Odisha. Modern design meets cultural identity.",
};

/* ─── Data ─────────────────────────────────── */
const services = [
  {
    icon: "◈",
    title: "Web Design",
    desc: "Pixel-perfect, culturally-aware designs that make your brand unforgettable across every screen.",
  },
  {
    icon: "⬡",
    title: "Web Development",
    desc: "Fast, scalable Next.js & React applications built for performance, SEO, and real business growth.",
  },
  {
    icon: "◉",
    title: "SEO Optimisation",
    desc: "Rank higher on Google with on-page, technical, and local SEO strategies built into every project.",
  },
  {
    icon: "⬢",
    title: "E-Commerce",
    desc: "Custom online stores that convert visitors into buyers — built on modern headless commerce stacks.",
  },
];

const stats = [
  { value: "48hr", label: "Avg Response Time" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "3Yr+", label: "Learning & Building" },
  { value: "15D", label: "Delivery Guarantee" },
];

const testimonials = [
  {
    name: "Rajesh Nayak",
    role: "Founder, NayakFoods",
    location: "Bhawanipatna",
    text: "Devance completely transformed our online presence. Our website now reflects who we truly are — modern yet rooted in our culture. Sales have gone up 40% since launch.",
  },
  {
    name: "Priya Mishra",
    role: "Director, KalahandiCrafts",
    location: "Kalahandi",
    text: "Sumesh and the Devance team understood our vision instantly. They brought a perfect blend of traditional Odia aesthetics and modern web design. Outstanding work!",
  },
  {
    name: "Amit Patel",
    role: "CEO, StartupBridge",
    location: "Bhubaneswar",
    text: "Professional, on-time, and genuinely passionate about their craft. Devance is the agency I recommend to every founder who asks me about web development in Odisha.",
  },
];

/* ─── Page Component ────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="mandala-bg"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(135deg, var(--cream) 0%, var(--cream-dark) 100%)",
          paddingTop: "100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dot grid background */}
        <div
          className="dot-grid"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        />

        {/* Floating shapes */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: "8%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            border: "60px solid rgba(200,75,31,0.06)",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "5%",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            border: "40px solid rgba(212,168,83,0.08)",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "780px" }}>
            {/* Deva badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(200,75,31,0.08)",
                border: "1px solid rgba(200,75,31,0.2)",
                borderRadius: "100px",
                padding: "6px 18px",
                marginBottom: "32px",
              }}
            >
              <span className="font-deva" style={{ color: "var(--saffron)", fontSize: "14px" }}>
                नमस्ते
              </span>
              <span
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "var(--saffron)",
                }}
              />
              <span style={{ fontSize: "13px", color: "var(--ink-light)", fontWeight: 500 }}>
                Digital Agency from Kalahandi
              </span>
            </div>

            <h1
              className="font-display"
              style={{
                fontSize: "clamp(40px, 7vw, 80px)",
                fontWeight: 900,
                color: "var(--ink)",
                lineHeight: 1.05,
                marginBottom: "24px",
              }}
            >
              We Build Websites
              <br />
              <span style={{ color: "var(--saffron)" }}>India Is Proud Of.</span>
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.75",
                color: "var(--ink-light)",
                marginBottom: "40px",
                maxWidth: "560px",
              }}
            >
              Devance is a Gen-Z digital agency from Bhawanipatna, Odisha — crafting 
              fast, modern, SEO-driven web experiences for brands ready to grow online.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/portfolio" className="btn-primary">
                View Our Work →
              </Link>
              <Link href="/contact" className="btn-outline">
                Start a Project
              </Link>
            </div>

            {/* Stats Row */}
            <div
              style={{
                display: "flex",
                gap: "40px",
                marginTop: "64px",
                marginBottom: "32px",
                flexWrap: "wrap",

              }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    className="font-display"
                    style={{
                      fontSize: "36px",
                      fontWeight: 900,
                      color: "var(--saffron)",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: "13px", color: "var(--ink-light)", marginTop: "4px" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rangoli decorative element */}
        <div
          className="font-deva"
          style={{
            position: "absolute",
            right: "5%",
            bottom: "12%",
            fontSize: "13px",
            color: "var(--saffron)",
            opacity: 0.5,
            letterSpacing: "3px",
            writingMode: "vertical-rl",
          }}
        >
          भवानीपटना • कलाहांडी • ओडिशा
        </div>
      </section>

      {/* ── SERVICES STRIP ── */}
      <section style={{ background: "var(--saffron)", padding: "16px 0", overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            gap: "48px",
            whiteSpace: "nowrap",
            animation: "marquee 20s linear infinite",
          }}
        >
          {[...Array(3)].flatMap(() =>
            ["Web Design", "SEO", "Next.js", "React", "UI/UX", "E-Commerce", "Branding", "Performance"].map((s) => (
              <span
                key={Math.random()}
                className="font-deva"
                style={{ color: "var(--white)", fontSize: "14px", letterSpacing: "2px", opacity: 0.9 }}
              >
                ◈ {s}
              </span>
            ))
          )}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
        `}</style>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: "100px 0", background: "var(--cream)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p className="section-label">What We Do</p>
            <h2 className="section-title">Services Built for Growth</h2>
            <p className="section-subtitle" style={{ margin: "16px auto 0" }}>
              From idea to launch — we handle every pixel, line of code, and SEO strategy.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
            }}
          >
            {services.map((s, i) => (
              <div
                key={s.title}
                className="card"
                style={{ padding: "40px 32px" }}
              >
                <div
                  style={{
                    fontSize: "32px",
                    color: "var(--saffron)",
                    marginBottom: "20px",
                    display: "block",
                  }}
                >
                  {s.icon}
                </div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "var(--ink)",
                    marginBottom: "12px",
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.7", color: "var(--ink-light)" }}>
                  {s.desc}
                </p>
                <div
                  style={{
                    marginTop: "24px",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--saffron)",
                    letterSpacing: "0.5px",
                  }}
                >
                  Learn more →
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/services" className="btn-outline">
              All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY DEVANCE ── */}
      <section
        style={{
          padding: "100px 0",
          background: "var(--ink)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            border: "80px solid rgba(200,75,31,0.1)",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
            }}
            className="two-col"
          >
            <div>
              <p className="section-label">Why Devance?</p>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 700,
                  color: "var(--cream)",
                  lineHeight: 1.2,
                  marginBottom: "24px",
                }}
              >
                A Local Agency with a
                <span style={{ color: "var(--saffron)" }}> Global Standard.</span>
              </h2>
              <p style={{ fontSize: "16px", lineHeight: "1.8", color: "rgba(250,246,239,0.7)", marginBottom: "32px" }}>
                We&apos;re not a big-city agency charging big-city prices. We&apos;re from 
                Bhawanipatna — and that means we bring honesty, dedication, and a 
                deep understanding of the Indian business landscape to every project.
              </p>
              <Link href="/about" className="btn-primary">
                Meet the Team →
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { emoji: "⚡", title: "Lightning Fast", desc: "Every site we build scores 90+ on Google PageSpeed." },
                { emoji: "🎯", title: "SEO First", desc: "Ranked content, clean code, and structured data from day one." },
                { emoji: "🤝", title: "Honest Pricing", desc: "No hidden costs. Clear deliverables. Local rates." },
                { emoji: "🌿", title: "Built to Scale", desc: "Modern tech stacks that grow with your business." },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                    padding: "20px 24px",
                    borderRadius: "8px",
                    background: "rgba(250,246,239,0.05)",
                    border: "1px solid rgba(250,246,239,0.08)",
                    transition: "all 0.3s",
                  }}
                >
                  <span style={{ fontSize: "24px" }}>{item.emoji}</span>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--cream)", marginBottom: "4px" }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "14px", color: "rgba(250,246,239,0.55)" }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; gap: 40px !important; } }
        `}</style>
      </section>

      {/* ── PORTFOLIO PREVIEW ── */}
      {/* <section style={{ padding: "100px 0", background: "var(--cream-dark)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <p className="section-label">Our Work</p>
              <h2 className="section-title">Projects We&apos;re Proud Of</h2>
            </div>
            <Link href="/portfolio" className="btn-outline">View All Work →</Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {[
              { title: "PhytoAI", category: "SaaS", color: "#E8A87C", link: "https://phytoai.site/"},
              { title: "HonestJob", category: "Brand Website", color: "#C84B1F", link: "https://honestjob.in/" },
              { title: "OdishaTrails", category: "Travel Portal", color: "#2D5016", link: "https://phytoai.site/" },
            ].map((project) => (
              <div
                key={project.title}
                className="card"
                style={{ overflow: "hidden", cursor: "pointer" }}
              >
                <div
                  style={{
                    height: "200px",
                    background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <span
                    className="font-display"
                    style={{ fontSize: "64px", opacity: 0.15, fontWeight: 900 }}
                  >
                    De.
                  </span>
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
                      letterSpacing: "1px",
                    }}
                  >
                    {project.category}
                  </div>
                </div>
                <div style={{ padding: "24px" }}>
                  <h3 className="font-display" style={{ fontSize: "20px", fontWeight: 700, color: "var(--ink)", marginBottom: "8px" }}>
                    {project.title}
                  </h3>
                  <Link style={{textDecoration: "none"}} href={project.link}>
                  <p style={{ fontSize: "14px", color: "var(--ink-light)" }}>
                    View case study →
                  </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "100px 0", background: "var(--cream)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p className="section-label">Client Love</p>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {testimonials.map((t) => (
              <div key={t.name} className="card" style={{ padding: "36px 32px" }}>
                <div style={{ fontSize: "32px", color: "var(--saffron)", marginBottom: "16px", fontFamily: "serif" }}>
                  &ldquo;
                </div>
                <p style={{ fontSize: "15px", lineHeight: "1.8", color: "var(--ink-light)", marginBottom: "24px" }}>
                  {t.text}
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, var(--saffron), var(--terracotta))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: 700,
                      fontSize: "16px",
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--ink)", fontSize: "15px" }}>{t.name}</div>
                    <div style={{ fontSize: "12px", color: "var(--ink-light)" }}>
                      {t.role} · {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: "100px 0",
          background: "linear-gradient(135deg, var(--saffron) 0%, var(--saffron-light) 100%)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container" style={{ position: "relative" }}>
          <p className="font-deva" style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", letterSpacing: "3px", marginBottom: "16px" }}>
            आइए मिलकर कुछ बनाएं
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(32px, 5vw, 60px)",
              fontWeight: 900,
              color: "white",
              marginBottom: "20px",
              lineHeight: 1.15,
            }}
          >
            Ready to Build Your
            <br />
            Dream Website?
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.85)", marginBottom: "40px" }}>
            Let&apos;s create something extraordinary together. No jargon, just results.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
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
                transition: "all 0.3s",
              }}
            >
              Get a Free Quote →
            </Link>
            <Link
              href="/portfolio"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                color: "white",
                padding: "16px 36px",
                borderRadius: "4px",
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.5)",
              }}
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}