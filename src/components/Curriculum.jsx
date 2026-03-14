import { motion } from "framer-motion";

const educacion = [
  {
    fecha: "2024 — 2026",
    titulo: "Tecnólogo en Análisis y Desarrollo de Software",
    lugar: "SENA — Centro Agroempresarial del Huila",
    desc: "Formación en desarrollo de software, análisis de sistemas, bases de datos y creación de aplicaciones web con tecnologías modernas.",
  },
];

const proyectos = [
  {
    fecha: "2025",
    titulo: "Portafolio Personal",
    lugar: "Proyecto Web",
    desc: "Desarrollo de portafolio personal con React y Node.js. Diseño futurista, animaciones con Framer Motion y formulario de contacto funcional.",
  },
  {
    fecha: "2024",
    titulo: "Primer Proyecto Web",
    lugar: "Proyecto SENA",
    desc: "Desarrollo de aplicación web como proyecto académico del programa de formación en ADSO.",
  },
];

function TimelineItem({ fecha, titulo, lugar, desc, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7, delay }}
      style={{
        position: "relative",
        marginBottom: "36px",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        padding: "24px",
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = "var(--cyan-dim)"}
      onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
    >
      {/* Punto y línea del timeline */}
      <div style={{
        position: "absolute", left: "-28px", top: "24px",
        width: "10px", height: "10px",
        background: "var(--cyan)", borderRadius: "50%",
        boxShadow: "var(--glow-sm)"
      }}/>
      <div style={{
        position: "absolute", left: "-23px", top: "28px",
        width: "24px", height: "1px",
        background: "var(--cyan)", opacity: .5
      }}/>

      <span style={{
        fontFamily: "var(--font-mono)", fontSize: "11px",
        color: "var(--text-dim)", letterSpacing: "2px", display: "block",
        marginBottom: "6px"
      }}>
        {fecha}
      </span>
      <h4 style={{
        fontFamily: "var(--font-display)", fontSize: "14px",
        color: "#fff", marginBottom: "6px", letterSpacing: "1px"
      }}>
        {titulo}
      </h4>
      <span style={{
        color: "var(--cyan)", fontSize: "13px",
        fontWeight: 600, display: "block", marginBottom: "10px"
      }}>
        {lugar}
      </span>
      <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--text-dim)" }}>
        {desc}
      </p>
    </motion.div>
  );
}

function TimelineCol({ titulo, items }) {
  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
        style={{
          fontFamily: "var(--font-display)", fontSize: "18px",
          color: "var(--cyan)", marginBottom: "32px",
          letterSpacing: "2px", textTransform: "uppercase"
        }}
      >
        {titulo}
      </motion.h3>

      <div style={{ position: "relative", paddingLeft: "24px" }}>
        {/* Línea vertical */}
        <div style={{
          position: "absolute", top: "8px", left: 0, bottom: 0,
          width: "1px",
          background: "linear-gradient(to bottom, var(--cyan), transparent)"
        }}/>

        {items.map((item, i) => (
          <TimelineItem key={i} {...item} delay={i * .1} />
        ))}
      </div>
    </div>
  );
}

export default function Curriculum() {
  return (
    <section id="curriculum" style={{ background: "var(--bg2)" }}>
      <div className="section-inner">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <div className="section-label">Trayectoria</div>
          <h2 className="section-title">Curri<span>culum</span></h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>
          <TimelineCol titulo="// Educación"          items={educacion} />
          <TimelineCol titulo="// Proyectos Académicos" items={proyectos} />
        </div>

      </div>
    </section>
  );
}