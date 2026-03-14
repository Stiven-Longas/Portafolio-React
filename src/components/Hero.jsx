import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "React Developer",
  "Node.js Developer",
  "UI/UX Enthusiast",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Efecto typewriter
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 50 : 90;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex((r) => (r + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 40px 60px",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "80px",
          maxWidth: "1100px",
          width: "100%",
          zIndex: 1,
        }}
      >
        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flexShrink: 0,
            position: "relative",
            width: "260px",
            height: "260px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Orbit — detrás */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
                position: "absolute",
                margin: "auto",
                inset: 0,
                width: "320px",
                height: "320px",
                border: "1px solid rgba(0,245,255,.12)",
                borderRadius: "50%",
                zIndex: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-4px",
                left: "50%",
                width: "8px",
                height: "8px",
                background: "var(--cyan)",
                borderRadius: "50%",
                transform: "translateX(-50%)",
                boxShadow: "var(--glow-sm)",
              }}
            />
          </motion.div>

          {/* Imagen — encima */}
          <div
            style={{
              width: "260px",
              height: "260px",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Esquinas decorativas */}
            <div
              style={{
                position: "absolute",
                top: "-12px",
                left: "-12px",
                width: "60px",
                height: "60px",
                borderTop: "2px solid var(--cyan)",
                borderLeft: "2px solid var(--cyan)",
                boxShadow: "var(--glow-sm)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-12px",
                right: "-12px",
                width: "60px",
                height: "60px",
                borderBottom: "2px solid var(--cyan)",
                borderRight: "2px solid var(--cyan)",
                boxShadow: "var(--glow-sm)",
              }}
            />
            <img
              src="/hero.png"
              alt="Hector Longas"
              style={{
                width: "260px",
                height: "260px",
                objectFit: "cover",
                borderRadius: "4px",
                filter: "grayscale(20%) contrast(1.1)",
                display: "block",
              }}
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
        </motion.div>

        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ flex: 1 }}
        >
          {/* Tag */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--cyan)",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span
              style={{
                width: "40px",
                height: "1px",
                background: "var(--cyan)",
              }}
            />
            Desarrollador Web
          </div>

          {/* Nombre */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 58px)",
              fontWeight: 900,
              lineHeight: 1.1,
              color: "#fff",
              marginBottom: "12px",
            }}
          >
            Hector S.{" "}
            <span
              style={{
                color: "var(--cyan)",
                textShadow: "var(--glow)",
              }}
            >
              Longas
            </span>
          </h1>

          {/* Typewriter */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "16px",
              color: "var(--text-dim)",
              marginBottom: "28px",
              minHeight: "24px",
            }}
          >
            <span style={{ color: "var(--cyan)" }}>{text}</span>
            <span
              style={{
                display: "inline-block",
                width: "2px",
                height: "16px",
                background: "var(--cyan)",
                marginLeft: "2px",
                verticalAlign: "middle",
                animation: "blink .8s step-end infinite",
              }}
            />
          </div>

          {/* Descripción */}
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "var(--text-dim)",
              maxWidth: "460px",
              marginBottom: "36px",
            }}
          >
            Apasionado por construir experiencias web modernas. Especializado en
            desarrollo Full Stack con tecnologías como{" "}
            <strong style={{ color: "var(--cyan)" }}>React, Node.js</strong> y
            más. Siempre aprendiendo, siempre construyendo.
          </p>

          {/* Botones */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "36px",
            }}
          >
            <Link
              to="portafolio"
              smooth
              duration={500}
              offset={-70}
              className="btn-primary"
            >
              <i className="fa-solid fa-code" /> Ver Proyectos
            </Link>
            <Link
              to="contacto"
              smooth
              duration={500}
              offset={-70}
              className="btn-outline"
            >
              <i className="fa-solid fa-paper-plane" /> Contactar
            </Link>
          </div>

          {/* Redes sociales */}
          <div style={{ display: "flex", gap: "16px" }}>
            <a
              href="https://github.com/Stiven-Longas"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "42px",
                height: "42px",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-dim)",
                textDecoration: "none",
                fontSize: "16px",
                transition: "border-color .3s, color .3s",
                cursor: "pointer",
                pointerEvents: "all",
                zIndex: 9999,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--cyan)";
                e.currentTarget.style.color = "var(--cyan)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-dim)";
              }}
            >
              <i className="fa-brands fa-github" />
            </a>

            <a
              href="https://www.linkedin.com/in/stiven-longas-0525423aa/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "42px",
                height: "42px",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-dim)",
                textDecoration: "none",
                fontSize: "16px",
                transition: "border-color .3s, color .3s",
                cursor: "pointer",
                pointerEvents: "all",
                zIndex: 9999,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--cyan)";
                e.currentTarget.style.color = "var(--cyan)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-dim)";
              }}
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>

            <a
              href="https://wa.me/573103301671"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "42px",
                height: "42px",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-dim)",
                textDecoration: "none",
                fontSize: "16px",
                transition: "border-color .3s, color .3s",
                cursor: "pointer",
                pointerEvents: "all",
                zIndex: 9999,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--cyan)";
                e.currentTarget.style.color = "var(--cyan)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-dim)";
              }}
            >
              <i className="fa-brands fa-whatsapp" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Blink cursor keyframe */}
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </section>
  );
}
