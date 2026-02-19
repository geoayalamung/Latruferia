const bestSellers = [
  {
    title: "Trufas Surtidas",
    description: "Chocolate suave con sabores clásicos: Oreo, Pay de limón, Nutella y Coco.",
    price: "$7 c/u",
    image: "/Images/Trufas/trufas.jpg",
    badge: "Recomendado",
    tone: "pink", // sprinkle accent
  },
  {
    title: "Mini donitas rellenas",
    description: "Tiernas, cubiertas de chocolate y perfectas para compartir.",
    price: "$5 c/u",
    image: "/Images/MiniDonas/mindonas2.png",
    badge: "Recomendado",
    tone: "blue",
  },
  {
    title: "Tarta con fruta grande",
    description: "Presentación premium para celebraciones especiales.",
    price: "$450",
    image: "/Images/Tartas/tarta.png",
    badge: "Recomendado",
    tone: "yellow",
  },
];

function BestSellers() {
  const onQuickOrder = (item) => {
    // Solo UX por ahora (puedes conectarlo después)
    // Ej: abrir WhatsApp con mensaje prellenado
    // window.open(`https://wa.me/52XXXXXXXXXX?text=${encodeURIComponent(`Hola La Trufería, quiero pedir: ${item.title}`)}`, "_blank");
  };

  return (
      <>
        <style>{bestSellersStyles}</style>

        <section className="section" id="best-sellers">
          <div className="best-hero" role="img" aria-label="Bestsellers de La Trufería">
            <div className="best-hero-overlay">
              <div className="best-hero-content">
                <h2 className="best-hero-title">Los Favoritos</h2>
                <p className="best-hero-subtitle">
                  Los favoritos que siempre se agotan primero.
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="best-marketing">
              <p className="best-marketing-copy">
                Elige uno de los favoritos y confirma tu pedido por WhatsApp en minutos.
              </p>
              <a href="#pedidos" className="best-marketing-link">Pedir favoritos</a>
            </div>

            <div className="best-grid" role="list" aria-label="Productos favoritos">
              {bestSellers.map((item) => (
                  <article className="best-card" role="listitem" key={item.title}>
                    <div className="best-image-wrap">
                      <img src={item.image} alt={item.title} className="best-image" loading="lazy" />
                      <div className="best-overlay" aria-hidden="true" />

                      {item.badge ? (
                          <span className={`best-badge best-badge-${item.tone}`}>{item.badge}</span>
                      ) : null}

                      <div className="best-top-meta">
                        <span className="price-pill">{item.price}</span>
                      </div>
                    </div>

                    <div className="best-body">
                      <div className="best-body-head">
                        <h4>{item.title}</h4>
                      </div>

                      <p>{item.description}</p>

                    </div>
                  </article>
              ))}
            </div>
          </div>
        </section>
      </>
  );
}

export default BestSellers;

const bestSellersStyles = `
.best-hero {
  position: relative;
  height: min(26vw, 170px);
  min-height: 130px;
  width: min(1160px, calc(100% - 2.2rem));
  margin: 0 auto 1rem;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(74,42,31,0.14);
  box-shadow: var(--shadow-soft);
  background-color: #f8f3f8;
  background-image:
    repeating-linear-gradient(
      45deg,
      rgba(236, 221, 241, 0.45) 0 34px,
      rgba(250, 246, 248, 0.75) 34px 68px
    ),
    repeating-linear-gradient(
      -45deg,
      rgba(240, 228, 244, 0.3) 0 34px,
      rgba(253, 249, 252, 0.72) 34px 68px
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.36), rgba(248, 241, 247, 0.22));
  background-repeat: repeat;
  background-size: auto;
  background-blend-mode: multiply, multiply, normal;
}

.best-hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.3) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(0.9rem, 2.2vw, 1.25rem) 1rem;
}

.best-hero-content {
  text-align: center;
  display: grid;
  gap: clamp(0.38rem, 1.2vw, 0.55rem);
  max-width: 900px;
  padding-block: clamp(0.15rem, 0.8vw, 0.4rem);
}

.best-hero-title {
  display: inline-block;
  margin: 0 auto;
  color: var(--choco-900);
  font-size: clamp(1.5rem, 4vw, 2.8rem);
  font-family: var(--font-title);
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.04;
  padding: 0.38rem 0.95rem 0.48rem;
  border: 4px dotted var(--lavender-300);
  border-radius: 999px;
  background: rgba(255,255,255,0.72);
}

.best-hero-subtitle {
  margin: 0;
  color: var(--choco-800);
  font-size: clamp(0.92rem, 2vw, 1.2rem);
  font-weight: 700;
}

.best-hero-pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

.best-hero-pill {
  background: rgba(255,255,255,0.58);
  backdrop-filter: blur(5px);
  color: var(--choco-900);
  border: 1px solid rgba(74,42,31,0.15);
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 700;
}

.best-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--choco-800);
  font-weight: 800;
  margin-bottom: 0.35rem;
}

.best-kicker-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  border: 1px solid rgba(74,42,31,0.16);
  background: radial-gradient(circle at 30% 30%, var(--sprinkle-pink), var(--lavender-200));
  box-shadow: var(--shadow-soft);
}

.best-title {
  margin: 0;
  color: var(--choco-900);
  letter-spacing: -0.02em;
}

.best-subtitle {
  margin: 0.45rem 0 0;
  color: var(--muted);
  max-width: 72ch;
}

/* Grid desktop */
.best-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.best-marketing {
  margin-top: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.85rem;
  padding: 0.9rem 1rem;
  border-radius: 16px;
  border: 1px solid rgba(74,42,31,0.14);
  background: linear-gradient(120deg, rgba(255,255,255,0.88), rgba(245,236,247,0.7));
  box-shadow: var(--shadow-soft);
}

.best-marketing-copy {
  margin: 0;
  color: var(--choco-800);
  font-size: 0.95rem;
  line-height: 1.4;
  max-width: 54ch;
}

.best-marketing-link {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  border: 1px solid rgba(74,42,31,0.16);
  background: linear-gradient(120deg, var(--lavender-100), rgba(255,248,251,0.96));
  color: var(--choco-900);
  font-weight: 800;
}

.best-card {
  background: var(--surface);
  border: 1px solid rgba(74,42,31,0.12);
  border-radius: 26px;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.best-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lift);
  border-color: rgba(74,42,31,0.18);
}

.best-image-wrap {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(245,236,247,0.65), rgba(255,255,255,0.95));
}

.best-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.01);
  transition: transform 0.35s ease;
}

.best-card:hover .best-image {
  transform: scale(1.06);
}

/* Overlay editorial (para “antojable”) */
.best-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 0%, rgba(255,255,255,0.28), transparent 45%),
    linear-gradient(180deg, rgba(0,0,0,0.00) 35%, rgba(74,42,31,0.22) 100%);
  pointer-events: none;
}

/* Badge tipo sprinkle */
.best-badge {
  position: absolute;
  left: 0.85rem;
  top: 0.85rem;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.22rem 0.6rem;
  border-radius: 999px;
  border: 1px solid rgba(74,42,31,0.14);
  font-weight: 900;
  font-size: 0.78rem;
  color: var(--choco-900);
  background: rgba(255,255,255,0.88);
  box-shadow: var(--shadow-soft);
}

.best-badge::before {
  content: "";
  width: 9px;
  height: 9px;
  border-radius: 999px;
  border: 1px solid rgba(74,42,31,0.14);
  background: var(--lavender-200);
}

.best-badge-pink::before { background: var(--sprinkle-pink); }
.best-badge-blue::before { background: var(--sprinkle-blue); }
.best-badge-yellow::before { background: var(--sprinkle-yellow); }

/* Price pill arriba a la derecha */
.best-top-meta {
  position: absolute;
  right: 0.85rem;
  top: 0.85rem;
  z-index: 2;
}

.price-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.22rem 0.6rem;
  border-radius: 999px;
  border: 1px solid rgba(74,42,31,0.14);
  background: linear-gradient(120deg, rgba(255,255,255,0.92), rgba(245,236,247,0.68));
  color: var(--choco-900);
  font-weight: 900;
  font-size: 0.85rem;
  box-shadow: var(--shadow-soft);
}

.best-body {
  padding: 1rem 1rem 1.05rem;
}

.best-body h4 {
  margin: 0;
  color: var(--choco-900);
  letter-spacing: -0.01em;
}

.best-body p {
  margin: 0.55rem 0 0.9rem;
  color: var(--muted);
  line-height: 1.45;
}

.best-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.best-cta {
  appearance: none;
  border: 1px solid rgba(74,42,31,0.16);
  background: linear-gradient(120deg, var(--lavender-100), rgba(255,248,251,0.95));
  color: var(--choco-900);
  font: inherit;
  font-weight: 900;
  border-radius: 999px;
  padding: 0.42rem 0.72rem;
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.best-cta:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-soft);
}

.best-cta:focus-visible {
  outline: 3px solid rgba(199,160,214,0.45);
  outline-offset: 2px;
}

.best-hint {
  color: var(--choco-800);
  font-size: 0.82rem;
  font-weight: 800;
  opacity: 0.9;
}

/* Responsive: 2 cols tablet */
@media (max-width: 1024px) {
  .best-grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* Mobile: carrusel horizontal (más Wix / IG) */
@media (max-width: 760px) {
  .best-hero {
    width: min(1160px, calc(100% - 1.3rem));
    min-height: 128px;
    border-radius: 18px;
  }

  .best-hero-content {
    gap: 0.42rem;
    padding-inline: 0.3rem;
  }

  .best-hero-title {
    font-size: clamp(1.26rem, 8vw, 1.72rem);
    padding: 0.3rem 0.7rem 0.38rem;
    border-width: 3px;
  }

  .best-hero-subtitle {
    font-size: 0.9rem;
    max-width: 29ch;
    margin: 0 auto;
  }

  .best-marketing {
    flex-direction: column;
    align-items: stretch;
    gap: 0.65rem;
    padding: 0.78rem 0.85rem;
    margin-top: 0.8rem;
  }

  .best-marketing-copy {
    font-size: 0.88rem;
    text-align: center;
  }

  .best-marketing-link {
    width: 100%;
    min-height: 42px;
  }

  .best-hero-pill {
    font-size: 0.76rem;
    padding: 0.36rem 0.62rem;
  }

  .best-image-wrap {
    aspect-ratio: 5 / 4;
    background: linear-gradient(180deg, rgba(248, 241, 247, 0.88), rgba(255, 255, 255, 0.96));
  }

  .best-image {
    object-fit: cover;
    object-position: center;
    transform: none;
  }

  .best-grid {
    grid-template-columns: 1fr;
    display: grid;
    gap: 0.75rem;
  }

  .best-card {
    border-radius: 20px;
  }

  .best-badge,
  .price-pill {
    font-size: 0.74rem;
  }

  .best-body {
    padding: 0.82rem 0.85rem 0.9rem;
  }

  .best-body h4 {
    font-size: 1rem;
  }

  .best-body p {
    margin-top: 0.46rem;
    margin-bottom: 0;
    font-size: 0.9rem;
    line-height: 1.4;
  }
}

/* Reduce motion */
@media (prefers-reduced-motion: reduce) {
  .best-card,
  .best-image,
  .best-cta {
    transition: none !important;
  }
}
`;
