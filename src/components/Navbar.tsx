"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(250,246,239,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(200,75,31,0.15)"
          : "none",
        padding: scrolled ? "12px 0" : "20px 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span
              className="font-display"
              style={{
                fontSize: "26px",
                fontWeight: 900,
                color: "var(--saffron)",
                letterSpacing: "-0.5px",
              }}
            >
              Devance
            </span>
            <span
              className="font-deva"
              style={{
                fontSize: "10px",
                color: "var(--ink-light)",
                letterSpacing: "1px",
              }}
            >
              भवानीपटना से दुनिया तक
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: "36px", alignItems: "center" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                textDecoration: "none",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: pathname === link.href ? 600 : 400,
                fontSize: "15px",
                color: pathname === link.href ? "var(--saffron)" : "var(--ink)",
                position: "relative",
                paddingBottom: "4px",
                transition: "color 0.2s",
              }}
              className="nav-link"
            >
              {link.label}
              {pathname === link.href && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "var(--saffron)",
                    borderRadius: "2px",
                  }}
                />
              )}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ padding: "10px 24px", fontSize: "14px" }}>
            Let&apos;s Talk →
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--ink)",
            fontSize: "24px",
          }}
          className="hamburger"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--cream)",
            borderTop: "1px solid rgba(200,75,31,0.15)",
            padding: "20px 24px 32px",
            marginTop: "12px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                textDecoration: "none",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                color: pathname === link.href ? "var(--saffron)" : "var(--ink)",
                borderBottom: "1px solid rgba(200,75,31,0.08)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{ marginTop: "20px", display: "inline-flex" }}
          >
            Let&apos;s Talk →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}