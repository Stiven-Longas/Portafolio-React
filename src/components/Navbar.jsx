import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const links = [
  { to: "inicio", label: "Inicio" },
  { to: "sobremi", label: "Sobre Mí" },
  { to: "skills", label: "Skills" },
  { to: "curriculum", label: "Curriculum" },
  { to: "portafolio", label: "Portafolio" },
  { to: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 40px",
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(4,8,15,0.95)" : "rgba(4,8,15,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
        transition: "background .3s",
      }}
    >
      {/* Logo */}
      <Link
        to="inicio"
        smooth
        duration={500}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "22px",
          fontWeight: 900,
          color: "var(--cyan)",
          textDecoration: "none",
          letterSpacing: "4px",
          textShadow: "var(--glow-sm)",
          cursor: "none",
        }}
      >
        HS
      </Link>

      {/* Links escritorio */}
      <ul
        style={{
          display: menuOpen ? "none" : "flex",
          gap: "32px",
          listStyle: "none",
        }}
        className="nav-desktop"
      >
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              smooth
              duration={500}
              offset={-70}
              style={{
                color: "var(--text-dim)",
                textDecoration: "none",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                cursor: "none",
                transition: "color .3s",
              }}
              activeStyle={{ color: "var(--cyan)" }}
              onMouseEnter={(e) => (e.target.style.color = "var(--cyan)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--text-dim)")}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Botón menú móvil */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: "1px solid var(--border-bright)",
          color: "var(--cyan)",
          padding: "8px 12px",
          cursor: "none",
          fontSize: "16px",
          display: "none",
        }}
        className="nav-mobile-btn"
      >
        <i className={`fa-solid ${menuOpen ? "fa-x" : "fa-bars"}`}></i>
      </button>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <ul
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            right: 0,
            background: "rgba(4,8,15,0.97)",
            padding: "24px",
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            borderBottom: "1px solid var(--border)",
            zIndex: 99,
          }}
        >
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "var(--text-dim)",
                  textDecoration: "none",
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  cursor: "none",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
