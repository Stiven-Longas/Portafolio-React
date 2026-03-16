import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = "service_qzhe1qr";
const TEMPLATE_ID = "olscyvj";
const PUBLIC_KEY  = "Ys3m5PoWxzuwC2Uox";

const contactItems = [
  { icon: "fa-envelope",    label: "Email",     value: "longasstiven829@gmail.com" },
  { icon: "fa-phone",       label: "Teléfono",  value: "+57 310 330 1671" },
  { icon: "fa-location-dot",label: "Ubicación", value: "Gigante, Huila, Colombia" },
];

export default function Contacto() {
  const [form, setForm]     = useState({ nombre: "", email: "", asunto: "", mensaje: "" });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        nombre:  form.nombre,
        email:   form.email,
        asunto:  form.asunto,
        mensaje: form.mensaje,
      }, PUBLIC_KEY);

      setStatus("success");
      setForm({ nombre: "", email: "", asunto: "", mensaje: "" });
      setTimeout(() => setStatus(null), 4000);
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
      setTimeout(() => setStatus(null), 4000);
    }
  };

  const inputStyle = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    padding: "14px 16px",
    fontFamily: "var(--font-body)",
    fontSize: "15px",
    outline: "none",
    width: "100%",
    transition: "border-color .3s",
  };

  const labelStyle = {
    fontFamily: "var(--font-mono)",
    fontSize: "11px", letterSpacing: "2px",
    textTransform: "uppercase", color: "var(--text-dim)",
    marginBottom: "8px", display: "block"
  };

  return (
    <section id="contacto" style={{ background: "var(--bg2)" }}>
      <div className="section-inner">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <div className="section-label">Hablemos</div>
          <h2 className="section-title">Conta<span>cto</span></h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: window.innerWidth <= 768 ? "1fr" : "1fr 1.2fr", gap: window.innerWidth <= 768 ? "40px" : "60px", alignItems: "start" }}>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "#fff", marginBottom: "16px" }}>
              ¿Tienes un proyecto en mente?
            </h3>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--text-dim)", marginBottom: "32px" }}>
              Estoy disponible para proyectos freelance, colaboraciones o simplemente para conectar. ¡No dudes en escribirme!
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ borderColor: "var(--cyan)" }}
                  style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px", background: "var(--surface)", border: "1px solid var(--border)", transition: "border-color .3s" }}
                >
                  <div style={{ width: "44px", height: "44px", background: "rgba(0,245,255,.07)", border: "1px solid var(--border-bright)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--cyan)", fontSize: "18px", flexShrink: 0 }}>
                    <i className={`fa-solid ${item.icon}`}/>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "2px", color: "var(--text-dim)", textTransform: "uppercase" }}>{item.label}</div>
                    <div style={{ fontSize: "15px", color: "var(--text)", marginTop: "2px" }}>{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7, delay: .15 }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "grid", gridTemplateColumns: window.innerWidth <= 768 ? "1fr" : "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={labelStyle}>Nombre</label>
                  <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" required style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "var(--cyan)"}
                    onBlur={e  => e.target.style.borderColor = "var(--border)"}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="tu@email.com" required style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "var(--cyan)"}
                    onBlur={e  => e.target.style.borderColor = "var(--border)"}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Asunto</label>
                <input name="asunto" value={form.asunto} onChange={handleChange} placeholder="¿De qué se trata?" required style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "var(--cyan)"}
                  onBlur={e  => e.target.style.borderColor = "var(--border)"}
                />
              </div>

              <div>
                <label style={labelStyle}>Mensaje</label>
                <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Cuéntame sobre tu proyecto..." required rows={5}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={e => e.target.style.borderColor = "var(--cyan)"}
                  onBlur={e  => e.target.style.borderColor = "var(--border)"}
                />
              </div>

              <button type="submit" disabled={status === "loading"} style={{
                marginTop: "8px", fontFamily: "var(--font-mono)", fontSize: "13px",
                letterSpacing: "2px", textTransform: "uppercase",
                color: "var(--bg)", background: status === "success" ? "#00d4aa" : "var(--cyan)",
                border: "none", padding: "16px 32px", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                clipPath: "polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px))",
                transition: "box-shadow .3s, transform .2s, background .3s",
                fontWeight: 700, opacity: status === "loading" ? .7 : 1
              }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = "var(--glow)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
              >
                {status === "loading" && <><i className="fa-solid fa-spinner fa-spin"/> Enviando...</>}
                {status === "success" && <><i className="fa-solid fa-check"/> ¡Mensaje Enviado!</>}
                {status === "error"   && <><i className="fa-solid fa-xmark"/> Error, intenta de nuevo</>}
                {!status              && <><i className="fa-solid fa-paper-plane"/> Enviar Mensaje</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
