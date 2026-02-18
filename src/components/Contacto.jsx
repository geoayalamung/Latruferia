
import { useEffect, useState } from 'react';

const whatsappLink =
  'https://wa.me/523535367398?text=Hola%20La%20Trufer%C3%ADa%2C%20quiero%20hacer%20un%20pedido';
const instagramLink = 'https://www.instagram.com/latruferia.shy/';
const facebookLink = 'https://www.facebook.com/profile.php?id=100076340313259';
const tiktokLink = 'https://www.tiktok.com/@latruferia.shy';
const emailAddress = 'latruferiasahuayo@gmail.com';
const emailLink = `mailto:${emailAddress}`;
const eventosImages = [
  '/Images/Eventos/evento4.jpg',
  '/Images/Eventos/evento.png',
  '/Images/Eventos/evento2.jpg',
  '/Images/Eventos/TrufasOjos.jpg',
  '/Images/Eventos/evento1.jpg',
  '/Images/Eventos/trufasVitrina.png',
  '/Images/Eventos/Halloween.jpg',
  '/Images/Eventos/tartasGelatinas.jpg',
  '/Images/Eventos/eventoBirthday.jpg',
  '/Images/Eventos/tartasEvento.jpg',
];

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
  const [eventoIndex, setEventoIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setEventoIndex((prev) => (prev + 1) % eventosImages.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  const goPrevEvento = () =>
    setEventoIndex((prev) => (prev - 1 + eventosImages.length) % eventosImages.length);
  const goNextEvento = () => setEventoIndex((prev) => (prev + 1) % eventosImages.length);

  return (
    <>
      <style>{contactoStyles}</style>
      <section className="section section-tint" id="contacto">
        <div className="container">
          <div className="contact-hero card">
            <div className="contact-hero-copy">
              <p className="contact-kicker">Pedidos para eventos en Sahuayo</p>
              <h2>Haz que tu evento se vea y sepa inolvidable</h2>
              <p>
                Diseñamos una propuesta a tu medida para cumpleaños, bodas, mesas de postres y regalos
                especiales, con entrega puntual y presentación premium.
              </p>
              <div className="marketing-points" aria-label="Beneficios">
                <span>Personalización por temática</span>
                <span>Servicio a domicilio en Sahuayo</span>
                <span>Asesoría rápida por WhatsApp</span>
              </div>
              <p className="service-note">Agenda con anticipación y asegura tu fecha de entrega.</p>
              <div className="contact-actions">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-large">
                  Cotizar por WhatsApp
                </a>
                <a href={emailLink} className="btn btn-ghost btn-large">
                  Enviar correo
                </a>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost btn-large social-link"
                >
                  <SocialIcon platform="instagram" />
                  Ver Instagram
                </a>
                <a
                  href={facebookLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost btn-large social-link"
                >
                  <SocialIcon platform="facebook" />
                  Ver Facebook
                </a>
                <a href={tiktokLink} target="_blank" rel="noreferrer" className="btn btn-ghost btn-large social-link">
                  <SocialIcon platform="tiktok" />
                  Ver TikTok
                </a>
              </div>
            </div>
            <div className="contact-hero-media">
              <div className="eventos-mini-carousel" aria-label="Galería de eventos">
                <img
                  src={eventosImages[eventoIndex]}
                  alt={`Evento La Trufería ${eventoIndex + 1}`}
                  loading="lazy"
                />
                <button
                  type="button"
                  className="carousel-control prev"
                  onClick={goPrevEvento}
                  aria-label="Foto anterior"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="carousel-control next"
                  onClick={goNextEvento}
                  aria-label="Foto siguiente"
                >
                  ›
                </button>
                <div className="carousel-dots" aria-hidden="true">
                  {eventosImages.map((_, idx) => (
                    <span key={idx} className={idx === eventoIndex ? 'dot is-active' : 'dot'} />
                  ))}
                </div>
                <span className="carousel-badge">Eventos reales La Trufería</span>
              </div>
            </div>
          </div>

          <div className="contact-grid">
            <article className="card contact-card">
              <h4>Contacto directo</h4>
              <p>Atención personalizada para pedidos, eventos y paquetes temáticos.</p>
              <div className="contact-actions">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn">
                  WhatsApp
                </a>
                <a href={emailLink} className="btn btn-ghost">
                  Correo
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
                  <a href={emailLink} className="info-email">
                    {emailAddress}
                  </a>
                </li>
                <li>
                  <strong>Respuesta:</strong> Te contestamos por WhatsApp lo antes posible.
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
.contact-hero {
  margin-bottom: 1.3rem;
  border-radius: 28px;
  border: 1px solid var(--border);
  padding: 1rem;
  background:
    radial-gradient(circle at right top, rgba(246, 226, 156, 0.45), transparent 48%),
    linear-gradient(130deg, var(--lavender-100), #fff 40%, var(--lavender-50));
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 1rem;
}

.contact-hero-copy {
  padding: 1.1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-kicker {
  margin: 0 0 0.45rem;
  font-weight: 700;
  color: var(--choco-800);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.contact-hero h2 {
  margin: 0;
  color: var(--choco-900);
  letter-spacing: -0.01em;
  font-size: clamp(1.75rem, 2.8vw, 2.35rem);
}

.contact-hero p {
  margin: 0.75rem 0 0;
  color: var(--muted);
  max-width: 52ch;
}

.marketing-points {
  margin-top: 0.9rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.marketing-points span {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 0.36rem 0.66rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--choco-900);
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(74, 42, 31, 0.14);
}

.service-note {
  margin: 0.75rem 0 0;
  font-size: 0.86rem;
  color: var(--choco-800);
  font-weight: 600;
}

.contact-hero-media {
  width: min(360px, 100%);
  justify-self: end;
  align-self: center;
}

.eventos-mini-carousel {
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(74, 42, 31, 0.14);
  box-shadow: var(--shadow-soft);
  aspect-ratio: 4 / 5;
}

.eventos-mini-carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.carousel-badge {
  position: absolute;
  left: 0.6rem;
  top: 0.6rem;
  border-radius: 999px;
  padding: 0.3rem 0.62rem;
  font-size: 0.74rem;
  font-weight: 700;
  color: #fff;
  background: rgba(74, 42, 31, 0.66);
  border: 1px solid rgba(255, 255, 255, 0.24);
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
  font-size: 1.2rem;
  line-height: 1;
  cursor: pointer;
}

.carousel-control.prev {
  left: 0.45rem;
}

.carousel-control.next {
  right: 0.45rem;
}

.carousel-dots {
  position: absolute;
  left: 50%;
  bottom: 0.45rem;
  transform: translateX(-50%);
  display: flex;
  gap: 0.3rem;
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.55);
}

.dot.is-active {
  background: #fff;
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
  .contact-hero {
    grid-template-columns: 1fr;
  }

  .contact-hero-media {
    justify-self: start;
    width: min(420px, 100%);
  }

  .eventos-mini-carousel {
    aspect-ratio: 16 / 9;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .contact-hero-copy {
    padding: 0.7rem 0.4rem;
  }

  .contact-hero-media {
    width: 100%;
  }

  .eventos-mini-carousel {
    aspect-ratio: 16 / 10;
  }
}

`;
