import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services – Devance | Web Design, Development & SEO in Odisha",
  description:
    "Devance offers web design, Next.js development, SEO optimisation, e-commerce, and UI/UX services in Bhawanipatna, Odisha. Affordable, modern, and results-driven.",
};

const services = [
  {
    icon: "🎨",
    number: "01",
    title: "Web Design",
    subtitle: "Visually stunning, culturally rooted interfaces",
    desc: "We design websites that don't just look good — they feel right. Our design process blends modern UI principles with the visual richness of Indian culture, creating experiences your visitors remember.",
    features: [
      "Custom UI/UX design from scratch",
      "Figma prototyping & wireframing",
      "Mobile-first, responsive layouts",
      "Brand identity integration",
      "Cultural aesthetics & typography",
    ],
    color: "var(--saffron)",
  },
  {
    icon: "💻",
    number: "02",
    title: "Web Development",
    subtitle: "Modern, fast, scalable tech stacks",
    desc: "We build with Next.js, React, TypeScript, and Supabase — the same technology powering some of the world's biggest platforms. Fast by default, SEO-optimised from day one.",
    features: [
      "Next.js / React application development",
      "TypeScript for robust, error-free code",
      "Supabase / PostgreSQL databases",
      "API integration & custom backends",
      "Deployment on Vercel / AWS",
    ],
    color: "var(--ink)",
  },
  {
    icon: "📈",
    number: "03",
    title: "SEO Optimisation",
    subtitle: "Rank higher, reach further",
    desc: "Search engine optimisation isn't an afterthought — it's built into everything we do. From technical SEO to content structure, we help you rank where your customers are searching.",
    features: [
      "On-page SEO & meta optimisation",
      "Technical SEO audits",
      "Local SEO for Indian businesses",
      "Schema markup & structured data",
      "Core Web Vitals optimisation",
    ],
    color: "var(--forest)",
  },
  {
    icon: "🛒",
    number: "04",
    title: "E-Commerce",
    subtitle: "Sell more with a store built to convert",
    desc: "We build custom e-commerce experiences — not templated, not cookie-cutter. From product catalogues to payment integration, your online store will be built to perform.",
    features: [
      "Custom e-commerce development",
      "Payment gateway integration (Razorpay, Stripe)",
      "Product management systems",
      "Inventory & order tracking",
      "Mobile-optimised checkout",
    ],
    color: "#8B5CF6",
  },
  {
    icon: "🔧",
    number: "05",
    title: "Website Maintenance",
    subtitle: "Keep your site fast, secure & up-to-date",
    desc: "Once your site is live, we stay with you. Monthly maintenance plans include performance monitoring, security updates, content changes, and priority support.",
    features: [
      "Monthly performance reports",
      "Security patches & updates",
      "Content updates & revisions",
      "Uptime monitoring",
      "Priority support via WhatsApp/Email",
    ],
    color: "var(--gold)",
  },
  {
    icon: "📱",
    number: "06",
    title: "UI/UX Consulting",
    subtitle: "Design audits & strategy for existing products",
    desc: "Already have a product but struggling with user experience? We audit, redesign, and improve your existing website or app to increase engagement and reduce drop-off.",
    features: [
      "UX audit & heatmap analysis",
      "Conversion rate optimisation",
      "Design system creation",
      "A/B testing strategy",
      "Accessibility improvements",
    ],
    color: "var(--terracotta)",
  },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "We listen. Understand your goals, audience, and business context before writing a single line of code." },
  { step: "02", title: "Strategy & Design", desc: "We craft a design prototype and technical blueprint tailored specifically to your brand." },
  { step: "03", title: "Development", desc: "Our team builds your project with clean, documented code using the latest modern tech stack." },
  { step: "04", title: "Review & Launch", desc: "You review, we refine. Once you&apos;re thrilled, we deploy to production and go live." },
  { step: "05", title: "Support & Growth", desc: "Post-launch, we stay available. Maintenance, updates, and growth features — we&apos;ve got you." },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          padding: "140px 0 80px",
          background: "var(--cream-dark)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="dot-grid"
          style={{ position: "absolute", inset: 0, zIndex: 0 }}
        />
        <div className="container" style={{ position: "relative" }}>
          <p className="font-deva" style={{ color: "var(--saffron)", fontSize: "14px", letterSpacing: "3px", marginBottom: "16px" }}>
            हमारी सेवाएं
          </p>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(38px, 6vw, 68px)",
              fontWeight: 900,
              color: "var(--ink)",
              lineHeight: 1.1,
              maxWidth: "700px",
              marginBottom: "24px",
            }}
          >
            Services That Move
            <br />
            <span style={{ color: "var(--saffron)" }}>Your Business Forward.</span>
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "var(--ink-light)", maxWidth: "520px" }}>
            From design to deployment — full-service digital solutions crafted 
            with care, precision, and a deep understanding of the Indian market.
          </p>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section style={{ padding: "100px 0", background: "var(--cream)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {services.map((service, i) => (
              <div
                key={service.title}
                className="card"
                style={{
                  padding: "48px",
                  display: "grid",
                  gridTemplateColumns: "80px 1fr 1.2fr",
                  gap: "40px",
                  alignItems: "flex-start",
                }}
                id="service-row"
              >
                {/* Number */}
                <div>
                  <div
                    className="font-display"
                    style={{
                      fontSize: "48px",
                      fontWeight: 900,
                      color: service.color,
                      opacity: 0.25,
                      lineHeight: 1,
                    }}
                  >
                    {service.number}
                  </div>
                  <div style={{ fontSize: "40px", marginTop: "8px" }}>{service.icon}</div>
                </div>

                {/* Main info */}
                <div>
                  <h2
                    className="font-display"
                    style={{ fontSize: "28px", fontWeight: 700, color: "var(--ink)", marginBottom: "8px" }}
                  >
                    {service.title}
                  </h2>
                  <p style={{ color: service.color, fontWeight: 600, marginBottom: "16px", fontSize: "15px" }}>
                    {service.subtitle}
                  </p>
                  <p style={{ fontSize: "15px", lineHeight: "1.8", color: "var(--ink-light)" }}>
                    {service.desc}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: "16px" }}>
                    What&apos;s included
                  </p>
                  {service.features.map((f) => (
                    <div
                      key={f}
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "flex-start",
                        marginBottom: "10px",
                      }}
                    >
                      <span style={{ color: service.color, fontSize: "12px", marginTop: "4px", flexShrink: 0 }}>◈</span>
                      <span style={{ fontSize: "14px", color: "var(--ink-light)", lineHeight: "1.6" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            #service-row { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ padding: "100px 0", background: "var(--ink)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p className="section-label">How We Work</p>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "var(--cream)", lineHeight: 1.2 }}
            >
              Our Process
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {process.map((step, i) => (
              <div
                key={step.step}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: "32px",
                  alignItems: "flex-start",
                  paddingBottom: i < process.length - 1 ? "0" : "0",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: "var(--saffron)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    {step.step}
                  </div>
                  {i < process.length - 1 && (
                    <div
                      style={{
                        width: "2px",
                        height: "60px",
                        background: "rgba(200,75,31,0.3)",
                        margin: "8px 0",
                      }}
                    />
                  )}
                </div>
                <div style={{ paddingTop: "12px", paddingBottom: i < process.length - 1 ? "32px" : "0" }}>
                  <h3 className="font-display" style={{ fontSize: "22px", fontWeight: 700, color: "var(--cream)", marginBottom: "8px" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "15px", lineHeight: "1.7", color: "rgba(250,246,239,0.65)" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING CTA ── */}
      <section style={{ padding: "80px 0", background: "var(--cream)", textAlign: "center" }}>
        <div className="container">
          <p className="section-label">Transparent Pricing</p>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            No Hidden Costs. Ever.
          </h2>
          <p style={{ fontSize: "17px", color: "var(--ink-light)", marginBottom: "36px", maxWidth: "500px", margin: "16px auto 36px" }}>
            Every project is quoted clearly and honestly. Get in touch and 
            we&apos;ll send you a custom proposal within 24 hours.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Get a Free Quote →</Link>
            <Link href="/portfolio" className="btn-outline">See Our Work</Link>
          </div>
        </div>
      </section>
    </>
  );
}