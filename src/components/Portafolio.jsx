import { motion } from "framer-motion";

const proyectos = [
  {
    icon: "fa-solid fa-laptop-code",
    tags: ["HTML", "CSS", "JS"],
    titulo: "Portafolio Personal",
    desc: "Sitio web personal con diseño futurista, animaciones con Framer Motion y estructura responsive.",
    github: "https://github.com/Stiven-Longas/portafolio",
    demo: "#",
  },
  {
    icon: "fa-solid fa-store",
    tags: ["React", "Node.js"],
    titulo: "Proyecto Académico SENA",
    desc: "Aplicación web desarrollada como parte del programa de formación en Análisis y Desarrollo de Software.",
    github: "#",
    demo: "#",
  },
  {
    icon: "fa-solid fa-plus",
    tags: ["Próximamente"],
    titulo: "Tu Próximo Proyecto",
    desc: "Aquí irá tu próximo proyecto. ¡Sigue construyendo y llenando este espacio con tus creaciones!",
    github: null,
    demo: null,
  },
];

function ProjectCard({ icon, tags, titulo, desc, github, demo, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7, delay }}
      whileHover={{ y: -6, borderColor: "var(--cyan)" }}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        overflow: "hidden",
        clipPath: "polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))",
        transition: "border-color .3s",
        cursor: "none",
      }}
    >
      {/* Thumbnail */}
      <div style={{
        height: "180px",
        background: "linear-gradient(135deg, var(--bg3), var(--surface2))",
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, transparent 60%, var(--surface))"
        }}/>
        <i className={icon} style={{ fontSize: "48px", color: "var(--cyan)", opacity: .3 }}/>
      </div>

      {/* Body */}
      <div style={{ padding: "24px" }}>

        {/* Tags */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
          {tags.map((tag, i) => (
            <span key={i} style={{
              fontFamily: "var(--font-mono)", fontSize: "10px",
              letterSpacing: "1px", textTransform: "uppercase",
              color: "var(--cyan)", border: "1px solid rgba(0,245,255,.3)",
              padding: "3px 8px"
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Título */}
        <h3 style={{
          fontFamily: "var(--font-display)", fontSize: "16px",
          color: "#fff", marginBottom: "10px", letterSpacing: "1px"
        }}>
          {titulo}
        </h3>

        {/* Descripción */}
        <p style={{
          fontSize: "14px", lineHeight: 1.7,
          color: "var(--text-dim)", marginBottom: "20px"
        }}>
          {desc}
        </p>

        {/* Links */}
        <div style={{ display: "flex", gap: "12px" }}>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)", fontSize: "11px",
                letterSpacing: "1px", color: "var(--cyan)",
                textDecoration: "none", display: "flex",
                alignItems: "center", gap: "6px", transition: "opacity .3s"
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = ".7"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              <i className="fa-brands fa-github"/> Código
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)", fontSize: "11px",
                letterSpacing: "1px", color: "var(--cyan)",
                textDecoration: "none", display: "flex",
                alignItems: "center", gap: "6px", transition: "opacity .3s"
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = ".7"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              <i className="fa-solid fa-arrow-up-right-from-square"/> Demo
            </a>
          )}
          {!github && !demo && (
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: "11px",
              letterSpacing: "1px", color: "var(--text-dim)",
              display: "flex", alignItems: "center", gap: "6px"
            }}>
              <i className="fa-solid fa-code"/> En progreso...
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Portafolio() {
  return (
    <section id="portafolio" style={{ background: "var(--bg)" }}>
      <div className="section-inner">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <div className="section-label">Trabajos</div>
          <h2 className="section-title">Porta<span>folio</span></h2>
        </motion.div>

        {/* Grid de proyectos */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "24px"
        }}>
          {proyectos.map((p, i) => (
            <ProjectCard key={i} {...p} delay={i * .1} />
          ))}
        </div>

      </div>
    </section>
  );
}