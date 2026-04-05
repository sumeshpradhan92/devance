import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 – Page Not Found | Devance",
  description: "The page you're looking for doesn't exist. Return to Devance homepage.",
};

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(160deg, var(--cream) 0%, var(--cream-dark) 100%)",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        padding: "40px 24px",
      }}
    >
      {/* Dot grid */}
      <div className="dot-grid" style={{ position: "absolute", inset: 0 }} />

      {/* Decorative rings */}
      <div style={{
        position: "absolute", top: "10%", left: "5%",
        width: "300px", height: "300px", borderRadius: "50%",
        border: "60px solid rgba(200,75,31,0.05)",
        animation: "float 7s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "5%",
        width: "200px", height: "200px", borderRadius: "50%",
        border: "40px solid rgba(212,168,83,0.08)",
        animation: "float 5s ease-in-out infinite reverse",
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Big 404 */}
        <div
          className="font-display"
          style={{
            fontSize: "clamp(100px, 20vw, 200px)",
            fontWeight: 900,
            lineHeight: 1,
            color: "var(--saffron)",
            opacity: 0.15,
            userSelect: "none",
            marginBottom: "-20px",
          }}
        >
          404
        </div>

        {/* Devanagari accent */}
        <p
          className="font-deva"
          style={{
            color: "var(--saffron)",
            fontSize: "14px",
            letterSpacing: "3px",
            marginBottom: "16px",
          }}
        >
          पृष्ठ नहीं मिला
        </p>

        <h1
          className="font-display"
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 900,
            color: "var(--ink)",
            marginBottom: "16px",
            lineHeight: 1.2,
          }}
        >
          Oops! This page got lost
          <br />
          <span style={{ color: "var(--saffron)" }}>in Kalahandi&apos;s forests.</span>
        </h1>

        <p style={{
          fontSize: "17px",
          color: "var(--ink-light)",
          lineHeight: "1.7",
          maxWidth: "440px",
          margin: "0 auto 40px",
        }}>
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Let&apos;s get you back on track.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn-primary">
            ← Back to Home
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact Us
          </Link>
        </div>

        {/* Quick links */}
        <div style={{ marginTop: "48px" }}>
          <p style={{ fontSize: "13px", color: "var(--ink-light)", marginBottom: "16px", letterSpacing: "1px", textTransform: "uppercase" }}>
            Quick Links
          </p>
          <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/portfolio", label: "Work" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "14px",
                  color: "var(--saffron)",
                  textDecoration: "none",
                  fontWeight: 600,
                  borderBottom: "1px solid transparent",
                  transition: "border-color 0.2s",
                }}
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}