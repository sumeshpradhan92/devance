'use client';
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--ink)",
        color: "var(--cream)",
        padding: "64px 0 28px",
      }}
    >
      <div className="container">
        {/* Top Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            gap: "48px",
            paddingBottom: "48px",
            borderBottom: "1px solid rgba(250,246,239,0.1)",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div className="font-display" style={{ fontSize: "28px", fontWeight: 900, color: "var(--saffron)", marginBottom: "8px" }}>
              Devance
            </div>
            <div className="font-deva" style={{ fontSize: "12px", color: "var(--terracotta)", marginBottom: "16px", letterSpacing: "1px" }}>
              भवानीपटना से दुनिया तक
            </div>
            <p style={{ fontSize: "14px", lineHeight: "1.7", color: "rgba(250,246,239,0.65)", maxWidth: "280px" }}>
              A digital web development agency rooted in the culture of Kalahandi, 
              building modern experiences for businesses across India and beyond.
            </p>
            <div style={{ marginTop: "24px", display: "flex", gap: "16px" }}>
              {["Twitter", "Instagram", "LinkedIn", "GitHub"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1px solid rgba(250,246,239,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--cream)",
                    fontSize: "12px",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--saffron)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--saffron)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(250,246,239,0.2)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--cream)";
                  }}
                  aria-label={s}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "var(--terracotta)", marginBottom: "20px" }}>
              Pages
            </h4>
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/portfolio", label: "Our Work" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  marginBottom: "10px",
                  textDecoration: "none",
                  fontSize: "14px",
                  color: "rgba(250,246,239,0.65)",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "var(--terracotta)", marginBottom: "20px" }}>
              Services
            </h4>
            {["Web Design", "Web Development", "SEO Optimisation", "UI/UX Design", "E-Commerce", "Maintenance"].map((s) => (
              <div
                key={s}
                style={{
                  marginBottom: "10px",
                  fontSize: "14px",
                  color: "rgba(250,246,239,0.65)",
                }}
              >
                {s}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "var(--terracotta)", marginBottom: "20px" }}>
              Get In Touch
            </h4>
            <div style={{ fontSize: "14px", color: "rgba(250,246,239,0.65)", lineHeight: "1.8" }}>
              <p>📍 Bhawanipatna, Kalahandi</p>
              <p>Odisha – 766001, India</p>
              <br />
              <p>
                <a href="mailto:hello@devance.in" style={{ color: "var(--terracotta)", textDecoration: "none" }}>
                  ✉ hello@devance.online
                </a>
              </p>
              <br />
              <Link href="/contact" className="btn-primary" style={{ padding: "10px 20px", fontSize: "13px", display: "inline-flex", marginTop: "8px" }}>
                Start a Project →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "28px",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "13px", color: "rgba(250,246,239,0.4)" }}>
            © {year} Devance. All rights reserved. Made with ❤️ in Bhawanipatna.
          </p>
          <p className="font-deva" style={{ fontSize: "13px", color: "rgba(250,246,239,0.3)" }}>
            कलाहांडी की कला, दुनिया की भाषा।
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}