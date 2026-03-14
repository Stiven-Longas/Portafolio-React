import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const technicalSkills = [
  { name: "JavaScript", nivel: 75 },
  { name: "HTML & CSS",  nivel: 89 },
  { name: "React",       nivel: 75 },
  { name: "Node.js",     nivel: 70 },
  { name: "Photoshop",   nivel: 90 },
];

const professionalSkills = [
  { name: "Comunicación",      nivel: 85 },
  { name: "Trabajo en Equipo", nivel: 90 },
  { name: "Creatividad",       nivel: 99 },
  { name: "Dedicación",        nivel: 80 },
  { name: "Project Management",nivel: 70 },
];

const techStack = [
  { icon: "fa-brands fa-html5",    label: "HTML5",      color: "#e34f26" },
  { icon: "fa-brands fa-css3-alt", label: "CSS3",       color: "#1572b6" },
  { icon: "fa-brands fa-js",       label: "JavaScript", color: "#f7df1e" },
  { icon: "fa-brands fa-react",    label: "React",      color: "#61dafb" },
  { icon: "fa-brands fa-node-js",  label: "Node.js",    color: "#68a063" },
  { icon: "fa-brands fa-git-alt",  label: "Git",        color: "#f05032" },
  { icon: "fa-brands fa-github",   label: "GitHub",     color: "var(--text)" },
  { icon: "fa-solid fa-database",  label: "SQL",        color: "#336791" },
  { icon: "fa-brands fa-npm",      label: "NPM",        color: "#cb3837" },
];

function SkillBar({ name, nivel }) {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ marginBottom: "28px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--text)", letterSpacing: "1px" }}>
          {name}
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--cyan)" }}>
          {nivel}%
        </span>
      </div>
      <div style={{ height: "4px", background: "var(--surface2)", position: "relative" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: animate ? `${nivel}%` : 0 }}
          transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            height: "100%",
            background: "linear-gradient(90deg, var(--cyan-dark), var(--cyan))",
            boxShadow: "0 0 8px var(--cyan)",
            position: "relative"
          }}
        >
          <div style={{
            position: "absolute", right: 0, top: "50%",
            width: "10px", height: "10px",
            background: "var(--cyan)", borderRadius: "50%",
            transform: "translateY(-50%)",
            boxShadow: "var(--glow-sm)"
          }}/>
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--bg)" }}>
      <div className="section-inner">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <div className="section-label">Capacidades</div>
          <h2 className="section-title">Mis <span>Skills</span></h2>
        </motion.div>

        {/* Barras */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >
            <h3 style={{
              fontFamily: "var(--font-display)", fontSize: "18px",
              color: "var(--cyan)", marginBottom: "32px",
              letterSpacing: "2px", textTransform: "uppercase"
            }}>// Technical</h3>
            {technicalSkills.map((s, i) => <SkillBar key={i} {...s} />)}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7, delay: .15 }}
          >
            <h3 style={{
              fontFamily: "var(--font-display)", fontSize: "18px",
              color: "var(--cyan)", marginBottom: "32px",
              letterSpacing: "2px", textTransform: "uppercase"
            }}>// Professional</h3>
            {professionalSkills.map((s, i) => <SkillBar key={i} {...s} />)}
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7, delay: .25 }}
          style={{ marginTop: "60px" }}
        >
          <h3 style={{
            fontFamily: "var(--font-display)", fontSize: "18px",
            color: "var(--cyan)", marginBottom: "28px",
            letterSpacing: "2px", textTransform: "uppercase", textAlign: "center"
          }}>// Stack Tecnológico</h3>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, borderColor: "var(--cyan)" }}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  padding: "14px 20px",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", gap: "8px",
                  fontFamily: "var(--font-mono)", fontSize: "11px",
                  color: "var(--text-dim)", letterSpacing: "1px",
                  minWidth: "80px", cursor: "none",
                  clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))",
                  transition: "color .3s"
                }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--cyan)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text-dim)"}
              >
                <i className={tech.icon} style={{ fontSize: "28px", color: tech.color }}/>
                <span>{tech.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}