
const whatsappLink =
  'https://wa.me/523535367398?text=Hola%20La%20Trufer%C3%ADa%2C%20quiero%20hacer%20un%20pedido';
const instagramLink = 'https://www.instagram.com/latruferia.shy/';
const facebookLink = 'https://www.facebook.com/latruferia.shy';
const tiktokLink = 'https://www.tiktok.com/@latruferia.shy';
const emailAddress = 'latruferiasahuayo@gmail.com';

function SocialIcon({ platform }) {
  if (platform === 'instagram') {
    return (
      <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 1.9a3.9 3.9 0 0 0-3.9 3.9v8.4a3.9 3.9 0 0 0 3.9 3.9h8.4a3.9 3.9 0 0 0 3.9-3.9V7.8a3.9 3.9 0 0 0-3.9-3.9H7.8Zm9.08 1.45a1.17 1.17 0 1 1 0 2.34 1.17 1.17 0 0 1 0-2.34ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Z" />
      </svg>
    );
  }

  if (platform === 'facebook') {
    return (
      <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 22v-8.18h2.8l.42-3.26h-3.22V8.48c0-.95.27-1.59 1.62-1.59h1.73V3.97A22.2 22.2 0 0 0 14.32 3c-2.5 0-4.22 1.53-4.22 4.35v2.43H7.27v3.26h2.83V22h3.4Z" />
      </svg>
    );
  }

  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16.6 3.2c.2 1.5 1 2.7 2.3 3.5.9.6 1.9.8 3.1.8v3.1c-1.3 0-2.6-.3-3.7-.9v6.3a6 6 0 1 1-5-5.9v3.2a2.8 2.8 0 1 0 1.8 2.7V2h1.5Z" />
    </svg>
  );
}

function Contacto() {
  return (
    <>
      <style>{contactoStyles}</style>
      <section className="section section-tint" id="contacto">
        <div className="container">
          <div className="section-head compact-head">
            <h2>Contacto</h2>
            <p>Cotiza en minutos y asegura tu fecha de entrega para tu próximo evento.</p>
          </div>

          <article className="card contact-offer">
            <p className="contact-kicker">Respuesta rápida por WhatsApp</p>
            <h3>Haz tu pedido hoy y recibe atención personalizada</h3>
            <p>
              Te ayudamos a definir sabores, cantidades y presentación según tu presupuesto para que tu
              mesa de postres se vea espectacular.
            </p>
            <div className="contact-points" aria-label="Ventajas de contacto">
              <span>Asesoría sin costo</span>
              <span>Entrega en Sahuayo</span>
              <span>Diseños por temática</span>
            </div>
            <div className="contact-actions">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-large">
                Cotizar por WhatsApp
              </a>
            </div>
          </article>

          <div className="contact-grid">
            <article className="card contact-card">
              <h4>Redes y contacto directo</h4>
              <p>Si prefieres, también puedes escribirnos por correo o redes sociales.</p>
              <div className="contact-actions">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn">
                  WhatsApp
                </a>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost social-link"
                >
                  <SocialIcon platform="instagram" />
                  Instagram
                </a>
                <a href={facebookLink} target="_blank" rel="noreferrer" className="btn btn-ghost social-link">
                  <SocialIcon platform="facebook" />
                  Facebook
                </a>
                <a href={tiktokLink} target="_blank" rel="noreferrer" className="btn btn-ghost social-link">
                  <SocialIcon platform="tiktok" />
                  TikTok
                </a>
              </div>
            </article>

            <article className="card contact-card">
              <h4>Información</h4>
              <ul className="info-list">
                <li>
                  <strong>Ubicación:</strong> Alfredo Gutiérrez 364, Sahuayo, México, 59028.
                </li>
                <li>
                  <strong>Horario:</strong> Lunes a sábado, 10:00 a 19:00.
                </li>
                <li>
                  <strong>Entrega:</strong> Servicio a domicilio en Sahuayo.
                </li>
                <li>
                  <strong>Correo:</strong>{' '}
                  <a href={`mailto:${emailAddress}`} className="info-email">
                    {emailAddress}
                  </a>
                </li>
                <li>
                  <strong>Tiempo de respuesta:</strong> Vía WhatsApp lo antes posible.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacto;

const contactoStyles = `
.contact-offer {
  margin-bottom: 1rem;
  border-radius: 24px;
  padding: 1.05rem;
  border: 1px solid rgba(199, 160, 214, 0.42);
  background:
    radial-gradient(circle at 90% 10%, rgba(246, 226, 156, 0.32), transparent 40%),
    linear-gradient(130deg, rgba(235, 215, 239, 0.72), rgba(255, 255, 255, 0.88));
}

.contact-kicker {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--choco-800);
}

.contact-offer h3 {
  margin: 0.35rem 0 0;
  color: var(--choco-900);
  font-size: clamp(1.3rem, 2.4vw, 1.85rem);
}

.contact-offer p {
  margin: 0.65rem 0 0;
  color: var(--muted);
  max-width: 75ch;
}

.contact-points {
  margin-top: 0.85rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.contact-points span {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 0.34rem 0.62rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--choco-900);
  border: 1px solid rgba(74, 42, 31, 0.14);
  background: rgba(255, 255, 255, 0.7);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.contact-card {
  border-radius: 20px;
  padding: 1.1rem;
}

.contact-card h4 {
  margin: 0;
  color: var(--choco-900);
}

.contact-card p {
  margin: 0.45rem 0 0;
  color: var(--muted);
}

.contact-actions {
  margin-top: 0.9rem;
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.social-icon {
  width: 1rem;
  height: 1rem;
  flex: 0 0 1rem;
  fill: currentColor;
}

.info-list {
  margin: 0.7rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.55rem;
  color: var(--muted);
}

.info-email {
  color: var(--choco-900);
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 2px;
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .contact-offer {
    padding: 0.95rem;
  }

  .contact-card {
    padding: 0.95rem;
  }
}

`;
