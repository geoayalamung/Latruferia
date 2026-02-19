
const whatsappLink =
  'https://wa.me/523535367398?text=Hola%20La%20Trufer%C3%ADa%2C%20quiero%20hacer%20un%20pedido';
const phoneLink = 'tel:+523535367398';
const phoneLabel = '+52 353 536 7398';
const instagramLink = 'https://www.instagram.com/latruferia.shy/';
const facebookLink = 'https://www.facebook.com/latruferia.shy';
const tiktokLink = 'https://www.tiktok.com/@latruferia92';
const emailAddress = 'latruferiasahuayo@gmail.com';

function SocialIcon({ platform }) {
  if (platform === 'whatsapp') {
    return (
      <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.2a9.7 9.7 0 0 0-8.4 14.5L2 22l5.5-1.44A9.8 9.8 0 1 0 12 2.2Zm0 17.72c-1.43 0-2.83-.4-4.03-1.14l-.29-.17-3.26.85.87-3.18-.19-.32a8.02 8.02 0 1 1 6.9 3.96Zm4.48-5.95c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06a6.58 6.58 0 0 1-1.94-1.2 7.25 7.25 0 0 1-1.34-1.66c-.14-.24-.02-.37.1-.5.1-.1.24-.26.36-.4.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.24 1.02.38 1.37.48.58.18 1.1.15 1.51.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    );
  }

  if (platform === 'phone') {
    return (
      <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.62 3.3c.28-.68 1.02-1.04 1.73-.86l2.23.56c.73.18 1.2.88 1.11 1.63l-.3 2.48c-.06.5-.4.92-.88 1.07l-1.3.42a12.3 12.3 0 0 0 6.18 6.18l.42-1.3c.15-.48.57-.82 1.07-.88l2.48-.3c.75-.09 1.45.38 1.63 1.11l.56 2.23c.18.71-.18 1.45-.86 1.73l-1.92.8c-.6.25-1.28.3-1.92.14a18.4 18.4 0 0 1-5.65-2.55 18.73 18.73 0 0 1-4.35-4.35 18.4 18.4 0 0 1-2.55-5.65 2.6 2.6 0 0 1 .14-1.92l.8-1.92Z" />
      </svg>
    );
  }

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
        <div className="best-hero" role="img" aria-label="Contacto La Trufería">
          <div className="best-hero-overlay">
            <div className="best-hero-content">
              <h2 className="best-hero-title">Contacto</h2>
              <p className="best-hero-subtitle">
                Cotiza en minutos y asegura tu fecha de entrega para tu próximo evento.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <article className="card contact-offer">
            <div className="contact-offer-main">
              <div className="contact-offer-copy">
                <h3>Haz tu pedido hoy y recibe atención personalizada</h3>
                <p>
                  Te ayudamos a definir sabores, cantidades y presentación según tu presupuesto para que tu
                  mesa de postres se vea espectacular.
                </p>

              </div>
              <div className="contact-actions contact-offer-actions">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-large">
                  <SocialIcon platform="whatsapp" />
                  Cotizar por WhatsApp
                </a>
                <a href={phoneLink} className="btn btn-ghost">
                  <SocialIcon platform="phone" />
                  Llamar ahora
                </a>
              </div>
            </div>
          </article>

          <div className="contact-grid">
            <article className="card contact-card">
              <h4>Redes y contacto directo</h4>
              <p>Resolvemos dudas, cotizaciones y pedidos por mensaje directo.</p>
              <div className="contact-actions">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn">
                  <SocialIcon platform="whatsapp" />
                  WhatsApp
                </a>
                <a href={phoneLink} className="btn btn-ghost">
                  <SocialIcon platform="phone" />
                  Llamar
                </a>
              </div>

              <p className="social-title">Síguenos en redes:</p>
              <div className="social-grid">
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost social-link social-pill"
                >
                  <SocialIcon platform="instagram" />
                  Instagram
                </a>
                <a href={facebookLink} target="_blank" rel="noreferrer" className="btn btn-ghost social-link social-pill">
                  <SocialIcon platform="facebook" />
                  Facebook
                </a>
                <a href={tiktokLink} target="_blank" rel="noreferrer" className="btn btn-ghost social-link social-pill">
                  <SocialIcon platform="tiktok" />
                  TikTok
                </a>
              </div>
            </article>

            <article className="card contact-card">
              <h4>Información</h4>
              <ul className="info-list">
                <li>
                  <strong>Ubicación:</strong> Sahuayo,Michoacan
                </li>
                <li>
                  <strong>Entrega:</strong> Servicio a domicilio en Sahuayo.
                </li>
                <li>
                  <strong>Teléfono:</strong>{' '}
                  <a href={phoneLink} className="info-email">
                    {phoneLabel}
                  </a>
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
  padding: 2rem;
  border: 1px solid rgba(199, 160, 214, 0.42);
  background:
    radial-gradient(circle at 90% 10%, rgba(246, 226, 156, 0.32), transparent 40%),
    linear-gradient(130deg, rgba(235, 215, 239, 0.72), rgba(255, 255, 255, 0.88));
}

.contact-offer-main {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;
  align-items: center;
}

.contact-offer-copy {
  min-width: 0;
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
  line-height: 1.2;
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
  align-items: stretch;
}

.contact-card {
  border-radius: 20px;
  padding: 1.15rem;
  display: grid;
  align-content: start;
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

.contact-actions .btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.contact-offer-actions {
  margin-top: 0;
  align-self: stretch;
  display: grid;
  align-content: center;
  gap: 0.55rem;
}

.contact-offer-actions .btn {
  justify-content: center;
  min-height: 46px;
}

.social-title {
  margin: 1.35rem 0 1.15rem;
  color: var(--choco-900);
  font-weight: 800;
  font-size: 0.95rem;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  padding-top: 0.2rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.38rem;
}

.social-pill {
  min-height: 38px;
  padding: 0.2rem 0.35rem;
  font-size: 0.8rem;
  font-weight: 700;
}

.social-icon {
  width: 0.98rem;
  height: 0.98rem;
  flex: 0 0 0.98rem;
  fill: currentColor;
  opacity: 0.95;
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
  .contact-offer-main {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .contact-offer-actions {
    grid-template-columns: 1fr 1fr;
  }

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

  .contact-actions {
    gap: 0.55rem;
  }

  .contact-actions .btn {
    flex: 1 1 calc(50% - 0.28rem);
    min-width: 0;
    justify-content: center;
  }

  .contact-offer-actions {
    grid-template-columns: 1fr;
  }

  .social-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.4rem;
  }

  .social-pill {
    min-height: 36px;
    justify-content: center;
    padding: 0.38rem 0.28rem;
    font-size: 0.76rem;
  }
}

@media (max-width: 420px) {
  .contact-actions .btn {
    flex-basis: 100%;
  }

  .social-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .social-pill {
    justify-content: center;
    padding-inline: 0.24rem;
  }
}

`;
