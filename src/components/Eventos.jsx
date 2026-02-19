import { useEffect, useRef, useState } from 'react';

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
  const [activeIndex, setActiveIndex] = useState(null);
  const closeButtonRef = useRef(null);
  const lastTriggerRef = useRef(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (isOpen) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setEventoIndex((prev) => (prev + 1) % eventosImages.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [isOpen]);

  const goPrevEvento = () =>
    setEventoIndex((prev) => (prev - 1 + eventosImages.length) % eventosImages.length);
  const goNextEvento = () => setEventoIndex((prev) => (prev + 1) % eventosImages.length);
  const closeCarousel = () => {
    setActiveIndex(null);
    window.setTimeout(() => {
      if (lastTriggerRef.current) {
        lastTriggerRef.current.focus();
      }
    }, 0);
  };
  const openCarousel = (index, triggerElement) => {
    lastTriggerRef.current = triggerElement || document.activeElement;
    setActiveIndex(index);
  };
  const showPrev = () => {
    setActiveIndex((current) => (current - 1 + eventosImages.length) % eventosImages.length);
  };
  const showNext = () => {
    setActiveIndex((current) => (current + 1) % eventosImages.length);
  };

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollBarCompensation = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollBarCompensation > 0) {
      document.body.style.paddingRight = `${scrollBarCompensation}px`;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeCarousel();
      }
      if (event.key === 'ArrowRight') {
        showNext();
      }
      if (event.key === 'ArrowLeft') {
        showPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.requestAnimationFrame(() => {
      if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      }
    });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [isOpen]);

  return (
    <>
      <style>{eventosStyles}</style>
      <section className="section section-tint" id="eventos">
        <div className="best-hero" role="img" aria-label="Eventos de La Trufería">
          <div className="best-hero-overlay">
            <div className="best-hero-content">
              <h2 className="best-hero-title">Eventos</h2>
              <p className="best-hero-subtitle">
                Montajes personalizados para cumpleaños, bodas, regalos y celebraciones especiales.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
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
                <button
                  type="button"
                  className="eventos-image-open"
                  onClick={(event) => openCarousel(eventoIndex, event.currentTarget)}
                  aria-label={`Abrir foto ${eventoIndex + 1} de eventos`}
                >
                  <img
                    src={eventosImages[eventoIndex]}
                    alt={`Evento La Trufería ${eventoIndex + 1}`}
                    loading="lazy"
                  />
                </button>
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

      {isOpen && (
        <div className="eventos-lightbox" role="dialog" aria-modal="true" onClick={closeCarousel}>
          <div className="eventos-carousel" onClick={(event) => event.stopPropagation()}>
            <button
              className="eventos-close"
              type="button"
              ref={closeButtonRef}
              onClick={closeCarousel}
              aria-label="Cerrar carrusel de eventos"
            >
              ×
            </button>
            <button className="eventos-arrow left" type="button" onClick={showPrev} aria-label="Foto anterior">
              ‹
            </button>
            <img src={eventosImages[activeIndex]} alt={`Evento La Trufería ${activeIndex + 1}`} />
            <button className="eventos-arrow right" type="button" onClick={showNext} aria-label="Foto siguiente">
              ›
            </button>
            <p className="eventos-counter">
              {activeIndex + 1} / {eventosImages.length}
            </p>
          </div>
        </div>
      )}
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

.eventos-image-open {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  cursor: zoom-in;
}

.eventos-image-open::after {
  content: 'Toca para ampliar';
  position: absolute;
  right: 0.55rem;
  bottom: 0.55rem;
  border-radius: 999px;
  padding: 0.3rem 0.6rem;
  font-size: 0.72rem;
  font-weight: 700;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.26);
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.eventos-image-open img {
  transition: transform 0.32s ease, filter 0.32s ease;
}

.eventos-image-open:hover img {
  transform: scale(1.04);
  filter: saturate(1.05);
}

.eventos-image-open:hover::after,
.eventos-image-open:focus-visible::after {
  opacity: 1;
  transform: translateY(0);
}

.eventos-image-open:focus-visible {
  outline: 3px solid rgba(255, 255, 255, 0.85);
  outline-offset: -3px;
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
  z-index: 2;
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
  z-index: 3;
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
  z-index: 2;
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

.eventos-lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.82);
  display: grid;
  place-items: center;
  z-index: 999;
  padding: 1rem;
  animation: lightboxFadeIn 0.22s ease;
}

.eventos-carousel {
  position: relative;
  width: min(1120px, 96vw);
  max-height: 92vh;
  display: grid;
  place-items: center;
  padding: 0.85rem 3.1rem 2.2rem;
  border-radius: 20px;
  background: rgba(255, 248, 251, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  animation: lightboxPopIn 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}

.eventos-carousel img {
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 82vh;
  object-fit: contain;
  border-radius: 16px;
}

.eventos-arrow,
.eventos-close {
  position: absolute;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.36);
  color: var(--choco-900);
  cursor: pointer;
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.eventos-arrow {
  width: 44px;
  height: 44px;
  font-size: 2rem;
  line-height: 1;
  top: 50%;
  transform: translateY(-50%);
}

.eventos-arrow.left {
  left: 0.7rem;
}

.eventos-arrow.right {
  right: 0.7rem;
}

.eventos-close {
  top: 0.6rem;
  right: 0.6rem;
  width: 38px;
  height: 38px;
  font-size: 1.6rem;
  line-height: 1;
}

.eventos-counter {
  margin: 0.7rem 0 0;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.02em;
}

@keyframes lightboxFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes lightboxPopIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .eventos-lightbox,
  .eventos-carousel,
  .eventos-image-open img,
  .eventos-image-open::after {
    animation: none;
    transition: none;
  }
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
    background: linear-gradient(180deg, rgba(248, 241, 247, 0.88), rgba(255, 255, 255, 0.95));
  }

  .eventos-mini-carousel img {
    object-fit: contain;
    object-position: center;
  }

  .eventos-arrow {
    width: 40px;
    height: 40px;
    font-size: 1.8rem;
  }

  .eventos-carousel {
    width: 100%;
    padding: 0.6rem 2.6rem 2.1rem;
  }
}
`;
