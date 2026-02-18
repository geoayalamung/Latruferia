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
  const isOpen = activeIndex !== null;

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

  return (
    <>
      <style>{galleryStyles}</style>
      <section className="section section-tint" id="galeria">
        <div className="container">
          <div className="section-head compact-head">
            <h2>Galería</h2>
            <p>Ideal para regalos, mesas de postres y eventos.</p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
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
}

.gallery-carousel img {
  width: 100%;
  max-height: 82vh;
  object-fit: contain;
  border-radius: 16px;
  background: #fff;
}

.carousel-arrow,
.carousel-close {
  position: absolute;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: var(--choco-900);
  cursor: pointer;
  box-shadow: var(--shadow-soft);
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
