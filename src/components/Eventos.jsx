import { useEffect, useState } from 'react';

const whatsappLink =
  'https://wa.me/523535367398?text=Hola%20La%20Trufer%C3%ADa%2C%20quiero%20hacer%20un%20pedido%20para%20evento';

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

function Eventos() {
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
      <style>{eventosStyles}</style>
      <section className="section section-tint" id="eventos">
        <div className="container">
          <div className="section-head compact-head">
            <h2>Eventos</h2>
            <p>Montajes personalizados para cumpleaños, bodas, regalos y celebraciones especiales.</p>
          </div>

          <div className="eventos-hero card">
            <div className="eventos-copy">
              <p className="eventos-kicker">Servicio para eventos en Sahuayo</p>
              <h3>Diseñamos una propuesta a tu medida</h3>
              <p>
                Te ayudamos a elegir sabores, cantidades y presentación para que tu evento se vea y sepa
                inolvidable.
              </p>
              <div className="eventos-points" aria-label="Beneficios para eventos">
                <span>Personalización por temática</span>
                <span>Entrega puntual en Sahuayo</span>
                <span>Asesoría rápida por WhatsApp</span>
              </div>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-large">
                Cotizar evento por WhatsApp
              </a>
            </div>

            <div className="eventos-media">
              <div className="eventos-mini-carousel" aria-label="Galería de eventos">
                <img
                  src={eventosImages[eventoIndex]}
                  alt={`Evento La Trufería ${eventoIndex + 1}`}
                  loading="lazy"
                />
                <button
                  type="button"
                  className="eventos-control prev"
                  onClick={goPrevEvento}
                  aria-label="Foto anterior"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="eventos-control next"
                  onClick={goNextEvento}
                  aria-label="Foto siguiente"
                >
                  ›
                </button>
                <div className="eventos-dots" aria-hidden="true">
                  {eventosImages.map((_, idx) => (
                    <span key={idx} className={idx === eventoIndex ? 'dot is-active' : 'dot'} />
                  ))}
                </div>
                <span className="eventos-badge">Eventos La Trufería</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Eventos;

const eventosStyles = `
.eventos-hero {
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

.eventos-copy {
  padding: 1.1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.eventos-kicker {
  margin: 0 0 0.45rem;
  font-weight: 700;
  color: var(--choco-800);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.eventos-copy h3 {
  margin: 0;
  color: var(--choco-900);
  letter-spacing: -0.01em;
  font-size: clamp(1.4rem, 2.4vw, 1.9rem);
}

.eventos-copy p {
  margin: 0.75rem 0 0;
  color: var(--muted);
  max-width: 52ch;
}

.eventos-points {
  margin: 0.9rem 0 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.eventos-points span {
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

.eventos-media {
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

.eventos-badge {
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

.eventos-control {
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

.eventos-control.prev {
  left: 0.45rem;
}

.eventos-control.next {
  right: 0.45rem;
}

.eventos-dots {
  position: absolute;
  left: 50%;
  bottom: 0.45rem;
  transform: translateX(-50%);
  display: flex;
  gap: 0.3rem;
}

.eventos-dots .dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.55);
}

.eventos-dots .dot.is-active {
  background: #fff;
}

@media (max-width: 1024px) {
  .eventos-hero {
    grid-template-columns: 1fr;
  }

  .eventos-media {
    justify-self: start;
    width: min(420px, 100%);
  }

  .eventos-mini-carousel {
    aspect-ratio: 16 / 9;
  }
}

@media (max-width: 760px) {
  .eventos-copy {
    padding: 0.7rem 0.4rem;
  }

  .eventos-media {
    width: 100%;
  }

  .eventos-mini-carousel {
    aspect-ratio: 16 / 10;
  }
}
`;
