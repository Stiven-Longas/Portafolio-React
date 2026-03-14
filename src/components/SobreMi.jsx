import { motion } from "framer-motion";

const datos = [
  { label: "Nacimiento", value: "27 — 04 — 2007" },
  { label: "Teléfono",   value: "+57 310 330 1671" },
  { label: "Email",      value: "longasstiven829@gmail.com" },
  { label: "Website",    value: "www.HSlongas.dev" },
  { label: "Ubicación",  value: "Gigante, Huila, Colombia" },
];

const intereses = [
  { icon: "fa-gamepad",    label: "Juegos" },
  { icon: "fa-headphones", label: "Música" },
  { icon: "fa-film",       label: "Películas" },
  { icon: "fa-plane",      label: "Viajar" },
  { icon: "fa-laptop-code",label: "Tecnología" },
  { icon: "fa-futbol",     label: "Fútbol" },
];

export default function SobreMi() {
  return (
    <section id="sobremi" style={{ background: "var(--bg2)" }}>
      <div className="section-inner">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <div className="section-label">Quien soy</div>
          <h2 className="section-title">Sobre <span>Mí</span></h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: window.innerWidth <= 768 ? "1fr" : "1fr 1fr", gap: window.innerWidth <= 768 ? "40px" : "60px" }}>

          {/* Texto + datos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >
            <p style={{ fontSize: "17px", lineHeight: 1.8, color: "var(--text-dim)", marginBottom: "20px" }}>
              <strong style={{ color: "var(--cyan)" }}>Hola, soy Hector.</strong> Soy
              desarrollador web Full Stack con pasión por crear interfaces modernas e
              intuitivas. Actualmente en formación como Tecnólogo en Análisis y
              Desarrollo de Software en el SENA.
            </p>
            <p style={{ fontSize: "17px", lineHeight: 1.8, color: "var(--text-dim)", marginBottom: "32px" }}>
              Me enfoco en escribir código limpio, aprender nuevas tecnologías y
              construir proyectos que resuelvan problemas reales.
            </p>

            {/* Lista de datos */}
            <ul style={{ listStyle: "none" }}>
              {datos.map((d, i) => (
                <li key={i} style={{
                  display: "flex", gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid var(--border)",
                  fontSize: "15px"
                }}>
                  <span style={{
                    color: "var(--cyan)", fontFamily: "var(--font-mono)",
                    fontSize: "12px", letterSpacing: "1px", minWidth: "110px"
                  }}>
                    {d.label}
                  </span>
                  <span style={{ color: "var(--text)" }}>{d.value}</span>
                </li>
              ))}
            </ul>

            <br />
            <a href="#" className="btn-primary" style={{ marginTop: "12px" }}>
              <i className="fa-solid fa-download"/> Descargar CV
            </a>
          </motion.div>

          {/* Intereses */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7, delay: .15 }}
          >
            <div className="section-label" style={{ marginBottom: "20px" }}>Intereses</div>
            <div style={{
              display: "grid",
              gridTemplateColumns: window.innerWidth <= 768 ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
              gap: "12px"
            }}>
              {intereses.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, borderColor: "var(--cyan)" }}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    padding: "20px 10px",
                    textAlign: "center",
                    cursor: "none",
                    clipPath: "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))",
                    transition: "box-shadow .3s"
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = "var(--glow-sm)"}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
                >
                  <i className={`fa-solid ${item.icon}`} style={{
                    fontSize: "26px", color: "var(--cyan)",
                    marginBottom: "8px", display: "block"
                  }}/>
                  <span style={{ fontSize: "13px", color: "var(--text-dim)", letterSpacing: "1px" }}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}