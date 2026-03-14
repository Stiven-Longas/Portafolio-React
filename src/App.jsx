import { useEffect, useRef } from "react";
import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import SobreMi     from "./components/SobreMi";
import Skills      from "./components/Skills";
import Curriculum  from "./components/Curriculum";
import Portafolio  from "./components/Portafolio";
import Contacto    from "./components/Contacto";

function Cursor() {
  const cursorRef = useRef(null);
  const ringRef   = useRef(null);

  useEffect(() => {
    const onMove = e => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top  = e.clientY + "px";
      }
      setTimeout(() => {
        if (ringRef.current) {
          ringRef.current.style.left = e.clientX + "px";
          ringRef.current.style.top  = e.clientY + "px";
        }
      }, 80);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const base = {
    position: "fixed", borderRadius: "50%",
    pointerEvents: "none", zIndex: 9999,
    transform: "translate(-50%, -50%)"
  };

  return (
    <>
      <div ref={cursorRef} style={{
        ...base,
        width: "12px", height: "12px",
        background: "var(--cyan)",
        boxShadow: "var(--glow-sm)",
        pointerEvents: "none",
      }}/>
      <div ref={ringRef} style={{
        ...base,
        width: "36px", height: "36px",
        border: "1px solid rgba(0,245,255,.5)",
        zIndex: 9998,
        transition: "width .3s, height .3s",
        pointerEvents: "none",
      }}/>
    </>
  );
}

function Footer() {
  return (
    <footer style={{
      background: "var(--bg)",
      borderTop: "1px solid var(--border)",
      padding: "32px 40px",
      textAlign: "center"
    }}>
      <span style={{
        fontFamily: "var(--font-display)", fontSize: "24px",
        fontWeight: 900, color: "var(--cyan)", letterSpacing: "4px",
        textShadow: "var(--glow-sm)", display: "block", marginBottom: "16px"
      }}>
        HS
      </span>
      <p style={{
        fontFamily: "var(--font-mono)", fontSize: "12px",
        letterSpacing: "2px", color: "var(--text-dim)"
      }}>
        © 2025 — HECTOR S. LONGAS &nbsp;/&nbsp; DESARROLLADOR FULL STACK
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <SobreMi />
      <Skills />
      <Curriculum />
      <Portafolio />
      <Contacto />
      <Footer />
    </>
  );
}