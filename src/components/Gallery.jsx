import { useEffect, useMemo, useRef, useState, useCallback } from 'react';

const galleryItems = [
  '/Images/MiniDonas/mindonas1.png',
  '/Images/Trufas/corazontrufas.png',
  '/Images/Tartas/tartas.png',
  '/Images/Trufas/trufasnavidad.png',
  '/Images/Trufas/trufas.jpg',
  '/Images/MiniDonas/mindonas2.png',
  '/Images/Tartas/tartaskiwi.png',
  '/Images/Trufas/trufasmix.png',
  '/Images/Trufas/trufaspink.png',
  '/Images/MiniDonas/minidonas.png',
  '/Images/Trufas/trufascorazon.png',
  '/Images/Trufas/trufasDiferentes.png',
  '/Images/Trufas/trufasPaquetes.png',
  '/Images/Trufas/trufaspinnksbox.png',
  '/Images/Trufas/trufrasSprinkles.png',
  '/Images/Tartas/tartacoffe.png',
  '/Images/Trufas/trufasConBesos.jpg',
  '/Images/Tartas/tartaGrande.png',
];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [carouselItems, setCarouselItems] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [columns, setColumns] = useState(3);

  const closeButtonRef = useRef(null);
  const lastTriggerRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchDeltaXRef = useRef(0);

  const isOpen = activeIndex >= 0;

  const collapsedCount = columns * 3;
  const visibleItems = useMemo(() => {
    return isExpanded ? galleryItems : galleryItems.slice(0, collapsedCount);
  }, [isExpanded, collapsedCount]);

  const closeCarousel = useCallback(() => {
    setActiveIndex(-1);
    setCarouselItems([]);
    window.setTimeout(() => {
      if (lastTriggerRef.current) lastTriggerRef.current.focus();
    }, 0);
  }, []);

  const openCarousel = useCallback(
      (index, triggerElement) => {
        lastTriggerRef.current = triggerElement || document.activeElement;
        setCarouselItems(visibleItems);
        setActiveIndex(index);
      },
      [visibleItems]
  );

  const showNext = useCallback(() => {
    if (!carouselItems.length) return;
    setActiveIndex((current) => (current + 1) % carouselItems.length);
  }, [carouselItems]);

  const showPrev = useCallback(() => {
    if (!carouselItems.length) return;
    setActiveIndex((current) => (current - 1 + carouselItems.length) % carouselItems.length);
  }, [carouselItems]);

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
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollBarCompensation = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollBarCompensation > 0) {
      document.body.style.paddingRight = `${scrollBarCompensation}px`;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeCarousel();
      if (event.key === 'ArrowRight') showNext();
      if (event.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.requestAnimationFrame(() => {
      if (closeButtonRef.current) closeButtonRef.current.focus();
    });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [isOpen, closeCarousel, showNext, showPrev]);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth <= 760) {
        setColumns(1);
        return;
      }
      if (window.innerWidth <= 1024) {
        setColumns(2);
        return;
      }
      setColumns(3);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const canToggle = galleryItems.length > collapsedCount;

  return (
      <>
        <style>{galleryStyles}</style>

        <section className="section section-tint" id="galeria">
          <div className="best-hero" role="img" aria-label="Galería de La Trufería">
            <div className="best-hero-overlay">
              <div className="best-hero-content">
                <h2 className="best-hero-title">Galería</h2>
                <p className="best-hero-subtitle">Ideal para regalos, mesas de postres y eventos.</p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="gallery-grid">
              {visibleItems.map((src, index) => (
                  <button
                      className="gallery-item"
                      key={`${src}-${index}`}
                      type="button"
                      onClick={(event) => openCarousel(index, event.currentTarget)}
                      aria-label={`Abrir imagen ${index + 1} de la galería`}
                  >
                    <img src={src} alt={`Postre La Trufería ${index + 1}`} loading="lazy" />
                  </button>
              ))}
            </div>

            {canToggle ? (
                <div className="gallery-toggle">
                  <button
                      type="button"
                      className="btn btn-ghost gallery-toggle-btn"
                      onClick={() => setIsExpanded((prev) => !prev)}
                      aria-expanded={isExpanded}
                      aria-controls="galeria"
                      disabled={isOpen}
                  >
                    {isExpanded ? 'Ver menos' : 'Ver más'}
                  </button>
                </div>
            ) : null}
          </div>
        </section>

        {isOpen && activeIndex >= 0 && activeIndex < carouselItems.length && (
            <div className="gallery-lightbox" role="dialog" aria-modal="true" onClick={closeCarousel}>
              <div className="gallery-carousel" onClick={(event) => event.stopPropagation()}>
                <button
                    className="carousel-close"
                    type="button"
                    ref={closeButtonRef}
                    onClick={closeCarousel}
                    aria-label="Cerrar carrusel"
                >
                  ×
                </button>

                <button className="carousel-arrow left" type="button" onClick={showPrev} aria-label="Imagen anterior">
                  ‹
                </button>

                <div
                    className="gallery-media"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                  <img src={carouselItems[activeIndex]} alt={`Postre La Trufería ${activeIndex + 1}`} />
                </div>

                <button className="carousel-arrow right" type="button" onClick={showNext} aria-label="Imagen siguiente">
                  ›
                </button>

                <p className="carousel-counter">
                  {activeIndex + 1} / {carouselItems.length}
                </p>
              </div>
            </div>
        )}
      </>
  );
}

export default Gallery;

const galleryStyles = `
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;
}

.gallery-toggle {
  margin-top: 0.9rem;
  display: flex;
  justify-content: center;
}

.gallery-toggle-btn {
  position: relative;
  overflow: hidden;
  min-width: 136px;
  border-color: rgba(199, 160, 214, 0.48);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(245, 236, 247, 0.92), rgba(255, 249, 252, 0.96));
  background-size: 180% 180%;
  transition: transform 0.2s ease, box-shadow 0.25s ease, border-color 0.25s ease, background-position 0.35s ease;
  animation: magicFloat 3.8s ease-in-out infinite;
}

.gallery-toggle-btn::before {
  content: '';
  position: absolute;
  inset: -140% 52% -140% -120%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.7), transparent);
  transform: rotate(22deg);
  transition: transform 0.5s ease;
  pointer-events: none;
}

.gallery-toggle-btn::after {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: radial-gradient(circle at 20% 20%, rgba(236, 214, 242, 0.34), transparent 52%),
    radial-gradient(circle at 80% 80%, rgba(255, 240, 246, 0.32), transparent 48%);
  opacity: 0.72;
  pointer-events: none;
  mix-blend-mode: screen;
}

.gallery-toggle-btn:hover {
  transform: translateY(-2px);
  border-color: rgba(199, 160, 214, 0.66);
  box-shadow: 0 0 0 2px rgba(226, 196, 236, 0.26), 0 14px 24px rgba(74, 42, 31, 0.12);
  background-position: 100% 0;
}

.gallery-toggle-btn:hover::before {
  transform: translateX(165%) rotate(22deg);
}

.gallery-toggle-btn:active {
  transform: translateY(0);
}

@keyframes magicFloat {
  0%, 100% { box-shadow: 0 8px 16px rgba(74, 42, 31, 0.08); }
  50% { box-shadow: 0 12px 22px rgba(74, 42, 31, 0.12); }
}

.gallery-item {
  position: relative;
  margin: 0;
  overflow: hidden;
  border-radius: 22px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
  aspect-ratio: 4 / 3;
  cursor: zoom-in;
  padding: 0;
  background: transparent;
}

.gallery-item::after {
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

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease, filter 0.35s ease;
  display: block;
}

.gallery-item:hover img {
  transform: scale(1.04);
  filter: saturate(1.05);
}

.gallery-item:hover::after,
.gallery-item:focus-visible::after {
  opacity: 1;
  transform: translateY(0);
}

.gallery-item:focus-visible {
  outline: 3px solid rgba(255, 255, 255, 0.85);
  outline-offset: -3px;
}

.gallery-lightbox {
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
}

.gallery-carousel {
  width: 100%;
  height: 100vh;   
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}
@supports (height: 100dvh) {
  .gallery-carousel {
    height: 100dvh;
    max-height: 100dvh;
  }
}

.gallery-media {
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
.gallery-carousel img {
  display: block;
  width: auto;
  height: auto;

  max-width: 100%;
  max-height: 100%;

  object-fit: contain;
}

.carousel-arrow,
.carousel-close {
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

.carousel-arrow {
  width: 46px;
  height: 46px;
  font-size: 2.1rem;
  line-height: 1;
  top: 50%;
  transform: translateY(-50%);
  transition: background 0.2s ease, transform 0.2s ease;
}

.carousel-arrow.left { left: 1rem; }
.carousel-arrow.right { right: 1rem; }

.carousel-close {
  top: max(0.8rem, env(safe-area-inset-top));
  right: max(0.8rem, env(safe-area-inset-right));
  width: 42px;
  height: 42px;
  font-size: 1.9rem;
  line-height: 1;
}

.carousel-counter {
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

.carousel-arrow:hover {
  background: rgba(16, 16, 16, 0.62);
}

@keyframes lightboxFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes lightboxPopIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .gallery-lightbox,
  .gallery-carousel,
  .gallery-item img,
  .gallery-item::after {
    animation: none;
    transition: none;
  }
}

@media (max-width: 1024px) {
  .gallery-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 760px) {
  .gallery-grid { grid-template-columns: 1fr; }

  .gallery-item {
    min-height: 220px;
    background: transparent;
  }

  .gallery-item img {
    object-fit: cover;
    object-position: center;
  }

  .carousel-arrow { display: none; }
}
`;
