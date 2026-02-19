import { useEffect, useState } from 'react';

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
    'public/Images/Trufas/trufascorazon.png',
  '/Images/Trufas/trufasDiferentes.png',
  '/Images/Trufas/trufasPaquetes.png',
    'public/Images/Trufas/trufaspinnksbox.png',
    'public/Images/Trufas/trufrasSprinkles.png',
    'public/Images/Tartas/tartacoffe.png',
    'public/Images/Trufas/trufasConBesos.jpg',
    'public/Images/Tartas/tartaGrande.png',

];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [columns, setColumns] = useState(3);
  const isOpen = activeIndex !== null;
  const collapsedCount = columns * 3;
  const visibleItems = isExpanded ? galleryItems : galleryItems.slice(0, collapsedCount);
  const canToggle = galleryItems.length > collapsedCount;

  const closeCarousel = () => setActiveIndex(null);
  const openCarousel = (index) => setActiveIndex(index);
  const showNext = () => {
    setActiveIndex((current) => (current + 1) % galleryItems.length);
  };
  const showPrev = () => {
    setActiveIndex((current) => (current - 1 + galleryItems.length) % galleryItems.length);
  };

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

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

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

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

  return (
    <>
      <style>{galleryStyles}</style>
      <section className="section section-tint" id="galeria">
        <div className="best-hero" role="img" aria-label="Galería de La Trufería">
          <div className="best-hero-overlay">
            <div className="best-hero-content">
              <h2 className="best-hero-title">Galeria</h2>
              <p className="best-hero-subtitle">Ideal para regalos, mesas de postres y eventos.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="gallery-grid">
            {visibleItems.map((item, index) => (
              <button
                className="gallery-item"
                key={`${item}-${index}`}
                type="button"
                onClick={() => openCarousel(index)}
                aria-label={`Abrir imagen ${index + 1} de la galería`}
              >
                <img src={item} alt={`Postre La Trufería ${index + 1}`} loading="lazy" />
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
              >
                {isExpanded ? 'Ver menos' : 'Ver más'}
              </button>
            </div>
          ) : null}
        </div>
      </section>

      {isOpen && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" onClick={closeCarousel}>
          <div className="gallery-carousel" onClick={(event) => event.stopPropagation()}>
            <button
              className="carousel-close"
              type="button"
              onClick={closeCarousel}
              aria-label="Cerrar carrusel"
            >
              ×
            </button>
            <button className="carousel-arrow left" type="button" onClick={showPrev} aria-label="Imagen anterior">
              ‹
            </button>
            <img src={galleryItems[activeIndex]} alt={`Postre La Trufería ${activeIndex + 1}`} />
            <button className="carousel-arrow right" type="button" onClick={showNext} aria-label="Imagen siguiente">
              ›
            </button>
            <p className="carousel-counter">
              {activeIndex + 1} / {galleryItems.length}
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
  0%, 100% {
    box-shadow: 0 8px 16px rgba(74, 42, 31, 0.08);
  }
  50% {
    box-shadow: 0 12px 22px rgba(74, 42, 31, 0.12);
  }
}

.gallery-item {
  position: relative;
  margin: 0;
  overflow: hidden;
  border-radius: 22px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
  aspect-ratio: 4 / 3;
  cursor: pointer;
  padding: 0;
  background: transparent;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.gallery-item:hover img {
  transform: scale(1.04);
}

.gallery-lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.82);
  display: grid;
  place-items: center;
  z-index: 999;
  padding: 1rem;
}

.gallery-carousel {
  position: relative;
  width: min(980px, 100%);
  max-height: 92vh;
  display: grid;
  place-items: center;
  padding: 0.85rem;
  border-radius: 20px;
  background: rgba(255, 248, 251, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.gallery-carousel img {
  width: 100%;
  max-height: 82vh;
  object-fit: contain;
  border-radius: 16px;
  background: transparent;
}

.carousel-arrow,
.carousel-close {
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

.carousel-arrow {
  width: 44px;
  height: 44px;
  font-size: 2rem;
  line-height: 1;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-arrow.left {
  left: 0.7rem;
}

.carousel-arrow.right {
  right: 0.7rem;
}

.carousel-close {
  top: 0.6rem;
  right: 0.6rem;
  width: 38px;
  height: 38px;
  font-size: 1.6rem;
  line-height: 1;
}

.carousel-counter {
  margin: 0.7rem 0 0;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.02em;
}

@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 760px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .gallery-item {
    min-height: 220px;
    background: linear-gradient(180deg, rgba(248, 241, 247, 0.9), rgba(255, 255, 255, 0.95));
  }

  .gallery-item img {
    object-fit: contain;
    object-position: center;
  }

  .carousel-arrow {
    width: 40px;
    height: 40px;
    font-size: 1.8rem;
  }

  .carousel-arrow.left {
    left: 0.3rem;
  }

  .carousel-arrow.right {
    right: 0.3rem;
  }
}


`;
