import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

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
  const isOpen = activeIndex !== null;

  const closeButtonRef = useRef(null);
  const lastTriggerRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchDeltaXRef = useRef(0);

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
  const closeCarousel = useCallback(() => {
    setActiveIndex(null);
    window.setTimeout(() => {
      if (lastTriggerRef.current) {
        lastTriggerRef.current.focus();
      }
    }, 0);
  }, []);

  const openCarousel = useCallback((index, triggerElement) => {
    lastTriggerRef.current = triggerElement || document.activeElement;
    setActiveIndex(index);
  }, []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) => (current - 1 + eventosImages.length) % eventosImages.length);
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % eventosImages.length);
  }, []);

  const handleTouchStart = useCallback((event) => {
    const touch = event.touches[0];
    if (!touch) return;
    touchStartXRef.current = touch.clientX;
    touchDeltaXRef.current = 0;
  }, []);

  const handleTouchMove = useCallback((event) => {
    const touch = event.touches[0];
    if (!touch) return;
    touchDeltaXRef.current = touch.clientX - touchStartXRef.current;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const threshold = 48;
    const deltaX = touchDeltaXRef.current;
    if (Math.abs(deltaX) >= threshold) {
      if (deltaX < 0) showNext();
      if (deltaX > 0) showPrev();
    }
    touchStartXRef.current = 0;
    touchDeltaXRef.current = 0;
  }, [showNext, showPrev]);

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
  }, [isOpen, closeCarousel, showNext, showPrev]);

  const shouldRenderLightbox = isOpen && activeIndex >= 0 && activeIndex < eventosImages.length;
  const lightbox = shouldRenderLightbox ? (
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
        <div
          className="eventos-media-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img src={eventosImages[activeIndex]} alt={`Evento La Trufería ${activeIndex + 1}`} decoding="async" />
        </div>
        <button className="eventos-arrow right" type="button" onClick={showNext} aria-label="Foto siguiente">
          ›
        </button>
        <p className="eventos-counter">
          {activeIndex + 1} / {eventosImages.length}
        </p>
      </div>
    </div>
  ) : null;

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
                <svg className="eventos-whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.2a9.7 9.7 0 0 0-8.4 14.5L2 22l5.5-1.44A9.8 9.8 0 1 0 12 2.2Zm0 17.72c-1.43 0-2.83-.4-4.03-1.14l-.29-.17-3.26.85.87-3.18-.19-.32a8.02 8.02 0 1 1 6.9 3.96Zm4.48-5.95c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06a6.58 6.58 0 0 1-1.94-1.2 7.25 7.25 0 0 1-1.34-1.66c-.14-.24-.02-.37.1-.5.1-.1.24-.26.36-.4.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.24 1.02.38 1.37.48.58.18 1.1.15 1.51.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
                </svg>
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
                    className="eventos-mini-image"
                    key={eventosImages[eventoIndex]}
                    src={eventosImages[eventoIndex]}
                    alt={`Evento La Trufería ${eventoIndex + 1}`}
                    loading="lazy"
                    decoding="async"
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

      {lightbox && typeof document !== 'undefined' ? createPortal(lightbox, document.body) : null}
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

.eventos-copy .btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.eventos-whatsapp-icon {
  width: 0.98rem;
  height: 0.98rem;
  flex: 0 0 0.98rem;
  fill: currentColor;
}

.eventos-media {
  width: min(360px, 100%);
  justify-self: end;
  align-self: center;
}

.eventos-mini-carousel {
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(74, 42, 31, 0.14);
  box-shadow: var(--shadow-soft);
  aspect-ratio: 4 / 3;
  background: rgba(245, 236, 247, 0.7);
}

.eventos-mini-carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
  border-radius: inherit;
  display: block;
}

.eventos-image-open {
  appearance: none;
  -webkit-appearance: none;
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

.eventos-image-open .eventos-mini-image {
  transition: transform 0.32s ease, filter 0.32s ease;
  animation: eventoMiniReveal 0.35s ease;
}

.eventos-image-open:hover .eventos-mini-image {
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
  background: rgba(0, 0, 0, 0.94);
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  overscroll-behavior: contain;
  touch-action: none;
  animation: lightboxFadeIn 0.22s ease;
}

.eventos-carousel {
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  animation: lightboxPopIn 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}

@supports (height: 100dvh) {
  .eventos-carousel {
    height: 100dvh;
    max-height: 100dvh;
  }
}

.eventos-media-full {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  min-height: 0;
  padding: 0;
  box-sizing: border-box;
  touch-action: pan-y;
}

.eventos-carousel img {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.eventos-arrow,
.eventos-close {
  position: absolute;
  border: 0;
  border-radius: 999px;
  background: rgba(16, 16, 16, 0.45);
  color: #fff;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.28);
  border: 1px solid rgba(255, 255, 255, 0.26);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.eventos-arrow {
  width: 46px;
  height: 46px;
  font-size: 2.1rem;
  line-height: 1;
  top: 50%;
  transform: translateY(-50%);
  transition: background 0.2s ease, transform 0.2s ease;
}

.eventos-arrow.left {
  left: 1rem;
}

.eventos-arrow.right {
  right: 1rem;
}

.eventos-close {
  top: max(0.8rem, env(safe-area-inset-top));
  right: max(0.8rem, env(safe-area-inset-right));
  width: 42px;
  height: 42px;
  font-size: 1.9rem;
  line-height: 1;
}

.eventos-counter {
  position: absolute;
  left: 50%;
  bottom: max(0.8rem, env(safe-area-inset-bottom));
  transform: translateX(-50%);
  margin: 0;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.02em;
  background: rgba(16, 16, 16, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.24);
}

.eventos-arrow:hover {
  background: rgba(16, 16, 16, 0.62);
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

@keyframes eventoMiniReveal {
  from {
    opacity: 0.55;
    transform: scale(1.03);
  }
  to {
    opacity: 1;
    transform: scale(1);
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
}

@media (max-width: 760px) {
  .eventos-copy {
    padding: 0.7rem 0.4rem;
  }

  .eventos-media {
    width: 100%;
  }

  .eventos-mini-carousel {
    aspect-ratio: auto;
    height: clamp(250px, 62vw, 360px);
    min-height: 0;
  }

  .eventos-mini-carousel img {
    width: 100%;
    height: 100%;
  }

  .eventos-arrow {
    width: 40px;
    height: 40px;
    font-size: 1.8rem;
  }

  .eventos-carousel {
    width: 100%;
    padding: 0;
  }

  .eventos-arrow.left {
    left: calc(50% - 56px);
    top: auto;
    bottom: max(0.8rem, env(safe-area-inset-bottom));
    transform: none;
  }

  .eventos-arrow.right {
    right: calc(50% - 56px);
    top: auto;
    bottom: max(0.8rem, env(safe-area-inset-bottom));
    transform: none;
  }

  .eventos-close {
    width: 46px;
    height: 46px;
    font-size: 2rem;
    background: rgba(16, 16, 16, 0.72);
    border-color: rgba(255, 255, 255, 0.38);
  }

  .eventos-counter {
    bottom: max(4rem, calc(env(safe-area-inset-bottom) + 3.2rem));
  }
}
`;
