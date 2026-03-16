"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
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
        zIndex: 50,
        transition: "background-color 0.3s ease, border-color 0.3s ease",
        backgroundColor: scrolled ? "#f5f2eb" : "transparent",
        borderBottom: `1px solid ${scrolled ? "#d4cfc6" : "transparent"}`,
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "1.25rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href="#hero"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "1.1rem",
            fontWeight: 600,
            color: "#28281f",
            textDecoration: "none",
            letterSpacing: "0.01em",
          }}
        >
          Charbel Chávez
        </a>

        {/* Desktop nav */}
        <nav className="hidden sm:flex" style={{ gap: "2.5rem", display: "flex" }}>
          {links.map(({ label, href }) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="sm:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#28281f",
            padding: "0.25rem",
          }}
          aria-label="Menu"
        >
          <div style={{ width: 22, display: "flex", flexDirection: "column", gap: 5 }}>
            <span style={{ display: "block", height: 1, background: "#28281f", transition: "all 0.3s", transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none" }} />
            <span style={{ display: "block", height: 1, background: "#28281f", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", height: 1, background: "#28281f", transition: "all 0.3s", transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none" }} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="sm:hidden"
          style={{
            backgroundColor: "#f5f2eb",
            borderTop: "1px solid #d4cfc6",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
